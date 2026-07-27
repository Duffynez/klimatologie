import type { Metadata } from "next";
import Link from "next/link";
import { PageLead } from "../components/PageLead";
import { evidenceTopics } from "../data/evidence";

export const metadata: Metadata = { title: "Pozorování" };

export default function EvidenceIndex() {
  return (
    <div className="page-shell">
      <PageLead eyebrow="Co pozorujeme" title="Měřitelné stopy změny klimatu.">
        <p>
          Tahle mapa propojí jednotlivé jevy s datovými sadami, metodikou měření a zdroji. Dokud stránka
          nemá kompletní aparát, označujeme ji otevřeně jako připravovanou.
        </p>
      </PageLead>
      <div className="topic-grid topic-grid--full">
        {evidenceTopics.map((topic) => (
          <Link className="topic-card" href={`/pozorovani/${topic.slug}`} key={topic.slug}>
            <div className="topic-card__topline">
              <span>{topic.category}</span>
              <small>{topic.status}</small>
            </div>
            <h2>{topic.title}</h2>
            <p>{topic.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
