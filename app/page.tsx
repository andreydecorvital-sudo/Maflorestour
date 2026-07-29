"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";

const experiences = [
  ["01", "Pausa que renova", "Praias & resorts", "Dias leves, mar por perto e cada detalhe resolvido antes do embarque."],
  ["02", "A dois", "Romance & lua de mel", "Cenários marcantes e experiências pensadas para celebrar a história de vocês."],
  ["03", "Juntos é melhor", "Família & grupos", "Roteiros que respeitam ritmos diferentes e criam memórias para todo mundo."],
];
const steps = [
  ["01", "Conte seus planos", "Responda perguntas rápidas sobre o que imagina para a viagem."],
  ["02", "Criamos seu roteiro", "Selecionamos destinos, experiências e condições que combinam com você."],
  ["03", "Viaje tranquilo", "Acompanhamos cada etapa, da escolha até a volta para casa."],
];

export default function Home() {
  const [sent, setSent] = useState(false);
  function submitTrip(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      "Olá, Maflores Tour! Quero planejar uma viagem.",
      `Destino/experiência: ${data.get("destination")}`,
      `Período: ${data.get("date")}`,
      `Viajantes: ${data.get("travelers")}`,
      `Faixa de investimento: ${data.get("budget")}`,
      `Nome: ${data.get("name")}`,
    ].join("\n");
    setSent(true);
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Maflores Tour — início">
          <Image src="/brand/maflores-logo.png" width={326} height={80} priority alt="Maflores Tour — Invista em memórias" />
        </a>
        <nav aria-label="Navegação principal">
          <a href="#experiencias">Experiências</a><a href="#como-funciona">Como funciona</a><a href="#sobre">Sobre</a>
        </nav>
        <a className="header-cta" href="#planejar">Planejar viagem</a>
      </header>

      <section className="hero" id="inicio">
        <video className="hero-video desktop-video" autoPlay muted loop playsInline preload="metadata" aria-hidden="true"><source src="/media/hero-desktop.mp4" type="video/mp4" /></video>
        <video className="hero-video mobile-video" autoPlay muted loop playsInline preload="metadata" aria-hidden="true"><source src="/media/hero-mobile.mp4" type="video/mp4" /></video>
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow">Viagens feitas para você</p>
          <h1>Sua próxima história começa aqui</h1>
          <p className="hero-copy">Roteiros nacionais e internacionais personalizados, criados com atendimento próximo e humano em cada etapa.</p>
          <a className="primary-button" href="#planejar">Planejar minha viagem <span>→</span></a>
        </div>
        <div className="trust-strip" aria-label="Diferenciais da Maflores Tour">
          <span>⌖ <b>Roteiros personalizados</b></span><span>◇ <b>Compra segura</b></span><span>♡ <b>Atendimento humano</b></span>
        </div>
      </section>

      <section className="experiences section" id="experiencias">
        <div className="section-heading">
          <div><p className="eyebrow dark">Seu jeito de descobrir o mundo</p><h2>Não vendemos destinos.<br />Desenhamos experiências.</h2></div>
          <p>Do primeiro “e se?” até a volta para casa, cada escolha parte de quem você é, do que deseja viver e de como quer se sentir.</p>
        </div>
        <div className="experience-grid">
          {experiences.map(([number, tag, title, copy]) => (
            <article key={number} className="experience-card">
              <span className="card-number">{number}</span><p className="card-tag">{tag}</p><h3>{title}</h3><p>{copy}</p>
              <a href="#planejar">Quero viver isso <span>↗</span></a>
            </article>
          ))}
        </div>
      </section>

      <section className="story" id="sobre">
        <div className="story-media">
          <video autoPlay muted loop playsInline preload="metadata"><source src="/media/couple.mp4" type="video/mp4" /></video>
          <span>Invista em<br /><strong>memórias.</strong></span>
        </div>
        <div className="story-copy">
          <p className="eyebrow">Mais que uma agência</p><h2>A viagem começa muito antes do embarque.</h2>
          <p>Começa quando alguém escuta seus desejos com atenção. A Maflores Tour transforma ideias em roteiros possíveis, seguros e verdadeiramente seus.</p>
          <blockquote>“Atendimento próximo para você aproveitar a viagem, não se preocupar com ela.”</blockquote>
          <div className="signature">Maflores Tour <small>Invista em memórias</small></div>
        </div>
      </section>

      <section className="process section" id="como-funciona">
        <div className="section-heading compact">
          <div><p className="eyebrow dark">Simples do início ao fim</p><h2>Seu mundo, do seu jeito.</h2></div>
          <p>Sem pacotes engessados ou horas comparando opções. Você conta o que sonha; nós cuidamos do caminho.</p>
        </div>
        <div className="steps">{steps.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </section>

      <section className="planner" id="planejar">
        <div className="planner-intro">
          <p className="eyebrow">O próximo destino chama</p><h2>Vamos transformar vontade em viagem?</h2>
          <p>Conte um pouco do que imagina. Ao finalizar, suas respostas seguem organizadas para o WhatsApp.</p>
          <div className="contact-note"><span>✓</span> Resposta humana, sem robôs.</div>
        </div>
        <form onSubmit={submitTrip}>
          <label>Para onde você quer ir — ou o que quer viver?<input name="destination" required placeholder="Ex.: praia no Nordeste, lua de mel na Itália..." /></label>
          <div className="form-row">
            <label>Quando?<input name="date" required placeholder="Ex.: janeiro de 2027" /></label>
            <label>Quantas pessoas?<input name="travelers" required placeholder="Ex.: 2 adultos" /></label>
          </div>
          <label>Faixa de investimento<select name="budget" required defaultValue=""><option value="" disabled>Selecione uma faixa</option><option>Até R$ 5 mil</option><option>De R$ 5 mil a R$ 10 mil</option><option>De R$ 10 mil a R$ 20 mil</option><option>Acima de R$ 20 mil</option><option>Ainda não defini</option></select></label>
          <label>Como podemos chamar você?<input name="name" required placeholder="Seu nome" /></label>
          <button type="submit">Continuar no WhatsApp <span>→</span></button>
          {sent && <p className="form-success" role="status">Tudo certo! Abrimos o WhatsApp com seu pedido preenchido.</p>}
        </form>
      </section>

      <footer>
        <Image src="/brand/maflores-logo.png" width={326} height={80} alt="Maflores Tour" /><p>Viagens personalizadas, memórias para sempre.</p><a href="#inicio">Voltar ao topo ↑</a>
        <small>© 2026 Maflores Tour. Todos os direitos reservados.</small>
      </footer>
    </main>
  );
}
