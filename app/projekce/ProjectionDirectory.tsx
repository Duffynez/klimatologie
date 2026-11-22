import Link from "next/link";
import { PageLead } from "../components/PageLead";
import { TopicCatalog } from "../components/TopicCatalog";
import { projectionCategories, projectionScopes, projections, scopeByArea, type ProjectionScope } from "../data/projections";

function CzechOutline() {
  // Natural Earth, 1:50m Admin 0 Countries (public domain), simplified at icon size.
  return (
    <svg className="projection-area__map" viewBox="0 0 40 26" width="32" height="21" aria-hidden="true" focusable="false">
      <path d="M38.5,15.5 37.2,15.7 34.8,17.7 34.4,19.3 32.6,20.8 31.1,21.3 29.2,21.2 28.2,23.3 27.8,22.4 25.9,21.6 25.0,22.1 23.3,21.9 22.0,21.0 17.4,19.9 17.0,21.8 16.3,22.0 15.8,23.3 14.7,23.0 13.0,23.4 12.3,23.2 9.5,20.2 8.9,20.2 6.0,17.1 4.7,16.3 3.2,13.6 3.8,12.2 2.1,10.5 1.5,8.8 2.5,9.8 4.0,8.0 6.2,7.9 6.6,7.2 7.5,7.0 8.6,6.1 8.9,6.2 9.6,5.4 14.0,3.7 13.5,2.6 15.0,2.9 15.3,4.1 16.0,4.4 17.4,3.8 17.4,2.7 18.9,3.2 19.4,4.5 21.5,5.1 23.0,6.2 24.5,5.8 24.9,6.1 25.0,7.0 24.1,7.8 26.5,10.5 28.4,9.3 27.8,7.7 29.3,8.1 30.7,9.2 32.3,8.7 32.5,9.4 31.7,10.0 31.9,10.4 33.0,11.5 34.1,11.1 35.6,12.1 37.0,12.4Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

export function ProjectionDirectory({ scope }: { scope?: ProjectionScope }) {
  return (
    <div className="page-shell">
      <PageLead eyebrow="Projekce" title="Jak se může změnit klima?">
        <p>Klimatické projekce ukazují, jak se může klima vyvíjet při různých emisích skleníkových plynů. U každé otázky najdete také měření, se kterými výpočty souvisejí.</p>
        <nav className="mechanism-catalog__nav projection-scope-nav" aria-label="Projekce podle území">
          <Link className="text-link" href="/projekce/" aria-current={scope === undefined ? "page" : undefined}>Všechna území</Link>
          {projectionScopes.map(({ slug, label }) => (
            <Link className="text-link" href={`/projekce/uzemi/${slug}/`} aria-current={scope === slug ? "page" : undefined} key={slug}>
              {label}
            </Link>
          ))}
        </nav>
      </PageLead>
      <TopicCatalog
        basePath="/projekce"
        categories={projectionCategories}
        topics={projections}
        isVisible={(topic) => scope === undefined || scopeByArea[topic.area] === scope}
        renderLabel={({ area }) => (
          <span className="projection-area">
            {area === "Česko" && <CzechOutline />}
            {area}
          </span>
        )}
      />
    </div>
  );
}
