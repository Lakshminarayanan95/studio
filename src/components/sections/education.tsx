import { EDUCATION } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl font-bold">Education</h2>
          <p className="text-muted-foreground mt-2">My academic background.</p>
        </div>
        <div className="max-w-3xl mx-auto space-y-8">
          {EDUCATION.map((edu) => (
            <Card key={`${edu.institution}-${edu.degree}`} className="overflow-hidden">
                <div className="flex items-center p-6">
                    <GraduationCap className="h-10 w-10 text-accent mr-6 flex-shrink-0" />
                    <div>
                        <CardTitle>{edu.institution}</CardTitle>
                        <CardDescription>{edu.degree} ({edu.year})</CardDescription>
                        <p className="text-sm font-semibold mt-1">{edu.grade}</p>
                    </div>
                </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
