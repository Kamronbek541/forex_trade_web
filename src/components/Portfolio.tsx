import Image from "next/image";

const sideCards = [
  {
    icon: "/sec2_predictive.svg",
    title: "PREDICTIVE AI MODELLING",
    description:
      "Advanced algorithms scan market data to identify high-probability opportunities.",
    position: "left-top",
  },
  {
    icon: "/sec2_economic.svg",
    title: "ECONOMIC ANALYSIS",
    description:
      "The bot integrates chart structure, technical indicators, and macroeconomic conditions.",
    position: "left-bottom",
  },
  {
    icon: "/sec2_liquidity.svg",
    title: "LIQUIDITY TRACKING",
    description:
      "Tracks institutional flow, volume, and market sentiment in real time to improve execution timing.",
    position: "right-top",
  },
  {
    icon: "/sec2_risk.svg",
    title: "RISK CONTROL",
    description:
      "Built on professional trading logic to enhance execution accuracy, consistency, and long-term performance.",
    position: "right-bottom",
  },
];

function SideCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="portfolio-side-card">
      <div className="portfolio-card-icon">
        <Image
          src={icon}
          alt=""
          width={36}
          height={36}
          style={{ width: "36px", height: "36px" }}
        />
      </div>
      <h3 className="portfolio-card-title">{title}</h3>
      <p className="portfolio-card-desc">{description}</p>
    </div>
  );
}

export default function Portfolio() {
  const left = sideCards.filter((c) => c.position.startsWith("left"));
  const right = sideCards.filter((c) => c.position.startsWith("right"));

  return (
    <section
      id="about"
      style={{
        paddingTop: "80px",
        paddingBottom: "80px",
        backgroundColor: "#010725",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "30vw",
          height: "30vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(3,40,238,0.30) 0%, rgba(3,40,238,0.08) 50%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div
        className="site-container"
        style={{ position: "relative", zIndex: 1 }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <h2 className="portfolio-heading">Build Your Winning Portfolio</h2>
          <p className="portfolio-subheading">
            Stay ahead of market volatility with an automated forex trading bot
            backed by:
          </p>
        </div>

        {/* 3-column layout */}
        <div className="portfolio-layout">
          {/* Left column */}
          <div className="portfolio-col portfolio-side-col">
            {left.map((card) => (
              <SideCard
                key={card.title}
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>

          {/* Center column */}
          <div className="portfolio-col portfolio-center-col">
            <div className="portfolio-center-card">
              <h3 className="portfolio-center-title">
                ALL-IN-ONE FOREX TRADING BOT
              </h3>
              <p className="portfolio-center-desc">
                Access AI-driven market analysis, automated execution, trade
                analytics, and position management in one streamlined interface
                built for precision and control
              </p>

              <div className="portfolio-center-img-wrap">
                <Image
                  src="/sec2_hero.png"
                  alt="Trading bot interface"
                  width={360}
                  height={560}
                  className="portfolio-center-img"
                />
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="portfolio-col portfolio-side-col">
            {right.map((card) => (
              <SideCard
                key={card.title}
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>

        {/* START NOW button */}
        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <a
            href="https://t.me/+VW_dIVh-Qf9jNDNk"
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-btn"
          >
            Start Now
          </a>
        </div>
      </div>

      <style>{`
        .portfolio-heading {
          font-size: clamp(26px, 4vw, 48px);
          font-weight: 700;
        }

        .portfolio-subheading {
          margin-top: 16px;
          color: rgba(255,255,255,0.5);
          font-size: 15px;
          max-width: 480px;
          margin-left: auto;
          margin-right: auto;
        }

        .portfolio-side-card {
          background-color: #010D50;
          border-radius: 16px;
          padding: 28px 24px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          flex: 1;
        }

        .portfolio-card-icon {
          width: 68px;
          height: 68px;
          border-radius: 16px;
          background-color: #0328EE;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          flex-shrink: 0;
        }

        .portfolio-card-title {
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0.08em;
          margin-bottom: 12px;
          text-transform: uppercase;
        }

        .portfolio-card-desc {
          color: rgba(255,255,255,0.55);
          font-size: 14px;
          line-height: 1.65;
        }

        .portfolio-center-card {
          background-color: #0328EE;
          border-radius: 20px;
          padding: 28px 24px 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          overflow: hidden;
          min-height: 420px;
        }

        .portfolio-center-title {
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 12px;
          text-align: center;
        }

        .portfolio-center-desc {
          color: rgba(255,255,255,0.75);
          font-size: 13px;
          line-height: 1.6;
          text-align: center;
          max-width: 340px;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 20px;
        }

        .portfolio-center-img-wrap {
          flex: 1;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          width: 100%;
          overflow: hidden;
          border-radius: 20px 20px 0 0;
        }

        .portfolio-center-img {
          width: 88%;
          max-width: 300px;
          height: auto;
          display: block;
          border-radius: 20px 20px 0 0;
        }

        .portfolio-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background-color: #0328EE;
          color: #fff;
          font-size: 14px;
          font-weight: 600;
          padding: 16px 40px;
          border-radius: 999px;
          text-decoration: none;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          cursor: pointer;
        }

        /* Mobile: stack everything */
        .portfolio-layout {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .portfolio-col {
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: 100%;
        }

        @media (max-width: 767px) {
          .portfolio-side-card {
            text-align: center;
            align-items: center;
          }

          .portfolio-subheading {
            font-size: 14px;
          }
        }

        /* Desktop: 3 equal columns */
        @media (min-width: 1024px) {
          .portfolio-layout {
            flex-direction: row !important;
            justify-content: space-between !important;
            align-items: stretch !important;
            gap: 2.5% !important;
          }

          .portfolio-col {
            width: 30% !important;
            flex-shrink: 0 !important;
          }

          .portfolio-center-col {
            width: 34% !important;
          }

          .portfolio-side-col {
            display: flex !important;
            flex-direction: column !important;
            gap: 20px !important;
          }

          .portfolio-center-card {
            height: 100% !important;
          }
        }

        /* Tablet: 3 cols tighter */
        @media (min-width: 768px) and (max-width: 1023px) {
          .portfolio-layout {
            flex-direction: row !important;
            flex-wrap: wrap !important;
            justify-content: center !important;
            gap: 16px !important;
          }

          .portfolio-col {
            width: 46% !important;
          }

          .portfolio-center-col {
            width: 100% !important;
            max-width: 420px !important;
          }

          .portfolio-center-card {
            min-height: 500px !important;
          }
        }
      `}</style>
    </section>
  );
}
