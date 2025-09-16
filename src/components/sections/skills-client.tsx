'use client';

import { useState, useTransition, createElement } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { generateSkillSummaries, GenerateSkillSummariesInput } from '@/ai/flows/generate-skill-summaries';
import { Sparkles, type LucideIcon } from 'lucide-react';
import * as icons from 'lucide-react';
import type { Skill } from '@/lib/data';

interface SkillsClientProps {
  skills: Skill[];
}

export default function SkillsClient({ skills }: SkillsClientProps) {
  const [summaries, setSummaries] = useState<Record<string, string>>({});
  const [isPending, startTransition] = useTransition();

  const handleGenerateSummaries = () => {
    startTransition(async () => {
      const skillNames = skills.map(s => s.name);
      const input: GenerateSkillSummariesInput = { skills: skillNames };
      try {
        const result = await generateSkillSummaries(input);
        const newSummaries = result.summaries.reduce((acc, summary, index) => {
          acc[skillNames[index]] = summary;
          return acc;
        }, {} as Record<string, string>);
        setSummaries(newSummaries);
      } catch (error) {
        console.error('Failed to generate skill summaries:', error);
        // Optionally, show a toast notification for the error
      }
    });
  };

  return (
    <div>
      <div className="flex justify-center mb-12">
        <Button onClick={handleGenerateSummaries} disabled={isPending}>
          <Sparkles className="mr-2 h-4 w-4" />
          {isPending ? 'Generating Summaries...' : 'Generate Summaries with AI'}
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill) => {
          const Icon = typeof skill.icon === 'string' 
            ? (icons as Record<string, LucideIcon>)[skill.icon] 
            : skill.icon as React.FC<any>; // Allow custom SVG components

          return (
            <Card key={skill.name}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  {Icon && createElement(Icon, { className: "h-6 w-6 text-accent"})}
                  <span>{skill.name}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {summaries[skill.name] && (
                    <div className="p-3 bg-secondary rounded-md">
                      <p className="text-sm text-secondary-foreground">{summaries[skill.name]}</p>
                    </div>
                  )}
                  {isPending && !summaries[skill.name] && (
                    <div className="p-3 bg-secondary rounded-md animate-pulse">
                      <div className="h-12 w-full bg-muted rounded-md"></div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  );
}
