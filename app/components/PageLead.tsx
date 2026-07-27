import type { ReactNode } from "react";

export function PageLead({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return (
    <section className="page-lead">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
      </div>
      <div className="page-lead__copy">{children}</div>
    </section>
  );
}
