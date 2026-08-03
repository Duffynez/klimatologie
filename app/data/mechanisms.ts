export type MechanismCategory =
  | "Záření a složení atmosféry"
  | "Atmosféra a oceán"
  | "Oceán a hladina moře"
  | "Kryosféra"
  | "Živá příroda a extrémy";

export type ClimateMechanism = {
  slug: string;
  title: string;
  category: MechanismCategory;
  summary: string;
  distinguishingEvidence: string;
};

export const climateMechanisms: ClimateMechanism[] = [
  {
    slug: "energeticka-bilance-zeme",
    title: "Energetická bilance Země",
    category: "Záření a složení atmosféry",
    summary: "Teplota klimatického systému se mění, když se dlouhodobě liší množství přijímané a odevzdávané energie.",
    distinguishingEvidence: "Toky záření na okraji atmosféry, obsah tepla v oceánu a energetická bilance pevniny, ledu a atmosféry.",
  },
  {
    slug: "radiacni-pusobeni-sklenikovych-plynu",
    title: "Radiační působení skleníkových plynů",
    category: "Záření a složení atmosféry",
    summary: "Molekuly některých plynů pohlcují a vyzařují infračervené záření a mění tak přenos energie atmosférou.",
    distinguishingEvidence: "Laboratorní spektra, spektrální družicová měření, záření směřující k povrchu a rozdílný vývoj troposféry a stratosféry.",
  },
  {
    slug: "puvod-rustu-atmosferickeho-co2",
    title: "Původ růstu atmosférického CO₂",
    category: "Záření a složení atmosféry",
    summary: "Bilance zdrojů a propadů určuje, proč množství oxidu uhličitého v atmosféře roste.",
    distinguishingEvidence: "Emisní bilance, izotopy uhlíku, pokles atmosférického kyslíku a skutečnost, že oceán i pevnina část vypuštěného CO₂ pohlcují.",
  },
  {
    slug: "slunecni-promenlivost",
    title: "Sluneční proměnlivost",
    category: "Záření a složení atmosféry",
    summary: "Změny slunečního výkonu ovlivňují množství energie, které vstupuje do klimatického systému.",
    distinguishingEvidence: "Přímé družicové měření slunečního záření, jedenáctiletý cyklus a očekávaný svislý i prostorový obraz teplotní odezvy.",
  },
  {
    slug: "sopecne-aerosoly",
    title: "Sopečné aerosoly",
    category: "Záření a složení atmosféry",
    summary: "Částice vzniklé po velkých erupcích dočasně mění průchod slunečního a infračerveného záření atmosférou.",
    distinguishingEvidence: "Optická tloušťka stratosférického aerosolu, krátkodobé ochlazení povrchu a současné oteplení části stratosféry.",
  },
  {
    slug: "prumyslove-aerosoly-a-oblaka",
    title: "Průmyslové aerosoly a oblaka",
    category: "Záření a složení atmosféry",
    summary: "Částice rozptylují a pohlcují záření a mohou měnit počet, velikost a životnost oblačných kapek.",
    distinguishingEvidence: "Regionální emisní změny, optická měření aerosolů, období stmívání a zesvětlování a změny vlastností oblaků.",
  },
  {
    slug: "zmeny-ozonu-ve-stratosfere",
    title: "Změny ozonu ve stratosféře",
    category: "Záření a složení atmosféry",
    summary: "Ozon pohlcuje ultrafialové i infračervené záření, takže změna jeho množství ovlivňuje teplotu stratosféry.",
    distinguishingEvidence: "Souběžné profily ozonu a teploty, chemické složení stratosféry a vývoj po omezení látek poškozujících ozonovou vrstvu.",
  },
  {
    slug: "pohlcovani-a-presun-tepla-oceanem",
    title: "Pohlcování a přesun tepla oceánem",
    category: "Atmosféra a oceán",
    summary: "Oceán přijímá většinu přebytečné energie a prouděním ji přemisťuje mezi oblastmi a hloubkami.",
    distinguishingEvidence: "Teplotní profily oceánu, změny v jednotlivých hloubkách, měření toků mezi vzduchem a mořem a přesuny energie během ENSO.",
  },
  {
    slug: "vodni-para-jako-zpetna-vazba",
    title: "Vodní pára jako zpětná vazba",
    category: "Atmosféra a oceán",
    summary: "Teplejší vzduch může obsahovat více vodní páry, která následně ovlivňuje přenos infračerveného záření.",
    distinguishingEvidence: "Společný vývoj teploty, měrné a relativní vlhkosti v pozemních, radiosondových a družicových měřeních.",
  },
  {
    slug: "termodynamika-a-dynamika-srazek",
    title: "Termodynamika a dynamika srážek",
    category: "Atmosféra a oceán",
    summary: "Množství dostupné vodní páry a pohyb vzduchu společně určují vznik, intenzitu a trvání srážek.",
    distinguishingEvidence: "Měření vlhkosti a rosného bodu oddělená od vertikálního pohybu, proudění a místních podmínek při konkrétních srážkových událostech.",
  },
  {
    slug: "vnitrni-promenlivost-atmosfery-a-oceanu",
    title: "Vnitřní proměnlivost atmosféry a oceánu",
    category: "Atmosféra a oceán",
    summary: "Proudění a vzájemná výměna energie vytvářejí kolísání klimatu i bez změny vnějšího působení.",
    distinguishingEvidence: "Charakteristické časové a prostorové vzorce ENSO a dalších oscilací a rozdíl mezi přesunem energie a jejím dlouhodobým přírůstkem.",
  },
  {
    slug: "tepelna-roztaznost-morske-vody",
    title: "Tepelná roztažnost mořské vody",
    category: "Oceán a hladina moře",
    summary: "Změna teploty a salinity mění hustotu vody, a tím i objem oceánu při stejném množství hmoty.",
    distinguishingEvidence: "Sterická změna hladiny vypočtená z profilů teploty a salinity a její porovnání s družicovou altimetrií.",
  },
  {
    slug: "bilance-globalni-hladiny-more",
    title: "Bilance globální hladiny moře",
    category: "Oceán a hladina moře",
    summary: "Celková hladina se mění součtem roztažnosti vody, úbytku pevninského ledu a změn zásob vody na souši.",
    distinguishingEvidence: "Shoda družicové a pobřežní změny hladiny se součtem nezávisle měřených příspěvků oceánu, ledovců, příkrovů a pevninské vody.",
  },
  {
    slug: "pohlcovani-co2-oceanem-a-uhlicitanova-chemie",
    title: "Pohlcování CO₂ oceánem a uhličitanová chemie",
    category: "Oceán a hladina moře",
    summary: "Rozpouštění oxidu uhličitého mění rovnováhu rozpuštěných forem uhlíku a koncentraci vodíkových iontů.",
    distinguishingEvidence: "Společné změny rozpuštěného uhlíku, pH, fugacity CO₂, alkality a nasycení uhličitanovými minerály.",
  },
  {
    slug: "energeticka-bilance-snehu-a-morskeho-ledu",
    title: "Energetická bilance sněhu a mořského ledu",
    category: "Kryosféra",
    summary: "Záření, teplota, sníh, oceán a pohyb ledu společně určují zamrzání, tání a přežívání mořského ledu.",
    distinguishingEvidence: "Souběžné změny rozsahu, tloušťky, stáří, pohybu a sezónního cyklu ledu spolu s měřením dopadající a odražené energie.",
  },
  {
    slug: "hmotnostni-bilance-horskych-ledovcu",
    title: "Hmotnostní bilance horských ledovců",
    category: "Kryosféra",
    summary: "Sněžení, tání, sublimace a odtok rozhodují, zda ledovec během roku získá, nebo ztratí hmotnost.",
    distinguishingEvidence: "Shoda terénních měření akumulace a tání se změnou výšky, objemu a hmotnosti z geodetických metod.",
  },
  {
    slug: "hmotnostni-bilance-a-dynamika-ledovych-prikrovu",
    title: "Hmotnostní bilance a dynamika ledových příkrovů",
    category: "Kryosféra",
    summary: "Sněžení a povrchové tání se kombinují s prouděním ledu a jeho odtokem do oceánu.",
    distinguishingEvidence: "Společný obraz družicové gravimetrie, altimetrie, rychlosti ledovců, sněžení, tání a polohy linie ukotvení.",
  },
  {
    slug: "prenos-tepla-do-pudy-a-tani-permafrostu",
    title: "Přenos tepla do půdy a tání permafrostu",
    category: "Kryosféra",
    summary: "Teplo se šíří půdou a jeho průběh mění sněhová izolace, voda, led a vlastnosti hornin nebo sedimentu.",
    distinguishingEvidence: "Teplotní profily ve vrtech, hloubka aktivní vrstvy, sněhová pokrývka a změny obsahu ledu v půdě.",
  },
  {
    slug: "biologicke-mechanismy-fenologickych-zmen",
    title: "Biologické mechanismy fenologických změn",
    category: "Živá příroda a extrémy",
    summary: "Vývoj organismů řídí kombinace teploty, délky dne, předchozího chladu, vody a biologických omezení.",
    distinguishingEvidence: "Meziroční a prostorové vztahy, rozdíly mezi druhy, přenosové pokusy a experimenty oddělující teplotu od fotoperiody a chladu.",
  },
  {
    slug: "mechanismy-vln-veder",
    title: "Mechanismy vln veder",
    category: "Živá příroda a extrémy",
    summary: "Vlny veder vznikají kombinací teplotního pozadí, atmosférické cirkulace, slunečního záření a vysychání půdy.",
    distinguishingEvidence: "Posun celého rozdělení teplot oddělený od blokujících situací, půdní vlhkosti a regionálního proudění během jednotlivých událostí.",
  },
];

export const mechanismCategories: MechanismCategory[] = [
  "Záření a složení atmosféry",
  "Atmosféra a oceán",
  "Oceán a hladina moře",
  "Kryosféra",
  "Živá příroda a extrémy",
];

export function mechanismBySlug(slug: string) {
  return climateMechanisms.find((mechanism) => mechanism.slug === slug);
}
