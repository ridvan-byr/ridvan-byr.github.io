import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-16 md:py-20 border-b border-[#1e2638]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-2">
            <Briefcase className="w-3.5 h-3.5 text-zinc-400" />
            <span>Kariyer ve Stajlar</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Mühendislik Deneyimi
          </h2>
          <p className="text-zinc-400 text-sm mt-1 max-w-2xl">
            Kurumsal ve uzaktan çalışma ortamlarında full-stack web, API mimarisi ve test otomasyonu süreçleri.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative border-l border-[#1e2638] ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-10">
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Timeline Bullet Node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-[#1e2638] bg-[#090d16] group-hover:border-zinc-400 transition-colors" />

              {/* Card Container */}
              <div className="p-5 sm:p-6 rounded-xl border border-[#1e2638] bg-[#0f1422] transition-colors hover:border-zinc-700">
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-3 mb-3 border-b border-[#1e2638]/70">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-base sm:text-lg font-semibold text-white">
                        {exp.company}
                      </h3>
                      {exp.isCurrent && (
                        <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          Güncel
                        </span>
                      )}
                    </div>
                    <div className="text-sm font-medium text-zinc-300 mt-0.5">
                      {exp.role}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs font-mono text-zinc-400 shrink-0">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                      {exp.period}
                    </span>
                    <span className="text-zinc-600">&bull;</span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                  {exp.summary}
                </p>

                {/* Achievements List */}
                <ul className="space-y-2 mb-5 text-xs sm:text-sm text-zinc-400">
                  {exp.achievements.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-zinc-500 mt-1">&ndash;</span>
                      <span className="leading-normal">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-[#090d16] text-zinc-300 border border-[#1e2638] text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
