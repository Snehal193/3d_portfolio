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
    education,
    captchaThumb,
    payCardThumb
  } from "../assets";
  import img1 from "../assets/carousel/img1.png";
  import img2 from "../assets/carousel/img2.png";
  import img3 from "../assets/carousel/img3.png";
  import img4 from "../assets/carousel/img4.png";
  import img5 from "../assets/carousel/img5.png";
  import img6 from "../assets/carousel/img6.png";

  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "craft",
      title: "Craft",
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
      date: "Jan 2023 - Jan 2025",
      points: [
        "Led frontend architecture, R&D, and module delivery using Angular, PrimeNG, and Tailwind CSS.",
        "Built core modules with CRUD workflows, customizable tables, and advanced filters.",
        "Implemented role-based access control (RBAC) and configurable admin settings for secure, firm-specific customization."
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
    // {
    //   name: "Kanban Board",
    //   description:
    //     "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    //   tags: [
    //     {
    //       name: "react",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "firebase",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "tailwind",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: kanbanBoard,
    //   source_code_link: "https://github.com/Snehal193/3d_portfolio",
    // },
    {
      name: "Slider Captcha",
      description:
        "A fun and interactive slider CAPTCHA puzzle using a cat image. Users must rotate two circular halves to align the image by dragging a slider. Built with React and Tailwind CSS.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "slider-captcha",
          color: "green-text-gradient",
        },
      ],
      image: captchaThumb,
      source_code_link: "/craft/captcha",
    },
      {
      name: "Kinetic Carousel",
      description:
        "A fun and interactive slider CAPTCHA puzzle using a cat image. Users must rotate two circular halves to align the image by dragging a slider. Built with React and Tailwind CSS.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        }
      ],
      image: captchaThumb,
      source_code_link: "/craft/kinetic-carousel",
    }
  ];

  const carouselImages = [
    { id: 1, src: img1, alt: "Carousel Image 1" },
    { id: 2, src: img2, alt: "Carousel Image 2" },
    { id: 3, src: img3, alt: "Carousel Image 3" },
    { id: 4, src: img4, alt: "Carousel Image 4" },
    { id: 5, src: img5, alt: "Carousel Image 5" },
    { id: 6, src: img6, alt: "Carousel Image 6" },
  ];

  export { services, technologies, experiences, projects, carouselImages };