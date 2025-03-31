
import React from 'react';
import { cn } from '@/lib/utils';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 px-6 bg-secondary/30 border-t">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-lg font-bold text-primary">
              <span className="text-foreground">Dev</span>Portfolio
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              Crafting beautiful digital experiences.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <nav className="flex gap-6">
              <a href="#home" className="text-sm hover:text-primary transition-colors">Home</a>
              <a href="#projects" className="text-sm hover:text-primary transition-colors">Projects</a>
              <a href="#skills" className="text-sm hover:text-primary transition-colors">Skills</a>
              <a href="#contact" className="text-sm hover:text-primary transition-colors">Contact</a>
            </nav>
            
            <div className="flex gap-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="GitHub"
                className="hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn"
                className="hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Twitter"
                className="hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="mailto:example@example.com" 
                aria-label="Email"
                className="hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-border/30">
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} Alex Developer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
