import { useEffect } from 'react';

export default function ThankYouPage() {
  useEffect(() => {
    // Set exact document title
    document.title = "Obrigado";

    // Update meta description if needed
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Obrigado pela sua compra!');
    }
  }, []);

  return (
    <div className="thankyou-container-page">
      {/* Inject exact CSS inside style block */}
      <style dangerouslySetInnerHTML={{ __html: `
        :root {
          --sky: #0284c7;
          --green: #22c55e;
          --yellow: #f0c040;
          --slate: #0f172a;
          --muted: #64748b;
          --line: #e2e8f0;
        }

        .thankyou-container-page {
          min-height: 100vh;
          margin: 0;
          display: grid;
          place-items: center;
          padding: 24px;
          background:
            radial-gradient(circle at 50% 15%, rgba(2, 132, 199, 0.12), transparent 34%),
            #f8fafc;
          color: var(--slate);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          text-align: center;
        }

        .thankyou-container-page .card {
          position: relative;
          width: min(680px, 100%);
          padding: clamp(38px, 7vw, 68px) clamp(24px, 7vw, 62px);
          overflow: hidden;
          border: 1px solid var(--line);
          border-radius: 32px;
          background: rgba(255, 255, 255, 0.96);
          box-shadow: 0 24px 70px rgba(15, 23, 42, 0.12);
        }

        .thankyou-container-page .card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 7px;
          background: linear-gradient(90deg, var(--sky), var(--green), var(--yellow));
        }

        .thankyou-container-page .check {
          display: grid;
          place-items: center;
          width: 76px;
          height: 76px;
          margin: 0 auto 25px;
          border-radius: 50%;
          color: #ffffff;
          background: var(--green);
          box-shadow: 0 14px 30px rgba(34, 197, 94, 0.28);
          font-size: 2.2rem;
          font-weight: 950;
          line-height: 1;
        }

        .thankyou-container-page h1 {
          margin: 0 0 16px;
          font-size: clamp(2.2rem, 7vw, 4.4rem);
          font-weight: 950;
          line-height: 1;
          letter-spacing: -0.055em;
        }

        .thankyou-container-page h1 span {
          color: var(--sky);
        }

        .thankyou-container-page p {
          margin: 0;
          color: var(--muted);
          font-size: clamp(1.08rem, 3vw, 1.4rem);
          font-weight: 700;
          line-height: 1.5;
        }

        @media (max-width: 480px) {
          .thankyou-container-page .card {
            border-radius: 24px;
          }

          .thankyou-container-page .check {
            width: 66px;
            height: 66px;
            font-size: 1.9rem;
          }
        }
      ` }} />

      <main className="card">
        <div className="check" aria-hidden="true">✓</div>
        <h1><span>Obrigado</span> pela sua compra!</h1>
        <p>Seu material chegará por e-mail.</p>
      </main>
    </div>
  );
}
