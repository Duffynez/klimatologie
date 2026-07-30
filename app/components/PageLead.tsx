import type { ReactNode } from "react";

export function PageLead({
  eyebrow,
  title,
  meta,
  children,
}: {
  eyebrow: string;
  title: string;
  meta?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className={`page-lead${children ? "" : " page-lead--single"}`}>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {meta ? <p className="page-lead__meta">{meta}</p> : null}
      </div>
      {children ? <div className="page-lead__copy">{children}</div> : null}
    </section>
  );
}
