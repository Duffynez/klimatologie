import type { Metadata } from "next";
import { ProjectionDirectory } from "./ProjectionDirectory";

export const metadata: Metadata = {
  title: "Projekce klimatu",
  description: "Jak se mohou změnit teploty, srážky, vítr, sníh, oceán a množství CO₂ ve vzduchu. Projekce pro Česko, Evropu a svět s odkazy na měření a data.",
};

export default function ProjectionsPage() {
  return <ProjectionDirectory />;
}
