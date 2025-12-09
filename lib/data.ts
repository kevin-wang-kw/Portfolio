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
    "The lens holder jig was designed to support production investigations during root cause analysis and optical testing. The jig consists of two primary 3D-printed components: a weighted base plate featuring dovetail attachment points, and interchangeable lens holder brackets that slide into the exposed dovetails. ",
    "A transition fit between the mating surfaces proved  ideal for this project, allowing operators to quickly swap brackets while maintaining sufficient stiffness during lens alignment and testing. Design constraints included cost efficiency, rapid iteration, and compatibility with multiple lens geometries. ",
    "\n \n The modular jig architecture enabled testing of various lenses using a single fixture, reducing both tooling costs and required storage footprint. Utilizing the in-house 3D printer for this project, new lens holder brackets could be designed, printed, and prepared for use within 12 hours, supporting fast turnaround during production investigations. ",
    "Multiple fit checks during development ensued repeatable use across multiple lens holder brackets. As finer alignment during testing was performed manually by the equipment operator, the weighted base and snug dovetail sliding interface provided sufficient stability and positional consistency. ",
  ],
};

export const Projects = [StairAssist, LensHolder];
