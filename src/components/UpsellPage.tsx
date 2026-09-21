import { useEffect } from 'react';

export default function UpsellPage() {
  useEffect(() => {
    // Set exact document title
    document.title = "Biblioteca de Aulas Prontas | Oferta Especial";

    // Set page description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Biblioteca de Aulas Prontas com 100 sequências didáticas de Filosofia e Sociologia para o Ensino Médio.');
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Biblioteca de Aulas Prontas com 100 sequências didáticas de Filosofia e Sociologia para o Ensino Médio.";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="upsell-container-page">
      {/* Inject exact CSS inside style block */}
      <style dangerouslySetInnerHTML={{ __html: `
        :root {
          --navy: #0f172a;
          --navy-soft: #334155;
          --teal: #0284c7;
          --teal-light: #e0f2fe;
          --green: #22c55e;
          --gold: #f0c040;
          --cream: #f8fafc;
          --white: #ffffff;
          --text: #334155;
          --muted: #64748b;
          --line: #e2e8f0;
          --shadow: 0 18px 50px rgba(15, 23, 42, 0.12);
        }

        .upsell-container-page {
          margin: 0;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          color: var(--text);
          background: var(--cream);
          line-height: 1.6;
          min-h: 100vh;
        }

        .upsell-container-page img { display: block; max-width: 100%; }

        .upsell-container-page .topbar {
          padding: 11px 20px;
          color: var(--white);
          background: #dc2626;
          text-align: center;
          font-size: 0.82rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .upsell-container-page .container {
          width: min(1120px, calc(100% - 40px));
          margin: 0 auto;
        }

        .upsell-container-page .hero {
          position: relative;
          overflow: hidden;
          padding: 70px 0 64px;
          background:
            radial-gradient(circle at 50% 0%, rgba(2, 132, 199, 0.09), transparent 42%),
            #ffffff;
        }

        .upsell-container-page .hero::after {
          content: "";
          position: absolute;
          right: -130px;
          bottom: -170px;
          width: 430px;
          height: 430px;
          border: 70px solid rgba(240, 192, 64, 0.13);
          border-radius: 50%;
        }

        .upsell-container-page .hero-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1.08fr 0.92fr;
          gap: 64px;
          align-items: center;
        }

        .upsell-container-page .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin: 0 0 18px;
          padding: 7px 12px;
          border-radius: 999px;
          color: #0369a1;
          background: var(--teal-light);
          font-size: 0.8rem;
          font-weight: 850;
          letter-spacing: 0.07em;
          text-transform: uppercase;
        }

        .upsell-container-page h1, 
        .upsell-container-page h2, 
        .upsell-container-page h3, 
        .upsell-container-page p { margin-top: 0; }

        .upsell-container-page h1 {
          max-width: 760px;
          margin-bottom: 20px;
          color: var(--navy);
          font-size: clamp(2.35rem, 5.5vw, 4.55rem);
          line-height: 1.02;
          letter-spacing: -0.045em;
        }

        .upsell-container-page .accent { color: var(--teal); }

        .upsell-container-page .gold-accent { color: var(--gold); }

        .upsell-container-page .hero-lead {
          max-width: 670px;
          margin-bottom: 26px;
          color: #475569;
          font-size: clamp(1.05rem, 1.8vw, 1.26rem);
        }

        .upsell-container-page .quick-benefits {
          display: grid;
          gap: 11px;
          margin: 0 0 28px;
          padding: 0;
          list-style: none;
        }

        .upsell-container-page .quick-benefits li {
          display: flex;
          gap: 11px;
          align-items: flex-start;
          font-weight: 650;
        }

        .upsell-container-page .check {
          flex: 0 0 23px;
          display: grid;
          place-items: center;
          width: 23px;
          height: 23px;
          margin-top: 2px;
          border-radius: 50%;
          color: var(--white);
          background: var(--green);
          font-size: 0.78rem;
          font-weight: 900;
        }

        .upsell-container-page .price-card {
          display: inline-flex;
          flex-wrap: wrap;
          gap: 8px 18px;
          align-items: center;
          padding: 18px 22px;
          border: 2px solid rgba(2, 132, 199, 0.22);
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.88);
          box-shadow: 0 10px 30px rgba(2, 132, 199, 0.08);
        }

        .upsell-container-page .price-label {
          color: var(--muted);
          font-size: 0.86rem;
          font-weight: 750;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .upsell-container-page .price {
          color: var(--teal);
          font-size: clamp(2.1rem, 4vw, 3.05rem);
          font-weight: 900;
          line-height: 1;
          letter-spacing: -0.045em;
        }

        .upsell-container-page .payment-note {
          flex-basis: 100%;
          margin: 0;
          color: var(--muted);
          font-size: 0.9rem;
        }

        .upsell-container-page .product-stage {
          position: relative;
          padding: 22px;
          border: 1px solid rgba(255, 255, 255, 0.8);
          border-radius: 34px;
          background: rgba(255, 255, 255, 0.82);
          box-shadow: var(--shadow);
          backdrop-filter: blur(10px);
        }

        .upsell-container-page .product-stage::before {
          content: "Edição completa";
          position: absolute;
          z-index: 2;
          top: 16px;
          right: 16px;
          padding: 8px 12px;
          border-radius: 999px;
          color: var(--navy);
          background: var(--gold);
          font-size: 0.72rem;
          font-weight: 900;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .upsell-container-page .product-stage img {
          width: 100%;
          border-radius: 23px;
        }

        .upsell-container-page .trust-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          margin-top: 20px;
        }

        .upsell-container-page .trust-item {
          padding: 13px 10px;
          border-radius: 14px;
          color: var(--navy);
          background: var(--white);
          text-align: center;
          box-shadow: 0 8px 18px rgba(13, 43, 58, 0.06);
          font-size: 0.78rem;
          font-weight: 800;
        }

        .upsell-container-page section { padding: 78px 0; }

        .upsell-container-page .section-heading {
          max-width: 740px;
          margin: 0 auto 40px;
          text-align: center;
        }

        .upsell-container-page .section-heading h2 {
          margin-bottom: 14px;
          color: var(--navy);
          font-size: clamp(1.9rem, 4vw, 3rem);
          line-height: 1.12;
          letter-spacing: -0.035em;
        }

        .upsell-container-page .section-heading p { color: var(--muted); }

        .upsell-container-page .cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .upsell-container-page .card {
          padding: 28px;
          border: 1px solid var(--line);
          border-radius: 22px;
          background: var(--white);
          box-shadow: 0 12px 30px rgba(13, 43, 58, 0.06);
        }

        .upsell-container-page .card-number {
          display: grid;
          place-items: center;
          width: 42px;
          height: 42px;
          margin-bottom: 18px;
          border-radius: 13px;
          color: var(--white);
          background: var(--teal);
          font-weight: 900;
        }

        .upsell-container-page .card h3 {
          margin-bottom: 8px;
          color: var(--navy);
          font-size: 1.06rem;
        }

        .upsell-container-page .card p {
          margin-bottom: 0;
          color: var(--muted);
          font-size: 0.94rem;
        }

        .upsell-container-page .contents {
          color: var(--text);
          background: #f8fafc;
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
        }

        .upsell-container-page .contents-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 56px;
          align-items: center;
        }

        .upsell-container-page .contents h2 {
          margin-bottom: 14px;
          color: var(--navy);
          font-size: clamp(2rem, 4vw, 3.15rem);
          line-height: 1.1;
          letter-spacing: -0.035em;
        }

        .upsell-container-page .contents-copy > p { color: var(--muted); }

        .upsell-container-page .subject-boxes {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
          margin-top: 24px;
        }

        .upsell-container-page .subject-box {
          padding: 22px;
          border: 1px solid var(--line);
          border-radius: 18px;
          background: var(--white);
          box-shadow: 0 8px 20px rgba(15, 23, 42, 0.05);
        }

        .upsell-container-page .subject-box strong {
          display: block;
          color: var(--teal);
          font-size: 1.8rem;
          line-height: 1;
        }

        .upsell-container-page .subject-box span {
          color: var(--navy);
          font-weight: 750;
        }

        .upsell-container-page .lesson-list {
          display: grid;
          gap: 12px;
          margin: 0;
          padding: 26px;
          border-radius: 24px;
          background: var(--white);
          box-shadow: var(--shadow);
          list-style: none;
        }

        .upsell-container-page .lesson-list li {
          display: flex;
          gap: 13px;
          align-items: center;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--line);
          font-weight: 700;
        }

        .upsell-container-page .lesson-list li:last-child {
          padding-bottom: 0;
          border-bottom: 0;
        }

        .upsell-container-page .mini-check {
          color: var(--green);
          font-size: 1.05rem;
          font-weight: 950;
        }

        .upsell-container-page .final-section {
          padding: 78px 0 90px;
          background: linear-gradient(180deg, var(--cream), #ffffff);
          text-align: center;
        }

        .upsell-container-page .final-box {
          max-width: 850px;
          margin: 0 auto;
          padding: 42px;
          border: 1px solid var(--line);
          border-radius: 28px;
          background: var(--white);
          box-shadow: var(--shadow);
        }

        .upsell-container-page .final-box h2 {
          margin-bottom: 12px;
          color: var(--navy);
          font-size: clamp(1.85rem, 4vw, 2.8rem);
          line-height: 1.12;
        }

        .upsell-container-page .final-box p {
          max-width: 690px;
          margin: 0 auto 22px;
          color: var(--muted);
        }

        .upsell-container-page .final-price {
          color: var(--teal);
          font-size: 2.65rem;
          font-weight: 900;
          letter-spacing: -0.04em;
        }

        .upsell-container-page .native-note {
          margin-top: 10px !important;
          font-size: 0.84rem;
        }

        .upsell-container-page footer {
          padding: 24px 20px;
          color: #718189;
          background: #f0f3f2;
          text-align: center;
          font-size: 0.78rem;
        }

        @media (max-width: 860px) {
          .upsell-container-page .hero { padding-top: 50px; }
          .upsell-container-page .hero-grid, .upsell-container-page .contents-grid { grid-template-columns: 1fr; }
          .upsell-container-page .hero-grid { gap: 38px; }
          .upsell-container-page .hero-copy { text-align: center; }
          .upsell-container-page .hero-lead { margin-right: auto; margin-left: auto; }
          .upsell-container-page .quick-benefits { max-width: 580px; margin-right: auto; margin-left: auto; text-align: left; }
          .upsell-container-page .price-card { justify-content: center; }
          .upsell-container-page .product-stage { max-width: 590px; margin: 0 auto; }
          .upsell-container-page .cards { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 580px) {
          .upsell-container-page .container { width: min(100% - 28px, 1120px); }
          .upsell-container-page .hero { padding: 42px 0 48px; }
          .upsell-container-page section { padding: 58px 0; }
          .upsell-container-page .cards, .upsell-container-page .subject-boxes { grid-template-columns: 1fr; }
          .upsell-container-page .card { padding: 23px; }
          .upsell-container-page .product-stage { padding: 13px; border-radius: 24px; }
          .upsell-container-page .product-stage img { border-radius: 17px; }
          .upsell-container-page .trust-row { gap: 8px; }
          .upsell-container-page .trust-item { padding: 11px 5px; font-size: 0.67rem; }
          .upsell-container-page .final-box { padding: 30px 20px; }
        }
      ` }} />

      <div className="topbar">Atenção: não feche esta página antes de conhecer esta oferta</div>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">O próximo passo para parar de improvisar</p>
              <h1>Você já tem as dinâmicas. Agora pare de perder horas montando cada aula <span className="accent">do zero.</span></h1>
              <p className="hero-lead">
                Adicione agora uma biblioteca com <strong>100 sequências didáticas completas</strong> e transforme ideias soltas
                em aulas organizadas, com começo, desenvolvimento e fechamento.
              </p>

              <ul className="quick-benefits">
                <li><span className="check">✓</span><span>Abra o PDF, escolha a aula e saiba exatamente o que fazer</span></li>
                <li><span className="check">✓</span><span>50 aulas de Filosofia + 50 aulas de Sociologia</span></li>
                <li><span className="check">✓</span><span>Roteiros de 50 minutos com mediação, avaliação e continuidade</span></li>
              </ul>

              <div className="price-card" aria-label="Preço da oferta">
                <span className="price-label">Adicione as 100 aulas por apenas</span>
                <strong className="price">R$ 47,90</strong>
                <p className="payment-note">Pagamento único • Sem assinatura • Acesso digital</p>
              </div>
            </div>

            <div>
              <div className="product-stage">
                <img
                  src="/images/Mockup_Upsell_Biblioteca_Aulas_Prontas.webp"
                  alt="Mockup da Biblioteca de Aulas Prontas com 100 sequências didáticas"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="trust-row" aria-label="Características do produto">
                <div className="trust-item">100 aulas</div>
                <div className="trust-item">PDF digital</div>
                <div className="trust-item">Ensino Médio</div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Chega de encarar uma página em branco</p>
              <h2>Não compre apenas atividades. Tenha a <span className="accent">aula inteira</span> organizada.</h2>
              <p>Enquanto uma dinâmica entrega uma ideia, esta biblioteca mostra como transformar essa ideia em uma aula completa e aplicável.</p>
            </div>

            <div className="cards">
              <article className="card">
                <div className="card-number">01</div>
                <h3>Objetivo de aprendizagem</h3>
                <p>Entre em sala sabendo qual resultado conduzir e observar — sem decidir tudo na última hora.</p>
              </article>
              <article className="card">
                <div className="card-number">02</div>
                <h3>Conceitos-chave</h3>
                <p>Evite explicações soltas: tenha os conceitos que dão sentido à atividade.</p>
              </article>
              <article className="card">
                <div className="card-number">03</div>
                <h3>Roteiro com tempo</h3>
                <p>Pare de calcular tudo mentalmente: cada etapa já vem distribuída dentro de 50 minutos.</p>
              </article>
              <article className="card">
                <div className="card-number">04</div>
                <h3>Perguntas de mediação</h3>
                <p>Não deixe o debate morrer: use perguntas prontas para aprofundar o raciocínio.</p>
              </article>
              <article className="card">
                <div className="card-number">05</div>
                <h3>Evidência de aprendizagem</h3>
                <p>Saiba o que observar para não terminar a aula sem saber se houve aprendizagem.</p>
              </article>
              <article className="card">
                <div className="card-number">06</div>
                <h3>Acesso e continuidade</h3>
                <p>Adapte a participação e continue o tema sem precisar recomeçar o planejamento.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="contents">
          <div className="container contents-grid">
            <div className="contents-copy">
              <p className="eyebrow">Conteúdo da biblioteca</p>
              <h2><span className="gold-accent">100 aulas prontas</span> para você nunca mais depender da mesma atividade.</h2>
              <p>
                Tenha repertório para differentes turmas, temas e momentos do semestre sem repetir sempre o mesmo formato.
              </p>

              <div className="subject-boxes">
                <div className="subject-box">
                  <strong>50</strong>
                  <span>aulas de Filosofia</span>
                </div>
                <div className="subject-box">
                  <strong>50</strong>
                  <span>aulas de Sociologia</span>
                </div>
              </div>
            </div>

            <ul className="lesson-list">
              <li><span className="mini-check">✓</span> Dilemas éticos e experiências de pensamento</li>
              <li><span className="mini-check">✓</span> Cultura, identidade e vida em sociedade</li>
              <li><span className="mini-check">✓</span> Filosofia política, conhecimento e valores</li>
              <li><span className="mini-check">✓</span> Mídia, desigualdade e transformações sociais</li>
              <li><span className="mini-check">✓</span> Debates, análises e produções em grupo</li>
              <li><span className="mini-check">✓</span> Sínteses e registros de aprendizagem</li>
            </ul>
          </div>
        </section>

        <section className="final-section">
          <div className="container">
            <div className="final-box">
              <p className="eyebrow">Biblioteca de Aulas Prontas</p>
              <h2>Quanto vale recuperar as horas que você perde planejando <span className="accent">tudo do zero?</span></h2>
              <p>
                Por R$ 47,90, você recebe 100 sequências completas em PDF para escolher, adaptar e aplicar durante todo o semestre.
              </p>
              <div className="final-price">R$ 47,90</div>
              <p className="native-note">Decida agora usando as opções exibidas pela Hotmart nesta página.</p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        Produto digital em PDF. Nenhum material físico será enviado. Adapte as propostas à realidade da sua turma e ao currículo da sua rede.
      </footer>
    </div>
  );
}
