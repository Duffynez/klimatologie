import Link from "next/link";

type CatalogTopic = {
  slug: string;
  title: string;
  summary: string;
  category: string;
};

type TopicCatalogProps = {
  basePath: string;
  categories: readonly string[];
  topics: readonly CatalogTopic[];
};

export function TopicCatalog({ basePath, categories, topics }: TopicCatalogProps) {
  return (
    <div className="method-catalog">
      {categories.map((category) => {
        const group = topics.filter((topic) => topic.category === category);

        return (
          <section className="method-catalog__group" key={category}>
            <div className="method-catalog__heading">
              <h2>{category}</h2>
              <span>{group.length}</span>
            </div>
            <div className="method-catalog__grid">
              {group.map((topic) => (
                <Link className="method-tile" id={topic.slug} href={`${basePath}/${topic.slug}`} key={topic.slug}>
                  <span>{String(topics.indexOf(topic) + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{topic.title}</h3>
                    <p>{topic.summary}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
