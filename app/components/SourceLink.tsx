import Link from "next/link";
import type { ReactNode } from "react";
import { sourceById } from "../data/sources";

export function SourceLink({ id, children }: { id: string; children: ReactNode }) {
  const source = sourceById(id);

  if (!source) {
    return <span className="citation citation--missing">[chybějící zdroj: {id}]</span>;
  }

  return (
    <Link
      className={`article-reference article-reference--${source.category}`}
      href={`/zdroje#${source.id}`}
      title={`${source.author} (${source.year}): ${source.title}`}
    >
      {children}
    </Link>
  );
}
