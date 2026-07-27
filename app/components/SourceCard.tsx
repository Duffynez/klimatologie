import { Source, sourceCategoryMeta, sourceDownloadUrl, sourceViewUrl } from "../data/sources";

export function SourceCard({ source }: { source: Source }) {
  const category = sourceCategoryMeta[source.category];

  return (
    <article className={`source-card source-card--${source.category}`} id={source.id}>
      <div className="source-card__meta">
        <span className="source-card__category">{category.label}</span>
        <span>{source.type}</span>
        <span>{source.year}</span>
      </div>
      <h2>{source.title}</h2>
      <p>{source.author}</p>
      <p className="source-card__publication">{source.publication}</p>
      <div className="source-card__actions">
        <a href={sourceViewUrl(source)} target="_blank" rel="noreferrer">Otevřít na Google Drive</a>
        <a href={sourceDownloadUrl(source)} target="_blank" rel="noreferrer">Stáhnout kopii</a>
      </div>
    </article>
  );
}
