/**
 * Experience Component
 *
 * Professional work history displayed as a timeline.
 *
 * Features:
 * - Timeline layout with visual connector
 * - Company, role, dates
 * - Key achievements
 * - Tech stack badges
 * - Current role highlighted
 */

'use client'

import { useState } from 'react'
import { experiences } from '@/lib/data/experience'

export default function Experience() {
  const [expandedProjects, setExpandedProjects] = useState<{ [key: string]: number | null }>({})

  const toggleProject = (expId: string, projectIndex: number) => {
    setExpandedProjects(prev => ({
      ...prev,
      [expId]: prev[expId] === projectIndex ? null : projectIndex
    }))
  }
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Journey
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-accent-500 mx-auto"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary-200 dark:bg-primary-800"></div>

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative ${
                  index % 2 === 0 ? 'md:pr-1/2 md:pr-12' : 'md:pl-1/2 md:pl-12'
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:block absolute top-8 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary-600 dark:bg-primary-400 border-4 border-white dark:border-gray-800 z-10"></div>

                {/* Card */}
                <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg hover:shadow-2xl transition-shadow p-6 md:p-8">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between mb-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {exp.title}
                      </h3>
                      <div className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 font-semibold mb-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 mt-2 md:mt-0">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-gray-600 dark:text-gray-400">{exp.period}</span>
                      {exp.current && (
                        <span className="ml-2 px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm font-medium rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg
                            className="w-5 h-5 text-accent-500 mr-2 flex-shrink-0 mt-0.5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Detailed Projects Section */}
                  {exp.projects && exp.projects.length > 0 && (
                    <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Featured Projects
                      </h4>
                      <div className="space-y-4">
                        {exp.projects.map((project, projIdx) => (
                          <div
                            key={projIdx}
                            className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
                          >
                            {/* Project Header (Clickable) */}
                            <button
                              onClick={() => toggleProject(exp.id, projIdx)}
                              className="w-full p-4 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-750 transition-colors flex items-center justify-between"
                            >
                              <div className="text-left flex-1">
                                <h5 className="text-md font-semibold text-gray-900 dark:text-white mb-1">
                                  {project.name}
                                </h5>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                  {project.description}
                                </p>
                              </div>
                              <svg
                                className={`w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0 ml-4 transform transition-transform ${
                                  expandedProjects[exp.id] === projIdx ? 'rotate-180' : ''
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </button>

                            {/* Expanded Project Details */}
                            {expandedProjects[exp.id] === projIdx && (
                              <div className="p-6 bg-white dark:bg-gray-900 space-y-4">
                                {/* Architecture Sections */}
                                <div className="space-y-3">
                                  {Object.entries(project.architecture).map(([key, value]) => {
                                    if (!value) return null
                                    const titleMap: { [key: string]: string } = {
                                      dataIngestion: 'Data Ingestion',
                                      featureEngineering: 'Feature Engineering',
                                      datasetGeneration: 'Dataset Generation',
                                      modelTraining: 'Model Training',
                                      evaluation: 'Evaluation',
                                      deployment: 'Deployment',
                                      monitoring: 'Monitoring',
                                      experimentTracking: 'Experiment Tracking',
                                      cicd: 'CI/CD',
                                      observability: 'Observability'
                                    }
                                    // Split text by periods to create bullet points
                                    const sentences = value.split('. ').filter(s => s.trim().length > 0)

                                    return (
                                      <div key={key} className="border-l-2 border-accent-500 pl-4">
                                        <h6 className="text-sm font-semibold text-accent-600 dark:text-accent-400 mb-2">
                                          {titleMap[key] || key}
                                        </h6>
                                        <ul className="space-y-1">
                                          {sentences.map((sentence, idx) => (
                                            <li key={idx} className="flex items-start">
                                              <span className="text-accent-500 mr-2 flex-shrink-0">•</span>
                                              <span className="text-sm text-gray-700 dark:text-gray-300">
                                                {sentence.trim()}{sentence.endsWith('.') ? '' : '.'}
                                              </span>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    )
                                  })}
                                </div>

                                {/* Project Tech Stack */}
                                <div className="pt-4">
                                  <h6 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                    Tech Stack
                                  </h6>
                                  <div className="flex flex-wrap gap-2">
                                    {project.techStack.map((tech, techIdx) => (
                                      <span
                                        key={techIdx}
                                        className="px-2 py-1 bg-accent-100 dark:bg-accent-900 text-accent-700 dark:text-accent-300 rounded text-xs font-medium"
                                      >
                                        {tech}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
