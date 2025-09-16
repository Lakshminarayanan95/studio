'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Code2, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#resume', label: 'Resume' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Code2 className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline whitespace-pre-line text-sm leading-tight">
              Lakshmi Narayanan's{"\n"}Portfolio
            </span>
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="hidden md:flex items-center gap-4 text-sm border border-border/50 rounded-full px-3 py-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground/60 transition-all hover:text-foreground/80 hover:-translate-y-1 transform px-2"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center gap-2 ml-2 border border-border/50 rounded-full px-3 py-1">
              <Link href="https://github.com/Lakshminarayanan95" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transform transition-all hover:-translate-y-1">
                <Github className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
              </Link>
              <Link href="https://www.linkedin.com/in/lakshminarayananky" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transform transition-all hover:-translate-y-1">
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
              </Link>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="md:hidden px-2 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="p-4">
                <div className="flex justify-between items-center mb-8">
                  <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                    <Code2 className="h-6 w-6 text-primary" />
                    <span className="font-bold font-headline whitespace-pre-line text-sm leading-tight">
                      Lakshmi Narayanan's{"\n"}Portfolio
                    </span>
                  </Link>
                  <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium text-foreground/80 transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="flex items-center justify-center gap-4 pt-8 border-t border-border/50 mt-8">
                    <Link href="https://github.com/Lakshminarayanan95" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transform transition-all hover:-translate-y-1">
                      <Github className="h-6 w-6 text-muted-foreground hover:text-foreground transition-colors" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/lakshminarayananky" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transform transition-all hover:-translate-y-1">
                      <Linkedin className="h-6 w-6 text-muted-foreground hover:text-foreground transition-colors" />
                    </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
