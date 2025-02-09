import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  postgresql,
  api,
  tailwind,
  nodejs,
  mongodb,
  github,
  docker,
  whoop,
  heb,
  carrent,
  jobit,
  tripguide,
  threejs,
  heartlanddental,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Front Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Artist",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Github",
    icon: github,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Web Api",
    icon: api,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
];

const experiences = [
  {
    title: "Business Assistant",
    company_name: "Heartland Dental",
    icon: heartlanddental,
    iconBg: "#061d41",
    date: "August 2023 - Current",
    points: [
      "Manage front office operations, handling multi-channel communication for smooth patient interactions.",
      "Coordinate with dental staff, ensuring accurate treatment plans and efficient scheduling in Dentrix.",
      "Use Dentrix for insurance tasks, including verification, claims, payments, and account reconciliation.",
      "Explain treatment costs and payment options, ensuring financial clarity for patients.",
    ],
  },
  {
    title: "Healthy Living Lead",
    company_name: "H-E-B",
    icon: heb,
    iconBg: "#ffffff",
    date: "Jan 2021 - Aug 2023",
    points: [
      "Supervise and train staff, setting performance metrics and improving efficiency.",
      "Design engaging displays to enhance customer experience and support health goals.",
      "Analyze sales data to forecast trends and optimize inventory.",
      "Collaborate across departments to improve workflows and drive innovation.",
    ],
  },
  {
    title: "Order Fulfilment",
    company_name: "WHOOP",
    icon: whoop,
    iconBg: "#ffffff",
    date: "Jan 2022 - March 2022",
    points: [
      "Assisted members with orders, returns, account updates, and refunds.",
      "Collaborated in team meetings to improve processes and streamline order approvals.",
      "Communicated with fulfillers to ensure timely and accurate order processing.",
      "Used Zendesk, Shopify, and Salesforce to enhance efficiency and service quality.",
    ],
  },
  {
    title: "Member Service Representative",
    company_name: "WHOOP",
    icon: whoop,
    iconBg: "#ffffff",
    date: "March 2022 - May 2022",
    points: [
      "Promoted to Order Fulfillment in three months by exceeding departmental KPIs.",
      "Used Zendesk and Salesforce to conduct product demos and provide tailored support.",
      "Handled troubleshooting via phone and email, ensuring efficient issue resolution.",
      "Escalated support tickets with detailed insights, earning multiple 5-star reviews.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
