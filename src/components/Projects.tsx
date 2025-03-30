
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  category: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with product catalog, shopping cart, and payment processing.",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    demoUrl: "https://demo.com",
    githubUrl: "https://github.com",
    category: "web"
  },
  {
    id: 2,
    title: "AI Task Manager",
    description: "A task management app that uses AI to prioritize and organize your tasks for optimal productivity.",
    image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    tags: ["React Native", "TensorFlow", "Firebase"],
    demoUrl: "https://demo.com",
    githubUrl: "https://github.com",
    category: "mobile"
  },
  {
    id: 3,
    title: "Smart Home Dashboard",
    description: "A centralized dashboard for controlling and monitoring all your smart home devices.",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    tags: ["Vue.js", "D3.js", "IoT", "WebSockets"],
    demoUrl: "https://demo.com",
    githubUrl: "https://github.com",
    category: "web"
  },
  {
    id: 4,
    title: "Augmented Reality Game",
    description: "An AR game that transforms your surroundings into an interactive gaming environment.",
    image: "https://images.unsplash.com/photo-1616161560597-1bba48507dd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    tags: ["Unity", "ARKit", "C#"],
    demoUrl: "https://demo.com",
    githubUrl: "https://github.com",
    category: "mobile"
  },
  {
    id: 5,
    title: "AI Chatbot Framework",
    description: "A customizable framework for creating intelligent chatbots for websites and applications.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1506&q=80",
    tags: ["Python", "TensorFlow", "NLP", "API"],
    demoUrl: "https://demo.com",
    githubUrl: "https://github.com",
    category: "ai"
  },
  {
    id: 6,
    title: "Blockchain Voting System",
    description: "A secure voting system built on blockchain technology to ensure transparency and integrity.",
    image: "https://images.unsplash.com/photo-1639322537504-6427a16b0a28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
    tags: ["Solidity", "Ethereum", "Web3.js", "React"],
    demoUrl: "https://demo.com",
    githubUrl: "https://github.com",
    category: "blockchain"
  }
];

const filters = [
  { value: "all", label: "All" },
  { value: "web", label: "Web" },
  { value: "mobile", label: "Mobile" },
  { value: "ai", label: "AI" },
  { value: "blockchain", label: "Blockchain" }
];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  
  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my recent work across different domains and technologies
          </p>
        </div>
        
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.value}
              variant={activeFilter === filter.value ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.value)}
              className="capitalize"
            >
              {filter.label}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.tags.length - 3}
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="line-clamp-3">
                  {project.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between">
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="View GitHub repository">
                    <Button variant="ghost" size="sm">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                  </a>
                )}
                {project.demoUrl && (
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" aria-label="View live demo">
                    <Button size="sm">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  </a>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
