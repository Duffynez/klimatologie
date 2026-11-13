import Image from "next/image";
import Link from "next/link";
import { SourceLink } from "./components/SourceLink";
import { evidenceTopics } from "./data/evidence";
import { sources } from "./data/sources";

const paths = [
  {
    href: "/pozorovani/",
    title: "Pozorování",
    text: "Co ukazují zveřejněná měření klimatu.",
  },
  {
    href: "/metody/",
    title: "Metody",
    text: "Jak vznikají měření a jak se z nich počítají výsledky.",
  },
  {
    href: "/mechanismy/",
    title: "Mechanismy",
    text: "Jak vědci ověřují příčiny pozorovaných změn.",
  },
  {
    href: "/zdroje/",
    title: "Zdroje",
    text: "Původní studie, veřejná data a historické dokumenty.",
  },
];

const glacierLinks = [
  {
    href: "/pozorovani/ustup-ledovcu/#pozorovani",
    category: "Pozorování",
    text: "Co ukazují měření ledovců",
  },
  {
    href: "/metody/terenni-mereni-bilance-ledovcu/#terenni-odecty",
    category: "Metoda",
    text: "Jak se úbytek ledu měří v terénu",
  },
  {
    href: "/mechanismy/hmotnostni-bilance-horskych-ledovcu/",
    category: "Mechanismus",
    text: "Co způsobuje úbytek hmotnosti a ústup čela",
  },
];

const featuredObservationSlugs = new Set([
  "gmst",
  "stratosfericke-ochlazovani",
  "tepelny-obsah-oceanu",
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
          className="hero__image"
          fill
          priority
          sizes="100vw"
          unoptimized
        />
        <div className="hero__shade" />
        <div className="hero__content">
          <h1>Klima, které můžete zkoumat sami.</h1>
          <p className="hero__lede">
            Pomáháme vám porozumět tomu, co se s klimatem děje, a ověřit si, z jakých měření a studií vycházejí závěry.
          </p>
          <div className="hero__actions">
            <a className="action action--primary" href="#ledovce">Začít ukázkou</a>
            <Link className="action action--quiet" href="/pozorovani/">Všechna pozorování</Link>
          </div>
        </div>
        <p className="hero__credit">
          Snímek Blue Marble z NASA Earth Observatory.{" "}
          <a href="https://science.nasa.gov/earth/earth-observatory/the-blue-marble-true-color-global-imagery-at-1km-resolution/" target="_blank" rel="noreferrer">Zdroj snímku</a>
        </p>
      </section>

      <section className="section-shell home-example" id="ledovce" aria-labelledby="ledovce-nadpis">
        <div className="home-example__content">
          <h2 id="ledovce-nadpis">Proč horské ledovce ztrácejí hmotu a ustupují?</h2>
          <p className="home-example__result">
            Ledovce mimo hlavní ledové příkrovy ztrácely v letech 2000–2023 celosvětově
            v průměru <strong>273 ± 16 miliard tun ročně</strong>.{" "}
            <SourceLink id="DOI_10_1038_s41586_024_08545_z">Studie GlaMBIE</SourceLink>
          </p>
          <ul className="home-example__links">
            {glacierLinks.map(({ href, category, text }) => (
              <li key={href}>
                <Link href={href}>
                  <span className="home-example__category">{category}</span>
                  <span>{text}</span>
                  <span className="home-example__arrow" aria-hidden="true">&rarr;</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <figure className="home-example__photo">
          <Image
            src="/media/mountain-glaciers/usgs-grinnell-1938-2019.jpg"
            alt="Srovnání Grinnellova ledovce v letech 1938 a 2019. Na místě části ledovce je v roce 2019 jezero."
            width={2000}
            height={1500}
            sizes="(max-width: 820px) calc(100vw - 28px), 500px"
            unoptimized
          />
          <figcaption>
            Grinnellův ledovec v Montaně fotografovali ze stejného místa T. J. Hileman v roce 1938
            a Lisa McKeon v roce 2019. Snímky jsou ve veřejné doméně.{" "}
            <SourceLink id="WEB_U_S_Geological_Survey_Grinnell_Glacier_Pair_248d244b">Archiv USGS</SourceLink>
          </figcaption>
        </figure>
      </section>

      <section className="home-purpose" id="proc-klimatologie" aria-labelledby="proc-klimatologie-nadpis">
        <div className="section-shell home-purpose__inner">
          <div className="section-heading">
            <h2 id="proc-klimatologie-nadpis">Proč děláme Klimatologie.eu</h2>
          </div>
          <p className="home-purpose__intro">
            Chceme zpřístupnit poznatky o klimatu i lidem bez odborného vzdělání. Články vám pomohou přečíst graf,
            najít podklady k vlastní otázce a posoudit, jak dobře měření podpírají jednotlivá vysvětlení.
          </p>
          <div className="home-purpose__principles">
            <div>
              <h3>Co měření říkají</h3>
              <p>
                Vysvětlujeme, co vědci měřili, kde a kdy měření proběhla a jak z nich vznikl zveřejněný výsledek.
                Rozlišujeme pozorování, vysvětlení příčin, odhady budoucího vývoje a jeho důsledků i politická rozhodnutí.
              </p>
            </div>
            <div>
              <h3>Jak si výsledek ověřit</h3>
              <p>
                U důležitých tvrzení odkazujeme na původní studie a veřejná data. Ukazujeme, z jakých údajů
                vznikly grafy a jak vědci počítali výsledky. U početních příkladů si můžete výsledek z podkladů přepočítat.
              </p>
            </div>
            <div>
              <h3>Proč závěrům přikládáme váhu</h3>
              <p>
                Když se shodnou výsledky nezávislých měření, máme pro závěr víc opory. Ukazujeme, kde se odhady liší,
                jak velká je nejistota a kdy nové důkazy vedly k opravě staršího vysvětlení.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell home-directory" aria-labelledby="rozcestnik-nadpis">
        <div className="section-heading">
          <h2 id="rozcestnik-nadpis">Rozcestník</h2>
        </div>
        <div className="path-section">
          {paths.map(({ href, title, text }) => (
            <Link className="path-link" href={href} key={href}>
              <h3>{title}</h3>
              <p>{text}</p>
              <span aria-hidden="true">&rarr;</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-shell evidence-preview">
        <div className="section-heading">
          <h2>Vybraná pozorování</h2>
          <Link className="text-link" href="/pozorovani/">Všechna témata</Link>
        </div>
        <div className="topic-grid">
          {featuredObservations.map((topic) => (
            <Link className="topic-card" href={`/pozorovani/${topic.slug}/`} key={topic.slug}>
              <span>{topic.category}</span>
              <h3>{topic.title}</h3>
              <p>{topic.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="source-band" aria-labelledby="knihovna-nadpis">
        <div className="section-shell source-band__inner">
          <div>
            <h2 id="knihovna-nadpis">Knihovna zdrojů</h2>
            <p>V katalogu je {sources.length.toLocaleString("cs-CZ")} záznamů o studiích, datech a dalších dokumentech.</p>
          </div>
          <Link className="action action--primary" href="/zdroje/">Otevřít katalog</Link>
        </div>
      </section>
    </>
  );
}
