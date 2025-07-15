import {
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    angularjs,
    redux,
    tailwind,
    git,
    shopify,
    kanbanBoard,
    threejs,
    firebase,
    materialUI,
    sass,
    education
  } from "../assets";

  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Projects",
    },
    // {
    //   id: "snippets",
    //   title: "Snippets",
    // },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  const services = [
    {
      title: "Front-End Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: backend,
    },
    {
      title: "Angular Developer",
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
      name: "Angular JS",
      icon: angularjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "firebase",
      icon: firebase,
    },
    {
      name: "materialUI",
      icon: materialUI,
    },
    {
      name: "sass",
      icon: sass,
    }
  ];

  const experiences = [
    {
      title: "Software Engineer",
      company_name: "Zelican Infotech Ltd.",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2023 - Jan 2024",
      points: [ //change
        "Engineered full-stack Kanban board with React DnD for drag-and-drop functionality and interactive board creation.",
        "Designed and deployed a responsive SPA with MUI featuring component-based architecture, custom hooks, and customizable theming.",
        "Executed scalable state management using Zustand and custom hooks, reducing boilerplate code by 50%, while integrating Firebase for real-time database, and user authentication."
      ],
    },
    {
        title : 'BE in Information Technology',
        company_name: "Datta Meghe College of Engineering, Navi mumbai.",
        icon: education,
        iconBg: "#383E56",
        date: "Jan 2019 - Jan 2023",
      }
  ];

  const projects = [
    {
      name: "Kanban Board",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: kanbanBoard,
      source_code_link: "https://github.com/Snehal193/3d_portfolio",
    }
  ];

  export { services, technologies, experiences, projects };