import { CERTIFICATIONS } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award } from 'lucide-react';

export default function Certifications() {
  return (
    <section id="certifications" className="w-full py-16 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl font-bold">Certifications</h2>
          <p className="text-muted-foreground mt-2">My professional certifications.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CERTIFICATIONS.map((cert) => (
            <Card key={cert.name} className="flex flex-col">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="pr-4">{cert.name}</CardTitle>
                  <Award className="h-8 w-8 text-accent flex-shrink-0" />
                </div>
                <CardDescription>{cert.issuer} - <Badge variant="secondary">{cert.date}</Badge></CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground text-sm">{cert.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
