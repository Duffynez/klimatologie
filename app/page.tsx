import Link from "next/link";
import Image from "next/image";
import { evidenceTopics } from "./data/evidence";
import { sources } from "./data/sources";

const paths = [
  {
    href: "/pozorovani",
    number: "01",
    title: "Pozorování",
    text: "Co se měří, jak vznikají globální výsledky a co ukazují zveřejněná data.",
  },
  {
    href: "/metody",
    number: "02",
    title: "Metody",
    text: "Jak fungují přístroje, zpracování dat a nezávislá kontrola výsledků.",
  },
  {
    href: "/zdroje",
    number: "03",
    title: "Zdroje",
    text: "Studie, datové soubory a historické dokumenty k otevření nebo stažení.",
  },
];

const featuredObservationSlugs = new Set([
  "gmst",
  "stratosfericke-ochlazovani",
  "ustup-ledovcu",
]);

const featuredObservations = evidenceTopics.filter((topic) =>
  featuredObservationSlugs.has(topic.slug),
);

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
          unoptimized
        />
        <div className="hero__shade" />
        <div className="hero__content">
          <p className="eyebrow eyebrow--light">Klimatologie.eu</p>
          <h1>Jak víme, co se s klimatem děje.</h1>
          <p className="hero__lede">
            Český web o tom, co v klimatu pozorujeme, jak se to měří a z čeho vycházejí vědecké závěry.
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
          <p className="eyebrow">Jak web pracuje</p>
          <h2>Od měření k závěru.</h2>
        </div>
        <div className="home-intro__copy">
          <p>
            U každého tématu začínáme tím, co bylo skutečně pozorováno nebo změřeno. Popisujeme přístroje,
            vznik dat, způsob jejich zpracování i nejistoty. Pozorování oddělujeme od vysvětlení příčin,
            předpokládaných důsledků a politických rozhodnutí.
          </p>
          <p>
            Nežádáme čtenáře, aby věřil nám nebo jedné vybrané instituci. Podstatná tvrzení propojujeme
            s grafy, veřejnými daty a původními studiemi, aby bylo možné dohledat, na čem stojí.
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
            <p className="eyebrow">Pozorování</p>
            <h2>Co v klimatu sledujeme.</h2>
          </div>
          <Link className="text-link" href="/pozorovani">Všechna témata</Link>
        </div>
        <div className="topic-grid">
          {featuredObservations.map((topic) => (
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
          <p>dohledatelných studií, knih a dokumentů je nyní propojeno s obsahem webu.</p>
          <Link className="action action--primary" href="/zdroje">Otevřít databázi</Link>
        </div>
      </section>
    </>
  );
}
