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
    "Capstone project creating a stair assist device for elderly client to safely move up and down th",
  link: { href: "/stair-assist", label: "Read More" },
  image: "/images/Stair Assist Iso.png",
  text: "This project was completed as my  year capstone to assist an elderly client in easing the movement up and down an outdoor set of stairs. The protype was designed to be suitable for various heights and stair surfaces. ",
};

export const LensHolder = {
  name: "Lens Holder",
  description:
    "Lens test fixture developed to assist production with root cause analysis and life cycle testing.",
  link: { href: "/lens-holder", label: "Read More" },
  image: "/images/Iso View Lens Holder.JPG",
  text: "The lens holder was designed to assist production their investigations. It is comprised of 2 main components the base plate with dove tail attachement points and variously sized lens holders that would slide into the exposed dove tails.",
};

export const Projects = [StairAssist, LensHolder];
