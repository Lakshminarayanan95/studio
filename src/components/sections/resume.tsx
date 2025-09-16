import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Download } from 'lucide-react';

export default function Resume() {
  return (
    <section id="resume" className="w-full py-16 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl font-bold">My Resume</h2>
          <p className="text-muted-foreground mt-2">Download my resume to learn more about my experience.</p>
        </div>
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Download Resume</CardTitle>
              <CardDescription>Click the button below to download a copy of my resume.</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Button asChild>
                <a href="/resume.pdf" download="LakshmiNarayanan-Resume.pdf">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
