"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";

const travelerProfiles = [
  {
    id: "Casal",
    number: "01",
    title: "Quero viajar em casal",
    copy: "Lua de mel, aniversário ou uma pausa só de vocês.",
  },
  {
    id: "Família",
    number: "02",
    title: "Quero viajar com a família",
    copy: "Conforto, segurança e um ritmo bom para todo mundo.",
  },
  {
    id: "Grupo",
    number: "03",
    title: "Quero viajar em grupo",
    copy: "Amigos, celebrações e experiências para compartilhar.",
  },
  {
    id: "Ainda não escolhi",
    number: "04",
    title: "Ainda não escolhi o destino",
    copy: "A gente encontra o lugar certo a partir do que você quer viver.",
  },
];

const opportunities = [
  {
    place: "Maceió",
    title: "Maceió inesquecível",
    landmark: "Ponta Verde • Maceió, AL",
    meta: "7 dias",
    includes: "Aéreo + hotel + transfer",
    note: "Praia, descanso e uma base que pode ser adaptada ao seu perfil.",
    accent: "Sol & mar",
    image: "https://images.unsplash.com/photo-1626794467452-937f5100a9f5?auto=format&fit=crop&w=1600&q=82",
    imageAlt: "Mar e faixa de areia em Ponta Verde, Maceió",
    imageSource: "https://unsplash.com/photos/sea-waves-crashing-on-shore-during-sunset--M2wNiEJwvU",
  },
  {
    place: "Buenos Aires",
    title: "Buenos Aires a dois",
    landmark: "Obelisco • Buenos Aires, Argentina",
    meta: "4 noites",
    includes: "Aéreo + hotel selecionado",
    note: "Gastronomia, cultura e experiências românticas opcionais.",
    accent: "Internacional",
    image: "https://images.unsplash.com/photo-1745409927264-0db48faf407b?auto=format&fit=crop&w=1600&q=82",
    imageAlt: "Obelisco de Buenos Aires sob o céu azul",
    imageSource: "https://unsplash.com/photos/the-obelisco-de-buenos-aires-stands-tall-under-blue-skies-PtX674rCdBs",
  },
  {
    place: "Gramado",
    title: "Gramado em família",
    landmark: "Lago Negro • Gramado, RS",
    meta: "5 noites",
    includes: "Hotel + roteiro de passeios",
    note: "Dias bem organizados, com tempo livre e atrações para todas as idades.",
    accent: "Serra gaúcha",
    image: "https://images.unsplash.com/photo-1667401763451-b111aa18fe5e?auto=format&fit=crop&w=1600&q=82",
    imageAlt: "Pedalinhos em formato de cisne no Lago Negro, em Gramado",
    imageSource: "https://unsplash.com/photos/a-couple-swans-on-a-boat-purMNATDSes",
  },
];

const modalities = [
  {
    number: "01",
    title: "Pacotes prontos",
    copy: "Destino, período e principais inclusões definidos para quem quer decidir com mais rapidez.",
    action: "Ver oportunidades",
    href: "#oportunidades",
  },
  {
    number: "02",
    title: "Pacotes personalizáveis",
    copy: "Uma boa base de viagem com liberdade para trocar datas, hotel, duração, passeios e aeroporto de saída.",
    action: "Personalizar uma base",
    href: "#planejar",
    featured: true,
  },
  {
    number: "03",
    title: "Viagem sob medida",
    copy: "Um roteiro criado do zero para o seu momento, orçamento, ritmo e tipo de experiência.",
    action: "Criar meu roteiro",
    href: "#planejar",
  },
];

const services = [
  ["Planejamento completo", "Viagens nacionais e internacionais organizadas do início ao fim."],
  ["Aéreo e hospedagem", "Passagens e hotéis escolhidos de acordo com orçamento e perfil."],
  ["Mobilidade", "Transfers, aluguel de veículos e deslocamentos planejados."],
  ["Experiências", "Passeios, ingressos, restaurantes e dicas locais que valem a viagem."],
  ["Documentação e proteção", "Orientação sobre passaporte, visto, vacinas e seguro-viagem."],
  ["Suporte e concierge", "Atendimento antes, durante e depois, com ajuda humana quando precisar."],
];

const processSteps = [
  ["01", "Conte como imagina", "Destino, data, companhia, orçamento e o tipo de experiência que procura."],
  ["02", "Receba sua proposta", "A Marcella combina as melhores opções em uma proposta clara e personalizada."],
  ["03", "Ajuste os detalhes", "Vocês refinam hotel, passeios, duração e condições até tudo fazer sentido."],
  ["04", "Viaje com suporte", "A viagem acontece com organização e acompanhamento em todas as etapas."],
];

const benefits = [
  "Roteiro feito de acordo com seu orçamento",
  "Atendimento humano e próximo",
  "Hospedagens escolhidas com cuidado",
  "Suporte durante a viagem",
  "Tudo organizado em um só lugar",
];

export default function Home() {
  const [profile, setProfile] = useState("");
  const [destination, setDestination] = useState("");
  const [sent, setSent] = useState(false);

  function openWhatsapp(message: string) {
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  function chooseProfile(value: string) {
    setProfile(value);
    document.querySelector("#planejar")?.scrollIntoView({ behavior: "smooth" });
  }

  function chooseOpportunity(place: string, title: string) {
    setProfile(`Roteiro de interesse: ${title}`);
    setDestination(place);
    document.querySelector("#planejar")?.scrollIntoView({ behavior: "smooth" });
  }

  function talkAboutOpportunity(title: string) {
    openWhatsapp([
      "Olá, Maflores Tour!",
      `Tenho interesse em ${title} e gostaria de entender as opções.`,
      "Ainda não tenho todos os detalhes definidos.",
    ].join("\n"));
  }

  function submitTrip(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const message = [
      "Olá, Maflores Tour! Quero planejar uma viagem.",
      "",
      `Perfil: ${data.get("profile") || "Não informado"}`,
      `Destino/ideia: ${data.get("destination")}`,
      `Período: ${data.get("date") || "Ainda não definido"}`,
      `Viajantes: ${data.get("travelers") || "Ainda não definido"}`,
      `Faixa de investimento: ${data.get("budget") || "Quero orientação"}`,
      `Observação: ${data.get("notes") || "Sem observações por enquanto"}`,
    ].join("\n");

    setSent(true);
    openWhatsapp(message);
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Maflores Tour — início">
          <Image src="/brand/maflores-logo.png" width={326} height={80} priority unoptimized alt="Maflores Tour — Invista em memórias" />
        </a>
        <nav aria-label="Navegação principal">
          <a href="#perfis">Seu estilo</a>
          <a href="#oportunidades">Oportunidades</a>
          <a href="#como-funciona">Como funciona</a>
          <a href="#sobre">A Maflores</a>
        </nav>
        <a className="header-cta" href="#planejar">Solicitar cotação</a>
      </header>

      <section className="hero" id="inicio">
        <video className="hero-video desktop-video" autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
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
            <a className="primary-button" href="#oportunidades">Explorar destinos <span>→</span></a>
            <a className="text-button" href="#planejar">Planejar em 1 minuto <span>↓</span></a>
          </div>
        </div>
        <div className="trust-strip" aria-label="Diferenciais da Maflores Tour">
          <span><b>Roteiros personalizados</b><small>para seu momento e orçamento</small></span>
          <span><b>Atendimento humano</b><small>do planejamento até a volta</small></span>
          <span><b>Tudo em um só lugar</b><small>menos pesquisa, mais tranquilidade</small></span>
        </div>
      </section>

      <section className="profile-section section" id="perfis">
        <div className="section-heading">
          <div>
            <p className="eyebrow dark">Comece por quem vai viajar</p>
            <h2>Que história você quer viver?</h2>
          </div>
          <p>Não precisa chegar com tudo decidido. Escolha o caminho que mais combina com este momento e a Maflores cuida do restante.</p>
        </div>
        <div className="profile-grid">
          {travelerProfiles.map((item) => (
            <button key={item.id} type="button" onClick={() => chooseProfile(item.id)} className="profile-card">
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
              <strong>Começar por aqui ↗</strong>
            </button>
          ))}
        </div>
      </section>

      <section className="opportunities" id="oportunidades">
        <div className="opportunity-intro">
          <p className="eyebrow">Oportunidades do momento</p>
          <h2>Uma boa viagem pode começar com uma boa ideia.</h2>
          <p>Use estes roteiros como ponto de partida. Datas, hospedagem, duração, passeios e cidade de embarque podem ser ajustados.</p>
        </div>
        <div className="opportunity-list">
          {opportunities.map((item, index) => (
            <article className="opportunity-card" key={item.place}>
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
                  <small>Valor, datas e embarque sob consulta</small>
                </div>
                <div className="destination-actions">
                  <button type="button" onClick={() => chooseOpportunity(item.place, item.title)}>
                    Personalizar <span>→</span>
                  </button>
                  <button className="talk-now" type="button" onClick={() => talkAboutOpportunity(item.title)}>
                    Falar agora
                  </button>
                </div>
                <a className="photo-credit" href={item.imageSource} target="_blank" rel="noreferrer">Foto do destino ↗</a>
              </div>
            </article>
          ))}
        </div>
        <p className="price-note">As condições variam conforme número de viajantes, cidade de embarque, período e disponibilidade. A proposta informa claramente o que está incluído.</p>
      </section>

      <section className="modalities section" id="viagens">
        <div className="section-heading compact">
          <div>
            <p className="eyebrow dark">Liberdade para escolher</p>
            <h2>Pronto, ajustável ou totalmente seu.</h2>
          </div>
          <p>Você decide quanta praticidade quer agora e quanta personalização deseja na viagem.</p>
        </div>
        <div className="modality-grid">
          {modalities.map((item) => (
            <article key={item.number} className={item.featured ? "featured" : ""}>
              {item.featured && <span className="recommended">Escolha principal</span>}
              <span className="modality-number">{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
              <a href={item.href}>{item.action} <span>↗</span></a>
            </article>
          ))}
        </div>
      </section>

      <section className="services section">
        <div className="services-lead">
          <p className="eyebrow dark">Do sonho ao embarque</p>
          <h2>Uma viagem inteira, cuidada nos detalhes.</h2>
          <p>Você não recebe apenas uma reserva. Recebe uma viagem organizada de acordo com seu estilo, orçamento e momento de vida.</p>
        </div>
        <div className="services-grid">
          {services.map(([title, copy], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="story" id="sobre">
        <div className="story-media">
          <video autoPlay muted loop playsInline preload="metadata">
            <source src="/media/couple.mp4" type="video/mp4" />
          </video>
          <span>Invista em<br /><strong>memórias.</strong></span>
        </div>
        <div className="story-copy">
          <p className="eyebrow">Mais que uma agência</p>
          <h2>A viagem começa muito antes do embarque.</h2>
          <p>Começa quando alguém escuta seus desejos com atenção. A Maflores Tour transforma ideias em roteiros possíveis, seguros e verdadeiramente seus.</p>
          <blockquote>“Você sonha com a viagem. A Maflores transforma esse sonho em roteiro.”</blockquote>
          <div className="signature">Maflores Tour <small>Invista em memórias</small></div>
        </div>
      </section>

      <section className="process section" id="como-funciona">
        <div className="section-heading compact">
          <div>
            <p className="eyebrow dark">Simples do início ao fim</p>
            <h2>Da primeira ideia à viagem.</h2>
          </div>
          <p>Um processo claro reduz a insegurança e deixa cada decisão mais leve.</p>
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

      <section className="why-us">
        <div className="why-copy">
          <p className="eyebrow">Por que escolher a Maflores</p>
          <h2>Planejamento próximo. Viagem mais tranquila.</h2>
          <p>Grandes plataformas entregam opções. A Maflores ajuda você a escolher, organiza cada parte e continua por perto quando a viagem começa.</p>
        </div>
        <ul>
          {benefits.map((benefit, index) => (
            <li key={benefit}><span>0{index + 1}</span>{benefit}</li>
          ))}
        </ul>
      </section>

      <section className="social-proof section" aria-labelledby="social-title">
        <div>
          <p className="eyebrow dark">Confiança se constrói com histórias reais</p>
          <h2 id="social-title">Experiências de quem já viajou.</h2>
        </div>
        <div className="proof-placeholder">
          <p>Depoimentos, fotos de viajantes e avaliações verificadas serão publicados aqui com autorização dos clientes.</p>
          <span>Nenhuma avaliação inventada. Só experiências reais.</span>
        </div>
      </section>

      <section className="planner" id="planejar">
        <div className="planner-intro">
          <p className="eyebrow">Comece sem complicação</p>
          <h2>Um destino e um clique já bastam.</h2>
          <p>Você pode ir direto para o WhatsApp ou adiantar alguns detalhes. Só o destino é obrigatório — o restante pode ser decidido com a Marcella.</p>
          <div className="contact-note"><span>✓</span> Resposta humana, sem robôs.</div>
          <button
            className="instant-whatsapp"
            type="button"
            onClick={() => openWhatsapp("Olá, Maflores Tour! Quero ajuda para escolher e planejar minha próxima viagem.")}
          >
            Falar agora, sem preencher nada <span>↗</span>
          </button>
        </div>

        <form onSubmit={submitTrip}>
          <input type="hidden" name="profile" value={profile} />
          <div className="quick-form-heading">
            <span>Leva menos de 1 minuto</span>
            <p className="form-question">Qual viagem está na sua cabeça?</p>
          </div>

          <div className="destination-chips" aria-label="Sugestões de destino">
            {["Maceió", "Buenos Aires", "Gramado", "Ainda não sei"].map((item) => (
              <button
                key={item}
                type="button"
                aria-pressed={destination === item}
                className={destination === item ? "selected" : ""}
                onClick={() => setDestination(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <label>
            Destino ou ideia <span className="required-note">obrigatório</span>
            <input
              name="destination"
              required
              value={destination}
              onChange={(event) => setDestination(event.target.value)}
              placeholder="Ex.: Argentina, praia, lua de mel..."
            />
          </label>

          <div className="form-row">
            <label>Quando? <span className="optional-note">opcional</span><input name="date" placeholder="Ex.: janeiro de 2027" /></label>
            <label>Quantas pessoas? <span className="optional-note">opcional</span><input name="travelers" placeholder="Ex.: 2 adultos" /></label>
          </div>

          <label>
            Faixa de investimento <span className="optional-note">opcional</span>
            <select name="budget" defaultValue="">
              <option value="">Quero orientação</option>
              <option>Até R$ 5 mil</option>
              <option>De R$ 5 mil a R$ 10 mil</option>
              <option>De R$ 10 mil a R$ 20 mil</option>
              <option>Acima de R$ 20 mil</option>
            </select>
          </label>

          <label>
            Algum detalhe importante? <span className="optional-note">opcional</span>
            <input name="notes" placeholder="Ex.: viagem com criança, comemoração..." />
          </label>

          <button className="continue-button" type="submit">
            Enviar ideia pelo WhatsApp <span>→</span>
          </button>
          {sent && <p className="form-success" role="status">Perfeito! Abrimos o WhatsApp com sua viagem organizada.</p>}
        </form>
      </section>

      <section className="content-path section">
        <p className="eyebrow dark">Inspire sua próxima viagem</p>
        <h2>Destinos, ocasiões e ideias para começar.</h2>
        <div className="content-links">
          <a href="#planejar">Lua de mel <span>↗</span></a>
          <a href="#planejar">Viagens em grupo <span>↗</span></a>
          <a href="#oportunidades">Nordeste <span>↗</span></a>
          <a href="#planejar">Viagens internacionais <span>↗</span></a>
        </div>
      </section>

      <footer>
        <Image src="/brand/maflores-logo.png" width={326} height={80} unoptimized alt="Maflores Tour" />
        <p>Viagens pensadas para você, cuidadas em cada detalhe.</p>
        <a href="#inicio">Voltar ao topo ↑</a>
        <small>© 2026 Maflores Tour. Todos os direitos reservados.</small>
      </footer>

      <button
        className="mobile-whatsapp"
        type="button"
        onClick={() => openWhatsapp("Olá, Maflores Tour! Quero ajuda para planejar minha próxima viagem.")}
      >
        Falar no WhatsApp <span>↗</span>
      </button>
    </main>
  );
}
