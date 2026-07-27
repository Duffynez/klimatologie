import Link from "next/link";
import Image from "next/image";
import { Citation } from "../../components/Citation";
import { PageLead } from "../../components/PageLead";

export default function MariottePage() {
  return (
    <div className="page-shell">
      <PageLead eyebrow="Osobnosti / 1681" title="Edme Mariotte">
        <p>
          Profil je první přenesený záznam v nové struktuře. Další verze doplní životopis, kontext původního díla a citované pasáže.
        </p>
      </PageLead>
      <section className="profile-layout">
        <Image src="/mariotte.jpg" alt="Portrét Edme Mariotta" width={300} height={420} sizes="(max-width: 620px) 260px, 300px" />
        <div>
          <p className="eyebrow">Původní práce</p>
          <h2>De la nature des couleurs</h2>
          <p>
            Základní záznam v databázi pramenů: <Citation id="1681_Mariotte" />.
          </p>
          <Link className="text-link" href="/zdroje#1681_Mariotte">Otevřít zdroj</Link>
        </div>
      </section>
    </div>
  );
}
