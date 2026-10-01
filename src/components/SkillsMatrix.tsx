import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Code2, Server, Layout, TestTube2, Database, Sparkles, Cpu } from 'lucide-react';

export const SkillsMatrix: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-4 h-4 text-zinc-300" />;
      case 'Server': return <Server className="w-4 h-4 text-zinc-300" />;
      case 'Layout': return <Layout className="w-4 h-4 text-zinc-300" />;
      case 'TestTube2': return <TestTube2 className="w-4 h-4 text-zinc-300" />;
      case 'Database': return <Database className="w-4 h-4 text-zinc-300" />;
      case 'Sparkles': return <Sparkles className="w-4 h-4 text-zinc-300" />;
      default: return <Cpu className="w-4 h-4 text-zinc-300" />;
    }
  };

  return (
    <section id="skills" className="py-16 md:py-20 border-b border-[#1e2638]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-2">
            <Cpu className="w-3.5 h-3.5 text-zinc-400" />
            <span>Stack & Araçlar</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Teknik Yetkinlikler
          </h2>
          <p className="text-zinc-400 text-sm mt-1 max-w-2xl">
            Aktif projelerde, iş ortamında ve açık kaynak çalışmalarımda kullandığım diller, framework'ler ve altyapılar.
          </p>
        </div>

        {/* 3-Column Clean Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="p-5 rounded-xl border border-[#1e2638] bg-[#0f1422] flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-2.5 pb-3 mb-4 border-b border-[#1e2638]/70">
                  <div className="p-1.5 rounded-md bg-[#090d16] border border-[#1e2638]">
                    {getIcon(category.iconName)}
                  </div>
                  <h3 className="font-semibold text-white text-sm">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="px-2.5 py-1.5 rounded-lg bg-[#090d16] border border-[#1e2638]/80 flex items-center justify-between gap-2 text-xs"
                    >
                      <span className="font-medium text-zinc-200">
                        {skill.name}
                      </span>
                      <span className="text-[10px] font-mono text-zinc-400">
                        {skill.tag}
                      </span>
                    </div>
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
