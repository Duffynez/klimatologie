KORÁLOVÁ SCLEROCHRONOLOGIE — OPAKOVATELNÝ PŘÍKLAD
Klimatologie.eu, 28. října 2026

Rozsah
Vlastní přepočet veřejných ročních Sr/Ca korálu F14 na teplotní stupnici
pomocí průměru a směrodatné odchylky ERSSTv5 za roky 1883–1997.
Vychází z postupu D’Olivo a kol. (2024), DOI 10.1126/sciadv.ado5107.
Neopakuje laboratorní měření, datování ani rekonstrukci pacifického indexu IPO.
Výsledek není převzatá konečná rekonstrukce autorů nebo nezávislé ověření.

Vstupy
1. f14-original.txt — nezměněný soubor NOAA NCEI, studie 39439,
   D’Olivo a kol., DOI 10.25921/t9g1-vr70, verze souboru 2. dubna 2025.
   Obsahuje 628 ročních hodnot Sr/Ca, 1370–1997, korál Diploastrea heliopora,
   Kanathea, Fidži, odběr 1998. Souřadnice 17°14,93′ j. š., 179°06,88′ z. d.
   Používáme Year a Sr/Ca (mmol/mol). Jde o již datované a ročně zpracované
   údaje, nikoli původních 2250 laboratorních vzorků nebo emisní signály.
   Sloupec IPO_TDPV_Dsst je odvozený index pacifické proměnlivosti.
   Není to teplota z korálu F14 a tento výpočet ho nepoužívá.
2. ersst-fiji-original.txt — nezměněná odpověď serveru NOAA PSL OPeNDAP,
   ERSSTv5, DOI 10.7289/V5T72FNM (Huang a kol., 2017).
   Proměnná sst (°C), 1380 měsíců leden 1883 až prosinec 1997,
   uzel 18° j. š., 180° v. d. (= 180° z. d.), síť 2° × 2°.
   Indexy při stažení: čas 348–1727 včetně, šířka 53, délka 90.
   Souřadnice času jsou dny od 1. ledna 1800. Program ověřuje všechna data.
   Verze 5 byla zvolena podle studie z roku 2024. Nejde o novější ERSSTv6.
Přesné adresy, datum přístupu a SHA-256 původních souborů: provenance.json.
Původní soubory uchovávají metadata a citační podmínky poskytovatelů.
Citujte původní autory, NOAA NCEI a poskytovatele výřezu NOAA PSL.

Postup
Každý kalendářní rok ERSST je prostý průměr 12 měsíců, bez vážení jejich délkou.
Všech 115 ročních párů 1883–1997 se použije pro průměry a výběrové směrodatné
odchylky (dělení počtem hodnot minus jedna). Žádná hodnota se nevyřazuje.
R = Sr/Ca v mmol/mol, T = odhad roční teploty v °C.
T = mean_T − (sd_T / sd_R) × (R − mean_R).
Záporné znaménko vyjadřuje doložený pokles korálového Sr/Ca s oteplením.
Výsledný průběh má ve společném období stejný průměr a směrodatnou odchylku
jako ERSST. Nejde o regresi nejmenších čtverců. Pořadí jednotlivých výkyvů
je stále určeno korálem, shodné průměry samy neznamenají shodu jednotlivých let.
Rok 1900 je vybrán jako přehledný kalendářní rok pro dosazení, nikoli podle
nejlepší shody s teplotou. CSV i graf zahrnují celé kalibrační období.

Vztah k původní studii
Používáme výslovně uvedené období a uzel z oddílu SST calculations from Sr/Ca.
Vytištěná rovnice studie pro zpětný převod neuvádí záporné znaménko.
Zde je znaménko uvedeno výslovně, aby vyšší Sr/Ca znamenalo nižší teplotu,
v souladu s popisem závislosti a obr. 1B studie. Námi vypočtená korelace
teplotních průběhů 0,393 odpovídá zaokrouhleným 0,39 v obr. 1B.
V metodickém textu studie se pro Sr/Ca uvádí také odlišné r = −0,361.
Náš výsledek dokládají přiložené konkrétní vstupy a skript, který nepracuje
s původním autorským kódem. Korelace ani RMSE v kalibračním období nejsou
nezávislou validací nebo úplnou nejistotou historické rekonstrukce.

Soubory a spuštění
Uložte do jedné složky oba původní soubory, provenance.json, reproduce.py,
annual-comparison.csv a calculation.json. S Pythonem 3.10 nebo novějším:

python reproduce.py

Program nepotřebuje internet ani další knihovny. Ověří kontrolní součty,
souřadnice, úplnost měsíců a let, přepočítá tabulku a porovná zveřejněná čísla.
Volba --write přegeneruje odvozené CSV a calculation.json z původních vstupů.
CSV ukládá teploty s osmi desetinnými místy pro kontrolu výpočtu, nikoli jako
tvrzení o přesnosti. V článku jsou výsledné teploty zaokrouhlené na setiny °C.
