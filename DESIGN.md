# Maflores Tour — Design Foundation

## Source of truth
Active foundation, updated 2026-07-29. Surfaces: responsive one-page commercial site and low-friction WhatsApp journey. Evidence reviewed: supplied logo, navy/gold identity, three travel videos, selected “Expedição Cinematográfica” direction, current implementation, complete commercial strategy and the user’s request to make destinations visually recognizable before asking for information.

## Brand
Personality: adventurous, inspiring, trustworthy, sophisticated and human. Promise: “Viagens pensadas para você, cuidadas em cada detalhe.” Trust comes from clarity, a named human service, support across the journey and only real, authorized social proof. Avoid discount-board aesthetics, generic booking-engine patterns, invented testimonials, exaggerated guarantees and luxury signals that make the service feel inaccessible.

## Goals
Business goals: generate qualified WhatsApp conversations, use highly visual opportunities as the entry point, make personalization the main offer and support future destination/campaign pages. User goals: recognize and desire a destination before reading its details, understand the possible investment path, feel inspired, see how the service differs from a large platform and start a conversation without repeating information. Non-goals: live booking, real-time inventory and publishing unconfirmed prices. Success signals: destination exploration, opportunity selections, direct WhatsApp opens, assisted quote submissions and lower uncertainty before contact.

## Audience
Brazilian couples, families and groups planning national or international travel. Jobs: save research time, make confident choices, organize multiple reservations and receive help if plans change. Anxieties: hidden price, unreliable support, unclear inclusions, excessive forms and fear that personalized service is expensive.

## Journey and information architecture
Primary journey: cinematic inspiration → explore real destination photography → choose an opportunity or traveler profile → either talk immediately on WhatsApp or optionally add a few quote details → understand service modalities, scope, brand, process and benefits. The conversion path must branch instead of forcing a form: “talk now” requires no fields; “personalize” requires only a destination and treats date, group, budget and notes as optional. Navigation anchors: Seu estilo, Oportunidades, Como funciona, A Maflores and Solicitar cotação. Future routes: Destinos, Pacotes e oportunidades, Viagens personalizadas, Lua de mel, Viagens em grupo, Sobre, Avaliações and Conteúdos.

## Design principles
Lead with emotion and prove with clarity. Every named destination must be paired with real, recognizable place photography; do not use generic travel imagery where a factual landmark is available. Show a clear main action without turning every object into a button. Keep price context honest: “a partir de” only with confirmed origin, period, traveler count, inclusions and availability. Use packages as inspiration, not as the brand’s whole identity. Prefer editorial rhythm over a uniform card wall. Personalization must feel easy, not premium-for-premium’s-sake. Never ask the visitor to type information WhatsApp already provides, such as their name or phone number.

## Visual language
Gold `#F7B51D` marks actions and decisive moments; navy `#073F56`, deep navy `#032F40`, warm cream `#F7F2E8`, paper `#FFFDF8` and ink `#153744` balance trust and warmth. Georgia-style editorial display type pairs with Geist sans. Generous spacing, hairline dividers, flat surfaces and restrained transitions. Real travel video remains the hero anchor; factual destination photography carries opportunity cards with clear landmark captions. Use restrained image overlays for text legibility, not decorative effects. No arbitrary gradients, glass-card grids, decorative badges or shadows on every surface.

## Components
Transparent header, responsive video hero, trust strip, traveler-profile selector, large destination-image opportunities, three-modality comparison, service scope grid, split story/video section, four-step process, concrete-benefit list, honest social-proof placeholder, direct WhatsApp escape hatch, one-screen optional quote composer, mobile sticky WhatsApp action, content-path links and minimal footer. Selected profile or opportunity pre-fills context for the quote.

## Accessibility
Semantic landmarks and headings, explicit form labels, native required validation, visible focus states, keyboard-operable buttons, adequate contrast, large touch targets, muted autoplay and reduced-motion alternatives. Success copy uses a live status. Real testimonials require consent and accurate attribution.

## Responsive behavior
Desktop uses the horizontal ruins video and multi-column editorial layouts. Mobile uses the vertical airplane video, hides secondary navigation, turns rows into deliberate vertical sequences and keeps the quote action full width. Primary breakpoint: 860px; intermediate layout adjustment: 1080px. The form remains one question group per step on small screens.

## States
Quote states: empty destination, destination selected from a chip/card, free-text destination, optional travel details, native validation only for destination and WhatsApp-open success. Direct WhatsApp is always available without form completion. Reduced-motion state replaces video with brand-color fields. Slow networks retain readable content and colored media backgrounds while photography loads. Opportunities without approved prices state that value, dates and departure are confirmed in the proposal.

## Content voice
Warm, concise and conversational Brazilian Portuguese. Use “você”, “a gente” and “vamos”. Sell tranquility, saved time and attentive choices. Avoid jargon, pressure, generic “somos uma agência” openings and claims unsupported by real client evidence.

## Implementation constraints
Vinext/React, one route, compressed local video, optimized remote destination photography and no new runtime dependencies. Preserve Sites/Vercel compatibility. Production testing must cover mobile and desktop layout, reduced motion, destination-image loading, profile/opportunity prefill, optional fields, destination-only validation, direct WhatsApp actions and generated WhatsApp message.

## Open questions
- Owner: Marcella. Direct WhatsApp number; without it the message opens in WhatsApp without a fixed recipient. High conversion impact.
- Owner: Marcella. Confirmed offers with origin, period, inclusions, traveler count and real “a partir de” prices. High commercial impact.
- Owner: Marcella. Authorized testimonials, client photos, Google rating and service counts. High trust impact.
- Owner: Marcella. High-resolution logo and Instagram handle. Medium brand impact.
