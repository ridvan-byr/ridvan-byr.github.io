import React from 'react';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { SkillsMatrix } from './components/SkillsMatrix';
import { EducationSection } from './components/EducationSection';
import { ContactFooter } from './components/ContactFooter';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#090d16] text-zinc-100 selection:bg-zinc-800 selection:text-zinc-100 font-sans">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <ExperienceTimeline />
        <ProjectsShowcase />
        <SkillsMatrix />
        <EducationSection />
      </main>
      <ContactFooter />
    </div>
  );
};

export default App;
