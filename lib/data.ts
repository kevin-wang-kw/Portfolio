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
  image: "/images/Stair Assist Iso.png", 
  text: "This project was completed as my  year capstone to assist an elderly client in easing the movement \n up and down an outdoor set of stairs. The protype was designed to be suitable for various heights and\n stair surfaces. ",
  
};

export const LensHolder = {
  name: "Lens Holder",
  description:
    "Lens test fixture developed to assist production with testing",
  link: { href: "/lens-holder", label: "Read More" },
  image: "/images/Iso View Lens Holder.JPG",
};

export const Projects = [StairAssist, LensHolder];
