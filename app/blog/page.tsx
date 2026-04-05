import Link from "next/link";
import { getPublishedBlogPosts } from "@/lib/blog";
import { BlogCard } from "@/components/BlogCard";
import type { Metadata } from "next";

export const revalidate = 21600;

export const metadata: Metadata = {
  title: "Blog — Conseils Entrepreneuriat Brasserie",
  description:
    "Guides, analyses et conseils pratiques pour créer et développer votre brasserie. Articles rédigés par des professionnels de la restauration.",
};

export default async function BlogPage() {
  const posts = await getPublishedBlogPosts(24, 0);

  return (
    <>
      {/* Hero blog */}
      <section style={{
        background: "var(--color-secondary)",
        padding: "4rem 0",
        position: "relative",
        overflow: "hidden",
      }}>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <p className="section-eyebrow" style={{ color: "var(--color-zinc)" }}>Ressources &amp; conseils</p>
          <h1 style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            color: "white",
            marginBottom: "1rem",
          }}>
            Blog Brasserie Métronome
          </h1>
          <p style={{ color: "rgba(250,246,240,0.75)", maxWidth: "55ch", lineHeight: 1.7 }}>
            Articles de fond, checklists pratiques et témoignages de brasseurs.
            Toute la connaissance nécessaire à votre projet.
          </p>
        </div>
      </section>

      {/* Articles grid */}
      <section className="section">
        <div className="container">
          {posts.length === 0 ? (
            <div style={{
              textAlign: "center",
              padding: "4rem 2rem",
              background: "var(--color-bg-alt)",
              borderRadius: "var(--radius-lg)",
              border: "1px solid var(--color-border)",
            }}>
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📝</div>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", color: "var(--color-secondary)", marginBottom: "0.75rem" }}>
                Aucun article publié pour le moment.
              </h2>
              <p style={{ color: "var(--color-text-light)", marginBottom: "2rem" }}>
                Nos experts sont en train de rédiger les prochains guides. Revenez bientôt !
              </p>
              <Link href="/guides" className="btn-primary">
                Consulter nos guides →
              </Link>
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.5rem" }}>
              {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section-alt">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="section-title">Besoin d&apos;un conseil personnalisé ?</h2>
          <p className="section-subtitle" style={{ margin: "0 auto 2rem" }}>
            Nos experts répondent à vos questions spécifiques lors d&apos;une consultation gratuite.
          </p>
          <Link href="/contact" className="btn-primary">
            Réserver une consultation gratuite →
          </Link>
        </div>
      </section>
    </>
  );
}
