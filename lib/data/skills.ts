/**
 * Skills Data
 *
 * Organized by ML/AI workflow stages (8 categories).
 * This structure mirrors the professional ML pipeline from data to deployment.
 *
 * To update: Add new skills to the appropriate category's items array.
 */

export interface SkillCategory {
  id: string;
  title: string;
  icon: string; // Emoji or icon identifier
  description: string;
  skills: {
    name: string;
    items: string[];
  }[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'data-ingestion',
    title: 'Data Ingestion & Processing',
    icon: '📊',
    description: 'Batch and real-time data processing, feature engineering, and data pipeline development',
    skills: [
      {
        name: 'Batch Processing',
        items: ['Pandas', 'Polars', 'PySpark', 'Apache Spark', 'SQL']
      },
      {
        name: 'Real-time Streaming',
        items: ['Apache Kafka', 'Redpanda', 'WebSockets']
      },
      {
        name: 'Feature Engineering',
        items: ['Hopsworks Feature Store', 'Statistical feature extraction', 'Anomaly detection']
      },
      {
        name: 'Data Sources',
        items: ['REST APIs', 'Industrial structured/unstructured data', 'Streaming data']
      }
    ]
  },
  {
    id: 'ml-training',
    title: 'ML/DL Model Training',
    icon: '🤖',
    description: 'Classical machine learning and deep learning model development',
    skills: [
      {
        name: 'Deep Learning Frameworks',
        items: ['PyTorch', 'TensorFlow']
      },
      {
        name: 'Classical ML Libraries',
        items: ['Scikit-Learn', 'XGBoost', 'LightGBM', 'CatBoost']
      },
      {
        name: 'Techniques',
        items: ['Supervised Learning', 'Unsupervised Learning', 'Reinforcement Learning', 'Bayesian Inference']
      },
      {
        name: 'Experiment Tracking',
        items: ['Comet ML', 'mlflow', 'Weights & Biases']
      }
    ]
  },
  {
    id: 'llm-finetuning',
    title: 'LLM Fine-tuning',
    icon: '🔧',
    description: 'Large language model customization and training',
    skills: [
      {
        name: 'Platforms',
        items: ['HuggingFace Transformers', 'AWS SageMaker']
      },
      {
        name: 'Techniques',
        items: ['Transfer Learning', 'Parameter-efficient fine-tuning (PEFT)', 'LoRA', 'Custom training loops']
      }
    ]
  },
  {
    id: 'rag',
    title: 'RAG (Retrieval-Augmented Generation)',
    icon: '🔍',
    description: 'Building intelligent retrieval systems for enhanced LLM responses',
    skills: [
      {
        name: 'Frameworks',
        items: ['LangChain', 'LangGraph', 'LlamaIndex']
      },
      {
        name: 'Components',
        items: ['Vector databases', 'Embedding models', 'Document retrieval systems', 'Semantic search']
      },
      {
        name: 'Projects',
        items: ['HomeMatch RAG platform', 'Industrial documentation systems']
      }
    ]
  },
  {
    id: 'agentic-ai',
    title: 'Agentic AI',
    icon: '🤝',
    description: 'Multi-agent systems and autonomous AI workflows',
    skills: [
      {
        name: 'Frameworks',
        items: ['LangGraph', 'LangChain', 'Autogen', 'CrewAI']
      },
      {
        name: 'Capabilities',
        items: ['Multi-agent orchestration', 'Tool integration', 'RL agents', 'Autonomous decision-making']
      },
      {
        name: 'LLM Hosting',
        items: ['Groq (fast inference)', 'OpenAI API', 'Anthropic Claude']
      }
    ]
  },
  {
    id: 'evaluation',
    title: 'Model & System Evaluation',
    icon: '📈',
    description: 'Tracking, monitoring, and validating ML systems',
    skills: [
      {
        name: 'Tracking & Monitoring',
        items: ['Comet ML', 'mlflow', 'opik', 'Weights & Biases', 'LangSmith']
      },
      {
        name: 'Metrics & Analysis',
        items: ['Statistical analysis', 'A/B testing', 'Bayesian inference', 'Uncertainty quantification']
      },
      {
        name: 'Debugging Tools',
        items: ['LangSmith (LLM debugging)', 'Production monitoring dashboards']
      }
    ]
  },
  {
    id: 'deployment',
    title: 'Deployment (Local & Cloud)',
    icon: '🚀',
    description: 'Model deployment and infrastructure management',
    skills: [
      {
        name: 'Containerization',
        items: ['Docker', 'Kubernetes', 'Docker Compose']
      },
      {
        name: 'AWS Cloud',
        items: ['S3', 'SageMaker', 'Lambda', 'ECS/EKS', 'API Gateway', 'EC2']
      },
      {
        name: 'APIs & Servers',
        items: ['FastAPI', 'Streamlit', 'WebSockets', 'REST APIs']
      }
    ]
  },
  {
    id: 'cicd-monitoring',
    title: 'CI/CD & Monitoring',
    icon: '⚙️',
    description: 'Continuous integration, deployment, and production monitoring',
    skills: [
      {
        name: 'CI/CD',
        items: ['GitHub Actions', 'GitLab CI/CD', 'Automated testing', 'Pipeline orchestration']
      },
      {
        name: 'Monitoring',
        items: ['Model drift detection', 'Performance tracking', 'Kibana', 'CloudWatch']
      },
      {
        name: 'Visualization',
        items: ['Plotly-Dash', 'Streamlit', 'Kibana', 'Grafana']
      }
    ]
  }
];

// Helper function to get all unique skills
export const getAllSkills = (): string[] => {
  const allSkills: string[] = [];
  skillCategories.forEach(category => {
    category.skills.forEach(skillGroup => {
      allSkills.push(...skillGroup.items);
    });
  });
  return [...new Set(allSkills)]; // Remove duplicates
};

// Helper function to get category by ID
export const getCategoryById = (id: string) =>
  skillCategories.find(cat => cat.id === id);
