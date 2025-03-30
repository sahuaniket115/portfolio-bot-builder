
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Send, Bot, User, ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';

type Message = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
};

// Mock AI responses for the chatbot
const botResponses = [
  "Hello! I'm Alex's AI assistant. How can I help you learn about their skills and projects?",
  "Alex specializes in full-stack development with a focus on React, TypeScript, and Node.js.",
  "You can see examples of Alex's work in the Projects section above. The E-Commerce Platform project demonstrates their full-stack capabilities.",
  "Alex has 5 years of professional experience working with startups and enterprise clients.",
  "Alex's most recent project was an AI-powered task management application that uses machine learning for task prioritization.",
  "Yes, Alex is available for freelance work and consulting. You can use the contact form to discuss your project.",
  "Alex has experience with React, TypeScript, Node.js, MongoDB, PostgreSQL, AWS, and Docker, among other technologies.",
  "Alex graduated with a Computer Science degree from MIT and has also completed specialized courses in machine learning and UX design.",
  "The best way to contact Alex is through the contact form on this website or via email at alex.dev@example.com.",
  "The portfolio site you're currently browsing was built using React, TypeScript, and Tailwind CSS."
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
      content: "Hi there! I'm Alex's virtual assistant. How can I help you today?",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Chat with My AI Assistant</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions about my skills, projects, or availability? My AI assistant can help!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border shadow-lg overflow-hidden">
            <CardHeader className="bg-primary/10">
              <CardTitle className="flex items-center gap-2">
                <Bot className="h-5 w-5" />
                AI Assistant
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
                  placeholder="Type your message..."
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
