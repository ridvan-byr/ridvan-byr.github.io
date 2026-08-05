import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { SkillsMatrix } from './components/SkillsMatrix';
import { EducationSection } from './components/EducationSection';
import { ContactFooter } from './components/ContactFooter';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
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
