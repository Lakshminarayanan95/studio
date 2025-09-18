import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="hero" className="w-full py-20 lg:py-32 bg-gradient-to-br from-background to-secondary/50">
      <div className="container mx-auto text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
            Crafting<br />Digital<br />Experiences
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm Lakshmi Narayanan, a passionate software developer.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
