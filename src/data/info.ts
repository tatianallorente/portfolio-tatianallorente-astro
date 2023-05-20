export const info = {
  baseUrl: "http://tatianallorente.es/",
  name: "Tatiana Llorente",
  jobDescription: "Frontend Developer",
  about: `Tengo más de 4 años de experiencia en desarrollo web. He trabajado con lenguajes tanto de Front-End como de Back-End, aunque tengo preferencia por el desarrollo de Front-End. 
  He participado en la creación de aplicaciones web desde 0, contribuyendo tanto en el desarrollo como en el diseño de la UI. 
  Los últimos años he trabajado como Frontend Developer con React, Redux, JavaScript ES6 y Sass (SCSS). 
  Anteriormente, estuve trabajando como Fullstack developer con Javascript, jQuery, PHP y MySQL. 
  Además tengo experiencia como maquetadora de páginas web con Wordpress (también he desarrollado dos plugins), gestión de tiendas online con Prestashop, así como conocimientos básicos de SEO y Adobe Photoshop.
  Intento estar al día de las nuevas tecnologías, por lo que ahora estoy aprendiendo Typescript y Next.js y estoy aplicando estos conocimientos en pequeños proyectos personales.  
  `,

  experience: [
    {
      name: "Frontend Developer Junior (2 años)",
      company: "Alyze",
      location: "Madrid (remoto)",
      startDate: "2021",
      endDate: "2023",
      companyTags: ["Empresa de producto", "SaaS", "B2B", "B2C"],
      description: [
        [
          "Desarrollo del frontend de la web app Alyze con React, tanto las funcionalidades como la interfaz (a partir de los diseños en Figma). Comunicación con el backend mediante llamadas a una API REST.",
          "Desarrollo de una herramienta interna para la gestión de los usuarios, hacer seguimiento de uso mediante gráficas, mostrar el tracking de eventos, y dar soporte a los clientes. Diseño y desarrollo desde 0 por mí (React hooks y framework Material-UI).",
          "Control de versiones con Git. Uso de metodologías ágiles.",
          "Tecnologías usadas: React.js, Redux, JavaScript ES6, HTML5, CSS3, SASS(SCSS).",
        ]
      ],
    },

    {
      name: "Fullstack Developer Junior",
      company: "Ártica Soluciones Tecnológicas",
      location: "Madrid",
      startDate: "2016",
      endDate: "2020",
      companyTags: ["Empresa de producto", "On premise", "B2B"],
      description: [
        "En el departamento de Desarrollo (2 años y 6 meses):",
        [
          "Corrección de bugs e implementación de nuevas funcionalidades de los principales productos de la empresa (herramienta de monitorización Pandora FMS y herramienta de ticketing Integria IMS).",
          "Refactorización y actualización de la interfaz del producto, con técnicas modernas como Flexbox y Grid Layout.",
          "Desarrollo, diseño y maquetación de la interfaz de una aplicación web para monitorizar el estado de los dispositivos de red a través del protocolo SNMP.",
          "Tecnologías usadas: HTML5, CSS3, Javascript, JQuery, PHP y MySQL. Manejo de Git.",
        ],
        "En el departamento de Marketing y Comunicación (1 año y 7 meses):",
        [
          "Renovación de la apariencia de todas las webs y blogs (Wordpress), las wikis y los foros de la empresa. Cambio de plantillas, child-themes con CSS personalizado, etc., a partir de los bocetos del equipo de diseño.",
          "Desarrollo y publicación de 2 plugins de Wordpress (PHP y JQuery).",
          "Maquetación y envío de newsletters.",
          "Grabación y edición de video tutoriales sobre los productos software de la empresa.",
        ],
      ],
    },

    {
      name: "Página web corporativa",
      company: "Benigno García & Cuesta",
      location: "Palencia",
      startDate: "2016",
      endDate: "2016",
      companyTags: [],
      description: [
        "Renovación completa de página web corporativa utilizando el CMS Wordpress, conservando la imagen corporativa anterior, pero adaptándola a las nuevas tendencias de diseño web y mejorando la navegación y visibilidad de los contenidos.",
      ],
    },

    {
      name: "Webmaster de tienda online",
      company: "Benigno García & Cuesta (Jornada parcial)",
      location: "Palencia (Remoto)",
      startDate: "2012",
      endDate: "2021",
      companyTags: [],
      description: [
        "Mantenimiento de tienda online (Prestashop), gestión de productos, cambios de diseño, maquetación y envío de newsletters, gestión de RRSS y blog, diseño y elaboración de banners promocionales (Adobe Photoshop), marketing online, Google Analytics, etc.",
      ],
    },
  ],

  technologies: [
    "React",
    "JavaScript",
    "Redux",
    "SASS",
    "HTML",
    "CSS",
    "TypeScript",
    "Next.js",
    "Git",
    "Docker",
    "Material UI",
    "Tailwind",
    "MongoDB",
    "Node.js",
    "Express",
  ],

  education: [
    {
      name: "Técnico Superior en Desarrollo de Aplicaciones Web. (DAW)",
      company: "CIFP Camino de la Miranda",
      location: "Palencia",
      startDate: "2012",
      endDate: "2014",
      description: [
        "FP de Grado Superior",
      ],
    },
    {
      name: "Técnico Superior en Administración de Sistemas Informáticos en Red. (ASIR)",
      company: "Centro Don Bosco",
      location: "Palencia",
      startDate: "2010",
      endDate: "2012",
      description: [
        "FP de Grado Superior",
      ],
    },
  ],

  certificates: [
    {
      name: "React - Hooks Redux Context MERN.",
      company: "Udemy",
      location: "Online",
      startDate: "2021",
      endDate: "2021",
      description: ["Curso de 43 horas"],
    },
    {
      name: "TypeScript, tu guía completa.",
      company: "Udemy",
      location: "Online",
      startDate: "2020",
      endDate: "2020",
      description: ["Curso de 8.5 horas"],
    },
    {
      name: "Advanced CSS and SASS: Flexbox, Grid, Animations.",
      company: "Udemy",
      location: "Online",
      startDate: "2020",
      endDate: "2020",
      description: ["Curso de 28 horas"],
    },
    {
      name: "Social Media Marketing y Redes Sociales.",
      company: "Foremcyl",
      location: "Palencia",
      startDate: "2015",
      endDate: "2015",
      description: ["Curso presencial de 67 horas"],
    },
  ],

  socialMedia: {
    github: "https://github.com/tatianallorente",
    email: "",
    linkedin: "https://www.linkedin.com/in/tatianallorente/",
  },

  projects: [
    {
      title: "Movies App",
      isFeatured: true,
      thumbnail: "/assets/images/projects/moviesapp-portada.png",
      githubUrl: "https://github.com/tatianallorente/MoviesApp-React",
      liveUrl: "https://tatianallorente-moviesapp-react.netlify.app/",
    },
    {
      title: "Cats App",
      isFeatured: true,
      thumbnail: "/assets/images/projects/catsapp-portada.png",
      githubUrl: "https://github.com/tatianallorente/CatsApp-React",
      liveUrl: "https://tatianallorente.github.io/CatsApp-React/",
    },
    {
      title: "Tic tac toe",
      isFeatured: true,
      thumbnail: "/assets/images/projects/tictactoe-light-portada.png",
      githubUrl: "https://github.com/tatianallorente/tic-tac-toe",
      liveUrl: "https://tatianallorente-tictactoe.netlify.app/",
    },
    {
      title: "Movies Search",
      isFeatured: true,
      thumbnail: "/assets/images/projects/moviessearch-portada.png",
      githubUrl: "https://github.com/tatianallorente/Movies-Search-React",
      liveUrl: "https://tatianallorente-moviessearch.netlify.app/",
    },
    {
      title: "Natours",
      isFeatured: true,
      thumbnail: "/assets/images/projects/natours-portada.png",
      githubUrl: "https://github.com/tatianallorente/SASS-Natours",
      liveUrl: "https://tatianallorente.github.io/SASS-Natours/",
    },
    {
      title: "Calendar MERN",
      isFeatured: true,
      thumbnail: "/assets/images/projects/calendar-mern-portada.png",
      githubUrl: "https://github.com/tatianallorente/Calendar-Frontend-MERN",
      liveUrl: "https://mern-calendar-tatiana.herokuapp.com/",
    },
    {
      title: "Control panel",
      isFeatured: false,
      thumbnail: "/assets/images/projects/control-panel-portada.png",
      githubUrl: "",
      liveUrl: "",
    },
    {
      title: "Web corporativa BGC",
      isFeatured: false,
      thumbnail: "/assets/images/projects/bgc-portada.png",
      githubUrl: "",
      liveUrl: "",
    },
    {
      title: "Presupuesto",
      isFeatured: false,
      thumbnail: "/assets/images/projects/presupuesto-portada.png",
      githubUrl: "https://github.com/tatianallorente/React-Presupuesto",
      liveUrl: "https://tatianallorente.github.io/React-Presupuesto/",
    },
    {
      title: "Notas",
      isFeatured: false,
      thumbnail: "/assets/images/projects/notas-portada.png",
      githubUrl: "https://github.com/tatianallorente/React-Notas",
      liveUrl: "https://tatianallorente.github.io/React-Notas/",
    },
  ],
};
