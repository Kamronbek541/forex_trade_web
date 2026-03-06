import Image from "next/image";

export default function TelegramBanner() {
  return (
    <section
      style={{
        backgroundColor: "#0328EE",
        paddingTop: "32px",
        paddingBottom: "32px",
      }}
    >
      <div className="site-container">
        <div className="sec7-layout">
          {/* Left: icon + title */}
          <div className="sec7-left">
            <div className="sec7-icon-box">
              <Image
                src="/sec7_tg.svg"
                alt="Telegram"
                width={30}
                height={30}
                style={{ width: "30px", height: "30px" }}
              />
            </div>
            <h3 className="sec7-title">
              Subscribe to our Telegram
              <br />
              weekly newsletter!
            </h3>
          </div>

          {/* Right: input-like bar with text + JOIN button */}
          <div className="sec7-bar">
            <span className="sec7-bar-text">
              Stay informed with trading announcements
            </span>
            <a
              href="https://t.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="sec7-join"
            >
              JOIN
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .sec7-layout {
          display: flex;
          flex-direction: column;
          gap: 24px;
          align-items: center;
          text-align: center;
        }

        .sec7-left {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-shrink: 0;
        }

        .sec7-icon-box {
          width: 56px;
          height: 56px;
          border-radius: 16px;
          background-color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .sec7-title {
          font-size: clamp(16px, 2vw, 24px);
          font-weight: 700;
          line-height: 1.25;
          text-align: left;
        }

        .sec7-bar {
          display: flex;
          align-items: center;
          background-color: #fff;
          border-radius: 999px;
          padding: 6px 6px 6px 24px;
          gap: 12px;
          min-width: 0;
          width: 100%;
          max-width: 420px;
        }

        .sec7-bar-text {
          color: rgba(1,7,37,0.5);
          font-size: 13px;
          line-height: 1.4;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          flex: 1;
        }

        .sec7-join {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background-color: #0328EE;
          color: #fff;
          font-weight: 600;
          padding: 12px 28px;
          border-radius: 999px;
          font-size: 13px;
          text-decoration: none;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          flex-shrink: 0;
        }

        @media (max-width: 767px) {
          .sec7-left {
            flex-direction: column;
            text-align: center;
            gap: 16px;
          }

          .sec7-title {
            text-align: center;
            font-size: 18px;
          }

          .sec7-icon-box {
            width: 48px;
            height: 48px;
          }

          .sec7-bar {
            max-width: 100%;
            padding: 6px 6px 6px 16px;
          }

          .sec7-bar-text {
            font-size: 12px;
          }

          .sec7-join {
            padding: 10px 20px;
            font-size: 12px;
          }
        }

        @media (min-width: 900px) {
          .sec7-layout {
            flex-direction: row !important;
            align-items: center !important;
            justify-content: space-between !important;
            gap: 32px;
            text-align: left;
          }

          .sec7-bar {
            width: auto;
            max-width: none;
          }
        }
      `}</style>
    </section>
  );
}
