import { Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Lakshmi Narayanan K Y. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link href="https://github.com/lakshminarayananky" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-6 w-6 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
            <Link href="https://www.linkedin.com/in/lakshminarayananky" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
