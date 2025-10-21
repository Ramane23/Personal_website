/**
 * Education and Certifications Data
 *
 * Contains academic degrees and professional certifications.
 * Listed in reverse chronological order (most recent first).
 */

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  startDate: string;
  endDate: string;
  status: 'completed' | 'in-progress' | 'expected';
  description?: string;
  highlights?: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verificationUrl?: string;
  logo?: string;
  description?: string;
}

export const education: Education[] = [
  {
    id: 'udacity-genai',
    degree: 'Generative AI Nanodegree',
    institution: 'Udacity',
    period: 'December 2024 - May 2025',
    startDate: '2024-12',
    endDate: '2025-05',
    status: 'in-progress',
    description: 'Advanced program focusing on generative AI, LLMs, and practical applications'
  },
  {
    id: 'wqu-applied-ai',
    degree: 'Applied AI Lab',
    institution: 'WorldQuant University',
    period: 'December 2024 - Present',
    startDate: '2024-12',
    endDate: 'Present',
    status: 'in-progress',
    description: 'Hands-on AI development and deployment'
  },
  {
    id: 'erau-aviation',
    degree: 'Graduate Certificate in Aviation & Aerospace',
    institution: 'Embry-Riddle Aeronautical University',
    period: 'May 2023 - March 2025',
    startDate: '2023-05',
    endDate: '2025-03',
    status: 'expected',
    description: 'Specialized program in aerospace engineering and aviation systems'
  },
  {
    id: 'mit-stats',
    degree: 'MicroMasters in Statistics & Data Science',
    institution: 'MITx (edX)',
    period: 'December 2022 - January 2024',
    startDate: '2022-12',
    endDate: '2024-01',
    status: 'completed',
    description: 'Graduate-level program covering probability, statistics, machine learning, and data analysis',
    highlights: ['Bayesian Inference', 'Statistical Modeling', 'Machine Learning']
  },
  {
    id: 'wqu-data-science',
    degree: 'Applied Data Science Lab',
    institution: 'WorldQuant University',
    period: 'September 2022 - June 2023',
    startDate: '2022-09',
    endDate: '2023-06',
    status: 'completed',
    description: 'Practical data science projects and applications'
  },
  {
    id: 'isae-master',
    degree: 'Advanced Master in Aerospace Project Management',
    institution: 'ISAE-SUPAERO / ENAC',
    period: 'September 2021 - October 2022',
    startDate: '2021-09',
    endDate: '2022-10',
    status: 'completed',
    description: 'Specialized program in aerospace project management and engineering leadership',
    highlights: ['Project Management', 'Systems Engineering', 'Aerospace Industry']
  },
  {
    id: 'esat-engineering',
    degree: 'Aeronautical Engineering',
    institution: 'ESAT University',
    period: 'September 2016 - July 2021',
    startDate: '2016-09',
    endDate: '2021-07',
    status: 'completed',
    description: 'Bachelor\'s degree in Aeronautical Engineering',
    highlights: ['Engineering Fundamentals', 'Aerospace Systems', 'Technical Analysis']
  }
];

export const certifications: Certification[] = [
  {
    id: 'aws-ml-specialty',
    name: 'AWS Certified Machine Learning - Specialty',
    issuer: 'Amazon Web Services',
    date: '2023',
    description: 'Validates expertise in building, training, tuning, and deploying ML models on AWS',
    logo: '/images/certifications/aws-ml.png'
  },
  {
    id: 'aws-cloud-practitioner',
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: '2022',
    description: 'Foundational understanding of AWS Cloud services and architecture',
    logo: '/images/certifications/aws-cp.png'
  },
  {
    id: 'agile-scrum',
    name: 'Agile Scrum Certification',
    issuer: 'Scrum Alliance / PMI',
    date: '2022',
    description: 'Professional certification in Agile methodologies and Scrum framework',
    logo: '/images/certifications/scrum.png'
  }
];

// Helper functions
export const getInProgressEducation = () =>
  education.filter(edu => edu.status === 'in-progress');

export const getCompletedEducation = () =>
  education.filter(edu => edu.status === 'completed');

export const getEducationSorted = () =>
  [...education].sort((a, b) => b.startDate.localeCompare(a.startDate));
