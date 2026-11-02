# Třetí a čtvrtý článek Pozorování: audit zdrojů a opravy

Kontrola: **2. listopadu 2026**. Výchozí commit: `15e2ffffb49acce2c322c10e1c72f4dd850a3791`.

Prověřeny články **Oxid uhličitý v atmosféře** a **Vlhkost atmosféry**. Kontrola se soustředila na podporu konkrétních tvrzení, vhodnost zdrojů a skutečnou dostupnost jejich odkazů. Nešlo o samostatný audit úplnosti výkladu nejistot.

| Rozsah | Před opravami | Po opravách |
| --- | ---: | ---: |
| Zdroje článku o CO₂ | 42 | 44 |
| Zdroje článku o vlhkosti | 32 | 33 |
| Různé citované zdroje | 74 | 77 |
| Různé vnější URL na jejich kartách | 107 | 119 |

Všechny původní citační identifikátory zůstaly zachovány. Přidány jsou tři konkrétní podklady pro rozsah referenční sítě NOAA, historii průběžných měření a první finský výstup radiosondy.

## Hodnocení odborné základny

Jádro obou článků tvoří původní metodické a pozorovací práce. Institucionální stránky NOAA, NASA a Met Office většinou představují původní distribuci dat nebo dokumentaci jejich autorů. Pro tuto roli jsou vhodné. Fotografie, muzejní katalogy a historický záznam výrobce slouží pro původ obrazu a historii přístrojů. Nejsou používány jako samostatný důkaz globálního klimatického výsledku.

Hlavní výsledky v původních zdrojích obstály. Nalezené problémy se týkaly nepřesně přiřazených tvrzení, verzí dat, dostupnosti plných textů a bibliografických údajů.

## Opravené nálezy

| Nález | Provedená oprava |
| --- | --- |
| Keeling a historie sítě | Studie z roku 1976 nyní dokládá své skutečné období 1964–1971. Odstraněn nepodložený příklad města u zprávy z roku 1957. Celá síť NOAA a začátek průběžných observatorních měření mají samostatnou původní dokumentaci. |
| Verze čísel CO₂ | Údaje sjednoceny na soubory NOAA vytvořené 9. října 2026, verze 2026-10. Globální průměr 2025 je 425,62 ± 0,05 ppm a poslední dostupný měsíc v této tabulce červenec 2026 s 426,10 ppm. Doplněny přímé citace tabulek. |
| Význam počtu a období | Dai 2006 používá více než 15 000 stanic a navíc lodní měření. Přesné datum prvního finského výstupu doloženo záznamem Vaisala. Současné období 1991–2020 doloženo dokumentací HadISDH. |
| Vlhkost v roce 2024 | Rozsah oceánských odchylek opraven na 0,35–0,73 g/kg při zahrnutí reanalýz omezených na pozorovací pokrytí HadISDH. Výsledky pozemních GNSS stanic jsou odděleny od globálního průměru reanalýz a rádiových zákrytů. |
| Nefunkční a nepřímé plné texty | Nefunkční Keelingovo PDF nahrazeno správným souborem Scripps. Dvanáct odkazů na abstrakty nahrazeno přímými PDF vydavatelů. Lüthi, Bereiter 2015, Stith a Allan mají přímé úplné soubory z veřejných repozitářů nebo webu spoluautora. |
| Data a obrazy | Doplněno úplné PDF WMO Bulletin 21, přímé číselné tabulky NOAA a veřejný HTTPS adresář měsíčních dat RSS. Reisetův odkaz vede na první stranu jeho práce. U fotografií a grafu NOAA doplněny přímé obrazové soubory. |
| Bibliografie a data vydání | State of the Climate in 2024 má skutečný rok 2025, autory obou citovaných oddílů, rozsah stran, tabulky a DOI kapitoly. Pevné verze HadISDH mají aktualizaci 21. března 2025. U 24 nedatovaných webových zdrojů je uveden rok přístupu. |
| Práva a podmínky použití | Odkaz na obecný disclaimer NOAA nahrazen skutečnými pravidly použití obrazového a zvukového obsahu. Karta snímku NOAA/NSSL nabízí veřejnou kopii Commons se zachováním identifikace a kreditu. |

Převzaté grafy NOAA nadále výslovně uvádějí svou vlastní verzi **6. července 2026**. Číselné údaje v textu jsou samostatně datované k říjnovým tabulkám. Starší obrazy nejsou vydávány za nově vytvořené grafy.

## Skutečný přístup a zbývající omezení

Všech 107 výchozích a následně všech 119 aktuálních URL prošlo kontrolou pomocí HTTP GET s následováním přesměrování. Správnost cílů byla posouzena podle obsahu, ne pouze podle stavového kódu. Bylo staženo **26 úplných PDF**, ověřena totožnost prací a relevantní pasáže. Jejich počty stran a SHA-256 obsahuje protokol JSON. Další původní práce jsou veřejné jako celé HTML články.

Automatický klient u některých vydavatelů dostává ochrannou stránku. U Mears 2018 a Durre 2009 byl v běžném prohlížeči ověřen celý veřejný text. Stejně byly ověřeny správný předmět Smithsonian a Reisetova první strana v BHL. Pomalejší DOI kapitoly State of the Climate se v prohlížeči nakonec otevřelo na správný úplný článek AMS. Tyto případy nejsou označeny jako nefunkční literatura jen kvůli odpovědi automatického klienta.

**Příručka WMO Guide No. 8 má podmíněný přístup.** Její oficiální rozcestník je dostupný a uvádí správnou kapitolu o vlhkosti, ale prohlížeč plného svazku ve WMO e-Library při kontrole požadoval ruční CAPTCHA. Plné znění této kapitoly v tomto auditu nebylo přímo ověřeno. Karta nyní výslovně uvádí tuto podmínku a tlačítko označuje jako rozcestník a kapitoly. Ruční ověření nebylo provedeno a odkaz není nepravdivě označen jako přímo ověřené PDF.

Původní katalog fotografie NOAA/NSSL rovněž vyžadoval ruční ověření. Čtenář má navíc funkční veřejnou kopii na Commons. Zobrazená fotografie, identifikátor nssl0020, kredit a podmínky byly zkontrolovány.

## Ověření oprav

Závěrečné kontroly proběhly v oddělené pracovní kopii obsahující přesně sedm souborů tohoto auditu a stávající závislosti. Souběžně rozpracované změny článků o mechanismech nejsou součástí nasazované změny.

- `pnpm lint`: prošlo bez chyb a varování.
- `pnpm audit:sources`: 61 článků, žádná chybějící ID ani duplicity.
- `pnpm test`: prošlo produkční sestavení 95 cest a všech 113 testů.
- `git diff --check`: prošlo.
- Lokální náhled obou článků zkontrolován na počítači i při šířce 390 px. Ověřeno všech 77 cílových karet, jejich akce a nepřítomnost archivních Drive tlačítek u otevřených zdrojů. Skutečné kliknutí z citace Dai 2006 vedlo na správnou kartu.
- Věcná kontrola a samostatné čtení upravených odstavců ověřily význam čísel, období, produktů a prostorového pokrytí.

Nasazení probíhá po commitu přes `origin/main`. Jeho výsledek se kontroluje v konkrétním běhu GitHub Actions a poté na živých článcích a upravených kartách.

Úplný inventář před opravami i po nich, jednotlivá hodnocení všech 77 zdrojů, HTTP výsledky, ověření v prohlížeči a kontrolní součty PDF jsou v [protokolu JSON](observations-third-fourth-source-audit-2026-11-02.json). Stažené cizí texty nejsou součástí commitu.
