import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Equation, InlineMath } from "./Equation";
import { HypothesisDiagram, type MechanismHypothesis } from "./HypothesisDiagram";
import { HypothesisStory } from "./HypothesisStory";
import { SourceLink } from "./SourceLink";
import styles from "./IceSheetMechanismsArticle.module.css";

const media = "/media/ledove-prikrovy-mechanismy";
const hypotheses: readonly MechanismHypothesis[] = [
  {
    id: "povrchova-bilance",
    name: "Úbytek vysvětluje změna bilance na povrchu",
    prediction: "Změna sněžení a úniku vody z povrchu má při nezměněném odtoku pevného ledu vysvětlit celou změnu hmotnosti. Větší tání se má projevit měřitelným odtokem vody.",
    test: "Spočítáme tání z přísunu energie, změříme říční odtok a porovnáme bilanci celého Grónska s družicovým měřením gravitace.",
    observation: "Povrchové procesy vysvětlily silné tání v západním Grónsku i většinu sezonního kolísání hmotnosti. K vysvětlení víceletého úbytku však bylo nutné připočítat změnu odtoku ledu.",
    verdict: "Důležitý příspěvek, který sám nestačí",
    explanation: "Povrchová bilance je podstatná zejména v Grónsku. Sama nevysvětluje všechny pozorované ztráty ani změny rychlosti ledovců.",
    state: "insufficient",
  },
  {
    id: "povrch-a-odtok-ledu",
    name: "Povrchovou bilanci doplňuje proměnlivý odtok ledu",
    prediction: "Když zeslábne mechanická opora ledovce, může zrychlit jeho tok do moře. Úbytek pak nemusí odpovídat samotnému tání na povrchu.",
    test: "Porovnáme rychlosti ledovců před rozpadem šelfu a po něm, včetně sousedních ledovců za zachovaným šelfem. U ztenčujících se šelfů oddělíme změny sněhu od změn ledu.",
    observation: "Po rozpadu Larsen B některé přítokové ledovce zrychlily dvakrát až šestkrát. Jinde v Antarktidě ztenčování šelfů přetrvávalo i po zohlednění sněhu a zvýšeného přítoku ledu.",
    verdict: "Podpořené společné vysvětlení",
    explanation: "Hmotnost určuje bilance povrchu i pohyb ledu. Změna plovoucího šelfu může urychlit ztrátu ledu, který dosud spočívá na podloží.",
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
      Rozměry ani délky šipek nepředstavují měřená množství. <a href={`${media}/podklady.txt`}>Prameny a původ grafiky</a>.
    </figcaption>
  </figure>;
}

export function IceSheetMechanismsArticle() {
  return <article className="article-layout"><div className="article-prose">
    <h2 id="co-vysvetlujeme">Z příkrovů odchází více hmoty, než přibývá</h2>
    <p className="article-prose__intro">
      Grónsko a Antarktida podle společného vyhodnocení měření ztratily v letech 1979–2023 celkem <strong>11 309 ± 565 gigatun ledu</strong>.
      Gigatuna je miliarda tun, údaj za ± vyjadřuje kombinovanou nejistotu odhadu.
      <Link href="/pozorovani/nestabilita-prikrovu/"> Pozorování ledových příkrovů</Link> ukazují, že ztráty nejsou všude stejné.
      Jak rozlišíme led, který odtál na povrchu, od ledu, který rychleji odtekl do moře?
      <SourceLink id="DOI_10_1038_s41597_026_08088_0"> (Otosaka a kol. 2026)</SourceLink>
    </p>
    <p>
      Ledový příkrov je rozsáhlá vrstva ledu pokrývající pevninu. Jeho okraj může pokračovat do moře jako plovoucí ledový šelf.
      Zde vysvětlujeme změnu hmotnosti části příkrovu spočívající na podloží.
      Rozlišíme <strong>odtok vody z tání</strong> a <strong>odtok pevného ledu</strong>, který se pod vlastní vahou pomalu deformuje a místy klouže po podloží.
      Přesun dosud ukotveného ledu do oceánu přispívá ke vzestupu hladiny ještě předtím, než tento led roztaje.
    </p>

    <h2 id="hypotezy">Dvě hypotézy a jejich předpovědi</h2>
    <HypothesisDiagram hypotheses={hypotheses} captionId="ice-sheet-hypotheses-caption"
      context={<p>Oba děje mohou působit současně. První hypotézu záměrně omezujeme na změnu povrchové bilance při nezměněném odtoku ledu, abychom zjistili, co samotný povrch vysvětlí. Níže citované studie oba příspěvky zkoumaly společně.</p>}
      caption={<>Rozlišující otázka zní, zda k popisu měřené změny hmotnosti stačí změna přírůstků a ztrát na povrchu, nebo musíme zahrnout i změnu toku ledu přes okraj příkrovu.</>} />

    <h2 id="pribehy">Jak se oddělilo tání povrchu od odtoku ledu</h2>
    <HypothesisStory id="povrchova-bilance" number={1} title="Úbytek vysvětluje změna bilance na povrchu">
      <p>
        Sníh přidává příkrovu hmotu. Voda, která po tání odteče pryč, ji ubírá. Jejich rozdíl spolu s dalšími menšími příspěvky tvoří povrchovou hmotnostní bilanci.
        Teplejší léto proto může zmenšit roční přírůstek, nebo proměnit povrch v místo čisté ztráty.
        Změřit teplotu vzduchu však nestačí. Potřebujeme znát energii dodanou sněhu a ledu a zjistit, kolik vzniklé vody příkrov skutečně opustí.
        <SourceLink id="DOI_10_5194_tc_6_199_2012"> (van As a kol. 2012)</SourceLink>
      </p>
      <p>
        Michiel van den Broeke a spoluautoři v roce 2009 spojili dlouhý výpočet povrchové bilance Grónska s měřením odtoku ledu.
        Družice GRACE, sledující změny gravitačního pole, umožnily výsledek nezávisle porovnat s celkovou změnou hmotnosti.
        Následující mimořádně teplý rok 2010 poskytl podrobný místní test samotného povrchového procesu.
        Začneme tímto místním testem a pak se vrátíme k bilanci celého ostrova.
        <SourceLink id="DOI_10_1126_science_1178176"> (van den Broeke a kol. 2009)</SourceLink>
        <SourceLink id="DOI_10_5194_tc_6_199_2012"> (van As a kol. 2012)</SourceLink>
      </p>
      <Graphic name="povrchova-bilance" alt="Sněžení přidává hmotu. Energie ze záření a vzduchu taví povrch. Část vody znovu zamrzá, zbytek odtéká do řeky. Porovnání povrchové bilance a nezměněného odtoku pevného ledu s celkovou změnou hmotnosti ověřuje, zda samotný povrch stačí."
        tests={[
          { title: "Test 1 · Výpočet tání a měření řeky", prediction: "Vypočtené tání po zohlednění zadržené vody odpoví odtoku z povodí.", test: "Meteorologické stanice a výpočet energie porovnáme s měřením řeky Watson.", result: "Velký odtok v roce 2010 se potvrdil. Říční a modelový odhad se liší v rámci uvedených nejistot." },
          { title: "Test 2 · Celková hmotnost Grónska", prediction: "Pokud stačí změna povrchu, nepotřebujeme k vysvětlení celkového úbytku zvýšený odtok ledu.", test: "Oddělíme povrchovou bilanci a tok ledu, součet ověříme družicovou gravitací.", result: "V letech 2000–2008 připadla přibližně polovina ztráty na povrch a polovina na dynamický příspěvek." },
        ]}>
        Dvě různé úrovně kontroly podle <SourceLink id="DOI_10_5194_tc_6_199_2012">van Ase a kol. (2012)</SourceLink> a <SourceLink id="DOI_10_1126_science_1178176">van den Broekeho a kol. (2009)</SourceLink>.
        Zelené šipky ukazují přísun sněhu a pohyb ledu, modré vodu a oranžová přísun energie.
      </Graphic>

      <h4 id="test-reka" className={styles.testHeading}>Test 1 · Výpočet tání a měření řeky</h4>
      <p>
        Dirk van As a kolegové použili šest automatických meteorologických stanic v oblasti Kangerlussuaq v západním Grónsku.
        Ze záření, teploty, vlhkosti a větru vypočítali přenos energie mezi vzduchem a povrchem. Přidali družicová měření odrazivosti,
        porovnaná se stanicemi. Energie, která po ohřátí povrchu na bod tání zbývá, může tavit sníh a led.
        Výpočet zohlednil také vodu, která znovu zamrzne v chladných vrstvách sněhu. Předpovědí tak nebylo pouhé „bude více tát“, ale množství vody opouštějící vymezené povodí.
        <SourceLink id="DOI_10_5194_tc_6_199_2012"> (van As a kol. 2012, oddíl 2)</SourceLink>
      </p>
      <p>
        Pro rok 2010 vyšel modelový odtok <strong>6,6 ± 1,0 km³ vody</strong>. Měření hloubky a proudění řeky Watson dalo <strong>5,3 ± 1,1 km³</strong>.
        Odhady se v uvedených nejistotách překrývají, nejsou však totožné. Říční měření nepokrývalo celou sezonu a nejisté byly i hranice povodí pod ledem.
        Shoda velikosti a časového průběhu odtoku podporuje vysvětlení místního tání energetickou bilancí.
        <Link href="/pozorovani/nestabilita-prikrovu/#povrchovy-odtok"> Toto porovnání</Link> samo ještě neříká, kolik hmoty ztratilo celé Grónsko.
        <SourceLink id="DOI_10_5194_tc_6_199_2012"> (van As a kol. 2012, obr. 8 a závěr)</SourceLink>
      </p>

      <h4 id="test-gronska-bilance" className={styles.testHeading}>Test 2 · Celková hmotnost Grónska</h4>
      <p>
        Pro celý příkrov van den Broekeho tým vypočítal povrchovou bilanci regionálním modelem atmosféry a sněhu.
        Výsledek kontroloval na 265 terénních měřeních. Tok pevného ledu určil pro 38 povodí pokrývajících přibližně 90 % příkrovu,
        zejména z rychlosti a tloušťky ledu v příčných profilech ledovců. Právě součin průřezu, rychlosti a hustoty říká, kolik hmoty profilem projde.
        <Link href="/metody/radarova-interferometrie-a-sledovani-pohybu-povrchu/#tok-ledu"> Měření pohybu ledu</Link> tak dodalo jiný vstup než výpočet tání.
        <SourceLink id="DOI_10_1126_science_1178176"> (van den Broeke a kol. 2009, metody)</SourceLink>
      </p>
      <p>
        Součet obou příspěvků se v překrývajícím období 2003–2008 dobře shodoval s gravitačním měřením GRACE.
        Studie připsala z celkové ztráty přibližně <strong>1 500 gigatun v letech 2000–2008 polovinu povrchové bilanci a polovinu změně odtoku ledu</strong>.
        Sezonní kolísání hmotnosti naproti tomu zachytila téměř celé povrchová bilance.
        Jeden děj tedy může vysvětlit roční rytmus, a přesto nestačit na víceletý úbytek. Uvedený poměr platí pro tehdejší Grónsko a období, ne pro každý další rok ani pro Antarktidu.
        <SourceLink id="DOI_10_1126_science_1178176"> (van den Broeke a kol. 2009, obr. 1–2)</SourceLink>
      </p>
      <p>
        <strong>První hypotéza obstála jako vysvětlení významné části ztrát, nikoli celé změny.</strong>
        Místní vodní bilance ukazuje, že povrchové tání skutečně odvádí měřitelnou hmotu.
        Bilance celého příkrovu ale potřebuje proměnlivý tok pevného ledu. Aby toto rozdělení nebylo jen účetním rozdílem, musíme ověřit také fyzický důvod změn rychlosti.
      </p>
    </HypothesisStory>

    <HypothesisStory id="povrch-a-odtok-ledu" number={2} title="Povrchovou bilanci doplňuje proměnlivý odtok ledu">
      <p>
        Led nemusí roztát, aby změnil tvar a začal proudit. John Glen v roce 1952 popsal laboratorní stlačování ledových vzorků při teplotě −1,5 °C.
        Trvalé zatížení vedlo k postupné deformaci. Její rychlost prudce rostla s mechanickým napětím, tedy silou připadající na jednotku plochy.
        Tyto pokusy pomohly převést pozorovaný pohyb ledovců do výpočtů toku pevného materiálu.
        O rychlosti pak rozhoduje nejen množství ledu a sklon jeho povrchu, ale také síly, které pohyb brzdí.
        <SourceLink id="DOI_10_3189_s0022143000034067"> (Glen 1952)</SourceLink>
      </p>
      <p>
        Robert Thomas v roce 1973 porovnal výpočty s chováním čtyř ledových šelfů.
        Rozlišil volně se rozpínající šelf a šelf omezený bočními stěnami nebo místy, kde se znovu dotýká podloží.
        Takové kontakty přenášejí odpor proti toku také proti směru proudění, do přítokového ledovce.
        Z toho plyne předpověď: odstranění šelfu, který tento odpor poskytoval, může zrychlit ledovec ještě na pevnině. Rozpad Larsen B nabídl mimořádnou příležitost ji ověřit.
        <SourceLink id="DOI_10_3189_s002214300002270x"> (Thomas 1973)</SourceLink>
      </p>
      <Graphic name="povrch-a-odtok-ledu" alt="Ledovec spočívající na podloží přechází přes linii ukotvení do plovoucího šelfu. Kontakty šelfu s boky zálivu a podmořským vyvýšením přenášejí odpor proti toku. Rozpad nebo ztenčení může tuto oporu zeslabit. Voda pod šelfem jej může tavit zespodu."
        tests={[
          { title: "Test 3 · Rozpad Larsen B", prediction: "Ledovce po ztrátě opory zrychlí více než sousední ledovce za zachovaným šelfem.", test: "Sledujeme posun znaků na snímcích Landsatu a změnu výšky laserem ICESat.", result: "Čtyři sledované ledovce zrychlily dvakrát až šestkrát. Sousední dvojice za zachovaným šelfem změnila rychlost jen málo." },
          { title: "Test 4 · Ztenčování šelfů", prediction: "Tání zespodu může ztenčit šelf i bez odpovídající ztráty sněhu na povrchu.", test: "Změříme výšku, odečteme změny sněhu a porovnáme přítok ledu i polohu čela.", result: "U řady šelfů zbývající ztenčování odpovídalo zvýšenému úbytku na spodní straně." },
        ]}>
        Mechanická opora a přístup oceánské vody podle <SourceLink id="DOI_10_3189_s002214300002270x">Thomase (1973)</SourceLink>,
        <SourceLink id="DOI_10_1029_2004gl020670"> Scambose a kol. (2004)</SourceLink> a <SourceLink id="DOI_10_1038_nature10968">Pritcharda a kol. (2012)</SourceLink>.
        Jde o dva možné způsoby oslabení šelfu. Schéma nepřisuzuje rozpad Larsen B výhradně oceánskému tání.
        Zelené šipky ukazují pohyb ledu, fialová odpor proti toku a oranžová přísun oceánského tepla.
      </Graphic>

      <h4 id="test-larsen" className={styles.testHeading}>Test 3 · Ledovce po rozpadu Larsen&nbsp;B</h4>
      <p>
        V roce 2002 se rozpadla velká část šelfu Larsen B u Antarktického poloostrova.
        Ted Scambos a kolegové porovnali pět snímků Landsatu z let 2000–2003. Ze vzdálenosti, o kterou se mezi snímky posunuly rozpoznatelné povrchové znaky,
        a z uplynulého času vypočítali rychlost ledu. Sledovali přítokové ledovce, které oporu ztratily, i dva sousední, před nimiž jižní část šelfu zůstala.
        Tato sousední dvojice umožnila porovnat samotnou ztrátu šelfu s širšími změnami v oblasti.
        <SourceLink id="DOI_10_1029_2004gl020670"> (Scambos a kol. 2004, metody a obr. 1–2)</SourceLink>
      </p>
      <p>
        Ledovce Hektoria, Green, Jorum a Crane zvýšily rychlost v měřených částech přibližně <strong>dvakrát až šestkrát</strong>.
        Flask a Leppard za zachovaným šelfem změnily rychlost jen málo.
        Zrychlování pokračovalo i přes zimu, takže je nevysvětlilo pouze sezonní tání na povrchu.
        <Link href="/pozorovani/nestabilita-prikrovu/#larsen-b"> Laserová měření výšky</Link> navíc u Hektorie ukázala místní pokles až <strong>38 ± 6 metrů přibližně za půl roku 2003</strong>.
        To není průměr celé Antarktidy, ale konkrétní rychle se měnící část ledovce.
        <SourceLink id="DOI_10_1029_2004gl020670"> (Scambos a kol. 2004, výsledky)</SourceLink>
      </p>
      <p>
        Pokud z úseku ledovce odteče více ledu, než do něj přiteče a přibude sněžením, musí se jeho vrstva ztenčit.
        Společný výskyt ztráty opory, zrychlení a ztenčení proto podporuje mechanické vysvětlení.
        Samotné oteplení vzduchu by nevysvětlilo, proč se blízké ledovce lišily podle toho, zda šelf zůstal.
        Test ukazuje důsledky odstranění šelfu. O příčině jeho rozpadu je třeba rozhodovat zvlášť.
        <SourceLink id="DOI_10_1029_2004gl020670"> (Scambos a kol. 2004, diskuse)</SourceLink>
      </p>

      <h4 id="test-spodek-selfu" className={styles.testHeading}>Test 4 · Co ubývá na spodní straně šelfů</h4>
      <p>
        Hamish Pritchard a spoluautoři v roce 2012 zpracovali přibližně 4,5 milionu <Link href="/pozorovani/nestabilita-prikrovu/#ztencovani-selfu">měření laserového výškoměru ICESat</Link> z let 2003–2008.
        Nižší povrch ovšem může znamenat méně sněhu, jeho větší stlačení i méně ledu.
        Proto použili model sněhových vrstev a firnu, tedy starého sněhu, který ještě obsahuje vzduchové mezery.
        Teprve po odečtení těchto změn odvodili z výšky plovoucí části změnu celé tloušťky šelfu.
        U plovoucího ledu nese část hmotnosti vztlak vody. Nad hladinou vidíme jen část jeho tloušťky,
        proto je <Link href="/metody/radarova-a-laserova-altimetrie/#pevninsky-led">převod měřené výšky</Link> nutným krokem k určení úbytku ledu.
        <SourceLink id="DOI_10_1038_nature10968"> (Pritchard a kol. 2012, metody)</SourceLink>
      </p>
      <p>
        Některé šelfy v oblasti Amundsenova a Bellingshausenova moře se podle tohoto zpracování ztenčovaly až o <strong>6,8 metru ročně</strong>.
        Úbytek nešlo připsat jen sněhu. Přítok z pevniny přitom rostl a čela sledovaných šelfů se často držela na místě nebo postupovala.
        Do bilance tedy musel vstoupit větší úbytek zespodu. Silné ztenčování se soustředilo na hluboce ponořené šelfy, k nimž se mořskými prohlubněmi dostávala teplejší voda.
        Je to úsudek z několika měření a bilance, nikoli přímé měření tání pod každým bodem šelfu.
        <SourceLink id="DOI_10_1038_nature10968"> (Pritchard a kol. 2012, obr. 1–4)</SourceLink>
      </p>
      <p>
        <strong>Druhá hypotéza obstála, protože vysvětluje také změny, které samotná povrchová bilance nezachytí.</strong>
        Laboratorní deformace, výpočty sil, přirozený pokus po rozpadu šelfu a měření jeho ztenčování ověřují různé články stejného děje.
        Opravené výšky i modelové změny firnu z posledního testu jsou zveřejněny v <SourceLink id="DOI_10_1594_pangaea_775984">datovém souboru PANGAEA</SourceLink>.
        Čtenář tak může kontrolovat i krok mezi družicovou výškou a interpretací ztrát.
      </p>
    </HypothesisStory>

    <h2 id="jak-mechanismus-funguje">Jak vzniká celková ztráta příkrovu</h2>
    <p>
      Povrchové tání a odtok vody jsou prokazatelnou součástí úbytku, ale samy nestačí.
      Přijímané vysvětlení zahrnuje také proměnlivý tok pevného ledu a síly, které jej ovládají.
      Podíl obou dějů se mezi polárními oblastmi liší. Potřebujeme sestavit bilanci vymezeného příkrovu a ověřit, proč se její jednotlivé členy mění.
    </p>

    <h3 id="bilance">Kolik hmoty přibývá a kolik odchází</h3>
    <p>
      Pro led spočívající na podloží lze bilanci vyjádřit následujícím vztahem.
      Hmotnost <InlineMath tex="M" /> roste s povrchovou bilancí <InlineMath tex="B_s" />, ale klesá s odtokem pevného ledu <InlineMath tex="D" /> přes hranici do oceánu.
      Člen <InlineMath tex="B_b" /> označuje čistou ztrátu táním na spodní straně ukotveného ledu. Je kladný při úbytku a záporný při přimrzání.
      Všechny tři členy mají jednotku hmotnosti za čas, například gigatuny za rok. Záporný výsledek znamená úbytek příkrovu.
      <SourceLink id="DOI_10_1126_science_1178176"> (van den Broeke a kol. 2009, bilance s malým zanedbaným bazálním členem)</SourceLink>
    </p>
    <Equation tex={String.raw`\frac{\mathrm{d}M}{\mathrm{d}t}=B_s-D-B_b`} />
    <p>
      Sníh může přibývat, a příkrov přesto ztrácet hmotu, pokud rychleji odtéká led.
      Zároveň každá tuna roztátého povrchového ledu nemusí znamenat tunu ztracené hmotnosti.
      Voda se může zadržet ve sněhu nebo znovu zamrznout. Do povrchové ztráty proto patří až voda, která odteče pryč,
      a další úniky, například přímý přechod ledu na vodní páru. Sněžení a opětovné zamrzání vysvětlují, proč z pouhé plochy letního tání nelze vypočítat celoroční bilanci.
      <SourceLink id="DOI_10_5194_tc_6_199_2012"> (van As a kol. 2012)</SourceLink>
    </p>

    <h3 id="opora-selfu">Proč záleží i na ledu, který už plave</h3>
    <p>
      Plovoucí šelf nemá pod celou plochou pevné podloží, přesto může brzdit led přitékající z pevniny.
      Odpor vzniká zejména tam, kde je šelf sevřen mezi boky zálivu nebo se opírá o podmořské vyvýšeniny.
      Ztenčení může kontakt oslabit a rozpad jej může odstranit. Ledovec pak při změněné rovnováze sil zrychlí.
      Volně plovoucí okraj bez takových kontaktů nemá stejný účinek, proto samotná plocha ztraceného šelfu není univerzálním měřítkem následného zrychlení.
      <SourceLink id="DOI_10_3189_s002214300002270x"> (Thomas 1973)</SourceLink>
    </p>
    <p>
      Zde je důležité nepřičíst stejný led dvakrát.
      Když pevný led překročí hranici mezi podložím a plovoucím šelfem, opouští hmotnostní bilanci ukotvené části.
      Jeho pozdější tání pod šelfem už do této bilance jako další ztrátu nepřidáváme.
      Tání šelfu však může změnit mechanickou oporu a tím zvýšit další přítok z pevniny.
      Právě tento nepřímý účinek spojuje oceánské teplo s pokračujícím úbytkem pevninského příkrovu.
      <SourceLink id="DOI_10_1038_nature10968"> (Pritchard a kol. 2012)</SourceLink>
    </p>
    <p>
      K tání zespodu stačí, aby voda byla teplejší než místní bod mrznutí, který závisí na slanosti a tlaku.
      Rozhoduje proto také cesta vody pod šelf: hloubka jeho spodní strany, tvar mořského dna a proudění.
      Změna teploty vzduchu nad celým kontinentem tuto místní dodávku tepla sama nepopisuje.
      <SourceLink id="DOI_10_1038_nature10968"> (Pritchard a kol. 2012)</SourceLink>
    </p>

    <h3 id="linie-ukotveni">Kdy ústup může sám zesilovat</h3>
    <p>
      Hranice, kde led ztrácí kontakt s podložím a začíná plavat, se nazývá <strong>linie ukotvení</strong>.
      Je jinde než čelo šelfu, z něhož se odlamují ledové kry.
      Jestliže příkrov ustupuje po podloží, které se směrem do vnitrozemí prohlubuje, musí být led u nové linie ukotvení silnější, aby ještě dosáhl na dno.
      Tenčí vrstvu by vztlak vody nadzvedl. Silnější sloupec ledu zároveň více tlačí na led níže po proudu.
      Výpočty Christiana Schoofa z roku 2007 ukázaly, že v popsaném uspořádání větší tloušťka zvyšuje odtok.
      Ten může způsobit další ztenčení a ústup. Jde o zesilující zpětnou vazbu, jejíž uplatnění závisí také na tvaru povodí a opoře šelfu, nikoli o důkaz nevyhnutelného ústupu každého ledovce.
      <SourceLink id="DOI_10_1029_2006jf000664"> (Schoof 2007)</SourceLink>
    </p>

    <h3 id="velikost-prispevku">Proč stejná celková ztráta může mít jiné příčiny</h3>
    <p>
      Současná syntéza IMBIE propojuje měření výšky, gravitace a toku ledu.
      Pro rozdělení změn navíc používá regionální modely povrchové bilance.
      Následující tabulka přebírá publikované průměry v gigatunách za rok. Záporné číslo označuje příspěvek ke ztrátě, kladné k přírůstku.
      Povrchový a dynamický sloupec jsou <strong>odchylky od referenčních podmínek</strong>, nikoli celkové sněžení nebo celkový tok ledu do moře.
      Reference je 1960–1990 pro Grónsko a 1979–2008 pro Antarktidu.
      <SourceLink id="DOI_10_1038_s41597_026_08088_0"> (Otosaka a kol. 2026, metody a tab. 4)</SourceLink>
    </p>
    <div className={styles.tableScroll} tabIndex={0} role="region" aria-label="Příspěvky k hmotnostní bilanci, tabulka posuvná do stran">
      <table className={styles.budgetTable}>
        <caption>Roční změna hmotnosti a její rozdělení. Všechny hodnoty v Gt/rok, včetně publikovaných nejistot.</caption>
        <thead><tr><th scope="col">Příkrov a období</th><th scope="col">Celková změna</th><th scope="col">Povrchová odchylka</th><th scope="col">Dynamická odchylka</th></tr></thead>
        <tbody>
          <tr><th scope="row">Grónsko 2010–2019</th><td>−264 ± 18</td><td>−141 ± 24</td><td>−123 ± 30</td></tr>
          <tr><th scope="row">Grónsko 2020–2023</th><td>−199 ± 29</td><td>−76 ± 43</td><td>−123 ± 52</td></tr>
          <tr><th scope="row">Antarktida 2010–2019</th><td>−202 ± 22</td><td>−32 ± 13</td><td>−170 ± 26</td></tr>
          <tr><th scope="row">Antarktida 2020–2023</th><td>−59 ± 73</td><td>+241 ± 14</td><td>−300 ± 75</td></tr>
        </tbody>
      </table>
    </div>
    <p>
      V Antarktidě v letech 2020–2023 kladná povrchová odchylka značně vyrovnávala dynamickou ztrátu.
      Menší celkový úbytek tedy sám neznamená, že se odtok ledu zpomalil. Celkový odhad −59 ± 73 Gt/rok navíc v uvedené nejistotě zahrnuje nulu.
      Dynamický sloupec zde autoři získali jako <strong>zbytek po odečtení modelové povrchové odchylky od celkové bilance</strong>.
      Není to další nezávislé přímé měření rychlosti. Jeho nejistota zahrnuje nejistoty obou vstupů, proto uvedené tři nejistoty nelze považovat za nezávislé.
      <SourceLink id="DOI_10_1038_s41597_026_08088_0"> (Otosaka a kol. 2026)</SourceLink>
    </p>
    <p>
      <SourceLink id="DOI_10_5285_128c5e33_5224_4197_82f0_19dcc95b80a0">Veřejná data IMBIE</SourceLink> obsahují časové řady i jejich nejistoty.
      Pro kontrolu tabulky přikládáme <a href={`${media}/tabulka-4.csv`}>přepis čtyř řádků</a> a <a href={`${media}/bilance.mjs`}>výpočet součtů příspěvků</a>.
      Tento krátký výpočet ověřuje účetní vztah. Nezískává znovu měření ani nepřepočítává jejich nejistoty.
    </p>

    <p id="nejistoty">
      Největší nejistoty se týkají přesného rozdělení příspěvků v každém povodí a budoucí rychlosti změn.
      Výsledek ovlivňuje model sněhu, převod výšky na hmotnost, znalost podloží i proměnlivý přísun oceánského tepla.
      Proto odlišujeme doložený mechanismus od odhadu jeho velikosti a od projekce budoucnosti.
      <SourceLink id="DOI_10_1038_s41597_026_08088_0"> (Otosaka a kol. 2026)</SourceLink>
      <SourceLink id="DOI_10_1029_2006jf000664"> (Schoof 2007)</SourceLink>
    </p>
    <details className="method-details">
      <summary>Meze testů a co by vysvětlení oslabilo</summary>
      <p>
        Shoda různých metod je silnější kontrolou než opakování jednoho výpočtu, ale ani metody nejsou zcela oddělené.
        Výškoměrná bilance i rozdělení příspěvků mohou používat související modely sněhu a firnu.
        U gravimetrie se opravuje pomalý pohyb podloží a u toku ledu je nejistá jeho tloušťka.
        Při posunu linie ukotvení musí bilance navíc zachytit, kolik dosud ukotveného ledu začne plavat. Nestačí sledovat rychlost přes původní pevný profil.
        Při změně těchto vstupů se může posunout odhad velikosti ztrát, jak vysvětluje <Link href="/pozorovani/nestabilita-prikrovu/">porovnání měřicích postupů</Link>.
      </p>
      <p>
        Místní připsání ztrát zeslabené opoře šelfu by oslabilo zjištění, že se tok ledu po ztrátě skutečně brzdících kontaktů nezměnil,
        nebo že celou změnu vysvětlí nezávisle ověřená povrchová bilance. Zároveň je nutné zkontrolovat ostatní síly a čas potřebný k odezvě.
        U ztenčování šelfu by se výklad táním zespodu musel změnit, pokud by měření doložilo dostatečný úbytek sněhu nebo menší přítok ledu, který původní bilance přehlédla.
      </p>
      <p>
        Ani potvrzená zpětná vazba při ústupu po prohlubujícím se dně neurčuje sama datum či rozsah budoucí ztráty.
        Schoofova studie řeší idealizovaný tok a jeho stabilitu. Pro konkrétní příkrov je nutná znalost trojrozměrného podloží,
        odporu dna, geometrie šelfů a budoucího působení atmosféry i oceánu.
        <SourceLink id="DOI_10_1029_2006jf000664"> (Schoof 2007, předpoklady a diskuse)</SourceLink>
      </p>
    </details>

    <h2 id="shrnuti">Shrnutí</h2>
    <div className="method-conclusion">
      <p>
        Grónsko a Antarktida ztrácejí hmotu, když přírůstky nedokážou vyrovnat odtok vody a pevného ledu.
        Měření v Grónsku potvrzují význam povrchového tání, ale k vysvětlení celého úbytku je potřeba i proměnlivý tok ledu do moře.
        Ledové šelfy mohou tento tok brzdit prostřednictvím kontaktů s okolím.
        Jejich ztenčení nebo rozpad proto může urychlit ledovce na pevnině, jak ukázalo porovnání ledovců po rozpadu Larsen B.
      </p>
      <p>
        Závěr stojí na spojení laboratorní fyziky, výpočtů sil, místních přírodních testů a několika způsobů měření hmotnosti.
        Poměr příspěvků se mění mezi oblastmi a obdobími. Přesná velikost ztrát i budoucí vývoj zůstávají nejistější než samotná existence těchto dějů.
      </p>
    </div>

    <h2 id="prameny">Prameny a veřejná data</h2>
    <ul className="article-resource-list">
      <li><SourceLink id="DOI_10_3189_s0022143000034067">Glen 1952: laboratorní deformace ledu pod bodem tání.</SourceLink> Úplná původní práce.</li>
      <li><SourceLink id="DOI_10_3189_s002214300002270x">Thomas 1973: tok šelfů a mechanický odpor jejich kontaktů.</SourceLink> Výpočty a porovnání s pozorováním.</li>
      <li><SourceLink id="DOI_10_1126_science_1178176">Van den Broeke a kol. 2009: rozdělení ztrát Grónska.</SourceLink> Bilance povrchu a odtoku porovnaná s GRACE.</li>
      <li><SourceLink id="DOI_10_5194_tc_6_199_2012">Van As a kol. 2012: tání a říční odtok v oblasti Kangerlussuaq.</SourceLink> Metody, nejistoty a porovnání v obr. 8.</li>
      <li><SourceLink id="DOI_10_1029_2004gl020670">Scambos a kol. 2004: zrychlení a ztenčení po rozpadu Larsen B.</SourceLink> Veřejný autorský rukopis v NASA NTRS.</li>
      <li><SourceLink id="DOI_10_1038_nature10968">Pritchard a kol. 2012: oddělení povrchových a spodních změn šelfů.</SourceLink> Veřejný plný text v univerzitním archivu spoluautora.</li>
      <li><SourceLink id="DOI_10_1594_pangaea_775984">Pritchard a kol. 2012: data ICESat a modelu firnu.</SourceLink> Veřejné tabulky a prostorové soubory, CC BY 3.0.</li>
      <li><SourceLink id="DOI_10_1029_2006jf000664">Schoof 2007: tok přes linii ukotvení a stabilita příkrovu.</SourceLink> Odvození a numerické ověření za uvedených předpokladů.</li>
      <li><SourceLink id="DOI_10_1038_s41597_026_08088_0">Otosaka a kol. 2026: současná syntéza hmotnostních bilancí.</SourceLink> Tabulka 4 a postup rozdělení příspěvků.</li>
      <li><SourceLink id="DOI_10_5285_128c5e33_5224_4197_82f0_19dcc95b80a0">IMBIE: veřejné časové řady do roku 2023.</SourceLink> Stahovatelné soubory v repozitáři British Antarctic Survey.</li>
    </ul>
  </div></article>;
}
