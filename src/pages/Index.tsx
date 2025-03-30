
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AIProjects from '@/components/AIProjects';
import Projects from '@/components/Projects';
import Research from '@/components/Research';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Chatbot from '@/components/Chatbot';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AIProjects />
      <Research />
      <Projects />
      <Skills />
      <Chatbot />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
