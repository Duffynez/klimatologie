import Image from "next/image";
import Link from "next/link";
import { Equation, InlineMath } from "./Equation";
import { SourceLink } from "./SourceLink";

export function InterferometryArticle() {
  return (
    <article className="article-layout">
      <div className="article-prose">
        <h2>Jak radarové snímky zachycují pohyb povrchu</h2>
        <p className="article-prose__intro">
          Radarová interferometrie je metoda, která porovnává fázi radarových vln
          zaznamenaných při opakovaném snímkování stejného území. Ze změny fáze
          určuje, jak se povrch posunul ve směru k radaru nebo od něj.
          Pohyb lze z radarových snímků získat také sledováním posunu rozpoznatelných
          útvarů. Oba postupy umožňují měřit proudění ledu, interferometrie také
          pomalé deformace zemského povrchu. Nejprve vysvětlíme měření pomocí fáze
          a potom sledování útvarů na ledovci.{" "}
          <SourceLink id="WEB_ESA_InSAR_TM19_2007">(příručka ESA)</SourceLink>{" "}
          <SourceLink id="DOI_10_5194_essd_14_5111_2022">(Lei a kol. 2022)</SourceLink>
        </p>

        <h3>Co radar zaznamenává</h3>
        <p>
          Družicový radar vysílá mikrovlny šikmo k zemskému povrchu a přijímá část
          záření, kterou povrch rozptýlí zpět. Vytváří tak obraz pásu území vedle
          své dráhy. Protože používá vlastní záření, může snímkovat i během polární
          noci a přes oblačnost. U družic Sentinel-1 tuto práci vykonává rozkládací
          radarová anténa.{" "}
          <SourceLink id="WEB_ESA_InSAR_TM19_2007">(ESA, část A, kapitola 1)</SourceLink>{" "}
          <SourceLink id="WEB_ESA_Sentinel1A_Radar_Photo_2014">(ESA: anténa Sentinel-1A)</SourceLink>
        </p>
        <figure className="article-figure">
          <Image src="/media/interferometry/sentinel-1a-radar.jpg" width={3500} height={2330}
            className="article-figure__media" unoptimized
            alt="Rozložená radarová anténa Sentinel-1A vybíhá doleva od těla družice. Bílá konstrukce nad ní slouží k pozemní zkoušce rozkládání." />
          <figcaption>
            Zkouška rozkládání antény Sentinel-1A v Cannes 21. ledna 2014.
            Dlouhá sestava panelů vlevo je radarová anténa, tělo družice je vpravo.
            Bílý rám a závěsy během zkoušky odlehčují anténu, která bude pracovat
            ve stavu beztíže. Foto © ESA–S. Corvaja, 2014.{" "}
            <SourceLink id="WEB_ESA_Sentinel1A_Radar_Photo_2014">Původní snímek</SourceLink>,{" "}
            <SourceLink id="WEB_ESA_Media_Terms_2024">podmínky vzdělávacího a redakčního použití ESA</SourceLink>.
          </figcaption>
        </figure>
        <p>
          Při letu radar pozoruje stejné místo z několika po sobě následujících
          poloh. Zpracování společně využije tyto návraty i přesné údaje
          o pohybu družice.
          Díky tomu rozliší blízká místa ve směru letu podrobněji, než by dovolovala
          samotná fyzická délka antény. Tento způsob se nazývá radar se syntetickou
          aperturou, anglicky Synthetic Aperture Radar, zkráceně SAR. Syntetická
          apertura zde znamená, že účinek dlouhé antény vytváří společné zpracování
          měření podél části dráhy družice.{" "}
          <SourceLink id="WEB_ESA_InSAR_TM19_2007">(ESA, část A, oddíl 1.3)</SourceLink>
        </p>
        <p>
          Pro interferometrii se používají snímky, v nichž každý obrazový bod
          uchovává amplitudu a fázi. Amplituda
          vyjadřuje velikost přijatého signálu a umožňuje zobrazit povrch jako
          světlejší a tmavší plochy. Fáze říká, ve které části svého opakujícího
          se kmitu se vlna nachází. Jeden celý kmit odpovídá úhlu 360° neboli
          dvěma pí radiánům. Právě změna této polohy v kmitu umožňuje sledovat
          vzdálenosti menší než vlnová délka.{" "}
          <SourceLink id="WEB_ESA_InSAR_TM19_2007">(ESA, část A, oddíl 1.2.2)</SourceLink>
        </p>

        <h3>Proč změna fáze ukazuje posun</h3>
        <p>
          Když se odrážející povrch vzdálí, vlna urazí delší cestu. Prodlouží se
          úsek od družice k povrchu i cesta zpět, takže změna celkové dráhy je
          dvojnásobkem změny vzdálenosti. Posun povrchu o polovinu vlnové délky
          ve směru od radaru proto přidá do dráhy záření jednu celou vlnovou délku.
          Fáze tím projde jedním úplným cyklem. Menšímu posunu odpovídá příslušná
          část cyklu.{" "}
          <SourceLink id="WEB_ESA_InSAR_TM19_2007">(ESA, část A, oddíly 1.2.2.2 a 2.3)</SourceLink>
        </p>
        <p>
          Jeden obrazový bod ovšem shrnuje odrazy od mnoha drobných částí
          povrchu. Pro porovnání fáze potřebujeme, aby se jejich uspořádání mezi
          snímky dostatečně zachovalo. Pak lze jejich společný posun sledovat
          porovnáním obou záznamů. Zpracování nejprve přesně sesadí snímky stejného
          území a pro odpovídající body vypočítá rozdíl fází. Výsledná mapa těchto
          rozdílů se nazývá interferogram. Zkratka InSAR označuje interferometrii
          využívající radarové snímky SAR.{" "}
          <SourceLink id="WEB_ESA_InSAR_TM19_2007">(ESA, část A, kapitola 2)</SourceLink>
        </p>
        <p>
          Družice při druhém přeletu snímkuje z trochu jiné polohy. I nepohyblivý
          svah je proto při obou průletech různě daleko od radaru. Abychom oddělili
          tento geometrický příspěvek od pohybu, potřebujeme polohy družice
          a výškový model terénu. Z nich vypočítáme očekávaný rozdíl fází
          nepohyblivého povrchu a odečteme jej. Tak vzniká diferenciální
          interferogram, v němž hledáme příspěvek změny polohy povrchu.{" "}
          <SourceLink id="WEB_ESA_InSAR_TM19_2007">(ESA, část A, oddíl 2.3)</SourceLink>
        </p>
        <p>
          Fáze se po každém celém cyklu vrací ke stejné hodnotě. Interferogram
          ji proto zobrazuje opakujícími se barvami nebo odstíny. Na hranici cyklu se zobrazená
          hodnota skokem vrátí na začátek, i když se skutečná dráha mění plynule.
          Zpracování sleduje návaznost sousedních bodů a tyto návraty nahrazuje
          pokračováním do dalšího cyklu. Tak doplňuje počet celých cyklů.
          Tento krok se nazývá rozbalení fáze.
          Získaný posun vztáhneme k vybranému referenčnímu místu, například
          k odkryté hornině, kterou pro dané období považujeme za nepohyblivou.
          Tím určíme, vůči čemu je pohyb vyjádřen.{" "}
          <SourceLink id="WEB_ESA_InSAR_TM19_2007">(ESA, části A a B)</SourceLink>{" "}
          <SourceLink id="DOI_10_3189_S0022143000003543">(Joughin a kol. 1996)</SourceLink>
        </p>
        <p>
          Cestu vlny ovlivňuje také atmosféra. Její příspěvek se při zpracování
          odhaduje například z většího počtu přeletů, v nichž lze podle
          prostorového a časového průběhu odlišovat pohyb od proměnlivého
          atmosférického zpoždění. Pro výslednou fázi přisouzenou pohybu pak
          platí následující převod.{" "}
          <SourceLink id="WEB_ESA_InSAR_TM19_2007">(ESA, část A, oddíl 2.4, a část C, kapitola 6)</SourceLink>
        </p>
        <Equation tex={String.raw`d_{\mathrm{LOS}}=\frac{\lambda\,\Delta\varphi}{4\pi}`} />
        <p>
          Značka <InlineMath tex={String.raw`d_{\mathrm{LOS}}`} /> znamená posun
          v metrech ve směru spojnice povrchu a radaru. LOS je anglické
          Line of Sight, tedy směr pohledu. Vlnová délka{" "}
          <InlineMath tex={String.raw`\lambda`} /> je v metrech a rozbalená změna
          fáze <InlineMath tex={String.raw`\Delta\varphi`} /> v radiánech.
          Číslo <InlineMath tex={String.raw`\pi`} /> je přibližně 3,1416.
          V této rovnici volíme kladnou fázi pro prodloužení dráhy, takže kladný
          posun znamená pohyb od radaru. Dvojí cesta signálu a celý cyklus
          o velikosti dvou pí společně vysvětlují čtyři pí ve jmenovateli.{" "}
          <SourceLink id="WEB_ESA_InSAR_TM19_2007">(ESA, rovnice A-2.6)</SourceLink>
        </p>
        <figure className="article-figure">
          <Image src="/media/interferometry/phase-principle.svg" width={640} height={660}
            className="article-figure__media" unoptimized
            alt="Dvě polohy povrchu ve stejné spojnici s radarem. Posun povrchu d prodlouží cestu signálu tam i zpět celkem o 2d. Jeden celý cyklus fáze odpovídá posunu o polovinu vlnové délky." />
          <figcaption>
            Princip převodu fáze na posun. Modrá a oranžová značka představují
            dvě polohy stejného odrážejícího místa. Šipky ukazují cestu tam
            i zpět, oranžová část její prodloužení. Schéma porovnává polohy
            po odečtení rozdílné geometrie přeletů. Není v měřítku a nezobrazuje
            skutečné měření. Vlastní kresba podle{" "}
            <SourceLink id="WEB_ESA_InSAR_TM19_2007">příručky ESA</SourceLink>.
          </figcaption>
        </figure>
        <p>
          Výstupem je mapa posunů ve směru pohledu za dobu mezi snímky.
          Vydělením posunu touto dobou dostaneme průměrnou rychlost v témže směru.
          Radar se dívá šikmo, takže se do výsledku promítá vodorovný i svislý
          pohyb. Pro mapu proudění ledu se proto spojují různé směry pohledu
          a informace o sklonu ledovce. Častý předpoklad říká, že led proudí
          rovnoběžně s místním povrchem. Sklon pak propojí vodorovnou a svislou
          složku pohybu a umožní z dostatečného počtu měřených složek dopočítat
          velikost i směr rychlosti.{" "}
          <SourceLink id="DOI_10_3189_S0022143000003543">(Joughin a kol. 1996)</SourceLink>
        </p>

        <h3>Jak se sleduje posun útvarů mezi snímky</h3>
        <p>
          Druhý postup využívá obraz tvořený amplitudou radarového signálu.
          Trhliny a další nerovnosti na ledovci vytvářejí rozpoznatelné uspořádání
          světlejších a tmavších míst. Pokud se tento vzor mezi dvěma snímky
          zachová, lze najít jeho novou polohu a změřit posun. Stejný princip
          funguje také na optických snímcích. Podrobně projdeme radarovou variantu
          použitou v programu ITS_LIVE, který zpřístupňuje časové záznamy
          rychlosti pevninského ledu.{" "}
          <SourceLink id="DOI_10_5194_essd_14_5111_2022">(Lei a kol. 2022)</SourceLink>{" "}
          <SourceLink id="DOI_10_5194_tc_19_3517_2025">(Gardner a kol. 2025)</SourceLink>
        </p>
        <p>
          Nejprve se podle dráhy družice a výškového modelu určí, které části
          obou snímků patří témuž území. Program vybere v prvním snímku malý
          výřez a v okolí očekávané polohy na druhém snímku hledá podobný vzor.
          Pro různé posunutí výřezu počítá míru shody, nazývanou korelace.
          Poloha nejvyšší shody poskytne posun v obou směrech radarového obrazu.
          Prozkoumáním okolí tohoto maxima lze posun odhadnout i na zlomek
          obrazového bodu.{" "}
          <SourceLink id="DOI_10_5194_essd_14_5111_2022">(Lei a kol. 2022, oddíl 2)</SourceLink>
        </p>
        <p>
          ITS_LIVE používá předchozí mapu rychlosti k tomu, aby hledání začínalo
          poblíž očekávané nové polohy. Vlastní posun získává porovnáním snímků.
          Velikost výřezu se přizpůsobuje obrazu. Menší výřez zachová více
          podrobností, větší poskytne více společných znaků k nalezení shody.
          Program kontroluje soulad nalezených posunů s okolím a odstraňuje
          neúspěšná přiřazení. U případně doplněných hodnot ukládá příznak,
          podle kterého je lze odlišit od přímo vyhodnocených výřezů.{" "}
          <SourceLink id="DOI_10_5194_essd_14_5111_2022">(Lei a kol. 2022, oddíly 2.1 a 2.2)</SourceLink>
        </p>
        <p>
          Vzájemnou polohu snímků dále ukotvují plochy se známou malou nebo
          nulovou rychlostí. Pokud porovnání na těchto plochách ukazuje společný
          posun vůči referenční mapě, program o tuto odchylku opraví naměřené
          posuny. U zpracování Sentinelů jsou součástí kalibrace také opravy
          systematických rozdílů mezi jednotlivými snímanými pásy. Tyto kroky
          propojují obrazový posun s pohybem vůči zvolené pozemní referenci.{" "}
          <SourceLink id="DOI_10_5194_essd_14_5111_2022">(Lei a kol. 2022, oddíl 3.1)</SourceLink>
        </p>
        <p>
          V radarovém obrazu jeden směr sleduje vzdálenost od radaru
          a druhý polohu podél dráhy družice. Abychom z těchto posunů získali
          pohyb v mapě, potřebujeme vědět, jak radar pozoruje místní terén.
          Převod proto využívá směr pohledu, polohu družice a sklon povrchu. I zde zpracování předpokládá proudění
          rovnoběžné s povrchem ledu. Po vydělení časem mezi snímky dostaneme
          dvě složky rychlosti v navzájem kolmých mapových osách. Označíme je{" "}
          <InlineMath tex="v_x" /> a <InlineMath tex="v_y" />. Jejich znaménka
          určují směr pohybu podél příslušné osy a obě složky mají stejnou
          jednotku, například metr za rok.{" "}
          <SourceLink id="DOI_10_5194_essd_14_5111_2022">(Lei a kol. 2022, oddíl 2.1)</SourceLink>
        </p>
        <p>
          Celková vodorovná rychlost v mapových souřadnicích je délka šipky
          složené z těchto dvou kolmých pohybů. Označíme ji{" "}
          <InlineMath tex="v_{\mathrm{map}}" />. Protože složky tvoří odvěsny
          pravoúhlého trojúhelníku, použijeme Pythagorovu větu.
        </p>
        <Equation tex={String.raw`v_{\mathrm{map}}=\sqrt{v_x^2+v_y^2}`} />
        <p>
          Mapové zobrazení převádí zakřivenou Zemi do roviny a přitom mění délky.
          Poměr délky v mapě ke skutečné vodorovné vzdálenosti se nazývá místní
          měřítkový faktor, zde <InlineMath tex="k" />. U polárního mapového
          zobrazení použitého v našich datech je v daném místě stejný ve všech směrech.
          Vodorovnou rychlost <InlineMath tex="v" /> proto získáme vydělením
          mapové rychlosti tímto bezrozměrným faktorem. Z ní a doby mezi snímky
          pak můžeme vyjádřit odpovídající vzdálenost.{" "}
          <SourceLink id="DOI_10_5194_essd_14_5111_2022">(Lei a kol. 2022, upozornění na měřítko mapové projekce)</SourceLink>{" "}
          <SourceLink id="WEB_pyproj_Factors_2026">(dokumentace pyproj)</SourceLink>
        </p>
        <Equation tex={String.raw`v=\frac{v_{\mathrm{map}}}{k},\qquad s=v\,\Delta t`} />
        <p>
          Vzdálenost <InlineMath tex="s" /> vyjadřujeme v metrech.
          Doba <InlineMath tex={String.raw`\Delta t`} /> musí odpovídat jednotce
          rychlosti. Je-li rychlost v metrech za rok, zadáme i dobu v rocích.
          Pro zdejší převod používáme rok o 365,25 dnech. Rychlost vyjádřená
          roční jednotkou stále popisuje interval mezi dvěma snímky.
          Mapa z několika dní tak zachycuje jinou časovou podrobnost než roční
          průměr složený z mnoha dvojic.{" "}
          <SourceLink id="DOI_10_5194_tc_19_3517_2025">(Gardner a kol. 2025)</SourceLink>
        </p>

        <h3>Co mapy pohybu přinášejí klimatologii</h3>
        <p>
          Mapa rychlosti ukazuje, kudy led proudí a jak se jeho rychlost mění
          v prostoru. Opakovaná měření umožňují sledovat sezonní změny i vývoj
          v jednotlivých letech. Radar přitom doplňuje optické snímky v obdobích
          oblačnosti a polární noci. ITS_LIVE spojuje měření Sentinelů-1
          s optickými údaji Landsatů a Sentinelů-2 do veřejného souboru rychlostí
          ledovců.{" "}
          <SourceLink id="DOI_10_5194_tc_19_3517_2025">(Gardner a kol. 2025)</SourceLink>
        </p>
        <p>
          Rychlost také vstupuje do výpočtu množství ledu, které odtéká z příkrovu
          do moře. Na průřezu napříč ledovcem se spojí rychlost kolmá k průřezu
          s tloušťkou a šířkou ledu. Převod povrchové rychlosti na tok celým
          průřezem využívá předpoklad o pohybu ledu v hloubce. U rychle klouzajících
          výtokových ledovců se běžně používá přibližně stejná rychlost v celé
          tloušťce. Výsledný odtok lze porovnat s přírůstky a úbytky na povrchu
          příkrovu. Tímto postupem{" "}
          <SourceLink id="DOI_10_1073_pnas_1904242116">Mouginot a kol. (2019)</SourceLink>{" "}
          sestavili bilanci Grónska pro roky 1972–2018. Souvislost s dalšími
          měřeními vysvětluje článek o{" "}
          <Link href="/pozorovani/nestabilita-prikrovu">ledových příkrovech</Link>.
        </p>
        <p>
          Družicová interferometrie se v glaciologii rozvíjela v 90. letech.
          Joughin a kolegové v práci z roku 1996 zpracovali snímky ERS-1
          z února 1992 a ukázali, jak u Humboldtova ledovce oddělit vliv
          výšky terénu, pohybu a geometrie dráhy. Pozdější automatické sledování
          útvarů umožnilo zpracovávat rozsáhlé soubory radarových i optických
          snímků. Pro pomalé deformace pevniny se naopak rozvinulo vyhodnocování
          mnoha přeletů nad dlouhodobě stálými odrážejícími místy.
          Tyto varianty využívají rozdílné vlastnosti sledovaného povrchu.{" "}
          <SourceLink id="DOI_10_3189_S0022143000003543">(Joughin a kol. 1996)</SourceLink>{" "}
          <SourceLink id="WEB_ESA_InSAR_TM19_2007">(ESA, část C, kapitola 6)</SourceLink>{" "}
          <SourceLink id="DOI_10_5194_tc_19_3517_2025">(Gardner a kol. 2025)</SourceLink>
        </p>

        <h2>Nejistoty a ověření výsledků</h2>
        <p>
          U interferometrie rozhoduje zachování podobného odrazu mezi snímky,
          správné rozbalení fáze a oddělení atmosférického zpoždění od pohybu.
          Sledování útvarů závisí na kvalitě nalezené shody a poloze snímků.
          Oba postupy potřebují vhodnou referenci a geometrii převodu.
          Lei a kolegové porovnali radarové a optické rychlosti na rychlém
          výtoku Jakobshavnu. Souhrnná velikost rozdílů mezi ITS_LIVE Sentinel-1 a Landsatem 8
          vyšla přibližně 314 metrů za rok, tedy 3,7 % podle vyhodnocení autorů. To je výsledek konkrétního
          porovnání, nikoli univerzální přesnost radarového měření.{" "}
          <SourceLink id="WEB_ESA_InSAR_TM19_2007">(ESA)</SourceLink>{" "}
          <SourceLink id="DOI_10_5194_essd_14_5111_2022">(Lei a kol. 2022, oddíl 4.1)</SourceLink>
        </p>
        <details className="method-details">
          <summary>Co ovlivňuje přesnost a jak se kontroluje</summary>
          <p>
            Tání, nový sníh nebo změna vegetace mohou proměnit rozložení
            odrážejících částic. Snímky pak ztrácejí fázovou soudržnost,
            označovanou jako koherence. Ta vyjadřuje, nakolik si jejich místní záznamy amplitudy a fáze odpovídají. Nízká koherence
            zhoršuje určení fáze a může znemožnit její rozbalení.
            Chyba o celý cyklus znamená chybu posunu o polovinu vlnové délky.
            I při zachované koherenci se do výsledku mohou promítnout zbytky
            atmosférického vlivu a nepřesná dráha či výškový model.{" "}
            <SourceLink id="WEB_ESA_InSAR_TM19_2007">(ESA, části A a B)</SourceLink>
          </p>
          <p>
            Sledování útvarů může pracovat i tam, kde se fáze už nedá spolehlivě
            porovnat, ale zůstává rozpoznatelná obrazová struktura. Větší výřezy
            pomáhají nalézt shodu, současně však zprůměrují pohyb přes větší
            plochu. Rozestup výstupní mřížky proto není skutečné prostorové
            rozlišení. V popsané verzi ITS_LIVE je mřížka po 120 metrech,
            zatímco efektivní rozlišení závisí na velikosti výřezů a v metodické
            práci se pohybuje od 240 do 1 920 metrů. Kratší odstup snímků
            při stejné chybě posunu znamená větší chybu rychlosti.{" "}
            <SourceLink id="DOI_10_5194_essd_14_5111_2022">(Lei a kol. 2022)</SourceLink>
          </p>
          <p>
            Kalibrace ITS_LIVE používá referenční rychlosti a masku stálých
            či pomalu se pohybujících ploch. Nesprávné zařazení rychlého ledu
            mezi tyto plochy poškodí i odhad nejistoty. Autoři takto problematické
            odhady vyřadili přibližně u 30 % dvojic v příslušném rozboru
            Jakobshavnu. Nejistota z kontrolních ploch navíc nemusí plně
            reprezentovat rychlý, rozpukaný led. Společný posun a pruhové
            odchylky se kontrolují na stálém terénu a porovnáním přeletů
            v různých směrech.{" "}
            <SourceLink id="DOI_10_5194_essd_14_5111_2022">(Lei a kol. 2022, oddíly 3 a 4.1)</SourceLink>
          </p>
          <p>
            Uvedených 314 metrů za rok je odmocnina průměru druhých mocnin
            rozdílů, běžně označovaná RMSE. V porovnání se časově přiřazovaly
            nejbližší dostupné výsledky, jejich měřicí intervaly tedy nebyly
            vždy totožné. Optický Landsat poskytuje jiný měřicí signál, oba
            produkty však patří do ITS_LIVE a sdílejí části zpracování.
            Porovnání s produktem PROMICE sdílí navíc i radarové vstupy
            Sentinel-1. Shoda proto současně prověřuje různé části postupu,
            nemá však úplnou nezávislost dvou oddělených měřicích systémů.{" "}
            <SourceLink id="DOI_10_5194_essd_14_5111_2022">(Lei a kol. 2022, oddíl 4.1)</SourceLink>
          </p>
          <p>
            Jediný směr pohledu určuje pouze jednu složku posunu. Při odvození
            vodorovného proudění záleží na sklonu povrchu a předpokládané
            svislé složce pohybu. Samostatné zvedání plovoucího ledu přílivem
            se proto musí posuzovat zvlášť. Rychlost povrchu také sama
            neurčuje hmotnostní bilanci. Ta přebírá další nejistoty z tloušťky
            ledu, jeho proudění v hloubce a z bilance sněhu a tání.{" "}
            <SourceLink id="DOI_10_3189_S0022143000003543">(Joughin a kol. 1996)</SourceLink>{" "}
            <SourceLink id="DOI_10_1073_pnas_1904242116">(Mouginot a kol. 2019)</SourceLink>
          </p>
        </details>

        <h2>Pohyb Jakobshavnu během šesti dní</h2>
        <p>
          Použijeme veřejný ukázkový produkt ITS_LIVE verze 2.0 pro snímky
          Sentinel-1B ze 4. dubna 2017 a Sentinel-1A z 10. dubna 2017.
          Vybereme bod poblíž 69,124° severní šířky a 49,496° západní délky
          na Jakobshavnu v Grónsku, který metodická studie používá k porovnání
          rychlostí. Data už prošla hledáním posunů, kalibrací a převodem do mapy.
          Zopakujeme závěrečný výpočet rychlosti a odpovídajícího posunu,
          nikoli zpracování surového radarového signálu.{" "}
          <SourceLink id="DOI_10_5281_zenodo_5606118">(Lei, Gardner a Agram 2021, veřejná data)</SourceLink>{" "}
          <SourceLink id="DOI_10_5194_essd_14_5111_2022">(Lei a kol. 2022, obr. 11–13)</SourceLink>
        </p>
        <div className="method-data-output method-data-output--compact method-data-output__table-wrap">
          <table>
            <thead><tr><th scope="col">Vstup</th><th scope="col">Hodnota</th></tr></thead>
            <tbody>
              <tr><th scope="row">Mapová složka rychlosti <InlineMath tex="v_x" /></th><td>−4 233 m za rok</td></tr>
              <tr><th scope="row">Mapová složka rychlosti <InlineMath tex="v_y" /></th><td>5 469 m za rok</td></tr>
              <tr><th scope="row">Doba mezi snímky</th><td>6,000488 dne</td></tr>
              <tr><th scope="row">Místní měřítkový faktor <InlineMath tex="k" /></th><td>1,002757</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          Záporná první složka znamená pohyb proti směru mapové osy x,
          kladná druhá pohyb ve směru osy y. Tyto osy patří polární mapové
          projekci, takže je nelze automaticky zaměnit za místní východ a sever.
          Celkovou velikost mapové rychlosti získáme z obou složek.
        </p>
        <Equation tex={[
          String.raw`v_{\mathrm{map}}=\sqrt{(-4\,233)^2+5\,469^2}`,
          String.raw`\doteq 6\,915{,}8\ \mathrm{m\,rok^{-1}}`,
        ]} />
        <p>
          V tomto místě mapa zvětšuje délky přibližně o 0,28 %.
          Po vydělení měřítkovým faktorem vychází vodorovná rychlost
          přibližně 6 897 metrů za rok. Teď jí vynásobíme skutečnou dobu
          mezi snímky, převedenou ze dní na roky.
        </p>
        <Equation tex={String.raw`v=\frac{6\,915{,}8}{1{,}002757}\doteq 6\,896{,}8\ \mathrm{m\,rok^{-1}}`} />
        <Equation tex={String.raw`s=6\,896{,}8\times\frac{6{,}000488}{365{,}25}\doteq 113{,}3\ \mathrm{m}`} />
        <p>
          Výsledek odpovídá přibližně 113 metrům vodorovného posunu během
          sledovaných šesti dní. Rychlost byla přibližně 19 metrů denně.
          Roční jednotka zde slouží ke srovnávání rychlostí, nevyjadřuje
          skutečně sledovanou celoroční dráhu ledovce. Soubor pro tento bod
          uvádí odhad chyby mapové rychlosti 142 metrů za rok. Po stejném
          časovém a měřítkovém převodu odpovídá přibližně 2,3 metru posunu.
          Jde o odhad poskytovatele z popsaného zpracování, nikoli o nové
          nezávislé ověření tohoto bodu.{" "}
          <SourceLink id="DOI_10_5281_zenodo_5606118">(ITS_LIVE, pole v_error)</SourceLink>{" "}
          <SourceLink id="DOI_10_5194_essd_14_5111_2022">(původ odhadu chyby)</SourceLink>
        </p>
        <details className="method-details">
          <summary>Data a přesný postup pro opakování</summary>
          <p>
            Používáme neměnný záznam Zenodo 5606118 z 22. října 2021,
            verze 2.0, licenci CC BY 4.0 a produkt v adresáři Region_1.
            Úplný název souboru, kontrolní součet SHA-256 a metadata jsou
            v <a href="/data/methods/interferometry/provenance.json">záznamu původu</a>.
            Přístup k datům proběhl 28. října 2026. Záznam uvádí ISCE 2.4.1,
            Geogrid 1.4.0 a autoRIFT 1.4.0. Jde o historický vzorek,
            nikoli automaticky o dnešní verzi celého archivu ITS_LIVE.
          </p>
          <p>
            Vybrán je nejbližší střed buňky k uvedené zeměpisné poloze,
            bez prostorového průměrování. V mapovém systému EPSG:3413 má
            souřadnice x = −179 227,5 m a y = −2 278 732,5 m.
            Indexy počítané od nuly jsou x = 1632 a y = 1634.
            Buňka má příznak interp_mask = 0. Sledovaný výřez má podle metadat
            šířku 500 m a výšku 443 m v radarové geometrii. Doba se počítá
            z úplných časových značek obou snímků v UTC, nikoli ze zaokrouhleného
            počtu dní. Měřítkový faktor počítá pyproj pro střed vybrané buňky.
          </p>
          <p>
            <a href="/data/methods/interferometry/reproduce.py">Skript v Pythonu</a>{" "}
            přepočítá zveřejněný{" "}
            <a href="/data/methods/interferometry/sample.csv">výřez hodnot CSV</a>.
            Volitelně načte původní soubor NetCDF, ověří jeho kontrolní součet,
            znovu vybere buňku a porovná výřez s originálem. Soubor lze získat
            z <SourceLink id="DOI_10_5281_zenodo_5606118">původního archivu</SourceLink>.
            Postup a potřebné knihovny popisuje{" "}
            <a href="/data/methods/interferometry/README.txt">návod</a>.
            Původní pole v obsahuje zaokrouhlenou mapovou rychlost 6 916 m za rok,
            což souhlasí s naším výpočtem ze složek.
          </p>
        </details>

        <h2>Shrnutí</h2>
        <div className="method-conclusion">
          <p>
            Opakované radarové snímky zachycují změnu polohy povrchu i v oblačnosti a
            polární noci. Interferometrie využívá změnu fáze vlny, sledování útvarů
            jejich posun v obrazu. Známý čas mezi snímky umožňuje převést naměřený posun
            na rychlost pohybu.
          </p>
          <p>
            Tyto postupy umožňují mapovat rychlost a směr proudění ledovců i poklesy a
            zdvihy souše. Spolu s tloušťkou ledu lze určit jeho odtok z příkrovů. Snímky
            dvojice Sentinel-1A a 1B umožňovaly měřit posuny v odstupech 6 nebo 12 dní a
            sledovat tak i změny rychlosti během sezóny.{" "}
            <SourceLink id="WEB_ESA_InSAR_TM19_2007">(ESA, 2007)</SourceLink>,{" "}
            <SourceLink id="DOI_10_5194_essd_14_5111_2022">(Lei a kol., 2022)</SourceLink>
          </p>
        </div>
      </div>
    </article>
  );
}
