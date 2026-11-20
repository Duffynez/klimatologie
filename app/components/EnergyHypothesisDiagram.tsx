import { HypothesisDiagram, type MechanismHypothesis } from "./HypothesisDiagram";

const hypotheses: readonly MechanismHypothesis[] = [
  {
    id: "slunecni-hypoteza",
    name: "Silnější záření Slunce",
    prediction: "Příkon ze Slunce má růst. Při zesílení podobném slunečnímu cyklu čekáme ohřev povrchu, troposféry i horní stratosféry.",
    test: "Z družic určíme příchozí a odražené sluneční záření. Teploty podle výšky porovnáme s vypočtenou odezvou na silnější Slunce.",
    observation: "Od září 2002 do března 2020 příkon mírně klesal. V letech 1979–2018 se troposféra oteplovala, stratosféra chladla.",
    verdict: "V uvedených testech neobstála",
    explanation: "Země pohlcovala více záření díky menšímu odrazu.",
    state: "rejected",
  },
  {
    id: "prirozena-hypoteza",
    name: "Samotné přirozené kolísání",
    prediction: "Při stálých vnějších vlivech se asi 95 % dvacetiletých trendů přebytku v modelech vejde do ±0,19 W/m² za deset let.",
    test: "Družicový trend porovnáme se stejně dlouhými úseky modelů bez změn vnějších vlivů.",
    observation: "Za roky 2001–2020 vyšlo +0,38 W/m² za deset let. Takový nárůst vyšel při samotném kolísání a zahrnutí chyby měření v méně než 1 % případů.",
    verdict: "Jako úplné vysvětlení nestačí",
    explanation: "Kolísání ovlivňuje průběh změny a rozmístění tepla.",
    state: "insufficient",
  },
  {
    id: "lidske-pusobeni",
    name: "Změny způsobené lidskou činností",
    prediction: "Záření k povrchu zesílí v pásmech CO₂. Růst skleníkových plynů a úbytek ozonu mají ohřívat troposféru a ochlazovat stratosféru.",
    test: "Záření na dvou stanicích srovnáme s výpočty při stálém a rostoucím CO₂. Družicové teploty porovnáme s modely podle výšky a zeměpisné šířky.",
    observation: "Záření v pásmech CO₂ v letech 2000–2010 zesílilo. Rozložení změn družicových teplot v letech 1979–2012 odpovídalo výpočtům s lidskými vlivy.",
    verdict: "Obstála, dnes přijímaná",
    explanation: "Změny záření i výškové rozložení teplot odpovídají předpovědím.",
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
          Energetický přebytek ve W/m² udává, jak rychle Země získává energii
          v přepočtu na metr čtvereční celého povrchu. Trend za deset let
          říká, o kolik se tato rychlost za desetiletí změní.
        </p>
      }
      caption={
        <>
          Hodnocení se týká příčiny dlouhodobého přibývání energie.
          Přirozené kolísání ovlivňuje, jak ohřev probíhá v jednotlivých obdobích.
        </>
      }
    />
  );
}
