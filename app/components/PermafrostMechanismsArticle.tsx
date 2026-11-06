import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Equation, InlineMath } from "./Equation";
import { HypothesisDiagram, type MechanismHypothesis } from "./HypothesisDiagram";
import { HypothesisStory } from "./HypothesisStory";
import { SourceLink } from "./SourceLink";
import styles from "./PermafrostMechanismsArticle.module.css";

const media = "/media/permafrost-mechanismy";
const hypotheses: readonly MechanismHypothesis[] = [
  {
    id: "teplo-z-hloubky",
    name: "Oteplování přichází z hloubky",
    prediction: "Zvýšení přísunu tepla pod permafrostem má nejprve změnit hlubokou část teplotního profilu. Stálý přísun zdola udržuje teplotní rozdíl s hloubkou, ale sám nevytvoří nové oteplení soustředěné u povrchu.",
    test: "Změříme teplotu až pod zmrzlou vrstvu a tepelnou vodivost vzorků. Spočítáme tok tepla zdola a porovnáme očekávaný profil s měřením v horní části vrtů.",
    observation: "V Prudhoe Bay se doložil přísun tepla zdola. Horních přibližně 160 metrů však bylo teplejších, než odpovídalo pokračování hlubokého profilu k povrchu.",
    verdict: "Skutečný zdroj tepla, který sám nestačí",
    explanation: "Vnitřní teplo Země pomáhá určit spodní hranici permafrostu. Samo nevysvětluje pozorovaný průběh oteplování jeho horní části.",
    state: "insufficient",
  },
  {
    id: "teplo-od-povrchu",
    name: "Oteplování začíná změnou podmínek u povrchu",
    prediction: "Změna teploty povrchu se vedením tepla šíří dolů, s hloubkou slábne a zpožďuje se. Silnější sníh při stejném počasí omezí zimní ochlazování půdy. Tání ledu spotřebuje část dodané energie.",
    test: "Vypočítáme profil po oteplení povrchu, vrty znovu změříme v dalších letech a porovnáme půdu pod sněhovou závějí s okolní tundrou.",
    observation: "Výpočet zachytil mělkou teplotní odchylku. Pozdější vrtná měření doložila další oteplení. Pod sněhovými závějemi byla půda v zimě teplejší a dříve zmrzlá vrstva v létě rozmrzala.",
    verdict: "Podpořené vysvětlení sledovaných změn",
    explanation: "Rozhodují změny přísunu i úniku tepla u povrchu. Sníh, voda a vlastnosti půdy určují, kolik energie se dostane do hloubky a co tam způsobí.",
    state: "supported",
  },
];

type TestPanel = { title: string; prediction: string; test: string; result: string };
function Graphic({ name, alt, tests, children }: { name: string; alt: string; tests: TestPanel[]; children: ReactNode }) {
  return <figure className={`article-figure ${styles.explanatoryFigure}`}>
    <div className={styles.figureScroll} tabIndex={0} role="region" aria-label="Schéma, na úzké obrazovce posuvné do stran">
      <a href={`${media}/${name}.svg`} aria-label="Otevřít schéma v plné velikosti">
        <Image className="article-figure__media" src={`${media}/${name}.svg`} width={1100} height={660} alt={alt} unoptimized />
      </a>
    </div>
    <div className={styles.testPanels}>{tests.map(test => <section className={styles.testPanel} key={test.title}>
      <h4>{test.title}</h4>
      <dl><dt>Předpověď</dt><dd>{test.prediction}</dd><dt>Zkouška</dt><dd>{test.test}</dd><dt>Výsledek</dt><dd>{test.result}</dd></dl>
    </section>)}</div>
    <figcaption>{children} Vlastní kvalitativní schéma Klimatologie.eu připravené s pomocí AI, CC BY 4.0.
      Barvy rozlišují popsané děje, délky šipek nevyjadřují měřený tok tepla. <a href={`${media}/podklady.txt`}>Prameny a původ grafiky</a>.
    </figcaption>
  </figure>;
}

export function PermafrostMechanismsArticle() {
  return <article className="article-layout"><div className="article-prose">
    <h2 id="co-vysvetlujeme">Půda se otepluje a místy rozmrzá</h2>
    <p className="article-prose__intro">
      V celosvětovém souboru vrtů vyšlo za období 2007–2016 průměrné oteplování permafrostu <strong>0,29 ± 0,12 °C za desetiletí</strong>.
      Jde o prostorově vážený trend, číslo za ± vymezuje polovinu 95% intervalu spolehlivosti. V pěti vrtech teplota v hloubce 10 metrů překročila 0 °C.
      <Link href="/pozorovani/snehova-pokryvka-a-permafrost/#teplota-permafrostu"> Měření permafrostu</Link> tak ukazují jak oteplování dosud zmrzlé půdy, tak místní přechod k rozmrzání.
      Co dodává potřebnou energii a proč se jednotlivá místa mění různě? <SourceLink id="DOI_10_1038_s41467_018_08240_4">(Biskaborn a kol. 2019)</SourceLink>
    </p>
    <p>
      Permafrost je půda nebo hornina s teplotou nejvýše 0 °C po alespoň dva po sobě jdoucí roky. Nemusí být tvořen převážně ledem.
      Nad ním bývá aktivní vrstva, která každé léto rozmrzá a v zimě znovu zamrzá. Zde vysvětlíme oteplování a úbytek zmrzlé půdy na souši.
      Budeme rozlišovat změnu teploty, tání ledu uvnitř půdy a posun hranice rozmrzání, který sleduje <Link href="/metody/mereni-hloubky-sezonniho-rozmrzani/">terénní měření aktivní vrstvy</Link>.
    </p>

    <h2 id="hypotezy">Dvě hypotézy a jejich předpovědi</h2>
    <HypothesisDiagram hypotheses={hypotheses} captionId="permafrost-hypotheses-caption"
      context={<p>Oba zdroje tepla působí současně. Porovnáváme jejich schopnost vysvětlit oteplování horní části permafrostu v uvedených měřeních. Teplotní profil je sled teplot od povrchu do hloubky, nikoli časová řada jediného čidla.</p>}
      caption={<>Pro rozlišení je podstatné, ve které hloubce změna začíná a jak postupuje. Místní vrt a pokus ověřují fyzikální děj, globální četnost jeho projevů zjišťuje pozorovací síť.</>} />

    <h2 id="pribehy">Jak vrty a terénní pokusy odhalily cestu tepla</h2>
    <HypothesisStory id="teplo-z-hloubky" number={1} title="Oteplování přichází z hloubky">
      <p>
        Zmrzlá půda může být hluboká stovky metrů, pod ní však leží teplejší horniny. Teplo odtud proudí vzhůru a omezuje hloubku,
        do níž může dlouhodobý chlad od povrchu proniknout. Tento geotermální přísun proto patří do každého úplného vysvětlení permafrostu.
        Pokud bychom mu přisoudili i nové oteplování, museli bychom doložit změnu jeho velikosti nebo podmínek, za kterých půda teplo odvádí.
        <SourceLink id="DOI_10_3133_ofr82535"> (Lachenbruch a kol. 1982)</SourceLink>
      </p>
      <p>
        Praktickou příležitost k rozlišení poskytly ropné vrty na severu Aljašky. Po objevení ložisek v šedesátých letech bylo potřeba zjistit,
        proč je permafrost u Prudhoe Bay tak hluboký a jaké vlastnosti má podloží. Arthur Lachenbruch, John Sass, Bruce Marshall a Thomas Moses
        v práci z roku 1982 spojili teploty ve 14 vrtech s laboratorním měřením horninových zrn. Jejich kvantitativní popis zahrnoval
        teplotu povrchu, tok z hloubky i vlastnosti materiálu. Tyto příčiny zkoumali společně. <SourceLink id="DOI_10_3133_ofr82535">(Lachenbruch a kol. 1982, s. 3–6)</SourceLink>
      </p>
      <p>
        Pro vedení tepla platí jednoduchá představa: čím větší je rozdíl teplot na dané vzdálenosti a čím lépe materiál teplo vede, tím větší tok jím projde.
        Za stálých podmínek a stejné vodivosti má teplota s hloubkou přibývat přibližně rovnoměrně.
        Změna přicházející zespodu musí nejprve ovlivnit hlubší vrstvy. Schéma ukazuje tento směr a místo, kde jej můžeme ověřit.
        <SourceLink id="DOI_10_3133_ofr82535"> (Lachenbruch a kol. 1982, vedení tepla)</SourceLink>
      </p>
      <Graphic name="teplo-z-hloubky" alt="Teplo z hlubších hornin proudí vzhůru přes spodní hranici permafrostu. Vrt měří celý profil. Oteplení omezené na horní část se od průběhu očekávaného při stálém přísunu zdola odlišuje."
        tests={[{ title: "Test 1 · Hluboký profil a vodivost", prediction: "Stálý tok zdola odpovídá hlubokému teplotnímu spádu. Nový zdroj pod permafrostem se projeví nejdříve dole.", test: "Porovnáme teploty ve vrtech a nezávisle měřenou vodivost materiálu.", result: "Tok zdola je přítomen. Přebytek tepla v horních asi 160 m vyžaduje další vysvětlení." }]}>
        Směr vedení tepla a rozdíl mezi hlubokým průběhem a mělkou odchylkou podle <SourceLink id="DOI_10_3133_ofr82535">Lachenbrucha a kol. (1982, obr. 3 a tab. 2)</SourceLink>.
        Křivky jsou názorným schématem, nikoli překreslenými měřeními.
      </Graphic>

      <h4 id="test-hluboky-profil" className={styles.testHeading}>Test 1 · Hluboký profil a vodivost</h4>
      <p>
        Zlom v teplotním profilu může vzniknout změnou materiálu i přívodu tepla.
        Proto autoři porovnávali průběh teploty s vodivostí vzorků a s podílem vody a ledu odvozeným z měření.
        Přibližně v 600 metrech našli změnu teplotního spádu odpovídající přechodu od pórů vyplněných ledem k pórům s vodou.
        Před interpretací navíc posoudili teplo vnesené samotným vrtáním. Zvlášť porovnávali devět vrtů, kde už tento zásah při posledním měření představoval méně než několik desetin stupně.
        <SourceLink id="DOI_10_3133_ofr82535"> (Lachenbruch a kol. 1982, s. 6–17)</SourceLink>
      </p>
      <p>
        Odhad přirozeného toku zdola činil po převodu jednotek přibližně <strong>0,054 ± 0,008 W/m²</strong>.
        Watt na metr čtvereční zde udává, kolik energie za sekundu projde jednotkovou vodorovnou plochou podloží.
        Rozmezí je konzervativní odhad autorů, nikoli statistický interval stejného typu jako v úvodu.
        Tepelný tok byl podobný jako na dalších místech aljašského pobřeží. Velkou hloubku permafrostu pomáhala vysvětlit vysoká vodivost místních sedimentů.
        Při stejném toku zdola totiž dobře vodivý materiál potřebuje menší rozdíl teplot na každý metr.
        Teplota pak s hloubkou roste pomaleji a k bodu tání dospěje hlouběji.
        <SourceLink id="DOI_10_3133_ofr82535"> (Lachenbruch a kol. 1982, tab. 2 a s. 24–25)</SourceLink>
      </p>
      <p>
        V horních přibližně 160 metrech však teplota vybočovala k vyšším hodnotám oproti prodloužení hlubšího průběhu vzhůru.
        V hloubce 50 metrů byla průměrná odchylka přibližně 1 °C. Stálý tok zdola tento tvar sám nevytvoří.
        Rozhodující je umístění odchylky: podloží nese záznam změny u svého horního okraje.
        Z jediného profilu přitom nelze přesně obnovit každé teplé léto ani bez dalšího odlišit sníh od teploty vzduchu.
        <SourceLink id="DOI_10_3133_ofr82535"> (Lachenbruch a kol. 1982, s. 18–19)</SourceLink>
      </p>
      <p>
        Geotermální teplo tedy obstálo jako součást dlouhodobé bilance, ale nestačilo vysvětlit mělké oteplení.
        Není správné odbýt je pouze jako příliš malé: vypočtený dlouhodobý přebytek tepla vstupujícího od povrchu byl v této studii stejného řádu.
        Mezi zdroji zde rozlišuje hlavně hloubkový průběh. Následující výpočet ověří, zda ho změna u povrchu skutečně dokáže vytvořit.
        <SourceLink id="DOI_10_3133_ofr82535"> (Lachenbruch a kol. 1982, s. 23)</SourceLink>
      </p>
    </HypothesisStory>

    <HypothesisStory id="teplo-od-povrchu" number={2} title="Oteplování začíná změnou podmínek u povrchu">
      <p>
        Stejná měření, která určovala tok zdola, poskytla i možnost zkoumat minulou teplotu povrchu. Půda si její změny uchovává,
        protože vedení tepla trvá. Lachenbruchův tým v roce 1982 navazoval na své výpočty z šedesátých let a porovnal tři jednoduché časové průběhy oteplení.
        Studie tak nepoužívala samotnou shodu teplot vzduchu a země, ale předpovídala tvar změny uvnitř podloží.
        <SourceLink id="DOI_10_3133_ofr82535"> (Lachenbruch a kol. 1982, s. 18–23)</SourceLink>
      </p>
      <p>
        Když povrch zůstává teplejší, teplo postupuje do chladnějších vrstev. Krátká epizoda ovlivní hlavně povrch, dlouhé oteplování zasáhne větší hloubku.
        V předpovědi proto očekáváme postupně slábnoucí a opožděnou změnu směrem dolů. Povrchovou teplotu však určuje také sníh, vegetace a voda.
        Lachenbruch v roce 1994 výslovně rozebral, jak mohou změnit teplotu permafrostu i bez stejné změny ročního průměru teploty vzduchu.
        <SourceLink id="DOI_10_3133_ofr94694"> (Lachenbruch 1994, s. 12–17)</SourceLink>
      </p>
      <p>Schéma ukazuje dvě cesty ke změně bilance: větší letní přísun tepla a menší zimní ztrátu. Následující testy rozlišují výpočet, opakované měření a zásah do sněhové pokrývky.</p>
      <Graphic name="teplo-od-povrchu" alt="V létě proudí teplo z teplejšího povrchu do půdy a část energie spotřebuje tání ledu. V zimě sněhová závěj omezuje únik tepla do chladného vzduchu, takže půda pod ní zůstává teplejší než okolní tundra."
        tests={[
          { title: "Test 2 · Výpočet změny od povrchu", prediction: "Dlouhé oteplování vytvoří teplou odchylku, která směrem do hloubky slábne.", test: "Porovnáme řešení vedení tepla s velikostí a dosahem odchylky ve vrtech.", result: "Změnu v Prudhoe Bay vystihl odhad oteplení povrchu asi o 1,8 °C v průběhu zhruba století." },
          { title: "Test 3 · Návrat do stejných vrtů", prediction: "Při pokračujícím oteplování se bude měnit i profil, který jsme už změřili.", test: "Po letech opakujeme teplotní měření a kontrolujeme kalibraci i odeznívání zásahu vrtáním.", result: "Na severu Aljašky vzrostla teplota ve 20 m od konce osmdesátých let do konce souboru v roce 2013 o 2–3 °C." },
          { title: "Test 4 · Sníh zachycený plotem", prediction: "Silnější sníh omezí zimní ztrátu tepla, ale může zdržet jarní ohřev. Rozhodne celoroční bilance.", test: "Srovnáme teploty pod závějí a na kontrolní tundře v letech 1999–2005.", result: "Zimní půda pod závějemi byla teplejší, letní zpravidla chladnější. V části dříve zmrzlé půdy začalo sezónní rozmrzání." },
        ]}>
        Fyzika podle <SourceLink id="DOI_10_3133_ofr94694">Lachenbrucha (1994)</SourceLink>, ověření podle <SourceLink id="DOI_10_3133_ofr82535">Lachenbrucha a kol. (1982)</SourceLink>, <SourceLink id="DOI_10_5194_essd_6_201_2014">Clowa (2014)</SourceLink> a <SourceLink id="DOI_10_1657_Hinkel_Hurd_2006">Hinkela a Hurda (2006)</SourceLink>.
      </Graphic>

      <h4 id="test-povrchovy-vypocet" className={styles.testHeading}>Test 2 · Výpočet změny od povrchu</h4>
      <p>
        Vysvětlení od povrchu musí současně vystihnout velikost odchylky a hloubku, v níž už je malá. Autoři proto použili rovnici vedení tepla
        s vlastnostmi místního zmrzlého sedimentu. Porovnali náhlý skok teploty povrchu, stálé zvýšení přívodu tepla a rovnoměrný růst teploty.
        Každý průběh zanechá poněkud jinou křivku. Místní data dovolovala především hrubý odhad, protože je ovlivňují i prostorové rozdíly na povrchu.
        <SourceLink id="DOI_10_3133_ofr82535"> (Lachenbruch a kol. 1982, rovnice 13–20)</SourceLink>
      </p>
      <p>
        Teplota povrchu odvozená z profilů vzrostla přibližně z −10,9 na −9,1 °C, tedy o 1,8 °C.
        K tomu, aby odchylka ve 160 metrech klesla asi na 0,1 °C, vycházelo podle zvoleného časového průběhu 67, 90 nebo 117 let.
        To jsou tři modelové odhady trvání, nikoli interval statistické spolehlivosti. Ukazují, že velikost i hloubka změny odpovídají oteplování povrchu v řádu století.
        <SourceLink id="DOI_10_3133_ofr82535"> (Lachenbruch a kol. 1982, s. 19–22)</SourceLink>
      </p>
      <p>
        Tento test využívá stejné vrty jako první porovnání, a proto není nezávislým druhým měřením.
        Jeho přínos spočívá v tom, že navržený mechanismus umí spočítat pozorovaný tvar a jeho časové měřítko.
        Výsledkem je rekonstrukce teploty povrchu půdy. Rozlišení od teploty vzduchu a nejednoznačnost starších dějů vysvětluje <Link href="/metody/rekonstrukce-teploty-z-vrtu/">metoda rekonstrukce z vrtů</Link>.
      </p>

      <h4 id="test-opakovane-vrty" className={styles.testHeading}>Test 3 · Návrat do stejných vrtů</h4>
      <p>
        Při pokračujícím oteplování povrchu musí opakované měření zachytit další vývoj teploty v podloží. Pouhé neměnné střídání hornin takový časový rozdíl nevytvoří.
        Gary Clow zveřejnil v roce 2014 soubor ze 23 hlubokých vrtů severní Aljašky za období 1973–2013.
        Předběžné vyhodnocení ukázalo ve 20 metrech od konce osmdesátých let oteplení o 2–3 °C, rozdílné podle místa.
        Jde už o rozdíl mezi skutečnými návštěvami, nikoli jen o zpětný výpočet nepozorovaného století.
        <SourceLink id="DOI_10_5194_essd_6_201_2014"> (Clow 2014, oddíly 1 a 3)</SourceLink>
      </p>
      <p>
        Důležitou kontrolou bylo teplo z vrtání, které s časem odeznívá. U většiny vrtů jeho zbytek do roku 1989 klesl zhruba na 0,1 °C nebo méně,
        tedy výrazně pod uvedené následné oteplení. Novější soustava měla standardní nejistotu přístrojového měření přibližně 0,003 °C.
        Celou nejistotu profilu tím nevyčerpává, protože v kapalině vrtu může proudit teplo i jinak než vedením. Postup popisují <Link href="/metody/odporova-termometrie-a-termistory/">termistorová měření</Link>.
        <SourceLink id="DOI_10_5194_essd_6_201_2014"> (Clow 2014, oddíly 2–3)</SourceLink>
      </p>

      <h4 id="test-snehovy-plot" className={styles.testHeading}>Test 4 · Sníh zachycený plotem</h4>
      <p>
        Při stejném počasí má silnější sníh v zimě udržet půdu teplejší, protože ztěžuje vedení tepla do chladného vzduchu.
        Dlouho ležící závěj ale na jaře oddálí ohřev. Výsledek za celý rok proto musíme změřit.
        Kenneth Hinkel a John Hurd porovnávali v letech 1999–2005 devět míst u sněhového plotu v Barrow se třemi kontrolními místy na tundře.
        Čidla měřila v hloubkách 5, 30 a 50 centimetrů. <SourceLink id="DOI_10_1657_Hinkel_Hurd_2006">(Hinkel a Hurd 2006)</SourceLink>
      </p>
      <p>
        Půda pod závějemi byla v zimě o 2–14 °C teplejší než kontrola, v létě zpravidla o 2–3 °C chladnější.
        Rozsahy vyjadřují rozdíly míst a podmínek, nikoli nejistotu jednoho průměru. Zpočátku zmrzlá půda v 50 centimetrech na většině ovlivněných míst začala v létě rozmrzat.
        <Link href="/pozorovani/snehova-pokryvka-a-permafrost/#snih-a-teplota-pudy"> Záznamy pokusu</Link> zahrnují také místní sesedání a vznik tůní.
        <SourceLink id="DOI_10_1657_Hinkel_Hurd_2006"> (Hinkel a Hurd 2006, obr. 4 a 8)</SourceLink>
      </p>
      <p>
        Předpověď zimního účinku sněhu obstála. Celý výsledek však zahrnuje i vodu ze závějí, takže jej nelze vydávat za dokonale oddělený pokus se samotnou izolací.
        Přínos oproti prosté korelaci je konkrétní změna povrchu a srovnání s blízkou kontrolou. Silné umělé závěje zároveň neposkytují číselnou předpověď pro každou přirozenou změnu sněžení.
      </p>
      <p>
        Vysvětlení od povrchu tak obstálo ve třech různých úlohách: vypočítalo hloubkový dosah změny, souhlasilo s pozdějším měřením a správně určilo zimní účinek sněhu.
        Globální vrtné řady z úvodu dokládají, že se oteplování týká mnoha oblastí. Jejich prostorové rozdíly ovšem vyžadují sledovat místní povrch a složení půdy,
        jak shrnuje odborný přehled Sharon Smithové a spoluautorů z roku 2022. <SourceLink id="DOI_10_1038_s43017_021_00240_1">(Smith a kol. 2022)</SourceLink>
      </p>
    </HypothesisStory>

    <h2 id="jak-mechanismus-funguje">Jak se změna na povrchu promění v rozmrzání</h2>
    <p>
      Teplo z hloubky pomáhá určit spodní hranici permafrostu, ale samo nevysvětlilo oteplení soustředěné v horní části vrtů.
      Změny podmínek u povrchu obstály v porovnání s hloubkovými profily, opakovaným měřením i sněhovým pokusem.
      Nejlépe podpořené vysvětlení proto spojuje povrchovou tepelnou bilanci s přenosem tepla a táním půdního ledu.
      Nyní projdeme, co určuje rychlost každého z těchto kroků.
    </p>
    <p>
      Rozmrzání je změna stavu dříve zmrzlé půdy nebo horniny. Tam, kde obsahuje led, musí přiváděná energie zajistit i jeho přeměnu na vodu.
      Nejprve ale záleží na bilanci: kolik energie povrch přijme ze záření a z okolního vzduchu, kolik jí vyzáří, odvede výparem a předá do podloží.
      <strong>Půda se může oteplovat větším letním přísunem i menším zimním únikem tepla.</strong> Zvýšení teploty vzduchu je jednou příčinou této změny,
      sněhový pokus názorně ukázal další. <SourceLink id="DOI_10_3133_ofr94694">(Lachenbruch 1994, s. 12–20)</SourceLink>
    </p>

    <h3 id="vedeni-tepla">Proč hlubší vrstvy reagují později</h3>
    <p>
      Při vedení tepla předává teplejší část materiálu energii chladnější sousední části. Tepelná vodivost udává, jak snadno se to děje,
      objemová tepelná kapacita určuje energii potřebnou k ohřátí jednoho krychlového metru o jeden stupeň.
      Vodivost dělená touto kapacitou dává teplotní vodivost: vyšší hodnota znamená rychlejší vyrovnávání teplot.
      Krátké denní výkyvy tak zanikají blízko povrchu. Roční cyklus pronikne hlouběji a změna trvající desetiletí ještě dál.
      <SourceLink id="DOI_10_3133_ofr94694"> (Lachenbruch 1994, s. 21–29 a příloha)</SourceLink>
    </p>
    <p>
      Pro představu vezměme stejnorodé podloží s tepelnými vlastnostmi použitými v aljašském výpočtu.
      Jednoduchý model pravidelného ročního kolísání předpovídá, že v hloubce 4 metrů zbude asi 37 % povrchového výkyvu a teplotní maximum se zpozdí přibližně o 58 dnů.
      To je <strong>ilustrační výpočet vedení tepla bez tání</strong>, nikoli nově naměřená řada ani univerzální vlastnost půdy.
      <SourceLink id="DOI_10_3133_ofr82535"> (Parametr podle Lachenbrucha a kol. 1982, rovnice 19b)</SourceLink>
    </p>
    <details className="article-details">
      <summary>Výpočet zeslabení a zpoždění ročního cyklu</summary>
      <p>
        V homogenním poloprostoru se stálými vlastnostmi a čistým vedením tepla klesá amplituda sinusového povrchového kolísání exponenciálně.
        Amplituda je polovina rozdílu mezi nejvyšší a nejnižší teplotou cyklu. Hloubku označíme <InlineMath tex="z" /> v metrech,
        periodu <InlineMath tex="P" /> v sekundách a teplotní vodivost <InlineMath tex="\alpha" /> v m²/s. Veličina <InlineMath tex="d" /> je hloubka,
        v níž zbývá přibližně 37 % původní amplitudy. Zpoždění maxima označíme <InlineMath tex="\tau" />.
        V příkladu používáme <InlineMath tex={String.raw`\alpha=0{,}0000016\,\mathrm{m^2/s}`} />.
      </p>
      <Equation tex={[String.raw`d=\sqrt{\frac{\alpha P}{\pi}}`, String.raw`\frac{A(z)}{A(0)}=\exp\!\left(-\frac{z}{d}\right)`, String.raw`\tau=\frac{Pz}{2\pi d}`]} />
      <p>
        Pro rok o 365,25 dne vychází <InlineMath tex={String.raw`d\approx4{,}01\,\mathrm{m}`} />.
        Při osmi metrech zbývá asi 14 % amplitudy a zpoždění činí přibližně 116 dnů.
        Odvození odpovídá rovnici vedení tepla použité v <SourceLink id="DOI_10_3133_ofr82535">Lachenbruchově práci</SourceLink>.
        <a href={`${media}/vypocty.csv`}> Číselné vstupy a výsledky</a> a <a href={`${media}/vypocty.mjs`}>spustitelný výpočet</a> umožňují příklad zopakovat.
      </p>
    </details>

    <h3 id="energie-na-tani">Proč se teplota při tání mění pomalu</h3>
    <p>
      Po přiblížení k bodu tání může půda přijímat energii, a přesto se její teplota mění jen málo. Energie se spotřebovává na přeměnu ledu na vodu.
      Tuto složku nazýváme skupenským teplem. Při podzimním zamrzání se naopak uvolňuje a zpomaluje ochlazování.
      V jemných pórech a při přítomnosti solí probíhá přeměna v určitém rozmezí teplot pod 0 °C.
      Téměř stálá teplota proto sama nedokazuje, že se v půdě nic nemění. <SourceLink id="DOI_10_1038_s43017_021_00240_1">(Smith a kol. 2022, vliv půdního ledu)</SourceLink>
    </p>
    <p>
      Velikost této spotřeby ukáže záměrně jednoduchý příklad. Vezměme půl metru silnou vrstvu, jejíž objem tvoří ze 40 % led, již na bodu tání.
      Na ploše jednoho metru čtverečního obsahuje 0,2 m³ ledu. Jeho roztání vyžaduje přibližně <strong>61 milionů joulů na metr čtvereční</strong>.
      Výpočet používá objemové skupenské teplo ledu přibližně 305 milionů J/m³ podle hodnoty v původním aljašském modelu.
      Tloušťka a podíl ledu jsou zde zvolené vstupy příkladu. <SourceLink id="DOI_10_3133_ofr82535">(Lachenbruch a kol. 1982, rovnice 31c)</SourceLink>
    </p>
    <Equation tex={String.raw`\frac{E}{S}=h\,\theta_{\mathrm{i}}\,L_{\mathrm{v}}\approx0{,}5\cdot0{,}4\cdot305=61\,\mathrm{MJ/m^2}`} />
    <p>
      Zde <InlineMath tex="E" /> znamená energii, <InlineMath tex="S" /> plochu, <InlineMath tex="h" /> tloušťku vrstvy v metrech,
      <InlineMath tex={String.raw`\theta_{\mathrm{i}}`} /> objemový podíl ledu a <InlineMath tex={String.raw`L_{\mathrm{v}}`} /> energii potřebnou k roztání jednoho m³ ledu.
      Zkratka MJ označuje milion joulů. Číslo zahrnuje jen tání. Ohřátí původně studenější půdy a úniky tepla by vyžadovaly další energii.
      Proto z jednoho teplého léta ani z teplotního trendu nemůžeme bez znalosti půdy určit, kolik metrů rozmrzne.
    </p>

    <h3 id="snih-voda-a-povrch">Jak sníh a voda mění výsledek</h3>
    <p>
      Sníh obsahuje mnoho vzduchu a obvykle vede teplo hůře než zmrzlá mokrá půda. V zimě tedy brzdí její ochlazování.
      Na jaře naopak odráží sluneční záření a sám musí roztát, než se odkrytá půda začne výrazněji prohřívat.
      Záleží na tloušťce, hustotě i době příchodu a odtání sněhu. Suchá organická vrstva může omezovat letní přísun tepla,
      zatímco změna její vlhkosti nebo odstranění vegetace tepelnou bilanci posune. <SourceLink id="DOI_10_3133_ofr94694">(Lachenbruch 1994, s. 12–17)</SourceLink>
    </p>
    <p>
      Proudící voda navíc přenáší energii svým pohybem. Půda se pak může prohřívat rychleji, než odpovídá samotnému vedení tepla.
      Roztání většího množství půdního ledu může způsobit sesednutí. V prohlubni se zachytí voda a změní další přenos tepla,
      případně voda odteče a poměry se vyvinou jinak. <Link href="/metody/mereni-hloubky-sezonniho-rozmrzani/">Měření rozmrzání proto sleduje i polohu povrchu vůči pevné značce</Link>.
      Růst aktivní vrstvy měřený od sesedajícího povrchu může skutečný úbytek zmrzlé půdy podhodnotit.
      <SourceLink id="DOI_10_3133_ofr94694"> (Přenos vody a tepla: Lachenbruch 1994)</SourceLink>
    </p>

    <p id="nejistoty">
      Vedení tepla, zimní izolační účinek sněhu a spotřeba energie při tání jsou přímo ověřitelné děje.
      Nejistější je jejich místní poměr a budoucí rychlost rozmrzání. Hluboký vrt zachycuje zpožděnou odezvu, síť vrtů nepokrývá rovnoměrně všechna území
      a obsah ledu bývá znám hůře než teplota. <SourceLink id="DOI_10_1038_s43017_021_00240_1">(Smith a kol. 2022)</SourceLink>
    </p>
    <details className="article-details" id="meze-vysvetleni">
      <summary>Co by vysvětlení změnilo a kde jednoduchý model nestačí</summary>
      <p>
        Povrchová rekonstrukce předpokládá známé tepelné vlastnosti a dostatečně jednoduchý přenos tepla.
        Proudění podzemní vody, svah, jezero nebo změna hranice pobřeží mohou profil změnit také.
        Dlouhodobý ohřev z hloubky zůstává důležitý například pro permafrost zatopený mořem. Závěr o dnešním oteplování horní části suchozemských vrtů se na takový případ nepřenáší automaticky.
        <SourceLink id="DOI_10_3133_ofr82535"> (Lachenbruch a kol. 1982, s. 26–32)</SourceLink>
      </p>
      <p>
        Pro konkrétní místo by vysvětlení oteplováním od povrchu oslabila nová souvislá řada, v níž změna nejprve roste pod permafrostem a postupuje vzhůru,
        zatímco měřená bilance u povrchu se nemění. Bylo by třeba ověřit tok zdola, kalibraci a proudění vody.
        Pokud by naopak po zahrnutí sněhu a tání zůstávalo výrazně rychlejší prohřívání do hloubky, než model předpovídá,
        hledali bychom chybějící přenos energie, například vodou. To je konkrétní možnost doplnění mechanismu, nikoli důvod ignorovat měření.
      </p>
    </details>

    <h2 id="shrnuti">Shrnutí</h2>
    <div className="method-conclusion"><p>
      Permafrost se otepluje a rozmrzá, když jeho tepelná bilance umožní dlouhodobé přibývání energie.
      U sledovaných suchozemských změn rozhodují podmínky u povrchu: větší přísun tepla nebo menší zimní ochlazování.
      Teplo postupuje do hloubky se zpožděním a jeho část spotřebuje tání ledu. Proto se teplota, hloubka rozmrzání a výška terénu nemusí měnit stejným tempem.
      Vysvětlení podporuje shoda výpočtu s hloubkovými profily, opakovaná měření i terénní změna sněhové pokrývky.
    </p></div>

    <h2 id="prameny">Prameny a veřejné podklady</h2>
    <div className="article-reference-groups">
      <section><h3>Vrty, přenos tepla a terénní pokus</h3><ul>
        <li><SourceLink id="DOI_10_3133_ofr82535">Lachenbruch a kol. (1982): Thermal regime of permafrost at Prudhoe Bay, Alaska</SourceLink> — původní profily, tabulky, měření vodivosti a výpočty.</li>
        <li><SourceLink id="DOI_10_3133_ofr94694">Lachenbruch (1994): Permafrost, the active layer, and changing climate</SourceLink> — matematický a fyzikální výklad povrchové bilance a odezvy do hloubky.</li>
        <li><SourceLink id="DOI_10_5194_essd_6_201_2014">Clow (2014): Temperature data acquired from the DOI/GTN-P Deep Borehole Array, 1973–2013</SourceLink> — opakované profily a kontrola měření.</li>
        <li><SourceLink id="DOI_10_1657_Hinkel_Hurd_2006">Hinkel a Hurd (2006): Permafrost Destabilization and Thermokarst Following Snow Fence Installation</SourceLink> — uspořádání pokusu, teplotní řady, tabulky a měření terénu.</li>
      </ul></section>
      <section><h3>Širší ověření a data</h3><ul>
        <li><SourceLink id="DOI_10_1038_s41467_018_08240_4">Biskaborn a kol. (2019): Permafrost is warming at a global scale</SourceLink> — výběr vrtů, globální trend a nejistota.</li>
        <li><SourceLink id="DOI_10_1594_pangaea_884711">GTN-P (2018): roční teploty vrtů za období 2007–2016</SourceLink> — veřejná tabulka v PANGAEA s polohou, hloubkou a přesností měření.</li>
        <li><SourceLink id="DOI_10_1038_s43017_021_00240_1">Smith a kol. (2022): The changing thermal state of permafrost</SourceLink> — odborná syntéza ověřených dějů a otevřených otázek.</li>
      </ul></section>
    </div>
    <p>
      Starší studie zpřístupňují výsledky v tabulkách a grafech plných textů. Samostatnou úplnou strojovou řadu sněhového pokusu zde nemáme doloženou.
      Globální tabulku GTN-P lze stáhnout přímo. Naše dvě schémata neobsahují digitalizované terénní křivky,
      <a href={`${media}/vypocty.csv`}>číselné příklady</a> mají zveřejněné vstupy a jsou označené jako výpočty.
    </p>
  </div></article>;
}
