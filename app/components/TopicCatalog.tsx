import Link from "next/link";
import type { ReactNode } from "react";

type CatalogTopic = {
  slug: string;
  title: string;
  summary: string;
  category: string;
};

type TopicCatalogProps<T extends CatalogTopic> = {
  basePath: string;
  categories: readonly string[];
  topics: readonly T[];
  isVisible?: (topic: T) => boolean;
  renderLabel?: (topic: T) => ReactNode;
};

export function TopicCatalog<T extends CatalogTopic>({ basePath, categories, topics, isVisible, renderLabel }: TopicCatalogProps<T>) {
  return (
    <div className="method-catalog">
      {categories.map((category) => {
        const group = topics.filter((topic) => topic.category === category && (!isVisible || isVisible(topic)));
        if (group.length === 0) return null;

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
                    {renderLabel?.(topic)}
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
