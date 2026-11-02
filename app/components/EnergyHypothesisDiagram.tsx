import styles from "./EnergyHypothesisDiagram.module.css";

const hypotheses = [
  {
    id: "slunecni-hypoteza",
    name: "Silnější záření Slunce",
    prediction: "Přísun sluneční energie musí růst. Více pohlcené energie má pocházet ze silnějšího Slunce.",
    observation: "V období září 2002 až březen 2020 sluneční příkon mírně klesal, přesto Země pohlcovala více.",
    verdict: "V tomto testu vyvrácena",
    explanation: "Růst pohlcené energie vyžaduje změnu odrazivosti Země.",
    state: "rejected",
  },
  {
    id: "prirozena-hypoteza",
    name: "Samotné přirozené kolísání",
    prediction: "Pozorovaný rozsah a rozložení ohřevu musí vzniknout i bez měnícího se vnějšího působení.",
    observation: "Ohřev oceánu od roku 1960 i zrychlování přísunu energie v letech 2001–2020 jsou silnější než kolísání očekávané v modelových testech.",
    verdict: "Jako úplné vysvětlení nestačí",
    explanation: "Kolísání ovlivňuje průběh změny a rozmístění tepla.",
    state: "insufficient",
  },
  {
    id: "lidske-pusobeni",
    name: "Změny způsobené lidskou činností",
    prediction: "Účinek plynů se projeví v jejich infračervených pásmech. Součet lidských vlivů musí vysvětlit i ohřev oceánu.",
    observation: "Dvě stanice zachytily účinek CO₂ v letech 2000–2010. Výpočty s lidskými vlivy odpovídají rozložení ohřevu oceánu od roku 1960.",
    verdict: "Obstála, dnes přijímaná",
    explanation: "Podporují ji různé fyzikální a pozorovací testy.",
    state: "supported",
  },
];

export function EnergyHypothesisDiagram() {
  return (
    <figure className={styles.diagram} aria-labelledby="hypothesis-map-caption">
      <ol className={styles.branches}>
        {hypotheses.map((hypothesis, index) => (
          <li className={styles.branch} key={hypothesis.id}>
            <a className={styles.title} href={`#${hypothesis.id}`}>
              <span className={styles.number} aria-hidden="true">{index + 1}</span>
              {hypothesis.name}
              <span className={styles.read}>Přečíst příběh ↓</span>
            </a>
            <dl className={styles.steps}>
              <div className={styles.step}>
                <dt>Rozlišující předpověď</dt>
                <dd>{hypothesis.prediction}</dd>
              </div>
              <div className={styles.step}>
                <dt>Výsledek testů</dt>
                <dd>{hypothesis.observation}</dd>
              </div>
              <div className={`${styles.step} ${styles[hypothesis.state]}`}>
                <dt>Dnešní hodnocení</dt>
                <dd><strong>{hypothesis.verdict}</strong><span>{hypothesis.explanation}</span></dd>
              </div>
            </dl>
          </li>
        ))}
      </ol>
      <figcaption id="hypothesis-map-caption">
        Tři vysvětlení a jejich rozhodující testy. Šipky vedou od předpovědi přes výsledek k hodnocení.
        Název otevře příslušný příběh s podmínkami testů a prameny. Posuzujeme příčinu dlouhodobého
        přibývání energie. Sluneční proměnlivost a přirozené kolísání mohou působit i v dnes přijímaném vysvětlení.
      </figcaption>
    </figure>
  );
}
