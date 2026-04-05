import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guides Entrepreneuriat Brasserie — Toutes nos ressources",
  description:
    "Hub central de tous nos guides pratiques pour créer votre brasserie : démarches, financement, équipement, recrutement, marketing et gestion.",
};

const CLUSTERS = [
  {
    id: "demarches",
    icon: "⚖️",
    title: "Démarches administratives & légales",
    color: "var(--color-accent)",
    img: "/images/guides-legal.jpeg",
    guides: [
      "Choisir son statut juridique (SARL, SAS, auto-entrepreneur)",
      "Obtenir la licence restaurant : démarches et délais",
      "Normes ERP et hygiène HACCP : checklist complète",
      "Déclarations fiscales pour brasserie : TVA, IS, CFE",
      "Contrat de bail commercial : points de vigilance",
      "Assurance établissement de restauration : guide complet",
    ],
  },
  {
    id: "financement",
    icon: "💶",
    title: "Financement & business plan",
    color: "var(--color-secondary)",
    img: "/images/finance-meeting.jpeg",
    guides: [
      "Rédiger un business plan brasserie convaincant",
      "Prêt bancaire restauration : comment préparer son dossier",
      "Aides régionales et nationales pour les restaurateurs",
      "BPI France et garanties publiques pour HoReCa",
      "Crowdfunding alimentaire : plateformes et stratégies",
      "Tableau de bord financier : les 10 indicateurs essentiels",
    ],
  },
  {
    id: "equipement",
    icon: "🍳",
    title: "Équipement & aménagement",
    color: "var(--color-primary)",
    img: "/images/guides-equipment.jpeg",
    guides: [
      "Liste complète du matériel de cuisine professionnelle",
      "Aménager une salle de restaurant : circulation et ambiance",
      "Choisir ses équipements réfrigérés : guide d'achat",
      "Logiciels de caisse enregistreuse : comparatif 2024",
      "Acoustique de salle : solutions pour brasseries bruyantes",
      "Signalétique intérieure : affichages obligatoires",
    ],
  },
  {
    id: "recrutement",
    icon: "👨‍🍳",
    title: "Recrutement & management",
    color: "var(--color-secondary-light)",
    img: "/images/team-chef.jpeg",
    guides: [
      "Fiche de poste chef de cuisine : template personnalisable",
      "Grilles de salaires en restauration 2024",
      "Entretien candidat cuisine : questions clés",
      "Contrats saisonniers et CDI en restauration",
      "Manager son équipe en brasserie : bonnes pratiques",
      "Réduire le turnover : 8 leviers de fidélisation",
    ],
  },
  {
    id: "marketing",
    icon: "📣",
    title: "Marketing & acquisition client",
    color: "var(--color-primary-dark)",
    img: "/images/guides-notebook.jpeg",
    guides: [
      "Google My Business brasserie : optimisation complète",
      "Réseaux sociaux pour restaurant : stratégie et contenus",
      "TripAdvisor et TheFork : gérer sa réputation en ligne",
      "Programme de fidélité brasserie : modèles et outils",
      "Relations presse locale : contacter les journalistes",
      "Événements et privatisations : source de revenus additionnels",
    ],
  },
  {
    id: "gestion",
    icon: "📊",
    title: "Gestion & rentabilité",
    color: "var(--color-accent-dark)",
    img: "/images/contact-office.jpeg",
    guides: [
      "Calcul du food cost : méthode et objectifs cibles",
      "Élaborer une carte rentable : pricing et marges",
      "Gestion des stocks et prévention du gaspillage",
      "Comptabilité brasserie : tableau de bord mensuel",
      "Piloter sa trésorerie : éviter les ruptures de cash",
      "Revendre sa brasserie : valorisation et cession",
    ],
  },
];

export default function GuidesPage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        background: "linear-gradient(135deg, var(--color-secondary-dark) 0%, var(--color-secondary) 100%)",
        padding: "5rem 0",
        position: "relative",
        overflow: "hidden",
      }}>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <p className="section-eyebrow" style={{ color: "var(--color-zinc)" }}>Hub de ressources</p>
          <h1 style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
            color: "white",
            marginBottom: "1.25rem",
            maxWidth: "700px",
            lineHeight: 1.2,
          }}>
            Tous les guides pour créer votre brasserie
          </h1>
          <p style={{ color: "rgba(250,246,240,0.8)", maxWidth: "58ch", lineHeight: 1.7, marginBottom: "2rem" }}>
            6 clusters thématiques, 36 guides pratiques. De la paperasse administrative à la rentabilité,
            nous couvrons chaque aspect de l&apos;entrepreneuriat brassicole.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary">
              Consultation gratuite →
            </Link>
            <Link href="/formation" className="btn-outline-white">
              Voir nos formations
            </Link>
          </div>
        </div>
      </section>

      {/* Nav clusters */}
      <section style={{ padding: "2rem 0", background: "var(--color-bg-alt)", borderBottom: "1px solid var(--color-border)" }}>
        <div className="container">
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            {CLUSTERS.map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  padding: "0.5rem 1rem",
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "999px",
                  textDecoration: "none",
                  fontSize: "0.88rem",
                  fontWeight: 600,
                  color: "var(--color-text)",
                  transition: "all var(--transition)",
                }}
              >
                {c.icon} {c.title.split(" ")[0]}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Clusters */}
      {CLUSTERS.map((cluster, i) => (
        <section
          key={cluster.id}
          id={cluster.id}
          className={i % 2 === 0 ? "section" : "section-alt"}
        >
          <div className="container">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: i % 2 === 0 ? "1fr 1.5fr" : "1.5fr 1fr",
                gap: "4rem",
                alignItems: "center",
              }}
              className="guides-grid"
            >
              {/* Image — alternates side */}
              {i % 2 === 0 && (
                <div style={{ position: "relative", aspectRatio: "4/3", borderRadius: "var(--radius-lg)", overflow: "hidden", boxShadow: "var(--shadow-lg)" }}>
                  <Image
                    src={cluster.img}
                    alt={cluster.title}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  <div style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(135deg, rgba(0,0,0,0.3) 0%, transparent 60%)",
                  }} />
                </div>
              )}

              {/* Content */}
              <div>
                <div style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  background: "var(--color-primary-pale)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-sm)",
                  padding: "0.4rem 0.85rem",
                  marginBottom: "1.25rem",
                }}>
                  <span style={{ fontSize: "1.3rem" }}>{cluster.icon}</span>
                  <span style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-primary)" }}>
                    {cluster.title}
                  </span>
                </div>

                <h2 className="section-title">{cluster.title}</h2>
                <div className="divider-zinc" />

                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                  {cluster.guides.map((guide) => (
                    <li
                      key={guide}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.75rem",
                        padding: "0.85rem 1rem",
                        background: "var(--color-surface)",
                        borderRadius: "var(--radius-sm)",
                        border: "1px solid var(--color-border-light)",
                        transition: "all var(--transition)",
                      }}
                    >
                      <span style={{ color: "var(--color-primary)", fontWeight: 700, marginTop: "2px" }}>→</span>
                      <span style={{ fontSize: "0.92rem", color: "var(--color-text)", lineHeight: 1.5 }}>
                        {guide}
                      </span>
                    </li>
                  ))}
                </ul>

                <div style={{ marginTop: "1.75rem" }}>
                  <Link href="/blog" className="btn-primary">
                    Articles sur ce sujet →
                  </Link>
                </div>
              </div>

              {/* Image — right side */}
              {i % 2 !== 0 && (
                <div style={{ position: "relative", aspectRatio: "4/3", borderRadius: "var(--radius-lg)", overflow: "hidden", boxShadow: "var(--shadow-lg)" }}>
                  <Image
                    src={cluster.img}
                    alt={cluster.title}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  <div style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(135deg, rgba(0,0,0,0.3) 0%, transparent 60%)",
                  }} />
                </div>
              )}
            </div>
          </div>

          <style>{`
            @media (max-width: 768px) {
              .guides-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
            }
          `}</style>
        </section>
      ))}

      {/* CTA Final */}
      <section className="section-wood">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", color: "white", marginBottom: "1rem" }}>
            Passez à l&apos;action avec notre accompagnement
          </h2>
          <p style={{ color: "rgba(250,246,240,0.8)", marginBottom: "2.5rem", maxWidth: "55ch", margin: "0 auto 2.5rem" }}>
            Nos guides sont un excellent point de départ. Pour aller plus loin,
            nos experts vous accompagnent de la conception au lancement.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/formation" className="btn-primary">
              Découvrir nos formations →
            </Link>
            <Link href="/contact" className="btn-outline-white">
              Consultation gratuite
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
