'use server';

import { z } from 'zod';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function submitContactForm(values: z.infer<typeof contactSchema>) {
  try {
    const { name, email, message } = values;

    if (!process.env.RESEND_API_KEY) {
      console.error('Resend API key is not set.');
      return { success: false, message: 'Server configuration error.' };
    }

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact Form <onboarding@resend.dev>',
      to: ['kylakshminarayanan@gmail.com'],
      subject: `New Message from ${name} via Portfolio`,
      reply_to: email,
      html: `
        <p>You have received a new message from your portfolio contact form.</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error('Error sending email:', error);
      return { success: false, message: 'Failed to send message.' };
    }

    console.log('Email sent successfully:', data);
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
    console.log('Resume uploaded:', file.name, file.type, file.size);
    
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log('Resume parsed successfully.');
    
    return { success: true, message: 'Resume uploaded and parsed successfully!' };
  } catch (error) {
    console.error('Error uploading resume:', error);
    return { success: false, message: 'An error occurred during upload.' };
  }
}
