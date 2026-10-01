import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import { ExternalLink, X, ArrowUpRight, FolderGit2 } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export const ProjectsShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('Tümü');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['Tümü', 'AI & Automation', 'Full-Stack'];

  const filteredProjects = activeTab === 'Tümü'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeTab);

  return (
    <section id="projects" className="py-16 md:py-20 border-b border-[#1e2638]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-2">
              <FolderGit2 className="w-3.5 h-3.5 text-zinc-400" />
              <span>Açık Kaynak & Projeler</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Öne Çıkan Çalışmalar
            </h2>
            <p className="text-zinc-400 text-sm mt-1">
              Yapay zeka araçları, test otomasyon eklentileri ve uçtan uca web platformları.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-lg bg-[#0f1422] border border-[#1e2638] text-xs font-mono self-start sm:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
                  activeTab === cat
                    ? 'bg-zinc-100 text-zinc-950 font-semibold'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid (GitHub Pinned Repos Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="p-5 rounded-xl border border-[#1e2638] bg-[#0f1422] hover:border-zinc-700 transition-colors flex flex-col justify-between group"
            >
              <div>
                {/* Card Header */}
                <div className="flex items-start justify-between gap-3 mb-2.5">
                  <div className="flex items-center gap-2 min-w-0">
                    <FolderGit2 className="w-4 h-4 text-zinc-400 shrink-0" />
                    <h3 className="font-semibold text-white group-hover:text-zinc-200 transition-colors text-base truncate">
                      {project.title}
                    </h3>
                  </div>
                  <span className="shrink-0 text-[10px] font-mono px-2 py-0.5 rounded bg-[#090d16] text-zinc-400 border border-[#1e2638]">
                    {project.category}
                  </span>
                </div>

                <div className="text-xs text-zinc-400 font-mono mb-3">
                  {project.subtitle}
                </div>

                {/* Description */}
                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-1.5 mb-5 text-xs text-zinc-400">
                  {project.highlights.slice(0, 2).map((h, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-zinc-500 mt-0.5">&bull;</span>
                      <span className="line-clamp-2">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-[#090d16] text-zinc-400 text-[11px] font-mono border border-[#1e2638]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-1.5 py-0.5 rounded text-[11px] font-mono text-zinc-500">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>

                {/* Bottom Actions */}
                <div className="flex items-center justify-between pt-3 border-t border-[#1e2638]/70">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-mono text-zinc-300 hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>Detaylar</span>
                    <ArrowUpRight className="w-3 h-3 text-zinc-500" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 text-zinc-400 hover:text-white rounded-md hover:bg-[#141b2d] transition-colors"
                        title="GitHub Reposu"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 text-zinc-400 hover:text-white rounded-md hover:bg-[#141b2d] transition-colors"
                        title="Canlı Site"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    {project.marketplaceUrl && (
                      <a
                        href={project.marketplaceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 text-zinc-400 hover:text-white rounded-md hover:bg-[#141b2d] transition-colors"
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-[#0f1422] border border-[#1e2638] max-w-2xl w-full rounded-xl p-6 sm:p-7 relative shadow-2xl overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-1.5 text-zinc-400 hover:text-white rounded-md bg-[#090d16] border border-[#1e2638] cursor-pointer"
              aria-label="Kapat"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-1">
              <span>{selectedProject.category}</span>
              {selectedProject.badge && (
                <>
                  <span>&bull;</span>
                  <span className="text-zinc-300">{selectedProject.badge}</span>
                </>
              )}
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
              {selectedProject.title}
            </h3>
            <p className="text-xs font-mono text-zinc-400 mb-5">
              {selectedProject.subtitle}
            </p>

            <p className="text-zinc-300 text-sm leading-relaxed mb-6">
              {selectedProject.longDescription || selectedProject.description}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2.5">
                Mimari & Teknik Çözümler:
              </h4>
              <ul className="space-y-2 text-sm text-zinc-300">
                {selectedProject.highlights.map((h, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-zinc-500 mt-1">&ndash;</span>
                    <span className="leading-snug">{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2.5">
                Kullanılan Teknolojiler:
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded bg-[#090d16] text-zinc-300 border border-[#1e2638] text-xs font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap justify-end gap-3 pt-4 border-t border-[#1e2638]">
              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-md bg-[#090d16] text-zinc-200 hover:text-white border border-[#1e2638] hover:border-zinc-700 text-xs font-medium"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Deposu</span>
                </a>
              )}
              {selectedProject.marketplaceUrl && (
                <a
                  href={selectedProject.marketplaceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-md bg-zinc-100 text-zinc-950 hover:bg-white text-xs font-medium"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>VS Code Marketplace</span>
                </a>
              )}
              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-md bg-zinc-100 text-zinc-950 hover:bg-white text-xs font-medium"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Canlı Site</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
