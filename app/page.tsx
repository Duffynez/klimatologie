import Link from "next/link";
import Image from "next/image";
import { Citation } from "./components/Citation";
import { evidenceTopics } from "./data/evidence";
import { sources } from "./data/sources";

const paths = [
  { href: "/pozorovani", number: "01", title: "Pozorování", text: "Měřitelné jevy, datové řady a jejich limity." },
  { href: "/metody", number: "02", title: "Metody", text: "Jak vzniká měření, co zachycuje a co už ne." },
  { href: "/zdroje", number: "03", title: "Zdroje", text: "Původní práce a dokumenty připravené k otevření nebo stažení." },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <Image
          src="/earth-europe.jpg"
          alt="Země při pohledu na Evropu, severní Afriku a západní Asii"
          className="hero__image hero__image--europe"
          fill
          priority
          sizes="100vw"
        />
        <div className="hero__shade" />
        <div className="hero__content">
          <p className="eyebrow eyebrow--light">Klimatologie.eu</p>
          <h1>Data, souvislosti, zdroje.</h1>
          <p className="hero__lede">
            Otevřený český web o klimatu. Stavíme ho tak, aby každý důležitý krok vedl zpět k datům,
            metodě a původnímu dokumentu.
          </p>
          <div className="hero__actions">
            <Link className="action action--primary" href="/pozorovani">Začít pozorováním</Link>
            <Link className="action action--quiet" href="/zdroje">Prohlédnout zdroje</Link>
          </div>
        </div>
        <p className="hero__credit">
          Obraz Země: NASA Earth Observatory, Blue Marble. <a href="https://science.nasa.gov/earth/earth-observatory/the-blue-marble-true-color-global-imagery-at-1km-resolution/" target="_blank" rel="noreferrer">Zdroj obrázku</a>
        </p>
      </section>

      <section className="home-intro section-shell">
        <div>
          <p className="eyebrow">Pracovní princip</p>
          <h2>Nejdřív ověřitelnost, potom interpretace.</h2>
        </div>
        <div className="home-intro__copy">
          <p>
            Každý článek bude oddělovat pozorování, vysvětlení a nejistotu. Citace nejsou ozdoba:
            jsou součástí čtení a povedou na dohledatelný záznam v databázi.
          </p>
          <p>
            Začínáme historickou knihovnou původních prací, například záznamem Johna Tyndalla <Citation id="1862_Tyndall" />,
            a postupně ji rozšíříme o aktuální data a metodiky.
          </p>
        </div>
      </section>

      <section className="path-section section-shell">
        {paths.map((path) => (
          <Link className="path-link" href={path.href} key={path.href}>
            <span>{path.number}</span>
            <h2>{path.title}</h2>
            <p>{path.text}</p>
            <b aria-hidden="true">&rarr;</b>
          </Link>
        ))}
      </section>

      <section className="section-shell evidence-preview">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Mapa pozorování</p>
            <h2>Od teploty po oceány a kryosféru.</h2>
          </div>
          <Link className="text-link" href="/pozorovani">Všechna témata</Link>
        </div>
        <div className="topic-grid">
          {evidenceTopics.slice(0, 6).map((topic) => (
            <Link className="topic-card" href={`/pozorovani/${topic.slug}`} key={topic.slug}>
              <span>{topic.category}</span>
              <h3>{topic.title}</h3>
              <p>{topic.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="source-band">
        <div className="section-shell source-band__inner">
          <p className="eyebrow eyebrow--light">Knihovna zdrojů</p>
          <strong>{sources.length}</strong>
          <p>původních prací už má vlastní záznam, odkaz na Google Drive a samostatný odkaz ke stažení.</p>
          <Link className="action action--primary" href="/zdroje">Otevřít databázi</Link>
        </div>
      </section>
    </>
  );
}
