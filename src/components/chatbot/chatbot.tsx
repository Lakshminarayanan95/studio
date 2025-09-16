'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare, X } from 'lucide-react';
import { ChatbotClient } from './chatbot-client';
import { cn } from '@/lib/utils';

export interface Message {
  role: 'user' | 'model';
  content: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  const initialMessages: Message[] = [
    {
      role: 'model',
      content: "Hello! I'm an AI assistant for Lakshmi Narayanan's portfolio. How can I help you today?",
    },
  ];

  return (
    <>
      <div className={cn(
        "fixed bottom-4 right-4 z-50 transition-all duration-300",
        isOpen ? "w-[90vw] h-[80vh] sm:w-[400px] sm:h-[600px] shadow-2xl rounded-lg bg-card border" : "w-14 h-14"
      )}>
        {isOpen ? (
          <div className="h-full flex flex-col">
            <ChatbotClient initialMessages={initialMessages} />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 rounded-full h-8 w-8 z-10"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        ) : (
          <Button
            onClick={() => setIsOpen(true)}
            size="lg"
            className="w-14 h-14 rounded-full shadow-lg"
          >
            <MessageSquare className="h-7 w-7" />
          </Button>
        )}
      </div>
    </>
  );
}
