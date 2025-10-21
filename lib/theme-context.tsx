/**
 * Theme Context for Dark Mode
 *
 * This file manages the dark/light mode state across the entire application.
 * Think of it like a global variable that any component can read and update.
 *
 * How it works:
 * 1. Creates a "context" (global state container)
 * 2. Provides a toggle function to switch themes
 * 3. Saves preference to browser localStorage
 * 4. Loads saved preference on page load
 */

'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

// Create the context (like creating a global variable)
const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

// Provider component that wraps your app
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark') // Default to dark mode
  const [mounted, setMounted] = useState(false)

  // Load saved theme on component mount
  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem('theme') as Theme | null
    if (savedTheme) {
      setTheme(savedTheme)
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setTheme(prefersDark ? 'dark' : 'light')
    }
  }, [])

  // Apply theme to document
  useEffect(() => {
    if (!mounted) return

    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    // Save to localStorage
    localStorage.setItem('theme', theme)
  }, [theme, mounted])

  // Toggle function
  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  // Prevent flash of wrong theme
  if (!mounted) {
    return <>{children}</>
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

// Custom hook to use theme context
// Usage in components: const { theme, toggleTheme } = useTheme()
export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    // Return default values to avoid errors
    // This can happen during initial render before ThemeProvider mounts
    return { theme: 'dark' as Theme, toggleTheme: () => {} }
  }
  return context
}
