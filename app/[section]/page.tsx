import { notFound } from "next/navigation";
import { PageLead } from "../components/PageLead";
import { sectionBySlug, sections } from "../data/sections";

export function generateStaticParams() {
  return Object.keys(sections).map((section) => ({ section }));
}

export default async function SectionPage({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params;
  const content = sectionBySlug(section);

  if (!content) {
    notFound();
  }

  return (
    <div className="page-shell">
      <PageLead eyebrow={content.eyebrow} title={content.title}>
        <p>{content.intro}</p>
      </PageLead>
      <section className="section-outline">
        {content.blocks.map((block, index) => (
          <article key={block}>
            <span>0{index + 1}</span>
            <h2>{block}</h2>
            <p>Obsah připravujeme podle společných pravidel webu: jasné vymezení tématu, dohledatelné zdroje a viditelné limity.</p>
          </article>
        ))}
      </section>
    </div>
  );
}
