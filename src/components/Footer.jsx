export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h4>AstraAI India</h4>
        <p>AI Chatbots That Sell 24/7</p>
      </div>

      <div className="footer-right">
        <p>Built by Brajesh</p>
      </div>

      <style jsx>{`
        .footer {
          background: #0b0b0b;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding: 40px 60px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #ffffff;
          font-family: Inter, system-ui, sans-serif;
        }

        .footer-left h4 {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 6px;
        }

        .footer-left p {
          font-size: 14px;
          color: #b5b5b5;
        }

        .footer-right p {
          font-size: 14px;
          color: #b5b5b5;
        }

        @media (max-width: 768px) {
          .footer {
            flex-direction: column;
            text-align: center;
            gap: 16px;
          }
        }
      `}</style>
    </footer>
  );
}
