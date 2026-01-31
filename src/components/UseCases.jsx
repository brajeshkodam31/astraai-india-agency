export default function UseCases() {
  return (
    <section className="usecases-section">
      <h2 className="usecases-title">Use Case Examples</h2>
      <p className="usecases-subtitle">
        Tailored AI solutions for every industry
      </p>

      <div className="usecases-grid">
        <div className="usecase-card">
          <div className="icon">🛒</div>
          <h3>Ecommerce Sales Bot</h3>
          <p>
            Product recommendations, order tracking, and upselling conversations
            that increase AOV.
          </p>
        </div>

        <div className="usecase-card">
          <div className="icon">🏢</div>
          <h3>Real Estate Lead Bot</h3>
          <p>
            Property inquiries, viewing bookings, and lead qualification on
            autopilot.
          </p>
        </div>

        <div className="usecase-card featured">
          <div className="icon">🎓</div>
          <h3>Coaching Funnel Bot</h3>
          <p>
            Program discovery, application forms, and consultation booking for
            coaches.
          </p>
        </div>

        <div className="usecase-card">
          <div className="icon">🎧</div>
          <h3>Customer Support Bot</h3>
          <p>
            Instant answers to FAQs, ticket routing, and 24/7 AI-powered customer
            assistance.
          </p>
        </div>
      </div>

      <style jsx>{`
        .usecases-section {
          min-height: 100vh;
          background: radial-gradient(
              circle at top,
              rgba(0, 255, 170, 0.08),
              transparent 60%
            ),
            #050505;
          padding: 100px 60px;
          color: #ffffff;
          font-family: Inter, system-ui, sans-serif;
        }

        .usecases-title {
          text-align: center;
          font-size: 48px;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .usecases-subtitle {
          text-align: center;
          font-size: 18px;
          color: #b5b5b5;
          margin-bottom: 70px;
        }

        .usecases-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 32px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .usecase-card {
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(14px);
          border-radius: 18px;
          padding: 36px 28px;
          border: 1px solid rgba(0, 255, 170, 0.12);
          transition: all 0.35s ease;
          position: relative;
          cursor: pointer;
        }

        .usecase-card::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 18px;
          background: radial-gradient(
            circle at top right,
            rgba(0, 255, 170, 0.25),
            transparent 60%
          );
          opacity: 0;
          transition: opacity 0.35s ease;
          pointer-events: none;
        }

        .usecase-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 0 40px rgba(0, 255, 170, 0.35);
          border-color: rgba(0, 255, 170, 0.45);
        }

        .usecase-card:hover::before {
          opacity: 1;
        }

        .icon {
          width: 52px;
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 255, 170, 0.15);
          border-radius: 12px;
          font-size: 26px;
          margin-bottom: 22px;
          box-shadow: 0 0 20px rgba(0, 255, 170, 0.35);
        }

        .usecase-card h3 {
          font-size: 22px;
          margin-bottom: 12px;
          font-weight: 600;
        }

        .usecase-card p {
          font-size: 15px;
          line-height: 1.6;
          color: #cfcfcf;
        }
      `}</style>
    </section>
  );
}
