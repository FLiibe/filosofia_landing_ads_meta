import { useEffect } from 'react';

export default function DownsellPage() {
  useEffect(() => {
    // Set exact document title
    document.title = "Aulas Prontas Essenciais | Oferta Alternativa";

    // Set page description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Aulas Prontas Essenciais com 40 sequências didáticas de Filosofia e Sociologia para o Ensino Médio.');
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Aulas Prontas Essenciais com 40 sequências didáticas de Filosofia e Sociologia para o Ensino Médio.";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="downsell-container-page">
      {/* Inject exact CSS inside style block */}
      <style dangerouslySetInnerHTML={{ __html: `
        :root {
          --navy: #0f172a;
          --navy-2: #334155;
          --sky: #0284c7;
          --green: #22c55e;
          --gold: #f0c040;
          --gold-light: #fff8dc;
          --cream: #f8fafc;
          --white: #ffffff;
          --text: #334155;
          --muted: #64748b;
          --line: #e2e8f0;
          --shadow: 0 18px 46px rgba(15, 23, 42, 0.12);
        }

        .downsell-container-page {
          margin: 0;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          color: var(--text);
          background: var(--cream);
          line-height: 1.6;
          min-height: 100vh;
        }

        .downsell-container-page img { display: block; max-width: 100%; }
        .downsell-container-page h1, 
        .downsell-container-page h2, 
        .downsell-container-page h3, 
        .downsell-container-page p { margin-top: 0; }

        .downsell-container-page .topbar {
          padding: 11px 20px;
          color: var(--white);
          background: #dc2626;
          text-align: center;
          font-size: 0.82rem;
          font-weight: 900;
          letter-spacing: 0.075em;
          text-transform: uppercase;
        }

        .downsell-container-page .container {
          width: min(1080px, calc(100% - 40px));
          margin: 0 auto;
        }

        .downsell-container-page .hero {
          padding: 68px 0 62px;
          background:
            radial-gradient(circle at 50% 0%, rgba(2, 132, 199, 0.09), transparent 42%),
            #ffffff;
        }

        .downsell-container-page .hero-grid {
          display: grid;
          grid-template-columns: 1fr 0.9fr;
          gap: 58px;
          align-items: center;
        }

        .downsell-container-page .eyebrow {
          display: inline-block;
          margin: 0 0 17px;
          padding: 7px 12px;
          border-radius: 999px;
          color: #0369a1;
          background: #e0f2fe;
          font-size: 0.8rem;
          font-weight: 850;
          letter-spacing: 0.07em;
          text-transform: uppercase;
        }

        .downsell-container-page h1 {
          margin-bottom: 19px;
          color: var(--navy);
          font-size: clamp(2.25rem, 5.5vw, 4.35rem);
          line-height: 1.03;
          letter-spacing: -0.045em;
        }

        .downsell-container-page .accent { color: var(--sky); }

        .downsell-container-page .gold-accent { color: var(--gold); }

        .downsell-container-page .hero-lead {
          margin-bottom: 25px;
          color: #475569;
          font-size: clamp(1.04rem, 1.8vw, 1.23rem);
        }

        .downsell-container-page .benefits {
          display: grid;
          gap: 11px;
          margin: 0 0 28px;
          padding: 0;
          list-style: none;
        }

        .downsell-container-page .benefits li {
          display: flex;
          gap: 11px;
          align-items: flex-start;
          font-weight: 650;
        }

        .downsell-container-page .check {
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
          font-weight: 950;
        }

        .downsell-container-page .price-card {
          display: inline-flex;
          flex-wrap: wrap;
          gap: 8px 17px;
          align-items: center;
          padding: 18px 22px;
          border: 2px solid rgba(2, 132, 199, 0.22);
          border-radius: 18px;
          background: var(--white);
          box-shadow: 0 10px 28px rgba(2, 132, 199, 0.08);
        }

        .downsell-container-page .price-label {
          color: var(--muted);
          font-size: 0.86rem;
          font-weight: 800;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .downsell-container-page .price {
          color: var(--sky);
          font-size: clamp(2.1rem, 4vw, 3rem);
          font-weight: 900;
          line-height: 1;
          letter-spacing: -0.045em;
        }

        .downsell-container-page .payment-note {
          flex-basis: 100%;
          margin: 0;
          color: var(--muted);
          font-size: 0.9rem;
        }

        .downsell-container-page .product-stage {
          position: relative;
          padding: 20px;
          border: 1px solid rgba(2, 132, 199, 0.18);
          border-radius: 32px;
          background: rgba(255, 255, 255, 0.72);
          box-shadow: var(--shadow);
        }

        .downsell-container-page .product-stage::before {
          content: "Edição essencial";
          position: absolute;
          z-index: 2;
          top: 15px;
          right: 15px;
          padding: 8px 12px;
          border-radius: 999px;
          color: var(--navy);
          background: var(--gold);
          font-size: 0.72rem;
          font-weight: 900;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .downsell-container-page .product-stage img {
          width: 100%;
          border-radius: 22px;
        }

        .downsell-container-page .stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin-top: 16px;
        }

        .downsell-container-page .stat {
          padding: 13px 8px;
          border-radius: 13px;
          color: var(--navy);
          background: var(--white);
          text-align: center;
          box-shadow: 0 8px 18px rgba(16, 43, 60, 0.06);
          font-size: 0.76rem;
          font-weight: 850;
        }

        .downsell-container-page section { padding: 74px 0; }

        .downsell-container-page .section-heading {
          max-width: 720px;
          margin: 0 auto 38px;
          text-align: center;
        }

        .downsell-container-page .section-heading h2 {
          margin-bottom: 13px;
          color: var(--navy);
          font-size: clamp(1.9rem, 4vw, 2.85rem);
          line-height: 1.12;
          letter-spacing: -0.035em;
        }

        .downsell-container-page .section-heading p { color: var(--muted); }

        .downsell-container-page .steps {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }

        .downsell-container-page .step {
          padding: 27px 22px;
          border: 1px solid var(--line);
          border-radius: 20px;
          background: var(--white);
          box-shadow: 0 10px 27px rgba(16, 43, 60, 0.055);
        }

        .downsell-container-page .step-number {
          margin-bottom: 14px;
          color: var(--sky);
          font-size: 1.8rem;
          font-weight: 950;
          line-height: 1;
        }

        .downsell-container-page .step h3 {
          margin-bottom: 7px;
          color: var(--navy);
          font-size: 1.02rem;
        }

        .downsell-container-page .step p {
          margin-bottom: 0;
          color: var(--muted);
          font-size: 0.91rem;
        }

        .downsell-container-page .inside {
          color: var(--text);
          background: #f8fafc;
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
        }

        .downsell-container-page .inside-grid {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 50px;
          align-items: center;
        }

        .downsell-container-page .inside h2 {
          margin-bottom: 14px;
          color: var(--navy);
          font-size: clamp(2rem, 4vw, 3rem);
          line-height: 1.1;
          letter-spacing: -0.035em;
        }

        .downsell-container-page .inside-copy > p { color: var(--muted); }

        .downsell-container-page .subject-count {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 13px;
          margin-top: 24px;
        }

        .downsell-container-page .subject {
          padding: 21px;
          border: 1px solid var(--line);
          border-radius: 17px;
          background: var(--white);
          box-shadow: 0 8px 20px rgba(15, 23, 42, 0.05);
        }

        .downsell-container-page .subject strong {
          display: block;
          color: var(--sky);
          font-size: 1.75rem;
          line-height: 1;
        }

        .downsell-container-page .subject span { font-weight: 750; }

        .downsell-container-page .included-list {
          display: grid;
          gap: 11px;
          margin: 0;
          padding: 25px;
          border-radius: 22px;
          color: var(--text);
          background: var(--white);
          box-shadow: var(--shadow);
          list-style: none;
        }

        .downsell-container-page .included-list li {
          display: flex;
          gap: 12px;
          align-items: center;
          padding-bottom: 11px;
          border-bottom: 1px solid var(--line);
          font-weight: 700;
        }

        .downsell-container-page .included-list li:last-child {
          padding-bottom: 0;
          border-bottom: 0;
        }

        .downsell-container-page .mini-check { color: var(--green); font-weight: 950; }

        .downsell-container-page .final-section {
          padding: 76px 0 88px;
          text-align: center;
          background: linear-gradient(180deg, var(--cream), #ffffff);
        }

        .downsell-container-page .final-box {
          max-width: 820px;
          margin: 0 auto;
          padding: 40px;
          border: 1px solid var(--line);
          border-radius: 27px;
          background: var(--white);
          box-shadow: var(--shadow);
        }

        .downsell-container-page .final-box h2 {
          margin-bottom: 12px;
          color: var(--navy);
          font-size: clamp(1.85rem, 4vw, 2.7rem);
          line-height: 1.12;
        }

        .downsell-container-page .final-box p {
          max-width: 660px;
          margin: 0 auto 21px;
          color: var(--muted);
        }

        .downsell-container-page .final-price {
          color: var(--sky);
          font-size: 2.6rem;
          font-weight: 900;
          letter-spacing: -0.04em;
        }

        .downsell-container-page .native-note {
          margin-top: 10px !important;
          font-size: 0.84rem;
        }

        .downsell-container-page footer {
          padding: 24px 20px;
          color: #738087;
          background: #f0eee8;
          text-align: center;
          font-size: 0.78rem;
        }

        @media (max-width: 850px) {
          .downsell-container-page .hero-grid, 
          .downsell-container-page .inside-grid { grid-template-columns: 1fr; }
          .downsell-container-page .hero-grid { gap: 38px; }
          .downsell-container-page .hero-copy { text-align: center; }
          .downsell-container-page .benefits { max-width: 560px; margin-right: auto; margin-left: auto; text-align: left; }
          .downsell-container-page .price-card { justify-content: center; }
          .downsell-container-page .product-stage { max-width: 570px; margin: 0 auto; }
          .downsell-container-page .steps { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 560px) {
          .downsell-container-page .container { width: min(100% - 28px, 1080px); }
          .downsell-container-page .hero { padding: 42px 0 48px; }
          .downsell-container-page section { padding: 56px 0; }
          .downsell-container-page .steps, 
          .downsell-container-page .subject-count { grid-template-columns: 1fr; }
          .downsell-container-page .product-stage { padding: 13px; border-radius: 23px; }
          .downsell-container-page .product-stage img { border-radius: 16px; }
          .downsell-container-page .stats { gap: 7px; }
          .downsell-container-page .stat { padding: 11px 5px; font-size: 0.66rem; }
          .downsell-container-page .final-box { padding: 30px 20px; }
        }
      `}} />

      <div className="topbar">Espere: você ainda pode levar uma versão mais acessível</div>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Não saia sem nenhuma aula pronta</p>
              <h1>Se 100 aulas não cabem no seu orçamento agora, comece com as <span className="accent">40 essenciais.</span></h1>
              <p className="hero-lead">
                Você não precisa voltar a planejar tudo do zero. Leve <strong>40 sequências didáticas completas</strong> de Filosofia e Sociologia por um valor menor e já tenha o que aplicar nas próximas aulas.
              </p>

              <ul className="benefits">
                <li><span className="check">✓</span><span>Abra o PDF e pare de encarar uma página em branco</span></li>
                <li><span className="check">✓</span><span>20 aulas de Filosofia + 20 aulas de Sociologia</span></li>
                <li><span className="check">✓</span><span>Roteiros completos de 50 minutos, prontos para adaptar</span></li>
              </ul>

              <div className="price-card" aria-label="Preço da oferta alternativa">
                <span className="price-label">Leve a edição essencial por apenas</span>
                <strong className="price">R$ 24,90</strong>
                <p className="payment-note">Pagamento único • Sem assinatura • Acesso digital</p>
              </div>
            </div>

            <div>
              <div className="product-stage">
                <img
                  src="/images/Mockup_Downsell_Aulas_Prontas_Essenciais.webp"
                  alt="Mockup das Aulas Prontas Essenciais com 40 sequências didáticas"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="stats" aria-label="Características do produto">
                <div className="stat">40 aulas</div>
                <div className="stat">PDF digital</div>
                <div className="stat">Ensino Médio</div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Uma solução menor, mas realmente utilizável</p>
              <h2>Você não precisa de mais ideias soltas. Precisa saber <span className="accent">o que fazer em sala.</span></h2>
              <p>Cada sequência organiza os elementos essenciais da aula para você entrar preparado, conduzir a turma e concluir o tema.</p>
            </div>

            <div className="steps">
              <article className="step">
                <div className="step-number">01</div>
                <h3>Defina o objetivo</h3>
                <p>Entre em sala sabendo qual aprendizagem conduzir e observar.</p>
              </article>
              <article class="step">
                <div className="step-number">02</div>
                <h3>Prepare o tema</h3>
                <p>Evite improvisos consultando antes os conceitos e materiais necessários.</p>
              </article>
              <article className="step">
                <div className="step-number">03</div>
                <h3>Conduza a aula</h3>
                <p>Siga abertura, atividade, debate e síntese sem montar cada etapa do zero.</p>
              </article>
              <article className="step">
                <div className="step-number">04</div>
                <h3>Observe o resultado</h3>
                <p>Termine a aula sabendo quais evidências demonstram aprendizagem.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="inside">
          <div className="container inside-grid">
            <div className="inside-copy">
              <p className="eyebrow">O que você recebe</p>
              <h2><span className="gold-accent">40 aulas completas</span> custam menos do que continuar perdendo horas toda semana.</h2>
              <p>
                Uma edição compacta para quem quer economizar agora, mas ainda precisa de material prático para as próximas semanas.
              </p>

              <div className="subject-count">
                <div className="subject">
                  <strong>20</strong>
                  <span>aulas de Filosofia</span>
                </div>
                <div className="subject">
                  <strong>20</strong>
                  <span>aulas de Sociologia</span>
                </div>
              </div>
            </div>

            <ul className="included-list">
              <li><span className="mini-check">✓</span> Objetivo de aprendizagem</li>
              <li><span className="mini-check">✓</span> Conceitos-chave</li>
              <li><span className="mini-check">✓</span> Materiais e preparação</li>
              <li><span className="mini-check">✓</span> Roteiro com divisão do tempo</li>
              <li><span className="mini-check">✓</span> Perguntas para mediação</li>
              <li><span className="mini-check">✓</span> Avaliação, acesso e continuidade</li>
            </ul>
          </div>
        </section>

        <section className="final-section">
          <div className="container">
            <div className="final-box">
              <p className="eyebrow">Aulas Prontas Essenciais</p>
              <h2>Não volte para a página em branco. Comece agora com as <span className="accent">40 aulas essenciais.</span></h2>
              <p>
                Por R$ 24,90, você recebe o material em PDF para escolher, adaptar e aplicar nas suas turmas.
              </p>
              <div className="final-price">R$ 24,90</div>
              <p className="native-note">Decida agora usando as opções exibidas pela Hotmart nesta página.</p>
            </div>
          </div>
        </section>
      </main>

      <footer style={{ padding: "24px 20px", color: "#738087", background: "#f0eee8", textAlign: "center", fontSize: "0.78rem" }}>
        Produto digital em PDF. Nenhum material físico será enviado. Adapte as propostas à realidade da sua turma e ao currículo da sua rede.
      </footer>
    </div>
  );
}
