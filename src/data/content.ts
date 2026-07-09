export const profile = {
  name: "Divyank Sameer Shah",
  tagline: "Software Engineer — Full-Stack & Cloud Systems",
  location: "Passau, Germany",
  bio: "Master's student in Computer Science at the University of Passau with 4.5+ years of professional experience building scalable, end-to-end backend systems and microservices in cloud environments. Strong in Java, Node.js, React, and TypeScript, with solid experience in service-oriented architecture and system design. Delivered enterprise SaaS projects across mobile banking, retirement, and insurance platforms.",
  email: "divyankshah97@gmail.com",
  github: "https://github.com/divyankshah",
  linkedin: "https://linkedin.com/in/divyankshah21",
};

export const education = [
  {
    degree: "M.Sc. Computer Science",
    school: "University of Passau",
    period: "Sep 2024 – Present",
  },
  {
    degree: "B.E. Computer Science",
    school: "Savitribai Phule Pune University",
    period: "Graduated May 2020",
  },
];

export const experience = [
  {
    role: "Software Engineer II (Full Stack Development)",
    company: "TIAA, Pune, India",
    period: "Jul 2023 – Aug 2024",
    points: [
      "Led the Java, Spring Boot, and Hibernate backend redesign of the mobile home page across all TIAA products (Banking, Mutual Funds, Retirement, Brokerage) for 3M+ customers.",
      "Migrated a monolith to microservices and deployed to AWS ECS and Lambda with Redis caching, improving average mobile login time from 5s to 3s.",
      "Built event-driven services with Apache Kafka to process account events asynchronously, decoupling microservices and improving throughput under load.",
      "Designed a server-driven architecture in Spring Boot to move layout logic to the backend, reducing yearly mobile app releases by about 50%.",
    ],
    stack: ["Java", "Spring Boot", "AWS ECS", "AWS Lambda", "Docker", "Apache Kafka", "Redis", "Microservices", "REST APIs", "Hibernate"],
  },
  {
    role: "Software Engineer I (Full Stack Development)",
    company: "TIAA, Pune, India",
    period: "Jul 2020 – Jun 2023",
    points: [
      "Developed end-to-end full-stack banking solutions with Java, Spring Boot, and React across mobile and web, working with cross-functional teams to ship in-app messaging, communications, and notifications.",
      "Built secure beneficiary microservices on PostgreSQL and automated death-claim workflows, raising operational efficiency by up to 86%.",
      "Developed a loan-repayment chatbot workflow, letting users check balances and authorize payments in chat.",
      "Built a KYC liveness verification app in React and TypeScript from scratch, delivering real-time identity checks in under 100ms.",
    ],
    stack: ["Java", "Spring Boot", "React", "TypeScript", "PostgreSQL", "REST APIs", "Microservices", "JUnit", "Mockito"],
  },
  {
    role: "Research Intern",
    company: "Persistent Systems, Pune, India",
    period: "Dec 2019 – Jul 2020",
    points: [
      "Researched explainable AI for abusive-content detection, building NLP text classifiers and a full-stack web app with a Node.js backend and React frontend for real-time content analysis.",
      "Co-authored a research paper published in Springer's Advances in Intelligent Systems and Computing.",
    ],
    stack: ["Node.js", "React", "Python", "NLP", "Machine Learning", "Explainable AI", "REST APIs", "Postman"],
  },
];

export const skills = {
  Programming: ["Java", "TypeScript", "JavaScript", "Python", "SQL"],
  "Frameworks & Tools": ["Spring Boot", "React", "Node.js", "Docker", "Apache Kafka", "Git", "Maven", "Hibernate"],
  "Cloud & Data": ["AWS (ECS, Lambda, EC2, S3)", "PostgreSQL", "Redis", "CI/CD"],
  Architecture: ["Microservices", "RESTful API Design", "Event-Driven Design"],
  Languages: ["English (C1)", "German (A2)"],
};

type Project = {
  title: string;
  description: string;
  tags: string[];
  image?: { src: string; alt: string };
  mockup?: "event" | "kyc" | "ai";
};

export const projects: Project[] = [
  {
    title: "Mobile Home Page Redesign",
    description: "Led the backend redesign of TIAA's mobile home page across Banking, Mutual Funds, Retirement, and Brokerage, serving 3M+ customers.",
    tags: ["Java", "Spring Boot", "Hibernate"],
    image: { src: "/images/projects/tiaa-home.jpg", alt: "TIAA mobile app home page showing portfolio balance and asset allocation" },
  },
  {
    title: "Monolith → Microservices Migration",
    description: "Migrated a legacy monolith to microservices on AWS ECS and Lambda with Redis caching, cutting average mobile login time from 5s to 3s.",
    tags: ["AWS ECS", "AWS Lambda", "Redis", "Microservices"],
    image: { src: "/images/projects/tiaa-retirement-summary.jpg", alt: "TIAA retirement summary screen with balance history chart" },
  },
  {
    title: "Server-Driven UI Architecture",
    description: "Designed a server-driven layout architecture in Spring Boot, moving UI logic to the backend and cutting yearly mobile app releases by ~50%.",
    tags: ["Spring Boot", "Java", "System Design"],
    image: { src: "/images/projects/tiaa-investment-mix.jpg", alt: "TIAA change future investments screen with server-driven multi-step allocation flow" },
  },
  {
    title: "Event-Driven Account Processing",
    description: "Built Kafka-based event-driven services to process account events asynchronously, decoupling microservices and improving throughput under load.",
    tags: ["Apache Kafka", "Spring Boot", "Event-Driven Design"],
    mockup: "event" as const,
  },
  {
    title: "KYC Liveness Verification App",
    description: "Built a real-time identity verification app from scratch in React and TypeScript, delivering liveness checks in under 100ms.",
    tags: ["React", "TypeScript", "Computer Vision"],
    mockup: "kyc" as const,
  },
  {
    title: "Explainable AI for Content Moderation",
    description: "Researched explainable AI for abusive-content detection with NLP classifiers and a full-stack analysis app; co-authored a paper published in Springer.",
    tags: ["Python", "NLP", "Node.js", "React"],
    mockup: "ai" as const,
  },
];

export const hobbies = {
  yoga: {
    title: "Yoga, Meditation & Breathwork",
    description:
      "I'm a certified yoga teacher (RYS 200-hour, Raj Yoga School) and currently teach yoga, meditation, and breathwork at the University of Passau. Over the years I've taught more than 1,000 people — students, corporates, and community groups — across India and Germany, including at the Consulate General of India's International Day of Yoga celebration in Munich.",
    images: [
      { src: "/images/hobbies/yoga-munich-event.jpg", alt: "Leading a yoga session at the Consulate General of India's International Day of Yoga event in Munich" },
      { src: "/images/hobbies/yoga-passau-class.jpg", alt: "Guiding a meditation session at the University of Passau" },
      { src: "/images/hobbies/yoga-mumbai-class.jpg", alt: "Teaching a large group meditation class" },
      { src: "/images/hobbies/yoga-solo-meditation.jpg", alt: "Meditating in the countryside" },
      { src: "/images/hobbies/yoga-stretch-session.jpg", alt: "Leading a stretching and self-healing session" },
    ],
  },
  other: ["Cooking", "Travelling"],
};
