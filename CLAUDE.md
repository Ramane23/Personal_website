# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a portfolio website for Souleymane Saidou Abouba, an AI/ML Engineer specializing in MLOps/LLMOps. The site showcases professional experience, projects, skills, and certifications.

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Analytics**: Vercel Analytics (optional)

## Development Commands

Once the project is initialized, these commands will be available:

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Type checking
npx tsc --noEmit
```

## Project Architecture

### Directory Structure

The project follows Next.js 14 App Router conventions:

```
src/
├── app/                    # Next.js app router pages
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Home page (single-page app)
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Navigation.tsx     # Fixed header navigation
│   ├── Hero.tsx          # Landing section
│   ├── About.tsx         # About section
│   ├── Experience.tsx    # Professional timeline
│   ├── Projects.tsx      # Featured projects grid
│   ├── Skills.tsx        # Technical skills organized by workflow
│   ├── Education.tsx     # Education & certifications
│   ├── Contact.tsx       # Contact section
│   └── Footer.tsx        # Footer with links
└── lib/
    ├── data/             # Content data files
    │   ├── projects.ts   # Project information
    │   ├── experience.ts # Work experience
    │   ├── skills.ts     # Skills by category
    │   └── education.ts  # Education & certifications
    └── utils.ts          # Utility functions
```

### Data Structure

All content is separated from components using TypeScript data files in `src/lib/data/`. This makes updates easy without touching component code.

**Key Interfaces:**

```typescript
// Project data structure
interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  metrics?: { label: string; value: string; }[];
  links: { github?: string; live?: string; };
  category: 'GenAI' | 'MLOps' | 'Agentic AI' | 'RAG' | 'Real-time ML';
}

// Experience data structure
interface Experience {
  company: string;
  title: string;
  period: string;
  location: string;
  achievements: string[];
  techStack: string[];
}
```

### Design System

- **Theme**: Dark mode by default with light mode toggle
- **Colors**: Deep blue/purple gradient with electric blue accents
- **Typography**: Inter for headings/body, JetBrains Mono for code
- **Responsive**: Mobile-first approach (320px to 1440px+)
- **Accessibility**: WCAG 2.1 AA compliant

## Key Implementation Requirements

### Performance Targets
- Lighthouse score: 90+ on all metrics
- Page load time: < 2 seconds
- Optimized images (lazy loading, Next.js Image component)
- Minimal JavaScript bundle size

### SEO Requirements
- All pages must have meta tags (title, description, OG tags)
- Semantic HTML throughout
- Structured data (JSON-LD) for personal/professional schema
- Include sitemap.xml and robots.txt

### Content Organization

The site is a single-page application with the following sections (in order):
1. Navigation (fixed header)
2. Hero/Home section with CTA
3. About section (professional summary)
4. Experience timeline (2 positions: Akkodis Research, Liebherr Aerospace)
5. Featured Projects (4 main projects from GitHub)
6. Skills (organized by ML/AI workflow stages - 8 tabs)
7. Education & Certifications
8. Contact section
9. Footer

### Critical Contact Information
- Email: contactsouley@gmail.com
- LinkedIn: linkedin.com/in/souleymane-saidou-abouba-1b49891a9
- GitHub: github.com/Ramane23
- Phone: +33 749099636
- Location: Toulouse, France

## Project-Specific Conventions

### Component Development
- Use TypeScript for all components (strict mode enabled)
- Prefer server components by default; only use "use client" when necessary
- Extract reusable UI elements into separate component files
- Keep components focused on presentation; data lives in `lib/data/`

### Styling Approach
- Use Tailwind CSS utility classes
- Define custom colors in `tailwind.config.js`
- Mobile-first responsive design (use `sm:`, `md:`, `lg:` breakpoints)
- Dark mode via `dark:` variants

### Animation Guidelines
- Use subtle animations (fade-in on scroll, hover effects)
- Consider Framer Motion for complex animations
- Use Intersection Observer for scroll-triggered effects
- Avoid excessive animation that impacts performance

## Content Updates

To update portfolio content, edit the data files in `src/lib/data/`:
- **Projects**: Add/modify projects in `projects.ts`
- **Experience**: Update work history in `experience.ts`
- **Skills**: Organize tech stack in `skills.ts` (by ML workflow stage)
- **Education**: Degrees and certifications in `education.ts`

## Deployment

### Vercel Deployment
1. Push to GitHub repository
2. Import project in Vercel
3. Vercel auto-detects Next.js configuration
4. Deploy (automatic on push to main branch)

### Environment Variables
```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id (optional)
```

## Future Enhancements

See README.md "Post-Launch Enhancements" for planned features:
- Phase 2: Blog section with MDX, project case studies
- Phase 3: Multi-language support (FR/EN)
- Phase 4: Search functionality, advanced filtering

## Important Notes

- The CV file should be placed in `public/cv/Souleymane_Saidou_Abouba_CV.pdf`
- Profile image and project screenshots go in `public/images/`
- All external links (GitHub projects) should open in new tabs
- Contact form (if implemented) should use Formspree or Email.js
- Maintain high contrast ratios for accessibility (WCAG AA)
