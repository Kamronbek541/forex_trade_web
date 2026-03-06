import Image from "next/image";

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <Image
        src="/hero_back.png"
        alt=""
        fill
        style={{ objectFit: "cover", objectPosition: "center" }}
        priority
      />

      <div
        className="hero-overlay"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
        }}
      />

      <div className="hero-content site-container">
        <div className="hero-text-block">
          <h1 className="hero-title">
            Trade Smarter with
            <br />
            Forex Trading Bot
          </h1>

          <p className="hero-desc">
            Unlock institutional-grade performance with an advanced Forex
            Trading Bot powered by machine learning and professional market
            analysis. Built to monitor global currency markets 24/7, it
            identifies high-probability opportunities, executes with precision,
            and applies disciplined risk management automatically — so you can
            trade smarter and faster.
          </p>

          <div style={{ marginTop: "32px" }}>
            <a
              href="https://t.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn"
            >
              Join Telegram Channel
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .hero-overlay {
          background: linear-gradient(
            to right,
            rgba(1,7,37,0.75) 0%,
            rgba(1,7,37,0.35) 50%,
            transparent 100%
          );
        }

        .hero-content {
          position: relative;
          z-index: 10;
          padding-top: 120px;
          padding-bottom: 64px;
        }

        .hero-text-block {
          max-width: 600px;
        }

        .hero-title {
          color: #fff;
          font-weight: 700;
          font-size: clamp(32px, 5vw, 64px);
          line-height: 1.08;
          letter-spacing: -0.02em;
        }

        .hero-desc {
          color: rgba(255,255,255,0.6);
          margin-top: 28px;
          font-size: clamp(14px, 1.1vw, 17px);
          line-height: 1.65;
          max-width: 560px;
        }

        .hero-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background-color: #0328EE;
          color: #fff;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 16px 32px;
          border-radius: 999px;
          font-size: 14px;
          text-decoration: none;
        }

        @media (max-width: 767px) {
          .hero-overlay {
            background: linear-gradient(
              to bottom,
              rgba(1,7,37,0.5) 0%,
              rgba(1,7,37,0.85) 100%
            ) !important;
          }

          .hero-content {
            padding-top: 100px;
            padding-bottom: 48px;
          }

          .hero-text-block {
            text-align: center;
            max-width: 100%;
          }

          .hero-title {
            font-size: clamp(28px, 8vw, 40px);
          }

          .hero-desc {
            font-size: 14px;
            margin-left: auto;
            margin-right: auto;
            max-width: 400px;
          }

          .hero-btn {
            padding: 14px 28px;
            font-size: 13px;
          }
        }
      `}</style>
    </section>
  );
}
