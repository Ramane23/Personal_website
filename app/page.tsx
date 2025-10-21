/**
 * Main Page
 *
 * This is the home page that integrates all components.
 * It's a single-page application with all sections stacked vertically.
 *
 * Structure:
 * - Navigation (fixed at top)
 * - Hero
 * - About
 * - Experience
 * - Projects
 * - Skills
 * - Education
 * - Contact
 * - Footer
 */

'use client'

import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

// Disable static generation for this page
export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </main>
  )
}
