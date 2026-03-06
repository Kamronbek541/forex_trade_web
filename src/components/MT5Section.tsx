import Image from "next/image";

export default function MT5Section() {
  return (
    <section
      id="mt5"
      style={{
        backgroundColor: "#0328EE",
        overflow: "visible",
        position: "relative",
        marginTop: "80px",
      }}
    >
      <div className="site-container">
        <div className="sec5-grid">
          {/* Left: text */}
          <div className="sec5-text">
            <h2 className="sec5-title">
              MT5 Automation Built for
              <br />
              Precision
            </h2>
            <p className="sec5-desc">
              Our forex trading bot is designed to run seamlessly on MetaTrader 5
              (MT5) — one of the world&apos;s most trusted trading platforms.
              With MT5 integration, you can automate trade execution directly
              within a familiar trading environment.
            </p>
            <div style={{ marginTop: "28px" }}>
              <a
                href="https://t.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="sec5-btn"
              >
                GET MT5
              </a>
            </div>
          </div>

          {/* Right: image */}
          <div className="sec5-image-col">
            <Image
              src="/sec5_hero.png"
              alt="MT5 trading platform"
              width={600}
              height={600}
              className="sec5-image"
            />
          </div>
        </div>
      </div>

      <style>{`
        .sec5-grid {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .sec5-text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-top: 48px;
          padding-bottom: 48px;
        }

        .sec5-title {
          font-size: clamp(24px, 3.2vw, 40px);
          font-weight: 700;
          line-height: 1.15;
        }

        .sec5-desc {
          margin-top: 20px;
          color: rgba(255,255,255,0.7);
          font-size: 15px;
          line-height: 1.7;
          max-width: 460px;
        }

        .sec5-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background-color: #fff;
          color: #010725;
          font-weight: 600;
          padding: 14px 32px;
          border-radius: 999px;
          font-size: 14px;
          text-decoration: none;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .sec5-image-col {
          display: flex;
          align-items: flex-end;
          justify-content: center;
          overflow: visible;
        }

        .sec5-image {
          width: 100%;
          max-width: 340px;
          height: auto;
          display: block;
        }

        @media (max-width: 767px) {
          .sec5-text {
            text-align: center;
            align-items: center;
            padding-top: 40px;
            padding-bottom: 32px;
          }

          .sec5-desc {
            max-width: 360px;
          }

          .sec5-image {
            max-width: 280px;
          }
        }

        @media (min-width: 1024px) {
          .sec5-grid {
            display: grid !important;
            grid-template-columns: 1fr 1fr;
            gap: 0;
          }

          .sec5-text {
            padding-top: 56px;
            padding-bottom: 56px;
          }

          .sec5-image-col {
            justify-content: flex-end;
            align-items: flex-end;
            margin-top: -120px;
            margin-bottom: -30px;
          }

          .sec5-image {
            max-width: 620px;
          }
        }
      `}</style>
    </section>
  );
}
