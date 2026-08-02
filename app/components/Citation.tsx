import Link from "next/link";
import { sourceById } from "../data/sources";

export function Citation({ id }: { id: string }) {
  const source = sourceById(id);

  if (!source) {
    return <span className="citation citation--missing">[chybějící zdroj: {id}]</span>;
  }

  return (
    <Link
      className={`citation citation--${source.category}`}
      href={`/zdroje#${source.id}`}
      title={`${source.author} (${source.year})`}
    >
      [{source.citationLabel ?? `${source.author.split(" ").at(-1)} ${source.year}`}]
    </Link>
  );
}
