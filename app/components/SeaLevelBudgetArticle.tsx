import Image from "next/image";
import Link from "next/link";
import { Equation } from "./Equation";
import { HypothesisDiagram, type MechanismHypothesis } from "./HypothesisDiagram";
import { HypothesisStory } from "./HypothesisStory";
import { SourceLink } from "./SourceLink";
import styles from "./SeaLevelBudgetArticle.module.css";

const media = "/media/bilance-hladiny-more";
const hypotheses: readonly MechanismHypothesis[] = [
  {
    id: "rozpinani", name: "Teplejší voda zabírá větší objem",
    prediction: "Při stejné hmotnosti má ohřev mořské vody zvětšit její objem. Příspěvek k hladině musí jít vypočítat z teploty a slanosti v různých hloubkách.",
    test: "1. Porovnáme výpočet hustoty s laboratorními vzorky. 2. Z oceánských profilů určíme příspěvek rozpínání k měřenému vzestupu.",
    observation: "1. Laboratorní měření vymezila vztah i jeho přesnost. 2. Rozpínání přispělo v letech 1993–2018 přibližně 1,19 mm za rok k celkovým 3,32 mm za rok.",
    verdict: "Podpořený dílčí příspěvek",
    explanation: "Samotné rozpínání nevysvětluje celý vzestup. Jeho účinek se sčítá se změnou množství vody v oceánu.",
    state: "supported",
  },
  {
    id: "prisun-vody", name: "Do oceánu přibývá voda z pevniny",
    prediction: "Přesun vody z pevniny má zvýšit hmotnost oceánu i hladinu. Při opačném přesunu mají obě veličiny klesnout, i když se objem vlivem teploty téměř nezmění.",
    test: "3. Prověříme dočasný pokles v letech 2010–2011. 4. Sečteme hmotnostní a teplotní příspěvek za roky 1993–2018 a porovnáme je s výškou hladiny.",
    observation: "3. Oceán ztratil asi 1 800 gigatun vody a hladina klesla zhruba o 5 mm. 4. Součet 3,16 mm za rok je v rámci nejistot slučitelný s měřeným vzestupem.",
    verdict: "Podpořený dílčí příspěvek",
    explanation: "Dlouhodobý přírůstek vody a tepelné rozpínání společně vysvětlují vzestup. Krátkodobé zadržení vody na souši jej může dočasně obrátit.",
    state: "supported",
  },
];
const tests = [
  { title: "1. Hustota při známé teplotě", prediction: "Stejně slaná mořská voda má při vyšší teplotě v běžném oceánském rozsahu menší hustotu.", test: "Porovnáváme hmotnost na jednotku objemu u vzorků se známou teplotou a slaností.", result: "Soubor 467 laboratorních hodnot umožnil sestavit a zpřesnit vztah mezi hustotou, teplotou a slaností." },
  { title: "2. Objem z oceánských profilů", prediction: "Ohřívání v různých hloubkách má po přepočtu na hustotu vysvětlit část vzestupu hladiny.", test: "Z měření sestavíme prostorové mapy, dopočítáme neproměřené oblasti a sečteme objemové změny.", result: "Za roky 1993–2018 vychází teplotní příspěvek 1,19 mm za rok, s 90% intervalem 0,99–1,44." },
  { title: "3. Dočasný pokles v letech 2010–2011", prediction: "Pokud ubude voda, má klesnout hmotnost oceánu i hladina bez odpovídajícího ochlazení.", test: "Porovnáme družicovou výšku, gravitační změny a teplotní profily během poklesu.", result: "Pokles hladiny provázel úbytek hmotnosti oceánu a přírůstek vody na souši. Teplotní příspěvek se mezi konci období změnil málo." },
  { title: "4. Součet proti měřené hladině", prediction: "Rozpínání a přidaná voda mají společně vystihnout velikost dlouhodobého vzestupu.", test: "Porovnáme příspěvky a výšku hladiny za stejné období 1993–2018, včetně jejich nejistot.", result: "Součet 3,16 mm za rok souhlasí v rámci nejistot s 3,35 z pobřežní rekonstrukce a 3,32 z družic." },
];

function TestPanels({ start }: { start: number }) {
  return <div className={styles.testPanels}>{tests.slice(start, start + 2).map(test => <section className={styles.testPanel} key={test.title}>
    <h4>{test.title}</h4><dl><dt>Předpověď</dt><dd>{test.prediction}</dd><dt>Zkouška</dt><dd>{test.test}</dd><dt>Výsledek</dt><dd>{test.result}</dd></dl>
  </section>)}</div>;
}

export function SeaLevelBudgetArticle() {
  return <article className="article-layout"><div className="article-prose">
    <h2 id="co-vysvetlujeme">Co prozradí samotná výška hladiny?</h2>
    <p className="article-prose__intro">
      V letech 1993–2018 stoupala podle družic <Link href="/pozorovani/gmsl/#bilance-hladiny">globální hladina moře</Link> v průměru o 3,32 milimetru za rok.
      Část vzestupu způsobuje voda, která už v oceánu je a při ohřevu zvětšuje svůj objem.
      Další část připadá na vodu přitékající z pevniny.
      Ta zvyšuje objem i hmotnost oceánu.
      Výškoměr oba děje zachytí dohromady.<SourceLink id="DOI_10_1038_s41586_020_2591_3"> (Frederikse a kol. 2020, tab. 1)</SourceLink>
    </p>
    <p>
      Z teploty a slanosti v různých hloubkách lze spočítat, o kolik se zvětšil objem vody při ohřevu.
      Změny gravitace zase prozradí, kolik vody oceán získal nebo ztratil.
      Když oba příspěvky vyjádříme v milimetrech, můžeme jejich součet porovnat s naměřeným vzestupem.
      Tomuto porovnání říkáme <strong>bilance hladiny moře</strong>.<SourceLink id="DOI_10_1007_s10712_019_09525_z"> (Gregory a kol. 2019)</SourceLink>
    </p>

    <h2 id="hypotezy">Dva příspěvky a jejich zkoušky</h2>
    <HypothesisDiagram hypotheses={hypotheses} captionId="sea-level-budget-hypotheses-caption"
      context={<p>První větev mění objem při stálé hmotnosti vody. Druhá mění množství vody. Rozlišujeme je pomocí teploty, slanosti a gravitace, potom jejich součet porovnáme s měřenou výškou hladiny. Číselné trendy níže patří stejnému období 1993–2018.</p>}
      caption={<>Oba příspěvky se doplňují. Shoda jejich součtu s hladinou ověřuje velikost vysvětlené změny, ne pouze její směr. Krátkodobý pokles v letech 2010–2011 tvoří samostatnou zkoušku přesunu vody.</>} />

    <h2 id="pribehy">Jak se od sebe oddělí rozpínání vody a její přítok</h2>
    <HypothesisStory id="rozpinani" number={1} title="Teplejší voda zabírá větší objem">
      <p id="objem-a-hmotnost">
        Hustota vody udává, kolik kilogramů váží jeden metr krychlový.
        V rozmezí teplot běžných v oceánu hustota mořské vody při ohřevu klesá, pokud se slanost a tlak nemění.
        Kilogram ohřáté vody proto zabírá o něco víc místa než před ohřevem.
        Její objem <i>V</i> v metrech krychlových dostaneme, když hmotnost <i>m</i> v kilogramech vydělíme hustotou <i>ρ</i> v kilogramech na metr krychlový.<SourceLink id="TEOS10_MANUAL_2010"> (IOC, SCOR a IAPSO 2010, oddíly 2.7 a 2.18–2.20)</SourceLink>
      </p>
      <Equation tex={String.raw`V=\frac{m}{\rho}`} />
      <p>
        V oceánu může voda proudit i do stran.
        Pokud se ale objem ohřáté vrstvy zvětší, při stejné ploše oceánu musí jeho průměrná hladina stoupnout.<SourceLink id="DOI_10_1007_s10712_019_09525_z"> (Gregory a kol. 2019)</SourceLink> O kolik, to záleží i na výchozí teplotě vody, její slanosti a hloubce, s níž roste tlak.
        Dvě stejně silné vrstvy se proto mohou při ohřátí o jeden stupeň roztáhnout různě.<SourceLink id="DOI_10_1007_s10712_019_09525_z"> (Gregory a kol. 2019, N17–N20)</SourceLink>
      </p>
      <figure className={`article-figure ${styles.explanatoryFigure}`}>
        <div className={styles.figureScroll} tabIndex={0} role="region" aria-label="Schéma rozpínání vody, na úzké obrazovce posuvné do stran">
          <a href={`${media}/rozpinani.svg`} aria-label="Otevřít schéma rozpínání v plné velikosti"><Image className="article-figure__media" src={`${media}/rozpinani.svg`} width={1100} height={650} alt="Dva stejně široké sloupce mořské vody se stejnou hmotností. Teplejší má menší hustotu a vyšší hladinu. Teplotní profily určují změnu objemu, výškoměr sleduje hladinu a gravimetrie odlišuje přísun hmoty." unoptimized /></a>
        </div>
        <TestPanels start={0} />
        <figcaption>Vlastní kvalitativní schéma Klimatologie.eu připravené s pomocí AI, CC BY 4.0.
          Princip podle <SourceLink id="DOI_10_1007_s10712_019_09525_z">Gregoryho a kol. 2019</SourceLink> a
          <SourceLink id="TEOS10_MANUAL_2010"> manuálu TEOS-10</SourceLink>. Sloupce nejsou samostatné uzavřené oblasti skutečného oceánu.
          <a href={`${media}/podklady.txt`}> Podklady a licence</a>.
        </figcaption>
      </figure>

      <h4 className={styles.testHeading} id="test-hustota">1. Jak přesně známe hustotu mořské vody?</h4>
      <p>
        Nová laboratorní měření ukázala, že rovnice z roku 1976 přestává při teplotách nad 25 °C přesně vystihovat hustotu mořské vody.
        Frank Millero a Alain Poisson proto v roce 1981 spojili 467 hodnot ze dvou pracovišť.
        Při tlaku jedné atmosféry porovnali hustotu vzorků o stejné slanosti při různých teplotách.
        Aby si vzorky z obou laboratoří skutečně odpovídaly, sjednotili referenční vodu a opravili hodnoty slanosti u části měření.<SourceLink id="DOI_10_1016_0198_0149_81_90122_9"> (Millero a Poisson 1981, s. 625–626)</SourceLink>
      </p>
      <p>
        Po těchto úpravách se vyhlazené výsledky obou pracovišť lišily nejvýše asi o 0,005 kg/m³.<SourceLink id="DOI_10_1016_0198_0149_81_90122_9"> (Millero a Poisson 1981, s. 626–629)</SourceLink> V hlubinách oceánu je však voda pod mnohem vyšším tlakem než v tomto pokusu.
        Dnešní výpočty proto vycházejí z mezinárodního standardu pro výpočet vlastností mořské vody (TEOS-10), který zahrnuje i účinek tlaku a složení rozpuštěných solí.
        Jak se <Link href="/mechanismy/tepelna-roztaznost-morske-vody/">hustota mění při ohřevu a při změně slanosti</Link>, lze podle něj spočítat pro každou hloubku zvlášť.<SourceLink id="TEOS10_MANUAL_2010"> (IOC, SCOR a IAPSO 2010, oddíly 1–2)</SourceLink>
      </p>

      <h4 className={styles.testHeading} id="test-profily">2. Kolik ke vzestupu přidal ohřev jednotlivých vrstev?</h4>
      <p>
        Teplota hladiny sama neukáže, zda se oteplila jen mělká vrstva, nebo také stovky metrů vody pod ní.
        Thomas Frederikse a jeho kolegové proto v roce 2020 použili měření z lodí a plováků.
        Záznam <Link href="/pozorovani/gmsl/#bilance-hladiny">teploty a slanosti v různých hloubkách</Link> na jednom místě tvoří takzvaný profil.
        Ze změny hustoty odvodili, o kolik se při stejné hmotnosti změnila tloušťka každé vrstvy.
        Příspěvky vrstev pod sebou sečetli.
        V celosvětovém průměru pak měla každá oblast váhu podle své plochy.<SourceLink id="DOI_10_1038_s41586_020_2591_3"> (Frederikse a kol. 2020, metody)</SourceLink>
      </p>
      <p>
        Z měření v horních 2 000 metrech vznikly pro období po roce 1957 tři soubory map.
        Autoři využili všechny tři.
        Soubory mají část profilů společnou, liší se však například tím, jak doplňují údaje v místech bez měření.
        Pro větší hloubky, odkud bylo dat podstatně méně, autoři použili rekonstrukci založenou na šíření teplotních změn oceánem.<SourceLink id="DOI_10_1038_s41586_020_2591_3"> (Frederikse a kol. 2020, Methods: Steric changes)</SourceLink>
      </p>
      <p>
        Pro období 1993–2018 vyšel příspěvek rozpínání <strong>1,19 mm za rok</strong>.
        Jeho 90% interval nejistoty sahá od 0,99 do 1,44 mm za rok a týká se průměrného tempa za celé období.
        Rozpínání tedy vysvětluje zhruba třetinu vzestupu zachyceného družicemi.
        Pro <a href="#test-soucet">porovnání součtu s měřenou hladinou</a> ještě potřebujeme zjistit, kolik vody oceán získal z pevniny.<SourceLink id="DOI_10_1038_s41586_020_2591_3"> (Frederikse a kol. 2020, tab. 1)</SourceLink>
      </p>
    </HypothesisStory>

    <HypothesisStory id="prisun-vody" number={2} title="Do oceánu přibývá voda z pevniny">
      <p id="hmotnostni-prispevek">
        Voda z tajících ledovců na pevnině odtéká do moře.
        Hmotnost oceánu vzroste i tehdy, když se část pevninského ledovce odlomí a odpluje.
        Led, který už plave, vytlačuje vodu odpovídající jeho hmotnosti.
        Jeho pozdější roztání proto hladinu přímo ovlivní jen málo.<SourceLink id="DOI_10_1007_s10712_019_09525_z"> (Gregory a kol. 2019, N19)</SourceLink> Hladinu mění i zásoby kapalné vody na souši.
        Část odčerpané podzemní vody odteče do moře.
        Když se naopak voda z dešťů zadrží v půdě, jezerech nebo přehradách, v oceánu dočasně chybí.<SourceLink id="DOI_10_1007_s10712_019_09525_z"> (Gregory a kol. 2019, N19)</SourceLink>
      </p>
      <p>
        Hmotnost přidané vody lze převést na výšku vrstvy, kterou by vytvořila po celé ploše oceánu.
        Přírůstek hmotnosti ΔM v kilogramech nejprve vydělíme hustotou sladké vody ρ<sub>f</sub> a získáme objem.
        Po vydělení plochou oceánu <i>A</i> v metrech čtverečních vyjde změna průměrné výšky Δh v metrech.
        Jde o běžný přepočet na vrstvu sladké vody při přibližně stálé ploše oceánu.<SourceLink id="DOI_10_1007_s10712_019_09525_z"> (Gregory a kol. 2019, vymezení N19 a rovnice 37)</SourceLink>
      </p>
      <Equation tex={String.raw`\Delta h=\frac{\Delta M}{\rho_{\mathrm{f}}\,A}`} />
      <p>
        Na každém metru čtverečním váží milimetrová vrstva sladké vody jeden kilogram, počítáme-li s hustotou 1 000 kg/m³.
        Na ploše oceánu zaokrouhlené na 360 milionů km² to dává asi <strong>360 gigatun vody na jeden milimetr hladiny</strong>.
        Jedna gigatuna je miliarda tun.
        Tentýž <a href={`${media}/vypocty.mjs`}>přepočet</a> dovoluje předpovědět i pokles hladiny, pokud víme, kolik vody oceán ztratil.<SourceLink id="DOI_10_1029_2012gl053055"> (Boening a kol. 2012)</SourceLink>
      </p>
      <p>
        Právě takové měření dříve chybělo.
        V roce 2002 ukázal Walter Munk, že tehdejší odhady rozpínání a úbytku pevninského ledu dohromady nestačí na rekonstruovaný vzestup ve 20. století.
        Zvažoval, zda je problém v odhadu samotné hladiny, v podcenění ohřevu nebo v tom, kolik úbytku ledu tehdy připouštěly údaje o rotaci Země.<SourceLink id="DOI_10_1073_pnas_092704599"> (Munk 2002)</SourceLink> V témže roce odstartovala dvojice družic GRACE.
        Družice během letu zaznamenávaly drobné změny své vzájemné vzdálenosti způsobené tím, jak silně je přitahovala hmota pod nimi.
        Z opakovaných přeletů lze pomocí <Link href="/metody/druzicova-gravimetrie/#hmotnost-oceanu">družicové gravimetrie</Link> odhadnout přesun vody i bez měření výšky hladiny.<SourceLink id="DOI_10_1029_2012gl053055"> (Boening a kol. 2012, oddíl 2)</SourceLink>
      </p>
      <figure className={`article-figure ${styles.explanatoryFigure}`}>
        <div className={styles.figureScroll} tabIndex={0} role="region" aria-label="Schéma přesunu vody, na úzké obrazovce posuvné do stran">
          <a href={`${media}/presun-vody.svg`} aria-label="Otevřít schéma přesunu vody v plné velikosti"><Image className="article-figure__media" src={`${media}/presun-vody.svg`} width={1100} height={650} alt="Ledovec na pevnině a řeka dodávají vodu do oceánu. Opačný směr vede vypařováním a srážkami k zásobám vody na souši. GRACE sleduje změnu hmotnosti, radarový výškoměr výšku hladiny." unoptimized /></a>
        </div>
        <TestPanels start={2} />
        <figcaption>Vlastní kvalitativní schéma Klimatologie.eu připravené s pomocí AI, CC BY 4.0.
          Přesuny podle <SourceLink id="DOI_10_1029_2012gl053055">Boening a kol. 2012</SourceLink> a
          <SourceLink id="DOI_10_1007_s10712_019_09525_z"> Gregoryho a kol. 2019</SourceLink>.
          <a href={`${media}/podklady.txt`}> Podklady a licence</a>.
        </figcaption>
      </figure>

      <h4 className={styles.testHeading} id="test-pokles">3. Kam se poděla voda při poklesu hladiny v letech 2010–2011?</h4>
      <p>
        Mezi březnem 2010 a květnem 2011 zaznamenaly radarové družice pokles globální hladiny přibližně o 5 mm.
        V té době se v tropickém Pacifiku projevila výrazná La Niña.
        Při ní se část povrchových vod ochladí a změny proudění vzduchu ovlivní, kde nad oceánem a pevninou prší.
        Carmen Boening a její kolegové proto zkoumali dvě možnosti.
        Oceán se mohl ochladit a smrštit, nebo mohla část vody zůstat po srážkách na souši.<SourceLink id="DOI_10_1029_2012gl053055"> (Boening a kol. 2012)</SourceLink>
      </p>
      <p>
        Vedle výšky hladiny sledoval tým hmotnost oceánu pomocí družic GRACE a teplotu a slanost v horních 900 metrech pomocí plováků Argo.
        Ze záznamů odečetl pravidelné sezónní kolísání a vyhladil krátké výkyvy.
        Mezi začátkem a koncem epizody se příspěvek odvozený z teploty vody změnil jen málo.
        Oceán však podle gravimetrie ztratil asi <strong>1 800 gigatun vody</strong>.
        Při přepočtu 360 gigatun na jeden milimetr tedy vychází pokles přibližně o pět milimetrů.
        Tolik naměřil i radar.<SourceLink id="DOI_10_1029_2012gl053055"> (Boening a kol. 2012, obr. 2 a oddíly 2–3)</SourceLink>
      </p>
      <p>
        Měření GRACE zároveň ukázala, kde na pevnině vody přibylo.
        Zadržela se zejména v Austrálii, na severu Jižní Ameriky a v jihovýchodní Asii.
        Odhady pro souš i oceán využívají stejné družice.
        Samostatnou kontrolu poskytly radarové výškoměry a plováky, jejichž <Link href="/pozorovani/gmsl/#pokles-2010-2011">měření lze pro toto období přímo porovnat</Link>.<SourceLink id="DOI_10_1029_2012gl053055"> (Boening a kol. 2012, obr. 2–3)</SourceLink>
      </p>

    </HypothesisStory>

    <h2 id="mechanismus">Bilance hladiny za čtvrtstoletí družicových měření</h2>
    <p>
      Krátký pokles hladiny ověřil účinek vody zadržené na souši.
      Pro bilanci celého období 1993–2018 potřeboval Frederikseho tým zjistit, kolik vody putovalo oběma směry.
      K vodě uvolněné z ledovců a z ledových příkrovů Grónska a Antarktidy proto přičetl vodu, která odtekla z pevninských zásob.
      Vodu, která se na souši naopak nahromadila, odečetl.
      Od roku 2003 využil gravimetrii.
      Pro dřívější roky vycházel z měření a rekonstrukcí úbytku ledu i z modelových odhadů, které zahrnují vodu zadrženou v přehradách a čerpání podzemních zásob.
      Čistý přírůstek vody z pevniny tak za celé období zvyšoval hladinu v průměru o <strong>1,97 mm za rok</strong>, s 90% intervalem 1,63–2,33 mm za rok.<SourceLink id="DOI_10_1038_s41586_020_2591_3"> (Frederikse a kol. 2020, tab. 1 a metody)</SourceLink>
    </p>
    <h3 className={styles.testHeading} id="test-soucet">4. Souhlasí součet s tím, co naměřily družice a pobřežní stanice?</h3>
    <p>
      Sečteme-li 1,19 mm za rok připadající na ohřev a 1,97 mm za rok připadající na přísun vody, vyjde <strong>3,16 mm za rok</strong>.
      Pro tento součet uvádějí autoři 90% interval 2,78–3,57 mm za rok.
      Družice naměřily 3,32 mm za rok s intervalem 2,87–3,79 mm za rok.
      V grafu patří první dva řádky jednotlivým příspěvkům, pod jejich součtem jsou dva odhady celkového vzestupu.
      Body udávají průměrné tempo za roky 1993–2018 a úsečky jeho nejistotu.<SourceLink id="DOI_10_1038_s41586_020_2591_3"> (Frederikse a kol. 2020, tab. 1)</SourceLink>
    </p>
      <figure className={`article-figure ${styles.explanatoryFigure}`}>
        <div className={styles.figureScroll} tabIndex={0} role="region" aria-label="Graf bilance hladiny, na úzké obrazovce posuvný do stran">
          <a href={`${media}/bilance-1993-2018.svg`} aria-label="Otevřít graf bilance v plné velikosti"><Image className="article-figure__media" src={`${media}/bilance-1993-2018.svg`} width={1100} height={650} alt="Trendy 1993–2018 v milimetrech za rok: rozpínání 1,19, přísun vody 1,97, jejich součet 3,16, pobřežní rekonstrukce 3,35 a družice 3,32. Graf uvádí 90% intervaly všech odhadů, které se u součtu a obou celkových měření překrývají." unoptimized /></a>
        </div>
        <figcaption>Přepis hodnot z <SourceLink id="DOI_10_1038_s41586_020_2591_3">Frederikse a kol. 2020, tab. 1</SourceLink>.
          Vlastní graf Klimatologie.eu připravený s pomocí AI, CC BY 4.0.
          <a href={`${media}/frederikse-2020-tabulka-1.csv`}> Číselné podklady</a>, <a href={`${media}/vypocty.mjs`}>kontrolní výpočet</a> a <a href={`${media}/podklady.txt`}>původ údajů</a>.
        </figcaption>
      </figure>
    <p>
      Druhou kontrolu poskytly stanice na pobřeží, které měří hladinu vůči místní souši.
      Když autoři z jejich záznamů rekonstruovali globální hladinu, vyšel vzestup 3,35 mm za rok s 90% intervalem 2,91–3,82 mm za rok.
      Od této pobřežní rekonstrukce pak odečetli součet příspěvků 3,16 mm za rok.
      Zůstal rozdíl 0,19 mm za rok, jehož 90% interval sahá od −0,32 do 0,70 mm za rok.
      Protože rozpětí zahrnuje nulu, je naměřený vzestup slučitelný s tím, kolik dohromady přibylo rozpínáním a přísunem vody.<SourceLink id="DOI_10_1038_s41586_020_2591_3"> (Frederikse a kol. 2020, tab. 1)</SourceLink>
    </p>
    <p>
      Problém, na který upozornil Walter Munk, se týkal delšího období než družicová měření.
      Frederikse a jeho kolegové proto porovnání provedli i za roky 1900–2018.
      Součet příspěvků činil 1,52 mm za rok, zatímco z pobřežních záznamů vyšel vzestup o 1,56 mm za rok.
      I zde se výsledky shodují v mezích nejistoty.
      Mezeru, kterou Munk popsal, tak pomohlo uzavřít zpřesnění obou stran bilance, od příspěvků ledu a ohřevu až po rekonstrukci samotné hladiny.<SourceLink id="DOI_10_1038_s41586_020_2591_3"> (Frederikse a kol. 2020, tab. 1 a hlavní text)</SourceLink>
    </p>
    <h3 id="mistni-hladina">Proč se výsledek liší pobřeží od pobřeží?</h3>
    <p>
      Na konkrétním pobřeží záleží i na tom, kam proudy přinesou vodu a teplo a zda se souš zvedá, nebo klesá.
      U velkého ledového příkrovu působí navíc jeho gravitace.
      Příkrov k sobě přitahuje mořskou vodu.
      Jak led ubývá, přitažlivost slábne a část vody se přesune dál od pobřeží.
      Souš se navíc může po odlehčení zvedat.
      V blízkosti tajícího příkrovu proto může hladina vůči pevnině klesat, zatímco na vzdálenějším pobřeží může růst rychleji než v globálním průměru.<SourceLink id="DOI_10_1007_s10712_019_09525_z"> (Gregory a kol. 2019)</SourceLink> Tyto místní rozdíly podrobněji rozebírá<SourceLink id="DOI_10_1017_9781009157896_011"> IPCC 2021, oddíl 9.6.1.3</SourceLink>.
    </p>

    <h2 id="nejistoty">Jak přesně umíme příčiny vzestupu oddělit?</h2>
    <p id="dalsi-overeni">
      K nejistým příspěvkům patří ohřev hlubokého oceánu a dlouhodobé změny zásob vody na pevnině, jak shrnuje<SourceLink id="DOI_10_1017_9781009157896_011"> IPCC 2021, oddíl 9.6.1</SourceLink>.
      Kdyby se první příspěvek podcenil a druhý o stejnou hodnotu přecenil, v součtu by se chyby vyrovnaly.<SourceLink id="DOI_10_1038_s41586_020_2591_3"> (Frederikse a kol. 2020)</SourceLink> Pokud by výškoměry i pobřežní stanice dlouhodobě ukazovaly vzestup mimo interval nejistoty společné bilance, stálo by za to hledat chybějící přesun vody, přehlédnuté oteplení nebo chybu ve výpočtu.
      Rozhodnout mezi nimi pomohou přesnější měření hmotnosti a výšky hladiny spolu s teplotními profily zasahujícími až do hlubin.
    </p>
    <details className="article-details"><summary>Podrobnosti k měřením a jejich nejistotám</summary>
      <p>
        Laboratorní rovnice Millera a Poissona platila pro teploty 0–40 °C a slanost 0,5–43 na praktické stupnici, na níž má běžná oceánská voda hodnotu kolem 35.
        Při slanosti 35 a teplotě 5 °C dává hustotu 1 027,675 kg/m³.
        Směrodatná odchylka jednotlivých měření od rovnice činila 0,00366 kg/m³.
        Udává, jak dobře rovnice vystihla údaje, ze kterých ji autoři sestavili.<SourceLink id="DOI_10_1016_0198_0149_81_90122_9"> (Millero a Poisson 1981, s. 628–629)</SourceLink>
      </p>
      <p>
        Před rozšířením měřicích plováků chyběly profily i ve velkých oblastech horního oceánu.
        Pod 2 000 metry je měření stále málo.
        Rozdíly mezi třemi zpracováními ukazují, jak výsledek ovlivňuje doplnění mezer.
        Chyba ve společných profilech se však může projevit ve všech třech podobně.
        Od roku 2015 byl v datech patrný posun měřené slanosti.
        Aby nezkreslil odhad tepelného rozpínání, autoři od map odečetli odhad globální objemové změny související se slaností.<SourceLink id="DOI_10_1038_s41586_020_2591_3"> (Frederikse a kol. 2020, metody)</SourceLink>
      </p>
      <p>
        Poblíž pobřeží zasahuje do gravitačního měření jak změna hmotnosti oceánu, tak přesun vody na souši.
        Navíc se po ústupu dávných ledovců dodnes pomalu pohybuje zemský plášť.
        Gravimetrie i některé opravy pobřežních měření proto závisejí na společných odhadech pohybu pevné Země.
        Pobřežní rekonstrukce zohledňuje také přerozdělení vody a změnu tvaru Země při dnešním úbytku ledu.<SourceLink id="DOI_10_1038_s41586_020_2591_3"> (Frederikse a kol. 2020, metody)</SourceLink>
      </p>
      <p>
        Aby se tyto souvislosti promítly do nejistoty součtu i zbylého rozdílu, počítal Frederikseho tým bilanci v 5 000 variantách.
        Z nich určil intervaly v grafu.
        Pouhé sečtení dolních či horních mezí obou příspěvků by jejich společné závislosti pominulo.<SourceLink id="DOI_10_1038_s41586_020_2591_3"> (Frederikse a kol. 2020, metody)</SourceLink> <SourceLink id="DOI_10_5281_zenodo_3862995"> Veřejný datový doplněk</SourceLink> obsahuje časové záznamy i jednotlivé varianty výpočtu.
        Jak vznikly, lze ověřit v repozitáři, kde autoři zveřejnili<SourceLink id="WEB_GitHub_GitHub_thomasfrederikse_sealevelbudget_20c_4d484230"> původní zdrojový kód</SourceLink>.
      </p>
      <p>
        U ledu, který před ústupem spočíval na dně pod úrovní moře, část uvolněného prostoru vyplní mořská voda.
        O tento objem se příspěvek ledu k hladině zmenší.
        Přesný výpočet zahrnuje i malé rozdíly spojené s hustotou a slaností.
        U kapalné vody na souši činí potíže hlavně dlouhodobé změny zásob.
        Některé studie se liší i v tom, zda přesuny této vody v součtu zvedaly hladinu, nebo ji snižovaly.<SourceLink id="DOI_10_1017_9781009157896_011"> (IPCC 2021, oddíly 9.6.1.1–9.6.1.2)</SourceLink>
      </p>
      <p>
        Čísla v grafu jsou publikované lineární trendy z jedné studie za období 1993–2018.
        Porovnání s novějšími výsledky má smysl pro stejné období a stejný způsob určení tempa.
        Bilance ukazuje, jakými fyzikálními cestami se hladina změnila.
        Otázka, jak velký podíl na ohřevu a úbytku ledu měla lidská činnost, vyžaduje další rozbor.<SourceLink id="DOI_10_1017_9781009157896_011"> (IPCC 2021, oddíl 9.6.1)</SourceLink>
      </p>
    </details>

    <div className="article-observation-summary" id="zaver"><p className="eyebrow">Shrnutí mechanismu</p>
      <p>
        Globální hladina stoupá, protože teplejší mořská voda zabírá více místa a oceán zároveň získává vodu z pevniny, zejména z ubývajících ledovců a ledových příkrovů.
        V letech 1993–2018 přidávalo rozpínání v průměru 1,19 mm za rok a přírůstek vody 1,97 mm za rok.
        Součet 3,16 mm za rok se v mezích nejistoty shoduje jak s družicovým měřením, tak s výškou hladiny odvozenou z pobřežních stanic.
        Přísun vody z pevniny tak v tomto období přispěl ke vzestupu více než ohřev oceánu.
      </p>
    </div>

    <h2 id="prameny">Prameny a veřejné podklady</h2>
    <div className="article-sources">
      <section><h3>Vlastnosti vody a vývoj otázky</h3><ul>
        <li><SourceLink id="DOI_10_1016_0198_0149_81_90122_9">Millero a Poisson 1981</SourceLink> – původní rovnice hustoty a porovnání laboratorních měření. Veřejný reprint v souboru UNESCO, strany 15–19 PDF.</li>
        <li><SourceLink id="TEOS10_MANUAL_2010">IOC, SCOR a IAPSO 2010: TEOS-10</SourceLink> – oficiální veřejný manuál vztahů mezi teplotou, slaností, tlakem a hustotou.</li>
        <li><SourceLink id="DOI_10_1073_pnas_092704599">Munk 2002</SourceLink> – původní rozbor tehdejšího nesouladu bilance 20. století, veřejný plný text.</li>
      </ul></section>
      <section><h3>Zkoušky a vymezení příspěvků</h3><ul>
        <li><SourceLink id="DOI_10_1029_2012gl053055">Boening a kol. 2012</SourceLink> – konečná publikovaná verze rozboru poklesu hladiny, přístroje a opravy v oddílu 2, srovnání na obrázcích 2–3.</li>
        <li><SourceLink id="DOI_10_1038_s41586_020_2591_3">Frederikse a kol. 2020</SourceLink> – veřejný plný text. Graf přebírá trendy 1993–2018 z tabulky 1 na s. 395, postupy jsou v části Methods.</li>
        <li><SourceLink id="DOI_10_1007_s10712_019_09525_z">Gregory a kol. 2019</SourceLink> – veřejný plný text, vymezení globální a místní hladiny, převod hmotnosti na vodní vrstvu v rovnici 37.</li>
        <li><SourceLink id="DOI_10_1017_9781009157896_011">IPCC 2021, kapitola 9</SourceLink> – odborná syntéza, bilance a rozdíly odhadů v oddílu 9.6.1.</li>
      </ul></section>
      <section><h3>Data a vlastní grafika</h3><ul>
        <li><SourceLink id="DOI_10_5281_zenodo_3862995">Datový doplněk Frederikse a kol. 2020</SourceLink> – veřejné časové řady v sešitu <code>global_basin_timeseries.xlsx</code> a 5 000 variant v souboru <code>GMSL_ensembles.nc</code>.</li>
        <li><SourceLink id="WEB_GitHub_GitHub_thomasfrederikse_sealevelbudget_20c_4d484230">Původní výpočetní kód studie</SourceLink> – dokumentuje vznik rekonstrukce, neslouží jen k překreslení grafu.</li>
        <li><a href={`${media}/frederikse-2020-tabulka-1.csv`}>Čísla našeho grafu</a>, <a href={`${media}/vypocty.mjs`}>kontrolní výpočet a převod hmotnosti</a>, <a href={`${media}/grafika.mjs`}>zdrojový kód obrázků</a> a <a href={`${media}/podklady.txt`}>původ a licence</a>. Vlastní grafika a kód CC BY 4.0.</li>
      </ul></section>
    </div>
  </div></article>;
}
