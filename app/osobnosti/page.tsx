import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageLead } from "../components/PageLead";

export const metadata: Metadata = { title: "Osobnosti" };

export default function PeoplePage() {
  return (
    <div className="page-shell">
      <PageLead eyebrow="Lidé a práce" title="Osobnosti klimatologie." />
      <Link className="person-feature" href="/osobnosti/mariotte">
        <Image src="/mariotte.jpg" alt="Portrét Edme Mariotta" width={300} height={420} sizes="(max-width: 620px) 260px, 300px" />
        <div>
          <p className="eyebrow">1681</p>
          <h2>Edme Mariotte</h2>
          <p>Francouzský fyzik, jehož práce patří do rané historie zkoumání tepla a záření.</p>
          <span className="text-link">Otevřít profil</span>
        </div>
      </Link>
    </div>
  );
}
