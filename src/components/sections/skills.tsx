import { SKILLS } from '@/lib/data';
import SkillsClient from './skills-client';
import { Code, Server, Database, BrainCircuit } from 'lucide-react';

// This mapping is necessary because we can't pass functions from server to client components.
const iconMap = {
  Code,
  Server,
  Database,
  BrainCircuit,
};

export default function Skills() {

  const skillsWithIcons = SKILLS.map(skill => ({
    ...skill,
    icon: typeof skill.icon === 'string' ? skill.icon : 'Code' // Keep icon as string name
  }));

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