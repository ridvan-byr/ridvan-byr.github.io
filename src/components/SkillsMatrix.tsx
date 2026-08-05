import React from 'react';
import { motion } from 'framer-motion';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Code2, Server, Layout, TestTube2, Database, Sparkles, Cpu } from 'lucide-react';
import { TechLogoImage } from './TechLogos';
import { SpotlightCard } from './SpotlightCard';

export const SkillsMatrix: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-5 h-5 text-cyan-400" />;
      case 'Server': return <Server className="w-5 h-5 text-violet-400" />;
      case 'Layout': return <Layout className="w-5 h-5 text-blue-400" />;
      case 'TestTube2': return <TestTube2 className="w-5 h-5 text-emerald-400" />;
      case 'Database': return <Database className="w-5 h-5 text-rose-400" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-amber-400" />;
      default: return <Cpu className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 relative bg-slate-950/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 text-slate-300 border border-slate-800 text-xs font-mono mb-4">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>Teknoloji & Araç Yetkinlikleri</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Teknik Yetkinlikler & Stack
          </h2>
          <p className="text-slate-400 mt-3 text-sm sm:text-base">
            Proje ve staj süreçlerimde aktif kullandığım programlama dilleri, kütüphaneler ve geliştirme araçları.
          </p>
        </motion.div>

        {/* Skill Category Cards - 3x2 Clean Grid with Official Tech Logos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: catIdx * 0.06 }}
            >
              <SpotlightCard className="h-full border border-slate-800 flex flex-col justify-between">
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800/80">
                    <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800">
                      {getIcon(category.iconName)}
                    </div>
                    <h3 className="text-base font-bold text-white">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills Grid as Clean Tech Pills with Logos */}
                  <div className="space-y-3">
                    {category.skills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        whileHover={{ x: 4, scale: 1.01 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                        className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/90 flex items-center justify-between gap-3 hover:border-cyan-500/40 transition-colors group cursor-default"
                      >
                        <div className="flex items-center gap-2.5">
                          <TechLogoImage name={skill.name} className="w-5 h-5 group-hover:scale-110 transition-transform" />
                          <span className="font-semibold text-xs text-slate-200">{skill.name}</span>
                        </div>
                        <span className="text-[10px] font-mono text-cyan-400 bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800 shrink-0">
                          {skill.tag}
                        </span>
                      </motion.div>
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

