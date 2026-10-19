import { PotentiometryArticle } from "../../components/PotentiometryArticle";
import { SpectrophotometryArticle } from "../../components/SpectrophotometryArticle";
import { IsotopeMassSpectrometryArticle } from "../../components/IsotopeMassSpectrometryArticle";
import { AbsorptionSpectroscopyArticle } from "../../components/AbsorptionSpectroscopyArticle";
import { GasChromatographyArticle } from "../../components/GasChromatographyArticle";
import { PhenologyMonitoringArticle } from "../../components/PhenologyMonitoringArticle";
import { ThawDepthArticle } from "../../components/ThawDepthArticle";
import { GlacierBalanceArticle } from "../../components/GlacierBalanceArticle";
import { SnowMeasurementArticle } from "../../components/SnowMeasurementArticle";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageLead } from "../../components/PageLead";
import { ResistanceThermometryArticle } from "../../components/ResistanceThermometryArticle";
import { HygrometryArticle } from "../../components/HygrometryArticle";
import { RadiosoundingArticle } from "../../components/RadiosoundingArticle";
import { PressureHeightArticle } from "../../components/PressureHeightArticle";
import { ConductometryArticle } from "../../components/ConductometryArticle";
import { RainGaugeArticle } from "../../components/RainGaugeArticle";
import { TideGaugeArticle } from "../../components/TideGaugeArticle";
import { measurementMethods, methodBySlug } from "../../data/methods";

const combinedAnalysisSlug = "titrace-a-coulometrie";

export function generateStaticParams() {
  return [
    ...measurementMethods.map((method) => ({ slug: method.slug })),
    { slug: combinedAnalysisSlug },
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  if (slug === combinedAnalysisSlug) {
    return {
      title: "Titrace a coulometrie",
      description: "Dvě analytické metody používané při rozboru mořské vody.",
    };
  }
  const method = methodBySlug(slug);

  if (!method) {
    return {};
  }

  return {
    title: method.title,
    description: method.summary,
  };
}

export default async function MethodDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (slug === combinedAnalysisSlug) {
    const relatedMethods = measurementMethods.filter((method) => ["titrace", "coulometrie"].includes(method.slug));
    return (
      <div className="page-shell">
        <PageLead eyebrow="Metody / Laboratorní analýza" title="Titrace a coulometrie" />
        <section className="method-catalog__group">
          <div className="method-catalog__heading">
            <h2>Metody analýzy mořské vody</h2>
          </div>
          <div className="method-catalog__grid">
            {relatedMethods.map((method) => (
              <Link className="method-tile" href={`/metody/${method.slug}`} key={method.slug}>
                <span>{String(measurementMethods.indexOf(method) + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{method.title}</h3>
                  <p>{method.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
        <Link className="text-link catalog-back-link" href="/metody">
          &larr; Zpět na všechny metody
        </Link>
      </div>
    );
  }
  const method = methodBySlug(slug);

  if (!method) {
    notFound();
  }

  if (slug === "potenciometrie") {
    return (
      <div className="page-shell">
        <PageLead eyebrow="Metody / Laboratorní analýza" title="Potenciometrie" meta="19. října 2026">
          <p>Jak elektrody vytvářejí měřitelné napětí a kalibrace umožňuje určit pH mořské vody.</p>
        </PageLead>
        <PotentiometryArticle />
        <Link className="text-link" href="/metody">&larr; Zpět na všechny metody</Link>
      </div>
    );
  }

  if (slug === "spektrofotometrie") {
    return (
      <div className="page-shell">
        <PageLead eyebrow="Metody / Laboratorní analýza" title="Spektrofotometrie roztoků" meta="19. října 2026">
          <p>Jak přidané barvivo a měření pohlcovaného světla umožňují určit pH mořské vody a sledovat acidifikaci oceánu.</p>
        </PageLead>
        <SpectrophotometryArticle />
        <Link className="text-link" href="/metody">&larr; Zpět na všechny metody</Link>
      </div>
    );
  }

  if (slug === "hmotnostni-a-izotopova-spektrometrie") {
    return (
      <div className="page-shell">
        <PageLead eyebrow="Metody / Laboratorní analýza" title="Hmotnostní a izotopová spektrometrie" meta="19. října 2026">
          <p>Jak z vody připravíme plyn, rozlišíme jeho ionty podle hmotnosti a získáme izotopový záznam koloběhu vody.</p>
        </PageLead>
        <IsotopeMassSpectrometryArticle />
        <Link className="text-link" href="/metody">&larr; Zpět na všechny metody</Link>
      </div>
    );
  }

  if (slug === "absorpcni-spektroskopie") {
    return (
      <div className="page-shell">
        <PageLead eyebrow="Metody / Laboratorní analýza" title="Absorpční spektroskopie plynů" meta="19. října 2026">
          <p>Jak slábnutí laserového světla mezi zrcadly umožňuje měřit CO₂ a jak referenční směsi propojí optický signál se složením vzduchu.</p>
        </PageLead>
        <AbsorptionSpectroscopyArticle />
        <Link className="text-link" href="/metody">&larr; Zpět na všechny metody</Link>
      </div>
    );
  }

  if (slug === "plynova-chromatografie") {
    return (
      <div className="page-shell">
        <PageLead eyebrow="Metody / Laboratorní analýza" title="Plynová chromatografie" meta="19. října 2026">
          <p>Jak oddělení plynů ve vzorku a porovnání s referenčními směsmi umožňují měřit zastoupení metanu ve vzduchu.</p>
        </PageLead>
        <GasChromatographyArticle />
        <Link className="text-link" href="/metody">&larr; Zpět na všechny metody</Link>
      </div>
    );
  }

  if (slug === "standardizovane-fenologicke-pozorovani") {
    return (
      <div className="page-shell">
        <PageLead eyebrow="Metody / Přímá měření" title="Standardizované fenologické pozorování" meta="19. října 2026">
          <p>Jak opakované návštěvy rostlin a společné definice vývojových fází vytvářejí záznam přírodního kalendáře.</p>
        </PageLead>
        <PhenologyMonitoringArticle />
        <Link className="text-link" href="/metody">&larr; Zpět na všechny metody</Link>
      </div>
    );
  }

  if (slug === "mereni-hloubky-sezonniho-rozmrzani") {
    return (
      <div className="page-shell">
        <PageLead
          eyebrow="Metody / Přímá měření"
          title="Měření hloubky sezónního rozmrzání"
          meta="19. října 2026"
        >
          <p>
            Jak kovová sonda najde zmrzlou půdu a jak měření v síti ukáže tloušťku aktivní vrstvy.
            Mrazové trubice a teplotní čidla doplňují záznam mezi návštěvami, měření povrchu zachycuje sesedání terénu.
          </p>
        </PageLead>
        <ThawDepthArticle />
        <Link className="text-link" href="/metody">&larr; Zpět na všechny metody</Link>
      </div>
    );
  }

  if (slug === "terenni-mereni-bilance-ledovcu") {
    return (
      <div className="page-shell">
        <PageLead
          eyebrow="Metody / Přímá měření"
          title="Terénní měření bilance ledovců"
          meta="19. října 2026"
        >
          <p>
            Jak měřicí tyče a odběry sněhu zachycují přírůstky a ztráty na povrchu ledovce.
            Vysvětlení postupu a dva výpočty se skutečnými daty Griesgletscheru.
          </p>
        </PageLead>
        <GlacierBalanceArticle />
        <Link className="text-link" href="/metody">&larr; Zpět na všechny metody</Link>
      </div>
    );
  }

  if (slug === "mereni-vysky-hustoty-a-vodni-hodnoty-snehu") {
    return (
      <div className="page-shell">
        <PageLead
          eyebrow="Metody / Přímá měření"
          title="Měření výšky, hustoty a vodní hodnoty sněhu"
          meta="18. října 2026"
        >
          <p>
            Jak ze změřené výšky a zvážených vzorků určíme zásobu vody ve sněhu.
            Sněhový profil ukazuje, jak se tato zásoba rozkládá mezi jednotlivé vrstvy.
          </p>
        </PageLead>
        <SnowMeasurementArticle />
        <Link className="text-link" href="/metody">&larr; Zpět na všechny metody</Link>
      </div>
    );
  }

  if (slug === "pobrezni-mereni-hladiny-a-vyskova-reference") {
    return (
      <div className="page-shell">
        <PageLead
          eyebrow="Metody / Přímá měření"
          title="Pobřežní měření hladiny a výšková reference"
          meta="18. října 2026"
        >
          <p>
            Jak z radarového odrazu získáme výšku mořské hladiny a jak oddělíme
            pohyb vody od pohybu pobřeží. Výšková reference umožňuje spojit měření
            do dlouhého záznamu změn hladiny.
          </p>
        </PageLead>
        <TideGaugeArticle />
        <Link className="text-link" href="/metody">&larr; Zpět na všechny metody</Link>
      </div>
    );
  }

  if (slug === "srazkomery-a-disdrometry") {
    return (
      <div className="page-shell">
        <PageLead
          eyebrow="Metody / Přímá měření"
          title="Srážkoměry a disdrometry"
          meta="18. října 2026"
        >
          <p>
            Srážkoměr zachycuje vodu, disdrometr sleduje jednotlivé padající částice.
            Jak jejich měření určí množství a intenzitu srážek a jak se používají v klimatologii.
          </p>
        </PageLead>
        <RainGaugeArticle />
        <Link className="text-link" href="/metody">&larr; Zpět na všechny metody</Link>
      </div>
    );
  }

  if (slug === "konduktometrie") {
    return (
      <div className="page-shell">
        <PageLead
          eyebrow="Metody / Přímá měření"
          title="Konduktometrie"
          meta="18. října 2026"
        >
          <p>
            Jak elektrický proud ve vodě umožňuje určit její slanost. Princip čidla,
            kalibrace a výpočet salinity s původními daty ke stažení.
          </p>
        </PageLead>
        <ConductometryArticle />
        <Link className="text-link" href="/metody">&larr; Zpět na všechny metody</Link>
      </div>
    );
  }

  if (slug === "mereni-tlaku-a-hydrostaticke-vysky") {
    return (
      <div className="page-shell">
        <PageLead
          eyebrow="Metody / Přímá měření"
          title="Měření tlaku a hydrostatické výšky"
          meta="18. října 2026"
        >
          <p>
            Jak tlakoměr měří působení vodního sloupce a jak z jeho údaje vypočítáme hloubku.
            Princip přístroje, kalibrace a skutečný protokol s výpočtem ke stažení.
          </p>
        </PageLead>
        <PressureHeightArticle />
        <Link className="text-link" href="/metody">
          &larr; Zpět na všechny metody
        </Link>
      </div>
    );
  }

  if (slug === "odporova-termometrie-a-termistory") {
    return (
      <div className="page-shell">
        <PageLead
          eyebrow="Metody / Přímá měření"
          title="Odporová termometrie a termistory"
          meta="18. října 2026"
        >
          <p>
            Elektrický odpor čidla se mění s teplotou. Této závislosti využívají teploměry
            na meteorologických stanicích, v oceánu i ve vrtech. Jak takové měření funguje
            a jak z něj vznikne údaj o teplotě?
          </p>
        </PageLead>
        <ResistanceThermometryArticle />
        <Link className="text-link" href="/metody">
          &larr; Zpět na všechny metody
        </Link>
      </div>
    );
  }

  if (slug === "hygrometrie") {
    return (
      <div className="page-shell">
        <PageLead
          eyebrow="Metody / Přímá měření"
          title="Hygrometrie"
          meta="18. října 2026"
        >
          <p>
            Vodní pára mění elektrické vlastnosti některých materiálů a při ochlazení se sráží
            v rosu. Vlhkoměry využívají tyto děje k měření vlhkosti vzduchu.
            Jak jejich údaj vzniká a co znamená pro sledování atmosféry?
          </p>
        </PageLead>
        <HygrometryArticle />
        <Link className="text-link" href="/metody">
          &larr; Zpět na všechny metody
        </Link>
      </div>
    );
  }

  if (slug === "radiosondaz") {
    return (
      <div className="page-shell">
        <PageLead
          eyebrow="Metody / Přímá měření"
          title="Radiosondáž"
          meta="18. října 2026"
        >
          <p>
            Jak sonda pod meteorologickým balonem měří teplotu, vlhkost a vítr v různých výškách.
            Princip měření, vznik výškového profilu a výpočet ze skutečného letu z Prahy-Libuše.
          </p>
        </PageLead>
        <RadiosoundingArticle />
        <Link className="text-link" href="/metody">&larr; Zpět na všechny metody</Link>
      </div>
    );
  }

  return (
    <div className="page-shell">
      <PageLead eyebrow={`Metody / ${method.category}`} title={method.title}>
        <p>{method.summary}</p>
      </PageLead>
      <Link className="text-link catalog-back-link" href="/metody">
        &larr; Zpět na všechny metody
      </Link>
    </div>
  );
}
