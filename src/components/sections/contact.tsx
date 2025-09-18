import { Mail, Phone, MapPin } from 'lucide-react';
import ContactClient from './contact-client';

export default function Contact() {
  return (
    <section id="contact" className="w-full py-16 md:py-24 lg:py-32 border-t">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl font-bold">Get In Touch</h2>
          <p className="text-muted-foreground mt-2">I'm always open to discussing new projects, creative ideas, or opportunities.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="font-headline text-2xl font-semibold text-center md:text-left">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-accent text-accent-foreground p-3 rounded-full">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a href="mailto:kylakshminarayanan@gmail.com" className="text-muted-foreground hover:text-foreground break-all">
                    kylakshminarayanan@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-accent text-accent-foreground p-3 rounded-full">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <a href="tel:6383146427" className="text-muted-foreground hover:text-foreground">6383146427</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-accent text-accent-foreground p-3 rounded-full">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-muted-foreground">Tamil Nadu, India</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-headline text-2xl font-semibold mb-8 text-center md:text-left">Send Me a Message</h3>
            <ContactClient />
          </div>
        </div>
      </div>
    </section>
  );
}
