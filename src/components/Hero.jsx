export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-badge">
        ✨ AI-Powered Sales Automation
      </div>

      <h1 className="hero-title">
        AI Chatbots That <span>Sell 24/7</span>
      </h1>

      <p className="hero-subtitle">
        We build AI sales chatbots for websites & WhatsApp that convert visitors
        into customers.
      </p>

<a
  href="https://wa.me/919021932022?text=Hi%20AstraAI%20India,%20I%20want%20a%20free%20AI%20chatbot%20demo"
  target="_blank"
  rel="noopener noreferrer"
  className="hero-button"
>
  Book Free Demo <span>→</span>
</a>

      <style jsx>{`
        .hero-section {
          min-height: 100vh;
          padding: 0 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          background: #050505;
          color: #ffffff;
          font-family: Inter, system-ui, sans-serif;
        }

        /* Badge */
        .hero-badge {
          padding: 8px 16px;
          border-radius: 999px;
          font-size: 14px;
          font-weight: 500;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
          margin-bottom: 28px;
        }

        /* Title */
        .hero-title {
          font-size: 64px;
          font-weight: 800;
          line-height: 1.1;
          max-width: 900px;
          margin-bottom: 24px;
        }

        .hero-title span {
          color: #00ff99;
        }

        /* Subtitle */
        .hero-subtitle {
          font-size: 18px;
          color: #cfcfcf;
          max-width: 620px;
          line-height: 1.6;
          margin-bottom: 40px;
        }

        /* CTA Button */
        .hero-button {
          padding: 16px 40px;
          font-size: 16px;
          font-weight: 600;
          border-radius: 14px;
          background: #00ff99;
          color: #003322;
          border: none;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          transition: all 0.3s ease;
          box-shadow: 0 0 30px rgba(0, 255, 153, 0.45);
          text-decoration: none;
          color: #003322;

        }

        .hero-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 0 45px rgba(0, 255, 153, 0.75);
        
        }

        .hero-button span {
          font-size: 18px;
          transition: transform 0.3s ease;
        }

        .hero-button:hover span {
          transform: translateX(6px);
        }

        /* Mobile */
        @media (max-width: 768px) {
          .hero-title {
            font-size: 42px;
          }

          .hero-subtitle {
            font-size: 16px;
          }
        }
      `}</style>
    </section>
  );
}
