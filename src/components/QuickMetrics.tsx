import React from 'react';
import { TestTube2, Code2, Cpu, GraduationCap } from 'lucide-react';

export const QuickMetrics: React.FC = () => {
  return (
    <section className="py-12 relative z-10 border-y border-slate-800/60 bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Stat 1 */}
          <div className="glass-panel p-6 rounded-2xl glass-panel-hover flex items-start gap-4">
            <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <TestTube2 className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-extrabold text-white tracking-tight">39 Spec Suite</div>
              <div className="text-xs font-semibold text-cyan-400 mt-0.5">Playwright E2E & Mocking</div>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                AWS S3, Azure, GDrive, OneDrive, Huawei OBS & OAuth doğrulamaları.
              </p>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="glass-panel p-6 rounded-2xl glass-panel-hover flex items-start gap-4">
            <div className="p-3 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20">
              <Code2 className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-extrabold text-white tracking-tight">QA Cortex Platform</div>
              <div className="text-xs font-semibold text-violet-400 mt-0.5">%100 Precision & Recall</div>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                VS Code Marketplace yayını, AST parser & AI kural motoru.
              </p>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="glass-panel p-6 rounded-2xl glass-panel-hover flex items-start gap-4">
            <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <Cpu className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-extrabold text-white tracking-tight">Full-Stack Stack</div>
              <div className="text-xs font-semibold text-blue-400 mt-0.5">.NET Core & Next.js</div>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                PostgreSQL, Docker, RESTful APIs & Mikroservis odaklı tasarım.
              </p>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="glass-panel p-6 rounded-2xl glass-panel-hover flex items-start gap-4">
            <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-extrabold text-white tracking-tight">Bilgisayar Müh.</div>
              <div className="text-xs font-semibold text-emerald-400 mt-0.5">BS Degree (2026)</div>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Bilecik Şeyh Edebali Üniversitesi • İngilizce: B2 Intermediate
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
