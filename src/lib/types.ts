import { z } from 'zod';

export const PortfolioChatInputSchema = z.object({
    history: z.array(z.any()).describe('The chat history.'),
    message: z.string().describe("The user's message."),
});
export type PortfolioChatInput = z.infer<typeof PortfolioChatInputSchema>;

export const PortfolioChatOutputSchema = z.object({
    response: z.string().describe("The chatbot's response."),
});
export type PortfolioChatOutput = z.infer<typeof PortfolioChatOutputSchema>;
