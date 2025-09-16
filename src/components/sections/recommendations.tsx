import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { RECOMMENDATIONS } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Quote } from 'lucide-react';

export default function Recommendations() {
  return (
    <section id="recommendations" className="w-full py-16 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl font-bold">Recommendations</h2>
          <p className="text-muted-foreground mt-2">What others say about me.</p>
        </div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {RECOMMENDATIONS.map((rec, index) => {
              const avatarImage = PlaceHolderImages.find(p => p.id === rec.avatarId);
              return (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="h-full flex flex-col">
                      <CardContent className="flex flex-col items-center text-center p-6 flex-grow">
                        <Quote className="h-8 w-8 text-accent mb-4" />
                        <p className="text-muted-foreground italic mb-6 flex-grow">"{rec.text}"</p>
                        <div className="flex items-center flex-col">
                          {avatarImage && (
                            <Avatar className="h-16 w-16 mb-2">
                              <AvatarImage src={avatarImage.imageUrl} alt={avatarImage.description} data-ai-hint={avatarImage.imageHint} />
                              <AvatarFallback>{rec.author.charAt(0)}</AvatarFallback>
                            </Avatar>
                          )}
                          <p className="font-semibold">{rec.author}</p>
                          <p className="text-xs text-muted-foreground">{rec.role}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
