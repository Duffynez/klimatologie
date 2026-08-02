import Image from "next/image";
import type { ReactNode } from "react";

function ReferenceLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a className="article-reference" href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

export function AtmosphericCo2Article() {
  return (
    <article className="article-layout">
      <aside className="article-glossary article-glossary--four" aria-label="Potřebné informace">
        <p className="eyebrow">Potřebné informace</p>
        <h2>Pojmy pro tento článek</h2>
        <dl>
          <div>
            <dt>ppm</dt>
            <dd>
              Počet částic z milionu. Hodnota 425 ppm znamená přibližně 425 molekul CO₂ na milion molekul
              suchého vzduchu, tedy 0,0425 %.
            </dd>
          </div>
          <div>
            <dt>Molární zlomek</dt>
            <dd>
              Podíl molekul CO₂ mezi všemi molekulami ve vzorku. U atmosférických měření se uvádí po odstranění
              vlivu vodní páry.
            </dd>
          </div>
          <div>
            <dt>Referenční plyn</dt>
            <dd>
              Vzduch v tlakové lahvi, jehož obsah CO₂ byl přesně určen. Přístroj podle něj převádí svůj signál na
              hodnotu v ppm.
            </dd>
          </div>
          <div>
            <dt>XCO₂</dt>
            <dd>
              Průměrný molární zlomek CO₂ v celém sloupci suchého vzduchu nad místem měření. Používá se u
              družicových a pozemních spektrometrů.
            </dd>
          </div>
        </dl>
        <p className="article-glossary__note">
          Číslo v ppm potřebuje vždy místo nebo vymezenou oblast, čas, způsob měření a kalibrační stupnici. Hodnota
          z jedné stanice, globální průměr u povrchu a družicové XCO₂ nejsou totožné výsledky.
        </p>
      </aside>

      <div className="article-prose">
        <h2>Co pozorujeme</h2>
        <p className="article-prose__intro">
          Atmosférický oxid uhličitý popisujeme podílem molekul CO₂ v suchém vzduchu. Měří se v odebraných vzorcích,
          průběžně v nasávaném vzduchu a z dálky podle pohlcování světla. Výsledek v ppm udává, kolik molekul CO₂
          připadá na milion molekul suchého vzduchu.
        </p>

        <p>
          Charles David Keeling v roce 1958 takto vyhodnotil padesát vzorků venkovního vzduchu odebraných na západě
          Severní Ameriky. O dva roky později zveřejnil první souvislá pozorování z observatoře Mauna Loa a z
          jižního pólu. V obou pracích spojil odběr okolního vzduchu s přesným určením množství CO₂ a s kontrolou
          pomocí referenčních plynů.{" "}
          <ReferenceLink href="https://doi.org/10.1016/0016-7037(58)90033-4">
            Keeling, 1958
          </ReferenceLink>{" "}
          a{" "}
          <ReferenceLink href="https://doi.org/10.1111/j.2153-3490.1960.tb01300.x">
            Keeling, 1960
          </ReferenceLink>
        </p>

        <p>
          Stejnou měřenou veličinu později rozšířila síť stanic. Conway a kol. popsali v roce 1994 týdenní odběry
          vzduchu na desítkách míst a rozdíly mezi zeměpisnými šířkami. Masarie a Tans v roce 1995 ukázali, jak lze
          z časově neúplných měření jednotlivých stanic sestavit vzájemně srovnatelný globální záznam. Andrews a
          kol. v roce 2014 podrobně doložili měření na vysokých věžích včetně kalibrace a nejistot.{" "}
          <ReferenceLink href="https://doi.org/10.1029/94JD01951">Conway et al., 1994</ReferenceLink>,{" "}
          <ReferenceLink href="https://doi.org/10.1029/95JD00859">Masarie &amp; Tans, 1995</ReferenceLink> a{" "}
          <ReferenceLink href="https://doi.org/10.5194/amt-7-647-2014">Andrews et al., 2014</ReferenceLink>
        </p>

        <p>
          Dnešní laboratoře navazují jednotlivá měření na společnou stupnici Světové meteorologické organizace.
          Její současná verze WMO CO₂ X2019 vychází z devatenácti tlakových lahví se vzduchem, jejichž hodnoty byly
          opakovaně určeny absolutní manometrickou metodou. Hall a kol. popsali vznik stupnice, její rozsah od
          přibližně 250 do 800 ppm i zpětné přepočítání starších kalibrací. Díky této návaznosti lze porovnávat
          vzorky odebrané různými pracovišti a v různých letech.{" "}
          <ReferenceLink href="https://doi.org/10.5194/amt-14-3015-2021">Hall et al., 2021</ReferenceLink>
        </p>

        <p>
          Družice měří příbuznou, ale jinak vymezenou veličinu. OCO-2 zaznamenává spektrum slunečního světla, které
          prošlo atmosférou, odrazilo se od povrchu a vrátilo se k přístroji. Z něj se počítá XCO₂, tedy průměr přes
          celý sloupec vzduchu. Eldering a kol. popsali první soubor těchto měření a Wunch a kol. jej porovnali s
          pozemními spektrometry sítě TCCON.{" "}
          <ReferenceLink href="https://doi.org/10.5194/amt-10-549-2017">Eldering et al., 2017</ReferenceLink> a{" "}
          <ReferenceLink href="https://doi.org/10.5194/amt-10-2209-2017">Wunch et al., 2017</ReferenceLink>
        </p>

        <h2>Historie měření</h2>
        <p>
          V 19. století se CO₂ zachycoval v zásaditém roztoku a jeho množství se určovalo chemickou analýzou. Jules
          Reiset odebíral v letech 1871–1880 vzduch u severního pobřeží Francie a v roce 1880 popsal použitý postup
          i výsledky v <em>Comptes rendus de l&apos;Académie des sciences</em>. Chemická měření byla pomalejší než
          dnešní přístroje a výsledek citlivě závisel na místě odběru, počasí i čistotě laboratorního postupu.{" "}
          <ReferenceLink href="https://www.biodiversitylibrary.org/item/23752">
            Reiset, 1880, původní svazek
          </ReferenceLink>
        </p>

        <p>
          Guy Stewart Callendar v roce 1958 znovu prošel třicet rozsáhlejších souborů měření z let 1866–1956.
          Porovnával použitou metodu, místo odběru a rozptyl hodnot a navrhl odhad 290 ppm pro rok 1900. Jeho práce
          je důležitá také tím, že ukazuje hranici starých chemických údajů: jednotlivé výsledky nelze spojit bez
          znalosti odběru a kontroly přístroje. Pozdější rozbor Fraserové a kol. znovu vyhodnotil původní záznamy
          ze západní Evropy a Reisetova měření porovnal s moderním sezónním průběhem.{" "}
          <ReferenceLink href="https://doi.org/10.3402/tellusa.v10i2.9231">Callendar, 1958</ReferenceLink> a{" "}
          <ReferenceLink href="https://doi.org/10.3402/tellusb.v38i2.15083">
            Fraser et al., 1986
          </ReferenceLink>
        </p>

        <p>
          Zásadní změnu přineslo spojení nedisperzního infračerveného analyzátoru s referenčními plyny, jejichž
          obsah CO₂ Keeling určoval manometricky. Přístroj mohl vzduch měřit opakovaně během dne a referenční plyn
          odhaloval posun jeho odezvy. Pravidelná měření začala na jižním pólu v roce 1957 a na Mauna Loa v březnu
          1958. Keeling a kol. později popsali celý postup výběru stabilního okolního vzduchu, kalibraci i první
          dvě desetiletí havajského záznamu.{" "}
          <ReferenceLink href="https://doi.org/10.1111/j.2153-3490.1976.tb00701.x">
            Keeling et al., 1976
          </ReferenceLink>
        </p>

        <figure className="article-figure">
          <Image
            className="article-figure__media"
            src="/media/atmospheric-co2/mauna-loa-1958.jpg"
            alt="Letecký pohled na observatoř Mauna Loa v roce 1958"
            width={2817}
            height={2156}
            sizes="(max-width: 850px) 100vw, 770px"
            unoptimized
          />
          <figcaption>
            Observatoř Mauna Loa v roce 1958, kdy zde začalo pravidelné měření atmosférického CO₂. Stanice leží
            přibližně 3 400 metrů nad mořem; nad okolní inverzní vrstvou často zachytává vzduch přenášený přes
            rozsáhlou část Tichého oceánu. Fotografie: NOAA Global Monitoring Laboratory, galerie observatoře
            Mauna Loa; dílo federální vlády USA.
          </figcaption>
        </figure>

        <p>
          NOAA zahájila vlastní pravidelné odběry na Niwot Ridge v Coloradu v roce 1967 a průběžná měření na
          základních observatořích v roce 1973. Síť se postupně rozšířila na ostrovy, pobřeží, lodě, vysoké věže,
          letadla a vnitrozemské stanice. Vzorky z různých míst se analyzují vůči stejné kalibrační stupnici, takže
          se vedle změny v čase dá sledovat i prostorové rozložení.{" "}
          <ReferenceLink href="https://gml.noaa.gov/ccgg/flask.html">
            NOAA Global Greenhouse Gas Reference Network
          </ReferenceLink>
        </p>

        <p>
          Starší atmosféru zpřístupnil vzduch uzavřený v polárním ledu. Neftel a kol. v roce 1982 zveřejnili
          měření CO₂ z antarktických a grónských ledových jader. Etheridge a kol. v roce 1996 spojili led,
          pórovitý sníh nad ním a přímá měření do záznamu posledního tisíciletí. Lüthi a kol. v roce 2008 rozšířili
          antarktická data na 800 000 let.{" "}
          <ReferenceLink href="https://doi.org/10.1038/295220a0">Neftel et al., 1982</ReferenceLink>,{" "}
          <ReferenceLink href="https://doi.org/10.1029/95JD03410">Etheridge et al., 1996</ReferenceLink> a{" "}
          <ReferenceLink href="https://doi.org/10.1038/nature06949">Lüthi et al., 2008</ReferenceLink>
        </p>

        <p>
          Od roku 2009 přibyla pravidelná družicová pozorování XCO₂ z japonské mise GOSAT a od září 2014 z mise
          NASA OCO-2. Družice výrazně rozšířily počet míst, nad nimiž lze CO₂ sledovat, současně však přinesly jiný
          typ výsledku: průměr přes výšku atmosféry získaný z naměřeného spektra. Měření zakrytá oblačností nebo
          silně ovlivněná aerosoly neprojdou kontrolou kvality, a proto družicová mapa nemá v každém průletu hodnotu
          pro každé místo.{" "}
          <ReferenceLink href="https://doi.org/10.5194/amt-10-59-2017">
            Crisp et al., 2017
          </ReferenceLink>
        </p>

        <h2>Co se skutečně měří</h2>
        <h3>Vzduch nasávaný na stanici</h3>
        <p>
          Stanice vede okolní vzduch potrubím do analyzátoru. Současný systém NOAA na Mauna Loa používá
          spektroskopii v optické dutině: laser prochází měřicí komorou a přístroj sleduje, jak rychle po vypnutí
          zdroje světlo zaniká na vlnové délce pohlcované CO₂. Od dubna 2019 tím nahradil starší infračervený
          analyzátor. Vzduch se před měřením vysuší a přístroj pravidelně dostává referenční plyn z tlakové lahve.{" "}
          <ReferenceLink href="https://gml.noaa.gov/ccgg/about/co2_measurements.html">
            NOAA: podrobný popis měření
          </ReferenceLink>
        </p>

        <h3>Vzorek odebraný do baňky</h3>
        <p>
          Na odběrném místě se venkovním vzduchem naplní dvojice skleněných baněk. Zaznamená se čas, poloha a
          okolnosti odběru a uzavřené baňky putují do centrální laboratoře. Tatáž porce vzduchu se tam může
          analyzovat na CO₂ i na desítky dalších plynů a izotopů. Dvojice vzorků slouží také jako kontrola, zda se
          při odběru nebo přepravě nestala chyba.
        </p>

        <figure className="article-figure article-figure--sample">
          <Image
            className="article-figure__media"
            src="/media/atmospheric-co2/noaa-air-flasks.jpg"
            alt="Dvojice skleněných baněk NOAA používaných pro odběr okolního vzduchu"
            width={300}
            height={399}
            sizes="300px"
            unoptimized
          />
          <figcaption>
            Skleněné baňky NOAA pro odběr okolního vzduchu. V síti se vzorky zpravidla odebírají v párech a
            odesílají do laboratoře v Boulderu. Fotografie a popis: NOAA Global Monitoring Laboratory, „Surface
            Flasks“; dílo federální vlády USA.
          </figcaption>
        </figure>

        <h3>Vzduch uzavřený v ledu</h3>
        <p>
          Z ledového jádra se oddělí přesně zvážený kus ledu, jeho bubliny se otevřou drcením nebo tavením ve
          vakuové aparatuře a uvolněný vzduch se analyzuje proti standardům. Stáří vzduchu je mladší než okolní
          led, protože sníh zůstává před uzavřením bublinek po určitou dobu propustný. Jediný vzorek navíc obsahuje
          směs vzduchu uzavřeného během několika let až staletí podle místa vrtu a rychlosti hromadění sněhu.
        </p>

        <p>
          Na Law Dome, kde sněhu přibývá rychle, určili Levchenko a kol. průměrné stáří CO₂ u dna propustné vrstvy
          na 8,9 ± 0,5 roku a celou šířku časového vyhlazení přibližně na 12,5 ± 1,5 roku. U pomalu narůstajícího
          ledu v Antarktidě může být vyhlazení mnohem delší. Ledová data proto zachovávají skutečný vzduch, ale
          rychlé změny v něm nejsou časově ostré stejně jako v denním měření stanice.{" "}
          <ReferenceLink href="https://doi.org/10.1029/96GL03156">
            Levchenko et al., 1996
          </ReferenceLink>{" "}
          a{" "}
          <ReferenceLink href="https://doi.org/10.1029/2003JD003562">
            Trudinger et al., 2003
          </ReferenceLink>
        </p>

        <h3>Světlo prošlé atmosférou</h3>
        <p>
          OCO-2 měří sluneční světlo ve třech úzkých částech spektra: v jednom pásmu kyslíku a ve dvou pásmech
          CO₂. Z hloubky absorpčních čar, tlaku, vodní páry, oblačnosti, aerosolů a odrazivosti povrchu výpočet
          odvodí množství CO₂ ve sloupci vzduchu. Kyslíkové pásmo pomáhá určit celkové množství suchého vzduchu,
          vůči němuž se CO₂ vyjádří. Výstupem jednoho úspěšného výpočtu je XCO₂ pro úzkou stopu družice.{" "}
          <ReferenceLink href="https://doi.org/10.5194/amt-10-549-2017">Eldering et al., 2017</ReferenceLink>
        </p>

        <h2>Jak vzniká zveřejněný záznam</h2>
        <h3>1. Každé měření dostane místo, čas a způsob odběru</h3>
        <p>
          Datový záznam začíná údajem analyzátoru nebo výsledkem laboratorního rozboru. Spolu s hodnotou se ukládá
          stanice, výška odběru, čas, použitý přístroj, tlaková lahev i provozní stav. U baněk se přidává identita
          obou nádob a okolnosti odběru. Bez těchto údajů nelze později správně použít novou kalibraci ani dohledat
          neobvyklý výsledek.
        </p>

        <h3>2. Výsledek se vztáhne k suchému vzduchu</h3>
        <p>
          Proměnlivé množství vodní páry by měnilo podíl všech ostatních plynů. NOAA proto na Mauna Loa vede
          vzorek přes studenou past, v níž voda zkondenzuje, a zveřejňuje molární zlomek v suchém vzduchu. Jiné
          systémy mohou vodní páru měřit a její vliv odstranit výpočtem. Použitý postup musí být uveden v
          dokumentaci dat.
        </p>

        <h3>3. Signál přístroje se porovná s referenčními plyny</h3>
        <p>
          Analyzátor nečte ppm přímo z jedné fyzikální vlastnosti. Měří elektrický nebo optický signál a jeho vztah
          k množství CO₂ určuje pomocí několika tlakových lahví. Ty tvoří kalibrační řetězec od pracovních lahví na
          stanici přes laboratorní standardy až k primárním standardům stupnice WMO CO₂ X2019. Změní-li se hodnota
          některého standardu po nové kalibraci, lze s uloženými údaji přepočítat i starší měření.{" "}
          <ReferenceLink href="https://doi.org/10.1029/2005JD006003">Zhao &amp; Tans, 2006</ReferenceLink> a{" "}
          <ReferenceLink href="https://doi.org/10.5194/amt-14-3015-2021">Hall et al., 2021</ReferenceLink>
        </p>

        <h3>4. Provozní vlivy se označí příznakem kvality</h3>
        <p>
          Záznam obsahuje i chvíle, kdy stanici ovlivní vzduch z bezprostředního okolí, porucha průtoku nebo práce
          na přístroji. NOAA původní hodnoty uchovává a přidává jim příznaky. Pro svůj záznam okolního vzduchu na
          Mauna Loa vybírá stabilní období a kontroluje směr větru i proměnlivost během hodiny. Výzkumník si může
          pro jinou otázku zvolit jiný výběr; příznak není skryté smazání naměřené hodnoty.
        </p>

        <h3>5. Z jednotlivých stanic vzniknou denní a měsíční hodnoty</h3>
        <p>
          Průběžný přístroj dodává mnoho výsledků za hodinu, baňky obvykle několik vzorků za měsíc. Program proto
          zveřejňuje vedle jednotlivých měření také hodinové, denní nebo měsíční průměry. U Mauna Loa je červená
          křivka v převzatém grafu měsíční průměr a černá křivka tentýž záznam po odhadu a odečtení pravidelně se
          opakujícího sezónního průběhu.
        </p>

        <h3>6. Globální hodnota se vypočte z více zeměpisných šířek</h3>
        <p>
          Globální produkt NOAA používá stanice, které sledují vzduch nad mořským povrchem nebo jeho blízké
          pozadí. Pro každou stanici se nejprve proloží hladký průběh v čase. Ve 48 okamžicích každého roku se
          hodnoty stanic uspořádají podle zeměpisné šířky, mezi nimi se vypočte plynulý průběh a ten se plošně
          zprůměruje. Globální číslo proto není prostým aritmetickým průměrem všech dostupných vzorků.{" "}
          <ReferenceLink href="https://doi.org/10.1029/95JD00859">Masarie &amp; Tans, 1995</ReferenceLink>
        </p>

        <h3>7. Nejistota a verze zůstávají součástí výsledku</h3>
        <p>
          Nejistota zahrnuje opakovatelnost analýzy, návaznost referenčních plynů, spojení různých přístrojů i
          prostorový výpočet. NOAA u ročního globálního průměru zveřejňuje nejistotu a poslední rok označuje jako
          předběžný, dokud neskončí nové kalibrace a kontroly. Změna kalibrační stupnice může upravit starší
          hodnoty o desetiny ppm; proto má citace obsahovat také verzi nebo datum stažení.
        </p>

        <h2>Zveřejňovaná data</h2>
        <p>
          Následující zdroje zpřístupňují odlišné části pozorování. Pro graf jedné stanice je vhodný Mauna Loa,
          pro globální průměr produkt z více povrchových míst, pro jednotlivé vzorky ObsPack a pro starou atmosféru
          archivy ledových jader.
        </p>

        <div className="article-data-list">
          <section className="article-data-item">
            <h3>Mauna Loa: NOAA a Scripps</h3>
            <p>
              Nejdelší souvislé přímé měření atmosférického CO₂. Scripps zahájil pozorování v březnu 1958, NOAA
              měří na stejné observatoři nezávisle od roku 1974. Obě instituce zveřejňují měsíční a roční hodnoty;
              souběh slouží jako dlouhodobá kontrola.
            </p>
            <p className="article-data-item__links">
              <ReferenceLink href="https://gml.noaa.gov/ccgg/trends/data.html">Data NOAA ke stažení</ReferenceLink>
              {" · "}
              <ReferenceLink href="https://scrippsco2.ucsd.edu/data/atmospheric-co2-data/sampling-station-records/mauna-loa-observatory-hawaii/">
                Data Scripps ke stažení
              </ReferenceLink>
            </p>
          </section>

          <section className="article-data-item">
            <h3>Globální průměr NOAA</h3>
            <p>
              Měsíční a roční globální hodnoty z povrchových míst sledujících mořské pozadí. Záznam začíná rokem
              1979; tabulky obsahují hodnotu, dlouhodobý průběh a zveřejněnou nejistotu. Poslední úplný rok může
              být ještě předběžný.
            </p>
            <p className="article-data-item__links">
              <ReferenceLink href="https://gml.noaa.gov/ccgg/trends/gl_data.html">
                Popis a soubory CSV
              </ReferenceLink>
              {" · "}
              <ReferenceLink href="https://doi.org/10.15138/9N0H-ZH07">Datová citace a verze</ReferenceLink>
            </p>
          </section>

          <section className="article-data-item">
            <h3>Jednotlivé stanice a ObsPack</h3>
            <p>
              NOAA zpřístupňuje jednotlivé baňky, průběžná měření observatoří, letadla a vysoké věže. ObsPack
              spojuje data mnoha institucí do jednotného formátu a zachovává původ, použitou stupnici i příznaky
              kvality každého záznamu.
            </p>
            <p className="article-data-item__links">
              <ReferenceLink href="https://gml.noaa.gov/ccgg/data/getdata.php?gas=co2">
                Výběr měření CO₂
              </ReferenceLink>
              {" · "}
              <ReferenceLink href="https://gml.noaa.gov/ccgg/obspack/">ObsPack</ReferenceLink>
            </p>
          </section>

          <section className="article-data-item">
            <h3>WMO Global Atmosphere Watch</h3>
            <p>
              Světové datové centrum pro skleníkové plyny shromažďuje měření členských laboratoří. Roční WMO
              Greenhouse Gas Bulletin zveřejňuje vlastní globální průměr, počet použitých stanic a nejistotu.
              Tento výpočet používá širší soubor stanic než globální produkt NOAA.
            </p>
            <p className="article-data-item__links">
              <ReferenceLink href="https://gaw.kishou.go.jp/">WDCGG data</ReferenceLink>
              {" · "}
              <ReferenceLink href="https://wmo.int/resources/publication-series/greenhouse-gas-bulletin/wmo-greenhouse-gas-bulletin-no-21">
                WMO Bulletin č. 21
              </ReferenceLink>
            </p>
          </section>

          <section className="article-data-item">
            <h3>Vzduch z ledových jader</h3>
            <p>
              NOAA/NCEI spravuje původní tabulky jednotlivých vrtů i složený záznam posledních 800 000 let.
              Metadata uvádějí použitá jádra, stáří vzduchu, původní publikace a verzi souboru. Časové rozlišení se
              mezi vrty liší a musí se číst společně s daty.
            </p>
            <p className="article-data-item__links">
              <ReferenceLink href="https://www.ncei.noaa.gov/access/metadata/landing-page/bin/iso?id=noaa-icecore-17975">
                Složený záznam NOAA/NCEI
              </ReferenceLink>
              {" · "}
              <ReferenceLink href="https://doi.org/10.1002/2014GL061957">
                Revize Bereiter et al., 2015
              </ReferenceLink>
            </p>
          </section>

          <section className="article-data-item">
            <h3>OCO-2</h3>
            <p>
              NASA zveřejňuje jednotlivé úspěšné výpočty XCO₂ i zjednodušené soubory Lite. Referenčním záznamem je
              v době napsání článku zpětně zpracovaná verze 11.2r. Kvalitativní příznak odděluje doporučená měření
              od výsledků ovlivněných oblačností, aerosoly nebo povrchem.
            </p>
            <p className="article-data-item__links">
              <ReferenceLink href="https://ocov2.jpl.nasa.gov/science/oco-2-data-center/">
                Datové centrum OCO-2
              </ReferenceLink>
              {" · "}
              <ReferenceLink href="https://ocov2.jpl.nasa.gov/science/validation/">
                Kontrola verze 11.2
              </ReferenceLink>
            </p>
          </section>
        </div>

        <h2>Srovnání dat</h2>
        <p>
          Záznam Mauna Loa odpovídá jedné přesně udržované stanici. Jeho výhodou je délka, časté měření a souběh
          dvou nezávislých programů. Jeho číslo však zastupuje vzduch zachycený nad subtropickým severním Tichým
          oceánem, nikoli plošný průměr celé planety. Globální produkt NOAA začíná později, protože potřebuje
          dostatek stanic v různých zeměpisných šířkách.
        </p>

        <figure className="article-figure article-figure--scroll-mobile">
          <div className="article-figure__scroll">
            <Image
              className="article-figure__media"
              src="/media/atmospheric-co2/noaa-mauna-loa-co2-monthly.png"
              alt="Měsíční molární zlomek oxidu uhličitého na observatoři Mauna Loa od roku 1958"
              width={800}
              height={600}
              sizes="(max-width: 850px) 720px, 770px"
              unoptimized
            />
          </div>
          <div className="article-figure__key" aria-label="Vysvětlení grafu Mauna Loa">
            <p>
              <strong>Červená křivka:</strong> měsíční hodnoty včetně pravidelného průběhu uvnitř roku.
            </p>
            <p>
              <strong>Černá křivka:</strong> dlouhodobý průběh po odhadu sezónního kolísání.
            </p>
          </div>
          <figcaption>
            Atmosférický CO₂ na Mauna Loa od roku 1958. Graf spojuje měření Scripps Institution of Oceanography a
            NOAA Global Monitoring Laboratory. Verze grafu: 6. července 2026. Zdroj: NOAA GML, převzato beze
            změny; dílo federální vlády USA.
          </figcaption>
        </figure>

        <p>
          Globální graf NOAA má stejnou jednotku, ale jiný zeměpisný význam. Vychází z více povrchových stanic a
          každou část Země zastupuje podle zeměpisné šířky, nikoli podle počtu odebraných baněk. Oba grafy proto
          ukazují podobný dlouhodobý průběh a pravidelné kolísání, jejich hodnoty v jednom měsíci se však mohou
          lišit.
        </p>

        <figure className="article-figure article-figure--scroll-mobile">
          <div className="article-figure__scroll">
            <Image
              className="article-figure__media"
              src="/media/atmospheric-co2/noaa-global-co2-monthly.png"
              alt="Globální měsíční průměr molárního zlomku oxidu uhličitého od roku 1979"
              width={800}
              height={600}
              sizes="(max-width: 850px) 720px, 770px"
              unoptimized
            />
          </div>
          <div className="article-figure__key" aria-label="Vysvětlení globálního grafu NOAA">
            <p>
              <strong>Červené body:</strong> globální měsíční průměry povrchového vzduchu.
            </p>
            <p>
              <strong>Černá křivka:</strong> tentýž výpočet po odhadu sezónního kolísání.
            </p>
          </div>
          <figcaption>
            Globální měsíční průměr CO₂ vypočtený NOAA z povrchových míst sledujících mořské pozadí. Poslední rok
            je předběžný. Verze grafu: 6. července 2026. Zdroj: NOAA GML, datová citace Lan, Tans a Thoning,
            DOI 10.15138/9N0H-ZH07; převzato beze změny.
          </figcaption>
        </figure>

        <p>
          Také dva globální produkty mohou dát pro stejný rok odlišné číslo. NOAA uvádí pro rok 2024 hodnotu
          422,79 ± 0,10 ppm, zatímco WMO z širší sítě stanic 423,9 ± 0,2 ppm. Rozdíl vzniká výběrem stanic,
          prostorovým výpočtem a přesným vymezením produktu. Pro změnu mezi roky je proto správné používat stále
          stejný produkt a uvést jeho verzi, místo aby se hodnoty z NOAA a WMO spojily do jednoho pokračování.{" "}
          <ReferenceLink href="https://gml.noaa.gov/ccgg/trends/gl_data.html">NOAA, globální data</ReferenceLink> a{" "}
          <ReferenceLink href="https://wmo.int/resources/publication-series/greenhouse-gas-bulletin/wmo-greenhouse-gas-bulletin-no-21">
            WMO Bulletin č. 21
          </ReferenceLink>
        </p>

        <h2 id="pozorovani">Pozorování</h2>
        <p>
          Souvislé měření na Mauna Loa i globální výpočet z více povrchových stanic zaznamenávají v celém svém
          rozsahu růst atmosférického CO₂. Na Mauna Loa vzrostl roční průměr NOAA z 315,98 ± 0,12 ppm v roce 1959
          na 427,35 ± 0,12 ppm v roce 2025. Rozdíl činí 111,37 ppm, tedy přibližně 35 % výchozí hodnoty. Rok 1958
          zde není vhodný pro stejný rozdíl, protože neobsahuje všech dvanáct měsíců.
        </p>

        <p>
          Globální roční záznam NOAA začíná hodnotou 336,85 ± 0,10 ppm v roce 1979. Pro rok 2025 uvádí
          425,64 ± 0,09 ppm, zatím jako předběžnou hodnotu. Rozdíl mezi těmito dvěma roky je 88,79 ppm. Nejnovější
          zveřejněný měsíční globální průměr v době napsání článku je 428,55 ppm pro duben 2026; měsíční číslo se
          nesrovnává přímo s ročním průměrem.
        </p>

        <p>
          Na obou moderních grafech je dlouhodobá změna překryta pravidelným kolísáním během roku. Velikost a
          načasování tohoto kolísání se mezi stanicemi liší. Conway a kol. doložili v celosvětové síti také rozdíly
          mezi zeměpisnými šířkami: v jednom okamžiku nemá povrchový vzduch na všech místech přesně stejný molární
          zlomek CO₂. Globální průměr tento prostorový obraz shrnuje do jednoho čísla.{" "}
          <ReferenceLink href="https://doi.org/10.1029/94JD01951">Conway et al., 1994</ReferenceLink>
        </p>

        <p>
          Ledová jádra prodlužují pozorování do období před přístroji. Složený antarktický záznam použitý v grafu
          NOAA se během posledních 800 000 let pohybuje přibližně mezi 170 a 300 ppm. Samostatně vyznačený moderní
          roční průměr pro rok 2024 je 422,8 ppm. Bod pro rok 2024 pochází z přímého měření; fialová křivka ze
          vzduchu uzavřeného v ledu. Graf tedy porovnává dvě metody a dvě velmi odlišná časová rozlišení.
        </p>

        <p>
          Převzatý graf NOAA odkazuje na práci Lüthiho a kol. z roku 2008. Současný archiv NOAA/NCEI místo jejího
          původního složeného souboru nabízí revizi Bereitera a kol. z roku 2015. Autoři v nejhlubší části jádra
          odhalili chybu při uvolňování vzduchu z ledu, která v nejstarších vzorcích dosahovala 10,1 ± 2,4 ppm, a
          dotčené hodnoty opravili. Graf je vhodný pro pohled na celý rozsah; pro výpočet konkrétní hodnoty nebo
          časového intervalu je určena revidovaná tabulka.{" "}
          <ReferenceLink href="https://doi.org/10.1002/2014GL061957">
            Bereiter et al., 2015
          </ReferenceLink>
        </p>

        <figure className="article-figure article-figure--scroll-mobile article-figure--scroll-wide">
          <div className="article-figure__scroll">
            <Image
              className="article-figure__media"
              src="/media/atmospheric-co2/noaa-co2-800000-years.png"
              alt="Oxid uhličitý ze vzduchu v antarktickém ledu za posledních 800 tisíc let a moderní průměr roku 2024"
              width={1400}
              height={1200}
              sizes="(max-width: 850px) 980px, 770px"
              unoptimized
            />
          </div>
          <div className="article-figure__key" aria-label="Vysvětlení grafu ledových jader">
            <p>
              <strong>Fialová křivka:</strong> CO₂ ze vzduchu uzavřeného v antarktických ledových jádrech.
            </p>
            <p>
              <strong>Růžový bod:</strong> globální roční průměr z přímých povrchových měření pro rok 2024.
            </p>
          </div>
          <figcaption>
            Atmosférický CO₂ za posledních 800 000 let. Vodorovná osa směřuje od dávné minulosti vlevo k
            současnosti vpravo. Graf: NOAA Climate.gov, zveřejněno 30. dubna 2025; ledová data podle Lüthi et al.
            (2008) z archivu NOAA/NCEI, moderní hodnota NOAA GML. Převzato beze změny; dílo federální vlády USA.
          </figcaption>
        </figure>

        <p>
          OCO-2 od roku 2014 zachycuje XCO₂ v úzkých stopách po celé Zemi. Po filtraci oblačnosti, aerosolů a
          problematických odrazů lze sledovat rozdíly mezi oblastmi i jejich změnu v čase. Verze 11.2 je navázána
          přes pozemní síť TCCON a měření z letadel na stupnici WMO; tým mise pro ni uvádí odchylku od pozemní
          kontroly i náhodný rozptyl menší než 0,85 ppm. Tato hodnota popisuje kvalitu družicového XCO₂, nikoli
          nejistotu globálního povrchového průměru.{" "}
          <ReferenceLink href="https://ocov2.jpl.nasa.gov/science/validation/">
            OCO-2: kontrola verze 11.2
          </ReferenceLink>
        </p>

        <div className="article-observation-summary">
          <p className="eyebrow">Shrnutí pozorování</p>
          <p>
            Koncentrace oxidu uhličitého na Mauna Loa vzrostla z 315,98 ppm v roce 1959 na 427,35 ppm v roce 2025.
            Přírůstek 111,37 ppm odpovídá přibližně 35 % hodnoty na začátku tohoto období. Globální povrchový průměr
            se mezi roky 1979 a 2025 zvýšil z 336,85 na 425,64 ppm. Dlouhodobý růst je doprovázen pravidelným sezónním
            kolísáním a rozdíly mezi zeměpisnými šířkami. Během předchozích 800 000 let se koncentrace zachycená v
            antarktickém ledu pohybovala přibližně mezi 170 a 300 ppm; globální průměr roku 2024 dosáhl 422,8 ppm a
            ležel nad celým tímto historickým rozsahem.
          </p>
        </div>

        <h2>Prameny, data a licence</h2>
        <div className="article-source-groups">
          <section>
            <h3>Historické a primární práce</h3>
            <ul>
              <li>
                Reiset, J. (1880): <em>Recherches sur la proportion de l&apos;acide carbonique dans l&apos;air</em>,
                Comptes rendus, 90, 1144–1148.{" "}
                <ReferenceLink href="https://www.biodiversitylibrary.org/item/23752">
                  Digitalizovaný původní svazek
                </ReferenceLink>
              </li>
              <li>
                Callendar, G. S. (1958): <em>On the Amount of Carbon Dioxide in the Atmosphere</em>, Tellus, 10,
                243–248.{" "}
                <ReferenceLink href="https://doi.org/10.3402/tellusa.v10i2.9231">
                  DOI 10.3402/tellusa.v10i2.9231
                </ReferenceLink>
              </li>
              <li>
                Keeling, C. D. (1958): <em>The concentration and isotopic abundances of atmospheric carbon dioxide
                in rural areas</em>, Geochimica et Cosmochimica Acta, 13, 322–334.{" "}
                <ReferenceLink href="https://doi.org/10.1016/0016-7037(58)90033-4">
                  DOI 10.1016/0016-7037(58)90033-4
                </ReferenceLink>
              </li>
              <li>
                Keeling, C. D. (1960): <em>The Concentration and Isotopic Abundances of Carbon Dioxide in the
                Atmosphere</em>, Tellus, 12, 200–203.{" "}
                <ReferenceLink href="https://doi.org/10.1111/j.2153-3490.1960.tb01300.x">
                  DOI 10.1111/j.2153-3490.1960.tb01300.x
                </ReferenceLink>
              </li>
              <li>
                Keeling, C. D. et al. (1976): <em>Atmospheric carbon dioxide variations at Mauna Loa Observatory,
                Hawaii</em>, Tellus, 28, 538–551.{" "}
                <ReferenceLink href="https://doi.org/10.1111/j.2153-3490.1976.tb00701.x">
                  DOI 10.1111/j.2153-3490.1976.tb00701.x
                </ReferenceLink>
              </li>
              <li>
                Conway, T. J. et al. (1994): <em>Evidence for interannual variability of the carbon cycle from the
                NOAA/CMDL global air sampling network</em>, Journal of Geophysical Research, 99, 22831–22855.{" "}
                <ReferenceLink href="https://doi.org/10.1029/94JD01951">
                  DOI 10.1029/94JD01951
                </ReferenceLink>
              </li>
              <li>
                Etheridge, D. M. et al. (1996): <em>Natural and anthropogenic changes in atmospheric CO₂ over the
                last 1000 years from air in Antarctic ice and firn</em>, Journal of Geophysical Research, 101,
                4115–4128.{" "}
                <ReferenceLink href="https://doi.org/10.1029/95JD03410">
                  DOI 10.1029/95JD03410
                </ReferenceLink>
              </li>
              <li>
                Lüthi, D. et al. (2008): <em>High-resolution carbon dioxide concentration record 650,000–800,000
                years before present</em>, Nature, 453, 379–382.{" "}
                <ReferenceLink href="https://doi.org/10.1038/nature06949">
                  DOI 10.1038/nature06949
                </ReferenceLink>
              </li>
              <li>
                Bereiter, B. et al. (2015): <em>Revision of the EPICA Dome C CO₂ record from 800 to 600 kyr before
                present</em>, Geophysical Research Letters, 42, 542–549.{" "}
                <ReferenceLink href="https://doi.org/10.1002/2014GL061957">
                  DOI 10.1002/2014GL061957
                </ReferenceLink>
              </li>
            </ul>
          </section>

          <section>
            <h3>Metodické práce</h3>
            <ul>
              <li>
                Masarie, K. A. &amp; Tans, P. P. (1995): globálně konzistentní zpracování měření CO₂.{" "}
                <ReferenceLink href="https://doi.org/10.1029/95JD00859">
                  DOI 10.1029/95JD00859
                </ReferenceLink>
              </li>
              <li>
                Zhao, C. L. &amp; Tans, P. P. (2006): nejistota kalibrační stupnice WMO.{" "}
                <ReferenceLink href="https://doi.org/10.1029/2005JD006003">
                  DOI 10.1029/2005JD006003
                </ReferenceLink>
              </li>
              <li>
                Andrews, A. E. et al. (2014): přístroje a nejistoty měření CO₂ na vysokých věžích NOAA.{" "}
                <ReferenceLink href="https://doi.org/10.5194/amt-7-647-2014">
                  DOI 10.5194/amt-7-647-2014
                </ReferenceLink>
              </li>
              <li>
                Hall, B. D. et al. (2021): revize kalibrační stupnice WMO CO₂ X2019.{" "}
                <ReferenceLink href="https://doi.org/10.5194/amt-14-3015-2021">
                  DOI 10.5194/amt-14-3015-2021
                </ReferenceLink>
              </li>
              <li>
                Levchenko, V. A. et al. (1996) a Trudinger, C. M. et al. (2003): stáří a časové vyhlazení vzduchu
                v ledu.{" "}
                <ReferenceLink href="https://doi.org/10.1029/96GL03156">
                  Levchenko et al.
                </ReferenceLink>
                {" · "}
                <ReferenceLink href="https://doi.org/10.1029/2003JD003562">
                  Trudinger et al.
                </ReferenceLink>
              </li>
              <li>
                Eldering, A. et al. (2017) a Wunch, D. et al. (2017): získání a pozemní ověření XCO₂ z OCO-2.{" "}
                <ReferenceLink href="https://doi.org/10.5194/amt-10-549-2017">
                  Eldering et al.
                </ReferenceLink>
                {" · "}
                <ReferenceLink href="https://doi.org/10.5194/amt-10-2209-2017">
                  Wunch et al.
                </ReferenceLink>
              </li>
            </ul>
          </section>

          <section>
            <h3>Data ke stažení</h3>
            <ul>
              <li>
                NOAA GML: globální měsíční a roční CO₂, verze 6. července 2026.{" "}
                <ReferenceLink href="https://gml.noaa.gov/ccgg/trends/gl_data.html">
                  Tabulky a metodika
                </ReferenceLink>
                {" · "}
                <ReferenceLink href="https://doi.org/10.15138/9N0H-ZH07">Datová citace</ReferenceLink>
              </li>
              <li>
                NOAA GML a Scripps: přímá měření na Mauna Loa.{" "}
                <ReferenceLink href="https://gml.noaa.gov/ccgg/trends/data.html">NOAA</ReferenceLink>
                {" · "}
                <ReferenceLink href="https://scrippsco2.ucsd.edu/data/atmospheric-co2-data/sampling-station-records/mauna-loa-observatory-hawaii/">
                  Scripps
                </ReferenceLink>
              </li>
              <li>
                NOAA GML: jednotlivá měření a sjednocené soubory ObsPack.{" "}
                <ReferenceLink href="https://gml.noaa.gov/ccgg/data/getdata.php?gas=co2">
                  Výběr dat
                </ReferenceLink>
                {" · "}
                <ReferenceLink href="https://gml.noaa.gov/ccgg/obspack/">ObsPack</ReferenceLink>
              </li>
              <li>
                WMO: <em>Greenhouse Gas Bulletin No. 21</em>, globální hodnoty za rok 2024.{" "}
                <ReferenceLink href="https://wmo.int/resources/publication-series/greenhouse-gas-bulletin/wmo-greenhouse-gas-bulletin-no-21">
                  Bulletin a PDF
                </ReferenceLink>
              </li>
              <li>
                NOAA/NCEI: složený záznam CO₂ z antarktických ledových jader za 800 000 let.{" "}
                <ReferenceLink href="https://www.ncei.noaa.gov/access/metadata/landing-page/bin/iso?id=noaa-icecore-17975">
                  Data a metadata
                </ReferenceLink>
              </li>
              <li>
                NASA/JPL: referenční soubory OCO-2 XCO₂ Lite v11.2r.{" "}
                <ReferenceLink href="https://ocov2.jpl.nasa.gov/science/oco-2-data-center/">
                  Datové centrum
                </ReferenceLink>
              </li>
            </ul>
          </section>

          <section>
            <h3>Obrázky a práva k použití</h3>
            <ul>
              <li>
                Fotografie observatoře Mauna Loa z roku 1958 pochází z{" "}
                <ReferenceLink href="https://gml.noaa.gov/obop/mlo/gallery/NOAA_MaunaLoa_Aerial%20Photos%20of%20the%20Mauna%20Loa%20Observatory/index.html">
                  galerie NOAA GML
                </ReferenceLink>
                .
              </li>
              <li>
                Fotografie odběrových baněk a její popis pocházejí ze stránky{" "}
                <ReferenceLink href="https://gml.noaa.gov/ccgg/behind_the_scenes/surface.html">
                  NOAA GML: Surface Flasks
                </ReferenceLink>
                .
              </li>
              <li>
                Grafy Mauna Loa a globálního průměru byly převzaty beze změny z{" "}
                <ReferenceLink href="https://gml.noaa.gov/ccgg/trends/">NOAA GML Trends in CO₂</ReferenceLink>;
                datum verze je vytištěno přímo v obrazu.
              </li>
              <li>
                Graf 800 000 let zveřejnila NOAA Climate.gov 30. dubna 2025.{" "}
                <ReferenceLink href="https://prod-01-asg-www-climate.woc.noaa.gov/media/16929">
                  Původní soubor, popis a datové zdroje
                </ReferenceLink>
              </li>
              <li>
                Uvedené materiály NOAA jsou díly federální vlády USA a jsou převzaty jako volná díla, pokud u
                konkrétního souboru není uvedeno jinak. Loga a názvy institucí nevyjadřují podporu tohoto webu.{" "}
                <ReferenceLink href="https://www.noaa.gov/disclaimer">Pravidla NOAA</ReferenceLink>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </article>
  );
}
