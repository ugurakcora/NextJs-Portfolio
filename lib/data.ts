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