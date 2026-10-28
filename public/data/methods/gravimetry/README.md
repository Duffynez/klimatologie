# Ověřitelný příklad družicové gravimetrie

Výřez veřejné tabulky NASA obsahuje dvě měsíční odchylky hmotnosti Grónska vůči dubnu 2002. Jde o zpracované regionální výsledky JPL RL06.1M CRI v3.0, nikoli přístrojová data. Původ a přesné adresy obsahuje `provenance.json`.

- Duben 2019: −4238,98 Gt, uvedená nejistota 1σ 15,74 Gt.
- Duben 2020: −4755,02 Gt, uvedená nejistota 1σ 15,75 Gt.
- Rozdíl: −516,04 Gt. Nepočítáme nejistotu rozdílu bez vzájemné kovariance.

Spuštění `python reproduce.py` ověří SHA-256 CSV a provede odečtení pomocí desetinné aritmetiky. Nepotřebuje externí balíčky ani přístup k síti.

Pro kontrolu původních buněk stáhněte sešit NASA z adresy v metadatech a spusťte `python reproduce.py --workbook cesta-k-sesitu.xlsx`. Skript ověří SHA-256 sešitu i shodu původních řádků a hmotnosti v odvozeném listu. Případná pozdější změna souboru NASA vyvolá chybu místo tichého použití jiné verze.

Nevkládáme hodnoty do mezer a nepočítáme trend. Zaokrouhlené desetinné roky 2019.29 a 2020.29 označují dubnová období, nikoli přesný okamžik. Datum stažení je 28. října 2026. NASA sestavila tuto veřejnou kopii 24. ledna 2023.
