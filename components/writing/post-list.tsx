import { AppLink } from "@/components/ui/app-link";
import type { Post } from "@/content/posts";
import { formatMonthYear } from "@/lib/format";

export function PostList({ posts }: { posts: readonly Post[] }) {
  return (
    <ul className="flex flex-col">
      {posts.map((post) => (
        <li key={post.slug}>
          <AppLink
            href={`/writing/${post.slug}`}
            className="group flex items-baseline justify-between gap-4 border-b border-line py-4"
          >
            <span className="text-row text-pretty underline-offset-4 group-hover:underline">{post.title}</span>
            <time dateTime={post.date} className="shrink-0 font-mono text-label text-muted">
              {formatMonthYear(post.date)}
            </time>
          </AppLink>
        </li>
      ))}
    </ul>
  );
}
