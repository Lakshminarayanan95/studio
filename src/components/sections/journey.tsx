import { EXPERIENCE } from '@/lib/data';
import { Briefcase } from 'lucide-react';

export default function Journey() {
  return (
    <section id="journey" className="w-full py-16 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl font-bold">My Journey</h2>
          <p className="text-muted-foreground mt-2">A timeline of my professional and academic experiences.</p>
        </div>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border"></div>
          {EXPERIENCE.map((exp, index) => (
            <div key={index} className="relative mb-12">
              <div className="flex items-center">
                <div className={`relative z-10 flex-shrink-0 w-24 text-right pr-6`}>
                  <p className="font-semibold text-muted-foreground">{exp.period}</p>
                </div>
                <div className="relative z-10">
                  <div className="absolute top-1/2 -translate-y-1/2 -left-3.5 h-7 w-7 bg-primary rounded-full flex items-center justify-center ring-8 ring-secondary/50">
                    <Briefcase className="h-4 w-4 text-primary-foreground" />
                  </div>
                </div>
                <div className="ml-8 bg-card p-6 rounded-lg shadow-md w-full">
                  <h3 className="font-bold text-lg">{exp.role}</h3>
                  <p className="text-accent mb-2">{exp.company}</p>
                  <p className="text-muted-foreground text-sm">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
