'use server';

import { z } from 'zod';
import { streamText } from 'genkit';
import { chat, ChatHistory, Message } from '@/ai/flows/chat-flow';


// Schema for contact form
const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function submitContactForm(values: z.infer<typeof contactSchema>) {
  try {
    // In a real application, you would send an email, save to a database, etc.
    console.log('Contact form submitted:', values);

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return { success: true, message: 'Message sent successfully!' };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return { success: false, message: 'Failed to send message.' };
  }
}

export async function uploadResume(formData: FormData) {
  const file = formData.get('resume') as File;

  if (!file || file.size === 0) {
    return { success: false, message: 'No file provided.' };
  }
  
  try {
    // Here you would typically upload the file to a storage service (like Firebase Storage)
    // and then trigger a parsing function (e.g., a Cloud Function with a GenAI model).
    console.log('Resume uploaded:', file.name, file.type, file.size);
    
    // Simulate parsing delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Simulate parsing success
    console.log('Resume parsed successfully.');
    
    return { success: true, message: 'Resume uploaded and parsed successfully!' };
  } catch (error) {
    console.error('Error uploading resume:', error);
    return { success: false, message: 'An error occurred during upload.' };
  }
}


export async function postMessage(history: ChatHistory) {
  const result = await streamText({
    model: chat,
    input: {
      history,
    },
  });

  return result.stream;
}
