import { HypothesisDiagram, type MechanismHypothesis } from "./HypothesisDiagram";

const hypotheses: readonly MechanismHypothesis[] = [
  {
    id: "slunecni-hypoteza",
    name: "Silnější záření Slunce",
    prediction: "Vyšší příkon ze Slunce musí velikostí a časovým průběhem vysvětlit ohřev. Při obvyklé změně slunečního spektra očekáváme také oteplování povrchu, troposféry a horní stratosféry.",
    test: "Z družic porovnáme přicházející a odražené sluneční záření. Samostatně porovnáme teplotní změny v různých výškách s vypočtenými odezvami na sluneční a další vlivy.",
    observation: "Od září 2002 do března 2020 příkon mírně klesal, přesto Země pohlcovala více. V letech 1979–2018 se troposféra oteplovala, zatímco stratosféra chladla.",
    verdict: "V uvedených testech neobstála",
    explanation: "Silnější Slunce nevysvětluje růst pohlcování ani pozorované rozložení teplotních změn.",
    state: "rejected",
  },
  {
    id: "prirozena-hypoteza",
    name: "Samotné přirozené kolísání",
    prediction: "Při stálých vnějších vlivech se dvacetileté trendy bilance soustředí kolem nuly. V použitých modelech zahrnuje pásmo ±0,19 W/m² za deset let přibližně 95 % kolísání.",
    test: "Družicový trend porovnáme s 1 293 dvacetiletými úseky ze 47 modelů se stálými vnějšími vlivy. Započítáme chybu měření a zjistíme, jak pravděpodobně by takový růst vytvořilo samotné kolísání.",
    observation: "Naměřený trend za roky 2001–2020 činil +0,38 W/m² za deset let. I po započtení chyby měření má takový výsledek v testu pravděpodobnost pod 1 %.",
    verdict: "Jako úplné vysvětlení nestačí",
    explanation: "Kolísání ovlivňuje průběh změny a rozmístění tepla.",
    state: "insufficient",
  },
  {
    id: "lidske-pusobeni",
    name: "Změny způsobené lidskou činností",
    prediction: "Přibývající CO₂ má zesílit záření k povrchu ve svých charakteristických pásmech. Růst skleníkových plynů spolu s úbytkem ozonu má vytvářet ohřev spodní atmosféry a ochlazování stratosféry, vrstvy nad ní. Rozlišuje souběh těchto změn, jejich síla a rozložení.",
    test: "Na dvou stanicích změříme záření a výpočtem oddělíme příspěvek CO₂. V dalším testu porovnáme družicové teploty podle výšky a zeměpisné šířky s modelovým obrazem lidského působení i přirozeným kolísáním.",
    observation: "Dvě stanice zachytily účinek CO₂ v letech 2000–2010. Družicové teploty za roky 1979–2012 odpovídají společnému výškovému a zeměpisnému obrazu lidského působení.",
    verdict: "Obstála, dnes přijímaná",
    explanation: "Podporují ji různé fyzikální a pozorovací testy.",
    state: "supported",
  },
];

export function EnergyHypothesisDiagram() {
  return (
    <HypothesisDiagram
      hypotheses={hypotheses}
      captionId="hypothesis-map-caption"
      context={
        <p>
          Bilance ve wattech na metr čtvereční (W/m²) vyjadřuje, kolik energie
          Země za sekundu získává nebo ztrácí v přepočtu na metr čtvereční
          celého povrchu. Kladná hodnota znamená, že planeta přijímá více
          energie, než odevzdává. Trend za deset let udává, o kolik se tento
          rozdíl za desetiletí v průměru mění.
        </p>
      }
      caption={
        <>
          Porovnáváme příčinu dlouhodobého přibývání energie. Jednotlivé testy mají
          uvedená období a podmínky. Přirozené kolísání ovlivňuje i dnes přijímané
          vysvětlení, u lidského působení rozhoduje soubor vzájemně se doplňujících testů.
        </>
      }
    />
  );
}
