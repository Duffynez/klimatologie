import type { ReactNode } from "react";
import styles from "./HypothesisDiagram.module.css";

export type MechanismHypothesis = {
  id: string;
  name: string;
  prediction: string;
  test: string;
  observation: string;
  verdict: string;
  explanation: string;
  state: "rejected" | "insufficient" | "unresolved" | "supported";
};

type Props = {
  hypotheses: readonly MechanismHypothesis[];
  captionId: string;
  caption: ReactNode;
  context?: ReactNode;
};

export function HypothesisDiagram({ hypotheses, captionId, caption, context }: Props) {
  if (hypotheses.length < 1 || hypotheses.length > 3) {
    throw new Error("HypothesisDiagram requires one to three hypotheses.");
  }

  return (
    <>
      <p className={styles.guide}>
        Diagram ukazuje cestu od předpovědi přes test a jeho výsledek k dnešnímu hodnocení.
        Předpovědi odlišují zde porovnávané možnosti, někdy až souběhem několika znaků.
        Kliknutím na název přejdete k příběhu hypotézy a důkazům.
      </p>
      {context}
      <figure className={styles.diagram} aria-labelledby={captionId}>
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
                  <dt>Jedinečná předpověď</dt>
                  <dd>{hypothesis.prediction}</dd>
                </div>
                <div className={styles.step}>
                  <dt>Jak hypotézu testujeme</dt>
                  <dd>{hypothesis.test}</dd>
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
        <figcaption id={captionId}>{caption}</figcaption>
      </figure>
    </>
  );
}
