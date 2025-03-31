
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Send, Bot, User, ArrowDown, Sparkles, Database, Code } from 'lucide-react';
import { cn } from '@/lib/utils';

type Message = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
};

// Enhanced AI responses for the chatbot
const botResponses = [
  "Hello! I'm Alex's custom-trained AI assistant. How can I help you learn about my research and projects?",
  "I specialize in building AI systems with PyTorch, TensorFlow, and Hugging Face's transformers library. Would you like details on any specific technique?",
  "My latest research focuses on sparse attention mechanisms for efficient transformer models. You can read my paper in the Research section.",
  "I've developed several state-of-the-art models for NLP tasks including language understanding, text generation, and sentiment analysis.",
  "My approach to AI ethics centers on fairness, accountability, transparency, and explainability. See my publications for deeper insights.",
  "In my image generation project, I combined diffusion models with CLIP guidance to create visually coherent images from complex prompts.",
  "I've contributed to open-source AI projects including Hugging Face transformers and FastAI. Check my GitHub for code samples.",
  "My AI systems have been deployed in production environments using Docker, Kubernetes, and AWS SageMaker.",
  "I've implemented custom fine-tuning techniques to adapt large language models to specialized domains with limited training data.",
  "I built this portfolio chatbot using a custom-trained model that combines retrieval-augmented generation with a knowledge base about my work."
];

function getRandomResponse(): string {
  const randomIndex = Math.floor(Math.random() * botResponses.length);
  return botResponses[randomIndex];
}

export function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hello! I'm Alex's AI assistant trained on his work and research. How can I help you learn more about his AI projects or skills?",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom whenever messages change
  useEffect(() => {
    const scrollToBottom = () => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    scrollToBottom();
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: getRandomResponse(),
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <section id="chatbot" className="py-20 px-6 bg-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Bot className="h-8 w-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold">AI Assistant</h2>
            <Sparkles className="h-8 w-8 text-primary" />
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Chat with my custom-trained AI assistant about my research, projects, and expertise
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border shadow-lg overflow-hidden">
            <CardHeader className="bg-primary/10">
              <CardTitle className="flex items-center gap-2">
                <Bot className="h-5 w-5" />
                <span>Alex's Research Assistant</span>
                <div className="ml-2 flex items-center gap-1">
                  <Database className="h-3 w-3 text-muted-foreground" />
                  <Code className="h-3 w-3 text-muted-foreground" />
                </div>
              </CardTitle>
            </CardHeader>
            
            <div className="h-96">
              <ScrollArea className="h-full p-4" ref={scrollAreaRef}>
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={cn(
                      "mb-4 flex",
                      message.role === "user" ? "justify-end" : "justify-start"
                    )}
                  >
                    <div
                      className={cn(
                        "flex items-start gap-2 max-w-[80%]",
                        message.role === "user" ? "flex-row-reverse" : "flex-row"
                      )}
                    >
                      <div
                        className={cn(
                          "p-1.5 rounded-full",
                          message.role === "user" ? "bg-primary" : "bg-secondary"
                        )}
                      >
                        {message.role === "user" ? (
                          <User className="h-4 w-4" />
                        ) : (
                          <Bot className="h-4 w-4" />
                        )}
                      </div>
                      <div
                        className={cn(
                          "rounded-lg p-3",
                          message.role === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-secondary-foreground"
                        )}
                      >
                        <p className="text-sm">{message.content}</p>
                        <p className="text-[10px] mt-1 opacity-70">
                          {message.timestamp.toLocaleTimeString([], { 
                            hour: '2-digit', 
                            minute: '2-digit' 
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="mb-4 flex justify-start">
                    <div className="flex items-start gap-2 max-w-[80%]">
                      <div className="p-1.5 rounded-full bg-secondary">
                        <Bot className="h-4 w-4" />
                      </div>
                      <div className="rounded-lg p-3 bg-secondary text-secondary-foreground">
                        <div className="flex gap-1">
                          <span className="animate-bounce">●</span>
                          <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>●</span>
                          <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>●</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </ScrollArea>
            </div>
            
            <CardFooter className="border-t p-3">
              <form onSubmit={handleSubmit} className="flex w-full gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about my AI research and projects..."
                  className="flex-1"
                  disabled={isTyping}
                />
                <Button type="submit" size="icon" disabled={isTyping || !input.trim()}>
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Chatbot;
