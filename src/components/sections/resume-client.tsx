'use client';

import { useTransition } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Upload, Download } from 'lucide-react';
import { uploadResume } from '@/app/actions';

export default function ResumeClient() {
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const file = formData.get('resume');

    if (file instanceof File && file.size === 0) {
      toast({
        title: 'No file selected',
        description: 'Please select a resume file to upload.',
        variant: 'destructive',
      });
      return;
    }

    startTransition(async () => {
      const result = await uploadResume(formData);
      if (result.success) {
        toast({
          title: 'Upload Successful',
          description: result.message,
        });
      } else {
        toast({
          title: 'Upload Failed',
          description: result.message,
          variant: 'destructive',
        });
      }
    });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Manage Resume</CardTitle>
          <CardDescription>Upload a new resume or download the current one.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="resume">Upload Resume (PDF, DOCX)</Label>
              <div className="flex gap-2">
                <Input id="resume" name="resume" type="file" accept=".pdf,.doc,.docx" />
                <Button type="submit" disabled={isPending}>
                  <Upload className="mr-2 h-4 w-4" />
                  {isPending ? 'Uploading...' : 'Upload'}
                </Button>
              </div>
            </div>
          </form>
          <div className="mt-6 flex justify-center">
            <Button variant="outline" asChild>
              <a href="/resume.pdf" download="AlexDoe-Resume.pdf">
                <Download className="mr-2 h-4 w-4" />
                Download My Resume
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
