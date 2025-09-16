import Header from "@/components/layout/header";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import Projects from "@/components/sections/projects";
import Education from "@/components/sections/education";
import Certifications from "@/components/sections/certifications";
import Resume from "@/components/sections/resume";
import Contact from "@/components/sections/contact";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
