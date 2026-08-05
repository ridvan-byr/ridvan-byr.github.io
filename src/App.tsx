import React from 'react';
import { ScrollProgress } from './components/ScrollProgress';
import { AmbientBackground } from './components/AmbientBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { SkillsMatrix } from './components/SkillsMatrix';
import { EducationSection } from './components/EducationSection';
import { ContactFooter } from './components/ContactFooter';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
      <ScrollProgress />
      <AmbientBackground />
      <Navbar />
      <main className="relative z-10">
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

