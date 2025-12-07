import Image from "next/image";
import { LinkIcon } from "lucide-react";
import { Card } from "@/components/Card";
import { Projects } from "@/lib/data";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl p-6 py-12">
      <h1 className="text-2xl font-bold tracking-tight sm:text-4xl">
        Mechanical designer, tinker, and amateur programer.
      </h1>
      <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
        I'm Kevin, a mechanical engineering graduate working towards earning my
        P.Eng. With my degree in hand, I’m looking to dive into real-world
        design, testing, and collaboration, eager to apply what I know while I
        grow. I love turning sketches and ideas into tangible, working
        solutions.
      </p>
      <div className="mt-12">
        <h1 className="mb-2 text-xl font-semibold tracking-wide text-stone-700 uppercase">
          My Portfolio
        </h1>
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-16 gap-y-16 py-6 sm:grid-cols-2"
        >
          {Projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-16 w-12 items-center justify-center">
                <Image
                  src={project.image}
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-auto w-full rounded-sm bg-white shadow-md shadow-zinc-800/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800"
                  loading="eager"
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href} className="outline-none">{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <div className="relative z-10 -mx-3 mt-6 flex rounded-full bg-zinc-100 px-3 py-2 text-sm font-medium text-zinc-500 transition group-hover:bg-teal-50 group-hover:text-teal-500 dark:text-zinc-200 group-focus-within:bg-teal-50 group-focus-within:text-teal-500">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </div>
            </Card>
          ))}
        </ul>
      </div>
    </div>
  );
}
