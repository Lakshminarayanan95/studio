'use server';

/**
 * @fileOverview A conversational AI flow for the portfolio chatbot.
 *
 * - portfolioChat - A function that handles the chat conversation.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import {SKILLS, PROJECTS, EDUCATION, CERTIFICATIONS} from '@/lib/data';
import type { PortfolioChatInput, PortfolioChatOutput } from '@/lib/types';
import { PortfolioChatInputSchema, PortfolioChatOutputSchema } from '@/lib/types';


export async function portfolioChat(input: PortfolioChatInput): Promise<PortfolioChatOutput> {
  return portfolioChatFlow(input);
}

const portfolioContext = `
You are a friendly and professional AI assistant for Lakshmi Narayanan's portfolio.
Your goal is to answer questions from visitors, like recruiters or potential collaborators.
Base your answers ONLY on the information provided below. Do not make up any information.
Keep your answers concise and helpful.

Here is the information about Lakshmi Narayanan:

## About
- Name: Lakshmi Narayanan
- Role: Passionate software developer, Computer Science undergraduate (Batch 2026).
- Skills: Strong foundation in programming, data structures, algorithms, and database management systems.
- Key Strengths: Quick learner, adaptable, strong analytical, communication, and teamwork skills.

## Skills
${SKILLS.map(s => `- ${s.name}`).join('\n')}

## Projects
${PROJECTS.map(p => `- **${p.title}**: ${p.description} (Technologies: ${p.tags.join(', ')})`).join('\n')}

## Education
${EDUCATION.map(e => `- **${e.institution}**: ${e.degree}, ${e.year} (Grade: ${e.grade})`).join('\n')}

## Certifications
${CERTIFICATIONS.map(c => `- **${c.name}** from ${c.issuer} (${c.date}): ${c.description}`).join('\n')}

## Contact Information
- Email: kylakshminarayanan@gmail.com
- Phone: 6383146427
- Location: Tamil Nadu, India
`;

const chatPrompt = ai.definePrompt(
  {
    name: 'portfolioChatPrompt',
    system: portfolioContext,
    input: {
      schema: z.object({
        history: z.array(z.any()),
        message: z.string(),
      })
    },
    output: {
      schema: z.string()
    },
    prompt: `
      {{#each history}}
        {{#if (eq role 'user')}}From user: {{/if}}
        {{#if (eq role 'model')}}From you: {{/if}}
        {{#each content}}
          {{#if text}}{{text}}{{/if}}
        {{/each}}
      {{/each}}
      From user: {{{message}}}
      From you: `,
  }
);


const portfolioChatFlow = ai.defineFlow(
  {
    name: 'portfolioChatFlow',
    inputSchema: PortfolioChatInputSchema,
    outputSchema: PortfolioChatOutputSchema,
  },
  async (input) => {
    const { output } = await chatPrompt(input);
    return { response: output! };
  }
);
