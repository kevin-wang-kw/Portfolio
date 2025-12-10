import { notFound } from "next/navigation";
import Writeup from "@/components/Writeup";
import { Projects } from "@/lib/data";

export const dynamicParams = false;

export async function generateStaticParams() {
  return Projects.map((project) => ({
    projectId: project.id,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const { projectId } = await params;
  const project = Projects.find((p) => p.id === projectId);

  if (!project) {
    return notFound();
  }

  return <Writeup project={project} />;
}
