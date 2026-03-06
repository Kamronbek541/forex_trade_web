"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const navLinks = [
  { label: "HOME", href: "#", sectionId: "" },
  { label: "ABOUT", href: "#about", sectionId: "about" },
  { label: "MT5", href: "#mt5", sectionId: "mt5" },
  { label: "HOW TO START", href: "#how-to-start", sectionId: "how-to-start" },
  { label: "CONTACT US", href: "#contact", sectionId: "contact" },
];

const sectionIds = ["about", "mt5", "how-to-start", "contact"];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => {
            return (
              Math.abs(a.boundingClientRect.top) -
              Math.abs(b.boundingClientRect.top)
            );
          });

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-30% 0px -50% 0px", threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const handleScroll = () => {
      if (window.scrollY < 200) {
        setActiveSection("");
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNav = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setMobileOpen(false);

      if (href === "#") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setActiveSection("");
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
    <>
      {/* Navbar */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          backgroundColor: "rgba(1, 7, 37, 0.85)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
            paddingLeft: "24px",
            paddingRight: "24px",
          }}
          className="nav-inner"
        >
          <div className="nav-bar">
            <a
              href="#"
              onClick={(e) => handleNav(e, "#")}
              style={{ flexShrink: 0 }}
            >
              <Image
                src="/logo.png"
                alt="ZERVEX"
                width={130}
                height={44}
                className="nav-logo"
                priority
              />
            </a>

            {/* Desktop nav */}
            <div className="desktop-only nav-links">
              {navLinks.map((link) => {
                const isActive = link.sectionId === activeSection;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNav(e, link.href)}
                    className={`nav-link ${isActive ? "nav-link--active" : ""}`}
                  >
                    {link.label}
                    <span className="nav-link-underline" />
                  </a>
                );
              })}
            </div>

            {/* Desktop CTA */}
            <div className="desktop-only" style={{ flexShrink: 0 }}>
              <a
                href="https://t.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-cta"
              >
                GET BOT
              </a>
            </div>

            {/* Mobile hamburger button */}
            <button
              className="mobile-only"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "8px",
                zIndex: 110,
                position: "relative",
              }}
            >
              <div className={`hamburger ${mobileOpen ? "hamburger--open" : ""}`}>
                <span />
                <span />
                <span />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Fullscreen mobile overlay — OUTSIDE nav, always in DOM */}
      <div
        className={`mobile-overlay ${mobileOpen ? "mobile-overlay--open" : ""}`}
        aria-hidden={!mobileOpen}
      >
        <div className="mobile-overlay-inner">
          {navLinks.map((link, i) => {
            const isActive = link.sectionId === activeSection;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className={`mobile-link ${isActive ? "mobile-link--active" : ""}`}
                style={{
                  transitionDelay: mobileOpen ? `${60 + i * 60}ms` : "0ms",
                }}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href="https://t.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-cta-btn"
            style={{
              transitionDelay: mobileOpen
                ? `${60 + navLinks.length * 60}ms`
                : "0ms",
            }}
          >
            GET BOT
          </a>
        </div>
      </div>

      <style>{`
        .nav-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 70px;
        }

        .nav-logo {
          height: 60px;
          width: auto;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 28px;
        }

        .nav-link {
          position: relative;
          color: rgba(255,255,255,0.7);
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.05em;
          text-decoration: none;
          padding-bottom: 4px;
          transition: color 0.3s ease;
        }

        .nav-link--active {
          color: #fff;
        }

        .nav-link-underline {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: #fff;
          border-radius: 1px;
          transition: width 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nav-link--active .nav-link-underline {
          width: 100%;
        }

        .nav-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background-color: #0328EE;
          color: #fff;
          font-size: 14px;
          font-weight: 600;
          padding: 12px 26px;
          border-radius: 999px;
          text-decoration: none;
          letter-spacing: 0.05em;
        }

        /* Hamburger icon animation */
        .hamburger {
          width: 24px;
          height: 18px;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .hamburger span {
          display: block;
          width: 100%;
          height: 2px;
          background: #fff;
          border-radius: 2px;
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          transform-origin: center;
        }

        .hamburger--open span:nth-child(1) {
          transform: translateY(8px) rotate(45deg);
        }

        .hamburger--open span:nth-child(2) {
          opacity: 0;
          transform: scaleX(0);
        }

        .hamburger--open span:nth-child(3) {
          transform: translateY(-8px) rotate(-45deg);
        }

        /* Fullscreen mobile overlay */
        .mobile-overlay {
          position: fixed;
          top: 70px;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 90;
          background: #010725;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1),
                      visibility 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .mobile-overlay--open {
          opacity: 1;
          visibility: visible;
        }

        .mobile-overlay-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }

        .mobile-link {
          color: rgba(255,255,255,0.5);
          font-size: 20px;
          font-weight: 500;
          letter-spacing: 0.06em;
          text-decoration: none;
          padding: 14px 24px;
          text-align: center;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.45s ease,
                      transform 0.45s ease,
                      color 0.3s ease;
        }

        .mobile-overlay--open .mobile-link {
          opacity: 1;
          transform: translateY(0);
        }

        .mobile-link--active {
          color: #fff;
        }

        .mobile-cta-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background-color: #0328EE;
          color: #fff;
          font-size: 15px;
          font-weight: 600;
          padding: 16px 44px;
          border-radius: 999px;
          text-decoration: none;
          letter-spacing: 0.06em;
          margin-top: 16px;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.45s ease, transform 0.45s ease;
        }

        .mobile-overlay--open .mobile-cta-btn {
          opacity: 1;
          transform: translateY(0);
        }

        @media (min-width: 768px) {
          .nav-bar {
            height: 80px;
          }

          .nav-logo {
            height: 90px;
          }

          .nav-inner {
            padding-left: 32px !important;
            padding-right: 32px !important;
          }

          .mobile-overlay {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
