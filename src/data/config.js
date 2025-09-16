const profile = {
  name: "Julius Ball",
  title: "Full Stack Developer & Student",
  tagline: "I build things for the web.",
  location: "Vienna, Austria",
  bio: `I'm a passionate software developer currently studying Computer Science at TU Vienna. I love creating digital experiences that solve real-world problems and have a keen interest in both frontend and backend technologies.

  My journey in programming began during high school, and since then I've been exploring various technologies from web development to mobile apps and cloud computing.

  When I'm not coding, you can find me contributing to open source projects, learning about emerging technologies, or enjoying the beautiful Austrian countryside.`,

  contact: {
    email: "julius@example.com",
    linkedin: "https://www.linkedin.com/in/julius-dev/",
    github: "https://github.com/julius-dev",
    website: "https://julius-portfolio.dev"
  },

  availability: {
    status: "Student",
    openToOpportunities: true,
    preferredRoles: ["Full Stack Developer", "Frontend Developer", "Software Engineering Intern"]
  }
};

const experience = {
  jobs: [
    {
      id: "techstart",
      title: "Frontend Developer Intern",
      company: "TechStart Solutions",
      companyUrl: "https://techstart-solutions.at",
      location: "Vienna, Austria",
      range: "Jun 2024 - Aug 2024",
      description: [
        "Developed responsive web components using React and TypeScript",
        "Collaborated with design team to implement pixel-perfect UI designs",
        "Optimized application performance resulting in 40% faster load times",
        "Participated in agile development processes and daily standups"
      ],
      technologies: ["React", "TypeScript", "CSS3", "Figma", "Git", "Jest"]
    },
    {
      id: "freelance",
      title: "Freelance Web Developer",
      company: "Self-Employed",
      companyUrl: "",
      location: "Vienna, Austria",
      range: "2023 - Present",
      description: [
        "Built custom websites for local small businesses",
        "Implemented e-commerce solutions using modern web technologies",
        "Provided ongoing maintenance and technical support",
        "Managed client relationships and project timelines"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "WordPress", "PHP", "MySQL"]
    }
  ],

  education: [
    {
      id: "tu-vienna",
      school: "Technical University of Vienna",
      degree: "Bachelor of Science in Computer Science",
      location: "Vienna, Austria",
      range: "2022 - 2026",
      description: [
        "Focusing on software engineering and web technologies",
        "Relevant coursework in algorithms, data structures, and database systems",
        "Active member of the Computer Science Student Association",
        "Current GPA: 3.8/4.0"
      ],
      relevantCourses: [
        "Advanced Web Development",
        "Software Engineering Principles",
        "Database Design",
        "Computer Networks",
        "Human-Computer Interaction"
      ]
    },
    {
      id: "gymnasium",
      school: "BRG Wien Gymnasium",
      degree: "Matura (Austrian High School Diploma)",
      location: "Vienna, Austria",
      range: "2018 - 2022",
      description: [
        "Graduated with honors",
        "Specialized in Mathematics and Computer Science",
        "Led the school's programming club for 2 years"
      ],
      relevantCourses: [
        "Advanced Mathematics",
        "Computer Science Fundamentals",
        "Physics",
        "English"
      ]
    }
  ]
};

const skills = {
  categories: [
    {
      name: "Programming Languages",
      skills: [
        { name: "JavaScript", level: 4 },
        { name: "PHP", level: 4 },
        { name: "HTML/CSS", level: 5 },
        { name: "C/C++", level: 3 },
        { name: "SQL", level: 4 },
        { name: "Python", level: 3 } // Add if you know Python
      ]
    },
    {
      name: "Frontend Technologies",
      skills: [
        { name: "React", level: 3 }, // Add if you know React
        { name: "Vue.js", level: 2 }, // Add if you know Vue
        { name: "CSS/SASS/LESS", level: 5 },
        { name: "Bootstrap", level: 4 },
        { name: "Tailwind CSS", level: 3 },
        { name: "Responsive Design", level: 5 }
      ]
    },
    {
      name: "Backend & Database",
      skills: [
        { name: "Node.js", level: 3 }, // Add if you know Node
        { name: "PHP/Laravel", level: 4 },
        { name: "MySQL", level: 4 },
        { name: "Google Apps Script", level: 5 },
        { name: "REST APIs", level: 4 }
      ]
    },
    {
      name: "Tools & DevOps",
      skills: [
        { name: "Git", level: 4 },
        { name: "Linux", level: 3 },
        { name: "Docker", level: 3 },
        { name: "VS Code", level: 5 },
        { name: "Adobe XD", level: 4 },
        { name: "Figma", level: 3 } // Add if you use Figma
      ]
    },
    {
      name: "Specialized Skills",
      skills: [
        { name: "Cybersecurity", level: 3 },
        { name: "Network Administration", level: 4 },
        { name: "Arduino/IoT", level: 4 },
        { name: "Game Development (Unity)", level: 2 },
        { name: "GLSL Shaders", level: 3 }
      ]
    }
  ],

  skillLevels: {
    1: "Beginner",
    2: "Basic",
    3: "Intermediate",
    4: "Advanced",
    5: "Expert"
  }
};

const projects = {
  featured: [
    {
      id: "ecommerce-platform",
      title: "Modern E-Commerce Platform",
      description: "A full-stack e-commerce platform built with React and Node.js, featuring real-time inventory management, payment processing, and an admin dashboard for store management.",
      longDescription: `This e-commerce platform represents a comprehensive full-stack development project that demonstrates modern web development practices and real-world business application.

Built using React for the frontend and Node.js with Express for the backend, the platform includes all essential e-commerce features: product catalog browsing, shopping cart functionality, secure user authentication, and integrated payment processing through Stripe.

The admin dashboard provides store owners with powerful tools to manage inventory, process orders, analyze sales data, and handle customer support. Real-time updates ensure that inventory levels are always accurate across all user sessions.

Key technical challenges included implementing secure payment processing, optimizing database queries for fast product searches, and creating a responsive design that works seamlessly across desktop and mobile devices.`,
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API", "JWT", "Tailwind CSS"],
      liveUrl: "https://shop-demo.julius-dev.com",
      githubUrl: "https://github.com/julius-dev/ecommerce-platform",
      featured: true,
      year: "2024",
      status: "completed",
      highlights: [
        "Full-stack MERN application",
        "Integrated payment processing with Stripe",
        "Real-time inventory management",
        "Responsive mobile-first design",
        "Comprehensive admin dashboard"
      ]
    },
    {
      id: "task-manager",
      title: "Collaborative Task Management App",
      description: "A team collaboration tool with real-time updates, project tracking, and integrated communication features built using modern web technologies.",
      longDescription: `This task management application was designed to solve the coordination challenges faced by remote development teams.

The application features real-time collaboration capabilities powered by WebSocket connections, allowing team members to see updates instantly as they occur. Users can create projects, assign tasks, set deadlines, and track progress through an intuitive kanban-style interface.

Advanced features include time tracking, project analytics, file sharing, and integrated chat functionality. The application also supports role-based permissions, ensuring that sensitive project information remains secure while maintaining transparency for team coordination.

The frontend is built with Vue.js and uses a component-based architecture for maintainability, while the backend leverages Node.js and Socket.io for real-time functionality. Data persistence is handled through PostgreSQL with optimized queries for fast performance even with large datasets.`,
      technologies: ["Vue.js", "Node.js", "Socket.io", "PostgreSQL", "JWT", "Docker", "AWS"],
      liveUrl: "https://taskflow.julius-dev.com",
      githubUrl: "https://github.com/julius-dev/task-manager",
      featured: true,
      year: "2024",
      status: "completed",
      highlights: [
        "Real-time collaboration with WebSockets",
        "Kanban-style project management",
        "Role-based access control",
        "Integrated team communication",
        "Deployed on AWS with Docker"
      ]
    }
  ],

  other: [
    {
      id: "weather-app",
      title: "Weather Forecast PWA",
      description: "A progressive web app that provides detailed weather forecasts with offline capabilities and location-based services.",
      technologies: ["JavaScript", "Service Workers", "OpenWeather API", "Chart.js", "CSS Grid"],
      githubUrl: "https://github.com/julius-dev/weather-pwa",
      liveUrl: "https://weather.julius-dev.com",
      featured: false,
      year: "2023",
      status: "completed"
    },
    {
      id: "budget-tracker",
      title: "Personal Finance Tracker",
      description: "A React-based application for tracking personal expenses with data visualization and budget planning features.",
      technologies: ["React", "Chart.js", "Local Storage", "CSS Modules", "React Hooks"],
      githubUrl: "https://github.com/julius-dev/budget-tracker",
      liveUrl: "https://budget.julius-dev.com",
      featured: false,
      year: "2023",
      status: "completed"
    },
    {
      id: "recipe-finder",
      title: "AI Recipe Finder",
      description: "A smart recipe discovery app that suggests meals based on available ingredients using machine learning APIs.",
      technologies: ["React", "Python", "Flask", "Spoonacular API", "TensorFlow", "Material-UI"],
      githubUrl: "https://github.com/julius-dev/recipe-finder",
      liveUrl: "https://recipes.julius-dev.com",
      featured: false,
      year: "2024",
      status: "completed"
    },
    {
      id: "crypto-tracker",
      title: "Cryptocurrency Portfolio Tracker",
      description: "Real-time crypto portfolio management with price alerts, profit/loss calculations, and market trend analysis.",
      technologies: ["Vue.js", "Node.js", "WebSocket", "CoinGecko API", "Chart.js", "MongoDB"],
      githubUrl: "https://github.com/julius-dev/crypto-tracker",
      liveUrl: "https://crypto.julius-dev.com",
      featured: false,
      year: "2024",
      status: "completed"
    },
    {
      id: "markdown-editor",
      title: "Collaborative Markdown Editor",
      description: "A real-time collaborative markdown editor with live preview, syntax highlighting, and document sharing capabilities.",
      technologies: ["TypeScript", "Socket.io", "Monaco Editor", "Express", "SQLite"],
      githubUrl: "https://github.com/julius-dev/markdown-editor",
      liveUrl: "https://editor.julius-dev.com",
      featured: false,
      year: "2023",
      status: "completed"
    },
    {
      id: "fitness-tracker",
      title: "Fitness & Workout Tracker",
      description: "A comprehensive fitness tracking application with workout planning, progress monitoring, and social features.",
      technologies: ["React Native", "Expo", "Firebase", "Chart.js", "AsyncStorage"],
      githubUrl: "https://github.com/julius-dev/fitness-tracker",
      liveUrl: "", // Mobile app, no live URL
      featured: false,
      year: "2024",
      status: "completed"
    },
    {
      id: "url-shortener",
      title: "URL Shortener Service",
      description: "A fast and reliable URL shortening service with analytics, custom aliases, and QR code generation.",
      technologies: ["Go", "PostgreSQL", "Redis", "Docker", "Nginx", "Bootstrap"],
      githubUrl: "https://github.com/julius-dev/url-shortener",
      liveUrl: "https://short.julius-dev.com",
      featured: false,
      year: "2023",
      status: "completed"
    },
    {
      id: "code-snippet-manager",
      title: "Code Snippet Manager",
      description: "A developer tool for organizing and sharing code snippets with syntax highlighting and search functionality.",
      technologies: ["Svelte", "SvelteKit", "Prisma", "PostgreSQL", "Prism.js", "Tailwind CSS"],
      githubUrl: "https://github.com/julius-dev/snippet-manager",
      liveUrl: "https://snippets.julius-dev.com",
      featured: false,
      year: "2024",
      status: "in-progress"
    },
    {
      id: "quiz-app",
      title: "Interactive Quiz Platform",
      description: "A gamified learning platform with custom quiz creation, real-time multiplayer modes, and progress tracking.",
      technologies: ["Next.js", "Prisma", "MySQL", "Socket.io", "Tailwind CSS", "NextAuth"],
      githubUrl: "https://github.com/julius-dev/quiz-platform",
      liveUrl: "https://quiz.julius-dev.com",
      featured: false,
      year: "2023",
      status: "completed"
    },
    {
      id: "portfolio-website",
      title: "Personal Portfolio Website",
      description: "A modern, responsive portfolio website showcasing my projects and skills with smooth animations and clean design.",
      technologies: ["HTML5", "CSS3", "JavaScript", "GSAP", "Netlify"],
      githubUrl: "https://github.com/julius-dev/portfolio",
      liveUrl: "https://julius-portfolio.dev",
      featured: false,
      year: "2024",
      status: "completed"
    }
  ]
};

const certifications = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "March 2024",
    url: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
    description: "Foundational certification covering AWS cloud concepts, core services, security, architecture, pricing, and support."
  },
  {
    name: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "January 2024",
    url: "https://freecodecamp.org/certification/julius-dev/javascript-algorithms-and-data-structures",
    description: "Comprehensive course covering ES6, regular expressions, debugging, data structures, and algorithmic thinking."
  },
  {
    name: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "December 2023",
    url: "https://freecodecamp.org/certification/julius-dev/responsive-web-design",
    description: "Full certification in modern web design including HTML5, CSS3, flexbox, CSS Grid, and responsive design principles."
  }
];

const interests = [
  "Full-Stack Web Development",
  "Cloud Computing & DevOps",
  "Mobile App Development",
  "Open Source Contribution",
  "UI/UX Design",
  "Agile Development Methodologies",
  "Tech Community & Mentoring",
  "Sustainable Technology Solutions"
];

// Social links and contact preferences
const social = {
  github: "julius-dev",
  linkedin: "julius-dev",
  email: "julius@example.com",
  twitter: "julius_codes",
  website: "https://julius-portfolio.dev"
};