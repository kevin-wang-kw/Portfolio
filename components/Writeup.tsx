import { Project } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/Carousel";
import { ChevronLeftIcon } from "lucide-react";

export default function Writeup({ project }: { project: Project }) {
  return (
    <div className="mx-auto max-w-6xl p-6 py-12">
      <div>
        {/* Return Button */}
        <div className="group relative mb-4 inline-flex transition active:scale-95">
          <div className="absolute -inset-x-3.5 -inset-y-2 z-0 ml-1 scale-95 rounded-lg bg-zinc-50 opacity-0 transition group-focus-within:scale-100 group-focus-within:opacity-100 group-hover:scale-100 group-hover:opacity-100 md:rounded-xl dark:bg-zinc-800/50" />
          <Link
            href="/"
            className="z-10 inline-flex items-center gap-2 text-lg font-semibold transition-colors will-change-transform outline-none select-none group-focus-within:text-teal-500 group-hover:text-teal-500 group-active:text-teal-600"
          >
            <span className="absolute -inset-x-3.5 -inset-y-2 z-20 sm:-inset-x-6 sm:rounded-2xl" />
            <ChevronLeftIcon className="h-6 w-6" />
            Return to Portfolio
          </Link>
        </div>
      </div>
      <div className="pb-6">
        <h1 className="mb-2 text-2xl font-bold">{project.name}</h1>
        <p className="whitespace-pre-line">{project.text}</p>
      </div>
      <div className="">
        <Carousel
          opts={{
            loop: true,
          }}
          className=""
          // style={{ width: "100%", height: "auto" }}
        >
          <CarouselContent>
            <CarouselItem>
              {/* make sure that all image formating is within the carousel item bracket*/}
              <Image
                src={project.image}
                alt=""
                width={0}
                height={0}
                sizes="80vw"
                style={{ width: "100%", height: "80dvh", objectFit: "contain" }}
              />
            </CarouselItem>
            {project.images?.map((image) => (
              <CarouselItem key={image}>
                <Image
                  src={image}
                  alt=""
                  width={0}
                  height={0}
                  sizes="80vw"
                  style={{
                    width: "100%",
                    height: "80dvh",
                    objectFit: "contain",
                  }}
                />
              </CarouselItem>
            ))}
            {project.document && (
              <CarouselItem>
                <embed
                  src={project.document}
                  type="application/pdf"
                  className="mx-16 h-full w-[calc(100%-8rem)]"
                ></embed>
              </CarouselItem>
            )}
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
