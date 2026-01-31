export default function CTA() {
  return (
    <section className="cta-section">
      <div className="cta-card">
        <h2>Ready to automate your sales?</h2>
        <p>
          Join forward-thinking businesses using AI to scale customer
          engagement
        </p>

        <button className="cta-button">
          Get Started <span className="arrow">→</span>
        </button>
      </div>

      <style jsx>{`
        .cta-section {
          background: #050505;
          padding: 120px 20px;
          display: flex;
          justify-content: center;
        }

        .cta-card {
          width: 100%;
          max-width: 1100px;
          text-align: center;
          padding: 90px 40px;
          border-radius: 28px;
          background: radial-gradient(
              circle at top,
              rgba(0, 255, 170, 0.18),
              transparent 65%
            ),
            rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(18px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 0 80px rgba(0, 0, 0, 0.6);
        }

        .cta-card h2 {
          font-size: 48px;
          font-weight: 700;
          margin-bottom: 18px;
          color: #ffffff;
        }

        .cta-card p {
          font-size: 18px;
          color: #cfcfcf;
          max-width: 600px;
          margin: 0 auto 40px;
          line-height: 1.6;
        }

        /* --- Button (unchanged style) --- */
        .cta-button {
          margin-top: 10px;
          padding: 16px 40px;
          font-size: 16px;
          font-weight: 600;
          border-radius: 14px;
          background: #00ff99;
          color: #000;
          border: none;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          transition: all 0.3s ease;
          box-shadow: 0 0 30px rgba(0, 255, 153, 0.45);
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 0 45px rgba(0, 255, 153, 0.7);
        }

        .arrow {
          font-size: 18px;
          transition: transform 0.3s ease;
        }

        .cta-button:hover .arrow {
          transform: translateX(6px);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .cta-card {
            padding: 70px 24px;
          }

          .cta-card h2 {
            font-size: 36px;
          }
        }
      `}</style>
    </section>
  );
}
