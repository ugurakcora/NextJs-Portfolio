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
      "As a React Developer at Next4Biz, I played a pivotal role in enhancing the CRM product by focusing on the profile page. Leveraging my expertise in React, I meticulously crafted the profile page, optimizing its design and functionality to ensure a seamless user experience. Collaborating closely with the team, I incorporated innovative features and improvements, meeting both client specifications and user expectations. This experience honed my skills in React development and expanded my understanding of creating user-centric solutions within a collaborative and dynamic work environment.",
    icon: React.createElement(FaReact),
    date: "2023",
  },
  {
    title: "Akinon",
    position: "Front-end Developer",
    location: "İstanbul",
    description:
      "During my tenure at Akinon, I excelled as a Frontend Developer, specializing in crafting the front-end of diverse e-commerce websites. My skill set encompassed Django, Jinja2, JavaScript, jQuery, Less, and Scss. I actively contributed to notable projects including Converse, Houseofsuperstep, Superstep, Gant, Occasion, and Kooples. Working in collaboration with a colleague, I co-developed the Gant project from the ground up. At Kooples, I not only contributed to enhancements but also coded the user-friendly returns section. In the case of Superstep, I integrated Masterpass and implemented various enhancements. Across all projects, I focused on both development and bug fixes, continually striving to elevate the user experience and functionality.",
    icon: React.createElement(CgWorkAlt),
    date: "2021",
  },
  {
    title: "Pixelplus",
    position: "Front-end Developer",
    location: "İstanbul",
    description: "During my tenure at PixelPlus, I thrived as a Frontend Developer, taking on the responsibility of solo development for web projects including Uzman Sosyal Güvenlik, Vellteks, Form Sünger, Boyser, and Boytrans. Notably, I built these websites from the ground up and seamlessly integrated CMS systems. In addition, I contributed to bug fixes and enhancements for AmericanExpress and Tüyap websites. One of my key approaches was adhering to a 'mobile-first' development methodology, ensuring optimal performance and user experience across devices. Leveraging technologies like Pug.js, JavaScript, jQuery, BEM (Block Element Modifier), and SCSS (Sass), I crafted responsive and visually appealing interfaces. This experience refined my ability to tackle challenges head-on and work effectively both independently and within a team. I'm driven by a passion for creating exceptional web solutions that resonate with users and drive business success.",
    icon: React.createElement(CgWorkAlt),
    date: "2020",
  },
  {
    title: "Niceye",
    position: "Front-end Developer",
    location: "İstanbul",
    description: "As a Frontend Developer at NicEye Group, I played a pivotal role in the coding and enhancement of pharmaceutical prospectus websites and corporate sites for two of the world's leading healthcare companies, Pfizer and MSD. Notable contributions include the development of websites for these major pharmaceutical firms, such as hoevoorkomjetbe, enbrelpfizer, romatolojiatlasi, sanslicarsamba, and msd, msdsizinle. I utilized a skill set encompassing Html, Css, Scss, Bootstrap4, JavaScript, and JQuery to create visually appealing and highly functional websites. My approach involved ensuring an optimal user experience and seamless functionality across various devices. This experience honed my ability to work in dynamic, results-oriented environments and further developed my passion for crafting impactful digital solutions.",
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
