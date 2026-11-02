# Audit zdrojů: páté a šesté pozorování

Datum: 2. listopadu 2026. Rozsah: **Srážky a přívalové srážky** a **Obsah tepla v oceánu**.

Kontrola hodnotila vhodnost a původ zdroje, soulad s citovaným tvrzením a skutečnou dostupnost obsahu na odkazu. Nešlo o samostatný audit úplnosti výkladu nejistot.

- Výchozí stav: 34 a 35 zdrojů, dohromady 68 různých identifikátorů a 103 URL.
- Výsledek: 34 a 36 zdrojů, dohromady **69 identifikátorů a 106 URL**. Všechny původní identifikátory zůstaly zachovány.
- U 28 původních záznamů se změnila metadata nebo výsledný veřejný odkaz. Přibyla jedna malá původní datová tabulka IAP.
- Vhodnost byla kontrolována podle použití v článku. Institucionální stránky zůstávají tam, kde jsou původní dokumentací, poskytovatelem dat či zdrojem konkrétní fotografie nebo mapy. Výsledky studií mají citace původních prací.

## Co bylo opraveno

1. **Skutečné plné texty.** HadEX3 nyní vede na úplný publikovaný dokument v repozitáři NOAA. GSDR-I na publikovaný text v Newcastle. U práce Domingues a kol. 2008 původní Figshare záznam neobsahoval žádné soubory, byl nahrazen skutečným celým PDF na WHOI. U tří prací Copernicus tlačítko vede přímo na publikované PDF.
2. **Historické prameny.** Sken svazku Challenger má na titulní straně rok **1884**, zatímco metadata repozitáře uvádějí 1911. Opraven rok, název, editoři a vědecké zařazení, přidán úplný 600stránkový sken. U práce *A bathythermograph* je autorem **Athelstan F. Spilhaus**, nikoli Yale University Library. Opraveny časopis, strany a kategorie, přidán přímý plný text.
3. **Druh veřejné kopie.** Gu a Adler mají veřejný autorský preprint z 8. září 2022, zatímco časopisecký svazek je z roku 2023. Je to nyní výslovně uvedeno. Použité tvrzení o slabém globálním trendu a 90% hladině souhlasí i s publikovaným abstraktem.
4. **Srážkoměr a hodinový archiv.** Denní úhrn sběrného srážkoměru je zachycená voda od minulého vyprázdnění, nikoli rozdíl dvou odečtů nádoby. GSDR-I je soubor vypočtených ukazatelů, veřejnost nemá automaticky celý původní hodinový archiv. Formulace o jeho možnostech je vázána na citované vydání z roku 2022.
5. **E-OBS a IMERG.** U E-OBS je veřejný střední odhad a šířka 90% rozmezí, jednotlivé realizace jsou na žádost. U IMERG byl ověřen aktuální katalog Earthdata a doplněna podmínka bezplatného účtu pro stažení. Upřesněno autorství a vydání metodiky IMERG V07.
6. **Argo a hluboký oceán.** Rok 1999 označuje začátky regionálních sítí Argo. Studie Johnson a Purkey nevyužívá jedno společné období 1985–2015. Článek nyní uvádí rozdílné místní řady s průměrnými počátky 1986–1989 a konci 2015–2017 podle hloubky.
7. **Přímá kontrola čísel IAP.** Přibyla veřejná měsíční textová tabulka IAPv4.2 z ledna 2026. Má jiné referenční období a její hodnoty se od publikovaného grafu Pan 2026 liší i po sjednocení reference. Článek tyto dva výstupy výslovně rozlišuje. Rozdíl přibližně 460 ZJ z publikovaného grafu je označen jako orientační odečet.
8. **Rok přístupu.** U 17 nedatovaných webových stránek je rok 2026 označen jako přístup, aby se nevydával za rok původního publikování.

## Ověřené podklady

- Plné texty či veřejné kopie studií byly porovnány s citovanými výsledky. Celkem bylo staženo a rozpoznáno 32 PDF včetně dokumentace a dalších kontrolních kopií. Délky a SHA-256 relevantních PDF jsou v JSON.
- [HadEX3, NOAA PDF](https://repository.library.noaa.gov/view/noaa/46579/noaa_46579_DS1.pdf), [GSDR-I, publikovaný text](https://eprints.ncl.ac.uk/fulltext.aspx?url=292135%2f9E05C0D2-04D4-409C-B715-4516DC06E634.pdf&pub_id=292135), [Domingues 2008, WHOI PDF](https://www.whoi.edu/science/PO/people/jprice/class/miscart/domingues_nature2008.pdf).
- [Challenger, úplný svazek](https://escholarship.org/content/qt38p2q583/qt38p2q583.pdf), [Spilhaus, původní záznam a stažení](https://elischolar.library.yale.edu/journal_of_marine_research/522/), [Hellmann, digitální archiv DWD](https://dwdbib.dwd.de/retrosammlung/periodical/titleinfo/964760). U Hellmanna byl v prohlížeči zobrazen skutečný sken, u Spilhause se skutečně stáhlo celé PDF. Samotný automatický GET zde nestačil.
- [Podmínky E-OBS](https://surfobs.climate.copernicus.eu/dataaccess/access_eobs.php), [GSDR-I v0.1.0](https://zenodo.org/records/7492812), [IMERG Final V07](https://www.earthdata.nasa.gov/data/catalog/ges-disc-gpm-3imerghh-07). Na Zenodu byl otevřen i náhled obsahu datového ZIP, nikoli jen titulní stránka.
- [Publikovaný Gu a Adler](https://link.springer.com/article/10.1007/s00382-022-06567-9) potvrzuje stejné citované zjištění jako veřejný preprint. Předplatitelský abstrakt sám není vydáván za veřejný plný text.
- [IAPv4 metodika](https://essd.copernicus.org/articles/16/3517/2024/) a [měsíční textová tabulka IAPv4.2](http://www.ocean.iap.ac.cn/ftp/images_files/IAPv4.2_OHC_estimate_update.txt). Průměr 12 měsíců sloupce 0–2000 m po převodu na ZJ dává přírůstek 2025 proti 2024 **22,883 ZJ**. Rozdíl 2025 proti 1958 v tomto souboru činí **443,725 ZJ**, nelze jej zaměňovat za odečet z jiného publikovaného grafu.
- Ověřeny také údaje Westra 8326 stanic a 64 %, období australské studie, rozdělení hloubkového ohřevu, inventura 381 ± 61 ZJ a správná období radiačních trendů. Individuální posouzení všech 69 záznamů a jejich místa použití jsou v [doprovodném JSON](observations-fifth-sixth-source-audit-2026-11-02.json).

## Přístupové podmínky a meze kontroly

HTTP 200 nebylo považováno za důkaz správného obsahu. Někteří vydavatelé vraceli stránku automatického ověření i s tímto stavem. U dotčených studií jsou veřejné kopie vedeny samostatně od DOI. Výsledek automatického požadavku je v JSON oddělen od ověření v prohlížeči.

U WMO je ověřen veřejný rozcestník, nikoli úplné otevření všech svazků přes ruční ověření návštěvníka. Toto omezení je uvedeno v kartě zdroje i v článku o srážkách. Ruční ověření nebylo prováděno.

U velkých datových balíků byly kontrolovány správné záznamy, názvy, otevřený režim a dostupné nabídky souborů či náhledy. Nebylo prováděno úplné stažení 2,59 GB GSDR-I, 6,69 GB IAP ani 14,30 GB ScienceDB. Stránka IAP se načetla pomaleji, po načtení obsahovala správná metadata a odkazy. U binárních dat CERES byla ověřena dostupnost a hlavička, nikoli znovu vypočtena celá analýza.

## Kontrola opraveného webu

Věcná kontrola a jazykové přečtení změněných odstavců proběhly odděleně. Datum revize srážkového článku je 2. listopadu 2026, oceánský článek toto datum již měl.

- Lint a strukturální audit zdrojů prošly bez chyb.
- Produkční export: 95 stránek. Existující testy: 113 úspěšných, žádný neúspěšný.
- V prohlížeči ověřeny oba články na počítači i při šířce 390 px, bez vodorovného přetékání celé stránky.
- Ověřeno všech 69 odpovídajících karet, jejich akční odkazy a DOI u záznamů s DOI. Žádná karta nemá tlačítko Google Drive.
- Citace byly skutečně otevřeny na odpovídající kartě. Všech deset článkových obrázků se načetlo s nenulovou přirozenou šířkou.

Výchozí revize auditu: 779cbe8. Opravy jsou začleněny nad novější 264630f, která vrátila souběžné úpravy ilustrací mechanismů. Tyto cizí změny nejsou součástí tohoto auditu.
