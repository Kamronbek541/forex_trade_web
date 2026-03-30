"use client";

import Image from "next/image";
import { useCallback } from "react";

const menuLeft = [
  { label: "HOME", href: "#" },
  { label: "ABOUT", href: "#about" },
  { label: "HOW TO START", href: "#how-to-start" },
];

const menuRight = [
  { label: "DOWNLOAD MT5", href: "#mt5" },
  { label: "CONTACT US", href: "#contact" },
];

export default function Footer() {
  const handleNav = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      if (href === "#") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        const navHeight = 80;
        const top =
          el.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top, behavior: "smooth" });
      }
    },
    []
  );

  return (
    <footer
      id="contact"
      style={{
        backgroundColor: "#010725",
        paddingTop: "64px",
        paddingBottom: "32px",
      }}
    >
      <div className="site-container">
        {/* Top row: logo left, socials right */}
        <div className="footer-top">
          <Image
            src="/logo.png"
            alt="ZERVEX"
            width={130}
            height={44}
            className="footer-logo"
          />
          <div style={{ display: "flex", gap: "12px" }}>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social"
            >
              <Image
                src="/footer_inst.svg"
                alt="Instagram"
                width={20}
                height={20}
                style={{ width: "20px", height: "20px" }}
              />
            </a>
            <a
              href="https://t.me/+VW_dIVh-Qf9jNDNk"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social"
            >
              <Image
                src="/footer_tg.svg"
                alt="Telegram"
                width={20}
                height={20}
                style={{ width: "20px", height: "20px" }}
              />
            </a>
          </div>
        </div>

        {/* Main: menu left + CTA card right */}
        <div className="footer-main">
          {/* Menu */}
          <div className="footer-menu-section">
            <h4 className="footer-menu-title">Menu</h4>
            <div className="footer-divider" />
            <div className="footer-menu-cols">
              <ul className="footer-menu-list">
                {menuLeft.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNav(e, link.href)}
                      className="footer-menu-link"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="footer-menu-list">
                {menuRight.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNav(e, link.href)}
                      className="footer-menu-link"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA card */}
          <div className="footer-cta-card">
            <h4 className="footer-cta-title">Start trading smart now</h4>
            <p className="footer-cta-desc">
              Join our platform to access trade opportunities backed by
              technology and experience
            </p>
            <a
              href="https://t.me/+VW_dIVh-Qf9jNDNk"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-cta-btn"
            >
              Get Trading Bot
            </a>
          </div>
        </div>

        {/* Bottom: divider + copyright */}
        <div className="footer-bottom">
          <p className="footer-copy">All rights reserved</p>
        </div>
      </div>

      <style>{`
        .footer-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 48px;
        }

        .footer-logo {
          height: 70px;
          width: auto;
        }

        .footer-social {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background-color: rgba(255,255,255,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
        }

        .footer-main {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .footer-menu-section {}

        .footer-menu-title {
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.08em;
          margin-bottom: 20px;
          text-transform: uppercase;
        }

        .footer-divider {
          width: 100%;
          height: 1px;
          background-color: rgba(255,255,255,0.1);
          margin-bottom: 20px;
        }

        .footer-menu-cols {
          display: flex;
          gap: 60px;
        }

        .footer-menu-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .footer-menu-link {
          color: rgba(255,255,255,0.6);
          font-size: 13px;
          text-decoration: none;
          letter-spacing: 0.04em;
          font-weight: 500;
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .footer-menu-link:hover {
          color: rgba(255,255,255,0.9);
        }

        .footer-cta-card {
          background-color: rgba(255,255,255,0.1);
          border-radius: 20px;
          padding: 36px 32px;
          max-width: 420px;
          width: 100%;
        }

        .footer-cta-title {
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0.08em;
          margin-bottom: 14px;
          text-transform: uppercase;
        }

        .footer-cta-desc {
          color: rgba(255,255,255,0.55);
          font-size: 14px;
          line-height: 1.65;
          margin-bottom: 24px;
        }

        .footer-cta-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background-color: #0328EE;
          color: #fff;
          font-weight: 600;
          padding: 14px 28px;
          border-radius: 999px;
          font-size: 13px;
          text-decoration: none;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .footer-bottom {
          margin-top: 48px;
          border-top: 1px solid rgba(255,255,255,0.08);
          padding-top: 24px;
        }

        .footer-copy {
          color: rgba(255,255,255,0.3);
          font-size: 13px;
        }

        @media (max-width: 767px) {
          .footer-top {
            flex-direction: column;
            gap: 24px;
            text-align: center;
            margin-bottom: 36px;
          }

          .footer-logo {
            height: 60px;
          }

          .footer-menu-section {
            text-align: center;
          }

          .footer-menu-cols {
            justify-content: center;
            gap: 40px;
          }

          .footer-menu-list {
            align-items: center;
          }

          .footer-cta-card {
            max-width: 100%;
            text-align: center;
          }

          .footer-cta-btn {
            width: 100%;
            justify-content: center;
          }

          .footer-bottom {
            text-align: center;
          }
        }

        @media (min-width: 768px) {
          .footer-main {
            flex-direction: row !important;
            justify-content: space-between !important;
            align-items: flex-start !important;
            gap: 40px;
          }

          .footer-logo {
            height: 100px;
          }
        }
      `}</style>
    </footer>
  );
}
