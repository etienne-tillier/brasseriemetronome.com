import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Formation & Accompagnement Brasserie — Brasserie Métronome",
  description:
    "Découvrez nos programmes de formation et d'accompagnement pour créer votre brasserie : formation intensive, coaching individuel, suivi post-lancement.",
};

const PROGRAMS = [
  {
    icon: "🎯",
    title: "Bootcamp Création Brasserie",
    duration: "5 jours intensifs",
    format: "Présentiel Paris / Lyon / Bordeaux",
    price: "3 800 €",
    priceInfo: "HT — CPF éligible",
    badge: "Le plus populaire",
    badgeColor: "badge-copper",
    desc: "Notre formation phare pour tous ceux qui veulent créer leur brasserie dans les 12 mois. 5 journées complètes pour couvrir tous les aspects du projet : étude de marché, business plan, démarches, recrutement et lancement.",
    included: [
      "35h de formation avec des professionnels actifs",
      "Accès à toute la bibliothèque de guides (36 guides)",
      "Simulation de business plan sur votre projet réel",
      "Visite de terrain dans une brasserie partenaire",
      "Suivi individuel 1 mois post-formation",
      "Réseau alumni de plus de 800 anciens participants",
    ],
  },
  {
    icon: "💬",
    title: "Coaching Individuel",
    duration: "6 séances de 2h",
    format: "Visioconférence ou présentiel",
    price: "2 400 €",
    priceInfo: "HT — paiement en 3 fois",
    badge: "Sur mesure",
    badgeColor: "badge-slate",
    desc: "Un accompagnement personnalisé avec un expert qui a lui-même créé et géré une brasserie. Chaque séance est adaptée à votre avancement et vos problématiques spécifiques. Idéal si vous avez déjà avancé sur votre projet.",
    included: [
      "6 séances de coaching avec un expert brasserie",
      "Relecture et critique de votre business plan",
      "Simulation financière personnalisée",
      "Réseau de fournisseurs et partenaires recommandés",
      "Accès aux guides pendant 12 mois",
      "Support entre les séances par messagerie",
    ],
  },
  {
    icon: "🚀",
    title: "Suivi Post-Lancement",
    duration: "6 mois d'accompagnement",
    format: "Hybride — mensuel",
    price: "1 800 €",
    priceInfo: "HT — 300€/mois",
    badge: "Sécurité",
    badgeColor: "badge-wood",
    desc: "Vous avez ouvert votre brasserie mais les premières semaines sont cruciales. Notre programme de suivi post-lancement vous accompagne pendant 6 mois pour optimiser votre démarrage et éviter les erreurs de gestion fréquentes.",
    included: [
      "1 session mensuelle de suivi (2h)",
      "Analyse de vos indicateurs financiers",
      "Conseils marketing et fidélisation",
      "Alertes précoces sur les risques détectés",
      "Accès prioritaire à nos nouveaux guides",
      "Hotline consultant (4h/mois incluses)",
    ],
  },
];

const FAQ = [
  {
    q: "Les formations sont-elles éligibles au CPF ?",
    a: "Oui, notre Bootcamp Création Brasserie est éligible au Compte Personnel de Formation (CPF). Nous vous guidons dans les démarches pour mobiliser votre crédit CPF.",
  },
  {
    q: "Faut-il déjà avoir une expérience en restauration ?",
    a: "Non, nos formations sont ouvertes à tous les profils. Nous avons accompagné des reconvertis de tous secteurs : ingénieurs, consultants, enseignants, commerçants. Ce qui compte, c'est votre motivation et votre projet.",
  },
  {
    q: "Les formations sont-elles disponibles en ligne ?",
    a: "Le Bootcamp est en présentiel pour maximiser les échanges et la mise en pratique. Le Coaching individuel est disponible en visioconférence ou présentiel. Le Suivi post-lancement est hybride.",
  },
  {
    q: "Peut-on financer la formation par un prêt ou une aide ?",
    a: "Oui, plusieurs dispositifs sont mobilisables : CPF, OPCO (pour les salariés en reconversion), aides ADIE ou BGE pour les porteurs de projets. Nous vous fournissons tous les documents nécessaires.",
  },
  {
    q: "Quelle est la prochaine session disponible ?",
    a: "Les sessions Bootcamp ont lieu tous les 2 mois à Paris, Lyon et Bordeaux. Contactez-nous pour connaître les dates disponibles et réserver votre place.",
  },
];

export default function FormationPage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        background: "linear-gradient(135deg, var(--color-secondary-dark) 0%, var(--color-secondary) 100%)",
        padding: "5rem 0",
        position: "relative",
        overflow: "hidden",
      }}>
        <div className="container">
          <p className="section-eyebrow" style={{ color: "var(--color-zinc)" }}>Formation & accompagnement</p>
          <h1 style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
            color: "white",
            maxWidth: "700px",
            lineHeight: 1.2,
            marginBottom: "1.25rem",
          }}>
            Créez votre brasserie guidé par des experts terrain
          </h1>
          <p style={{ color: "rgba(250,246,240,0.8)", maxWidth: "58ch", lineHeight: 1.7, marginBottom: "2rem" }}>
            Plus que des guides, un accompagnement humain avec des professionnels qui ont eux-mêmes
            ouvert et géré des brasseries. Chaque programme est pensé pour maximiser vos chances de succès.
          </p>
          <Link href="/contact" className="btn-primary" style={{ fontSize: "1rem", padding: "1rem 2.5rem" }}>
            Demander un devis gratuit →
          </Link>
        </div>
      </section>

      {/* Programmes */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p className="section-eyebrow">Nos programmes</p>
            <h2 className="section-title">Choisissez votre niveau d&apos;accompagnement</h2>
            <div className="divider-zinc" style={{ margin: "0 auto" }} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
            {PROGRAMS.map((p) => (
              <div key={p.title} className="card" style={{ padding: 0, display: "flex", flexDirection: "column" }}>
                {/* Header */}
                <div style={{
                  background: "linear-gradient(135deg, var(--color-secondary-dark) 0%, var(--color-secondary) 100%)",
                  padding: "2rem",
                  borderRadius: "var(--radius-md) var(--radius-md) 0 0",
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem" }}>
                    <span style={{ fontSize: "2rem" }}>{p.icon}</span>
                    <span className={`badge ${p.badgeColor}`} style={{ fontSize: "0.7rem" }}>
                      {p.badge}
                    </span>
                  </div>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.25rem", color: "white", marginBottom: "0.5rem" }}>
                    {p.title}
                  </h3>
                  <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                    <span style={{ fontSize: "0.78rem", color: "rgba(250,246,240,0.7)", display: "flex", alignItems: "center", gap: "0.3rem" }}>
                      ⏱ {p.duration}
                    </span>
                    <span style={{ fontSize: "0.78rem", color: "rgba(250,246,240,0.7)", display: "flex", alignItems: "center", gap: "0.3rem" }}>
                      📍 {p.format}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div style={{ padding: "1.75rem", flex: 1, display: "flex", flexDirection: "column" }}>
                  <p style={{ fontSize: "0.92rem", color: "var(--color-text-light)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                    {p.desc}
                  </p>
                  <ul style={{ listStyle: "none", padding: 0, flex: 1 }}>
                    {p.included.map((item) => (
                      <li key={item} style={{
                        display: "flex",
                        gap: "0.6rem",
                        alignItems: "flex-start",
                        marginBottom: "0.65rem",
                        fontSize: "0.88rem",
                        color: "var(--color-text)",
                        lineHeight: 1.5,
                      }}>
                        <span style={{ color: "var(--color-primary)", fontWeight: 700, marginTop: "2px" }}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div style={{
                    marginTop: "1.5rem",
                    paddingTop: "1.5rem",
                    borderTop: "1px solid var(--color-border)",
                  }}>
                    <div style={{ marginBottom: "1rem" }}>
                      <span style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", color: "var(--color-secondary)", fontWeight: 700 }}>
                        {p.price}
                      </span>
                      <span style={{ fontSize: "0.82rem", color: "var(--color-text-muted)", marginLeft: "0.5rem" }}>
                        {p.priceInfo}
                      </span>
                    </div>
                    <Link href="/contact" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                      Me renseigner →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image section */}
      <section className="section-alt">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}
            className="formation-grid"
          >
            <div style={{ position: "relative", aspectRatio: "4/3", borderRadius: "var(--radius-lg)", overflow: "hidden", boxShadow: "var(--shadow-lg)" }}>
              <Image
                src="/images/guides-notebook.jpeg"
                alt="Session de formation entrepreneuriat brasserie"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="section-eyebrow">Pourquoi se former ?</p>
              <h2 className="section-title">80% des brasseries ferment dans les 3 premières années</h2>
              <div className="divider-zinc" />
              <p style={{ color: "var(--color-text-light)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                Les principales causes d&apos;échec sont toujours les mêmes : mauvais prévisionnel financier, problèmes de recrutement,
                sous-estimation des démarches administratives et stratégie marketing inexistante. Nos formations couvrent
                précisément ces points critiques.
              </p>
              <ul style={{ listStyle: "none", padding: 0, marginBottom: "2rem" }}>
                {[
                  "Formateurs consultants actifs en restauration",
                  "Études de cas réels basées sur des brasseries françaises",
                  "Mises en situation sur votre projet concret",
                  "Réseau alumni pour l'après-formation",
                ].map((item) => (
                  <li key={item} style={{ display: "flex", gap: "0.75rem", marginBottom: "0.7rem", fontSize: "0.95rem", color: "var(--color-text)" }}>
                    <span style={{ color: "var(--color-primary)", fontWeight: 700 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-primary">
                Demander un devis →
              </Link>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .formation-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          }
        `}</style>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p className="section-eyebrow">Questions fréquentes</p>
            <h2 className="section-title">Tout ce que vous devez savoir</h2>
            <div className="divider-zinc" style={{ margin: "0 auto" }} />
          </div>
          <div style={{ maxWidth: "740px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "1rem" }}>
            {FAQ.map((faq) => (
              <div key={faq.q} style={{
                padding: "1.5rem",
                background: "var(--color-surface)",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--color-border)",
                boxShadow: "var(--shadow-sm)",
              }}>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1rem", color: "var(--color-secondary)", marginBottom: "0.6rem" }}>
                  {faq.q}
                </h3>
                <p style={{ fontSize: "0.92rem", color: "var(--color-text-light)", lineHeight: 1.7 }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-wood">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", color: "white", marginBottom: "1rem" }}>
            Prêt à investir dans votre réussite ?
          </h2>
          <p style={{ color: "rgba(250,246,240,0.8)", marginBottom: "2.5rem", maxWidth: "55ch", margin: "0 auto 2.5rem" }}>
            Un appel découverte de 30 minutes pour voir ensemble quel programme correspond à votre projet.
          </p>
          <Link href="/contact" className="btn-primary" style={{ fontSize: "1rem", padding: "1rem 2.5rem" }}>
            Réserver mon appel découverte →
          </Link>
        </div>
      </section>
    </>
  );
}
