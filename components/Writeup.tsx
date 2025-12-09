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
        <Link href="/" className="mb-2 text-lg font-semibold flex items-center gap-2">
          <ChevronLeftIcon className="h-6 w-6" />
          Return to Portfolio
        </Link>
      </div>
      <div className="pb-6">
        <h1 className="mb-2 text-2xl font-bold">{project.name}</h1>
        <p className="whitespace-pre-line">{project.text}</p>
      </div>
      <div className="mx-12">
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
                style={{ width: "100%", height: "80dvh", objectFit: "contain" }}
              />
              </CarouselItem>
            ))}
            {project.document && (
              <CarouselItem>
                <embed
                  src={project.document}
                  width="100%"
                  height="100%"
                  type="application/pdf"
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
