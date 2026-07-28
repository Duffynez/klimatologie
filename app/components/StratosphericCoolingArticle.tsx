import Image from "next/image";
import type { ReactNode } from "react";

function ReferenceLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a className="article-reference" href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

export function StratosphericCoolingArticle() {
  return (
    <article className="article-layout">
      <div className="article-prose">
        <p className="article-prose__intro">
          Dlouhodobá změna teploty ve stratosféře je soubor časových řad, které popisují tepelný stav vymezené
          vrstvy atmosféry nad tropopauzou. Každá taková řada musí určit výškovou nebo tlakovou vrstvu, územní
          rozsah, časový krok, referenční období a způsob zpracování přístrojových dat. Označení
          „stratosférické ochlazování“ pak popisuje zápornou dlouhodobou změnu v takto vymezené řadě. Randel a
          kol. srovnali satelitní, radiosondážní a lidarová pozorování právě proto, že jednotlivé metody sledují
          odlišné části svislého profilu a mají odlišnou historii měření. {" "}
          <ReferenceLink href="https://doi.org/10.1029/2008JD010421">Randel et al., 2009</ReferenceLink>
        </p>

        <h2>Co přesně se měří</h2>
        <p>
          Teplota ve stratosféře není jedna hodnota pro celou planetu. V daném okamžiku se liší se zeměpisnou
          šířkou, roční dobou i výškou. Pozorovací řady proto zveřejňují teplotu na tlakových hladinách, například
          100, 70, 50, 30 nebo 10 hPa, případně průměr přes širší vrstvu. Tlak zde není doplňkový údaj: stejná
          tlaková hladina se v atmosféře nenachází v přesně stejné geometrické výšce na každém místě a v každém
          ročním období. NOAA při svém dřívějším každodenním přehledu uváděla devět hladin od 100 do 0,4 hPa,
          přibližně v rozsahu 16 až 55 km. {" "}
          <ReferenceLink href="https://www.cpc.ncep.noaa.gov/products/stratosphere/temperature/index.shtml">
            NOAA CPC: tlakové hladiny a jejich přibližná výška
          </ReferenceLink>
        </p>

        <p>
          U satelitních řad se často setkáme s výrazem <em>teplota dolní stratosféry</em>, zkráceně TLS. Jde o
          vrstový údaj: kanál MSU 4, jeho nástupce AMSU-A 9 a novější ATMS 10 snímají mikrovlnné záření kyslíku
          z širokého svislého pásma atmosféry, jehož citlivost vrcholí v dolní stratosféře. Nejde tedy o přesný
          odečet teploty v jediném kilometru výšky. NOAA tento produkt zveřejňuje jako měsíční mřížkovou řadu a
          samostatně uvádí všechny tři navazující přístrojové generace. {" "}
          <ReferenceLink href="https://www.ncei.noaa.gov/products/climate-data-records/mean-layer-temperature-noaa">
            NOAA Mean Layer Temperature CDR
          </ReferenceLink>
        </p>

        <p>
          V této kapitole proto výraz „ochlazování stratosféry“ nikdy neznamená stejnou změnu v celé vrstvě od
          tropopauzy po stratopauzu. U každého grafu je nutné číst, zda ukazuje tlakové hladiny, vrstvovou
          teplotu, globální nebo regionální průměr a jaké období je použito jako nula anomálie. Bez těchto údajů
          nelze číslo zařadit k žádné konkrétní pozorovací řadě.
        </p>

        <h2>Od kdy máme použitelné řady</h2>
        <p>
          Radiosondy poskytují údaje o teplotě ve volné atmosféře od poloviny 20. století. Haimberger popisuje,
          že pro klimatickou práci mají záznamy hodnotu již od čtyřicátých let, zároveň však obsahují množství
          nepřírodních skoků souvisejících s přístroji a provozem stanic. Pro velkoplošné srovnávání proto
          současné radiosondážní produkty obvykle začínají rokem 1958. {" "}
          <ReferenceLink href="https://doi.org/10.1175/JCLI4050.1">Haimberger, 2007</ReferenceLink>
        </p>

        <p>
          Globální satelitní řady začínají na konci roku 1978 se sondou MSU na družici TIROS-N. Od roku 1979
          jsou k dispozici také měření Stratospheric Sounding Unit neboli SSU, určená pro střední a vyšší
          stratosféru. V devadesátých letech začal přechod k přístrojům AMSU-A. Ten není pouhým připsáním dalších
          hodnot na konec tabulky: oba přístroje mají jiné kanály a jinou svislou citlivost, proto je jejich
          návaznost samostatným úkolem datové analýzy. {" "}
          <ReferenceLink href="https://doi.org/10.1175/2008JTECHA1176.1">Mears &amp; Wentz, 2009</ReferenceLink>{" "}
          a <ReferenceLink href="https://doi.org/10.1175/JTECH-D-16-0018.1">Zou &amp; Qian, 2016</ReferenceLink>.
        </p>

        <p>
          Třetí důležitá větev je rádiová zákrytová metoda GNSS. Když signál navigační družice prochází okrajem
          atmosféry k přijímači na jiné družici, jeho dráha se mění podle vlastností vzduchu. Z těchto změn lze
          odvodit svislé profily atmosféry. Steiner a kol. použili tehdejší záznam 1995–2008 pro dolní
          stratosféru a ukázali, proč je tato metoda cenná jako nezávislá, výškově rozlišená řada. {" "}
          <ReferenceLink href="https://doi.org/10.1029/2009GL039777">Steiner et al., 2009</ReferenceLink>
        </p>

        <h2>Radiosonda: přímý profil z balonu</h2>
        <p>
          Radiosonda je malý přístroj nesený balonem. Při výstupu měří mimo jiné teplotu a tlak a vysílá hodnoty
          k pozemní přijímací stanici. Výsledkem jednoho letu je svislý profil, ze kterého lze odečíst teplotu na
          standardních tlakových hladinách. To je zásadně jiný typ informace než satelitní vrstvový průměr:
          radiosonda vzorkuje konkrétní místo a postupně různé výšky, zatímco globální řada z ní vzniká až po
          spojení mnoha stanic a měsíců. {" "}
          <ReferenceLink href="https://www.noaa.gov/jetstream/upperair/radiosondes">
            NOAA: fungování radiosondy
          </ReferenceLink>
        </p>

        <figure className="article-figure article-figure--portrait">
          <Image
            className="article-figure__media"
            src="/media/stratosphere/noaa-radiosonde-balloon-1944.jpg"
            alt="Meteorologové připravují vodíkový balon s radiosondou k vypuštění na Islandu v roce 1944."
            width={341}
            height={309}
            unoptimized
          />
          <figcaption>
            Příprava balonu s radiosondou na Meeks Field na Islandu, 1944. Fotografie: U.S. Army Air Force,
            zveřejněná NOAA NCEI. {" "}
            <ReferenceLink href="https://www.ncei.noaa.gov/products/weather-balloon/radiosonde-atmospheric-temperature-products">
              Původní záznam NOAA
            </ReferenceLink>
          </figcaption>
        </figure>

        <p>
          Historie jedné stanice však není neměnná. Mění se typ čidla, radiační korekce, čas vypuštění, způsob
          kódování i samotná stanice. Takové změny mohou vytvořit skok v časové řadě, aniž by odpovídající skok
          nastal v teplotě okolní atmosféry. Randel a Wu nalezli u části historických radiosond systematické
          odchylky vůči družicovým měřením. {" "}
          <ReferenceLink href="https://doi.org/10.1175/JCLI3717.1">Randel &amp; Wu, 2006</ReferenceLink>{" "}
          Haimberger proto porovnává pozorování s nezávislým krátkodobým předpovědním polem reanalýzy a hledá
          změny v rozdílu mezi nimi. {" "}
          <ReferenceLink href="https://doi.org/10.1175/JCLI4050.1">Haimberger, 2007</ReferenceLink>
        </p>

        <p>
          Jedna z otevřeně popsaných cest vede k řadě RATPAC. Free a kol. vyšli z pečlivě vybraných a upravených
          záznamů 87 stanic, pro další období využili první diference a historii stanic a vytvořili regionální
          anomální řady. Původní článek zároveň zveřejnil postup pro odhad nejistoty tohoto zpracování. {" "}
          <ReferenceLink href="https://doi.org/10.1029/2005JD006169">Free et al., 2005</ReferenceLink>
          Aktuální portál NOAA uvádí produkt RATPAC pro 13 tlakových hladin a tři atmosférické vrstvy od roku
          1958. {" "}
          <ReferenceLink href="https://www.ncei.noaa.gov/products/weather-balloon/radiosonde-atmospheric-temperature-products">
            Data a dokumentace RATPAC
          </ReferenceLink>
        </p>

        <p>
          Následující graf je historické srovnání několika radiosondážních analýz dolní stratosféry. Nejde o
          současný datový produkt ani o výběr jedné „správné“ křivky. Právě rozdíly mezi křivkami ukazují, že
          název řady, verze a způsob homogenizace patří k hodnotě stejně jako její jednotka.
        </p>
        <figure className="article-figure">
          <Image
            className="article-figure__media"
            src="/media/stratosphere/noaa-radiosonde-anomalies-1958-2011.gif"
            alt="Historický graf porovnávající několik radiosondážních řad anomálie teploty dolní stratosféry mezi lety 1958 a 2011."
            width={620}
            height={282}
            unoptimized
          />
          <figcaption>
            Srovnání více radiosondážních analýz teploty dolní stratosféry pro období 1958–2011, upravené z
            kapitoly <em>State of the Climate in 2011</em>. Zobrazený konec řady je rok 2011. NOAA Climate.gov. {" "}
            <ReferenceLink href="https://www.climate.gov/news-features/understanding-climate/state-climate-2011-stratospheric-temperature">
              Původní graf a popis
            </ReferenceLink>
          </figcaption>
        </figure>

        <h2>Satelitní řady měří vrstvy, ne body</h2>
        <p>
          Mikrovlnné sondážní přístroje na polárních družicích přijímají záření atmosférického kyslíku. Každý
          kanál má vlastní váhovou funkci: některé výšky přispívají k výsledné jasové teplotě více, jiné méně.
          Zpracovaný údaj TLS je proto odhadem průměrné teploty široké vrstvy s maximální citlivostí v dolní
          stratosféře. Randel a kol. uvádějí pro kanál MSU 4 a AMSU-A 9 přibližné rozpětí 13 až 22 km. {" "}
          <ReferenceLink href="https://doi.org/10.1029/2008JD010421">Randel et al., 2009</ReferenceLink>
        </p>

        <p>
          Z přístrojových radiancí nevznikne dlouhá klimatická řada automaticky. Družice postupně stárnou,
          obíhají v jiný místní čas, dívají se pod různým úhlem a jejich kanály se částečně liší. Mears a Wentz
          popsali propojení MSU a AMSU-A pro tři atmosférické vrstvy a korekce nutné při tomto přechodu. {" "}
          <ReferenceLink href="https://doi.org/10.1175/2008JTECHA1176.1">Mears &amp; Wentz, 2009</ReferenceLink>{" "}
          NOAA ve své současné řadě dokumentuje mezidružicové korekce, změny místního času přeletu, rozdíly
          pozorovacího úhlu i frekvence kanálu. {" "}
          <ReferenceLink href="https://www.ncei.noaa.gov/products/climate-data-records/mean-layer-temperature-noaa">
            Metodika NOAA CDR
          </ReferenceLink>
        </p>

        <p>
          Vyšší stratosféra vyžaduje jiné kanály než TLS. SSU poskytovala údaje přibližně pro 25 až 50 km do roku
          2006 a AMSU-A ji částečně nahradila od roku 1998. Zou a Qian ukazují, že svislé váhové funkce SSU se
          navíc mění s polohou a časem. Spojený záznam proto vzniká teprve po přepočtu rozdílů mezi přístroji,
          nikoli prostým slepením dvou křivek. {" "}
          <ReferenceLink href="https://doi.org/10.1175/JTECH-D-16-0018.1">Zou &amp; Qian, 2016</ReferenceLink>
        </p>

        <figure className="article-figure">
          <Image
            className="article-figure__media"
            src="/media/stratosphere/nasa-satellite-atmospheric-trends-1979-2005.jpg"
            alt="Dvě mapy trendu atmosférické teploty z družicových měření za období 1979 až 2005, včetně mapy dolní stratosféry."
            width={2160}
            height={2368}
            unoptimized
          />
          <figcaption>
            Mapy změny teploty ve dvou širokých atmosférických vrstvách za leden 1979 až prosinec 2005. Dolní
            mapa odpovídá dolní stratosféře se středem přibližně 18 km; údaje pocházejí z MSU a AMSU na
            meteorologických družicích NOAA. NASA Earth Observatory. {" "}
            <ReferenceLink href="https://science.nasa.gov/earth/earth-observatory/atmospheric-temperature-trends-1979-2005-7839/">
              Původní vizualizace a metodický popis
            </ReferenceLink>
          </figcaption>
        </figure>

        <h2>Další nezávislé pohledy</h2>
        <p>
          Rádiová zákrytová měření GNSS poskytují výškově jemnější profily hlavně v oblasti horní troposféry a
          dolní stratosféry. Ve studii zahrnující období 1979–2018 Steiner a kol. porovnali více pozemních a
          družicových systémů, včetně radiosond, GNSS-RO a mikrovlnných sondáží. Hodnota takového srovnání není
          v tom, že by jeden přístroj zrušil ostatní, ale v tom, že lze zkontrolovat shodu i rozdíly mezi
          nezávislými postupy a přesně je přiřadit k výškové oblasti. {" "}
          <ReferenceLink href="https://doi.org/10.1175/JCLI-D-19-0998.1">Steiner et al., 2020</ReferenceLink>
        </p>

        <p>
          Pro horní stratosféru jsou důležité satelitní limbové přístroje, které pozorují atmosféru při pohledu
          podél jejího okraje. Dubé a kol. popsali datový produkt OSIRIS v7.3 pro 35 až 60 km s více než 22 lety
          pozorování a porovnali jej se systémy SABER a MLS. Současně výslovně upozorňují, že právě vysoká
          stratosféra má méně dlouhých, výškově rozlišených řad než dolní stratosféra. {" "}
          <ReferenceLink href="https://doi.org/10.5194/acp-24-12925-2024">Dubé et al., 2024</ReferenceLink>
        </p>

        <h2>Nejistota je součástí výsledku</h2>
        <p>
          Nejistota stratosférické teplotní řady nevychází jen z přesnosti jednoho čidla. Patří do ní také změny
          přístrojů a provozních postupů u radiosond, nerovnoměrné rozmístění stanic, návaznost různých družic,
          změna dráhy a místního času přeletu, rozdílné váhové funkce kanálů a volba způsobu jejich spojení.
          Každý z těchto zdrojů může ovlivnit dlouhodobý odhad jinak v dolní a jinak ve vyšší stratosféře.
        </p>

        <p>
          Seidel a kol. už v roce 2004 porovnali osm horních atmosférických datových souborů a ukázali, že rozptyl
          mezi nezávislými produkty je sám o sobě užitečnou informací o nejistotě. Pozdější srovnání satelitních
          klimatických řad došlo k podobnému závěru: rozdíly se postupně snížily, ale u některých vrstev a období
          nezmizely. {" "}
          <ReferenceLink href="https://doi.org/10.1175/1520-0442(2004)017%3C2225:UISOLC%3E2.0.CO;2">
            Seidel et al., 2004
          </ReferenceLink>{" "}
          a <ReferenceLink href="https://doi.org/10.1002/2015JD024039">Seidel et al., 2016</ReferenceLink>.
        </p>

        <p>
          Proto má být vedle každého grafu na tomto webu uveden zdroj dat, verze, proměnná nebo kanál, výšková
          vrstva, územní průměr, referenční období, časový rozsah a publikovaný popis nejistoty. Teprve tato sada
          údajů určuje, co křivka říká a které jiné řady s ní lze smysluplně porovnat.
        </p>

        <h2>Současné datové řady</h2>
        <p>
          <strong>RATPAC</strong> je radiosondážní produkt NOAA pro velkoplošné změny teploty v troposféře a dolní
          stratosféře. Nabízí časové řady od roku 1958, tlakové hladiny i tři vrstvy atmosféry; k datům patří
          popis úprav historických záznamů. {" "}
          <ReferenceLink href="https://www.ncei.noaa.gov/products/weather-balloon/radiosonde-atmospheric-temperature-products">
            Datový portál RATPAC
          </ReferenceLink>
        </p>

        <p>
          <strong>NOAA Mean Layer Temperature CDR</strong> navazuje měsíční globální mřížky z mikrovlnných měření
          MSU, AMSU-A a ATMS od listopadu 1978 do současnosti. Zahrnuje mimo jiné TLS, tedy teplotu dolní
          stratosféry sestavenou z kanálů 4, 9 a 10. Uživatel má vždy pracovat s číslem verze a s úplným souborem
          za celé období, protože aktualizace může zahrnovat opravy dřívějších měsíců. {" "}
          <ReferenceLink href="https://www.ncei.noaa.gov/products/climate-data-records/mean-layer-temperature-noaa">
            NOAA CDR: data a verze
          </ReferenceLink>
        </p>

        <p>
          <strong>SSU–AMSU-A CDR</strong> pro střední a vyšší stratosféru vychází z propojení SSU a AMSU-A. Jeho
          metodický základ publikovali Zou a Qian; práce uvádí jednotlivé vrstvy, období obou přístrojů i postup
          pro přenos jejich odlišných měření do společné řady. {" "}
          <ReferenceLink href="https://doi.org/10.1175/JTECH-D-16-0018.1">Metodický článek Zou &amp; Qian, 2016</ReferenceLink>
        </p>

        <p>
          <strong>OSIRIS v7.3</strong> doplňuje pohled na horní stratosféru výškově rozlišeným satelitním produktem.
          Jeho publikovaná analýza pracuje s obdobím 2005–2021 pro odhad trendů a porovnává OSIRIS se SABER a MLS.
          Tento zdroj proto nemá být bez dalšího zaměňován s dlouhou vrstvovou řadou TLS: jde o jinou výškovou
          oblast, jiný přístrojový princip a jiný časový rozsah. {" "}
          <ReferenceLink href="https://doi.org/10.5194/acp-24-12925-2024">Dubé et al., 2024</ReferenceLink>
        </p>
      </div>

      <aside className="article-glossary" aria-label="Slovníček pojmů">
        <p className="eyebrow">Slovníček</p>
        <h2>Pojmy v článku</h2>
        <dl>
          <div><dt>hPa</dt><dd>Hektopascal, jednotka tlaku. Tlakové hladiny vymezují polohu ve svislém profilu atmosféry.</dd></div>
          <div><dt>Radiosonda</dt><dd>Přístroj nesený balonem, který během výstupu měří a rádiem odesílá atmosférická data.</dd></div>
          <div><dt>RATPAC</dt><dd><em>Radiosonde Atmospheric Temperature Products for Assessing Climate</em>, NOAA řada z balonových měření.</dd></div>
          <div><dt>MSU</dt><dd><em>Microwave Sounding Unit</em>, první generace mikrovlnného satelitního sondážního přístroje.</dd></div>
          <div><dt>AMSU-A</dt><dd><em>Advanced Microwave Sounding Unit-A</em>, nástupce MSU s jinou sadou kanálů.</dd></div>
          <div><dt>ATMS</dt><dd><em>Advanced Technology Microwave Sounder</em>, novější mikrovlnný přístroj navazující na řady MSU a AMSU-A.</dd></div>
          <div><dt>SSU</dt><dd><em>Stratospheric Sounding Unit</em>, satelitní přístroj pro střední a vyšší stratosféru.</dd></div>
          <div><dt>TLS</dt><dd><em>Temperature Lower Stratosphere</em>, vrstová teplota dolní stratosféry odvozená z konkrétních kanálů.</dd></div>
          <div><dt>Váhová funkce</dt><dd>Popis, jak silně přispívají jednotlivé výšky atmosféry k satelitnímu vrstovému údaji.</dd></div>
          <div><dt>CDR</dt><dd><em>Climate Data Record</em>, dlouhá datová řada se zdokumentovaným zpracováním pro klimatické použití.</dd></div>
          <div><dt>GNSS-RO</dt><dd>Rádiová zákrytová měření signálů globálních navigačních družic, z nichž vznikají svislé profily.</dd></div>
          <div><dt>Lidar</dt><dd>Pozemní dálkové měření laserem; část souboru nezávislých stratosférických pozorování.</dd></div>
          <div><dt>OSIRIS</dt><dd><em>Optical Spectrograph and InfraRed Imager System</em>, satelitní přístroj pro výškově rozlišená měření vyšší stratosféry.</dd></div>
        </dl>
      </aside>
    </article>
  );
}
