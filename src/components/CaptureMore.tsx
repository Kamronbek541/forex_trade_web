import Image from "next/image";

const features = [
  { icon: "/sec4_trendDetec.svg", text: "Trend detection and market direction" },
  { icon: "/sec4_volatility.svg", text: "Volatility-based execution logic" },
  { icon: "/sec4_institutional.svg", text: "Institutional liquidity zone tracking" },
  { icon: "/sec4_interest.svg", text: "Interest-rate and macro condition analysis" },
  { icon: "/sec4_centralBank.svg", text: "Central-bank sentiment monitoring" },
];

export default function CaptureMore() {
  return (
    <section
      style={{
        paddingTop: "80px",
        paddingBottom: "80px",
        backgroundColor: "#010725",
        overflow: "hidden",
      }}
    >
      <div className="sec4-wrapper">
        <div className="sec4-grid">
          {/* Left: text + bullets */}
          <div className="sec4-text-col">
            <h2 className="sec4-title">
              Capture More from Every
              <br />
              Market Move
            </h2>
            <p className="sec4-desc">
              Our AI-powered forex trading bot continuously evaluates changing
              market conditions, refines execution logic, and adapts to real-time
              price action to help you trade with greater precision, consistency,
              and control.
            </p>

            <div className="sec4-features">
              {features.map((item) => (
                <div key={item.text} className="sec4-feature">
                  <div className="sec4-feature-icon">
                    <Image
                      src={item.icon}
                      alt=""
                      width={24}
                      height={24}
                      style={{ width: "24px", height: "24px" }}
                    />
                  </div>
                  <span className="sec4-feature-text">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: laptop image — hidden on mobile */}
          <div className="sec4-image-col">
            <Image
              src="/sec4_hero.png"
              alt="Trading platform on laptop"
              width={800}
              height={500}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        .sec4-wrapper {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding-left: 24px;
          padding-right: 24px;
        }

        @media (min-width: 768px) {
          .sec4-wrapper {
            padding-left: 32px;
            padding-right: 0;
          }
        }

        .sec4-grid {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .sec4-text-col {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .sec4-title {
          font-size: clamp(24px, 3.2vw, 40px);
          font-weight: 700;
          line-height: 1.15;
        }

        .sec4-desc {
          margin-top: 24px;
          color: rgba(255,255,255,0.5);
          font-size: 15px;
          line-height: 1.7;
          max-width: 440px;
        }

        .sec4-features {
          margin-top: 32px;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .sec4-feature {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .sec4-feature-icon {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background-color: #0328EE;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .sec4-feature-text {
          color: rgba(255,255,255,0.8);
          font-size: 15px;
          font-weight: 500;
        }

        .sec4-image-col {
          display: none;
          align-items: center;
          justify-content: flex-end;
        }

        @media (max-width: 767px) {
          .sec4-text-col {
            text-align: center;
            align-items: center;
          }

          .sec4-desc {
            max-width: 400px;
          }

          .sec4-feature {
            flex-direction: column;
            text-align: center;
            gap: 12px;
          }

          .sec4-feature-icon {
            width: 44px;
            height: 44px;
          }
        }

        @media (min-width: 1024px) {
          .sec4-wrapper {
            max-width: none;
            padding-left: calc((100% - 1200px) / 2 + 32px);
            padding-right: 0;
          }

          .sec4-grid {
            display: grid !important;
            grid-template-columns: minmax(360px, 480px) 1fr;
            gap: 40px;
            align-items: center;
          }

          .sec4-image-col {
            display: flex !important;
            justify-content: flex-end;
            margin-right: 0;
          }

          .sec4-image-col img {
            max-width: none !important;
            width: 110% !important;
          }
        }
      `}</style>
    </section>
  );
}
