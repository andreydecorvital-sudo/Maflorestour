/** Cloudflare Worker entry point for the vinext-starter template. */
import { handleImageOptimization, DEFAULT_DEVICE_SIZES, DEFAULT_IMAGE_SIZES } from "vinext/server/image-optimization";
import handler from "vinext/server/app-router-entry";

interface Env {
  ASSETS: Fetcher;
  DB: D1Database;
  IMAGES: {
    input(stream: ReadableStream): {
      transform(options: Record<string, unknown>): {
        output(options: { format: string; quality: number }): Promise<{ response(): Response }>;
      };
    };
  };
}

interface ExecutionContext {
  waitUntil(promise: Promise<unknown>): void;
  passThroughOnException(): void;
}

type LeadPayload = {
  name?: unknown;
  email?: unknown;
  whatsapp?: unknown;
  company?: unknown;
};

function clean(value: unknown, limit: number) {
  return typeof value === "string" ? value.trim().slice(0, limit) : "";
}

const allowedLeadOrigins = new Set([
  "https://maflorestour.vercel.app",
  "https://maflorestour.times-herders-0eadpj.chatgpt.site",
]);

function leadCorsHeaders(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin || !allowedLeadOrigins.has(origin)) return {};
  return {
    "access-control-allow-origin": origin,
    "access-control-allow-methods": "POST, OPTIONS",
    "access-control-allow-headers": "content-type",
    "vary": "Origin",
  };
}

function leadResponse(request: Request, body: { ok: true } | { error: string }, status: number) {
  return Response.json(body, { status, headers: leadCorsHeaders(request) });
}

async function handleOfferLead(request: Request, env: Env): Promise<Response> {
  try {
    const payload = await request.json() as LeadPayload;
    const company = clean(payload.company, 120);

    if (company) {
      return leadResponse(request, { ok: true }, 201);
    }

    const name = clean(payload.name, 100);
    const email = clean(payload.email, 180).toLowerCase();
    const whatsapp = clean(payload.whatsapp, 32);
    const whatsappDigits = whatsapp.replace(/\D/g, "");

    if (name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || whatsappDigits.length < 10 || whatsappDigits.length > 15) {
      return leadResponse(request, { error: "Confira nome, e-mail e WhatsApp." }, 400);
    }

    await env.DB.prepare(`
      CREATE TABLE IF NOT EXISTS offer_leads (
        id TEXT PRIMARY KEY NOT NULL,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        whatsapp TEXT NOT NULL,
        created_at INTEGER NOT NULL
      )
    `).run();

    await env.DB.prepare(`
      INSERT INTO offer_leads (id, name, email, whatsapp, created_at)
      VALUES (?, ?, ?, ?, ?)
    `).bind(crypto.randomUUID(), name, email, whatsapp, Date.now()).run();

    return leadResponse(request, { ok: true }, 201);
  } catch {
    return leadResponse(request, { error: "Não foi possível salvar o contato." }, 500);
  }
}

// Image security config. SVG sources with .svg extension auto-skip the
// optimization endpoint on the client side (served directly, no proxy).
// To route SVGs through the optimizer (with security headers), set
// dangerouslyAllowSVG: true in next.config.js and uncomment below:
// const imageConfig: ImageConfig = { dangerouslyAllowSVG: true };

const worker = {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/_vinext/image") {
      const allowedWidths = [...DEFAULT_DEVICE_SIZES, ...DEFAULT_IMAGE_SIZES];
      return handleImageOptimization(request, {
        fetchAsset: (path) => env.ASSETS.fetch(new Request(new URL(path, request.url))),
        transformImage: async (body, { width, format, quality }) => {
          const result = await env.IMAGES.input(body).transform(width > 0 ? { width } : {}).output({ format, quality });
          return result.response();
        },
      }, allowedWidths);
    }

    if (url.pathname === "/api/offers" && request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: leadCorsHeaders(request) });
    }

    if (url.pathname === "/api/offers" && request.method === "POST") {
      return handleOfferLead(request, env);
    }

    return handler.fetch(request, env, ctx);
  },
};

export default worker;
