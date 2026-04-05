import Image from "next/image";
import Link from "next/link";
import { getPublishedBlogPosts } from "@/lib/blog";
import { BlogCard } from "@/components/BlogCard";
import type { Metadata } from "next";

export const revalidate = 21600;

export const metadata: Metadata = {
  title: "Créer sa Brasserie : Guide Complet Entrepreneur 2024",
  description:
    "Découvrez tous les secrets pour lancer votre brasserie : démarches, financement, équipe, rentabilité. Conseils d'experts et retours d'expérience.",
};

const CHALLENGES = [
  {
    icon: "📋",
    title: "Paperasse administrative",
    desc: "Licences, normes sanitaires, déclarations fiscales… Le maquis réglementaire décourage 1 entrepreneur sur 3 avant même l'ouverture.",
  },
  {
    icon: "💶",
    title: "Financement & trésorerie",
    desc: "Apport personnel, emprunts bancaires, aides régionales : structurer son plan de financement sans se noyer dans les chiffres.",
  },
  {
    icon: "👨‍🍳",
    title: "Recrutement de l'équipe",
    desc: "Trouver des cuisiniers et serveurs compétents, fidèles et motivés dans un secteur en tension permanente.",
  },
  {
    icon: "📣",
    title: "Acquisition de clientèle",
    desc: "Attirer les premiers clients, créer la notoriété locale, développer une base fidèle dès les premiers mois.",
  },
  {
    icon: "📊",
    title: "Rentabilité à long terme",
    desc: "Contrôler les coûts matières, optimiser les marges, éviter les erreurs de gestion qui plombent la rentabilité.",
  },
  {
    icon: "🏆",
    title: "Se différencier de la concurrence",
    desc: "Trouver son positionnement unique, construire une identité de marque forte face aux chaînes et aux concurrents locaux.",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Étude de marché",
    desc: "Analyser votre zone de chalandise, identifier votre clientèle cible, évaluer la concurrence locale et valider la viabilité du projet.",
  },
  {
    num: "02",
    title: "Business plan",
    desc: "Construire un prévisionnel financier réaliste : investissements, charges fixes, CA projeté, seuil de rentabilité.",
  },
  {
    num: "03",
    title: "Démarches & financement",
    desc: "Obtenir les licences, négocier les financements bancaires, activer les aides régionales et nationales disponibles.",
  },
  {
    num: "04",
    title: "Lancement opérationnel",
    desc: "Aménager les locaux, recruter l'équipe, élaborer la carte, orchestrer l'ouverture avec un impact maximum.",
  },
  {
    num: "05",
    title: "Croissance & optimisation",
    desc: "Analyser les performances, fidéliser la clientèle, développer de nouveaux services et maximiser la rentabilité.",
  },
];

const GUIDES_PHARES = [
  {
    icon: "⚖️",
    title: "Démarches administratives & légales",
    desc: "Toutes les licences, déclarations et obligations réglementaires pour ouvrir votre brasserie en toute conformité.",
    img: "/images/guides-legal.jpeg",
    href: "/guides",
    badge: "Essentiel",
  },
  {
    icon: "💰",
    title: "Financement & business plan",
    desc: "Construire un dossier financier convaincant pour les banques et les investisseurs. Prévisionnel, ratios, KPIs.",
    img: "/images/finance-meeting.jpeg",
    href: "/guides",
    badge: "Stratégique",
  },
  {
    icon: "🍳",
    title: "Équipement & aménagement",
    desc: "Choisir le bon matériel de cuisine professionnelle, optimiser l'agencement, respecter les normes ERP.",
    img: "/images/guides-equipment.jpeg",
    href: "/guides",
    badge: "Opérationnel",
  },
  {
    icon: "📣",
    title: "Marketing & acquisition client",
    desc: "Stratégies digitales et locales pour remplir votre salle depuis le premier mois : réseaux sociaux, Google, bouche-à-oreille.",
    img: "/images/guides-notebook.jpeg",
    href: "/guides",
    badge: "Croissance",
  },
];

const TESTIMONIALS = [
  {
    name: "Marc Lefèvre",
    role: "Fondateur, La Brasserie du Canal — Lyon",
    text: "Grâce aux guides Métronome, j'ai évité les erreurs classiques sur le business plan. Mon brasserie a atteint la rentabilité dès le 8e mois, bien avant mes projections initiales.",
    result: "Rentable en 8 mois",
    avatar: "ML",
  },
  {
    name: "Sophie Marchand",
    role: "Co-gérante, Le Zinc Doré — Bordeaux",
    text: "Le guide sur le recrutement m'a sauvé la mise. J'ai pu structurer mes entretiens et mes contrats correctement. Zéro turnover en 18 mois, c'est exceptionnel dans notre secteur.",
    result: "0 turnover en 18 mois",
    avatar: "SM",
  },
  {
    name: "Thomas Berger",
    role: "Gérant, Brasserie Les Mousses — Strasbourg",
    text: "La checklist administrative m'a fait économiser au moins 3 semaines de recherches. Tout est clair, structuré, actionnable. Je recommande à tous les futurs restaurateurs.",
    result: "3 semaines gagnées",
    avatar: "TB",
  },
];

export default async function HomePage() {
  const posts = await getPublishedBlogPosts(3, 0);

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero" style={{ position: "relative" }}>
        <Image
          src="/images/hero-restaurant.jpeg"
          alt="Intérieur chaleureux d'une brasserie artisanale parisienne"
          fill
          priority
          style={{ objectFit: "cover" }}
          quality={85}
        />
        <div className="hero-overlay" />
        <div className="container hero-content" style={{ width: "100%" }}>
          <div style={{ maxWidth: "720px" }} className="animate-fade-up">
            <span className="badge badge-copper" style={{ marginBottom: "1.5rem", display: "inline-block" }}>
              Guide Entrepreneuriat Brasserie
            </span>
            <h1 style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
              fontWeight: 700,
              color: "white",
              lineHeight: 1.15,
              marginBottom: "1.5rem",
            }}>
              Lancez votre brasserie<br />
              <span style={{ color: "var(--color-zinc)" }}>avec succès</span>
            </h1>
            <p style={{
              fontFamily: "var(--font-sans)",
              fontSize: "1.15rem",
              color: "rgba(250, 246, 240, 0.85)",
              lineHeight: 1.7,
              marginBottom: "2.5rem",
              maxWidth: "56ch",
            }}>
              De l&apos;idée à l&apos;ouverture : guides pratiques, checklists experts et conseils terrain
              pour transformer votre projet de brasserie en réalité rentable.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/guides" className="btn-primary" style={{ fontSize: "1rem", padding: "1rem 2.5rem" }}>
                📖 Accéder aux guides gratuits
              </Link>
              <Link href="/contact" className="btn-outline-white" style={{ fontSize: "1rem", padding: "1rem 2.5rem" }}>
                Consultation gratuite →
              </Link>
            </div>
          </div>

          {/* Stats bar */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1rem",
            marginTop: "4rem",
            maxWidth: "600px",
          }} className="animate-fade-up delay-300">
            {[
              { val: "1 200+", label: "Entrepreneurs accompagnés" },
              { val: "87%", label: "Taux de satisfaction" },
              { val: "6 guides", label: "Thématiques couvertes" },
            ].map((s) => (
              <div key={s.label} className="stat-box">
                <div style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.6rem",
                  fontWeight: 700,
                  color: "var(--color-zinc)",
                  marginBottom: "0.25rem",
                }}>
                  {s.val}
                </div>
                <div style={{ fontSize: "0.8rem", color: "rgba(250, 246, 240, 0.65)", lineHeight: 1.4 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROBLÉMATIQUES ===== */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p className="section-eyebrow">Les défis réels</p>
            <h2 className="section-title">Les 6 obstacles qui font échouer les brasseries</h2>
            <div className="divider-zinc" style={{ margin: "0 auto 1.5rem" }} />
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              80% des nouvelles brasseries rencontrent ces problèmes. Nos guides vous donnent les solutions concrètes pour les surmonter.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}>
            {CHALLENGES.map((c, i) => (
              <div key={c.title} className="card" style={{ padding: "1.75rem" }}>
                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div className="feature-icon" style={{ flexShrink: 0 }}>
                    {c.icon}
                  </div>
                  <div>
                    <h3 style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.05rem",
                      color: "var(--color-secondary)",
                      marginBottom: "0.5rem",
                    }}>
                      {c.title}
                    </h3>
                    <p style={{ fontSize: "0.92rem", color: "var(--color-text-light)", lineHeight: 1.6 }}>
                      {c.desc}
                    </p>
                  </div>
                </div>
                <div style={{
                  marginTop: "1rem",
                  paddingTop: "1rem",
                  borderTop: "1px solid var(--color-border-light)",
                  display: "flex",
                  justifyContent: "flex-end",
                }}>
                  <span className="badge badge-copper" style={{ fontSize: "0.7rem" }}>
                    Guide #{i + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MÉTHODOLOGIE ===== */}
      <section className="section-alt" style={{ position: "relative", overflow: "hidden" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}
            className="methodology-grid"
          >
            {/* Image */}
            <div style={{ position: "relative", borderRadius: "var(--radius-lg)", overflow: "hidden", aspectRatio: "4/3" }}>
              <Image
                src="/images/team-chef.jpeg"
                alt="Chef cuisinier en action dans une brasserie professionnelle"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Badge overlay */}
              <div style={{
                position: "absolute",
                bottom: "1.5rem",
                left: "1.5rem",
                background: "var(--color-primary)",
                color: "white",
                borderRadius: "var(--radius-md)",
                padding: "0.75rem 1.25rem",
                fontFamily: "var(--font-serif)",
                fontWeight: 700,
                fontSize: "0.95rem",
              }}>
                ✓ Approche terrain éprouvée
              </div>
            </div>

            {/* Steps */}
            <div>
              <p className="section-eyebrow">Notre méthodologie</p>
              <h2 className="section-title">5 étapes pour réussir votre projet</h2>
              <div className="divider-zinc" />
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {STEPS.map((s) => (
                  <div key={s.num} style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
                    <div className="guide-number">{s.num}</div>
                    <div>
                      <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1rem", color: "var(--color-secondary)", marginBottom: "0.3rem" }}>
                        {s.title}
                      </h3>
                      <p style={{ fontSize: "0.9rem", color: "var(--color-text-light)", lineHeight: 1.6 }}>
                        {s.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: "2rem" }}>
                <Link href="/guides" className="btn-primary">
                  Découvrir les guides →
                </Link>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .methodology-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          }
        `}</style>
      </section>

      {/* ===== GUIDES PHARES ===== */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p className="section-eyebrow">Ressources essentielles</p>
            <h2 className="section-title">Nos 4 guides incontournables</h2>
            <div className="divider-zinc" style={{ margin: "0 auto 1.5rem" }} />
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              Des guides complets rédigés par des professionnels de la restauration, mis à jour régulièrement.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.5rem",
          }}>
            {GUIDES_PHARES.map((g) => (
              <Link key={g.title} href={g.href} style={{ textDecoration: "none" }}>
                <div className="card" style={{ height: "100%" }}>
                  <div style={{ position: "relative", height: "180px", overflow: "hidden" }}>
                    <Image
                      src={g.img}
                      alt={g.title}
                      fill
                      style={{ objectFit: "cover" }}
                      className="blog-card-img"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                    <span className="badge badge-copper" style={{
                      position: "absolute",
                      top: "0.75rem",
                      left: "0.75rem",
                    }}>
                      {g.badge}
                    </span>
                  </div>
                  <div style={{ padding: "1.5rem" }}>
                    <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{g.icon}</div>
                    <h3 style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.05rem",
                      color: "var(--color-secondary)",
                      marginBottom: "0.6rem",
                    }}>
                      {g.title}
                    </h3>
                    <p style={{ fontSize: "0.88rem", color: "var(--color-text-light)", lineHeight: 1.6 }}>
                      {g.desc}
                    </p>
                    <div style={{
                      marginTop: "1rem",
                      color: "var(--color-primary)",
                      fontWeight: 600,
                      fontSize: "0.88rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.3rem",
                    }}>
                      Lire le guide →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/guides" className="btn-accent">
              Voir tous les guides
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FINANCEMENT SECTION ===== */}
      <section className="section-wood" style={{ position: "relative", overflow: "hidden" }}>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}
            className="finance-grid"
          >
            <div>
              <p className="section-eyebrow" style={{ color: "var(--color-zinc)" }}>Financement</p>
              <h2 style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                color: "white",
                marginBottom: "1rem",
                lineHeight: 1.2,
              }}>
                Obtenir les fonds pour lancer votre brasserie
              </h2>
              <div style={{ width: "60px", height: "3px", background: "var(--color-zinc)", borderRadius: "2px", margin: "1rem 0 1.75rem" }} />
              <p style={{ color: "rgba(250, 246, 240, 0.8)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                En France, ouvrir une brasserie nécessite en moyenne 180 000 € à 350 000 € d&apos;investissement. Notre guide financement vous détaille toutes les solutions disponibles : prêt bancaire, aides régionales, love money, crowdfunding et dispositifs spécifiques à la restauration.
              </p>
              <ul style={{ listStyle: "none", padding: 0, marginBottom: "2rem" }}>
                {[
                  "Prêt BPI et garanties publiques",
                  "Aides régionales et FFAE",
                  "Business angels secteur HoReCa",
                  "Crowdfunding alimentaire",
                ].map((item) => (
                  <li key={item} style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    color: "rgba(250, 246, 240, 0.85)",
                    marginBottom: "0.65rem",
                    fontSize: "0.95rem",
                  }}>
                    <span style={{ color: "var(--color-zinc)", fontWeight: 700 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/guides" className="btn-primary">
                Télécharger le guide financement
              </Link>
            </div>

            <div style={{ position: "relative", borderRadius: "var(--radius-lg)", overflow: "hidden", aspectRatio: "4/3" }}>
              <Image
                src="/images/finance-meeting.jpeg"
                alt="Réunion de financement pour création de brasserie"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .finance-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          }
        `}</style>
      </section>

      {/* ===== TÉMOIGNAGES ===== */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p className="section-eyebrow">Ils ont réussi</p>
            <h2 className="section-title">Success stories de brasseurs</h2>
            <div className="divider-zinc" style={{ margin: "0 auto 1.5rem" }} />
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              Des entrepreneurs qui ont suivi nos guides et construit des brasseries florissantes.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem", marginBottom: "3rem" }}>
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="testimonial-card">
                <div style={{ marginBottom: "1.25rem", paddingTop: "1rem" }}>
                  <p style={{
                    fontFamily: "var(--font-accent)",
                    fontStyle: "italic",
                    fontSize: "0.97rem",
                    color: "var(--color-text-light)",
                    lineHeight: 1.7,
                  }}>
                    {t.text}
                  </p>
                </div>
                <div style={{
                  paddingTop: "1rem",
                  borderTop: "1px solid var(--color-border)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.85rem",
                }}>
                  <div style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    background: "var(--color-primary)",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-serif)",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    flexShrink: 0,
                  }}>
                    {t.avatar}
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontWeight: 700, fontSize: "0.9rem", color: "var(--color-secondary)" }}>
                      {t.name}
                    </p>
                    <p style={{ fontSize: "0.8rem", color: "var(--color-text-muted)" }}>
                      {t.role}
                    </p>
                  </div>
                  <span className="badge badge-copper" style={{ fontSize: "0.7rem", flexShrink: 0 }}>
                    {t.result}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center" }}>
            <Link href="/temoignages" className="btn-outline">
              Lire toutes les success stories →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== BLOG POSTS ===== */}
      {posts.length > 0 && (
        <section className="section-alt">
          <div className="container">
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "2.5rem", flexWrap: "wrap", gap: "1rem" }}>
              <div>
                <p className="section-eyebrow">Actualités & conseils</p>
                <h2 className="section-title" style={{ marginBottom: 0 }}>Derniers articles</h2>
              </div>
              <Link href="/blog" className="btn-outline">
                Voir tout le blog →
              </Link>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
              {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== CTA FINAL ===== */}
      <section style={{
        padding: "5rem 0",
        background: "var(--color-accent)",
        position: "relative",
        overflow: "hidden",
      }}>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}
            className="cta-grid"
          >
            <div>
              <p className="section-eyebrow" style={{ color: "var(--color-zinc)" }}>Consultation gratuite</p>
              <h2 style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                color: "white",
                marginBottom: "1rem",
                lineHeight: 1.2,
              }}>
                Prêt à lancer votre projet de brasserie ?
              </h2>
              <p style={{ color: "rgba(250, 246, 240, 0.8)", marginBottom: "2rem", lineHeight: 1.7 }}>
                Échangeons 30 minutes sur votre projet. Diagnostic personnalisé, recommandations concrètes, réponses à vos questions spécifiques. Sans engagement.
              </p>
              <Link href="/contact" className="btn-primary" style={{ fontSize: "1rem", padding: "1rem 2.5rem" }}>
                Réserver ma consultation →
              </Link>
            </div>

            <div style={{ position: "relative", borderRadius: "var(--radius-lg)", overflow: "hidden", aspectRatio: "16/9" }}>
              <Image
                src="/images/contact-office.jpeg"
                alt="Consultation entrepreneuriat brasserie"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(135deg, rgba(61,74,82,0.4) 0%, transparent 100%)",
              }} />
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .cta-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          }
        `}</style>
      </section>
    </>
  );
}
