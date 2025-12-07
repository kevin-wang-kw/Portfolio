export type Project = {
  name: string;
  description: string;
  link: { href: string; label: string };
  image: string;
  images?: Array<string>;
  document?: string;
  text?: string;
};

export const StairAssist: Project = {
  name: "Stair Assist",
  description:
    "Capstone project creating a stair assist device for elderly client to safely move up and down a set of outdoor stairs.",
  link: { href: "/stair-assist", label: "Read More" },
  image: "/images/Stair Assist Iso.JPG",
  images: ["/images/Stair Assist Iso back.JPG", "/images/Stair Assist.png"],
  document: "/PDF/000.pdf",
  text: "This project was completed as my  year capstone to assist an elderly client in easing the movement up and down an outdoor set of stairs. The protype was designed to be suitable for various heights and stair surfaces through the adjustible sliders on the frame.",
};

export const LensHolder: Project = {
  name: "Lens Holder",
  description:
    "Lens test fixture developed to assist production with root cause analysis and life cycle testing.",
  link: { href: "/lens-holder", label: "Read More" },
  image: "/images/Iso View Lens Holder.JPG",
  images: [
    "/images/Iso View Lens Holder back.JPG",
    "/images/Iso View Stand Bracket.JPG",
  ],
  text: "The lens holder was designed to assist production their investigations. It is comprised of 2 main components; the base plate with dove tail attachement points and variously sized lens holders that would slide into the exposed dove tails. ",
};

export const Projects = [StairAssist, LensHolder];
