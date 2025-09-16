import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-center">
          <div className="md:col-span-2">
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg mx-auto max-w-xs md:max-w-none">
              <Image
                src="/my-photo.jpg"
                alt="A professional portrait of Lakshmi Narayanan."
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-3 text-center md:text-left">
            <h2 className="font-headline text-4xl font-bold mb-4">About Me</h2>
            <h3 className="font-headline text-3xl font-semibold mb-4">Lakshmi Narayanan</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Computer Science undergraduate (Batch 2026) with a strong foundation in programming, data structures, algorithms, and database management systems. Skilled in Java, Python, and SQL, with academic projects demonstrating problem-solving and software development capabilities. 
              </p>
              <p>
                Knowledgeable in operating systems, computer networks, and SDLC methodologies including Agile. Quick learner with adaptability to new technologies such as cloud and web development. Strong analytical, communication, and teamwork skills, with flexibility to work across domains, locations, and emerging technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
