import Image from "next/image";
import Link from "next/link";
import { ChevronLeftIcon } from "lucide-react";
import { Project } from "@/lib/data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/Carousel";
import LinkButton from "@/components/LinkButton";

export default function Writeup({ project }: { project: Project }) {
  return (
    <div className="mx-auto max-w-6xl p-6 py-12">
      <div>
        {/* Return Button */}
        <LinkButton href="/">
          <ChevronLeftIcon className="h-6 w-6" />
          Return to Portfolio
        </LinkButton>
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
