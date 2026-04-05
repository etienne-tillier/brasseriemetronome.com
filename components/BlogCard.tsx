import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/types";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const title = post.h1 || post.seo_title || post.slug;
  const excerpt = post.meta_description || post.excerpt || "";
  const date = post.published_at
    ? new Date(post.published_at).toLocaleDateString("fr-FR", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;

  return (
    <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
      <article className="card" style={{ height: "100%" }}>
        {/* Cover image */}
        {post.cover?.file_url && (
          <div style={{ position: "relative", height: "200px", overflow: "hidden" }}>
            <Image
              src={post.cover.file_url}
              alt={post.cover.alt || title}
              fill
              style={{ objectFit: "cover" }}
              className="blog-card-img"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        )}
        {/* Content */}
        <div style={{ padding: "1.5rem" }}>
          {post.categories?.[0]?.label && (
            <span className="badge badge-copper" style={{ marginBottom: "0.75rem", display: "inline-block" }}>
              {post.categories[0].label}
            </span>
          )}
          <h3 style={{
            fontFamily: "var(--font-serif)",
            fontSize: "1.05rem",
            color: "var(--color-secondary)",
            marginBottom: "0.6rem",
            lineHeight: 1.35,
          }}>
            {title}
          </h3>
          {excerpt && (
            <p style={{
              fontSize: "0.88rem",
              color: "var(--color-text-light)",
              lineHeight: 1.6,
              marginBottom: "1rem",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical" as const,
              overflow: "hidden",
            }}>
              {excerpt}
            </p>
          )}
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "0.75rem",
            borderTop: "1px solid var(--color-border-light)",
          }}>
            {date && (
              <span style={{ fontSize: "0.8rem", color: "var(--color-text-muted)" }}>
                {date}
              </span>
            )}
            <span style={{
              fontSize: "0.85rem",
              color: "var(--color-primary)",
              fontWeight: 600,
              marginLeft: "auto",
            }}>
              Lire l&apos;article →
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
