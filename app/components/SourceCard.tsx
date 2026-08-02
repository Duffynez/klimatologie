import { Source, sourceCategoryMeta, sourceDownloadUrl, sourceViewUrl } from "../data/sources";

export function SourceCard({ source }: { source: Source }) {
  const category = sourceCategoryMeta[source.category];
  const downloadUrl = sourceDownloadUrl(source);

  return (
    <article className={`source-card source-card--${source.category}`} id={source.id}>
      <div className="source-card__meta">
        <span className="source-card__category">{category.label}</span>
        <span>{source.type}</span>
        <time dateTime={`${source.year}`}>{source.year}</time>
      </div>
      <div className="source-card__body">
        <h2>{source.title}</h2>
        <p className="source-card__author">{source.author}</p>
        <p className="source-card__publication">{source.publication}</p>
      </div>
      <div className="source-card__actions">
        <a href={sourceViewUrl(source)} target="_blank" rel="noreferrer">
          {source.externalUrl ? "Otevřít původní zdroj" : "Otevřít na Google Drive"}
        </a>
        {downloadUrl ? <a href={downloadUrl} target="_blank" rel="noreferrer">Stáhnout kopii</a> : null}
      </div>
    </article>
  );
}
