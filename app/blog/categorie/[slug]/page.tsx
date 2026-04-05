import Link from "next/link";
import { getBlogPostsByCategory, getCategoryInfo } from "@/lib/blog";
import { BlogCard } from "@/components/BlogCard";
import type { Metadata } from "next";

export const revalidate = 21600;

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = await getCategoryInfo(slug);
  return {
    title: category?.label
      ? `${category.label} — Blog Brasserie Métronome`
      : "Catégorie — Blog Brasserie Métronome",
    description: category?.description || `Articles sur ${slug} pour entrepreneurs brasserie.`,
  };
}

export default async function BlogCategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const [posts, category] = await Promise.all([
    getBlogPostsByCategory(slug, 24, 0),
    getCategoryInfo(slug),
  ]);

  const categoryLabel = category?.label || slug;

  return (
    <>
      {/* Hero */}
      <section style={{ background: "var(--color-secondary)", padding: "4rem 0" }}>
        <div className="container">
          <Link
            href="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              color: "var(--color-zinc)",
              textDecoration: "none",
              fontSize: "0.88rem",
              fontWeight: 600,
              marginBottom: "1.5rem",
            }}
          >
            ← Retour au blog
          </Link>
          <p className="section-eyebrow" style={{ color: "var(--color-zinc)" }}>Catégorie</p>
          <h1 style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            color: "white",
          }}>
            {categoryLabel}
          </h1>
        </div>
      </section>

      {/* Articles */}
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
              <h2 style={{ fontFamily: "var(--font-serif)", color: "var(--color-secondary)", marginBottom: "0.75rem" }}>
                Aucun article publié pour le moment.
              </h2>
              <p style={{ color: "var(--color-text-light)", marginBottom: "2rem" }}>
                Cette catégorie n&apos;a pas encore d&apos;articles publiés.
              </p>
              <Link href="/blog" className="btn-primary">
                Voir tous les articles →
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
    </>
  );
}
