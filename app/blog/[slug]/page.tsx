import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Metadata } from "next";

import { MarkdownLink } from "@/components/MarkdownLink";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { getBlogPostBySlug } from "@/lib/blog";
import { injectDofollowMarker } from "@/lib/dofollow";

const buildAlternatesByLocale = (post: { slug: string; default_locale?: string | null; translations?: unknown }) => {
  const siteOriginRaw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const siteOrigin = siteOriginRaw
    ? siteOriginRaw.replace(/\/+$/, "")
    : `https://${(process.env.SITE_DOMAIN || "").replace(/^https?:\/\//, "").replace(/\/+$/, "")}`;

  const buildArticleUrl = (articleSlug: string) =>
    siteOrigin ? `${siteOrigin}/blog/${articleSlug}` : `/blog/${articleSlug}`;

  const languages: Record<string, string> = {};
  const defaultLocale = post.default_locale || "fr-FR";
  languages[defaultLocale] = buildArticleUrl(post.slug);

  if (post.translations && typeof post.translations === "object") {
    for (const [locale, value] of Object.entries(post.translations as Record<string, unknown>)) {
      if (!value || typeof value !== "object") continue;
      const translation = value as Record<string, unknown>;
      const translatedSlug = typeof translation.slug === "string" ? translation.slug : "";
      const status = typeof translation.status === "string" ? translation.status : "published";

      if (!translatedSlug || status !== "published") continue;
      languages[locale] = buildArticleUrl(translatedSlug);
    }
  }

  return languages;
};

export const revalidate = 21600;

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) return {};
  return {
    alternates: { languages: buildAlternatesByLocale(post) },
    title: post.seo_title || post.h1,
    description: post.meta_description,
    openGraph: {
      title: post.seo_title || post.h1,
      description: post.meta_description,
      images: post.cover?.file_url ? [post.cover.file_url] : [],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) return notFound();

  // Traduction
  let displayH1 = post.h1;
  let displayBody = post.body_md;
  if (post.slug !== slug && post.translations) {
    for (const val of Object.values(post.translations)) {
      const v = val as { slug?: string; h1?: string; body_md?: string };
      if (v.slug === slug) {
        displayH1 = v.h1 || displayH1;
        displayBody = v.body_md || displayBody;
        break;
      }
    }
  }
  const bodyMd = injectDofollowMarker(displayBody || "");

  const date = post.published_at
    ? new Date(post.published_at).toLocaleDateString("fr-FR", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;

  return (
    <>
      {/* Article hero */}
      <section style={{ background: "var(--color-secondary)", padding: "3rem 0" }}>
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
          {post.categories?.[0] && (
            <span className="badge badge-copper" style={{ display: "block", marginBottom: "1rem" }}>
              {post.categories[0].label}
            </span>
          )}
          <h1 style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            color: "white",
            maxWidth: "800px",
            lineHeight: 1.25,
          }}>
            {displayH1}
          </h1>
          {date && (
            <p style={{ color: "rgba(250,246,240,0.6)", marginTop: "1rem", fontSize: "0.9rem" }}>
              Publié le {date}
            </p>
          )}
        </div>
      </section>

      {/* Article content */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: "780px", margin: "0 auto" }}>
            {/* Cover image */}
            {post.cover?.file_url && (
              <div style={{
                position: "relative",
                width: "100%",
                aspectRatio: "16/9",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                marginBottom: "2.5rem",
                boxShadow: "var(--shadow-lg)",
              }}>
                <Image
                  src={post.cover.file_url}
                  alt={post.cover.alt || displayH1}
                  fill
                  priority
                  style={{ objectFit: "cover" }}
                />
              </div>
            )}

            {/* Language switcher */}
            <LanguageSwitcher post={post} currentSlug={slug} />

            {/* Body */}
            <div className="prose-blog">
              <ReactMarkdown remarkPlugins={[remarkGfm]} components={{ a: MarkdownLink }}>
                {bodyMd}
              </ReactMarkdown>
            </div>

            {/* Author */}
            {post.author && (
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                marginTop: "3rem",
                paddingTop: "2rem",
                borderTop: "2px solid var(--color-border)",
                background: "var(--color-surface-warm)",
                borderRadius: "var(--radius-md)",
                padding: "1.5rem",
              }}>
                {post.author.avatar_url ? (
                  <Image
                    src={post.author.avatar_url}
                    alt={post.author.name}
                    width={112}
                    height={112}
                    style={{ borderRadius: "50%", objectFit: "cover", flexShrink: 0 }}
                  quality={95}
                  />
                ) : (
                  <div style={{
                    width: "64px",
                    height: "64px",
                    borderRadius: "50%",
                    background: "var(--color-primary)",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-serif)",
                    fontWeight: 700,
                    fontSize: "1.3rem",
                    flexShrink: 0,
                  }}>
                    {post.author.name.charAt(0)}
                  </div>
                )}
                <div>
                  <p style={{ fontWeight: 700, color: "var(--color-secondary)", fontFamily: "var(--font-serif)" }}>
                    {post.author.name}
                  </p>
                  {post.author.bio && (
                    <p style={{ fontSize: "0.88rem", color: "var(--color-text-light)", marginTop: "0.25rem" }}>
                      {post.author.bio}
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Back link */}
            <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid var(--color-border)" }}>
              <Link href="/blog" className="btn-outline">
                ← Tous les articles
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
