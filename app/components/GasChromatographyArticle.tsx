import Image from "next/image";
import Link from "next/link";
import { SourceLink } from "./SourceLink";
import { Equation, InlineMath } from "./Equation";

const dataPath = "/data/methods/gas-chromatography";

export function GasChromatographyArticle() {
  return (
    <article className="article-layout">
      <aside className="article-glossary article-glossary--four" aria-label="Potřebné informace">
        <p className="eyebrow">Potřebné informace</p>
        <h2>Pojmy pro tento článek</h2>
        <dl>
          <div><dt>Kolona</dt><dd>Trubice, ve které se složky vzorku oddělují díky rozdílnému zadržování na její náplni nebo v povlaku.</dd></div>
          <div><dt>Chromatogram</dt><dd>Záznam odezvy detektoru v čase. Oddělené látky se v něm objevují jako samostatné vrcholy, zvané píky.</dd></div>
          <div><dt>Referenční plyn</dt><dd>Směs s určeným složením, vůči které porovnáváme odezvu vzorku.</dd></div>
          <div><dt>Molární zlomek</dt><dd>Podíl molekul sledovaného plynu mezi všemi molekulami směsi. Jednotka ppb znamená počet na miliardu.</dd></div>
        </dl>
        <p className="article-glossary__note">Oddělení plynů umožní změřit jejich odezvy zvlášť. Kalibrace propojí tyto odezvy se složením vzduchu.</p>
      </aside>

      <div className="article-prose">
        <h2>Jak plynová chromatografie měří složení vzduchu</h2>
        <p className="article-prose__intro">
          Plynová chromatografie je metoda, která odděluje látky přítomné v plynném vzorku,
          aby bylo možné určit jejich zastoupení. V klimatologii se používá k měření metanu,
          oxidu dusného a dalších plynů v ovzduší i ve vzduchu získaném z ledových jader.
          Přístroj, který rozdělení a následné měření provádí, se nazývá plynový chromatograf.{" "}
          <SourceLink id="DOI_10_5194_essd_11_473_2019">(Rubino a kol., 2019, oddíl 2)</SourceLink>
        </p>
        <p>
          Podrobně projdeme stanovení metanu ve vzduchu pomocí plamenového ionizačního detektoru.
          Je to zařízení, které převádí příchod metanu do malého plamene na elektrický signál.
          Tento postup dlouhodobě používala americká Národní správa pro oceán a atmosféru,
          známá pod zkratkou NOAA. <SourceLink id="1994_Lang_NOAA_Methane_Network">Lang a kolegové (1994)</SourceLink>{" "}
          dokládají použití v pozorovací síti, <SourceLink id="2015_NOAA_CH4_Analysis">postup NOAA z roku 2015</SourceLink>{" "}
          podrobně vysvětluje kalibraci a výpočet.
        </p>

        <h3>Proč plyny vycházejí z přístroje postupně</h3>
        <p>
          Vzduch je směs mnoha plynů. V chromatografu jej v malé dávce vpustíme do proudu
          <strong> nosného plynu</strong>, například helia. Nosný plyn unáší vzorek dlouhou úzkou
          trubicí zvanou <strong>kolona</strong>. Uvnitř kolony je materiál, na kterém se molekuly
          jednotlivých látek různě dlouho zadržují. Tento materiál zůstává na místě, a proto
          mu říkáme <strong>stacionární fáze</strong>.{" "}
          <SourceLink id="2016_Harvey_Analytical_Chemistry">(Harvey, oddíly 12.2 a 12.4)</SourceLink>
        </p>
        <p>
          Představme si cestu jedné molekuly kolonou. Část času se pohybuje s nosným plynem,
          část stráví zachycená na náplni. Potom se znovu uvolní a proud ji odnese dál.
          Tento děj se během cesty opakuje. Různé molekuly se k povrchu náplně vážou různě silně,
          a proto se liší i doba jejich zadržování. Látka, jejíž molekuly tráví na náplni více času,
          postupuje v průměru pomaleji. Na konci dostáváme jednotlivé složky v odlišných časech,
          přestože do kolony vstoupily společně. Takto rozdělení popisuje i{" "}
          <SourceLink id="WEB_NOAA_Gas_Analyzers">výklad analytického systému NOAA</SourceLink>.
        </p>
        <p>
          Náplň volíme podle plynů, které chceme oddělit. V uspořádání NOAA popsaném Langovou
          a kolegy prochází vzorek nejprve předřazenou kolonou, která zachytí oxid uhličitý
          a zbytky vody. Druhá kolona oddělí metan od ostatních složek vzduchu. Obsahuje
          materiál s velmi drobnými póry, označovaný jako molekulové síto.
          Teplotu kolon a průtok helia udržuje přístroj stálé, aby se průchod látek opakoval
          stejným způsobem. <SourceLink id="1994_Lang_NOAA_Methane_Network">Popis systému NOAA</SourceLink>{" "}
          uvádí použité kolony i jejich zapojení.
        </p>

        <h3>Jak se vzorek dostane do kolony</h3>
        <p>
          Vzduch můžeme nasávat přímo na měřicí stanici nebo odebrat do uzavřené baňky
          a dopravit do laboratoře. Při laboratorní analýze otevře soustava ventilů cestu
          od vybrané baňky k přístroji. Proud vzduchu nejprve propláchne přívodní vedení.
          Tím nahradí plyn, který v něm zůstal po předchozím vzorku, právě analyzovaným vzduchem.{" "}
          <SourceLink id="2015_NOAA_CH4_Analysis">(NOAA, oddíl 5.1)</SourceLink>
        </p>
        <p>
          Před měřením se vzduch vysuší. Například analytický systém NOAA pro vzorky z letadel
          jej vede přes silně ochlazenou část potrubí, kde se voda zachytí. Cílem je vyjadřovat
          složení vůči <strong>suchému vzduchu</strong>. Vodní pára má totiž proměnlivé zastoupení.
          Kdybychom ji započítali mezi všechny molekuly směsi, pouhé zvlhčení vzduchu by snížilo
          podíl metanu, i kdyby se jeho množství vůči ostatním plynům nezměnilo.
          <SourceLink id="WEB_NOAA_Aircraft_Analysis"> Dokumentace laboratorní sestavy NOAA</SourceLink>{" "}
          ukazuje sušení i rozdělení vzorku mezi jednotlivé analyzátory.
        </p>
        <p>
          K dávkování slouží krátký úsek trubice s přesně daným objemem, zvaný
          <strong> dávkovací smyčka</strong>. V popsaném systému má objem 5 mililitrů.
          Nejprve se propláchne a naplní vzorkem. Po vyrovnání tlaku přepne ventil smyčku
          do cesty nosného plynu. Helium z ní vytlačí dávku vzduchu do kolony.
          Přepnutí tak vytvoří jasný začátek analýzy a opakovaně dodává vzorek stejným způsobem.
          <SourceLink id="1994_Lang_NOAA_Methane_Network"> Lang a kolegové</SourceLink>{" "}
          popisují tuto smyčku a řízení odběru jednotlivých dávek.
        </p>

        <figure className="article-figure article-figure--instrument">
          <Image className="article-figure__media" src="/media/gas-chromatography/noaa-analysis-system.jpg"
            alt="Laboratoř NOAA s přenosnými boxy vzorků před stolem, rozvodem vzduchu vlevo a blokem chromatografů označeným CH4, N2O a SF6 vpravo."
            width={563} height={413} unoptimized />
          <figcaption>
            Sestava NOAA v Boulderu pro analýzu vzduchu odebraného z letadel. Černé boxy před stolem
            patří k odběrovým soupravám. Vlevo je rozvod vzorků a referenčních plynů, vpravo na stole
            blok chromatografů pro CH₄, N₂O a SF₆. Další označené přístroje měří jiné plyny.
            Kolony a detektory jsou uvnitř přístrojových skříní.
            Foto: <SourceLink id="WEB_NOAA_Aircraft_Analysis">NOAA Global Monitoring Laboratory</SourceLink>,
            dílo federální vlády USA. Datum pořízení není uvedeno.
          </figcaption>
        </figure>

        <h3>Jak vznikne elektrický signál</h3>
        <p>
          Na výstupu z kolony metan vstupuje do detektoru, v němž hoří vodík s přívodem
          okysličujícího plynu. Při reakcích metanu s dalšími složkami plamene vznikají elektricky nabité
          částice, tedy ionty. Elektrické pole je zachytává na elektrodách a vznikající proud
          zaznamenává elektronika. Když přichází více metanu, odezva detektoru zesílí.
          Odtud název <strong>plamenový ionizační detektor</strong>, často zkracovaný anglickými
          písmeny FID. Jeho úlohu v analýze metanu popisuje{" "}
          <SourceLink id="WEB_NOAA_Gas_Analyzers">NOAA</SourceLink>.
        </p>
        <p>
          Elektronika průběžně ukládá odezvu spolu s časem od vpuštění vzorku. Výsledný graf
          se nazývá <strong>chromatogram</strong>. Když ke konci kolony dorazí oddělená dávka
          metanu, signál vzroste, dosáhne maxima a zase klesne. V grafu se objeví vrchol,
          kterému se v chromatografii říká <strong>pík</strong>. Doba od vstupu vzorku po maximum
          píku je jeho retenční čas. Měřením známé směsi předem zjistíme, ve které části
          záznamu metan hledat.{" "}
          <SourceLink id="2016_Harvey_Analytical_Chemistry">(Harvey, oddíly 12.2 a 12.4)</SourceLink>
        </p>
        <p>
          Pro určení množství metanu sečteme odezvu během průchodu celého píku.
          V grafu tomu odpovídá <strong>plocha pod píkem</strong> nad základní úrovní signálu.
          Základní úroveň je odezva v době, kdy metan právě neprochází, a při výpočtu se odečítá.
          Využijeme tak celou zaznamenanou dávku, i když její průchod trvá několik okamžiků.
          <SourceLink id="2015_NOAA_CH4_Analysis"> Metodika NOAA</SourceLink> používá plochu píku
          jako přednostní údaj pro následný převod.
        </p>

        <figure className="article-figure article-figure--scroll-mobile">
          <div className="article-figure__scroll" role="region" aria-label="Schéma chromatogramu, na malé obrazovce posuvné" tabIndex={0}>
            <Image className="article-figure__media" src="/media/gas-chromatography/chromatogram.svg"
              alt="Schéma jednoho píku metanu: maximum určuje retenční čas a modře vyplněná plocha nad základní úrovní vstupuje do kalibrace."
              width={1000} height={500} unoptimized />
          </div>
          <figcaption>
            Schematický chromatogram, nikoli naměřená data. Vodorovná osa je čas od vpuštění vzorku,
            svislá elektrická odezva. Modrá plocha patří píku metanu, šedá čára označuje základní
            úroveň signálu. Přerušovaná svislice ukazuje čas maxima, tedy retenční čas.
            Schéma zobrazuje jen vybraný pík.{" "}
            <SourceLink id="2016_Harvey_Analytical_Chemistry">(schéma podle Harveyho, oddíl 12.2)</SourceLink>
          </figcaption>
        </figure>

        <figure className="method-flow">
          <div className="method-flow__track" aria-label="Postup chromatografické analýzy metanu">
            <div><span>1</span><strong>Vzorek vzduchu</strong><small>Sušení a odměření dávky ve smyčce.</small></div>
            <b aria-hidden="true">→</b>
            <div><span>2</span><strong>Kolony</strong><small>Náplň různě dlouho zadržuje látky unášené plynem.</small></div>
            <b aria-hidden="true">→</b>
            <div><span>3</span><strong>Detektor</strong><small>Průchod metanu vyvolá elektrický signál a pík.</small></div>
            <b aria-hidden="true">→</b>
            <div><span>4</span><strong>Kalibrace</strong><small>Známé směsi propojí plochu píku s podílem metanu.</small></div>
          </div>
          <figcaption>
            Čtyři kroky jedné analýzy. Šipky sledují cestu vzorku a následné zpracování
            signálu. Referenční směsi procházejí stejnou dávkovací smyčkou, kolonami a detektorem
            jako neznámý vzorek. Schéma shrnuje popsané uspořádání, nezobrazuje časový průběh měření.{" "}
            <SourceLink id="2015_NOAA_CH4_Analysis">(NOAA, oddíly 5–6)</SourceLink>
          </figcaption>
        </figure>

        <h3>Jak se plocha píku převede na zastoupení metanu</h3>
        <p>
          Samotná plocha píku je údaj přístroje. Abychom jí přiřadili složení vzduchu,
          potřebujeme změřit také směsi, jejichž obsah metanu je už určený.
          Tyto <strong>referenční plyny</strong> se uchovávají v tlakových lahvích.
          Kalibrací zjišťujeme vztah mezi jejich známým složením a odezvou chromatografu.
          Stejný vztah potom použijeme na neznámý vzorek.{" "}
          <SourceLink id="2015_NOAA_CH4_Analysis">(NOAA, oddíly 5–6)</SourceLink>
        </p>
        <p>
          Zastoupení metanu vyjadřujeme <strong>molárním zlomkem</strong>. Ten říká,
          jaký podíl všech molekul suchého vzduchu tvoří molekuly metanu.
          Jednotka <strong>ppb</strong> znamená počet na miliardu. Hodnota 1 850 ppb tedy
          odpovídá 1 850 molekulám metanu na miliardu molekul suchého vzduchu.
          V odborných datech najdeme i zápis nmol/mol, který má pro tuto veličinu stejný význam.
          Propojovat takto vyjádřená měření umožňuje společná kalibrační stupnice.{" "}
          <SourceLink id="2015_NOAA_CH4_Analysis">(NOAA, oddíl 4)</SourceLink>
        </p>
        <p>
          NOAA udržuje pro metan stupnici <strong>WMO X2004A</strong>. WMO je Světová meteorologická
          organizace a X2004A označuje konkrétní verzi stupnice. Její základ tvoří směsi připravené
          vážením přidaného metanu a ředicího plynu. Z jejich hmotností a složení se určí výsledný
          molární zlomek. S těmito základními směsmi se porovnávají další lahve používané v běžném
          provozu. Tím se stejné referenční hodnoty přenášejí mezi laboratořemi.
          <SourceLink id="2015_NOAA_CH4_Scale"> Dokumentace X2004A</SourceLink>{" "}
          zveřejňuje hodnoty jednotlivých směsí i postup jejich předávání.
        </p>
        <p>
          Při samotné analýze NOAA střídá dávky vzorku s dávkami jedné referenční směsi.
          Ke každému vzorku tedy patří měření reference těsně před ním a po něm.
          Z obou referenčních ploch uděláme průměr a plochu vzorku jím vydělíme.
          Tak získáme poměr odezev ve stejných podmínkách. Průběžné porovnávání zachytí
          pomalé společné změny odezvy, například při změně tlaku ovlivňující množství plynu
          v dávkovací smyčce.{" "}
          <SourceLink id="2015_NOAA_CH4_Analysis">(NOAA, oddíly 5–6)</SourceLink>
        </p>
        <Equation tex={String.raw`r = \frac{S}{(R_1 + R_2)/2}`} />
        <p>
          Značka <InlineMath tex={String.raw`S`} /> označuje plochu píku vzorku,{" "}
          <InlineMath tex={String.raw`R_1`} /> plochu předchozí reference a{" "}
          <InlineMath tex={String.raw`R_2`} /> plochu následující reference.
          Všechny tři plochy jsou ve stejných přístrojových jednotkách, které se při dělení
          vykrátí. Výsledný poměr <InlineMath tex={String.raw`r`} /> je proto bez jednotky.
          Výpočet předpokládá stejný způsob dávkování a vyhodnocení všech tří píků.{" "}
          <SourceLink id="2015_NOAA_CH4_Analysis">(NOAA, oddíly 5–6)</SourceLink>
        </p>
        <p>
          K převodu poměru na ppb ještě potřebujeme kalibrační křivku. Tu vytvoříme měřením
          několika známých směsí s různým zastoupením metanu. Každou porovnáme s touž referencí
          a spojíme získaný poměr s přiřazeným molárním zlomkem. Soubor těchto dvojic ukáže,
          jak se odezva mění v celém používaném rozsahu. NOAA jej v metodice z roku 2015
          popisuje vztahem:
        </p>
        <Equation tex={String.raw`x = c_0 + c_1 r^{c_2}`} />
        <p>
          Zde <InlineMath tex={String.raw`x`} /> představuje molární zlomek metanu v ppb
          a <InlineMath tex={String.raw`r`} /> právě vypočtený poměr.
          Koeficienty <InlineMath tex={String.raw`c_0`} /> a <InlineMath tex={String.raw`c_1`} />{" "}
          mají jednotku ppb, exponent <InlineMath tex={String.raw`c_2`} /> je bez jednotky.
          Všechny tři hodnoty zvolí výpočet tak, aby křivka co nejlépe odpovídala kalibračním bodům.
          První koeficient posouvá křivku nahoru nebo dolů, druhý mění její výšku a exponent
          dovoluje popsat zakřivení. Vztah tedy vychází z kalibračních měření konkrétního přístroje
          a používá se v rozsahu, který tato měření pokrývají.
          Přiřazení směsí, oba výpočty i jejich návaznost uvádí{" "}
          <SourceLink id="2015_NOAA_CH4_Analysis">technický postup NOAA</SourceLink>.
        </p>
        <p>
          Jednu lahev obvykle analyzujeme opakovaně. Každá dávka poskytne vlastní hodnotu
          v ppb a z těchto hodnot vypočteme aritmetický průměr:{" "}
          <SourceLink id="2015_NOAA_CH4_Analysis">(NOAA, oddíly 5–6)</SourceLink>
        </p>
        <Equation tex={String.raw`\bar{x} = \frac{x_1 + x_2 + \dots + x_N}{N}`} />
        <p>
          Symboly <InlineMath tex={String.raw`x_1, x_2, \dots, x_N`} /> jsou výsledky jednotlivých
          analýz téhož plynu v ppb, <InlineMath tex={String.raw`N`} /> je jejich počet
          a <InlineMath tex={String.raw`\bar{x}`} /> výsledný průměr, opět v ppb.
          Průměrujeme opakování ve srovnatelných podmínkách. U odběrové baňky tak získáme
          jeden údaj o složení vzduchu z konkrétního místa a doby odběru.
        </p>

        <h3>Co metoda přináší klimatologii</h3>
        <p>
          Opakované odběry na stanicích vytvářejí časový záznam metanu v atmosféře.
          Síť rozložená po světě umožňuje porovnávat i různé zeměpisné oblasti.
          <SourceLink id="1994_Lang_NOAA_Methane_Network"> Lang a kolegové (1994)</SourceLink>{" "}
          zveřejnili měření sítě NOAA za roky 1989–1992 včetně měsíčních hodnot, popisu odběrů
          a chromatografické analýzy. Tyto údaje dokládají, jak se zastoupení metanu mění
          během roku i mezi roky. Z odběrových sítí získáváme také údaje o jiných plynech,
          například <Link href="/pozorovani/atmosfericka-koncentrace-co2">pozorování atmosférického CO₂</Link>,
          pro který se běžně využívají optické analyzátory.
        </p>
        <p>
          Chromatograf může analyzovat i vzduch uvolněný z bublinek v ledu.
          <SourceLink id="DOI_10_5194_essd_11_473_2019"> Rubino a kolegové (2019)</SourceLink>{" "}
          tak sestavili záznamy CO₂, metanu a oxidu dusného z antarktického Law Dome.
          Určení stáří zachyceného vzduchu umožňuje přiřadit rozbor minulému období
          a propojit jej s novodobým měřením. Chromatografie zde poskytuje složení vzorku,
          datování a uvolnění vzduchu z ledu jsou další kroky výzkumu.
        </p>

        <h3>Vývoj a další provedení</h3>
        <p>
          Důležitým krokem ve vývoji byla práce <SourceLink id="DOI_10_1042_bj0500679">Jamese a Martina z roku 1952</SourceLink>.
          Ukázali oddělení těkavých mastných kyselin mezi proudícím plynem a nehybnou kapalinou
          nanesenou na nosiči. Molekuly se při průchodu opakovaně rozdělovaly mezi plyn a kapalinu.
          Vedle zachycování na pevné náplni tak vzniklo použitelné provedení založené na rozdílném
          rozpouštění látek v kapalné vrstvě. Automatické dávkování, citlivé detektory a elektronický
          záznam později umožnily dlouhodobé měření stopových plynů doložené v síti NOAA.
        </p>
        <p>
          Pro různé plyny se mění především kolony a způsob detekce.
          Oxid dusný a fluorid sírový lze měřit detektorem elektronového záchytu:
          přicházející molekuly zachycují elektrony a tím zmenšují sledovaný proud.
          Pro širší soubor halogenovaných plynů, tedy sloučenin obsahujících například fluor
          nebo chlor, se používá spojení s hmotnostním spektrometrem. Ten rozlišuje nabité
          částice podle poměru jejich hmotnosti k elektrickému náboji.
          <SourceLink id="WEB_NOAA_Aircraft_Analysis"> Laboratorní program NOAA</SourceLink>{" "}
          popisuje obě varianty vedle měření metanu. V novějších měřeních metanu se rozšířila také{" "}
          <Link href="/metody/absorpcni-spektroskopie">absorpční spektroskopie</Link>,
          která využívá pohlcování světla plynem. Její návaznost na chromatografy prověřili{" "}
          <SourceLink id="DOI_10_5194_amt_9_4737_2016">Zellweger a kolegové (2016)</SourceLink>.
        </p>

        <h2>Nejistoty a ověření výsledků</h2>
        <p>
          Výsledek ovlivňuje zachování vzorku, dávkování, oddělení píků a kalibrace.
          U atmosférických záznamů záleží také na četnosti odběrů.
          Na irské stanici Mace Head porovnali <SourceLink id="DOI_10_5194_amt_9_4737_2016">Zellweger a kolegové</SourceLink>{" "}
          chromatograf s optickým přístrojem. U časově spárovaných měření činil průměrný rozdíl
          v absolutní hodnotě 0,57 ppb a směrodatná odchylka rozdílů 3,79 ppb. Malý průměrný posun ukazuje návaznost
          obou postupů, rozptyl jednotlivých rozdílů vyjadřuje jejich shodu při jednotlivých odběrech.
        </p>
        <details className="method-details">
          <summary>Podrobnosti o nejistotách a nezávislé kontrole</summary>
          <h3>Vzorek a přístroj</h3>
          <p>
            Netěsnost nebo příměs vzduchu z předchozího vzorku může změnit složení ještě před
            vlastním rozborem. Proplach a kontrolní odběry pomáhají tento vliv rozpoznat.
            Uvnitř chromatografu mohou změny teploty a průtoku posunout píky. Pokud se pík metanu
            překryje s jinou odezvou, plocha nemusí odpovídat samotnému metanu.
            Vliv kolísání základního signálu závisí také na tom, kde vyhodnocovací program
            určí začátek a konec píku. Kontrola tvaru píků a opakovaných dávek je součástí{" "}
            <SourceLink id="2015_NOAA_CH4_Analysis">postupu NOAA</SourceLink>.
          </p>
          <h3>Kalibrace a stabilita</h3>
          <p>
            Nejistota výsledku zahrnuje i nejistoty referenčních směsí a přenosu stupnice.
            Provozní kontrola proto používá také samostatnou kontrolní lahev, jejíž hodnota
            nesloužila k sestavení právě používané kalibrační křivky. Opakované rozbory této
            lahve ověřují, zda přístroj její hodnotu dlouhodobě obnovuje.
            NOAA ji v metodice z roku 2015 doložila 798 dvojicemi rozborů referenčních lahví
            z let 1994–2013, provedených s odstupem delším než rok. Přibližně 95 % posuzovaných
            rozdílů nepřesáhlo velikost 1 ppb. Před vyhodnocením autoři vyřadili jeden rozdíl
            větší než 5 ppb jako zjevný problém měření nebo odběru. Výsledek charakterizuje
            dlouhodobé opakování hodnot v této sestavě.{" "}
            <SourceLink id="2015_NOAA_CH4_Analysis">(NOAA, oddíl 6.2)</SourceLink>
          </p>
          <p>
            Rozšíření stupnice X2004A zahrnovalo porovnání referenčních lahví také optickým
            přístrojem. Oba způsoby přitom vycházely ze společných základních směsí.
            Shoda tedy prověřuje přenos hodnot mezi přístroji, ale sama neodhalí chybu společnou
            oběma referencím. Rozsah porovnání a nejistoty přiřazených hodnot zveřejňuje{" "}
            <SourceLink id="2015_NOAA_CH4_Scale">NOAA u stupnice X2004A</SourceLink>.
          </p>
          <h3>Porovnání na stanici Mace Head</h3>
          <p>
            Směrodatná odchylka popisuje rozptýlení jednotlivých rozdílů kolem průměru,
            nikoli nejistotu tohoto průměru. Přístroje využívaly různé principy měření,
            ale oba navazovaly na kalibrační stupnici NOAA.
            Porovnání proto zahrnuje nezávislou detekci, nikoli nezávislý původ celé stupnice.
            <SourceLink id="DOI_10_5194_amt_9_4737_2016"> Studie</SourceLink> výslovně porovnává
            jednotlivé dávky chromatografu se souběžnými minutovými údaji optického přístroje.
            Chromatograf měřil okolní vzduch jen dvakrát za hodinu. Průměr těchto dvou odběrů
            tak může zastupovat proměnlivý vzduch jinak než souvislé měření celé hodiny.
          </p>
        </details>

        <h2>Příklad rozboru jedné lahve</h2>
        <p>
          Veřejná <SourceLink id="2015_NOAA_CH4_Analysis">metodika NOAA, tabulka A1</SourceLink>,
          obsahuje dvacet analýz plynu z jedné lahve provedených 23. července 2015.
          Zveřejňuje plochy píků, poměry odezev i vypočtené hodnoty metanu.
          Začneme první dávkou vzorku a dvěma sousedními dávkami reference:
        </p>
        <figure className="method-data-output">
          <div className="method-data-output__table-wrap" role="region" aria-label="Plochy prvních tří píků" tabIndex={0}>
          <table>
            <caption>První tři rozbory z tabulky A1. Plochy jsou ve společných přístrojových jednotkách.</caption>
            <thead><tr><th>Čas v záznamu</th><th>Analyzovaný plyn</th><th>Plocha píku</th></tr></thead>
            <tbody>
              <tr><td>10:02</td><td>Reference před vzorkem</td><td>8 223 938</td></tr>
              <tr><td>10:06</td><td>Vzorek z lahve</td><td>8 214 265</td></tr>
              <tr><td>10:09</td><td>Reference po vzorku</td><td>8 225 255</td></tr>
            </tbody>
          </table>
          </div>
        </figure>
        <p>
          Průměr obou referenčních ploch je 8 224 596,5. Plochu vzorku vydělíme tímto průměrem
          podle dříve vysvětleného vztahu:
        </p>
        <Equation tex={String.raw`r = \frac{8\,214\,265}{8\,224\,596{,}5} \doteq 0{,}998743829`} />
        <p>
          Výsledek souhlasí s poměrem uvedeným v tabulce NOAA. Odezva vzorku je tedy o něco
          menší než odezva reference. Laboratoř tomuto poměru svou kalibrační křivkou přiřadila
          hodnotu <strong>1 852,01 ppb</strong>. Příklad začíná zveřejněnými plochami píků.
          Původní chromatogramy a číselné koeficienty tehdejší křivky tabulka neobsahuje,
          proto převod poměru na ppb přebíráme jako výsledek laboratoře.
        </p>
        <p>
          Stejný výpočet poměru můžeme zopakovat u všech dvaceti dávek.
          Potom sečteme jejich zveřejněné výsledky v ppb a vydělíme počtem analýz:
        </p>
        <Equation tex={String.raw`\bar{x} = \frac{37\,035{,}83}{20}\,\mathrm{ppb} = 1\,851{,}7915\,\mathrm{ppb}`} />
        <p>
          Po zaokrouhlení dostáváme <strong>1 851,79 ppb</strong>, stejně jako souhrn původní
          tabulky. Jednotlivé analýzy téhož plynu mají směrodatnou odchylku 0,74 ppb.
          Ta zde vyjadřuje rozptyl opakovaných rozborů, nikoli celkovou nejistotu přiřazené hodnoty.
          Graf ukazuje všech dvacet výsledků i jejich společný průměr.
        </p>
        <figure className="article-figure article-figure--scroll-mobile">
          <div className="article-figure__scroll" role="region" aria-label="Graf dvaceti analýz metanu, na malé obrazovce posuvný" tabIndex={0}>
            <Image className="article-figure__media" src={`${dataPath}/repeated-analyses.png`}
              alt="Dvacet výsledků opakovaného rozboru stejné lahve mezi 1850,69 a 1853,19 ppb. Vodorovná čára označuje průměr 1851,79 ppb."
              width={1800} height={900} unoptimized />
          </div>
          <figcaption>
            Vodorovná osa ukazuje pořadí analýzy, svislá molární zlomek metanu v ppb.
            Modré body jsou jednotlivé výsledky, oranžová přerušovaná čára jejich aritmetický
            průměr. Jde o opakované rozbory jedné lahve během dvou hodin, nikoli o vývoj
            metanu v atmosféře. Vlastní graf ze zveřejněné tabulky NOAA.{" "}
            <SourceLink id="2015_NOAA_CH4_Analysis">(NOAA, příloha A, tabulka A1)</SourceLink>
          </figcaption>
        </figure>
        <details className="method-details">
          <summary>Data a postup pro zopakování příkladu</summary>
          <p>
            Používáme celou tabulku A1 z dokumentu Analysis of Methane in Air, verze 1.2.1
            z 22. září 2015, tištěná strana 8, devátá strana PDF. Přepis obsahuje všech 41 řádků,
            tedy 20 dávek vzorku a 21 referencí. Žádný řádek nevyřazujeme.
            Označení S znamená vzorek a R referenci. Kód BB zachováváme podle předlohy,
            pro tento výpočet jej nevyužíváme. Přístup ke zdroji je z 19. října 2026.{" "}
            <SourceLink id="2015_NOAA_CH4_Analysis">(NOAA, příloha A, tabulka A1)</SourceLink>
          </p>
          <ul>
            <li><a href={`${dataPath}/noaa-table-a1.csv`}>Přepis celé tabulky A1, CSV</a></li>
            <li><a href={`${dataPath}/example.json`}>Původ dat, význam sloupců a kontrolní výsledky</a></li>
            <li><a href={`${dataPath}/reproduce.py`}>Skript pro kontrolu všech poměrů a výpočet průměru</a></li>
            <li><a href={`${dataPath}/plot.py`}>Skript pro vytvoření grafu</a></li>
          </ul>
          <p>
            Soubory uložte do jedné složky a spusťte <code>python reproduce.py</code>.
            Postačí Python 3 bez dalších knihoven. Skript zkontroluje otisk přepisu,
            přepočítá všech dvacet poměrů a porovná je se zveřejněnými hodnotami.
            Z uvedených výsledků v ppb vypočte průměr a výběrovou směrodatnou odchylku.
            Pro vytvoření grafu příkazem <code>python plot.py</code> je navíc potřebný Matplotlib.
          </p>
          <p>
            Původní dokument odkazujeme přímo u NOAA. Číselný přepis a fotografii přebíráme
            s uvedením původu podle <SourceLink id="WEB_NOAA_GML_Terms">podmínek NOAA Global Monitoring Laboratory</SourceLink>.
            Zdejší výpočet a graf jsou vlastním zpracováním Klimatologie.eu.
          </p>
        </details>

        <h2>Shrnutí</h2>
        <p>
          Plynová chromatografie zpřístupňuje složení vzduchu tím, že nejprve oddělí jeho
          složky a potom změří jejich odezvu vůči známým směsím. Pro klimatologii tak poskytuje
          údaje o metanu a dalších stopových plynech, které lze srovnávat mezi místy i obdobími.
          Společné reference propojují jednotlivé rozbory a umožňují ověřovat návaznost měření
          různými přístroji. Analýza vzduchu uchovaného v ledu rozšiřuje tento záznam do minulosti.
        </p>
      </div>
    </article>
  );
}
