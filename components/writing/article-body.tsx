import { CodeBlock } from "@/components/ui/code-block";
import { Quote } from "@/components/ui/quote";
import type { Block } from "@/content/posts";

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "paragraph":
      return <p className="text-body text-pretty sm:text-body-lg">{block.text}</p>;
    case "heading":
      return <h2 className="text-subheading">{block.text}</h2>;
    case "quote":
      return <Quote>{block.text}</Quote>;
    case "code":
      return <CodeBlock code={block.code} />;
  }
}

export function ArticleBody({ blocks }: { blocks: readonly Block[] }) {
  return (
    <div className="flex max-w-reading flex-col gap-7">
      {blocks.map((block, index) => (
        <BlockView key={index} block={block} />
      ))}
    </div>
  );
}
