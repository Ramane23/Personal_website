/**
 * Architecture Diagrams Data
 *
 * Defines the visual architecture flow for each project.
 * Each diagram shows the data flow, tools, and components.
 */

import { DiagramNode, DiagramEdge } from '@/components/ArchitectureDiagram'

export interface ProjectArchitecture {
  projectId: string
  nodes: DiagramNode[]
  edges: DiagramEdge[]
}

export const architectures: { [key: string]: ProjectArchitecture } = {
  // PRIA - Reinforcement Learning for Medical Parameter Optimization
  'pria-rl': {
    projectId: 'pria-rl',
    nodes: [
      // Data Ingestion Layer
      { id: 'kafka', label: 'Apache Kafka', type: 'service', logo: '📡', description: 'Stream Ingestion' },
      { id: 'redpanda', label: 'Redpanda', type: 'service', logo: '🐼', description: 'Data Broker' },

      // Feature Engineering
      { id: 'python-consumer', label: 'Python Consumer', type: 'process', logo: '🐍', description: 'Process Streams' },
      { id: 'feature-eng', label: 'Feature Engineering', type: 'process', logo: '⚙️', description: 'Temporal Features' },

      // Model Training
      { id: 'rl-training', label: 'RL Training', type: 'process', logo: '🧠', description: 'PPO/SAC Agents' },
      { id: 'aws-gpu', label: 'AWS EC2 GPU', type: 'service', logo: '☁️', description: 'Training Compute' },

      // Model Serving
      { id: 'fastapi', label: 'FastAPI', type: 'service', logo: '⚡', description: 'REST + WebSocket' },
      { id: 'docker', label: 'Docker', type: 'tool', logo: '🐳', description: 'Containerization' },
      { id: 'aws-ecs', label: 'AWS ECS', type: 'service', logo: '☁️', description: 'Deployment' },

      // Monitoring & Tracking
      { id: 'streamlit', label: 'Streamlit Dashboard', type: 'service', logo: '📊', description: 'Real-time Monitor' },
      { id: 'comet', label: 'Comet ML', type: 'tool', logo: '☄️', description: 'Experiment Tracking' },
      { id: 'cloudwatch', label: 'CloudWatch', type: 'tool', logo: '👁️', description: 'Observability' },

      // CI/CD
      { id: 'github-actions', label: 'GitHub Actions', type: 'tool', logo: '⚙️', description: 'CI/CD Pipeline' },
    ],
    edges: [
      // Data Flow
      { from: 'kafka', to: 'python-consumer', label: 'Medical Data' },
      { from: 'redpanda', to: 'python-consumer', label: 'Sensor Data' },
      { from: 'python-consumer', to: 'feature-eng', label: 'Raw Streams' },

      // Training Flow
      { from: 'feature-eng', to: 'rl-training', label: 'Features' },
      { from: 'rl-training', to: 'aws-gpu', label: 'Train' },
      { from: 'aws-gpu', to: 'comet', label: 'Metrics' },

      // Deployment Flow
      { from: 'rl-training', to: 'fastapi', label: 'Model' },
      { from: 'fastapi', to: 'docker', label: 'Package' },
      { from: 'docker', to: 'aws-ecs', label: 'Deploy' },

      // Monitoring Flow
      { from: 'aws-ecs', to: 'streamlit', label: 'Predictions' },
      { from: 'aws-ecs', to: 'cloudwatch', label: 'Logs' },

      // CI/CD Flow
      { from: 'github-actions', to: 'docker', label: 'Build' },
      { from: 'github-actions', to: 'aws-ecs', label: 'Deploy' },
    ],
  },

  // Automatic PR Reviewer - AI-Powered Code Review Agent
  'pr-reviewer': {
    projectId: 'pr-reviewer',
    nodes: [
      // Data Ingestion
      { id: 'github-webhook', label: 'GitHub Webhook', type: 'service', logo: '🪝', description: 'PR Events' },
      { id: 'api-gateway', label: 'API Gateway', type: 'service', logo: '🚪', description: 'REST API' },
      { id: 'tree-sitter', label: 'Tree-sitter', type: 'tool', logo: '🌳', description: 'AST Parser' },

      // Feature Engineering
      { id: 'code-analysis', label: 'Code Analysis', type: 'process', logo: '🔍', description: 'Metrics & Static Analysis' },
      { id: 'chromadb', label: 'ChromaDB', type: 'database', logo: '🎨', description: 'Vector Store' },

      // Model/Agent
      { id: 'langchain', label: 'LangChain Agent', type: 'process', logo: '🦜', description: 'Orchestration' },
      { id: 'claude', label: 'Claude 3.5', type: 'service', logo: '🤖', description: 'LLM' },
      { id: 'rag', label: 'RAG Pipeline', type: 'process', logo: '📚', description: 'Context Retrieval' },

      // Deployment
      { id: 'lambda', label: 'AWS Lambda', type: 'service', logo: 'λ', description: 'Serverless' },
      { id: 'github-app', label: 'GitHub App', type: 'service', logo: '📱', description: 'Integration' },

      // Monitoring & Tracking
      { id: 'opik', label: 'Opik', type: 'tool', logo: '👁️', description: 'LLM Observability' },
      { id: 'langsmith', label: 'LangSmith', type: 'tool', logo: '🔨', description: 'Tracing' },
      { id: 'mlflow', label: 'MLflow', type: 'tool', logo: '📊', description: 'Experiment Tracking' },
    ],
    edges: [
      // Data Flow
      { from: 'github-webhook', to: 'api-gateway', label: 'PR Event' },
      { from: 'api-gateway', to: 'tree-sitter', label: 'Code Diff' },
      { from: 'tree-sitter', to: 'code-analysis', label: 'AST' },

      // RAG Flow
      { from: 'code-analysis', to: 'chromadb', label: 'Embeddings' },
      { from: 'chromadb', to: 'rag', label: 'Context' },

      // Agent Flow
      { from: 'code-analysis', to: 'langchain', label: 'Features' },
      { from: 'rag', to: 'langchain', label: 'Context' },
      { from: 'langchain', to: 'claude', label: 'Prompt' },
      { from: 'claude', to: 'langchain', label: 'Review' },

      // Deployment Flow
      { from: 'langchain', to: 'lambda', label: 'Agent' },
      { from: 'lambda', to: 'github-app', label: 'Comments' },

      // Monitoring Flow
      { from: 'claude', to: 'opik', label: 'Metrics' },
      { from: 'langchain', to: 'langsmith', label: 'Traces' },
      { from: 'langchain', to: 'mlflow', label: 'Experiments' },
    ],
  },

  // Computer Vision for Industrial Piece Anomaly Detection
  'cv-anomaly': {
    projectId: 'cv-anomaly',
    nodes: [
      // Data Ingestion
      { id: 'camera', label: 'Camera Feeds', type: 'service', logo: '📷', description: '4K @ 60fps' },
      { id: 'preprocessing', label: 'Preprocessing', type: 'process', logo: '🔧', description: 'Crop, Rotate, Normalize' },
      { id: 'dvc', label: 'DVC', type: 'tool', logo: '📦', description: 'Data Versioning' },

      // Feature Engineering
      { id: 'cnn-features', label: 'CNN Features', type: 'process', logo: '🧠', description: 'ResNet, EfficientNet' },
      { id: 'opencv', label: 'OpenCV', type: 'tool', logo: '👁️', description: 'Edge Detection' },

      // Model Training
      { id: 'transfer-learning', label: 'Transfer Learning', type: 'process', logo: '🎓', description: 'Fine-tuning' },
      { id: 'pytorch', label: 'PyTorch', type: 'tool', logo: '🔥', description: 'Training Framework' },
      { id: 'ensemble', label: 'Ensemble Model', type: 'process', logo: '🎯', description: 'Multi-model' },

      // Deployment
      { id: 'jetson', label: 'NVIDIA Jetson', type: 'service', logo: '🖥️', description: 'Edge Device' },
      { id: 'fastapi-cv', label: 'FastAPI', type: 'service', logo: '⚡', description: 'Model API' },
      { id: 'gradio', label: 'Gradio UI', type: 'service', logo: '🎨', description: 'Review Interface' },

      // Monitoring
      { id: 'mlflow-cv', label: 'MLflow', type: 'tool', logo: '📊', description: 'Model Registry' },
      { id: 'dashboard', label: 'Dashboard', type: 'service', logo: '📈', description: 'Metrics Monitor' },

      // CI/CD
      { id: 'github-actions-cv', label: 'GitHub Actions', type: 'tool', logo: '⚙️', description: 'Auto Retrain' },
    ],
    edges: [
      // Data Flow
      { from: 'camera', to: 'preprocessing', label: 'Images' },
      { from: 'preprocessing', to: 'dvc', label: 'Store' },
      { from: 'preprocessing', to: 'cnn-features', label: 'Clean Images' },
      { from: 'preprocessing', to: 'opencv', label: 'Analysis' },

      // Training Flow
      { from: 'cnn-features', to: 'transfer-learning', label: 'Features' },
      { from: 'opencv', to: 'transfer-learning', label: 'Edge Features' },
      { from: 'transfer-learning', to: 'pytorch', label: 'Train' },
      { from: 'pytorch', to: 'ensemble', label: 'Models' },

      // Deployment Flow
      { from: 'ensemble', to: 'jetson', label: 'Deploy' },
      { from: 'ensemble', to: 'fastapi-cv', label: 'Serve' },
      { from: 'fastapi-cv', to: 'gradio', label: 'Interface' },

      // Monitoring Flow
      { from: 'ensemble', to: 'mlflow-cv', label: 'Version' },
      { from: 'jetson', to: 'dashboard', label: 'Metrics' },

      // CI/CD Flow
      { from: 'github-actions-cv', to: 'pytorch', label: 'Retrain' },
      { from: 'github-actions-cv', to: 'jetson', label: 'Deploy' },
    ],
  },

  // RAG-Based Industrial Documentation Query System
  'rag-docs': {
    projectId: 'rag-docs',
    nodes: [
      // Data Ingestion
      { id: 'docs-parser', label: 'Document Parser', type: 'process', logo: '📄', description: 'PDFs, Docs, CAD' },
      { id: 'chunking', label: 'Smart Chunking', type: 'process', logo: '✂️', description: 'Section-aware' },

      // Feature Engineering
      { id: 'embeddings', label: 'OpenAI Embeddings', type: 'service', logo: '🔤', description: 'text-embedding-3' },
      { id: 'metadata', label: 'Metadata Extract', type: 'process', logo: '🏷️', description: 'Version, Type' },

      // Vector Store
      { id: 'chromadb-rag', label: 'ChromaDB', type: 'database', logo: '🎨', description: 'Vector Store' },
      { id: 'bm25', label: 'BM25', type: 'tool', logo: '🔍', description: 'Sparse Retrieval' },

      // RAG Pipeline
      { id: 'hybrid-search', label: 'Hybrid Search', type: 'process', logo: '🔎', description: 'Dense + Sparse' },
      { id: 'reranker', label: 'Reranker', type: 'process', logo: '🎯', description: 'Relevance Score' },
      { id: 'claude-rag', label: 'Claude 3.5', type: 'service', logo: '🤖', description: 'Generation' },

      // Deployment
      { id: 'streamlit-rag', label: 'Streamlit App', type: 'service', logo: '🎨', description: 'Chat Interface' },
      { id: 'lambda-rag', label: 'AWS Lambda', type: 'service', logo: 'λ', description: 'Serverless Query' },

      // Monitoring
      { id: 'opik-rag', label: 'Opik', type: 'tool', logo: '👁️', description: 'LLM Observability' },
      { id: 'langsmith-rag', label: 'LangSmith', type: 'tool', logo: '🔨', description: 'Chain Tracing' },
      { id: 'mlflow-rag', label: 'MLflow', type: 'tool', logo: '📊', description: 'Retrieval Metrics' },
    ],
    edges: [
      // Data Flow
      { from: 'docs-parser', to: 'chunking', label: 'Raw Text' },
      { from: 'chunking', to: 'embeddings', label: 'Chunks' },
      { from: 'chunking', to: 'metadata', label: 'Extract' },

      // Indexing Flow
      { from: 'embeddings', to: 'chromadb-rag', label: 'Vectors' },
      { from: 'metadata', to: 'chromadb-rag', label: 'Metadata' },
      { from: 'chunking', to: 'bm25', label: 'Index' },

      // Query Flow
      { from: 'chromadb-rag', to: 'hybrid-search', label: 'Dense' },
      { from: 'bm25', to: 'hybrid-search', label: 'Sparse' },
      { from: 'hybrid-search', to: 'reranker', label: 'Results' },
      { from: 'reranker', to: 'claude-rag', label: 'Context' },

      // Deployment Flow
      { from: 'claude-rag', to: 'streamlit-rag', label: 'Answer' },
      { from: 'hybrid-search', to: 'lambda-rag', label: 'API' },

      // Monitoring Flow
      { from: 'claude-rag', to: 'opik-rag', label: 'Tokens' },
      { from: 'hybrid-search', to: 'langsmith-rag', label: 'Traces' },
      { from: 'reranker', to: 'mlflow-rag', label: 'Metrics' },
    ],
  },
}

// Helper to get architecture by project ID
export const getArchitecture = (projectId: string): ProjectArchitecture | null => {
  return architectures[projectId] || null
}
