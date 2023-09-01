import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import gantImg from "@/public/gant.png";

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
    location: "İstanbul",
    description:
      "I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Akinon",
    location: "İstanbul",
    description:
      "I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Pixelplus",
    location: "İstanbul",
    description:
      "I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Niceye",
    location: "İstanbul",
    description:
      "I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },

] as const;

export const projectsData = [
  {
    title: "Gant",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind"],
    imageUrl: gantImg,
  },
  {
    title: "Gant",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind"],
    imageUrl: gantImg,
  },
  {
    title: "Gant",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind"],
    imageUrl: gantImg,
  },
    {
    title: "Gant",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind"],
    imageUrl: gantImg,
  },
 
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Sass",
  "Tailwind",
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