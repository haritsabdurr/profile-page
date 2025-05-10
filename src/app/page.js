import Hero from '@/components/hero';
import Skills from '@/components/skills';
import Project from '@/components/project';
import Experience from '@/components/Experience';
import About from '@/components/About';
import Footer from '@/components/navbar';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Project />
      <Footer />
    </>
  );
}
