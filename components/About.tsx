/**
 * About Component
 *
 * Professional summary section showcasing your expertise and highlights.
 *
 * Features:
 * - Professional summary paragraphs
 * - Core competencies badges
 * - Professional highlights list
 * - Two-column responsive layout
 */

'use client'

import { personalInfo } from '@/lib/data/personal'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-accent-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Summary */}
          <div className="space-y-6">
            <div className="space-y-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              {personalInfo.summary.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Professional Highlights */}
            <div className="pt-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Professional Highlights
              </h3>
              <ul className="space-y-3">
                {personalInfo.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-3 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Core Competencies */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Core Competencies
            </h3>

            {/* Competencies Grid */}
            <div className="grid grid-cols-1 gap-4">
              {personalInfo.coreCompetencies.map((competency, index) => (
                <a
                  key={index}
                  href="#skills"
                  className="group p-4 bg-gradient-to-r from-primary-50 to-accent-50 dark:from-gray-800 dark:to-gray-800 rounded-lg border-l-4 border-primary-600 dark:border-primary-400 hover:shadow-lg transition-all cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-gray-800 dark:text-gray-200 font-medium">
                      {competency}
                    </span>
                    <svg
                      className="w-5 h-5 text-primary-600 dark:text-primary-400 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                </a>
              ))}
            </div>

            {/* Stats Summary */}
            <div className="mt-8 p-6 bg-gradient-to-br from-primary-600 to-accent-500 rounded-lg text-white">
              <h4 className="text-xl font-semibold mb-4">Quick Stats</h4>
              <div className="grid grid-cols-2 gap-4">
                {personalInfo.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm opacity-90">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-6">
              <a
                href="#contact"
                className="block w-full text-center px-6 py-3 border-2 border-primary-600 dark:border-primary-400 text-primary-600 dark:text-primary-400 rounded-lg font-semibold hover:bg-primary-50 dark:hover:bg-gray-800 transition-all"
              >
                Let&apos;s Work Together
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
