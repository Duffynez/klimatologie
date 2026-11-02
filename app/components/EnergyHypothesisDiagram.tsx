import { HypothesisDiagram, type MechanismHypothesis } from "./HypothesisDiagram";

const hypotheses: readonly MechanismHypothesis[] = [
  {
    id: "slunecni-hypoteza",
    name: "Silnější záření Slunce",
    prediction: "Přírůstek energie má pocházet z většího slunečního příkonu. Jeho růst musí předcházet ohřevu a velikostí na něj stačit.",
    test: "Porovnáme družicová měření dopadajícího a odraženého slunečního záření. Jejich rozdíl určí pohlcenou část. Zjistíme, zda její růst doprovází růst příkonu ze Slunce, nebo pokles odrazu Země.",
    observation: "V období září 2002 až březen 2020 sluneční příkon mírně klesal, přesto Země pohlcovala více.",
    verdict: "V tomto testu vyvrácena",
    explanation: "Růst pohlcené energie vyžaduje změnu odrazivosti Země.",
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
          U energetické bilance W/m² vyjadřuje watty na metr čtvereční celé Země.
          Trend za deset let říká, o kolik se tento tok změní. Podrobné podmínky
          číselného testu přirozeného kolísání rozebírá jeho příběh.
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
