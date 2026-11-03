import { PageIntro } from "@/components/ui/page-intro";
import { PageStack } from "@/components/ui/page-stack";
import { Section } from "@/components/ui/section";
import { PostList } from "@/components/writing/post-list";
import { postsByYear } from "@/content/posts";
import { pageMetadata } from "@/content/seo";

const intro = "Essays on backend systems, AWS and building with LLMs. Roughly one a month.";

export const metadata = pageMetadata({ path: "/writing", title: "Writing", description: intro });

export default function WritingPage() {
  return (
    <PageStack>
      <PageIntro eyebrow="Writing" title="Writing" accent="notes from production.">
        <p className="max-w-lead text-body text-pretty text-muted">{intro}</p>
      </PageIntro>
      {postsByYear().map(([year, posts]) => (
        <Section key={year} title={year}>
          <PostList posts={posts} />
        </Section>
      ))}
    </PageStack>
  );
}
