import { Source, sourceDownloadUrl, sourceViewUrl } from "../data/sources";

export function SourceCard({ source }: { source: Source }) {
  return (
    <article className="source-card" id={source.id}>
      <div className="source-card__meta">
        <span>{source.year}</span>
        <span>{source.type}</span>
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
