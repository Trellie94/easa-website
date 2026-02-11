export interface Project {
  slug: string;
  name: string;
  year: string;
  location: string;
  thumbnail: string;
  heroImage: string;
  summary: string;
  description: string[];
  details?: string;
  credits?: string;
  images: string[];
}

export const projects: Project[] = [
  {
    slug: "monang",
    name: "Monang",
    year: "2023",
    location: "Limpopo, South Africa",
    thumbnail: "/images/project-monang.jpg",
    heroImage: "/images/monang/01.jpg",
    summary:
      "A new creche built on a sloping site using sustainable timber construction, providing classrooms, an office, and a sick-bay around a sheltered deck.",
    description: [
      "Monang creche, established in 2004, had been operating from a domestic garage in the village, making expansion and registration with the authorities very difficult. The new facility, built on a site at the edge of the community provides 2-3 classrooms, an office and a sick-bay either side of a sheltered deck area.",
      "The sloping site and a desire to reduce embodied carbon and financial cost led us to build a suspended timber floor supported by cast concrete columns and steel beams.",
    ],
    images: [
      "/images/monang/01.jpg",
      "/images/monang/02.jpg",
      "/images/monang/03.jpg",
      "/images/monang/04.jpg",
      "/images/monang/05.jpg",
      "/images/monang/06.jpg",
    ],
  },
  {
    slug: "malahlela-2022",
    name: "Malahlela",
    year: "2022",
    location: "Limpopo, South Africa",
    thumbnail: "/images/project-malahlela-2022.jpg",
    heroImage: "/images/malahlela-2022/01.jpg",
    summary:
      "A compact, accessible creche with three classrooms for 30 children, completed after the original 2020 build was paused due to Covid-19.",
    description: [
      "Malahlela creche was completed to a new design in 2022. The previous build had been paused in March 2020 due to Covid-19 travel restrictions just 10 days prior to the scheduled start.",
      "The completed design highlights accessibility, and provides a generous shaded outdoor space for teaching and playing.",
      "The creche includes kitchen facilities, administrative areas, two classrooms as well as an outdoor teaching area. The design is intentionally compact and uses inexpensive, locally available materials.",
    ],
    details: "3 classrooms for 30 children",
    credits: "Images by Studio 8Fold, Malcolm Dugdale, Mike Hawkins.",
    images: [
      "/images/malahlela-2022/01.jpg",
      "/images/malahlela-2022/02.jpg",
      "/images/malahlela-2022/03.jpg",
      "/images/malahlela-2022/04.jpg",
      "/images/malahlela-2022/05.jpg",
    ],
  },
  {
    slug: "rise",
    name: "Rise",
    year: "2021",
    location: "Nottingham, United Kingdom",
    thumbnail: "/images/project-rise.jpg",
    heroImage: "/images/rise/01.jpg",
    summary:
      "The programme's first UK project — a radial strawbale outdoor learning space for the RISE educational charity in Nottingham.",
    description: [
      "RISE learning zone is an educational charity in Balloon Woods, Nottingham. The project at RISE is our first in the UK — an ambition to do more work rather than a diversion from our projects in South Africa.",
      "Our partners wanted something 'funky'. The result is a radial strawbale learning space. The project was fully funded by the generous donations of supporters of RISE.",
    ],
    images: [
      "/images/rise/01.jpg",
      "/images/rise/02.jpg",
      "/images/rise/03.jpg",
      "/images/rise/04.jpg",
      "/images/rise/05.jpg",
    ],
  },
  {
    slug: "malahlela-2020",
    name: "Malahlela (Unbuilt)",
    year: "2020",
    location: "Limpopo, South Africa",
    thumbnail: "/images/project-malahlela-2020.jpg",
    heroImage: "/images/malahlela-2020/01.jpg",
    summary:
      "The original Malahlela design — paused by Covid-19 just 10 days before construction was due to start. The design was later revisited and built in 2022.",
    description: [
      "Planning for the Malahlela creche began in 2019 — the build was paused in March 2020 due to Covid-19 travel restrictions just 10 days prior to the scheduled start. Following the lifting of travel restrictions the design was revisited and a new scheme was developed. Construction took place during spring 2022.",
      "The unbuilt design proposal welcomes users through a circular entrance play space, which is bordered by an interactive wall with various infill elements that curves out towards the street.",
      "The creche includes kitchen facilities, administrative areas, two classrooms as well as an outdoor teaching area. The design is intentionally compact and uses inexpensive, locally available materials.",
    ],
    details: "3 classrooms for 30 children",
    credits:
      "Design and images by Somera Bano, Bethan Crouch, Tilisha Franklin & Rumbi Mukundu.",
    images: [
      "/images/malahlela-2020/01.jpg",
      "/images/malahlela-2020/02.jpg",
      "/images/malahlela-2020/03.jpg",
      "/images/malahlela-2020/04.jpg",
      "/images/malahlela-2020/05.jpg",
    ],
  },
  {
    slug: "lesedi",
    name: "Lesedi",
    year: "2019",
    location: "Limpopo, South Africa",
    thumbnail: "/images/project-lesedi.jpg",
    heroImage: "/images/lesedi/01.jpg",
    summary:
      "The largest creche ever undertaken by the programme at 500 square metres — with 5 classrooms serving 96 children and a community teacher training centre.",
    description: [
      "Lesedi Creche is the largest creche ever undertaken by the design/build studio at five hundred square metres. The creche has enough space to allow the already large creche to grow to accommodate future children. Already, this creche has hosted the Thusanang Trust's first community-based teacher training centre.",
      "This creche was the result of a vertically integrated multi-course year for the studio — students came from four different courses, and more than six different year groups to deliver a complete project.",
    ],
    details: "5 classrooms and 96 children",
    images: [
      "/images/lesedi/01.jpg",
      "/images/lesedi/02.jpg",
      "/images/lesedi/03.jpg",
      "/images/lesedi/04.jpg",
      "/images/lesedi/05.jpg",
    ],
  },
  {
    slug: "mothopong",
    name: "Mothopong",
    year: "2018",
    location: "Limpopo, South Africa",
    thumbnail: "/images/project-mothopong.jpg",
    heroImage: "/images/mothopong/01.jpg",
    summary:
      "One of the programme's most successful projects, driven by the dedication of head teacher Joyce. Two large classrooms serving 42 children.",
    description: [
      "Mothopong creche is one of the most successful projects we have done to date. This success is almost entirely due to the dedication, and efforts of the head teacher, Joyce.",
      "The project was finished as two large classrooms — which have since been subdivided by the teachers to make the creche more functional.",
    ],
    details: "2 classrooms and 42 children",
    images: [
      "/images/mothopong/01.jpg",
      "/images/mothopong/02.jpg",
      "/images/mothopong/03.jpg",
      "/images/mothopong/04.jpg",
      "/images/mothopong/05.jpg",
    ],
  },
];
