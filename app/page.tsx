import Image from "next/image";
import { LinkIcon } from "lucide-react";
import { Card } from "@/components/Card";
import { Projects } from "@/lib/data";

export default function Home() {
  return (
    <div className="p-6 mx-auto max-w-6xl py-12">
      <h1 className="text-2xl font-bold tracking-tight sm:text-4xl">
        Software designer, founder, and amateur astronaut.
      </h1>
      <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
        I'm Kevin a mechanical engineering graduate working towards my P.eng
        [ect fill more info later]
      </p>
      <div className="mt-12">
        <h1 className="font-medium text-xl mb-2">My Projects</h1>
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-16 gap-y-16 sm:grid-cols-2 py-6"
        >
          {Projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image src={project.image} alt="" width={250} height={250} />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-500 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </div>
    </div>
  );
}
