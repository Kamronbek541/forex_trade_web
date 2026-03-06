import Image from "next/image";

const bulletPoints = [
  { icon: "/sec3_automated.svg", text: "Automated trade execution" },
  { icon: "/sec3_builtin.svg", text: "Built-in risk management" },
  { icon: "/sec3_247.svg", text: "24/7 market monitoring" },
];

export default function AutomatedTrading() {
  return (
    <section
      style={{
        paddingTop: "80px",
        paddingBottom: "80px",
        backgroundColor: "#010725",
        overflow: "hidden",
      }}
    >
      <div className="site-container">
        <div className="sec3-grid">
          {/* Globe image */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Image
              src="/sec3_globe.png"
              alt="Global forex trading"
              width={600}
              height={600}
              className="sec3-globe"
            />
          </div>

          {/* Text content */}
          <div className="sec3-text">
            <h2 className="sec3-title">
              Automated Forex Trading
              <br />
              at Your Fingertips
            </h2>
            <p className="sec3-desc">
              Activate a forex trading bot built to monitor currency markets in
              real time, execute trades with precision, and manage risk
              automatically. The system combines data-driven market analysis with
              disciplined execution logic to help you trade efficiently and
              consistently
            </p>

            <div className="sec3-bullets">
              {bulletPoints.map((item) => (
                <div key={item.text} className="sec3-bullet">
                  <div className="sec3-bullet-icon">
                    <Image
                      src={item.icon}
                      alt=""
                      width={28}
                      height={28}
                      style={{ width: "28px", height: "28px" }}
                    />
                  </div>
                  <span className="sec3-bullet-text">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .sec3-grid {
          display: flex;
          flex-direction: column;
          gap: 40px;
          align-items: center;
        }

        .sec3-globe {
          width: 100%;
          max-width: 320px;
          height: auto;
          display: block;
        }

        .sec3-text {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .sec3-title {
          font-size: clamp(24px, 3.5vw, 44px);
          font-weight: 700;
          line-height: 1.12;
        }

        .sec3-desc {
          margin-top: 24px;
          color: rgba(255,255,255,0.5);
          font-size: 15px;
          line-height: 1.7;
          max-width: 480px;
        }

        .sec3-bullets {
          margin-top: 32px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .sec3-bullet {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .sec3-bullet-icon {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background-color: #0328EE;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .sec3-bullet-text {
          color: rgba(255,255,255,0.8);
          font-size: 16px;
          font-weight: 500;
        }

        @media (max-width: 767px) {
          .sec3-text {
            text-align: center;
            align-items: center;
          }

          .sec3-desc {
            max-width: 400px;
          }

          .sec3-bullet {
            flex-direction: column;
            text-align: center;
            gap: 12px;
          }

          .sec3-bullet-icon {
            width: 48px;
            height: 48px;
          }

          .sec3-globe {
            max-width: 260px;
          }
        }

        @media (min-width: 1024px) {
          .sec3-grid {
            display: grid !important;
            grid-template-columns: 1fr 1fr;
            gap: 60px;
            align-items: center;
          }

          .sec3-globe {
            max-width: 540px;
          }
        }
      `}</style>
    </section>
  );
}
