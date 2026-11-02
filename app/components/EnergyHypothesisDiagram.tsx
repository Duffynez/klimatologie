import { HypothesisDiagram, type MechanismHypothesis } from "./HypothesisDiagram";

const hypotheses: readonly MechanismHypothesis[] = [
  {
    id: "slunecni-hypoteza",
    name: "Silnější záření Slunce",
    prediction: "Sluneční příkon musí růst před ohřevem a velikostí na něj stačit.",
    test: "Družicemi oddělíme změny příchozího a odraženého slunečního záření.",
    observation: "Září 2002 až březen 2020: příkon mírně klesal, ale Země pohlcovala více.",
    verdict: "V tomto testu vyvrácena",
    explanation: "Růst pohlcené energie vyžaduje změnu odrazivosti Země.",
    state: "rejected",
  },
  {
    id: "prirozena-hypoteza",
    name: "Samotné přirozené kolísání",
    prediction: "Při stálých vnějších vlivech: přibližně 95 % dvacetiletých trendů modelů v pásmu ±0,19 W/m² za deset let kolem nuly.",
    test: "Družicový trend porovnáme s 1 293 úseky ze 47 modelů a započteme chybu měření.",
    observation: "Roky 2001–2020: +0,38 W/m² za deset let. Takový růst má v testu samotného kolísání pravděpodobnost pod 1 %.",
    verdict: "Jako úplné vysvětlení nestačí",
    explanation: "Kolísání ovlivňuje průběh změny a rozmístění tepla.",
    state: "insufficient",
  },
  {
    id: "lidske-pusobeni",
    name: "Změny způsobené lidskou činností",
    prediction: "CO₂ zesiluje záření k povrchu ve svých pásmech. Skleníkové plyny a úbytek ozonu společně vedou k ohřevu spodní atmosféry a ochlazování stratosféry nad ní.",
    test: "Změříme příspěvek CO₂ k záření. Družicové rozložení teplot porovnáme s výpočty lidských vlivů a přirozeného kolísání.",
    observation: "Pozemní test CO₂ obstál pro roky 2000–2010. Výškové a zeměpisné rozložení teplot odpovídalo lidským vlivům v letech 1979–2012.",
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
