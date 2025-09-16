import { SKILLS } from '@/lib/data';
import SkillsClient from './skills-client';
import { Code, Server, Database, BrainCircuit, Github, Cloud } from 'lucide-react';

// This mapping is necessary because we can't pass functions from server to client components.
const iconMap: Record<string, React.FC<any>> = {
  Code,
  Server,
  Database,
  BrainCircuit,
  Github,
  Cloud,
};

export default function Skills() {

  const skillsWithIcons = SKILLS.map(skill => {
    // If icon is a function, find its name in iconMap
    if (typeof skill.icon === 'function') {
      const iconName = Object.keys(iconMap).find(key => iconMap[key] === skill.icon);
      return { ...skill, icon: iconName || 'Code' };
    }
    // Otherwise, it's already a string
    return { ...skill, icon: skill.icon as string };
  });

  return (
    <section id="skills" className="w-full py-16 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl font-bold">My Skills</h2>
          <p className="text-muted-foreground mt-2">A look at my technical capabilities.</p>
        </div>
        <SkillsClient skills={skillsWithIcons} />
      </div>
    </section>
  );
}
