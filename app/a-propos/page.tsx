import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos — Notre mission | Brasserie Métronome",
  description:
    "Découvrez l'équipe Brasserie Métronome : des professionnels de la restauration réunis pour aider les futurs brasseurs à réussir leur projet.",
};

const TEAM = [
  {
    name: "Nicolas Fontaine",
    role: "Fondateur & Expert Restauration",
    bio: "Ancien directeur de brasserie pendant 12 ans, Nicolas a ouvert 3 établissements avant de lancer Brasserie Métronome. Il pilote la stratégie et les programmes de formation.",
    avatar: "NF",
    expertise: ["Business plan", "Démarches légales", "Management"],
  },
  {
    name: "Isabelle Moreau",
    role: "Experte Finance & Investissement",
    bio: "Ancienne conseillère BPI France, Isabelle a accompagné plus de 200 dossiers de financement en restauration. Elle connaît chaque dispositif d'aide disponible pour les brasseurs.",
    avatar: "IM",
    expertise: ["Financement", "Business plan", "Aides & subventions"],
  },
  {
    name: "Antoine Roux",
    role: "Expert Marketing Digital",
    bio: "Consultant en marketing digital spécialisé HoReCa depuis 8 ans, Antoine a développé les stratégies digitales de plus de 100 restaurants en France.",
    avatar: "AR",
    expertise: ["Marketing digital", "Réseaux sociaux", "Réputation en ligne"],
  },
];

const VALUES = [
  {
    icon: "🎯",
    title: "Pragmatisme",
    desc: "Nous ne donnons que des conseils que nous avons nous-mêmes appliqués. Chaque guide est basé sur des situations réelles.",
  },
  {
    icon: "🤝",
    title: "Bienveillance",
    desc: "L'entrepreneuriat en restauration est exigeant. Nous créons un environnement de confiance et de soutien mutuel.",
  },
  {
    icon: "📊",
    title: "Rigueur",
    desc: "Les chiffres ne mentent pas. Nous formons nos clients à piloter leur activité avec des indicateurs fiables et actionnables.",
  },
  {
    icon: "✨",
    title: "Excellence",
    desc: "La qualité de nos guides et formations est notre meilleure publicité. Nous mettons à jour nos contenus régulièrement.",
  },
];

export default function AProposPage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        background: "linear-gradient(135deg, var(--color-secondary-dark) 0%, var(--color-secondary) 100%)",
        padding: "5rem 0",
      }}>
        <div className="container">
          <p className="section-eyebrow" style={{ color: "var(--color-zinc)" }}>Notre histoire</p>
          <h1 style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
            color: "white",
            maxWidth: "650px",
            lineHeight: 1.2,
            marginBottom: "1.25rem",
          }}>
            Née de l&apos;expérience terrain, pour les entrepreneurs terrain
          </h1>
          <p style={{ color: "rgba(250,246,240,0.75)", maxWidth: "58ch", lineHeight: 1.7 }}>
            Brasserie Métronome est née en 2021 d&apos;un constat simple : les ressources pour créer une brasserie
            en France sont éparpillées, complexes et souvent inutilisables. Nous avons décidé de centraliser
            tout le savoir faire dont nous aurions eu besoin à nos débuts.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}
            className="about-grid"
          >
            <div>
              <p className="section-eyebrow">Notre mission</p>
              <h2 className="section-title">Rendre l&apos;entrepreneuriat brassicole accessible à tous</h2>
              <div className="divider-zinc" />
              <p style={{ color: "var(--color-text-light)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                En France, ouvrir une brasserie relève trop souvent du parcours du combattant. Entre les démarches
                administratives labyrinthiques, les financements difficiles à obtenir et le manque de visibilité
                sur ce que sera vraiment la réalité du métier, nombreux sont ceux qui abandonnent avant même d&apos;avoir commencé.
              </p>
              <p style={{ color: "var(--color-text-light)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                Notre mission est de changer ça. En rassemblant l&apos;expérience de dizaines de brasseurs et
                d&apos;experts sectoriels, nous créons les ressources claires, structurées et actionables qui auraient
                changé le destin de nombreux projets.
              </p>
              <p style={{ color: "var(--color-text-light)", lineHeight: 1.7 }}>
                Depuis 2021, nous avons accompagné plus de 1 200 entrepreneurs à différents stades de leur projet.
                87% d&apos;entre eux se déclarent satisfaits ou très satisfaits de nos ressources.
              </p>
            </div>
            <div>
              <div style={{ position: "relative", aspectRatio: "4/3", borderRadius: "var(--radius-lg)", overflow: "hidden", boxShadow: "var(--shadow-lg)" }}>
                <Image
                  src="/images/hero-restaurant.jpeg"
                  alt="Brasserie artisanale — intérieur chaleureux"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              {/* Stats */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", marginTop: "1.5rem" }}>
                {[
                  { val: "2021", label: "Fondation" },
                  { val: "1 200+", label: "Accompagnés" },
                  { val: "87%", label: "Satisfaction" },
                ].map((s) => (
                  <div key={s.label} style={{
                    background: "var(--color-primary-pale)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "var(--radius-md)",
                    padding: "1rem",
                    textAlign: "center",
                  }}>
                    <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.4rem", color: "var(--color-primary)", fontWeight: 700 }}>
                      {s.val}
                    </div>
                    <div style={{ fontSize: "0.78rem", color: "var(--color-text-muted)", marginTop: "0.2rem" }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <style>{`
            @media (max-width: 768px) {
              .about-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
            }
          `}</style>
        </div>
      </section>

      {/* Values */}
      <section className="section-alt">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p className="section-eyebrow">Ce qui nous guide</p>
            <h2 className="section-title">Nos valeurs</h2>
            <div className="divider-zinc" style={{ margin: "0 auto" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: "1.5rem" }}>
            {VALUES.map((v) => (
              <div key={v.title} className="card" style={{ padding: "2rem", textAlign: "center" }}>
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{v.icon}</div>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", color: "var(--color-secondary)", marginBottom: "0.75rem" }}>
                  {v.title}
                </h3>
                <p style={{ fontSize: "0.9rem", color: "var(--color-text-light)", lineHeight: 1.6 }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p className="section-eyebrow">L&apos;équipe</p>
            <h2 className="section-title">Des experts avec de vraie expérience terrain</h2>
            <div className="divider-zinc" style={{ margin: "0 auto" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
            {TEAM.map((m) => (
              <div key={m.name} className="card" style={{ padding: 0, overflow: "hidden" }}>
                <div style={{
                  height: "160px",
                  background: "linear-gradient(135deg, var(--color-secondary-dark) 0%, var(--color-secondary) 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  <div style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    background: "var(--color-primary)",
                    border: "3px solid rgba(196, 168, 130, 0.5)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-serif)",
                    fontWeight: 700,
                    fontSize: "1.6rem",
                    color: "white",
                  }}>
                    {m.avatar}
                  </div>
                </div>
                <div style={{ padding: "1.75rem" }}>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.15rem", color: "var(--color-secondary)", marginBottom: "0.25rem" }}>
                    {m.name}
                  </h3>
                  <p style={{ fontSize: "0.82rem", color: "var(--color-primary)", fontWeight: 600, marginBottom: "0.85rem" }}>
                    {m.role}
                  </p>
                  <p style={{ fontSize: "0.9rem", color: "var(--color-text-light)", lineHeight: 1.6, marginBottom: "1.25rem" }}>
                    {m.bio}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                    {m.expertise.map((e) => (
                      <span key={e} className="badge badge-copper" style={{ fontSize: "0.72rem" }}>
                        {e}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-wood">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", color: "white", marginBottom: "1rem" }}>
            Construisons votre brasserie ensemble
          </h2>
          <p style={{ color: "rgba(250,246,240,0.8)", marginBottom: "2.5rem", maxWidth: "55ch", margin: "0 auto 2.5rem" }}>
            Que vous soyez au stade de l&apos;idée ou sur le point d&apos;ouvrir, notre équipe est là pour vous accompagner.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary">
              Nous contacter →
            </Link>
            <Link href="/guides" className="btn-outline-white">
              Consulter les guides
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
