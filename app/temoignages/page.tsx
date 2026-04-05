import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Témoignages — Success Stories de Brasseurs | Brasserie Métronome",
  description:
    "Découvrez les parcours inspirants d'entrepreneurs qui ont créé leur brasserie avec succès grâce aux guides et accompagnements Brasserie Métronome.",
};

const STORIES = [
  {
    name: "Marc Lefèvre",
    location: "La Brasserie du Canal — Lyon 7e",
    avatar: "ML",
    opened: "Mars 2023",
    covers: "65 couverts",
    result: "Rentable en 8 mois",
    quote: "Brasserie Métronome m'a permis d'éviter les erreurs classiques que font tous les nouveaux restaurateurs. J'avais peur des démarches administratives — elles ont l'air complexes mais le guide m'a donné une checklist claire et chronologique. J'ai pu me concentrer sur l'essentiel : la qualité de mon service.",
    challenge: "L'obtention de la licence et les normes ERP étaient mon frein principal. Je n'avais aucune expérience en restauration avant ce projet.",
    solution: "Le guide démarches administratives et deux sessions de consultation avec un expert m'ont permis de déposer un dossier complet du premier coup. Zéro aller-retour avec la mairie.",
    numbers: [
      { val: "8 mois", label: "pour atteindre le seuil de rentabilité" },
      { val: "+47%", label: "de CA vs prévisionnel initial" },
      { val: "4,6/5", label: "note Google Maps" },
    ],
    img: "/images/testimonials-owner.jpeg",
  },
  {
    name: "Sophie Marchand",
    location: "Le Zinc Doré — Bordeaux Chartrons",
    avatar: "SM",
    opened: "Septembre 2022",
    covers: "80 couverts + terrasse",
    result: "0 turnover en 18 mois",
    quote: "Dans la restauration, le turnover est le fléau numéro un. J'ai tout misé sur le recrutement dès le départ. Les fiches de poste, les grilles de salaires, les questions d'entretien — tout était dans les guides Métronome. Mon équipe est stable depuis l'ouverture, ce qui est exceptionnel.",
    challenge: "Trouver et fidéliser une équipe dans un marché de l'emploi extrêmement tendu à Bordeaux, avec des candidats qui reçoivent plusieurs offres en même temps.",
    solution: "J'ai appliqué la méthode de rémunération et d'avantages décrite dans le guide recrutement. Chèques repas, horaires fixes, prime de fidélité trimestrielle. Les candidats le sentent dès l'entretien.",
    numbers: [
      { val: "0", label: "départ dans l'équipe en 18 mois" },
      { val: "4,8/5", label: "note TripAdvisor Bordeaux" },
      { val: "92%", label: "taux de remplissage le week-end" },
    ],
    img: "/images/team-chef.jpeg",
  },
  {
    name: "Thomas Berger",
    location: "Brasserie Les Mousses — Strasbourg",
    avatar: "TB",
    opened: "Janvier 2024",
    covers: "55 couverts",
    result: "3 semaines gagnées sur l'admin",
    quote: "Je suis archi de formation, pas entrepreneur de la restauration. La partie administrative était une montagne pour moi. Grâce aux guides, j'ai compris la logique d'ensemble en quelques heures plutôt qu'en plusieurs semaines d'errance sur les sites officiels.",
    challenge: "Comprendre l'ensemble du cadre réglementaire sans expérience préalable et sans commettre d'erreur qui retarderait le lancement de plusieurs mois.",
    solution: "La checklist administratives chronologique m'a donné une vision d'ensemble. J'ai suivi les étapes dans l'ordre et mon dossier mairie a été validé en 6 semaines. L'ouverture était prévue pour janvier, elle a eu lieu en janvier.",
    numbers: [
      { val: "6 sem.", label: "pour valider le dossier mairie" },
      { val: "170k€", label: "d'investissement bien calibré" },
      { val: "4,7/5", label: "note Google Maps dès le 1er mois" },
    ],
    img: "/images/guides-notebook.jpeg",
  },
  {
    name: "Amandine Chevalier",
    location: "Brasserie La Terrasse Verte — Nantes",
    avatar: "AC",
    opened: "Mai 2023",
    covers: "100 couverts dont 40 terrasse",
    result: "45% du CA via le digital",
    quote: "J'aurais passé des années à comprendre le marketing digital de la restauration par moi-même. Le guide marketing de Métronome m'a montré les leviers prioritaires : Google My Business d'abord, ensuite Instagram, ensuite les plateformes de réservation. Dans cet ordre, pas dans n'importe quel sens.",
    challenge: "Se faire connaître dans un quartier en développement, sans budget marketing important, face à des concurrents installés depuis des années.",
    solution: "Optimisation complète de Google My Business, publication régulière sur Instagram avec les codes visuels adaptés, partenariat avec TheFork pour les réservations. 45% de mon CA vient maintenant du digital.",
    numbers: [
      { val: "45%", label: "du CA via le digital" },
      { val: "3 200", label: "abonnés Instagram en 12 mois" },
      { val: "89%", label: "taux d'occupation en saison" },
    ],
    img: "/images/guides-equipment.jpeg",
  },
];

export default function TemoignagesPage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        background: "linear-gradient(135deg, var(--color-secondary-dark) 0%, var(--color-secondary) 100%)",
        padding: "5rem 0",
      }}>
        <div className="container">
          <p className="section-eyebrow" style={{ color: "var(--color-zinc)" }}>Ils ont réussi</p>
          <h1 style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
            color: "white",
            maxWidth: "650px",
            lineHeight: 1.2,
            marginBottom: "1.25rem",
          }}>
            Des brasseries créées avec succès grâce à nos guides
          </h1>
          <p style={{ color: "rgba(250,246,240,0.75)", maxWidth: "56ch", lineHeight: 1.7 }}>
            4 entrepreneurs, 4 villes, 4 parcours différents. Un point commun : ils ont structuré
            leur projet avec les ressources Brasserie Métronome.
          </p>
        </div>
      </section>

      {/* Success stories */}
      <section className="section">
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: "5rem" }}>
            {STORIES.map((s, i) => (
              <div key={s.name}>
                {/* Card */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: i % 2 === 0 ? "1fr 1.5fr" : "1.5fr 1fr",
                    gap: "4rem",
                    alignItems: "flex-start",
                  }}
                  className="temoignage-grid"
                >
                  {i % 2 === 0 && (
                    <div>
                      <div style={{ position: "relative", aspectRatio: "3/4", borderRadius: "var(--radius-lg)", overflow: "hidden", marginBottom: "1.5rem", boxShadow: "var(--shadow-lg)" }}>
                        <Image
                          src={s.img}
                          alt={`Brasserie de ${s.name}`}
                          fill
                          style={{ objectFit: "cover" }}
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.75rem" }}>
                        {s.numbers.map((n) => (
                          <div key={n.label} style={{
                            background: "var(--color-primary-pale)",
                            borderRadius: "var(--radius-md)",
                            padding: "1rem 0.75rem",
                            textAlign: "center",
                            border: "1px solid var(--color-border)",
                          }}>
                            <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.3rem", color: "var(--color-primary)", fontWeight: 700 }}>
                              {n.val}
                            </div>
                            <div style={{ fontSize: "0.72rem", color: "var(--color-text-muted)", lineHeight: 1.3, marginTop: "0.25rem" }}>
                              {n.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Content */}
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                      <div style={{
                        width: "56px",
                        height: "56px",
                        borderRadius: "50%",
                        background: "var(--color-primary)",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "var(--font-serif)",
                        fontWeight: 700,
                        fontSize: "1.1rem",
                        flexShrink: 0,
                      }}>
                        {s.avatar}
                      </div>
                      <div>
                        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.3rem", color: "var(--color-secondary)", marginBottom: "0.2rem" }}>
                          {s.name}
                        </h2>
                        <p style={{ fontSize: "0.88rem", color: "var(--color-text-light)" }}>
                          {s.location}
                        </p>
                      </div>
                      <span className="badge badge-copper" style={{ marginLeft: "auto", flexShrink: 0 }}>
                        {s.result}
                      </span>
                    </div>

                    {/* Meta */}
                    <div style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
                      {[
                        { label: "Ouverture", val: s.opened },
                        { label: "Capacité", val: s.covers },
                      ].map((m) => (
                        <div key={m.label} style={{
                          padding: "0.4rem 0.85rem",
                          background: "var(--color-bg-alt)",
                          borderRadius: "var(--radius-sm)",
                          border: "1px solid var(--color-border)",
                          fontSize: "0.82rem",
                          color: "var(--color-text-light)",
                        }}>
                          <strong style={{ color: "var(--color-text)" }}>{m.label} :</strong> {m.val}
                        </div>
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote style={{
                      fontFamily: "var(--font-accent)",
                      fontStyle: "italic",
                      fontSize: "1.05rem",
                      color: "var(--color-text)",
                      lineHeight: 1.7,
                      borderLeft: "4px solid var(--color-primary)",
                      paddingLeft: "1.25rem",
                      marginBottom: "1.5rem",
                    }}>
                      &ldquo;{s.quote}&rdquo;
                    </blockquote>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.5rem" }}>
                      <div style={{
                        padding: "1.25rem",
                        background: "var(--color-bg-alt)",
                        borderRadius: "var(--radius-md)",
                        border: "1px solid var(--color-border)",
                      }}>
                        <p style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: "0.5rem" }}>
                          Le défi
                        </p>
                        <p style={{ fontSize: "0.88rem", color: "var(--color-text)", lineHeight: 1.6 }}>
                          {s.challenge}
                        </p>
                      </div>
                      <div style={{
                        padding: "1.25rem",
                        background: "var(--color-primary-pale)",
                        borderRadius: "var(--radius-md)",
                        border: "1px solid var(--color-border)",
                      }}>
                        <p style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-primary)", marginBottom: "0.5rem" }}>
                          La solution
                        </p>
                        <p style={{ fontSize: "0.88rem", color: "var(--color-text)", lineHeight: 1.6 }}>
                          {s.solution}
                        </p>
                      </div>
                    </div>
                  </div>

                  {i % 2 !== 0 && (
                    <div>
                      <div style={{ position: "relative", aspectRatio: "3/4", borderRadius: "var(--radius-lg)", overflow: "hidden", marginBottom: "1.5rem", boxShadow: "var(--shadow-lg)" }}>
                        <Image
                          src={s.img}
                          alt={`Brasserie de ${s.name}`}
                          fill
                          style={{ objectFit: "cover" }}
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.75rem" }}>
                        {s.numbers.map((n) => (
                          <div key={n.label} style={{
                            background: "var(--color-primary-pale)",
                            borderRadius: "var(--radius-md)",
                            padding: "1rem 0.75rem",
                            textAlign: "center",
                            border: "1px solid var(--color-border)",
                          }}>
                            <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.3rem", color: "var(--color-primary)", fontWeight: 700 }}>
                              {n.val}
                            </div>
                            <div style={{ fontSize: "0.72rem", color: "var(--color-text-muted)", lineHeight: 1.3, marginTop: "0.25rem" }}>
                              {n.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {i < STORIES.length - 1 && (
                  <div style={{ marginTop: "5rem", height: "1px", background: "var(--color-border)" }} />
                )}

                <style>{`
                  @media (max-width: 768px) {
                    .temoignage-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
                  }
                `}</style>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-wood">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", color: "white", marginBottom: "1rem" }}>
            Votre success story commence ici
          </h2>
          <p style={{ color: "rgba(250,246,240,0.8)", marginBottom: "2.5rem", maxWidth: "55ch", margin: "0 auto 2.5rem" }}>
            Rejoignez les entrepreneurs qui ont structuré leur projet avec Brasserie Métronome et maximisé leurs chances de succès.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/guides" className="btn-primary">
              Accéder aux guides →
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
