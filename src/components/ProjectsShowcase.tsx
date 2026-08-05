import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import { FolderGit2, ExternalLink, Sparkles, CheckCircle2, X } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export const ProjectsShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('Tümü');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['Tümü', 'AI & Automation', 'Full-Stack'];

  const filteredProjects = activeTab === 'Tümü'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeTab);

  return (
    <section id="projects" className="py-20 relative bg-slate-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20 text-xs font-semibold mb-4">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Öne Çıkan Projeler</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Yazılım & Mimari Çalışmalarım
          </h2>
          <p className="text-slate-400 mt-4 text-base">
            Yapay zeka ajanları, test otomasyon eklentileri ve ölçeklenebilir tam kapsamlı web sistemleri.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-lg shadow-cyan-500/20'
                  : 'glass-panel text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel rounded-2xl p-6 glass-panel-hover flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Accent Gradient Border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-violet-500 to-blue-500 opacity-60 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Badge & Category */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                    {project.category}
                  </span>
                  {project.badge && (
                    <span className="px-2.5 py-0.5 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20 text-[10px] font-semibold">
                      {project.badge}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                  {project.title}
                </h3>
                <div className="text-xs text-slate-400 font-mono mb-4">
                  {project.subtitle}
                </div>

                {/* Short Description */}
                <p className="text-slate-300 text-xs leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-2 mb-6">
                  {project.highlights.slice(0, 3).map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-slate-900 text-slate-400 text-[11px] font-mono border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Card Action Buttons */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 group/btn"
                  >
                    <span>Detayları Oku</span>
                    <Sparkles className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-slate-400 hover:text-white hover:bg-slate-900 rounded-lg transition-colors"
                        title="GitHub Repo"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                    {project.marketplaceUrl && (
                      <a
                        href={project.marketplaceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-violet-400 hover:text-violet-300 hover:bg-slate-900 rounded-lg transition-colors"
                        title="VS Code Marketplace"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
          <div className="glass-panel border border-slate-700 max-w-2xl w-full rounded-2xl p-6 sm:p-8 relative shadow-2xl overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg bg-slate-900"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-1">
              {selectedProject.category}
            </span>
            <h3 className="text-2xl font-bold text-white mb-1">
              {selectedProject.title}
            </h3>
            <p className="text-sm font-mono text-slate-400 mb-6">
              {selectedProject.subtitle}
            </p>

            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              {selectedProject.longDescription || selectedProject.description}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                Teknik Başarılar & Mimari Özellikler:
              </h4>
              <ul className="space-y-2">
                {selectedProject.highlights.map((h, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                Kullanılan Teknolojiler:
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-md bg-slate-900 text-cyan-300 border border-slate-800 text-xs font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-slate-800">
              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 text-slate-200 hover:text-white border border-slate-800 text-xs font-semibold"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Deposunu İncele</span>
                </a>
              )}
              {selectedProject.marketplaceUrl && (
                <a
                  href={selectedProject.marketplaceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-violet-600 text-white hover:bg-violet-500 text-xs font-semibold"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>VS Code Marketplace</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
