import { Eyebrow } from "@/components/ui/eyebrow";
import { TextLink } from "@/components/ui/text-link";

const titleStyles = {
  sans: "text-display-sm font-light sm:text-page",
  serif: "font-serif text-article-sm text-pretty sm:text-article",
} as const;

type PageIntroProps = {
  title: string;
  eyebrow?: string;
  accent?: string;
  back?: { href: string; label: string };
  titleStyle?: keyof typeof titleStyles;
  children?: React.ReactNode;
};

export function PageIntro({ title, eyebrow, accent, back, titleStyle = "sans", children }: PageIntroProps) {
  return (
    <header className="flex flex-col gap-6">
      {back && (
        <p className="text-small">
          <TextLink href={back.href} direction="back">
            {back.label}
          </TextLink>
        </p>
      )}
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <div className="flex flex-col gap-3">
        <h1 className={titleStyles[titleStyle]}>{title}</h1>
        {accent && <p className="font-serif text-accent-sm text-muted italic sm:text-accent">{accent}</p>}
      </div>
      {children}
    </header>
  );
}
