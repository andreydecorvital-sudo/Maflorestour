# Maflores Tour — Design Foundation

## Source of truth
Active foundation, updated 2026-07-29. Surfaces: compact responsive one-page commercial site, entry offer-capture modal and low-friction WhatsApp journey. Evidence reviewed: supplied logo, navy/gold identity, three travel videos, selected “Expedição Cinematográfica” direction, current implementation, complete commercial strategy, recognizable destination photography, and the user’s explicit requirement that every action look unmistakably clickable.

## Brand
Personality: adventurous, inspiring, trustworthy, sophisticated and human. Promise: “Viagens pensadas para você, cuidadas em cada detalhe.” Trust comes from clarity, a named human service, support across the journey and only real, authorized social proof. Avoid discount-board aesthetics, generic booking-engine patterns, invented testimonials, exaggerated guarantees and luxury signals that make the service feel inaccessible.

## Goals
Business goals: generate qualified WhatsApp conversations, capture opt-in contacts for future offers, use highly visual opportunities as the entry point and make personalization the main offer. User goals: understand the Maflores quickly, recognize and desire a destination, learn the company’s approach and start a conversation without completing a long quote form. Non-goals: live booking, real-time inventory, a multi-page content portal and publishing unconfirmed prices. Success signals: destination exploration, direct WhatsApp opens, valid offer-list subscriptions and lower uncertainty before contact.

## Audience
Brazilian couples, families and groups planning national or international travel. Jobs: save research time, make confident choices, organize multiple reservations and receive help if plans change. Anxieties: hidden price, unreliable support, unclear inclusions, excessive forms and fear that personalized service is expensive.

## Journey and information architecture
Primary journey: optional entry offer signup → cinematic inspiration → explore three real destination opportunities → understand the Maflores story → see the three-step process → choose WhatsApp or reopen the offer form. The page deliberately stays compact and avoids duplicating information into profiles, modalities, service grids or long quote questionnaires. Navigation anchors: Destinos, Nossa história and Como funciona.

## Design principles
Lead with emotion and prove with clarity. Every named destination must be paired with real, recognizable place photography; do not use generic travel imagery where a factual landmark is available. Every action must have a filled or outlined button shape, generous click target and explicit verb; underlined text with an arrow alone is not an action pattern. Keep price context honest: “a partir de” only with confirmed origin, period, traveler count, inclusions and availability. Use packages as inspiration, not as the brand’s whole identity. Keep the page short enough to understand in one quick scan. The offer modal asks only for name, e-mail and WhatsApp because all three are necessary for future contact.

## Visual language
Gold `#F7B51D` marks actions and decisive moments; navy `#073F56`, deep navy `#032F40`, warm cream `#F7F2E8`, paper `#FFFDF8` and ink `#153744` balance trust and warmth. Georgia-style editorial display type pairs with Geist sans. Generous spacing, hairline dividers, flat surfaces and restrained transitions. Real travel video remains the hero anchor; factual destination photography carries opportunity cards with clear landmark captions. Use restrained image overlays for text legibility, not decorative effects. No arbitrary gradients, glass-card grids, decorative badges or shadows on every surface.

## Components
Transparent header, responsive video hero, trust strip, three large destination-image opportunities, split story/video section, three-step process, closing CTA, mobile sticky WhatsApp action, minimal footer and accessible offer-capture modal. CTA variants are gold primary, white/transparent secondary and WhatsApp green on mobile.

## Accessibility
Semantic landmarks and headings, explicit form labels, native required validation, visible focus states, keyboard-operable buttons, adequate contrast, large touch targets, muted autoplay and reduced-motion alternatives. Success copy uses a live status. Real testimonials require consent and accurate attribution.

## Responsive behavior
Desktop uses the horizontal ruins video and multi-column editorial layouts. Mobile uses the vertical airplane video, hides secondary navigation, turns rows into deliberate vertical sequences and keeps the quote action full width. Primary breakpoint: 860px; intermediate layout adjustment: 1080px. The form remains one question group per step on small screens.

## States
Offer modal states: unseen visitor, dismissed, submitting, success and recoverable error. Dismissal or success is remembered on that device, while the closing CTA can reopen the form. Direct WhatsApp is always available without form completion. Reduced-motion state replaces video with brand-color fields. Slow networks retain readable content and colored media backgrounds while photography loads. Opportunities without approved prices state that value, dates and departure are confirmed in the proposal.

## Content voice
Warm, concise and conversational Brazilian Portuguese. Use “você”, “a gente” and “vamos”. Sell tranquility, saved time and attentive choices. Avoid jargon, pressure, generic “somos uma agência” openings and claims unsupported by real client evidence.

## Implementation constraints
Vinext/React, one route, compressed local video, optimized remote destination photography, D1-backed offer leads and no new runtime dependencies. Preserve Sites compatibility. Production testing must cover mobile and desktop layout, reduced motion, destination-image loading, obvious CTA styling, modal dismissal/reopen, lead validation/submission, direct WhatsApp actions and generated WhatsApp message.

## Open questions
- Owner: Marcella. Direct WhatsApp number; without it the message opens in WhatsApp without a fixed recipient. High conversion impact.
- Owner: Marcella. Confirmed offers with origin, period, inclusions, traveler count and real “a partir de” prices. High commercial impact.
- Owner: Marcella. Authorized testimonials, client photos, Google rating and service counts. High trust impact.
- Owner: Marcella. High-resolution logo and Instagram handle. Medium brand impact.
