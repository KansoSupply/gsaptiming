import { notFound } from "next/navigation";
import projects from "@/lib/projects";
import Layout from "./Layout";

export default async function Project({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((project) => project.slug === slug);

  if (!project) return notFound();
  return <Layout project={project} />;
}
