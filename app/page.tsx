"use client";

import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" role="img" aria-label="WhatsApp">
      <path fill="currentColor" d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.66.15-.2.3-.76.97-.93 1.17-.17.2-.34.22-.64.07-.3-.15-1.25-.46-2.38-1.47a8.92 8.92 0 0 1-1.65-2.06c-.17-.3-.02-.46.13-.61.14-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.66-1.6-.91-2.19-.24-.58-.48-.5-.66-.51h-.56c-.2 0-.51.07-.78.37-.27.3-1.03 1-1.03 2.44s1.05 2.83 1.2 3.03c.15.2 2.07 3.17 5.02 4.44.7.3 1.25.48 1.67.62.7.22 1.34.19 1.85.12.56-.08 1.76-.72 2-1.42.25-.7.25-1.3.18-1.42-.08-.13-.27-.2-.57-.35m-5.42 7.58h-.01a9.84 9.84 0 0 1-5.01-1.37l-.36-.21-3.73.98 1-3.63-.23-.37A9.81 9.81 0 0 1 2.2 12C2.2 6.58 6.61 2.17 12.04 2.17A9.84 9.84 0 0 1 21.87 12c0 5.42-4.41 9.83-9.83 9.83m8.37-18.2A11.75 11.75 0 0 0 12.05.3C5.54.3.25 5.59.25 12.1c0 2.08.54 4.1 1.58 5.87L.15 24.1l6.27-1.64a11.78 11.78 0 0 0 5.62 1.43h.01c6.5 0 11.8-5.29 11.8-11.79 0-3.15-1.22-6.11-3.45-8.34" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" role="img" aria-label="Instagram">
      <rect x="3" y="3" width="18" height="18" rx="5.3" fill="none" stroke="currentColor" strokeWidth="2.2" />
      <circle cx="12" cy="12" r="4.15" fill="none" stroke="currentColor" strokeWidth="2.2" />
      <circle cx="17.45" cy="6.65" r="1.25" fill="currentColor" />
    </svg>
  );
}

const offersEndpoint = "https://maflorestour.times-herders-0eadpj.chatgpt.site/api/offers";
const whatsappNumber = "5511949780458";
const whatsappDisplay = "(11) 94978-0458";
const instagramUrl = "https://www.instagram.com/maflorestour/";

const opportunities = [
  {
    place: "Maceió",
    title: "Maceió inesquecível",
    landmark: "Ponta Verde • Maceió, AL",
    meta: "7 dias",
    includes: "Aéreo + hotel + transfer",
    note: "Praia, descanso e um roteiro que pode ser adaptado ao seu perfil.",
    accent: "Sol & mar",
    image: "https://images.unsplash.com/photo-1626794467452-937f5100a9f5?auto=format&fit=crop&w=1600&q=82",
    imageAlt: "Mar e faixa de areia em Ponta Verde, Maceió",
  },
  {
    place: "Buenos Aires",
    title: "Buenos Aires a dois",
    landmark: "Obelisco • Buenos Aires, Argentina",
    meta: "4 noites",
    includes: "Aéreo + hotel selecionado",
    note: "Gastronomia, cultura e experiências românticas para viver sem pressa.",
    accent: "Internacional",
    image: "https://images.unsplash.com/photo-1745409927264-0db48faf407b?auto=format&fit=crop&w=1600&q=82",
    imageAlt: "Obelisco de Buenos Aires sob o céu azul",
  },
  {
    place: "Gramado",
    title: "Gramado em família",
    landmark: "Lago Negro • Gramado, RS",
    meta: "5 noites",
    includes: "Hotel + roteiro de passeios",
    note: "Dias bem organizados, com atrações e tempo livre para toda a família.",
    accent: "Serra gaúcha",
    image: "https://images.unsplash.com/photo-1667401763451-b111aa18fe5e?auto=format&fit=crop&w=1600&q=82",
    imageAlt: "Pedalinhos em formato de cisne no Lago Negro, em Gramado",
  },
];

const processSteps = [
  ["01", "Conte o que imagina", "Pode ser um destino, uma data ou apenas o tipo de experiência que você quer viver."],
  ["02", "Receba uma proposta", "A Maflores pesquisa, organiza e apresenta as opções que mais combinam com você."],
  ["03", "Viaje com suporte", "Depois de ajustar os detalhes, você embarca com tudo organizado e ajuda por perto."],
];

export default function Home() {
  const [offerOpen, setOfferOpen] = useState(false);
  const [leadStatus, setLeadStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  useEffect(() => {
    if (window.localStorage.getItem("maflores-offers-seen")) return;
    const timer = window.setTimeout(() => setOfferOpen(true), 650);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!offerOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeOffers();
    };
    document.body.classList.add("modal-open");
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [offerOpen]);

  function openWhatsapp(message: string) {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  function closeOffers() {
    window.localStorage.setItem("maflores-offers-seen", "true");
    setOfferOpen(false);
  }

  function talkAboutOpportunity(title: string) {
    openWhatsapp([
      "Olá, Maflores Tour!",
      `Tenho interesse em ${title} e gostaria de entender as opções.`,
      "Ainda não tenho todos os detalhes definidos.",
    ].join("\n"));
  }

  async function submitLead(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLeadStatus("sending");
    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(offersEndpoint, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          whatsapp: data.get("whatsapp"),
          company: data.get("company"),
        }),
      });

      if (!response.ok) throw new Error("Não foi possível salvar o contato.");
      setLeadStatus("success");
      window.localStorage.setItem("maflores-offers-seen", "true");
      form.reset();
    } catch {
      setLeadStatus("error");
    }
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Maflores Tour — início">
          <Image src="/brand/maflores-logo.png" width={2048} height={578} priority unoptimized alt="Maflores Tour — Invista em memórias" />
        </a>
        <nav aria-label="Navegação principal">
          <a href="#destinos">Destinos</a>
          <a href="#sobre">Nossa história</a>
          <a href="#como-funciona">Como funciona</a>
        </nav>
        <button className="header-button" type="button" onClick={() => openWhatsapp("Olá, Maflores Tour! Quero ajuda para planejar minha próxima viagem.")}>
          Planejar minha viagem
        </button>
      </header>

      <section className="hero" id="inicio">
        <video className="hero-video desktop-video" autoPlay muted playsInline preload="metadata" aria-hidden="true">
          <source src="/media/hero-desktop.mp4" type="video/mp4" />
        </video>
        <video className="hero-video mobile-video" autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
          <source src="/media/hero-mobile.mp4" type="video/mp4" />
        </video>
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow">Viagens pensadas para você</p>
          <h1>Sua próxima viagem começa do seu jeito.</h1>
          <p className="hero-copy">Roteiros personalizados, escolhas cuidadosas e suporte humano em cada etapa.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#destinos">Ver destinos <span aria-hidden="true">→</span></a>
            <button className="button button-outline" type="button" onClick={() => openWhatsapp("Olá, Maflores Tour! Quero começar a planejar minha próxima viagem.")}>
              Falar com a Maflores <span aria-hidden="true">↗</span>
            </button>
          </div>
        </div>
        <div className="trust-strip" aria-label="Diferenciais da Maflores Tour">
          <span><b>Roteiro personalizado</b><small>para seu momento e orçamento</small></span>
          <span><b>Atendimento humano</b><small>antes, durante e depois</small></span>
          <span><b>Tudo organizado</b><small>menos pesquisa, mais tranquilidade</small></span>
        </div>
      </section>

      <section className="destinations" id="destinos">
        <div className="section-heading">
          <div>
            <p className="eyebrow dark">Ideias para começar</p>
            <h2>Destinos que despertam vontade de ir.</h2>
          </div>
          <p>Escolha uma inspiração. Datas, hospedagem, duração, passeios e cidade de embarque podem ser personalizados.</p>
        </div>

        <div className="destination-grid">
          {opportunities.map((item, index) => (
            <article className="destination-card" key={item.place}>
              <div className="destination-media">
                <Image src={item.image} width={1600} height={1100} alt={item.imageAlt} loading="lazy" unoptimized />
                <div className="destination-media-shade" />
                <span className="destination-index">0{index + 1}</span>
                <span className="destination-landmark">{item.landmark}</span>
              </div>
              <div className="destination-content">
                <span className="destination-tag">{item.accent}</span>
                <h3>{item.title}</h3>
                <p>{item.note}</p>
                <div className="package-summary">
                  <span>{item.meta}</span>
                  <strong>{item.includes}</strong>
                  <small>Valores, datas e embarque sob consulta</small>
                </div>
                <button className="button card-button" type="button" onClick={() => talkAboutOpportunity(item.title)}>
                  Quero conhecer este roteiro <span aria-hidden="true">→</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="story" id="sobre">
        <div className="story-media">
          <video autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
            <source src="/media/couple.mp4" type="video/mp4" />
          </video>
          <span>Invista em<br /><strong>memórias.</strong></span>
        </div>
        <div className="story-copy">
          <p className="eyebrow">Nossa história</p>
          <h2>Mais cuidado. Menos complicação.</h2>
          <p>A Maflores existe para transformar a parte cansativa de planejar uma viagem em uma experiência leve. Cada roteiro começa com uma conversa, passa por escolhas feitas com atenção e termina com a tranquilidade de ter alguém por perto.</p>
          <p>Você não recebe apenas reservas. Recebe uma viagem organizada de acordo com seu estilo, orçamento e momento de vida.</p>
          <button className="button button-primary story-button" type="button" onClick={() => openWhatsapp("Olá, Maflores Tour! Quero conhecer melhor o atendimento e planejar uma viagem.")}>
            Conversar sobre minha viagem <span aria-hidden="true">→</span>
          </button>
        </div>
      </section>

      <section className="process" id="como-funciona">
        <div className="section-heading">
          <div>
            <p className="eyebrow dark">Simples do início ao fim</p>
            <h2>Da primeira ideia ao embarque.</h2>
          </div>
          <p>Você não precisa chegar com tudo decidido. A Maflores ajuda a construir o caminho.</p>
        </div>
        <div className="steps">
          {processSteps.map(([number, title, copy]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <div>
          <p className="eyebrow">Sua próxima memória pode começar agora</p>
          <h2>Vamos encontrar a viagem certa para você?</h2>
        </div>
        <div className="final-actions">
          <button className="button button-primary" type="button" onClick={() => openWhatsapp("Olá, Maflores Tour! Quero ajuda para escolher minha próxima viagem.")}>
            Falar no WhatsApp <span aria-hidden="true">↗</span>
          </button>
          <button className="button button-light" type="button" onClick={() => { setLeadStatus("idle"); setOfferOpen(true); }}>
            Quero receber ofertas <span aria-hidden="true">→</span>
          </button>
        </div>
      </section>

      <footer className="site-footer" id="contato">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#inicio" aria-label="Maflores Tour — voltar ao início">
              <Image src="/brand/maflores-logo.png" width={2048} height={578} unoptimized alt="Maflores Tour — Invista em memórias" />
            </a>
            <p>Viagens pensadas para você, cuidadas em cada detalhe.</p>
            <span>Atendimento humano antes, durante e depois da viagem.</span>
          </div>

          <div className="footer-column">
            <h3>Explore</h3>
            <a href="#destinos">Destinos e roteiros</a>
            <a href="#sobre">Nossa história</a>
            <a href="#como-funciona">Como funciona</a>
            <button type="button" onClick={() => { setLeadStatus("idle"); setOfferOpen(true); }}>
              Receber ofertas
            </button>
          </div>

          <div className="footer-column footer-contact">
            <h3>Fale com a Maflores</h3>
            <a
              className="footer-contact-link"
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá, Maflores Tour! Quero ajuda para planejar minha próxima viagem.")}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Conversar com a Maflores no WhatsApp ${whatsappDisplay}`}
            >
              <span className="footer-icon footer-icon-whatsapp"><WhatsAppIcon /></span>
              <span><small>WhatsApp comercial</small><strong>{whatsappDisplay}</strong></span>
            </a>
            <p>Conte sua ideia, mesmo que ainda não tenha destino ou data definidos.</p>
          </div>

          <div className="footer-column footer-social">
            <h3>Acompanhe</h3>
            <a
              className="footer-contact-link"
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar Instagram da Maflores Tour"
            >
              <span className="footer-icon footer-icon-instagram"><InstagramIcon /></span>
              <span><small>Instagram</small><strong>@maflorestour</strong></span>
            </a>
            <p>Inspirações, oportunidades e novidades para sua próxima viagem.</p>
          </div>
        </div>

        <div className="footer-bottom">
          <small>© 2026 Maflores Tour. Todos os direitos reservados.</small>
          <span>Invista em memórias.</span>
          <a href="#inicio">Voltar ao topo <span aria-hidden="true">↑</span></a>
        </div>
      </footer>

      <button
        className="mobile-whatsapp"
        type="button"
        onClick={() => openWhatsapp("Olá, Maflores Tour! Quero ajuda para planejar minha próxima viagem.")}
      >
        Falar no WhatsApp <span aria-hidden="true">↗</span>
      </button>

      {offerOpen && (
        <div className="offer-overlay" role="presentation" onMouseDown={(event) => { if (event.currentTarget === event.target) closeOffers(); }}>
          <section className="offer-modal" role="dialog" aria-modal="true" aria-labelledby="offer-title">
            <button className="modal-close" type="button" onClick={closeOffers} aria-label="Fechar formulário">×</button>
            <div className="offer-visual" aria-hidden="true">
              <div>
                <span>MaFlores Tour</span>
                <strong>Uma boa oportunidade pode virar sua próxima memória.</strong>
              </div>
            </div>
            <div className="offer-content">
              {leadStatus === "success" ? (
                <div className="offer-success" role="status">
                  <span>✓</span>
                  <p className="eyebrow dark">Cadastro confirmado</p>
                  <h2 id="offer-title">Pronto! Você entrou na nossa lista.</h2>
                  <p>Quando aparecer uma oportunidade especial, a Maflores poderá falar com você.</p>
                  <button className="button button-primary" type="button" onClick={closeOffers}>Continuar no site <span aria-hidden="true">→</span></button>
                </div>
              ) : (
                <>
                  <p className="eyebrow dark">Receba oportunidades de viagem</p>
                  <h2 id="offer-title">Ofertas que dão vontade de fazer as malas.</h2>
                  <p className="offer-copy">Deixe seus dados para receber destinos, condições especiais e ideias de viagem selecionadas pela Maflores.</p>
                  <form className="offer-form" onSubmit={submitLead}>
                    <label>
                      Nome
                      <input name="name" type="text" autoComplete="name" placeholder="Como podemos te chamar?" required autoFocus />
                    </label>
                    <label>
                      E-mail
                      <input name="email" type="email" autoComplete="email" placeholder="voce@email.com" required />
                    </label>
                    <label>
                      WhatsApp
                      <input name="whatsapp" type="tel" autoComplete="tel" inputMode="tel" placeholder="(11) 99999-9999" required />
                    </label>
                    <label className="honeypot" aria-hidden="true">
                      Empresa
                      <input name="company" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" />
                    </label>
                    <p className="privacy-note">Ao enviar, você concorda em receber comunicações da Maflores. Nada de mensagens em excesso.</p>
                    <button className="button button-primary submit-offer" type="submit" disabled={leadStatus === "sending"}>
                      {leadStatus === "sending" ? "Enviando..." : "Quero receber ofertas"} <span aria-hidden="true">→</span>
                    </button>
                    {leadStatus === "error" && <p className="form-error" role="alert">Não conseguimos salvar agora. Tente novamente em alguns instantes.</p>}
                    <button className="skip-offer" type="button" onClick={closeOffers}>Agora não, quero conhecer o site</button>
                  </form>
                </>
              )}
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
