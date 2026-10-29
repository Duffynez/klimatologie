Radiouhlíková kalibrace dřeva Fo-101 / B-8518

Vstup: Joerin, Stocker a Schlüchter (2006), tabulka 3, strana 700.
DOI 10.1191/0959683606hl964rp
https://climatehomes.unibe.ch/~stocker/papers/joerin06hol.pdf
Jeden ručně přepsaný a vizuálně ověřený řádek, nikoli původní laboratorní počty.
Radiouhlíkové stáří 8252 ± 31 let BP (1 sigma), dřevo z ledovce Forno.
Původní publikace: CALIB 5.0 + IntCal04, medián 9230 cal BP,
uváděné vnější dvousigma meze 9120 a 9400 cal BP.

Nová kalibrace: IntCal20, Reimer a kol. (2020), DOI 10.1017/RDC.2020.41.
Původní soubor: https://intcal.org/curves/intcal20.14c
Přístup 29. října 2026. Stažené bajty beze změny v intcal20-original.14c.
Používáme první tři sloupce: kalendářní stáří, radiouhlíkové stáří, sigma.

Spuštění: uložte reproduce.py, sample.csv, intcal20-original.14c
 a provenance.json do stejné složky a spusťte python reproduce.py.
Stačí Python 3, bez instalace knihoven a bez připojení k internetu.
Skript přepíše results.json a posterior.csv ve své složce.

Algoritmus:
Na celé roční mřížce t = 0..55000 cal BP lineárně interpolujeme střední
radiouhlíkové stáří m(t) a jeho směrodatnou odchylku s(t).
Měřené stáří označujeme a = 8252 let BP, jeho chybu u = 31 radiouhlíkových let.
v(t) = u^2 + s(t)^2 je společný rozptyl v radiouhlíkových letech na druhou.
w(t) = exp(-(a-m(t))^2/(2*v(t))) / sqrt(v(t)).
p(t) = w(t) / sum(w) je normalizovaná pravděpodobnost jednoletého bodu.
Předpoklady: nezávislé normální chyby měření a křivky, rovnoměrné předchozí
rozdělení kalendářního stáří v rozsahu křivky. Nulová rezervoárová oprava.
Žádné podmínky pořadí vrstev a žádné samostatné modelování bloku letokruhů.
Konstantní faktor 1/sqrt(2*pi) se při normalizaci vykrátí.

Kvantil je první rok, v němž kumulativní součet dosáhne dané pravděpodobnosti.
Medián (0,5): 9221 cal BP. Centrální interval (0,023 až 0,977): 9050–9396 cal BP.
Jde o interval se stejnou pravděpodobností v obou vnějších ocasech, nikoli HPD.
Vzorek není rovnoměrně pravděpodobný uvnitř tohoto intervalu.
Výpočet na roční mřížce neznamená přesnost na jeden rok.
V článku zaokrouhlujeme na 9220 a přibližně 9050–9400 cal BP.

Zpětný převod konvenčního stáří na ekvivalentní F:
F = exp(-8252/8033) = 0.35798559099305294.
To je dopočet z publikovaného stáří, nikoli nové měření 14C/12C.

Ukázka nepřepočítává celý paleoklimatický závěr původní studie.
Původní kalibrace používala jinou křivku i způsob vykazování mezí.
Původ dat a SHA-256 přesných vstupů jsou v provenance.json.
