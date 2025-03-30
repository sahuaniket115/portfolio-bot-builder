
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, GitHub, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden py-20 px-6">
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>
      </div>
      
      <div className="container mx-auto flex flex-col items-center text-center space-y-10 animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          <span className="text-foreground">Hi, I'm </span>
          <span className="text-primary">Alex Dev</span>
        </h1>
        
        <p className="text-xl md:text-2xl max-w-2xl text-muted-foreground">
          Full Stack Developer specialized in creating elegant, functional web applications with modern technologies
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <Button size="lg" className="gap-2" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            View My Work
          </Button>
          <Button size="lg" variant="outline" className="gap-2" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Get In Touch
          </Button>
        </div>
        
        <div className="flex gap-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Button variant="ghost" size="icon">
              <GitHub />
            </Button>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Button variant="ghost" size="icon">
              <Linkedin />
            </Button>
          </a>
          <a href="mailto:example@example.com" aria-label="Email">
            <Button variant="ghost" size="icon">
              <Mail />
            </Button>
          </a>
        </div>
        
        <a 
          href="#projects" 
          className="absolute bottom-10 animate-bounce" 
          aria-label="Scroll down"
        >
          <ChevronDown size={30} />
        </a>
      </div>
    </section>
  );
}

export default Hero;
