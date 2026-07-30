import Image from "next/image";
import type { ReactNode } from "react";

function ReferenceLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a className="article-reference" href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

export function OceanHeatContentArticle() {
  return (
    <article className="article-layout">
      <aside className="article-glossary" aria-labelledby="ocean-heat-glossary-title">
        <p className="eyebrow">Potřebné informace</p>
        <h2 id="ocean-heat-glossary-title">Jak číst tento článek</h2>
        <dl>
          <div>
            <dt>Teplo v oceánu</dt>
            <dd>Množství tepla v určité části mořské vody. Určuje se z naměřené teploty a objemu vody.</dd>
          </div>
          <div>
            <dt>Hloubkový interval</dt>
            <dd>Například 0-700 m znamená vodu od hladiny do hloubky 700 metrů.</dd>
          </div>
          <div>
            <dt>Srovnávací průměr</dt>
            <dd>Průměr vybraných let, vůči němuž se vyjadřuje změna. Posune nulu grafu, ne rozdíl mezi dvěma roky.</dd>
          </div>
          <div>
            <dt>ZJ</dt>
            <dd>Zettajoule, tedy 10<sup>21</sup> joulů. V této jednotce se uvádí velké změny množství tepla.</dd>
          </div>
        </dl>
      </aside>

      <div className="article-prose">
        <h2>Co pozorujeme</h2>
        <p className="article-prose__intro">
          Teplo je energie uložená ve vodě. Když se změří teplota mořské vody od hladiny do určité hloubky, lze z ní
          určit, jak se změnilo množství tepla v této části oceánu. Právě tuto změnu sleduje odborná veličina nazývaná
          tepelný obsah oceánu.
        </p>

        <p>
          Teplota odpovídá na otázku, jak teplá je voda v jednom místě a v jedné hloubce. Množství tepla spojuje mnoho
          takových měření s objemem vody, který zastupují. Stejná změna teploty proto znamená něco jiného v tenké vrstvě
          u hladiny a něco jiného v celém pásu vody do hloubky dvou kilometrů. Levitus a kol. tento postup podrobně
          popsali pro globální data do 2 000 metrů. {" "}
          <ReferenceLink href="https://doi.org/10.1029/2012GL051106">Levitus et al., 2012</ReferenceLink>
        </p>

        <p>
          Zveřejněné výsledky často ukazují rozdíl proti průměru vybraných let. Díky tomu lze na jedné ose sledovat,
          zda bylo v daném roce v určené vrstvě více, nebo méně tepla než v tomto srovnávacím období. Volba průměru
          změní výchozí nulu grafu, ne změnu mezi dvěma roky. Nezávislé výpočty stejnou veličinu porovnávali například
          Lyman a kol. a později Cheng a kol. {" "}
          <ReferenceLink href="https://doi.org/10.1038/nature09043">Lyman et al., 2010</ReferenceLink>{" "}
          a <ReferenceLink href="https://doi.org/10.1126/sciadv.1601545">Cheng et al., 2017</ReferenceLink>.
        </p>

        <h2>Historie</h2>
        <p>
          Jedny z prvních hlubokomořských teplot měřila expedice HMS <i>Challenger</i> v letech 1873-1876. Její
          fyzikální zpráva z roku 1885 zaznamenává teploty vody odebrané v různých hloubkách a dnes jsou tyto záznamy
          dostupné i v digitálním archivu NOAA. {" "}
          <ReferenceLink href="https://escholarship.org/uc/item/38p2q583">Challenger Expedition, 1885</ReferenceLink>{" "}
          a <ReferenceLink href="https://catalog.data.gov/dataset/oceanographic-temperature-profiles-from-the-hms-challenger-in-the-antarctic-north-atlantic">
            NOAA/NCEI: digitalizovaná měření Challengeru
          </ReferenceLink>.
        </p>

        <p>
          Ve 20. století přibývala lodní měření. Od druhé poloviny 60. let lodě vypouštěly také jednorázové teplotní
          sondy, které výrazně zvýšily počet měření pod hladinou. Jejich údaje jsou cenné, ale jednotlivé typy sond se
          liší a jejich odchylky je nutné zpětně popsat. Historii těchto měření shrnuje Goni a kol. {" "}
          <ReferenceLink href="https://doi.org/10.1175/BAMS-D-18-0005.1">Goni et al., 2019</ReferenceLink>.
        </p>

        <p>
          Od počátku 21. století tuto práci doplňuje program Argo. Jeho přibližně čtyři tisíce volně plujících přístrojů
          se každých deset dní ponoří, při návratu k hladině změří teplotu, tlak a slanost a data odešlou přes satelit.
          Standardní přístroje měří do hloubky 2 000 metrů. {" "}
          <ReferenceLink href="https://doi.org/10.1038/nclimate2872">Riser et al., 2016</ReferenceLink>{" "}
          a <ReferenceLink href="https://argo.ucsd.edu/how-do-floats-work/">Argo: jak plováky pracují</ReferenceLink>.
        </p>

        <h2>Jak vznikají údaje</h2>
        <p>
          Základním měřením je teplotní profil: soubor teplot naměřených pod sebou, od hladiny do hloubky. Takový profil
          může pořídit loď, kotvený přístroj nebo plovák Argo. U každého měření se zaznamená také místo, čas, přístroj a
          údaje potřebné ke kontrole jeho kvality.
        </p>

        <figure className="article-figure">
          <Image
            className="article-figure__media"
            src="/media/ocean-heat-content/argo-float-deployment-noaa-pmel.jpg"
            alt="Lidé na výzkumné lodi drží před vypuštěním profilovací plovák Argo."
            width={1600}
            height={1064}
            unoptimized
          />
          <figcaption>
            Plovák Argo před vypuštěním z lodi NOAA <i>Ronald H. Brown</i>. Při cestě k hladině zaznamenává teplotu
            vody v mnoha hloubkách. Foto: NOAA PMEL, dílo vlády USA ve veřejné doméně. {" "}
            <ReferenceLink href="https://floats.pmel.noaa.gov/gallery/field-operations">Původní fotografie</ReferenceLink>.
          </figcaption>
        </figure>

        <p>
          Autoři datových souborů nejprve kontrolují jednotlivá měření a opravují známé odchylky starších přístrojů.
          Potom rozdělí oceán na menší oblasti. Tam, kde mají přímé měření, pracují s ním; pro okolní místa popisují,
          jak odhad vznikl a jak velká je jeho nejistota. Porovnání postupů ukázalo, že na výsledku záleží například
          způsob doplnění málo měřených oblastí i opravy starších sond. {" "}
          <ReferenceLink href="https://doi.org/10.1175/JCLI-D-15-0801.1">Boyer et al., 2016</ReferenceLink>.
        </p>

        <p>
          Z teplot v jednotlivých oblastech se nakonec vypočítá množství tepla pro přesně uvedenou vrstvu a pro celý
          oceán nebo jeho část. Podrobný popis takového postupu pro nezávislý soubor IAPv4 zveřejnili Cheng a kol.;
          uvádějí v něm i to, které druhy měření používají a co zahrnuje jejich nejistota. {" "}
          <ReferenceLink href="https://doi.org/10.5194/essd-16-3517-2024">Cheng et al., 2024</ReferenceLink>.
        </p>

        <h2>Data, která lze stáhnout</h2>
        <p>
          <strong>NOAA/NCEI Global Ocean Heat Content</strong> zveřejňuje tabulky pro světový oceán, oceánské pánve a
          obě polokoule. Roční hodnoty pro vrstvu 0-700 metrů sahají od roku 1955 do roku 2025; dostupné jsou také
          údaje pro 0-2 000 metrů, měsíční a pětileté přehledy i popis výpočtu. Všechny hodnoty vycházejí z teplotních
          měření uložených ve World Ocean Database. {" "}
          <ReferenceLink href="https://www.ncei.noaa.gov/products/ocean-heat-salt-sea-level">Data NOAA/NCEI</ReferenceLink>.
        </p>

        <figure className="article-figure">
          <Image
            className="article-figure__media"
            src="/media/ocean-heat-content/ncei-ohc-2025-0-700m.jpg"
            alt="Mapa oceánů s barvami znázorňujícími, kde výpočet NOAA/NCEI pro rok 2025 ukazuje více nebo méně tepla v horních 700 metrech než dlouhodobý průměr."
            width={1080}
            height={570}
            unoptimized
          />
          <figcaption>
            Mapa NOAA/NCEI pro rok 2025 ukazuje rozmístění tepla v horních 700 metrech oceánu vůči průměru let
            1955-2006. Teplé barvy znamenají vyšší a modré nižší hodnotu než tento průměr. Mapa patří pouze k vrstvě
            0-700 metrů; teplota mořské hladiny a globální součet jsou jiné údaje. NOAA/NCEI, dílo vlády USA ve veřejné
            doméně. {" "}
            <ReferenceLink href="https://www.ncei.noaa.gov/access/global-ocean-heat-content/bin/heatfig1.pl?navigation=hc_20242024_forward_99">
              Původní mapa a data
            </ReferenceLink>.
          </figcaption>
        </figure>

        <p>
          <strong>IAPv4</strong> je nezávislý soubor měsíčních map teploty a množství tepla v oceánu. Nabízí údaje od
          roku 1940 do roku 2023 a pro některé výpočty až do hloubky 6 000 metrů. Jeho autoři zároveň upozorňují, že
          starší část záznamu má méně přímých měření než období po rozšíření programu Argo. {" "}
          <ReferenceLink href="https://doi.org/10.12157/IOCAS.20240117.001">Data IAPv4</ReferenceLink>{" "}
          a <ReferenceLink href="https://doi.org/10.5194/essd-16-3517-2024">popis metody</ReferenceLink>.
        </p>

        <h2>Pozorování</h2>
        <p>
          Měření teploty vody z různých hloubek ukazují, že množství tepla v oceánech během druhé poloviny 20. století
          rostlo. V souboru NOAA/NCEI má vrstva od hladiny do 700 metrů nejvyšší roční hodnotu v roce 2025. Je to pátý
          rok po sobě, kdy tento konkrétní výpočet dosáhl nového maxima. {" "}
          <ReferenceLink href="https://www.ncei.noaa.gov/news/global-climate-202513">NOAA/NCEI, souhrn roku 2025</ReferenceLink>.
        </p>

        <p>
          Pro vrstvu od hladiny do 2 000 metrů zveřejnili Pan a kol. samostatný výpočet za rok 2025. Oproti roku 2024
          v něm přibylo přibližně 23 ZJ tepla; zveřejněná nejistota tohoto rozdílu je plus minus 8 ZJ. Autoři označují
          rok 2025 za nejvyšší hodnotu ve svém záznamu. Toto číslo se týká vrstvy 0-2 000 metrů, proto jej nelze přímo
          zaměnit za hodnotu NOAA/NCEI pro 0-700 metrů. {" "}
          <ReferenceLink href="https://doi.org/10.1007/s00376-026-5876-0">Pan et al., 2026</ReferenceLink>.
        </p>

        <p>
          Nejistota není ve všech letech stejná. Starší lodní měření jsou řidší a soustředí se do některých tras,
          zatímco program Argo přinesl mnohem pravidelnější pokrytí horních 2 000 metrů oceánu. Proto má každý údaj
          smysl číst spolu s názvem souboru, hloubkovým intervalem, srovnávacím obdobím a uvedenou nejistotou. Tyto
          čtyři informace říkají, co přesně dané číslo popisuje. {" "}
          <ReferenceLink href="https://doi.org/10.1038/nclimate2872">Riser et al., 2016</ReferenceLink>{" "}
          a <ReferenceLink href="https://doi.org/10.5194/essd-16-3517-2024">Cheng et al., 2024</ReferenceLink>.
        </p>

        <h2>Prameny a data</h2>
        <p>
          <strong>Historie a měření:</strong> {" "}
          <ReferenceLink href="https://escholarship.org/uc/item/38p2q583">Challenger Expedition, 1885</ReferenceLink>, {" "}
          <ReferenceLink href="https://doi.org/10.1175/BAMS-D-18-0005.1">Goni et al., 2019</ReferenceLink>{" "}
          a <ReferenceLink href="https://doi.org/10.1038/nclimate2872">Riser et al., 2016</ReferenceLink>.
        </p>
        <p>
          <strong>Výpočet a nejistota:</strong> {" "}
          <ReferenceLink href="https://doi.org/10.1029/2012GL051106">Levitus et al., 2012</ReferenceLink>, {" "}
          <ReferenceLink href="https://doi.org/10.1038/nature09043">Lyman et al., 2010</ReferenceLink>, {" "}
          <ReferenceLink href="https://doi.org/10.1126/sciadv.1601545">Cheng et al., 2017</ReferenceLink>, {" "}
          <ReferenceLink href="https://doi.org/10.1175/JCLI-D-15-0801.1">Boyer et al., 2016</ReferenceLink>{" "}
          a <ReferenceLink href="https://doi.org/10.5194/essd-16-3517-2024">Cheng et al., 2024</ReferenceLink>.
        </p>
        <p>
          <strong>Data a současná pozorování:</strong> {" "}
          <ReferenceLink href="https://www.ncei.noaa.gov/products/ocean-heat-salt-sea-level">NOAA/NCEI</ReferenceLink>, {" "}
          <ReferenceLink href="https://doi.org/10.12157/IOCAS.20240117.001">IAPv4</ReferenceLink>{" "}
          a <ReferenceLink href="https://doi.org/10.1007/s00376-026-5876-0">Pan et al., 2026</ReferenceLink>.
        </p>
        <p>
          <strong>Obrazy a licence:</strong> fotografie plováku Argo pochází z NOAA PMEL a mapa z NOAA/NCEI; obojí je
          dílem vlády USA ve veřejné doméně. {" "}
          <ReferenceLink href="https://floats.pmel.noaa.gov/gallery/field-operations">Zdroj fotografie</ReferenceLink>{" "}
          a <ReferenceLink href="https://www.ncei.noaa.gov/access/global-ocean-heat-content/bin/heatfig1.pl?navigation=hc_20242024_forward_99">
            zdroj mapy
          </ReferenceLink>.
        </p>
      </div>
    </article>
  );
}
