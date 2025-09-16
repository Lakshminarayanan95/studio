import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const aboutImage = PlaceHolderImages.find(p => p.id === 'about-image');

export default function About() {
  return (
    <section id="about" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl font-bold">About Me</h2>
          <p className="text-muted-foreground mt-2">A little bit about my background and journey.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-center">
          <div className="md:col-span-2">
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg mx-auto max-w-xs md:max-w-none">
              {aboutImage && (
                <Image
                  src={aboutImage.imageUrl}
                  alt={aboutImage.description}
                  fill
                  className="object-cover"
                  data-ai-hint={aboutImage.imageHint}
                />
              )}
            </div>
          </div>
          <div className="md:col-span-3">
            <h3 className="font-headline text-3xl font-semibold mb-4">Who I Am</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Hello! I'm a passionate and detail-oriented developer with a knack for turning complex problems into elegant, user-friendly solutions. My journey in tech began with a fascination for how things work, which quickly evolved into a full-fledged passion for coding and software architecture.
              </p>
              <p>
                Over the years, I've had the opportunity to work on a variety of projects, from dynamic e-commerce platforms to data-intensive web applications. I thrive in collaborative environments and am always eager to learn new technologies and methodologies to stay at the forefront of the industry.
              </p>
              <p>
                When I'm not coding, you can find me exploring the great outdoors, contributing to open-source projects, or experimenting with new recipes in the kitchen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
