export type Project = {
  name: string;
  description: string;
  link: { href: string; label: string };
  image: string;
  images?: Array<string>;
  document?: string;
  text?: Array<string>;
};

export const StairAssist: Project = {
  name: "Stair Assist",
  description:
    "Capstone project creating a stair assist device for elderly client to safely move up and down a set of outdoor stairs.",
  link: { href: "/stair-assist", label: "Read More" },
  image: "/images/Stair Assist Iso.JPG",
  images: ["/images/Stair Assist Iso back.JPG", "/images/Stair Assist.png"],
  document: "/PDF/000.pdf",
  text: [
    "This project was completed as my final-year capstone to assist an elderly client in safely traversing an outdoor set of stairs. The prototype was designed to accommodate users of varying heights(1.5 m to 1.95 m) and weights up to 100 kg, as well as stair rise heights ranging from 100-300 mm through adjustable locking sliders integrated into the frame. ",
    "Design constraints included cost targets, user safety requirements, weight limitations, and reliable outdoor performance under variable weather conditions. ",
    "\n \n The design followed a user-centric approach, prioritizing safety, comfort, and ease of use. Features such as adjustable handles, non-slip contact surfaces, and ergonomic support were integrated to enhance user confidence. ",
    "Environmental resilience was also considered, with materials selected for outdoor durability and seasonal adjustments such as non-slip foot attachments for icy conditions being incorporated into the design to maintain usability and safety throughout the year.",
    "\n \n The prototype was evaluated through load testing and repeated user interaction to verify stability, adjustability, and ease of use under representative outdoor conditions.",
    "",
  ],
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
  text: [
    "The lens holder was designed to assist production their investigations when aligning a lens for testing. The jig is comprised of 2 main 3D printed components; the weighted base plate with dove tail attachement points and variously sized lens holders that would slide into the exposed dove tails. ",
    "Constraints included ",
    "\n \n The modular jig design supported testing of multiple lenses, resulting in reduced tooling costs and a smaller physical footprint when stored. Being 3D printed if new lenses needed testing a new bracked could be manufactured and prepared for use within 12hrs.",
  ],
};

export const Projects = [StairAssist, LensHolder];
