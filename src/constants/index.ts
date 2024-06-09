
import project1 from "../assets/projects/hatchways.png";
import project2 from "../assets/projects/project-2-code.png";
import project3 from "../assets/projects/canvashare.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";

export const HERO_CONTENT = `I am a passionate Software Engineer with experience for technology companies in the construction software, customer lifecycle management and security solutions sectors. Expertise in agile software development, web applications, APIs, backend development, quality assurance and test automation. Improves APIs reducing p95 transaction duration by 50% for all clients, constructs extendable tools improving governance capabilities, and designs and develops CV platforms that achieve ARR of $2M.`;

export const ABOUT_TEXT = `I’m Allen. I have 3 years of Software engineering experience - working in various teams. I worked on a Platform team at Impel for 2 years - worked on image data platform, computational infrastructure - like a platform to address the core challenges of storing and searching media assets at scale, for other engineering teams. Then on the Performance Tooling team at Procore for a little over a year. Worked on a data platform for ingesting, filtering, visualizing operational data gathered from various o11y platforms to engineering teams. Helping team create and analyze performance dashboards in New Relic - finding pain points services, API endpoints with high transaction durations, defining their p90, p95, p99.`;

export const EXPERIENCES = [
  {
    year: "2/2023 - present",
    role: "Software Engineer",
    company: "Procore",
    description: [
      "Worked on API improvement initiative, to analyze and surface RUM metrics, to all engineering teams. Reduced transaction duration of all clients by 50% and enterprise clients by 32%.", 
      "Created data collectors to facilitate operational data, from New Relic and Sumo Logic, to build scorecards.",
      "Constructed an extendable Python CLI tool for synthetic monitoring adoption, improving governance capabilities.",
      "Developed a run-book for Rigor agent private location deployment, ensuring seamless cross team accessibility."
    ],
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "3/2021 - 1/2023",
    role: "Software Engineer",
    company: "Impel",
    description: [
      "Designed, developed, tested, and deployed Spin Builder, a platform that employs Computer Vision (CV) to ingest, identify, and sort millions of images daily, to build 360° widgets. Achieved $2M in ARR.",
      "Designed and developed an event driven system to process inbound files to verify existing vehicles and customers.",
      "Developed a service that stored and searched metadata, of media assets at scale, with AWS services and Elasticsearch.",
      "Built backend web and internal applications using Python, Flask, AWS services, JavaScript, Jquery, and Elasticsearch.",
      "Participated in all aspects of agile software development including design, implementation, testing, and deployment.",
      "Collaborated with engineering, product management, and data science teams, to ensure product delivery.",
      "Re-architected core services that modeled company business entities and relationships"
    ],
    technologies: ["Python", "Flask", "React.js", "mySQL"],
  },
  {
    year: "6/2018 - 9/2020",
    role: "Software Test Engineer",
    company: "Nagrastar",
    description: [
      "Developed and designed QA test cases and procedures for automated software maintenance.",
      "Automated tests for web applications using Selenium with JavaScript.",
      "Transitioned to back-end/infrastructure team working with Java, Spring Boot, and JPA."
    ],
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
];

export const PROJECTS = [
  {
    title: "Social Media Voting Website, Hatchways Co-op Program",
    image: project1,
    link: "www.github.com/TheAllen/team-pumpkin",
    description:
      "Developed a web app that allowed users to create polls and friend lists, vote, chat live with friends, and view users’ profiles. Implemented React components, DB schema, and API routes for users, friend lists, and user profile. Designed and Implemented Express authentication using JWT and Bcrypt.",
    technologies: ["JavaScript", "React", "Node.js", "Express", "MongoDB", "Mongoose", "Cloudinary", "Socket.io"],
  },
  {
    title: "Autumn, AI Tool Builder",
    image: project2,
    link: "https://github.com/TheAllen/autumn",
    description:
      "Developed a AI tool to build projects based on the prompt received by user. Agents are created to split and prioritize areas of the project. Once the initial code has been generated, the agent will test and make improvements until the user is satisfied with the generated code.",
    technologies: ["Rust", "GPT-4", "Tokio", "Actix Web"],
  },
  {
    title: "Canvashare, A collaborative visual workspace",
    image: project3,
    link: "https://github.com/TheAllen/Canvashare",
    description:
      "A application designed for a variety of creative and professional applications, including drawing, diagramming, and conducting mock interviews. It leverages modern web technologies to provide real-time collaboration capabilities, making it an ideal platform for teams and individuals looking to engage in creative activities online.",
    technologies: ["TypeScript", "Next.Js", "Rust", "actix-web", "actix-web-actors", "WebSockets"],
  },
  {
    title: "Skyscraper 3D Visualization",
    image: project4,
    link: "https://github.com/TheAllen/Skyscraper3DVisualization",
    description:
      "A full-stack 3D visualization app. Allow users to write about their favorite things about the city and provide popular city attractions. Using Leaflet and ArcGIS to make a 2D map and 3D visualization. Java Spring Boot for RESTful web service.",
    technologies: ["Java", "JavaScript", "Spring Boot", "React", "ArcGIS", "Leaflet"],
  },
  {
    title: "3D Model Loader",
    image: project5,
    link: "https://github.com/TheAllen/3DModelLoader",
    description:
      `
      A OpenGL project to load OBJ models into a 3D Space we can use a 3D camera to navigate around and interact with the models.
      Implemented a quaternion rotation camera to avoid gimbel lock.
      `,
    technologies: ["C++", "GLM", "GLFW3", "GLEW"],
  },
];

export const CONTACT = {
  email: "liangli0408@gmail.com",
};