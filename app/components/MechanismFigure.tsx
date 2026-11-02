import Image from "next/image";
import type { ReactNode } from "react";
import styles from "./MechanismFigure.module.css";

type Props = {
  name: string;
  alt: string;
  width?: number;
  height?: number;
  mobileHeight?: number;
  sketch?: boolean;
  children: ReactNode;
};

export function MechanismFigure({ name, alt, width = 400, height = 260, mobileHeight, sketch = false, children }: Props) {
  const base = `/media/mechanismy-vizualni/${name}`;
  return (
    <figure id={`obrazek-${name}`} className={`article-figure ${styles.figure} ${sketch ? styles.sketch : ""}`}>
      <picture>
        {mobileHeight && <source media="(max-width: 600px)" srcSet={`${base}-mobil.svg`} width={420} height={mobileHeight} />}
        <Image src={`${base}.svg`} width={width} height={height} alt={alt} className={styles.image} />
      </picture>
      <figcaption>{children}</figcaption>
    </figure>
  );
}
