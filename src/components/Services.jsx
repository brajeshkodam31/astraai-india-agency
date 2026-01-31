export default function Services() {
  return (
    <section className="services-section">
      <h2 className="services-title">Our Services</h2>
      <p className="services-subtitle">
        Comprehensive AI solutions for modern businesses
      </p>

      <div className="services-grid">
        <div className="service-card">
          <div className="icon">💬</div>
          <h3>AI Sales Chatbots</h3>
          <p>
            Intelligent bots that engage visitors, answer questions, and close
            deals automatically.
          </p>
        </div>

        <div className="service-card">
          <div className="icon">📱</div>
          <h3>WhatsApp Automation</h3>
          <p>
            Automated WhatsApp conversations that nurture leads and drive
            conversions 24/7.
          </p>
        </div>

        <div className="service-card">
          <div className="icon">🌐</div>
          <h3>Website Chatbots</h3>
          <p>
            Seamlessly integrated chat solutions that provide instant support
            and capture leads.
          </p>
        </div>

        <div className="service-card">
          <div className="icon">⚡</div>
          <h3>CRM & Lead Automation</h3>
          <p>
            Smart automation that qualifies leads, updates CRM, and triggers
            follow-ups.
          </p>
        </div>
      </div>

      <style jsx>{`
        .services-section {
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

        .services-title {
          text-align: center;
          font-size: 48px;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .services-subtitle {
          text-align: center;
          font-size: 18px;
          color: #b5b5b5;
          margin-bottom: 70px;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 32px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .service-card {
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(14px);
          border-radius: 18px;
          padding: 36px 28px;
          border: 1px solid rgba(0, 255, 170, 0.12);
          transition: all 0.35s ease;
          position: relative;
          cursor: pointer;
        }

        .service-card::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 18px;
          background: radial-gradient(
            circle at top left,
            rgba(0, 255, 170, 0.25),
            transparent 60%
          );
          opacity: 0;
          transition: opacity 0.35s ease;
          pointer-events: none;
        }

        .service-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 0 40px rgba(0, 255, 170, 0.35);
          border-color: rgba(0, 255, 170, 0.45);
        }

        .service-card:hover::before {
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

        .service-card h3 {
          font-size: 22px;
          margin-bottom: 12px;
          font-weight: 600;
        }

        .service-card p {
          font-size: 15px;
          line-height: 1.6;
          color: #cfcfcf;
        }
      `}</style>
    </section>
  );
}
