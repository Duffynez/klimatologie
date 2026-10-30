ANALÝZA ČASOVÝCH ZMĚN A EXTRÉMŮ – BLUE HILL

Zdroj: NOAA NCEI, GHCN-Daily v3, DOI 10.7289/V5D21VHZ.
Stanice USW00014753, BLUE HILL LCD, Massachusetts, USA.
Souřadnice 42.2122 N, 71.1136 W, výška 190.5 m.
Verze archivu 3.35-upd-2026102817, staženo 30. října 2026.
Přesné URL a SHA-256 jsou v provenance.json.

VSTUPY
USW00014753-original.dly je úplný nezměněný veřejný staniční soubor.
ghcnd-version-original.txt je nezměněný soubor verze NOAA.
station.txt je jeden nezměněný řádek z katalogu stanic, nikoli celý katalog.
Původní katalog obsahoval údaje i o ostatních stanicích.

Výběr: TMAX od 1961-01-01 do 2024-12-31 včetně.
Zdroj používá desetiny °C, hodnotu -9999 pro chybějící záznam a příznaky
měření, kvality a původu. Přijímáme jen existující hodnoty s prázdným
příznakem kvality. Ve vybraném období je všech 23 376 kalendářních dnů.
Skript chybějící nebo označený den odmítne. Žádné hodnoty nedoplňuje.

VÝSTUPY
- daily.csv: datum, maximum v °C a původní příznaky.
- annual.csv: 64 ročních průměrů denních maxim, roční nejvyšší maximum TXx,
  počet dnů s TMAX přísně nad 25 °C (SU), data všech výskytů TXx a anomálie.
- monthly.csv: 768 měsíčních průměrů denních maxim, měsíční reference a anomálie.
- results.json: přesné koeficienty, směrodatné chyby, intervaly a citlivost
  na největší zahrnutý časový odstup.

REFERENCE
Roční reference je aritmetický průměr 30 ročních průměrů 1961–1990.
Měsíční reference je zvlášť pro každý kalendářní měsíc průměr jeho 30 hodnot
v letech 1961–1990. Roční průměr váží všechny dny stejně. Prostý průměr
12 měsíčních hodnot by kvůli různým délkám měsíců nebyl totožný.

STATISTICKÉ NASTAVENÍ
Každý roční údaj vstupuje do trendu se stejnou vahou.
Přímka: nejmenší čtverce s volným průsečíkem, čas vycentrovaný k roku 1992.5.
Nejistota: Newey–West, Bartlettovy váhy, největší odstup 3 roky.
Váhy pro odstupy 0, 1, 2, 3 jsou 1, 0.75, 0.5, 0.25.
Žádné předběžné odstranění autokorelace ani dodatečný násobek pro malý vzorek.
Pro každé reziduum e_i a centrovaný čas x_i definujeme z_i=x_i*e_i.
Sxx=sum(x_i*x_i). Rozptyl odhadu sklonu vypočteme jako
[sum(z_i*z_i) + 2*sum_k(w_k*sum_i(z_i*z_(i-k)))] / Sxx**2,
kde k=1,2,3 a vnitřní součet používá pouze existující dvojice.
95% interval: sklon ± 1.959963984540054 * směrodatná chyba.
Jde o normální asymptotické přiblížení, nikoli přesný interval pro malý vzorek.
Citlivost: zopakování s odstupy 1, 5 a 8 let.
Residual_lag1_autocorrelation je vzorková autokorelace s úplným součtem
čtverců reziduí ve jmenovateli. Pro samotný výpočet intervalu se nepoužívá.

ROZSAH ZÁVĚRU
GHCN-Daily kontroluje kvalitu, není však homogenizován.
Výsledky se vztahují k tomuto staničnímu záznamu. Statistický interval
zahrnuje kolísání reziduí podle zvoleného modelu, nikoli možné dlouhodobé
změny stanice. Roční průměr denních maxim není průměrná denní teplota.
Z příkladu nevyvozujeme globální trend ani příčinu zjištěné změny.

ZOPAKOVÁNÍ
Uložte všechny soubory do jednoho adresáře a spusťte:
  python reproduce.py
Stačí standardní knihovna Pythonu 3. Skript ověří otisky vstupů, kalendář,
platnost vybraných hodnot, všechny roční a měsíční ukazatele i oba trendy.
Porovná dopočtené výstupy s uloženými CSV a JSON. Souborům nic neprovede.
Výstupy lze znovu vytvořit příkazem:
  python reproduce.py --write

SCHÉMA A GRAF
Vlastní schéma ilustruje postup vysvětlený v článku.
Graf zobrazuje všechny roční hodnoty a jejich vlastní přímky nejmenších
čtverců. Horní panel ukazuje anomálie průměrů denních maxim vůči 1961–1990,
dolní absolutní roční maximum TXx. Svislé osy mají rozdílná měřítka.

DATA A ZDROJE
Veřejná data NOAA NCEI. Uvádějte GHCN-Daily, DOI 10.7289/V5D21VHZ,
a Menne a kol. 2012, DOI 10.1175/JTECH-D-11-00103.1.
Statistický postup: Newey a West 1986, DOI 10.3386/t0055.
Definice TXx a SU: HadEX3.0.4 Product User Guide, tabulka 2.
Kontrolní výpočet plnou maticovou formulací OLS a kovariance dává stejné
sklony i směrodatné chyby s numerickou odchylkou pod 1e-12 °C za desetiletí.
