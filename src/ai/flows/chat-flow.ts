'use server';
/**
 * @fileOverview This file defines a Genkit flow for a portfolio chatbot.
 *
 * This flow is responsible for generating responses to user queries based on the portfolio's data.
 *
 * - chat - The main chat model instance.
 * - Message - A Zod schema for a single chat message.
 * - ChatHistory - A Zod schema for the chat history.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import {
  SKILLS,
  PROJECTS,
  EDUCATION,
  CERTIFICATIONS,
  RECOMMENDATIONS,
} from '@/lib/data';

// Define Zod schema for a single message
const MessageSchema = z.object({
  role: z.enum(['user', 'model']),
  content: z.string(),
});

// Define Zod schema for the chat history
const ChatHistorySchema = z.array(MessageSchema);

export type Message = z.infer<typeof MessageSchema>;
export type ChatHistory = z.infer<typeof ChatHistorySchema>;

// Serialize portfolio data to include in the prompt
const portfolioData = `
  Skills: ${SKILLS.map(s => s.name).join(', ')}
  Projects: ${PROJECTS.map(p => `${p.title}: ${p.description}`).join('\n')}
  Education: ${EDUCATION.map(e => `${e.degree} from ${e.institution} (${e.year})`).join('\n')}
  Certifications: ${CERTIFICATIONS.map(c => `${c.name} from ${c.issuer}`).join('\n')}
  Recommendations: ${RECOMMENDATIONS.map(r => `"${r.text}" - ${r.author}`).join('\n')}
`;

export const chat = ai.definePrompt({
  name: 'chatFlow',
  input: {
    schema: z.object({
      history: ChatHistorySchema,
    }),
  },
  prompt: `You are a helpful assistant for a personal portfolio website.
  Your name is "Gemini".
  You are talkative and provide lots of specific details from the portfolio.
  You will answer questions based on the context provided below and the conversation history.
  Do not make up information. If you don't know the answer, say that you don't know.

  Context:
  ${portfolioData}

  Conversation History:
  {{#each history}}
    {{#if (eq role 'user')}}
      User: {{content}}
    {{else}}
      Assistant: {{content}}
    {{/if}}
  {{/each}}
  `,
});
