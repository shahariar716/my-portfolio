export const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "research", label: "Research" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;

export const portfolioData = {
  personal: {
    name: "Shahariar Ahmmed (Tanif)",
    shortName: "Tanif",
    title: "Software Engineer | UI/UX Designer",
    tagline: "Building modern digital experiences with code and design.",
    profileImage: "/profile-placeholder.svg",
    availability:
      "Open to software engineering, product design, and frontend opportunities",
  },
  about: {
    intro:
      "Innovative CSE graduate with expertise in software development, UI/UX design, and digital content creation. I build interfaces that feel polished, useful, and technically reliable.",
    highlights: [
      {
        title: "Creative + Technical Blend",
        description:
          "Combines engineering fundamentals with interaction design, visual systems, and product thinking.",
      },
      {
        title: "Team Collaboration",
        description:
          "Comfortable working with designers, developers, and stakeholders to turn ideas into usable products.",
      },
      {
        title: "Execution Mindset",
        description:
          "Focused on responsive design, clean implementation, accessibility, and scalable frontend architecture.",
      },
    ],
  },
  skills: [
    {
      category: "Development",
      items: [
        "TypeScript",
        "Next.js",
        "React",
        "Tailwind CSS",
        "Responsive Design",
        "API-ready architecture",
      ],
    },
    {
      category: "UI/UX Design",
      items: [
        "Interaction Design",
        "Visual Design",
        "Prototyping",
        "User Research",
        "Design Systems",
        "Wireframing",
      ],
    },
    {
      category: "Tools",
      items: [
        "Figma",
        "Git",
        "GitHub",
        "Framer Motion",
        "Adobe XD",
        "Content Creation",
      ],
    },
  ],
  experience: [
    {
      title: "Internship – UI/UX Designer",
      company: "Eutropia IT Solution",
      date: "2024",
      achievements: [
        "Designed user flows and interface concepts for responsive web experiences.",
        "Created prototypes and visual assets to communicate product ideas clearly.",
        "Collaborated with developers to keep design handoff practical and implementation-ready.",
      ],
    },
    {
      title: "Campus Brand Ambassador",
      company: "Sphere Study Abroad",
      date: "2023",
      achievements: [
        "Represented the brand across campus and helped communicate campaign goals.",
        "Supported student engagement through outreach, content, and event promotion.",
        "Built communication and stakeholder-management skills in a fast-moving environment.",
      ],
    },
  ],
  projects: [
    {
      title: "Obstacle Avoiding Robot Car",
      description:
        "Autonomous robot car that detects nearby obstacles and adjusts its path in real time.",
      longDescription:
        "A robotics project focused on sensor-driven movement, practical embedded logic, and reliable obstacle avoidance behavior. The project demonstrates problem solving across hardware, software, and testing constraints.",
      image: "/project-robot.svg",
      tech: ["Arduino", "Ultrasonic Sensor", "C++", "Motor Driver"],
      outcome:
        "Built a working prototype that can sense, decide, and move around obstacles without manual control.",
    },
    {
      title: "Hand Following Robot Car",
      description:
        "Gesture-inspired robot car that follows hand movement for intuitive physical interaction.",
      longDescription:
        "An interactive robotics concept exploring human-machine interaction through tracking, movement response, and embedded control. The goal was to make a robot feel more natural and approachable to control.",
      image: "/project-robot.svg",
      tech: ["Sensor Tracking", "Arduino", "C++", "Interaction Design"],
      outcome:
        "Created a responsive interaction model that connects design thinking with engineering execution.",
    },
  ],
  research: {
    title:
      "Machine Learning Based Real-Time IoT Attack Detection with Explainable AI",
    summary:
      "A research-focused security project exploring real-time IoT attack detection and interpretable machine learning outputs for clearer decision making.",
    tags: [
      "Machine Learning",
      "IoT Security",
      "Explainable AI",
      "Real-time Detection",
    ],
  },
  education: [
    {
      degree: "BSc in Computer Science & Engineering",
      institution: "University of Asia Pacific",
      status: "Completed",
    },
    {
      degree: "Executive MBA",
      institution: "University of Dhaka",
      status: "Running",
    },
  ],
  contact: {
    email: "tanif.dev@example.com",
    linkedin: "https://www.linkedin.com/in/ta-n-if-shahariar71/",
    github: "http://github.com/shahariar716",
  },
  copy: {
    navBrandInitial: "T",
    heroPrimaryCta: "View Projects",
    heroSecondaryCta: "Contact Me",
    about: {
      eyebrow: "About",
      title: "A design-minded engineer who builds polished digital products.",
    },
    skills: {
      eyebrow: "Skills",
      title: "Development, design, and product execution in one workflow.",
    },
    experience: {
      eyebrow: "Experience",
      title:
        "Practical experience across product design, outreach, and teamwork.",
    },
    projects: {
      eyebrow: "Projects",
      title: "Interactive builds that connect code, design, and robotics.",
      cardHint: "Click for details",
    },
    research: {
      eyebrow: "Research",
      title: "Academic exploration with real-world security impact.",
    },
    education: {
      eyebrow: "Education",
      title: "Computer science foundation with business leadership growth.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let’s build something useful, beautiful, and scalable.",
      description:
        "This frontend-only form is ready to connect to any backend, server action, Sanity/Strapi workflow, or email API later.",
      submitLabel: "Send Message",
      onlineTitle: "Find me online",
    },
    footer: "All rights reserved.",
  },
};

export type SectionId = (typeof sections)[number]["id"];
