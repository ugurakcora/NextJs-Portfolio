import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import gantImg from "@/public/gant.png";
import boyserImg from "@/public/boyser.png";
import formsungerImg from "@/public/formsunger.png";
import vellteksImg from "@/public/vellteks.png";
 
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Github",
    hash: "#github",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

// dummy datas
export const experiencesData = [
  {
    title: "Next4Biz",
    position: "Front-end Developer",
    location: "İstanbul",
    description:
      "I took part in the development of the front end of the CRM product using React. I coded my profile page.",
    icon: React.createElement(FaReact),
    date: "2023",
  },
  {
    title: "Akinon",
    position: "Front-end Developer",
    location: "İstanbul",
    description:
      "I developed the frontends of e-commerce sites",
    icon: React.createElement(CgWorkAlt),
    date: "2021",
  },
  {
    title: "Pixelplus",
    position: "Front-end Developer",
    location: "İstanbul",
    description:
      "I coded the frontends of e-commerce and corporate companies",
    icon: React.createElement(CgWorkAlt),
    date: "2020",
  },
  {
    title: "Niceye",
    position: "Front-end Developer",
    location: "İstanbul",
    description:
      "I coded Pfizer's drug package insert sites.",
    icon: React.createElement(CgWorkAlt),
    date: "2019",
  },

] as const;

export const projectsData = [
  {
    title: "Gant",
    description:
      "While working at Akinon Company, we coded this E-commerce project together with my teammate Uğur Karakurt.",
    tags: ["Django", "Scss", "BEM", "Javascript", "Jquery", "Python", "Jinja 2"],
    imageUrl: gantImg,
  },
  {
    title: "Boyser",
    description:
      "When coding the website for Boyser, which is under the Erciyes Anadolu Holding.",
    tags: ["Pug", "Scss", "BEM", "JavaScript", "jQuery", "XSLT"],
    imageUrl: boyserImg,
  },
  {
    title: "Form Sünger",
    description:
      "When coding the website for Form Sünger, which is under the Erciyes Anadolu Holding.",
    tags: ["Pug", "Scss", "BEM", "JavaScript", "jQuery", "XSLT"],
    imageUrl: formsungerImg,
  },
    {
    title: "Vellteks",
    description:
      "When coding the website for Form Sünger, which is under the Erciyes Anadolu Holding.",
    tags: ["Pug", "Scss", "BEM", "JavaScript", "jQuery", "XSLT"],
    imageUrl: vellteksImg,
  },
 
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Sass",
  "Less",
  "Tailwind",
  "BEM",
  "JavaScript",
  "TypeScript",
  "Pug.js",
  "Jquery",
  "React",
  "Next.js",
  "Git",
  "Redux",
  "Python",
  "Django",
  "Framer Motion",
] as const;

export const githubPin = [
  {
    id: 1,
    name: 'Temp Clear',
    html_url: 'https://github.com/ugurakcora/TempClear',
    description: 'Windows Temp Clear Script',
    fork: false,
    stargazers_count: 5,
    watchers_count: 2,
    language: 'Batchfile',
  },
  {
    id: 2,
    name: 'NextJs Portfolio',
    html_url: 'https://github.com/ugurakcora/NextJs-Portfolio',
    description: 'React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS, Framer Motion, React Email & Resend',
    fork: false,
    stargazers_count: 2,
    watchers_count: 1,
    language: 'JavaScript',
  },
  {
    id: 3,
    name: 'React E-Commerce',
    html_url: 'https://github.com/ugurakcora/React-ECommerce',
    description: 'React Js E-Commerce App with Redux',
    fork: false,
    stargazers_count: 0,
    watchers_count: 1,
    language: 'JavaScript',
  },
  {
    id: 4,
    name: 'React Weather App',
    html_url: 'https://github.com/ugurakcora/React-WeatherApp',
    description: 'React Js Weather App with API',
    fork: false,
    stargazers_count: 0,
    watchers_count: 1,
    language: 'JavaScript',
  },
  {
    id: 5,
    name: 'NextJS Rent A Car',
    html_url: 'https://github.com/ugurakcora/Next-Rent-A-Car',
    description: 'Next Js Rent A Car Template',
    fork: false,
    stargazers_count: 0,
    watchers_count: 1,
    language: 'JavaScript',
  },
  {
    id: 6,
    name: 'NextJS Pokemon',
    html_url: 'https://github.com/ugurakcora/Nextjs-Pokemon',
    description: 'Next Js Pokemon App with API',
    fork: false,
    stargazers_count: 0,
    watchers_count: 1,
    language: 'JavaScript',
  }

] as const;
