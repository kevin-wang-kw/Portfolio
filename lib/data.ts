export type Project = {
  name: string;
  description: string;
  link: { href: string; label: string };
  image: string;
  text?: string;
};

export const StairAssist = {
  name: "Stair Assist",
  description:
    "Capstone project creating a stair assist device for elderly client",
  link: { href: "/stair-assist", label: "Read More" },
  image: "/images/Iso View Lens Holder.JPG",
  text: "This was an awesome project\nThis is a new line.",
};

export const LensHolder = {
  name: "Lens Holder",
  description:
    "Capstone project creating a stair assist device for elderly client",
  link: { href: "/lens-holder", label: "Read More" },
  image: "/images/Iso View Lens Holder.JPG",
};

export const Projects = [StairAssist, LensHolder];
