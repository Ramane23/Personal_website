/**
 * Architecture Diagram Components
 *
 * SVG-based architecture visualizations with proper symbols:
 * - Databases as cylinders
 * - Colored component boxes
 * - Labeled data flows with arrows
 * - Real technology logos from CDN
 */

'use client'

import React from 'react'
import Image from 'next/image'

// Logo component with fallback
const TechLogo: React.FC<{ x: number; y: number; src: string; alt: string; size?: number }> = ({
  x, y, src, alt, size = 30
}) => (
  <foreignObject x={x - size/2} y={y - size/2} width={size} height={size}>
    <div className="flex items-center justify-center w-full h-full">
      <img src={src} alt={alt} className="w-full h-full object-contain" />
    </div>
  </foreignObject>
)

// Database cylinder symbol component
const DatabaseIcon: React.FC<{ x: number; y: number; label: string; color?: string }> = ({
  x, y, label, color = '#374151'
}) => (
  <g>
    <ellipse cx={x} cy={y} rx="30" ry="8" fill={color} opacity="0.8" />
    <rect x={x - 30} y={y} width="60" height="50" fill={color} opacity="0.8" />
    <ellipse cx={x} cy={y + 50} rx="30" ry="8" fill={color} />
    <ellipse cx={x} cy={y} rx="30" ry="8" fill={color} opacity="0.3" />
    <text x={x} y={y + 75} fontSize="11" fill="currentColor" textAnchor="middle" fontWeight="600">
      {label}
    </text>
  </g>
)

// API/Server component
const ServerBox: React.FC<{ x: number; y: number; width: number; label: string; color: string }> = ({
  x, y, width, label, color
}) => (
  <g>
    <rect
      x={x}
      y={y}
      width={width}
      height="45"
      fill={color}
      rx="6"
      stroke="currentColor"
      strokeWidth="1.5"
      opacity="0.9"
    />
    <text
      x={x + width / 2}
      y={y + 28}
      fontSize="13"
      fontWeight="600"
      fill="white"
      textAnchor="middle"
    >
      {label}
    </text>
  </g>
)

// Process/Component box
const ComponentBox: React.FC<{
  x: number;
  y: number;
  width: number;
  height: number;
  label: string;
  color: string;
  subLabel?: string;
}> = ({ x, y, width, height, label, color, subLabel }) => (
  <g>
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      fill={color}
      rx="4"
      stroke="currentColor"
      strokeWidth="1.5"
      opacity="0.9"
    />
    <text
      x={x + width / 2}
      y={y + height / 2 + (subLabel ? -5 : 5)}
      fontSize="12"
      fontWeight="600"
      fill="#1f2937"
      textAnchor="middle"
    >
      {label}
    </text>
    {subLabel && (
      <text
        x={x + width / 2}
        y={y + height / 2 + 12}
        fontSize="9"
        fill="#4b5563"
        textAnchor="middle"
      >
        {subLabel}
      </text>
    )}
  </g>
)

// Arrow with label
const Arrow: React.FC<{
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  label?: string;
  dashed?: boolean;
}> = ({ x1, y1, x2, y2, label, dashed = false }) => {
  const midX = (x1 + x2) / 2
  const midY = (y1 + y2) / 2

  return (
    <g>
      <defs>
        <marker
          id="arrowhead"
          markerWidth="10"
          markerHeight="10"
          refX="9"
          refY="3"
          orient="auto"
        >
          <polygon points="0 0, 10 3, 0 6" fill="currentColor" />
        </marker>
      </defs>
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray={dashed ? "5,5" : "0"}
        markerEnd="url(#arrowhead)"
        opacity="0.6"
      />
      {label && (
        <text
          x={midX}
          y={midY - 8}
          fontSize="10"
          fill="currentColor"
          textAnchor="middle"
          fontWeight="500"
        >
          {label}
        </text>
      )}
    </g>
  )
}

// Grouped section with dotted border
const GroupBox: React.FC<{
  x: number;
  y: number;
  width: number;
  height: number;
  label: string;
  labelPosition?: 'top-left' | 'top-right';
}> = ({ x, y, width, height, label, labelPosition = 'top-left' }) => (
  <g>
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeDasharray="5,5"
      rx="8"
      opacity="0.4"
    />
    <text
      x={labelPosition === 'top-left' ? x + 10 : x + width - 10}
      y={y + 20}
      fontSize="11"
      fontWeight="600"
      fill="currentColor"
      textAnchor={labelPosition === 'top-left' ? 'start' : 'end'}
    >
      {label}
    </text>
  </g>
)

// Architecture diagram for Contrails Prediction System
export const ContrailsArchitecture: React.FC = () => (
  <svg viewBox="0 0 700 400" className="w-full h-auto">
    <GroupBox x={10} y={10} width={200} height={180} label="Data Sources" />
    <ComponentBox x={25} y={50} width={170} height={50} label="Aviation Edge API" color="#60a5fa" subLabel="Flight Data" />
    <ComponentBox x={25} y={120} width={170} height={50} label="Weather API" color="#60a5fa" subLabel="Weather Data" />

    <GroupBox x={240} y={10} width={220} height={280} label="Feature Engineering & Storage" />
    <ServerBox x={260} y={50} width={180} label="Feature Pipeline" color="#8b5cf6" />
    <TechLogo x={440} y={75} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" size={25} />

    <DatabaseIcon x={350} y={140} label="Hopsworks" color="#10b981" />
    <TechLogo x={350} y={155} src="https://assets-global.website-files.com/618399cd49d125734c8dec95/6502696f75bb6f345c19aa1b_icon%20hopsy%20refresh.svg" alt="Hopsworks" size={28} />

    <GroupBox x={490} y={10} width={200} height={280} label="ML System" />
    <ComponentBox x={505} y={50} width={170} height={50} label="LightGBM Model" color="#f59e0b" subLabel="Trained Model" />
    <TechLogo x={670} y={75} src="https://lightgbm.readthedocs.io/en/latest/_static/LightGBM_logo_black_text.svg" alt="LightGBM" size={25} />

    <ServerBox x={505} y={140} width={170} label="Inference API" color="#3b82f6" />
    <TechLogo x={670} y={162} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" alt="FastAPI" size={25} />

    <ComponentBox x={505} y={210} width={170} height={50} label="Real-time Predictions" color="#ec4899" subLabel="75% Precision" />

    {/* Data flows */}
    <Arrow x1={195} y1={75} x2={260} y2={75} label="Flight Data" />
    <Arrow x1={195} y1={145} x2={260} y2={80} label="Weather" />
    <Arrow x1={350} y1={100} x2={350} y2={135} label="Store" />
    <Arrow x1={380} y1={170} x2={505} y2={75} label="Features" />
    <Arrow x1={590} y1={100} x2={590} y2={140} label="Inference" />
    <Arrow x1={590} y1={185} x2={590} y2={210} label="Results" />
  </svg>
)

// Architecture diagram for Blog Generator Agent
export const BlogGeneratorArchitecture: React.FC = () => (
  <svg viewBox="0 0 700 400" className="w-full h-auto">
    <GroupBox x={10} y={10} width={680} height={380} label="Multi-Agent System (LangGraph)" />
    <TechLogo x={680} y={25} src="https://python.langchain.com/img/brand/wordmark.png" alt="LangGraph" size={40} />

    <ComponentBox x={30} y={50} width={140} height={50} label="Research Agent" color="#f59e0b" subLabel="Topic Analysis" />
    <Arrow x1={100} y1={100} x2={100} y2={140} label="Research" />

    <ComponentBox x={30} y={150} width={140} height={50} label="Writer Agent" color="#8b5cf6" subLabel="Content Creation" />
    <Arrow x1={170} y1={175} x2={230} y2={175} label="Draft" />

    <ComponentBox x={230} y={150} width={140} height={50} label="Editor Agent" color="#10b981" subLabel="Refinement" />
    <Arrow x1={370} y1={175} x2={430} y2={175} label="Edited" />

    <ComponentBox x={430} y={150} width={140} height={50} label="Fact-Checker" color="#ef4444" subLabel="Verification" />
    <Arrow x1={500} y1={200} x2={500} y2={240} label="Validated" />

    <ServerBox x={230} y={250} width={240} label="Workflow Orchestration Layer" color="#3b82f6" />
    <Arrow x1={350} y1={295} x2={350} y2={330} label="Output" />

    <ComponentBox x={230} y={330} width={240} height={50} label="Final Blog Article" color="#ec4899" subLabel="High-Quality Content" />

    <GroupBox x={600} y={50} width={80} height={150} label="LLMs" labelPosition="top-right" />
    <ComponentBox x={610} y={80} width={60} height={35} label="GPT-4" color="#6366f1" />
    <TechLogo x={640} y={97} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openai/openai-original.svg" alt="OpenAI" size={20} />

    <ComponentBox x={610} y={125} width={60} height={35} label="Claude" color="#6366f1" />
    <TechLogo x={640} y={142} src="https://www.anthropic.com/_next/image?url=%2Fimages%2Ficons%2Ffeature-vivid.png&w=48&q=75" alt="Claude" size={20} />

    <ComponentBox x={610} y={170} width={60} height={35} label="Groq" color="#6366f1" />
    <TechLogo x={640} y={187} src="https://wow.groq.com/wp-content/uploads/2024/03/PBG-mark1-color.svg" alt="Groq" size={20} />

    <Arrow x1={570} y1={75} x2={610} y2={97} dashed={true} />
    <Arrow x1={570} y1={175} x2={610} y2={142} dashed={true} />
    <Arrow x1={570} y1={175} x2={610} y2={187} dashed={true} />
  </svg>
)

// Architecture diagram for AI Chatbots
export const ChatbotArchitecture: React.FC = () => (
  <svg viewBox="0 0 700 400" className="w-full h-auto">
    <ComponentBox x={30} y={50} width={150} height={60} label="User Interface" color="#ec4899" subLabel="Chat Interface" />
    <Arrow x1={105} y1={110} x2={105} y2={160} label="User Query" />

    <GroupBox x={20} y={160} width={320} height={180} label="Agentic Layer (LangGraph)" />
    <TechLogo x={330} y={175} src="https://python.langchain.com/img/brand/wordmark.png" alt="LangGraph" size={35} />

    <ServerBox x={40} y={190} width={130} label="Agent Router" color="#8b5cf6" />
    <TechLogo x={170} y={212} src="https://python.langchain.com/img/brand/wordmark.png" alt="LangChain" size={25} />

    <Arrow x1={105} y1={235} x2={105} y2={280} label="Route" />

    <ComponentBox x={40} y={280} width={90} height={45} label="Tool 1" color="#f59e0b" subLabel="API Calls" />
    <ComponentBox x={150} y={280} width={90} height={45} label="Tool 2" color="#f59e0b" subLabel="DB Query" />
    <ComponentBox x={260} y={280} width={90} height={45} label="Tool 3" color="#f59e0b" subLabel="Web Search" />

    <Arrow x1={170} y1={215} x2={85} y2={280} dashed={true} />
    <Arrow x1={170} y1={215} x2={195} y2={280} dashed={true} />
    <Arrow x1={170} y1={215} x2={305} y2={280} dashed={true} />

    <GroupBox x={370} y={50} width={160} height={130} label="LLM Inference" />
    <ServerBox x={390} y={85} width={120} label="Groq API" color="#3b82f6" />
    <TechLogo x={520} y={107} src="https://wow.groq.com/wp-content/uploads/2024/03/PBG-mark1-color.svg" alt="Groq" size={25} />

    <ComponentBox x={390} y={145} width={120} height={30} label="High-Speed LLMs" color="#6366f1" />

    <Arrow x1={170} y1={205} x2={390} y2={110} label="Context" />
    <Arrow x1={430} y1={110} x2={270} y2={205} label="Response" />

    <GroupBox x={560} y={50} width={130} height={180} label="External Services" />
    <ComponentBox x={575} y={90} width={100} height={35} label="APIs" color="#10b981" />
    <ComponentBox x={575} y={140} width={100} height={35} label="Databases" color="#10b981" />
    <ComponentBox x={575} y={190} width={100} height={35} label="Web" color="#10b981" />

    <Arrow x1={350} y1={305} x2={575} y2={107} dashed={true} />
    <Arrow x1={240} y1={305} x2={575} y2={157} dashed={true} />
    <Arrow x1={305} y1={305} x2={575} y2={207} dashed={true} />
  </svg>
)

// Architecture diagram for HomeMatch RAG
export const HomeMatchArchitecture: React.FC = () => (
  <svg viewBox="0 0 700 400" className="w-full h-auto">
    <ComponentBox x={30} y={50} width={150} height={60} label="User Query" color="#ec4899" subLabel="Natural Language" />
    <Arrow x1={105} y1={110} x2={105} y2={160} label="Search" />

    <GroupBox x={20} y={160} width={200} height={190} label="RAG Pipeline" />
    <ServerBox x={40} y={190} width={160} label="Query Processing" color="#8b5cf6" />
    <Arrow x1={120} y1={235} x2={120} y2={270} label="Embedding" />

    <ComponentBox x={40} y={270} width={160} height={50} label="Vector Search" color="#f59e0b" subLabel="Semantic Matching" />

    <GroupBox x={250} y={30} width={200} height={240} label="Vector Database" />
    <DatabaseIcon x={350} y={90} label="Pinecone" color="#3b82f6" />
    <TechLogo x={350} y={105} src="https://www.pinecone.io/_next/static/media/pinecone-logo.7dcc88fa.svg" alt="Pinecone" size={30} />

    <ComponentBox x={270} y={170} width={160} height={40} label="Property Embeddings" color="#6366f1" subLabel="Vector Index" />
    <ComponentBox x={270} y={225} width={160} height={35} label="Metadata" color="#10b981" subLabel="Filters" />

    <Arrow x1={200} y1={295} x2={270} y2={190} label="Query" />
    <Arrow x1={380} y1={190} x2={490} y2={190} label="Results" />

    <GroupBox x={480} y={30} width={200} height={320} label="Response Generation" />
    <ComponentBox x={495} y={70} width={170} height={50} label="Retrieved Docs" color="#10b981" subLabel="Top K Results" />
    <Arrow x1={580} y1={120} x2={580} y2={160} label="Context" />

    <ServerBox x={495} y={160} width={170} label="LangChain" color="#8b5cf6" />
    <TechLogo x={665} y={182} src="https://python.langchain.com/img/brand/wordmark.png" alt="LangChain" size={30} />

    <Arrow x1={580} y1={205} x2={580} y2={240} label="Generate" />

    <ComponentBox x={495} y={240} width={170} height={50} label="LLM (GPT-4)" color="#6366f1" subLabel="Contextualized" />
    <TechLogo x={665} y={265} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openai/openai-original.svg" alt="OpenAI" size={25} />

    <Arrow x1={580} y1={290} x2={580} y2={320} label="Response" />

    <ComponentBox x={495} y={320} width={170} height={25} label="Personalized Results" color="#ec4899" />
  </svg>
)
