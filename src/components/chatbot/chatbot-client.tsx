'use client';

import { useState, useRef, useEffect, useTransition } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MessageCircle, X, Send, Bot, User, Loader } from 'lucide-react';
import { postMessage } from '@/app/actions';
import type { ChatHistory } from '@/ai/flows/chat-flow';
import { cn } from '@/lib/utils';

export default function ChatbotClient() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatHistory>([]);
  const [input, setInput] = useState('');
  const [isPending, startTransition] = useTransition();
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessages: ChatHistory = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');
    
    startTransition(async () => {
      try {
        const stream = await postMessage(newMessages);
        let assistantResponse = '';
        
        // Add a placeholder for the assistant's message
        setMessages(prev => [...prev, { role: 'model', content: '' }]);

        for await (const chunk of stream) {
          assistantResponse += chunk;
          setMessages(prev => {
            const lastMessage = prev[prev.length -1];
            if(lastMessage.role === 'model') {
              lastMessage.content = assistantResponse;
              return [...prev.slice(0, -1), lastMessage];
            }
            return prev;
          });
        }
      } catch (error) {
        console.error('Error streaming response:', error);
        setMessages(prev => [
          ...prev,
          {
            role: 'model',
            content: 'Sorry, something went wrong. Please try again.',
          },
        ]);
      }
    });
  };

  return (
    <>
      <div className="fixed bottom-4 right-4 z-50">
        <Button onClick={handleToggle} size="icon" className="rounded-full h-14 w-14 bg-primary hover:bg-primary/90 shadow-lg">
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </Button>
      </div>

      {isOpen && (
        <div className="fixed bottom-20 right-4 z-50">
          <Card className="w-80 h-[28rem] flex flex-col shadow-2xl">
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="flex items-center gap-2">
                <Bot className="h-6 w-6 text-primary"/>
                <CardTitle>Portfolio Assistant</CardTitle>
              </div>
              <p className="text-xs text-muted-foreground">Powered by Gemini</p>
            </CardHeader>
            <CardContent className="flex-1 overflow-hidden p-0">
              <ScrollArea className="h-full p-4" ref={scrollAreaRef}>
                <div className="space-y-4">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={cn(
                        'flex gap-2 text-sm',
                        message.role === 'user' ? 'justify-end' : 'justify-start'
                      )}
                    >
                      {message.role === 'model' && <Bot className="h-5 w-5 text-primary flex-shrink-0" />}
                      <div
                        className={cn(
                          'rounded-lg px-3 py-2',
                          message.role === 'user'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted'
                        )}
                      >
                        {message.content || (isPending && index === messages.length - 1 && <Loader className="h-4 w-4 animate-spin" />)}
                      </div>
                      {message.role === 'user' && <User className="h-5 w-5 text-muted-foreground flex-shrink-0" />}
                    </div>
                  ))}
                   {isPending && messages[messages.length - 1].role === 'user' && (
                    <div className="flex justify-start gap-2 text-sm">
                      <Bot className="h-5 w-5 text-primary flex-shrink-0" />
                      <div className="rounded-lg px-3 py-2 bg-muted">
                        <Loader className="h-4 w-4 animate-spin" />
                      </div>
                    </div>
                  )}
                </div>
              </ScrollArea>
            </CardContent>
            <CardFooter>
              <form onSubmit={handleSubmit} className="flex w-full items-center space-x-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about my skills..."
                  disabled={isPending}
                />
                <Button type="submit" size="icon" disabled={isPending}>
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </CardFooter>
          </Card>
        </div>
      )}
    </>
  );
}
