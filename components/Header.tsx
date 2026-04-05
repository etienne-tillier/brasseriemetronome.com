"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "72px" }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div style={{
              width: "42px",
              height: "42px",
              background: "linear-gradient(135deg, #8B5E3C 0%, #C4A882 100%)",
              borderRadius: "6px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.3rem",
              flexShrink: 0,
            }}>
              🍺
            </div>
            <div>
              <div style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.05rem",
                fontWeight: 700,
                color: "var(--color-zinc-light)",
                lineHeight: 1.1,
              }}>
                Brasserie Métronome
              </div>
              <div style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.6rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(250, 246, 240, 0.5)",
              }}>
                Guide Entrepreneuriat
              </div>
            </div>
          </Link>

          {/* Nav desktop */}
          <nav style={{ display: "flex", gap: "0.15rem" }} className="hidden-mobile">
            {siteConfig.mainNav.map((item) => (
              <Link key={item.href} href={item.href} className="header-link">
                {item.title}
              </Link>
            ))}
          </nav>

          {/* CTA + Burger */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <Link
              href="/contact"
              className="btn-primary hidden-mobile"
              style={{ padding: "0.55rem 1.25rem", fontSize: "0.85rem" }}
            >
              Consultation gratuite
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                background: "transparent",
                border: "none",
                color: "var(--color-zinc-light)",
                fontSize: "1.5rem",
                cursor: "pointer",
                display: "none",
              }}
              className="burger-btn"
              aria-label="Menu navigation"
            >
              {mobileOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div style={{
            paddingBottom: "1rem",
            borderTop: "1px solid rgba(196, 168, 130, 0.2)",
            paddingTop: "0.75rem",
          }}>
            {siteConfig.mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="header-link"
                style={{ display: "block", padding: "0.65rem 0.5rem" }}
                onClick={() => setMobileOpen(false)}
              >
                {item.title}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn-primary"
              style={{ marginTop: "0.75rem", display: "inline-flex", fontSize: "0.9rem" }}
              onClick={() => setMobileOpen(false)}
            >
              Consultation gratuite
            </Link>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .burger-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
