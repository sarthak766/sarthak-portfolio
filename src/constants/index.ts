// Contains constant data for using in website
// ! Don't remove anything from here if not sure

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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  user1,
  user2,
  user3,
  youtube,
  linkedin,
  twitter,
  github,
} from "../assets";
import Dance from "../assets/Dance.png"
import Footwear from "../assets/Footwear.jpg"
import bookstore from "../assets/bookstore.jpg"
// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },

  {
    id: "contact",
    title: "Contact",
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "Software Developer",
    icon: web,
  },
  {
    title: "Frontend developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Problem solver",
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "HTML,CSS And Javascript",
    company_name: "",
    icon: starbucks,
    iconBg: "#ffffff",
    date: "",
    points: [
      "Proficient in structuring and organizing web content using HTML.",
      "Skilled in styling and designing visually appealing web interfaces with CSS.",
      "Experienced in implementing interactive features and dynamic functionalities using JavaScript.",
    
    ],
  },
  {
    title: "React-JS And Tailwind-CSS",
    company_name: "",
    icon: tesla,
    iconBg: "#ffffff",
    date: "",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Proficient in using Tailwind CSS to rapidly style and design modern web interfaces.",
    ],
  },
  {
    title: "Node-js,MongoDB and Express-js",
    company_name: "",
    icon: shopify,
    iconBg: "#ffffff",
    date: "",
    points: [
      "Skilled in developing server-side applications and APIs using Node.js.",
      "Experienced in designing and implementing database solutions using MongoDB for efficient data storage and retrieval.",
      "Proficient in building web applications and RESTful APIs with the Express.js framework.",
    ],
  },
  {
    title: "Data Structures and algorithms",
    company_name: "",
    icon: meta,
    iconBg: "#ffffff",
    date: "",
    points: [
      "Proficient in implementing efficient algorithms and data structures to solve complex problems.",
      "Extensive experience with problem-solving on online coding platforms, having tackled around 300 problems to hone algorithmic thinking and problem-solving skills.",
    ],
  },
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: user1,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: user2,
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: user3,
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "Book Store",
    description:
    "I developed a bookstore app enabling users to read, create, edit, and delete books, featuring an authentication system.",
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
      {
        name:"Node Js",
        color:"green-text-gradient",
      },
      {
        name:"Express Js",
        color:"pink-text-gradient",
      },

    ],
    image:bookstore,
    source_code_link: "https://github.com/sarthak766/Bookstore2",
    live_site_link: "https://bookstore2-fullstack.vercel.app/",
  },
  {
    name: "Ecommerce Website",
    description:
      "I developed an ecommerce platform enabling users to add favorite shoes to their cart and easily search by brand.",
    tags: [
      {
        name: "react-js",
        color: "blue-text-gradient",
      },
      {
        name: " Tailwind Css",
        color: "green-text-gradient",
      },
         {
        name: "Redux-toolkit",
        color: "blue-text-gradient",
      },
    ],
    image: Footwear,
    source_code_link: "https://github.com/sarthak766/Footwear-ecommerce",
    live_site_link: "https://footwear-ecommerce-puce.vercel.app/",
  },
  {
    name: "Dance Academy Website",
    description:
      "I designed a dance academy website ensuring smooth navigation across various sections for enhanced user experience using react router dom",
    tags: [
      {
        name: "react-js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind css",
        color: "green-text-gradient",
      },
      
    ],
    image: Dance,
    source_code_link: "https://github.com/sarthak766/Dancers-Arena",
    live_site_link: "https://dancers-arena.vercel.app/",
  },
  
 
] as const;

export const SOCIALS = [
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/sarthak-badola-621b50218/",
  },
  {
    name: "Twitter",
    icon: twitter,
    link: "https://twitter.com/SarthakBad27669",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/sarthak766",
  },
] as const;
