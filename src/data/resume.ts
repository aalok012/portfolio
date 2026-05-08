import type { ResumeData } from '../types';

const resume: ResumeData = {
  name: { first: 'Alok Kumar', last: 'Thakur' },
  title: 'Software Engineer',
  tagline: 'Building scalable systems and intelligent apps',
  description:
    'Software Engineer & CS Student at Texas State University, crafting robust APIs, intelligent AI systems, and seamless digital experiences that scale.',

  contact: {
    email: 'mraalokthakur01@gmail.com',
    phone: '737-315-0905',
    location: 'San Marcos, TX',
    linkedin: 'https://linkedin.com/in/alokthakur012',
    github: 'https://github.com/aalok012',
  },

  skills: [
    {
      icon: '⟨/⟩',
      title: 'Languages',
      items: ['Python', 'JavaScript ES6+', 'C++', 'SQL', 'HTML/CSS'],
    },
    {
      icon: '⚙',
      title: 'Frameworks & APIs',
      items: ['FastAPI', 'REST API', 'React', 'LangChain', 'Node.js', 'Express.js', 'scikit-learn', 'NumPy', 'TensorFlow/Keras', 'Matplotlib'],
    },
    {
      icon: '🗄',
      title: 'Databases & Cloud',
      items: ['MongoDB', 'PostgreSQL', 'Redis', 'Qdrant (Vector DB)', 'AWS EC2', 'Nginx', 'PM2'],
    },
    {
      icon: '🛠',
      title: 'Developer Tools',
      items: ['Linux (Ubuntu)', 'Docker', 'Git', 'GitHub', 'CI/CD', 'Postman', 'Jira', 'Jupyter Notebook'],
    },
  ],

  experience: [
    {
      role: 'Backend Engineer Intern',
      company: 'Hetauda Infotech · Nepal',
      period: 'Feb 2024 – Jun 2024',
      bullets: [
        'Designed and deployed 10+ REST APIs using Node.js, Express.js, and MongoDB, reducing average response time',
        'Applied MongoDB query optimization techniques under senior guidance, helping reduce average query execution time',
        'Handled CRUD operations, input validation, and error handling to ensure application reliability',
        'Collaborated with frontend developers to integrate APIs and debug end-to-end application issues',
      ],
    },
    {
      role: 'Computer Science Instructor',
      company: 'Kashyap Vidhyapeeth · Inaruwa, Nepal',
      period: 'Sep 2023 – Jan 2024',
      bullets: [
        'Designed and delivered computer science curriculum to 30+ secondary school students, teaching programming fundamentals and problem-solving concepts',
        'Developed hands-on lab exercises for Python basics and Microsoft Office Suite, improving student comprehension through practical application',
        'Created lesson materials and coding assignments, adapting complex technical concepts for beginner-level understanding',
      ],
    },
  ],

  projects: [
    {
      title: 'Personal Finance Platform',
      description:
        'Full-stack expense tracking platform enabling users to securely manage income, expenses, and budgets with real-time insights.',
      highlights: [
        'Optimized MongoDB schema and indexing to handle 10,000+ transaction queries with sub-100ms response times',
        'Deployed on AWS EC2 with Nginx reverse proxy and PM2, configured for auto-restart and zero-downtime updates',
        'Developed a responsive React frontend with Tailwind CSS, delivering real-time expense tracking, category-wise analytics, and budget visualization',
      ],
      stack: ['Node.js', 'Express', 'MongoDB', 'React', 'Tailwind', 'AWS'],
      github: 'https://github.com/aalok012/personal-finance-platform',
      live: '',
    },
    {
      title: 'Scalable Video Streaming Backend',
      description:
        'Scalable RESTful backend for a video-sharing platform, supporting user management, video metadata handling, and content workflows.',
      highlights: [
        'Implemented JWT-based authentication with bcrypt password hashing and middleware-based request validation across all protected routes',
        'Built modular MVC architecture with reusable controllers, services, and error handlers, reducing code duplication by 50%',
      ],
      stack: ['Node.js', 'Express', 'MongoDB', 'REST APIs'],
      github: 'https://github.com/aalok012/video-streaming-backend',
    },
    {
      title: 'Diabetes Risk Predictor',
      description:
        'End-to-end ML system predicting diabetes risk from clinical features, with per-feature SHAP explanations served via FastAPI.',
      highlights: [
        'Applied SMOTE on Pima Indians dataset (768 records), achieving 75% accuracy and 0.80 F1 score',
        'Integrated SHAP LinearExplainer to return per-feature attribution values, enabling clinically interpretable risk explanations for glucose, BMI, and insulin levels',
        'Served real-time inference via FastAPI with Pydantic input validation; deployed frontend on Vercel with CORS-restricted backend access',
      ],
      stack: ['Python', 'scikit-learn', 'FastAPI', 'React', 'Vercel'],
      github: 'https://github.com/aalok012/diabetes-risk-predictor',
      live: '',
    },
    {
      title: 'Chat with Docs – RAG System',
      description:
        'AI-powered RAG pipeline enabling intelligent document retrieval and conversational Q&A over custom knowledge bases.',
      highlights: [
        'Chunks documents, generates OpenAI embeddings, and stores vectors in Qdrant for semantic search; processes 100-page documents in under 30 seconds',
        'Containerized with Docker Compose for reproducible local development and production-ready deployment',
      ],
      stack: ['Python', 'LangChain', 'Qdrant', 'FastAPI', 'Redis', 'Docker'],
      github: 'https://github.com/aalok012/chat-with-docs',
    },
  ],

  education: {
    school: 'Texas State University',
    degree: 'Bachelor of Science in Computer Science',
    minor: 'Minor in Applied Mathematics & Economics · San Marcos, TX',
    gpa: '3.86',
    courses: [
      'Python',
      'Data Structures',
      'Object-Oriented Programming',
      'Database Management',
      'Statistics',
      'Discrete Mathematics',
      'Probability',
    ],
  },
};

export default resume;
