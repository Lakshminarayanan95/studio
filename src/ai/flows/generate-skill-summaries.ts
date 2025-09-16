// src/ai/flows/generate-skill-summaries.ts
'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating concise summaries of technical skills and expertise using generative AI.
 *
 * The flow takes a list of skills as input and returns a summary of each skill, highlighting proficiency levels and specific achievements.
 *
 * - generateSkillSummaries - A function that handles the skill summarization process.
 * - GenerateSkillSummariesInput - The input type for the generateSkillSummaries function.
 * - GenerateSkillSummariesOutput - The return type for the generateSkillSummaries function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateSkillSummariesInputSchema = z.object({
  skills: z
    .array(z.string())
    .describe('A list of technical skills to be summarized.'),
});
export type GenerateSkillSummariesInput = z.infer<typeof GenerateSkillSummariesInputSchema>;

const GenerateSkillSummariesOutputSchema = z.object({
  summaries: z
    .array(z.string())
    .describe('A list of concise summaries, one for each skill.'),
});
export type GenerateSkillSummariesOutput = z.infer<typeof GenerateSkillSummariesOutputSchema>;

export async function generateSkillSummaries(
  input: GenerateSkillSummariesInput
): Promise<GenerateSkillSummariesOutput> {
  return generateSkillSummariesFlow(input);
}

const skillSummaryPrompt = ai.definePrompt({
  name: 'skillSummaryPrompt',
  input: {schema: GenerateSkillSummariesInputSchema},
  output: {schema: GenerateSkillSummariesOutputSchema},
  prompt: `You are an expert at summarizing technical skills for resumes and portfolios.

  For each skill in the following list, generate a concise summary (maximum 50 words) highlighting proficiency levels and specific achievements.  Make it sound professional.

  Skills:
  {{#each skills}}- {{this}}\n{{/each}}`,
});

const generateSkillSummariesFlow = ai.defineFlow(
  {
    name: 'generateSkillSummariesFlow',
    inputSchema: GenerateSkillSummariesInputSchema,
    outputSchema: GenerateSkillSummariesOutputSchema,
  },
  async input => {
    const {output} = await skillSummaryPrompt(input);
    return output!;
  }
);
