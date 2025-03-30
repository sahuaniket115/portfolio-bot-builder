
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, BookOpen, FileText } from 'lucide-react';

export function Research() {
  const publications = [
    {
      id: 1,
      title: "Advanced Techniques in Neural Network Optimization",
      conference: "International Conference on Machine Learning (ICML)",
      year: 2023,
      link: "https://example.com/publication1"
    },
    {
      id: 2,
      title: "Ethical Considerations in Generative AI Systems",
      conference: "ACM Conference on Fairness, Accountability, and Transparency (FAccT)",
      year: 2022,
      link: "https://example.com/publication2"
    },
    {
      id: 3,
      title: "Transfer Learning Approaches for Low-Resource Languages",
      conference: "Conference on Empirical Methods in Natural Language Processing (EMNLP)",
      year: 2022,
      link: "https://example.com/publication3"
    }
  ];

  return (
    <section id="research" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <div className="flex items-center justify-center gap-2 mb-4">
            <BookOpen className="h-8 w-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold">Research & Publications</h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Academic contributions to the field of artificial intelligence and machine learning
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {publications.map((publication) => (
            <Card key={publication.id}>
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl">{publication.title}</CardTitle>
                  <Badge>{publication.year}</Badge>
                </div>
                <p className="text-sm text-muted-foreground">{publication.conference}</p>
              </CardHeader>
              <CardContent className="flex justify-end pt-0">
                <a href={publication.link} target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="sm">
                    <FileText className="mr-2 h-4 w-4" />
                    Read Paper
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Research;
