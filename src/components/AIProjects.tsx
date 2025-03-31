
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Bot, Sparkles } from 'lucide-react';

export function AIProjects() {
  const aiProjects = [
    {
      id: 1,
      title: "AI Image Generator",
      description: "A deep learning model that generates realistic images from text descriptions using stable diffusion techniques.",
      image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?q=80&w=1200&auto=format&fit=crop",
      tags: ["Python", "PyTorch", "CLIP", "Diffusion Models"],
      demoUrl: "https://demo.com/ai-image-gen",
      githubUrl: "https://github.com/alexdev/ai-image-gen",
    },
    {
      id: 2,
      title: "Sentiment Analysis API",
      description: "An NLP model that analyzes text for positive, negative, or neutral sentiment with 92% accuracy.",
      image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=1200&auto=format&fit=crop",
      tags: ["HuggingFace", "BERT", "FastAPI", "Docker"],
      demoUrl: "https://demo.com/sentiment-api",
      githubUrl: "https://github.com/alexdev/sentiment-analysis",
    },
    {
      id: 3,
      title: "Speech Recognition Engine",
      description: "A speech-to-text system built with deep learning that works effectively even in noisy environments.",
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=1200&auto=format&fit=crop",
      tags: ["TensorFlow", "Whisper", "WebAssembly", "JavaScript"],
      demoUrl: "https://demo.com/speech-engine",
      githubUrl: "https://github.com/alexdev/speech-recognition",
    }
  ];

  return (
    <section id="ai-projects" className="py-20 px-6 bg-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Bot className="h-8 w-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold">AI Research & Projects</h2>
            <Sparkles className="h-8 w-8 text-primary" />
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Exploring the frontiers of artificial intelligence through these cutting-edge projects
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>{project.title}</span>
                </CardTitle>
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

export default AIProjects;
