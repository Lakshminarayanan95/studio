'use client';

import { useState, useTransition, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Bot, User, Send, Loader } from 'lucide-react';
import { getChatbotResponse } from '@/app/actions';
import { cn } from '@/lib/utils';
import type { Message } from './chatbot';

interface ChatbotClientProps {
  initialMessages: Message[];
}

export function ChatbotClient({ initialMessages }: ChatbotClientProps) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const [isPending, startTransition] = useTransition();
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
      const viewport = scrollAreaRef.current.querySelector('div');
      if (viewport) {
        viewport.scrollTop = viewport.scrollHeight;
      }
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    startTransition(async () => {
      // Create the history for the Genkit flow
      const history = messages.map(msg => ({
        role: msg.role,
        content: [{ text: msg.content }]
      }));
      
      const result = await getChatbotResponse({ history: history, message: input });
      
      const botMessage: Message = {
        role: 'model',
        content: result.success ? result.message : 'Sorry, something went wrong.'
      };
      setMessages(prev => [...prev, botMessage]);
    });
  };

  return (
    <div className="flex flex-col h-full">
      <header className="bg-primary text-primary-foreground p-4 flex items-center justify-between rounded-t-lg">
        <div className="flex items-center gap-3">
          <Bot className="h-6 w-6" />
          <h3 className="font-bold text-lg">AI Assistant</h3>
        </div>
      </header>

      <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={cn(
                'flex items-start gap-3',
                message.role === 'user' ? 'justify-end' : 'justify-start'
              )}
            >
              {message.role === 'model' && (
                <div className="bg-primary rounded-full p-2">
                  <Bot className="h-5 w-5 text-primary-foreground" />
                </div>
              )}
              <div
                className={cn(
                  'p-3 rounded-lg max-w-[80%]',
                  message.role === 'user'
                    ? 'bg-secondary text-secondary-foreground'
                    : 'bg-muted text-muted-foreground'
                )}
              >
                <p className="text-sm whitespace-pre-wrap">{message.content}</p>
              </div>
              {message.role === 'user' && (
                <div className="bg-accent rounded-full p-2">
                  <User className="h-5 w-5 text-accent-foreground" />
                </div>
              )}
            </div>
          ))}
          {isPending && (
             <div className="flex items-start gap-3 justify-start">
                <div className="bg-primary rounded-full p-2">
                  <Bot className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="p-3 rounded-lg bg-muted">
                    <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
                </div>
            </div>
          )}
        </div>
      </ScrollArea>

      <div className="border-t p-4">
        <div className="flex items-center gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && handleSend()}
            placeholder="Ask me about Lakshmi..."
            disabled={isPending}
            className="flex-1"
          />
          <Button onClick={handleSend} disabled={isPending || !input.trim()} size="icon">
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
