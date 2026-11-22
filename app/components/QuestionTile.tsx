import Link from "next/link";
import type { ReactNode } from "react";

type QuestionTileProps = {
  title: string;
  summary: string;
  category?: string;
  href?: string;
  children?: ReactNode;
};

export function QuestionTile({ title, summary, category, href, children }: QuestionTileProps) {
  const content = (
    <>
      {category && <p className="mechanism-tile__category">{category}</p>}
      <h3>{title}</h3>
      <p>{summary}</p>
    </>
  );
  // Nativní odkaz na fragment otevře i sbalený příklad, ve kterém leží jeho cíl.
  const ContentLink = href?.startsWith("#") ? "a" : Link;

  return (
    <article className="mechanism-tile">
      {href ? (
        <ContentLink className="mechanism-tile__content" href={href}>{content}</ContentLink>
      ) : (
        <div className="mechanism-tile__content">{content}</div>
      )}
      {children}
    </article>
  );
}
