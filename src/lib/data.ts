import { type LucideIcon } from 'lucide-react';

export type Skill = {
  name: string;
  proficiency: number;
  icon: LucideIcon | string;
};

export const SKILLS: Skill[] = [
  { name: 'React & Next.js', proficiency: 95, icon: 'Code' },
  { name: 'Node.js & Express', proficiency: 90, icon: 'Server' },
  { name: 'TypeScript', proficiency: 90, icon: 'Code' },
  { name: 'SQL & NoSQL', proficiency: 85, icon: 'Database' },
  { name: 'UI/UX Design', proficiency: 75, icon: 'BrainCircuit' },
  { name: 'DevOps (Docker, CI/CD)', proficiency: 80, icon: 'Server' },
];

export type Project = {
  title: string;
  description: string;
  imageId: string;
  liveUrl?: string;
  githubUrl?: string;
  tags: string[];
};

export const PROJECTS: Project[] = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce site with product management, shopping cart, and a secure checkout process. Built with Next.js and Stripe.',
    imageId: 'project-1',
    liveUrl: '#',
    githubUrl: '#',
    tags: ['React', 'Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
  },
  {
    title: 'Project Management Tool',
    description: 'A collaborative tool for teams to manage tasks, track progress, and communicate effectively. Real-time updates with WebSockets.',
    imageId: 'project-2',
    liveUrl: '#',
    githubUrl: '#',
    tags: ['React', 'Node.js', 'Socket.IO', 'MongoDB'],
  },
  {
    title: 'Personal Blog',
    description: 'A statically generated blog using Markdown for content creation. Optimized for performance and SEO with a clean, minimalist design.',
    imageId: 'project-3',
    githubUrl: '#',
    tags: ['Next.js', 'Markdown', 'Tailwind CSS', 'Vercel'],
  },
];

export type Recommendation = {
    text: string;
    author: string;
    role: string;
    avatarId: string;
};

export const RECOMMENDATIONS: Recommendation[] = [
    {
        text: "Alex is an incredibly talented developer. Their attention to detail and problem-solving skills are top-notch. A true asset to any team.",
        author: "Jane Smith",
        role: "Lead Engineer at TechCorp",
        avatarId: 'avatar-1',
    },
    {
        text: "Working with Alex was a pleasure. They have a remarkable ability to translate complex requirements into elegant, functional code.",
        author: "John Davis",
        role: "Product Manager at Innovate LLC",
        avatarId: 'avatar-2',
    },
    {
        text: "I was consistently impressed by Alex's dedication and technical expertise. They are a proactive and collaborative team player.",
        author: "Emily White",
        role: "Senior Developer at WebSolutions",
        avatarId: 'avatar-3',
    },
    {
        text: "Alex's contributions were invaluable to our project's success. Their code is clean, efficient, and well-documented.",
        author: "Michael Brown",
        role: "CTO at StartupX",
        avatarId: 'avatar-4',
    }
];