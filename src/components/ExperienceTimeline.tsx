import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-semibold mb-4 shadow-sm">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Kariyer ve Staj Deneyimleri</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            İş Deneyimi & Mühendislik Geçmişi
          </h2>
          <p className="text-slate-400 mt-4 text-base">
            Modern web teknolojileri, backend mimarileri ve yüksek kapsamlı otomasyon süreçlerinde edindiğim tecrübeler.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-800/80 ml-4 md:ml-32 space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className="relative pl-8 md:pl-12 group"
            >
              {/* Timeline Node Point */}
              <div className={`absolute -left-[17px] top-4 w-8 h-8 rounded-full flex items-center justify-center border-2 z-20 ${
                exp.isCurrent
                  ? 'bg-slate-950 border-cyan-400 text-cyan-400 shadow-lg shadow-cyan-500/50'
                  : 'bg-slate-950 border-slate-700 text-slate-500 group-hover:border-slate-400'
              }`}>
                <div className={`w-2.5 h-2.5 rounded-full ${exp.isCurrent ? 'bg-cyan-400 animate-pulse' : 'bg-slate-500'}`} />
              </div>

              {/* Experience Card */}
              <SpotlightCard className="glass-panel-hover p-6 sm:p-8">
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-slate-800/80">
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {exp.company}
                      </h3>
                      {exp.isCurrent && (
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold">
                          Güncel Rol
                        </span>
                      )}
                    </div>
                    <div className="text-sm font-semibold text-slate-300 mt-1">
                      {exp.role}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 font-mono">
                    <span className="flex items-center gap-1 bg-slate-900/90 px-3 py-1.5 rounded-lg border border-slate-800">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1 bg-slate-900/90 px-3 py-1.5 rounded-lg border border-slate-800">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">
                  "{exp.summary}"
                </p>

                {/* Key Achievements Bullet List */}
                <div className="space-y-3 mb-6">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Öne Çıkan Başarılar & Sorumluluklar:
                  </div>
                  {exp.achievements.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                      <ChevronRight className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
                    Kullanılan Teknolojiler:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-slate-900/90 text-slate-300 border border-slate-800 text-xs font-mono hover:border-cyan-500/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

