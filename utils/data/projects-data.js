export const projectsData = [
  {
    id: 1,
    name: 'AI Root Cause Analyzer (KEEP)',
    description: 'Developing an AI-powered system for automated root cause detection using logs and system metrics. Implemented anomaly detection models (Isolation Forest / LSTM) for identifying system failures, and integrated a RAG pipeline over historical incident data for contextual debugging. Designed a probabilistic scoring model to rank root causes and reduce MTTR on simulated failures.',
    tools: [
      'Python',
      'FastAPI',
      'Elasticsearch',
      'FAISS',
      'Docker',
      'CI/CD',
      'Machine Learning',
      'RAG'
    ],
    role: 'Lead AI Engineer',
    code: 'https://github.com/splash0047',
    demo: '',
  },
  {
    id: 2,
    name: 'AI Multi-Agent Research System',
    description: 'Designed and built a sophisticated multi-agent system utilizing LangGraph and CrewAI with research, validation, and summarization agents. Implemented asynchronous orchestration, dynamic tool usage (APIs, web search), and a robust memory system using a vector database for contextual and highly accurate responses.',
    tools: [
      'Python',
      'LangGraph',
      'CrewAI',
      'FastAPI',
      'Vector Database',
      'LLMs',
      'Git'
    ],
    role: 'AI Developer',
    code: 'https://github.com/splash0047',
    demo: '',
  },
  {
    id: 3,
    name: 'Codebase Knowledge AI',
    description: 'Built an advanced AI system for semantic and structural code search using Tree-sitter for AST parsing and Neo4j for graph-based dependency mapping. Enabled API flow tracing, complex codebase understanding, and structural code query resolution for large-scale repositories (10k+ files).',
    tools: [
      'Python',
      'Tree-sitter',
      'Neo4j',
      'LLMs',
      'React.js',
      'Next.js',
      'FastAPI'
    ],
    role: 'Full Stack AI Engineer',
    code: 'https://github.com/splash0047',
    demo: '',
  },
  {
    id: 4,
    name: 'Job Portal Platform',
    description: 'Developed a full-stack MERN (MongoDB, Express.js, React, Node.js) job portal platform featuring secure authentication and Role-Based Access Control (RBAC). Designed and optimized MongoDB schemas to reduce query latency by approximately 40%, significantly improving concurrent request performance.',
    tools: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JavaScript',
      'CSS3',
      'Tailwind CSS'
    ],
    role: 'Full Stack Developer',
    code: 'https://github.com/splash0047/Jobportal',
    demo: 'https://jobportalplatform.netlify.app/',
  },
  {
    id: 5,
    name: 'Medical Diagnosis System',
    description: 'Trained and deployed a production-ready ML medical diagnosis system achieving 90%+ accuracy across 15+ disease categories. Engineered an end-to-end ML pipeline including preprocessing, feature engineering, cross-validation, and hyperparameter tuning with Random Forest and SVM models. Deployed real-time predictions via Streamlit Cloud.',
    tools: [
      'Python',
      'Streamlit',
      'Scikit-learn',
      'Pandas',
      'NumPy',
      'Machine Learning',
      'Git'
    ],
    role: 'Machine Learning Developer',
    code: 'https://github.com/splash0047/medi-predictor-ai',
    demo: 'https://healthpredicator.netlify.app/',
  },
  {
    id: 6,
    name: 'Orbital CLI Tool',
    description: 'Developed and published a modular Node.js command-line interface tool built with TypeScript for automated GitHub repository creation and modular project scaffolding. Integrated Google Gemini AI, PostgreSQL session management, secure OAuth device flow, and custom tool calling to reduce developer environment setup time by 70%.',
    tools: [
      'Node.js',
      'TypeScript',
      'GitHub API',
      'Google Gemini API',
      'PostgreSQL',
      'Prisma',
      'Docker'
    ],
    role: 'Tooling & CLI Developer',
    code: 'https://github.com/splash0047/orbital-cli',
    demo: '',
  }
];



// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
// },
