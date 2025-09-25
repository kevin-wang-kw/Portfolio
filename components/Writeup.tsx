import { Project } from "@/lib/data";

export default function Writeup({ project }: { project: Project }) {
  return (
    <div className="p-6 mx-auto max-w-6xl py-12">
      <h1 className="font-bold text-2xl mb-2">{project.name}</h1>
      <p className="whitespace-pre-line">{project.text}</p>
    </div>
  );
}
