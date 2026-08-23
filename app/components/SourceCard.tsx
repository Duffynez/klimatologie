import {
  Source,
  sourceCategoryMeta,
  sourceDownloadUrl,
  sourceDriveUrl,
  sourceViewUrl,
} from "../data/sources";

export function SourceCard({ source }: { source: Source }) {
  const category = sourceCategoryMeta[source.category];
  const downloadUrl = sourceDownloadUrl(source);
  const driveUrl = sourceDriveUrl(source);
  const isRelatedMaterial = source.archiveRelation === "related-material";
  const isDoi = source.externalUrl?.startsWith("https://doi.org/");
  const isDataSource = source.type === "Datový soubor" || source.type === "Datový portál nebo soubor";

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
        {source.externalUrl ? (
          <a href={sourceViewUrl(source)} target="_blank" rel="noreferrer">
            {isDoi ? "Otevřít DOI" : source.availability === "open-access" ? "Otevřít veřejný zdroj" : "Otevřít původní zdroj"}
          </a>
        ) : null}
        {source.openAccessUrl && source.openAccessUrl !== source.externalUrl ? (
          <a href={source.openAccessUrl} target="_blank" rel="noreferrer">
            {isDataSource ? "Otevřít veřejná data" : "Otevřít plný text"}
          </a>
        ) : null}
        {driveUrl ? (
          <a href={driveUrl} target="_blank" rel="noreferrer">
            {isRelatedMaterial ? "Otevřít související soubor" : "Otevřít kopii na Google Drive"}
          </a>
        ) : null}
        {downloadUrl ? (
          <a href={downloadUrl} target="_blank" rel="noreferrer">
            {isRelatedMaterial ? "Stáhnout související soubor" : "Stáhnout kopii"}
          </a>
        ) : null}
      </div>
    </article>
  );
}
