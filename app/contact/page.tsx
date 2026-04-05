import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Consultation Gratuite | Brasserie Métronome",
  description:
    "Contactez Brasserie Métronome pour une consultation gratuite. Répondez à toutes vos questions sur la création de votre brasserie artisanale.",
};

const CONTACT_EMAIL = "contact@brasseriemetronome.com";

const WHY_CONTACT = [
  {
    icon: "🎯",
    title: "Diagnostic personnalisé",
    desc: "Nous analysons votre projet spécifique et identifions les points de vigilance propres à votre situation.",
  },
  {
    icon: "💡",
    title: "Recommendations concrètes",
    desc: "Des conseils actionnables, pas des généralités. Chaque recommandation est adaptée à votre contexte local.",
  },
  {
    icon: "🤝",
    title: "Sans engagement",
    desc: "La consultation initiale est 100% gratuite et sans obligation. C'est vous qui décidez de la suite.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        background: "linear-gradient(135deg, var(--color-secondary-dark) 0%, var(--color-secondary) 100%)",
        padding: "5rem 0",
      }}>
        <div className="container">
          <p className="section-eyebrow" style={{ color: "var(--color-zinc)" }}>Consultation gratuite</p>
          <h1 style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
            color: "white",
            maxWidth: "600px",
            lineHeight: 1.2,
            marginBottom: "1.25rem",
          }}>
            Parlons de votre projet de brasserie
          </h1>
          <p style={{ color: "rgba(250,246,240,0.75)", maxWidth: "54ch", lineHeight: 1.7 }}>
            30 minutes d&apos;échange avec un expert pour faire le point sur votre projet,
            identifier les priorités et vous orienter vers les bonnes ressources.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "5rem", alignItems: "flex-start" }}
            className="contact-grid"
          >
            {/* Left: contact info */}
            <div>
              <h2 className="section-title">Nous contacter directement</h2>
              <div className="divider-zinc" />

              <p style={{ color: "var(--color-text-light)", lineHeight: 1.7, marginBottom: "2.5rem" }}>
                Pour toute demande de consultation, d&apos;information sur nos formations ou de renseignement sur nos guides,
                écrivez-nous à l&apos;adresse ci-dessous. Nous vous répondons sous 24h ouvrées.
              </p>

              {/* Email block */}
              <div style={{
                background: "var(--color-primary-pale)",
                border: "2px solid var(--color-primary)",
                borderRadius: "var(--radius-lg)",
                padding: "2rem",
                marginBottom: "2rem",
                display: "flex",
                alignItems: "center",
                gap: "1.25rem",
              }}>
                <div style={{
                  width: "56px",
                  height: "56px",
                  background: "var(--color-primary)",
                  borderRadius: "var(--radius-md)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.5rem",
                  flexShrink: 0,
                }}>
                  ✉️
                </div>
                <div>
                  <p style={{ fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: "0.4rem" }}>
                    Email principal
                  </p>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.3rem",
                      fontWeight: 700,
                      color: "var(--color-secondary)",
                      textDecoration: "none",
                      display: "block",
                      wordBreak: "break-all",
                    }}
                  >
                    {CONTACT_EMAIL}
                  </a>
                  <p style={{ fontSize: "0.85rem", color: "var(--color-text-light)", marginTop: "0.3rem" }}>
                    Réponse garantie sous 24h ouvrées
                  </p>
                </div>
              </div>

              {/* Subjects */}
              <div style={{ marginBottom: "2.5rem" }}>
                <p style={{ fontFamily: "var(--font-serif)", fontSize: "1.05rem", color: "var(--color-secondary)", marginBottom: "1rem" }}>
                  Pour quel sujet nous écrire ?
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                  {[
                    { icon: "📋", label: "Demande de consultation gratuite (30 min)" },
                    { icon: "🎓", label: "Information sur les formations et programmes" },
                    { icon: "📚", label: "Accès aux guides et ressources thématiques" },
                    { icon: "💼", label: "Accompagnement projet de A à Z" },
                    { icon: "🤝", label: "Partenariat ou collaboration professionnelle" },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(s.label)}`}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                        padding: "0.85rem 1rem",
                        background: "var(--color-surface)",
                        border: "1px solid var(--color-border)",
                        borderRadius: "var(--radius-sm)",
                        textDecoration: "none",
                        color: "var(--color-text)",
                        fontSize: "0.9rem",
                        transition: "all var(--transition)",
                      }}
                    >
                      <span>{s.icon}</span>
                      <span>{s.label}</span>
                      <span style={{ marginLeft: "auto", color: "var(--color-primary)" }}>→</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Response time */}
              <div style={{
                background: "var(--color-bg-alt)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-md)",
                padding: "1.25rem",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}>
                <span style={{ fontSize: "1.5rem" }}>⏱</span>
                <div>
                  <p style={{ fontWeight: 700, color: "var(--color-secondary)", fontSize: "0.9rem", marginBottom: "0.25rem" }}>
                    Délai de réponse moyen : 4 heures
                  </p>
                  <p style={{ fontSize: "0.82rem", color: "var(--color-text-muted)" }}>
                    Du lundi au vendredi, 9h–18h (heure de Paris)
                  </p>
                </div>
              </div>
            </div>

            {/* Right: image + why contact */}
            <div>
              <div style={{ position: "relative", aspectRatio: "3/4", borderRadius: "var(--radius-lg)", overflow: "hidden", marginBottom: "2rem", boxShadow: "var(--shadow-lg)" }}>
                <Image
                  src="/images/contact-office.jpeg"
                  alt="Expert Brasserie Métronome en consultation"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div style={{
                  position: "absolute",
                  bottom: "1.5rem",
                  left: "1.5rem",
                  right: "1.5rem",
                  background: "rgba(44, 33, 15, 0.92)",
                  backdropFilter: "blur(8px)",
                  borderRadius: "var(--radius-md)",
                  padding: "1rem",
                }}>
                  <p style={{ color: "white", fontFamily: "var(--font-serif)", fontSize: "0.95rem", lineHeight: 1.4 }}>
                    &ldquo;Un projet bien préparé a 3× plus de chances de réussir.&rdquo;
                  </p>
                  <p style={{ color: "var(--color-zinc)", fontSize: "0.78rem", marginTop: "0.4rem" }}>
                    — Équipe Brasserie Métronome
                  </p>
                </div>
              </div>

              {/* Why contact */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {WHY_CONTACT.map((w) => (
                  <div key={w.title} style={{
                    display: "flex",
                    gap: "1rem",
                    padding: "1.25rem",
                    background: "var(--color-surface-warm)",
                    borderRadius: "var(--radius-md)",
                    border: "1px solid var(--color-border)",
                  }}>
                    <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{w.icon}</span>
                    <div>
                      <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "0.95rem", color: "var(--color-secondary)", marginBottom: "0.3rem" }}>
                        {w.title}
                      </h3>
                      <p style={{ fontSize: "0.85rem", color: "var(--color-text-light)", lineHeight: 1.6 }}>
                        {w.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .contact-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          }
        `}</style>
      </section>
    </>
  );
}
