import ResumeClient from './resume-client';

export default function Resume() {
  return (
    <section id="resume" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl font-bold">Resume</h2>
          <p className="text-muted-foreground mt-2">Upload your resume to pre-fill your profile, or download mine.</p>
        </div>
        <ResumeClient />
      </div>
    </section>
  );
}
