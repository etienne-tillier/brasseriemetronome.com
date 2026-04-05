import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        {/* Top row */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.5fr repeat(3, 1fr)",
          gap: "3rem",
          paddingBottom: "3rem",
          borderBottom: "1px solid rgba(196, 168, 130, 0.15)",
        }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", marginBottom: "1rem" }}>
              <div style={{
                width: "38px",
                height: "38px",
                background: "linear-gradient(135deg, #8B5E3C 0%, #C4A882 100%)",
                borderRadius: "6px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.2rem",
              }}>
                🍺
              </div>
              <div style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1rem",
                fontWeight: 700,
                color: "var(--color-zinc-light)",
              }}>
                Brasserie Métronome
              </div>
            </div>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.7, marginBottom: "1.25rem", maxWidth: "26ch" }}>
              La référence française pour créer et développer votre brasserie artisanale avec succès.
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                color: "var(--color-zinc)",
                textDecoration: "none",
                fontSize: "0.88rem",
                fontWeight: 600,
              }}
            >
              ✉ {siteConfig.email}
            </a>
          </div>

          {/* Nav columns */}
          {siteConfig.footerNav.map((col) => (
            <div key={col.title}>
              <p className="footer-title">{col.title}</p>
              {col.links.map((link) => (
                <Link key={link.href + link.title} href={link.href} className="footer-link">
                  {link.title}
                </Link>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          paddingTop: "1.75rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
        }}>
          <p style={{ fontSize: "0.82rem", color: "rgba(250, 246, 240, 0.45)" }}>
            © {new Date().getFullYear()} Brasserie Métronome. Tous droits réservés.
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <Link href="/mentions-legales" className="footer-link" style={{ fontSize: "0.82rem" }}>
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="footer-link" style={{ fontSize: "0.82rem" }}>
              Confidentialité
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </footer>
  );
}
