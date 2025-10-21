/**
 * Projects Data
 *
 * This file contains all your portfolio projects.
 * Each project is an object with title, description, tech stack, metrics, and links.
 *
 * To add a new project: Just add another object to the array.
 * To update a project: Edit the fields directly.
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
  links: {
    github?: string;
    live?: string;
    demo?: string;
  };
  image?: string;
  featured: boolean;
  category: 'GenAI' | 'MLOps' | 'Agentic AI' | 'RAG' | 'Real-time ML';
}

export const projects: Project[] = [
  {
    id: 'contrails-prediction',
    title: 'Real-Time Contrails Prediction System',
    description: 'Production ML system predicting aircraft contrails in real-time using weather and flight data.',
    longDescription: 'Developed an end-to-end MLOps pipeline for real-time contrail prediction. Integrated with Hopsworks feature store for efficient feature management and deployed a high-performance API for real-time inference. The system processes live aviation data and weather patterns to predict contrail formation with 75% precision.',
    techStack: ['LightGBM', 'Hopsworks', 'Aviation Edge API', 'Python', 'Real-time APIs', 'MLOps'],
    metrics: [
      { label: 'Precision', value: '75%' },
      { label: 'F1 Score', value: '76%' },
      { label: 'Latency', value: 'Real-time' }
    ],
    links: {
      github: 'https://github.com/Ramane23/real-time-ml-contrails-prediction'
    },
    featured: true,
    category: 'Real-time ML'
  },
  {
    id: 'blog-generator',
    title: 'AI-Powered Blog Generator Agent',
    description: 'Autonomous blog generation system using multi-agent workflow with LangGraph.',
    longDescription: 'Built a sophisticated multi-agent system that autonomously generates high-quality blog content. Implemented complex workflow orchestration using LangGraph, where multiple AI agents collaborate on research, writing, editing, and fact-checking to produce coherent, well-structured articles.',
    techStack: ['LangGraph', 'Multi-Agent Systems', 'LLMs', 'Python', 'Workflow Orchestration'],
    links: {
      github: 'https://github.com/Ramane23/Blog-generator-agent'
    },
    featured: true,
    category: 'Agentic AI'
  },
  {
    id: 'ai-chatbots',
    title: 'AI Chatbots - Agentic AI Chatbots',
    description: 'Intelligent chatbots powered by LLMs hosted on Groq with external tool calling capabilities.',
    longDescription: 'Developed production-ready agentic chatbots with external tool integration. Leveraged Groq for high-performance LLM inference and implemented tool-calling capabilities allowing the agents to interact with external APIs, databases, and services. Built with LangGraph for complex conversation flows and LangChain for robust integration.',
    techStack: ['LangGraph', 'LangChain', 'Groq', 'Tool Integration', 'Python', 'API Development'],
    links: {
      github: 'https://github.com/Ramane23/AI-Chatbots'
    },
    featured: true,
    category: 'Agentic AI'
  },
  {
    id: 'homematch',
    title: 'HomeMatch - RAG-Based Real Estate Platform',
    description: 'Intelligent property listing retrieval system using RAG architecture for personalized recommendations.',
    longDescription: 'Implemented a Retrieval-Augmented Generation (RAG) system for intelligent real estate search. The platform uses vector databases for semantic search, enabling natural language queries to find relevant properties. Integrated LangChain for orchestration and built a personalized recommendation engine that understands user preferences.',
    techStack: ['RAG', 'LangChain', 'Vector Databases', 'Python', 'Semantic Search', 'NLP'],
    links: {
      github: 'https://github.com/Ramane23/HomeMatch'
    },
    featured: true,
    category: 'RAG'
  }
];

// Helper function to get featured projects
export const getFeaturedProjects = () => projects.filter(p => p.featured);

// Helper function to get projects by category
export const getProjectsByCategory = (category: Project['category']) =>
  projects.filter(p => p.category === category);
