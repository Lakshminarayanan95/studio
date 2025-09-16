import { type LucideIcon } from 'lucide-react';
import { PythonIcon } from '@/components/icons/python-icon';

export type Skill = {
  name: string;
  icon: LucideIcon | string | React.FC<React.SVGProps<SVGSVGElement>>;
};

export const SKILLS: Skill[] = [
  { name: 'Python', icon: 'Code' },
  { name: 'Java', icon: 'Code' },
  { name: 'SQL', icon: 'Database' },
  { name: 'Git & GitHub', icon: 'Github' },
  { name: 'Data Structures & Algorithms', icon: 'BrainCircuit' },
  { name: 'HTML', icon: 'Code' },
  { name: 'CSS', icon: 'Code' },
  { name: 'JavaScript', icon: 'Code' },
  { name: 'Cloud Computing', icon: 'Cloud' },
  { name: 'AI/ML', icon: 'BrainCircuit' },
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
    title: 'Financial Fraud Detection',
    description: 'A Python system to identify fraudulent bank transactions. Scaled essential features and preprocessed data for model training.',
    imageId: 'project-1',
    githubUrl: '#',
    tags: ['Python', 'Machine Learning', 'Pandas', 'NumPy', 'Scikit-learn'],
  },
  {
    title: 'Drowsiness Detection System',
    description: 'A system that analyzes eye states in real time to identify driver drowsiness using a Convolutional Neural Network (CNN).',
    imageId: 'project-2',
    githubUrl: '#',
    tags: ['Python', 'Deep Learning', 'OpenCV', 'TensorFlow', 'Keras'],
  },
  {
    title: 'WeatherSense Forecasting System',
    description: 'An AI-powered live weather forecasting system. Presented as a paper at an international conference and won the Best Paper Award.',
    imageId: 'project-3',
    githubUrl: '#',
    tags: ['Python', 'AI', 'Paper Presentation', 'Award Winning'],
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
        text: "An incredibly talented developer. Their attention to detail and problem-solving skills are top-notch. A true asset to any team.",
        author: "Jane Smith",
        role: "Lead Engineer at TechCorp",
        avatarId: 'avatar-1',
    },
    {
        text: "Working with them was a pleasure. They have a remarkable ability to translate complex requirements into elegant, functional code.",
        author: "John Davis",
        role: "Product Manager at Innovate LLC",
        avatarId: 'avatar-2',
    },
    {
        text: "I was consistently impressed by their dedication and technical expertise. They are a proactive and collaborative team player.",
        author: "Emily White",
        role: "Senior Developer at WebSolutions",
        avatarId: 'avatar-3',
    },
    {
        text: "Their contributions were invaluable to our project's success. Their code is clean, efficient, and well-documented.",
        author: "Michael Brown",
        role: "CTO at StartupX",
        avatarId: 'avatar-4',
    }
];

export type Education = {
  institution: string;
  degree: string;
  year: string;
  grade: string;
}

export const EDUCATION: Education[] = [
  {
    institution: 'SRM Institute of Science and Technology, Ramapuram',
    degree: 'Bachelor of Technology in Information Technology',
    year: '2022 – 2026',
    grade: '7.7 CGPA'
  },
  {
    institution: 'Ponnaiyah Ramajayam Higher Secondary School',
    degree: 'Class XII',
    year: '2021 – 2022',
    grade: '68%'
  },
  {
    institution: 'Ponnaiyah Ramajayam Higher Secondary School',
    degree: 'Class X',
    year: '2019 – 2020',
    grade: '72%'
  }
];

export type Certification = {
  name: string;
  issuer: string;
  date: string;
  description: string;
}

export const CERTIFICATIONS: Certification[] = [
  {
    name: 'AWS Cloud Practitioner Essentials',
    issuer: 'Amazon Web Services',
    date: 'May 2024',
    description: 'Learned the basics of cloud computing with AWS, including how cloud storage, servers, and security work use AWS for scalable and cost-efficient solutions.'
  },
  {
    name: 'Python Certification',
    issuer: 'Scaler Topics',
    date: 'May 2024',
    description: 'Built a strong foundation in Python programming, covering core concepts such as data types, control structures, functions, and OOPs.'
  },
  {
    name: 'Artificial Intelligence with Python',
    issuer: 'Coincent.ai',
    date: 'Jul 2024',
    description: 'Hands-on exposure to AI concepts and machine learning model building using Python.'
  }
];
