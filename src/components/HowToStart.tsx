import Image from "next/image";
import { Play } from "lucide-react";

const steps = [
  { icon: "/sec6_download.svg", title: "Download Dashboard" },
  { icon: "/sec6_create.svg", title: "Create a free account" },
  { icon: "/sec6_start.svg", title: "Start trading" },
];

export default function HowToStart() {
  return (
    <section
      id="how-to-start"
      style={{
        paddingTop: "100px",
        paddingBottom: "80px",
        backgroundColor: "#010725",
      }}
    >
      <div className="site-container">
        <div className="sec6-grid">
          {/* Left: title + description + steps */}
          <div className="sec6-text">
            <h2 className="sec6-title">How to Start</h2>
            <p className="sec6-desc">
              Set up in minutes, unlock AI-powered bot, and start your automated
              trading journey built for clarity and protection.
            </p>

            <div className="sec6-steps">
              {steps.map((step) => (
                <div key={step.title} className="sec6-step">
                  <div className="sec6-step-icon">
                    <Image
                      src={step.icon}
                      alt=""
                      width={26}
                      height={26}
                      style={{ width: "26px", height: "26px" }}
                    />
                  </div>
                  <span className="sec6-step-text">{step.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: video placeholder */}
          <div className="sec6-video-wrap">
            <div className="sec6-video">
              <div className="sec6-play">
                <Play
                  size={26}
                  color="#fff"
                  fill="#fff"
                  style={{ marginLeft: "3px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .sec6-grid {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .sec6-text {
          display: flex;
          flex-direction: column;
        }

        .sec6-title {
          font-size: clamp(26px, 3.5vw, 44px);
          font-weight: 700;
          line-height: 1.15;
        }

        .sec6-desc {
          margin-top: 20px;
          color: rgba(255,255,255,0.5);
          font-size: 15px;
          line-height: 1.7;
          max-width: 420px;
        }

        .sec6-steps {
          margin-top: 36px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .sec6-step {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .sec6-step-icon {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background-color: #0328EE;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .sec6-step-text {
          color: rgba(255,255,255,0.85);
          font-size: 16px;
          font-weight: 500;
        }

        .sec6-video-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .sec6-video {
          width: 100%;
          max-width: 540px;
          aspect-ratio: 16/10;
          border-radius: 20px;
          background: linear-gradient(
            135deg,
            rgba(3,40,238,0.15) 0%,
            rgba(1,7,37,0.5) 100%
          );
          border: 1px solid rgba(3,40,238,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .sec6-play {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background-color: rgba(255,255,255,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }

        @media (max-width: 767px) {
          .sec6-text {
            text-align: center;
            align-items: center;
          }

          .sec6-desc {
            max-width: 360px;
          }

          .sec6-step {
            flex-direction: column;
            text-align: center;
            gap: 12px;
          }

          .sec6-step-icon {
            width: 48px;
            height: 48px;
          }

          .sec6-video {
            aspect-ratio: 16/10;
            max-width: 100%;
          }

          .sec6-play {
            width: 56px;
            height: 56px;
          }
        }

        @media (min-width: 1024px) {
          .sec6-grid {
            display: grid !important;
            grid-template-columns: 1fr 1fr;
            gap: 60px;
            align-items: center;
          }
        }
      `}</style>
    </section>
  );
}
