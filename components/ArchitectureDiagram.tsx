/**
 * Architecture Diagram Component
 *
 * Renders interactive architecture diagrams for ML/AI projects
 * using React Flow with custom styled nodes.
 */

'use client'

import { useCallback, useMemo } from 'react'
import ReactFlow, {
  Node,
  Edge,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  MarkerType,
  Position,
} from 'reactflow'
import 'reactflow/dist/style.css'

export interface DiagramNode {
  id: string
  label: string
  type?: 'process' | 'database' | 'service' | 'tool' | 'group'
  color?: string
  logo?: string
  description?: string
}

export interface DiagramEdge {
  from: string
  to: string
  label?: string
}

export interface ArchitectureDiagramProps {
  nodes: DiagramNode[]
  edges: DiagramEdge[]
  title?: string
  height?: string
}

// Custom node styles based on type
const getNodeStyle = (type: string = 'process', color?: string) => {
  const baseStyle = {
    padding: '12px 20px',
    borderRadius: '8px',
    border: '2px solid',
    fontSize: '13px',
    fontWeight: 600,
    minWidth: '140px',
    textAlign: 'center' as const,
  }

  const typeStyles: { [key: string]: any } = {
    process: {
      ...baseStyle,
      background: color || '#FCD34D',
      borderColor: color || '#F59E0B',
      color: '#1F2937',
    },
    database: {
      ...baseStyle,
      background: color || '#E5E7EB',
      borderColor: color || '#9CA3AF',
      color: '#1F2937',
      borderRadius: '12px',
    },
    service: {
      ...baseStyle,
      background: color || '#93C5FD',
      borderColor: color || '#3B82F6',
      color: '#1F2937',
    },
    tool: {
      ...baseStyle,
      background: color || '#FCA5A5',
      borderColor: color || '#EF4444',
      color: '#1F2937',
    },
    group: {
      ...baseStyle,
      background: color || '#F3F4F6',
      borderColor: color || '#D1D5DB',
      color: '#6B7280',
      borderStyle: 'dashed',
    },
  }

  return typeStyles[type] || typeStyles.process
}

export default function ArchitectureDiagram({
  nodes: inputNodes,
  edges: inputEdges,
  title,
  height = '500px',
}: ArchitectureDiagramProps) {
  // Convert input nodes to React Flow nodes
  const initialNodes: Node[] = useMemo(() => {
    return inputNodes.map((node, index) => ({
      id: node.id,
      data: {
        label: (
          <div className="flex flex-col items-center gap-1">
            {node.logo && (
              <div className="text-xs opacity-70 mb-1">{node.logo}</div>
            )}
            <div>{node.label}</div>
            {node.description && (
              <div className="text-xs opacity-70 mt-1">{node.description}</div>
            )}
          </div>
        )
      },
      position: {
        x: (index % 4) * 250,
        y: Math.floor(index / 4) * 150
      },
      style: getNodeStyle(node.type, node.color),
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
    }))
  }, [inputNodes])

  // Convert input edges to React Flow edges
  const initialEdges: Edge[] = useMemo(() => {
    return inputEdges.map((edge, index) => ({
      id: `edge-${index}`,
      source: edge.from,
      target: edge.to,
      label: edge.label,
      labelStyle: { fill: '#6B7280', fontSize: 11, fontWeight: 600 },
      labelBgStyle: { fill: '#F9FAFB', fillOpacity: 0.9 },
      animated: true,
      style: { stroke: '#9CA3AF', strokeWidth: 2 },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: '#9CA3AF',
      },
    }))
  }, [inputEdges])

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  return (
    <div className="w-full">
      {title && (
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          {title}
        </h3>
      )}
      <div
        className="border-2 border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-gray-50 dark:bg-gray-900"
        style={{ height }}
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          fitView
          attributionPosition="bottom-left"
        >
          <Background color="#D1D5DB" gap={16} />
          <Controls className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded" />
          <MiniMap
            nodeColor={(node) => {
              const style = node.style as any
              return style?.borderColor || '#9CA3AF'
            }}
            className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded"
          />
        </ReactFlow>
      </div>
      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
        💡 Drag nodes to rearrange • Scroll to zoom • Click controls to navigate
      </p>
    </div>
  )
}
