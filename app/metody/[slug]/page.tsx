import { ChemicalPaleothermometersArticle } from "../../components/ChemicalPaleothermometersArticle";
import { IsotopePaleothermometryArticle } from "../../components/IsotopePaleothermometryArticle";
import { PollenAnalysisArticle } from "../../components/PollenAnalysisArticle";
import { SpeleothemArticle } from "../../components/SpeleothemArticle";
import { CoralSclerochronologyArticle } from "../../components/CoralSclerochronologyArticle";
import { DendrochronologyArticle } from "../../components/DendrochronologyArticle";
import { SedimentCoreArticle } from "../../components/SedimentCoreArticle";
import { IceCoreArticle } from "../../components/IceCoreArticle";
import { GnssWaterVaporArticle } from "../../components/GnssWaterVaporArticle";
import { RadioOccultationArticle } from "../../components/RadioOccultationArticle";
import { GravimetryArticle } from "../../components/GravimetryArticle";
import { InterferometryArticle } from "../../components/InterferometryArticle";
import { AltimetryArticle } from "../../components/AltimetryArticle";
import { RadarArticle } from "../../components/RadarArticle";
import { LidarArticle } from "../../components/LidarArticle";
import { MicrowaveRadiometryArticle } from "../../components/MicrowaveRadiometryArticle";
import { InfraredRadiometryArticle } from "../../components/InfraredRadiometryArticle";
import { RadiativeFluxArticle } from "../../components/RadiativeFluxArticle";
import { PhotogrammetryArticle } from "../../components/PhotogrammetryArticle";
import { OpticalImagingArticle } from "../../components/OpticalImagingArticle";
import { CoulometryArticle } from "../../components/CoulometryArticle";
import { TitrationArticle } from "../../components/TitrationArticle";
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

  if (slug === "chemicke-a-biologicke-paleoteplomery") {
    return (
      <div className="page-shell">
        <PageLead eyebrow="Metody / Přírodní archivy" title="Chemické a biologické paleoteploměry" meta="29. října 2026">
          <p>
            Jak z organických látek a mořských schránek určujeme minulé teploty vody.
            Alkenonový teploměr krok za krokem, další varianty a přepočet
            skutečných vzorků z oceánského vrtu u Japonska.
          </p>
        </PageLead>
        <ChemicalPaleothermometersArticle />
        <Link className="text-link" href="/metody">&larr; Zpět na všechny metody</Link>
      </div>
    );
  }

  if (slug === "izotopova-paleotermometrie") {
    return (
      <div className="page-shell">
        <PageLead eyebrow="Metody / Přírodní archivy" title="Izotopová paleotermometrie" meta="28. října 2026">
          <p>
            Jak z izotopového složení mořských schránek určujeme teplotu vody,
            ve které vznikly. Od přípravy vzorku a laboratorního měření
            k výpočtu teploty a rekonstrukci minulého klimatu.
          </p>
        </PageLead>
        <IsotopePaleothermometryArticle />
        <Link className="text-link" href="/metody">&larr; Zpět na všechny metody</Link>
      </div>
    );
  }

  if (slug === "pylova-analyza-a-mikrofosilie") {
    return (
      <div className="page-shell">
        <PageLead eyebrow="Metody / Přírodní archivy" title="Pylová analýza a mikrofosilie" meta="28. října 2026">
          <p>
            Jak z pylu uchovaného v jezerních vrstvách poznáváme minulou vegetaci a klima.
            Příprava vzorku, mikroskopický rozbor a vyhodnocení skutečných dat z Čukotky.
          </p>
        </PageLead>
        <PollenAnalysisArticle />
        <Link className="text-link" href="/metody">&larr; Zpět na všechny metody</Link>
      </div>
    );
  }

  if (slug === "krapniky-a-jeskynni-sedimenty") {
    return (
      <div className="page-shell">
        <PageLead eyebrow="Metody / Přírodní archivy" title="Krápníky a jeskynní sedimenty" meta="28. října 2026">
          <p>Jak vznikají vrstvy krápníku, jak určujeme jejich stáří a co jejich složení vypovídá o minulém prostředí. Postup a ověřitelný výpočet se skutečnými daty z Bunkerhöhle.</p>
        </PageLead>
        <SpeleothemArticle />
        <Link className="text-link" href="/metody">&larr; Zpět na všechny metody</Link>
      </div>
    );
  }

  if (slug === "koralova-sclerochronologie") {
    return (
      <div className="page-shell">
        <PageLead eyebrow="Metody / Přírodní archivy" title="Korálová sclerochronologie" meta="28. října 2026">
          <p>Jak růstové vrstvy a chemické složení korálové kostry uchovávají záznam teploty moře. Odběr, datování, laboratorní měření a výpočet se skutečnými daty z Fidži.</p>
        </PageLead>
        <CoralSclerochronologyArticle />
        <Link className="text-link" href="/metody">&larr; Zpět na všechny metody</Link>
      </div>
    );
  }

  if (slug === "dendrochronologie") {
    return (
      <div className="page-shell">
        <PageLead eyebrow="Metody / Přírodní archivy" title="Dendrochronologie" meta="28. října 2026">
          <p>Jak přiřazujeme letokruhům konkrétní roky, měříme růst stromů a využíváme jej k poznání minulého klimatu.</p>
        </PageLead>
        <DendrochronologyArticle />
        <Link className="text-link" href="/metody">&larr; Zpět na všechny metody</Link>
      </div>
    );
  }

  if (slug === "sedimentarni-jadra-a-stratigrafie") {
    return (
      <div className="page-shell">
        <PageLead eyebrow="Metody / Přírodní archivy" title="Sedimentární jádra a stratigrafie" meta="28. října 2026">
          <p>Jak odebíráme usazeniny ze dna, spojujeme jejich vrstvy a určujeme časovou osu záznamu minulého prostředí.</p>
        </PageLead>
        <SedimentCoreArticle />
        <Link className="text-link" href="/metody">&larr; Zpět na všechny metody</Link>
      </div>
    );
  }

  if (slug === "ledova-jadra-a-analyza-uzavreneho-vzduchu") {
    return (
      <div className="page-shell">
        <PageLead eyebrow="Metody / Přírodní archivy" title="Ledová jádra a analýza uzavřeného vzduchu" meta="28. října 2026">
          <p>Jak led uchovává vzorky minulé atmosféry, jak změříme jejich složení a proč potřebujeme rozlišit stáří ledu a vzduchu.</p>
        </PageLead>
        <IceCoreArticle />
        <Link className="text-link" href="/metody">&larr; Zpět na všechny metody</Link>
      </div>
    );
  }

  if (slug === "pozemni-mereni-vodni-pary-pomoci-gnss") {
    return (
      <div className="page-shell">
        <PageLead eyebrow="Metody / Dálkový průzkum" title="Pozemní měření vodní páry pomocí GNSS" meta="28. října 2026">
          <p>Jak zpoždění navigačních signálů umožňuje určit množství vody nad stanicí a jak tento převod zopakovat na českých datech.</p>
        </PageLead>
        <GnssWaterVaporArticle />
        <Link className="text-link" href="/metody">&larr; Zpět na všechny metody</Link>
      </div>
    );
  }

  if (slug === "radiove-zakryty-gnss") {
    return (
      <div className="page-shell">
        <PageLead eyebrow="Metody / Dálkový průzkum" title="Rádiové zákryty GNSS" meta="28. října 2026">
          <p>Jak ohyb navigačního signálu odhaluje výškové uspořádání atmosféry a jak se ze skutečného družicového profilu vypočítá teplota.</p>
        </PageLead>
        <RadioOccultationArticle />
        <Link className="text-link" href="/metody">&larr; Zpět na všechny metody</Link>
      </div>
    );
  }

  if (slug === "druzicova-gravimetrie") {
    return (
      <div className="page-shell">
        <PageLead eyebrow="Metody / Dálkový průzkum" title="Družicová gravimetrie" meta="28. října 2026">
          <p>Jak změny vzdálenosti mezi družicemi umožňují měřit přesuny vody a úbytek hmotnosti ledových příkrovů.</p>
        </PageLead>
        <GravimetryArticle />
        <Link className="text-link" href="/metody">&larr; Zpět na všechny metody</Link>
      </div>
    );
  }

  if (slug === "radarova-interferometrie-a-sledovani-pohybu-povrchu") {
    return (
      <div className="page-shell">
        <PageLead eyebrow="Metody / Dálkový průzkum" title="Radarová interferometrie a sledování pohybu povrchu" meta="28. října 2026">
          <p>Jak se z opakovaných radarových snímků měří pohyb povrchu a jak mapy rychlosti ledu pomáhají určit odtok z ledových příkrovů.</p>
        </PageLead>
        <InterferometryArticle />
        <Link className="text-link" href="/metody">&larr; Zpět na všechny metody</Link>
      </div>
    );
  }

  if (slug === "radarova-a-laserova-altimetrie") {
    return (
      <div className="page-shell">
        <PageLead eyebrow="Metody / Dálkový průzkum" title="Radarová a laserová altimetrie" meta="28. října 2026">
          <p>Jak družice měří výšku oceánu a ledových příkrovů a jak z těchto měření vzniká údaj o změně hladiny nebo povrchu ledu.</p>
        </PageLead>
        <AltimetryArticle />
        <Link className="text-link" href="/metody">&larr; Zpět na všechny metody</Link>
      </div>
    );
  }

  if (slug === "lidar-a-laserove-mereni-vzdalenosti") {
    return (
      <div className="page-shell">
        <PageLead eyebrow="Metody / Dálkový průzkum" title="Lidarové měření atmosféry a vegetace" meta="28. října 2026">
          <p>Jak návrat laserového světla odhaluje vrstvy oblaků a aerosolu i výšku porostu a jak se z jednoho skutečného pulzu GEDI vypočítá výškový ukazatel.</p>
        </PageLead>
        <LidarArticle />
        <Link className="text-link" href="/metody">&larr; Zpět na všechny metody</Link>
      </div>
    );
  }

  if (slug === "aktivni-radarove-mereni") {
    return (
      <div className="page-shell">
        <PageLead eyebrow="Metody / Dálkový průzkum" title="Radarové měření srážek a struktury sněhu a ledu" meta="28. října 2026">
          <p>Jak čas a síla radarového echa ukážou rozložení deště, jak se počítá jeho intenzita a jak radar odhaluje vrstvy uvnitř ledovce.</p>
        </PageLead>
        <RadarArticle />
        <Link className="text-link" href="/metody">&larr; Zpět na všechny metody</Link>
      </div>
    );
  }

  if (slug === "pasivni-mikrovlnna-radiometrie") {
    return (
      <div className="page-shell">
        <PageLead eyebrow="Metody / Dálkový průzkum" title="Pasivní mikrovlnná radiometrie" meta="28. října 2026">
          <p>Jak družice zachytí přirozené mikrovlnné záření a jak z několika měřených kanálů vypočítáme podíl mořské hladiny pokrytý ledem.</p>
        </PageLead>
        <MicrowaveRadiometryArticle />
        <Link className="text-link" href="/metody">&larr; Zpět na všechny metody</Link>
      </div>
    );
  }

  if (slug === "pasivni-infracervena-radiometrie") {
    return (
      <div className="page-shell">
        <PageLead eyebrow="Metody / Dálkový průzkum" title="Pasivní infračervená radiometrie" meta="28. října 2026">
          <p>Jak družice zachytí tepelné záření a jak z něj po oddělení vlivu atmosféry a vlastností povrchu získáme teplotní mapu.</p>
        </PageLead>
        <InfraredRadiometryArticle />
        <Link className="text-link" href="/metody">&larr; Zpět na všechny metody</Link>
      </div>
    );
  }

  if (slug === "mereni-radiacnich-toku") {
    return (
      <div className="page-shell">
        <PageLead eyebrow="Metody / Dálkový průzkum" title="Měření radiačních toků" meta="28. října 2026">
          <p>Jak přístroje měří sluneční a tepelné záření a jak ze čtyř měřených složek zjistíme, kolik energie povrch zářením získává.</p>
        </PageLead>
        <RadiativeFluxArticle />
        <Link className="text-link" href="/metody">&larr; Zpět na všechny metody</Link>
      </div>
    );
  }

  if (slug === "fotogrammetrie-a-porovnavani-vyskovych-modelu") {
    return (
      <div className="page-shell">
        <PageLead eyebrow="Metody / Dálkový průzkum" title="Fotogrammetrie a porovnávání výškových modelů" meta="28. října 2026">
          <p>Jak různé pohledy na stejný povrch umožňují určit jeho výšku a jak porovnáním dvou výškových map zjistíme změnu objemu ledovce.</p>
        </PageLead>
        <PhotogrammetryArticle />
        <Link className="text-link" href="/metody">&larr; Zpět na všechny metody</Link>
      </div>
    );
  }

  if (slug === "opticke-a-multispektralni-snimkovani") {
    return (
      <div className="page-shell">
        <PageLead eyebrow="Metody / Dálkový průzkum" title="Optické a multispektrální snímkování" meta="28. října 2026">
          <p>Jak družice měří odražené světlo v několika pásmech a jak z těchto měření rozpoznáváme vegetaci, sníh a led.</p>
        </PageLead>
        <OpticalImagingArticle />
        <Link className="text-link" href="/metody">&larr; Zpět na všechny metody</Link>
      </div>
    );
  }

  if (slug === "coulometrie") {
    return (
      <div className="page-shell">
        <PageLead eyebrow="Metody / Laboratorní analýza" title="Coulometrie" meta="28. října 2026">
          <p>Jak elektrický proud vytváří měřicí činidlo a prošlý náboj umožňuje určit množství rozpuštěného anorganického uhlíku v mořské vodě.</p>
        </PageLead>
        <CoulometryArticle />
        <Link className="text-link" href="/metody">&larr; Zpět na všechny metody</Link>
      </div>
    );
  }

  if (slug === "titrace") {
    return (
      <div className="page-shell">
        <PageLead eyebrow="Metody / Laboratorní analýza" title="Titrace" meta="28. října 2026">
          <p>Titrace určuje množství reagujících látek podle spotřeby známého činidla. Při rozboru mořské vody tak získáváme celkovou alkalinitu, jeden z podkladů pro sledování acidifikace oceánu.</p>
        </PageLead>
        <TitrationArticle />
        <Link className="text-link" href="/metody">&larr; Zpět na všechny metody</Link>
      </div>
    );
  }

  if (slug === "potenciometrie") {
    return (
      <div className="page-shell">
        <PageLead eyebrow="Metody / Laboratorní analýza" title="Potenciometrie" meta="28. října 2026">
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
        <PageLead eyebrow="Metody / Laboratorní analýza" title="Spektrofotometrie roztoků" meta="28. října 2026">
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
        <PageLead eyebrow="Metody / Laboratorní analýza" title="Hmotnostní a izotopová spektrometrie" meta="28. října 2026">
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
        <PageLead eyebrow="Metody / Laboratorní analýza" title="Absorpční spektroskopie plynů" meta="28. října 2026">
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
        <PageLead eyebrow="Metody / Laboratorní analýza" title="Plynová chromatografie" meta="29. října 2026">
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
        <PageLead eyebrow="Metody / Přímá měření" title="Standardizované fenologické pozorování" meta="28. října 2026">
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
          meta="28. října 2026"
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
          meta="28. října 2026"
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
          meta="28. října 2026"
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
          meta="28. října 2026"
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
          meta="28. října 2026"
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
          meta="28. října 2026"
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
          meta="28. října 2026"
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
          meta="28. října 2026"
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
          meta="28. října 2026"
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
          meta="28. října 2026"
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
