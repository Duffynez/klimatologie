import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projectionScopes } from "../../../data/projections";
import { ProjectionDirectory } from "../../ProjectionDirectory";

type ScopePageProps = { params: Promise<{ scope: string }> };

export function generateStaticParams() {
  return projectionScopes.map(({ slug }) => ({ scope: slug }));
}

async function selectedScope({ params }: ScopePageProps) {
  const { scope } = await params;
  return projectionScopes.find(({ slug }) => slug === scope) ?? notFound();
}

export async function generateMetadata(props: ScopePageProps): Promise<Metadata> {
  const { label } = await selectedScope(props);
  return { title: `Projekce klimatu | ${label}` };
}

export default async function ProjectionScopePage(props: ScopePageProps) {
  const { slug } = await selectedScope(props);
  return <ProjectionDirectory scope={slug} />;
}
