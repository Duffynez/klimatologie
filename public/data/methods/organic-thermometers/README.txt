Alkenonový paleoteploměr, ODP Site 1151C
Zdroj: Fujine, K., Yamamoto, M., Tada, R. (2003).
Data report: Alkenone compounds and major element composition in late Quaternary
hemipelagic sediments from ODP Site 1151 off Sanriku, northern Japan.
DOI: https://doi.org/10.2973/odp.proc.sr.186.111.2003
Tabulka T2: https://www-odp.tamu.edu/publications/186_SR/111/111_t2.htm
Metodika: https://www-odp.tamu.edu/publications/186_SR/111/111_3.htm
Přístup: 29. října 2026.

Původní tabulka je nezměněná HTML odpověď serveru uložená s příponou .txt.
Jde o publikované koncentrace, nikoli chromatogramy. Kódování čteme jako Latin-1.
Skript a tabulku uložte do stejné složky a spusťte:
  python reproduce.py
Výpočet vyžaduje pouze standardní knihovnu Pythonu 3. Volitelný graf potřebuje matplotlib:
  python reproduce.py --plot site1151.svg

Zachováváme všech 75 řádků bez vyřazování, vyhlazování či průměrování.
C37:2 je sloupec 37:2MK, C37:3 je 37:3MK, oba v mikrogramech na gram
organického uhlíku (TOC). U = C37:2/(C37:2+C37:3). T = (U-0.039)/0.034
ve stupních Celsia. Jde o rovnici Prahla a kolegů (1988) použitou v práci.
Index před převodem nezaokrouhlujeme na dvě místa ze zdrojové tabulky.
Graf používá publikovaný sloupec Corrected depth, metry pod mořským dnem.
Hloubky neupravujeme, nepřiřazujeme stáří. Poslední řádek má v původním
sloupci Depth 121.24 a v Corrected depth 21.01. Oba údaje zachováváme,
v grafu se uplatní druhý. Opravu délky jádra provedli již autoři dat.

Sloupce results.tsv:
sample: označení vzorku s prefixem 186-1151C.
original_depth_m, corrected_depth_m: oba publikované hloubkové sloupce.
C37_2_ug_per_g_TOC, C37_3_ug_per_g_TOC: publikované koncentrace.
UK37_prime: přepočtený bezrozměrný index.
calculated_temperature_C: teplota z publikovaných koncentrací.
published_temperature_C: poslední sloupec původní tabulky.
difference_C: přepočtená minus publikovaná teplota.

Výsledky: 75 vzorků, opravené hloubky 0.06 až 21.01 m.
První vzorek: C37:2=30.39, C37:3=24.64, T=15.095418541757969 °C.
Rozsah teplot 11.07115632802229 až 21.911589509995228 °C.
Největší rozdíl proti publikovaným teplotám 0.049781103239673996 °C.
Zdrojové koncentrace a teploty jsou zaokrouhlené. Numerická shoda kontroluje
přepis a výpočet. Není nezávislým ověřením teploměru.
