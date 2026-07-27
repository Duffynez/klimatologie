# Klimatologie.eu

Český statický web o klimatu, postavený kolem dohledatelných zdrojů, metod a srozumitelného rozlišení mezi daty a jejich interpretací.

## Principy projektu

- žádné podstatné tvrzení bez zdroje;
- žádný zdroj bez vlastního ID, bibliografických údajů a odkazu;
- zdrojová kopie na Google Drive pouze tehdy, když je její sdílení v pořádku;
- každý graf musí uvést data, metodu, datum aktualizace a limity;
- nehotový obsah se označuje otevřeně, nikoliv jako hotový výklad.

## Kde co najít

- `app/data/sources.ts` je jediná databáze zdrojů;
- `app/data/evidence.ts` obsahuje mapu pozorovaných jevů;
- `app/data/history.ts` drží časovou osu historie;
- `app/components/` obsahuje opakovaně používané prvky jako citaci a kartu zdroje;
- `CONTENT.md` popisuje redakční postup pro přidávání obsahu.

## Vývoj

Projekt používá vinext, React a TypeScript. Po instalaci závislostí spusťte `pnpm dev`; ověřovací build je `pnpm build` a kontrola obsahu `pnpm test`.
