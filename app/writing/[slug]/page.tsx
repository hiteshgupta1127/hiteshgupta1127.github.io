import { notFound } from "next/navigation";

import { JsonLd } from "@/components/seo/json-ld";
import { PageIntro } from "@/components/ui/page-intro";
import { PageStack } from "@/components/ui/page-stack";
import { TextLink } from "@/components/ui/text-link";
import { ArticleBody } from "@/components/writing/article-body";
import { getNextPost, getPost, posts } from "@/content/posts";
import { profile } from "@/content/profile";
import { pageMetadata } from "@/content/seo";
import { formatMonthYear } from "@/lib/format";

export function generateStaticParams() {
  return posts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/writing/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return pageMetadata({ path: `/writing/${slug}`, title: post.title, description: post.summary });
}

export default async function PostPage({ params }: PageProps<"/writing/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const next = getNextPost(slug);
  const article = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.summary,
    datePublished: post.date,
    url: `${profile.url}/writing/${slug}`,
    author: { "@type": "Person", name: profile.name, url: profile.url },
  };

  return (
    <article>
      <JsonLd data={article} />
      <PageStack>
        <PageIntro
          back={{ href: "/writing", label: "Writing" }}
          eyebrow={`${post.topic} · ${formatMonthYear(post.date)} · ${post.readingMinutes} min read`}
          title={post.title}
          titleStyle="serif"
        />
        <ArticleBody blocks={post.body} />
        <nav aria-label="Next post" className="flex items-baseline justify-between gap-4 border-t border-line pt-5">
          <span className="shrink-0 font-mono text-label text-muted uppercase">Next</span>
          <span className="text-right text-row text-pretty">
            <TextLink href={`/writing/${next.slug}`} tone="default">
              {next.title}
            </TextLink>
          </span>
        </nav>
      </PageStack>
    </article>
  );
}
