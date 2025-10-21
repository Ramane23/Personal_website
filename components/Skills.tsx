/**
 * Skills Component
 *
 * Tabbed interface displaying technical skills organized by ML workflow stages.
 *
 * Features:
 * - 8 tabs for different skill categories
 * - Icon for each category
 * - Grouped skills display
 * - Responsive tab layout
 * - Active tab highlighting
 */

'use client'

import { useState } from 'react'
import { skillCategories } from '@/lib/data/skills'

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-accent-500 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Comprehensive skillset spanning the entire ML/AI lifecycle from data ingestion to production deployment
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="mb-8">
          {/* Desktop Tabs */}
          <div className="hidden lg:flex flex-wrap justify-center gap-2">
            {skillCategories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === index
                    ? 'bg-gradient-to-r from-primary-600 to-accent-500 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">{category.icon}</span>
                  <span className="hidden xl:inline">{category.title}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Mobile Dropdown */}
          <div className="lg:hidden">
            <select
              value={activeTab}
              onChange={(e) => setActiveTab(Number(e.target.value))}
              className="w-full px-4 py-3 bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:border-primary-600"
            >
              {skillCategories.map((category, index) => (
                <option key={category.id} value={index}>
                  {category.icon} {category.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl p-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.id}
              className={activeTab === index ? 'block' : 'hidden'}
            >
              {/* Category Header */}
              <div className="mb-8">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-4xl">{category.icon}</span>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  {category.description}
                </p>
              </div>

              {/* Skills Groups */}
              <div className="grid md:grid-cols-2 gap-6">
                {category.skills.map((skillGroup, idx) => (
                  <div
                    key={idx}
                    className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-lg border border-gray-200 dark:border-gray-600"
                  >
                    <h4 className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-4">
                      {skillGroup.name}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((item, itemIdx) => (
                        <span
                          key={itemIdx}
                          className="px-3 py-1.5 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium shadow-sm border border-gray-200 dark:border-gray-700 hover:border-primary-400 dark:hover:border-primary-600 hover:shadow-md transition-all"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-12 p-8 bg-gradient-to-r from-primary-600 to-accent-500 rounded-lg text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">End-to-End ML/AI Expertise</h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              From data ingestion with Kafka and PySpark, through model training with PyTorch and TensorFlow,
              to production deployment on AWS with Docker and Kubernetes. Complete MLOps/LLMOps pipeline experience
              including GenAI, RAG, and multi-agent systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
