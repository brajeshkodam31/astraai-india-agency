export default function Process() {
  return (
    <section className="process-section">
      <h2 className="process-title">How It Works</h2>
      <p className="process-subtitle">
        From concept to conversion in three simple steps
      </p>

      <div className="process-steps">
        <div className="process-step">
          <div className="step-number">01</div>
          <h3>Discover</h3>
          <p>
            We analyze your business, understand your customer journey, and
            identify automation opportunities.
          </p>
        </div>

        <div className="process-step">
          <div className="step-number">02</div>
          <h3>Build & Train</h3>
          <p>
            Our team builds custom AI chatbots trained on your brand voice,
            products, and customer data.
          </p>
        </div>

        <div className="process-step">
          <div className="step-number">03</div>
          <h3>Deploy & Optimize</h3>
          <p>
            Launch your AI assistant and continuously optimize based on real
            conversations and conversions.
          </p>
        </div>
      </div>

      <style jsx>{`
        .process-section {
          min-height: 100vh;
          background: #050505;
          padding: 100px 60px;
          color: #ffffff;
          font-family: Inter, system-ui, sans-serif;
          text-align: center;
        }

        .process-title {
          font-size: 48px;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .process-subtitle {
          font-size: 18px;
          color: #b5b5b5;
          margin-bottom: 80px;
        }

        .process-steps {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 60px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .process-step {
          max-width: 320px;
          margin: 0 auto;
        }

        .step-number {
          font-size: 64px;
          font-weight: 700;
          color: rgba(0, 255, 170, 0.45);
          margin-bottom: 20px;
        }

        .process-step h3 {
          font-size: 22px;
          font-weight: 600;
          margin-bottom: 14px;
        }

        .process-step p {
          font-size: 15px;
          line-height: 1.6;
          color: #cfcfcf;
        }
      `}</style>
    </section>
  );
}
