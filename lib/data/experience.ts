/**
 * Experience Data
 *
 * This file contains your professional work experience.
 * Listed in reverse chronological order (most recent first).
 *
 * To update: Edit the achievements, tech stack, or add new positions.
 */

export interface ProjectDetail {
  name: string;
  description: string;
  architecture: {
    dataIngestion?: string;
    featureEngineering?: string;
    datasetGeneration?: string;
    modelTraining?: string;
    evaluation?: string;
    deployment?: string;
    monitoring?: string;
    experimentTracking?: string;
    cicd?: string;
    observability?: string;
  };
  techStack: string[];
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  startDate: string; // For sorting
  current: boolean;
  achievements: string[];
  techStack: string[];
  projectLink?: string;
  projects?: ProjectDetail[];
}

export const experiences: Experience[] = [
  {
    id: 'akkodis-research',
    title: 'Data Scientist | ML & MLOps Engineer',
    company: 'Akkodis Research (AKR)',
    location: 'Toulouse, France',
    period: 'April 2024 - Present',
    startDate: '2024-04',
    current: true,
    achievements: [
      'Led PRIA project as ML Technical Lead implementing RL agents for medical parameter optimization',
      'Designed real-time data pipelines processing streaming medical data with Apache Kafka and Redpanda',
      'Developed model training pipelines with REST APIs and WebSocket endpoints for real-time inference',
      'Implemented MLOps practices with CI/CD pipelines and monitoring for production-scale ML systems',
      'Built end-to-end ML infrastructure from data ingestion to model deployment and monitoring'
    ],
    techStack: [
      'Python',
      'SQL',
      'AWS',
      'Apache Kafka',
      'Redpanda',
      'Comet ML',
      'Docker',
      'GitHub CI/CD',
      'Streamlit',
      'REST APIs',
      'WebSockets',
      'Reinforcement Learning'
    ],
    projectLink: '#projects',
    projects: [
      {
        name: 'PRIA - Reinforcement Learning for Medical Parameter Optimization',
        description: 'Led development as ML Technical Lead for a reinforcement learning system optimizing medical treatment parameters in real-time. System processes streaming medical data to provide AI-driven parameter recommendations for healthcare professionals.',
        architecture: {
          dataIngestion: 'Apache Kafka and Redpanda for real-time streaming medical data ingestion from multiple sources. Custom Python consumers process high-frequency sensor data with sub-second latency requirements.',
          featureEngineering: 'Real-time feature extraction pipeline using sliding windows for temporal features. Statistical aggregations (mean, std, percentiles) computed on streaming data. Custom medical domain features engineered in collaboration with healthcare experts.',
          modelTraining: 'Reinforcement Learning agents (PPO, SAC algorithms) trained using stable-baselines3. Custom reward functions designed based on medical outcomes. Distributed training on AWS EC2 GPU instances with model checkpointing.',
          evaluation: 'Multi-metric evaluation framework including reward convergence, policy stability, and medical safety constraints. Backtesting on historical medical data with cross-validation across patient cohorts.',
          deployment: 'REST API (FastAPI) and WebSocket endpoints for real-time inference. Model served in Docker containers on AWS ECS with auto-scaling. Sub-100ms inference latency requirement.',
          monitoring: 'Real-time monitoring dashboard (Streamlit) tracking model predictions, system latency, and data quality metrics. Alerting system for model drift and anomalous predictions.',
          experimentTracking: 'Comet ML for experiment tracking, hyperparameter tuning logs, and model versioning. Comprehensive logging of training metrics, model artifacts, and evaluation results.',
          cicd: 'GitHub Actions CI/CD pipeline with automated testing (unit, integration, model validation). Automated deployment to staging and production environments with rollback capabilities.',
          observability: 'Comprehensive logging with CloudWatch. Distributed tracing for API requests. Custom medical safety metrics tracked in real-time with automated alerts.'
        },
        techStack: [
          'Python',
          'Reinforcement Learning (PPO, SAC)',
          'stable-baselines3',
          'Apache Kafka',
          'Redpanda',
          'FastAPI',
          'WebSockets',
          'Streamlit',
          'Docker',
          'AWS (ECS, EC2, CloudWatch)',
          'Comet ML',
          'GitHub Actions'
        ]
      },
      {
        name: 'Automatic PR Reviewer - AI-Powered Code Review Agent',
        description: 'Developed an intelligent code review system using LangChain and LangGraph to automate pull request reviews. The agentic AI system analyzes code changes, identifies potential issues, and provides constructive feedback to developers.',
        architecture: {
          dataIngestion: 'GitHub webhooks trigger review pipeline on PR creation/update. REST API ingests PR diff, commit messages, and file changes. Code parsed and structured using tree-sitter for AST analysis.',
          featureEngineering: 'Code complexity metrics (cyclomatic complexity, code churn, file coupling). Static analysis features (linting violations, type errors). Historical code review patterns extracted from repository history.',
          datasetGeneration: 'Synthetic dataset generation using historical PR reviews as ground truth. Data augmentation with code transformations. Balanced dataset across code quality categories (bugs, style, architecture).',
          modelTraining: 'Fine-tuned Claude 3.5 Sonnet on code review tasks using prompt engineering and few-shot examples. Retrieval-Augmented Generation (RAG) with codebase context from vector database (ChromaDB). Custom prompts designed for different review aspects (security, performance, maintainability).',
          evaluation: 'Human evaluation by developers comparing AI reviews to human reviews. Metrics: review accuracy, false positive rate, actionability score. A/B testing with control group receiving only human reviews.',
          deployment: 'LangChain agent deployed as GitHub App with webhook integration. Serverless deployment on AWS Lambda with API Gateway. Automatic comment posting to GitHub PRs with review findings.',
          monitoring: 'Opik for LLM observability tracking token usage, latency, and response quality. Dashboard monitoring review acceptance rate and developer feedback. Cost tracking for LLM API calls.',
          experimentTracking: 'MLflow tracking for prompt versions, RAG configurations, and retrieval strategies. A/B test results logged with statistical significance testing. Version control for prompt templates and agent configurations.',
          cicd: 'Automated testing of agent responses against golden dataset. GitHub Actions pipeline for deployment with gradual rollout. Rollback mechanism for problematic agent versions.',
          observability: 'Distributed tracing for agent execution with LangSmith. Token usage and cost monitoring per repository. User feedback loop integrated into agent improvement cycle.'
        },
        techStack: [
          'Python',
          'LangChain',
          'LangGraph',
          'Claude 3.5 Sonnet',
          'ChromaDB',
          'GitHub API',
          'AWS Lambda',
          'API Gateway',
          'MLflow',
          'Opik',
          'LangSmith',
          'tree-sitter'
        ]
      }
    ]
  },
  {
    id: 'liebherr-aerospace',
    title: 'AI/ML Engineer',
    company: 'Liebherr Aerospace (via Akkodis)',
    location: 'Toulouse, France',
    period: 'March 2022 - April 2024',
    startDate: '2022-03',
    current: false,
    achievements: [
      'Developed ML & DL models optimizing engineering and manufacturing processes using industrial data',
      'Designed statistical analyses, feature extraction, and anomaly detection for structured/unstructured data',
      'Implemented GenAI solutions for industrial process documentation and knowledge management',
      'Built production ML pipelines for aerospace applications with strict reliability requirements',
      'Collaborated with cross-functional teams to deploy ML solutions in critical industrial environments'
    ],
    techStack: [
      'Python',
      'LangChain',
      'LangGraph',
      'AWS',
      'mlflow',
      'opik',
      'Docker',
      'GitHub CI/CD',
      'Streamlit',
      'FastAPI',
      'Machine Learning',
      'Deep Learning',
      'GenAI'
    ],
    projectLink: '#projects',
    projects: [
      {
        name: 'Computer Vision for Industrial Piece Anomaly Detection',
        description: 'Built a computer vision system for automated quality inspection of aerospace manufacturing components. Deep learning models detect surface defects, dimensional anomalies, and assembly errors in real-time production lines with high precision requirements.',
        architecture: {
          dataIngestion: 'High-resolution camera feeds (4K, 60fps) from multiple inspection stations. Image preprocessing pipeline with automatic cropping, rotation correction, and normalization. Data versioning with DVC for training datasets.',
          featureEngineering: 'Multi-scale feature extraction using pre-trained CNNs (ResNet, EfficientNet). Custom feature engineering for aerospace-specific defect patterns. Edge detection and texture analysis for surface anomaly characterization.',
          datasetGeneration: 'Synthetic defect generation using image augmentation (rotation, noise, lighting variations). Active learning pipeline to identify and label edge cases. Balanced dataset across defect types with stratified sampling.',
          modelTraining: 'Transfer learning from ImageNet with fine-tuning on aerospace components. Ensemble of CNN architectures (EfficientNet-B4, ResNet-101) for robust predictions. Custom loss functions weighted by defect severity and business impact.',
          evaluation: 'Precision-recall analysis with focus on minimizing false negatives (missed defects). Cross-validation across different component types and manufacturing batches. Performance benchmarking against human inspectors with 99.2% agreement.',
          deployment: 'Real-time inference on edge devices (NVIDIA Jetson) at inspection stations. FastAPI service for centralized model management and updates. Gradio interface for quality control teams to review flagged components.',
          monitoring: 'Real-time dashboard tracking defect rates, model confidence scores, and inspection throughput. Automatic alerts for unusual defect patterns or model performance degradation. Data drift monitoring comparing production vs. training data distributions.',
          experimentTracking: 'MLflow tracking for model architectures, hyperparameters, and training metrics. Model registry with versioning and A/B testing framework. Comprehensive logging of inference results for continuous model improvement.',
          cicd: 'Automated retraining pipeline triggered by new labeled data. GitHub Actions for model testing (unit tests, performance benchmarks, edge case validation). Blue-green deployment strategy for zero-downtime model updates.',
          observability: 'Inference latency monitoring with <50ms SLA. GPU utilization and memory tracking. Detailed logging of predictions, confidence scores, and human override decisions for model refinement.'
        },
        techStack: [
          'Python',
          'PyTorch',
          'TensorFlow',
          'OpenCV',
          'EfficientNet',
          'ResNet',
          'NVIDIA Jetson',
          'FastAPI',
          'Gradio',
          'MLflow',
          'DVC',
          'Docker',
          'GitHub Actions'
        ]
      },
      {
        name: 'RAG-Based Industrial Documentation Query System',
        description: 'Developed a Retrieval-Augmented Generation system for querying complex aerospace engineering documentation. LangChain-powered application enables engineers to find technical specifications, maintenance procedures, and compliance requirements through natural language queries.',
        architecture: {
          dataIngestion: 'Automated ingestion of PDFs, Word docs, CAD metadata, and internal wikis using custom parsers. Document chunking strategy optimized for technical content (section-aware splitting). Incremental updates with change detection to keep knowledge base current.',
          featureEngineering: 'Dense embeddings (OpenAI text-embedding-3-large) for semantic search. Hybrid search combining dense vectors with BM25 sparse retrieval. Metadata extraction (document type, version, certification status) for filtered retrieval.',
          datasetGeneration: 'Question-answer pairs generated from historical support tickets and expert annotations. Synthetic query generation using LLMs to expand training coverage. Hard negative mining to improve retrieval precision.',
          modelTraining: 'RAG pipeline with Claude 3.5 Sonnet as reasoning engine. Fine-tuned retrieval model on domain-specific queries using contrastive learning. Prompt engineering with few-shot examples for technical accuracy.',
          evaluation: 'Retrieval metrics: MRR@10, NDCG@5, Recall@20 evaluated on expert-curated test set. Generation quality assessed by domain experts using relevance, accuracy, and completeness rubrics. User satisfaction tracked through feedback integration.',
          deployment: 'Streamlit application for internal engineering teams with conversational interface. ChromaDB vector store deployed on AWS with horizontal scaling. API Gateway + Lambda for serverless query processing.',
          monitoring: 'Opik for LLM observability tracking prompt performance and token usage. User query analytics identifying common questions and retrieval failures. Cost monitoring for embedding generation and LLM inference.',
          experimentTracking: 'MLflow for tracking retrieval configurations, embedding models, and prompt templates. A/B testing framework comparing RAG approaches (naive vs. advanced chunking, different LLMs). Version control for document processing pipelines.',
          cicd: 'Automated testing of retrieval accuracy on benchmark query set. GitHub Actions pipeline for deployment with gradual traffic shifting. Rollback capabilities for embedding model or prompt updates.',
          observability: 'Distributed tracing with LangSmith for debugging multi-step RAG chains. Query latency breakdown (retrieval, reranking, generation). User feedback loop with thumbs up/down for continuous improvement.'
        },
        techStack: [
          'Python',
          'LangChain',
          'LangGraph',
          'Claude 3.5 Sonnet',
          'OpenAI Embeddings',
          'ChromaDB',
          'BM25',
          'Streamlit',
          'AWS Lambda',
          'API Gateway',
          'MLflow',
          'Opik',
          'LangSmith',
          'Docker'
        ]
      }
    ]
  }
];

// Helper function to get current position
export const getCurrentExperience = () => experiences.find(exp => exp.current);

// Helper function to get all experiences sorted by date
export const getExperiencesSorted = () =>
  [...experiences].sort((a, b) => b.startDate.localeCompare(a.startDate));
