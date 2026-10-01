import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Download, Mail, MapPin, Check, GraduationCap, ArrowUpRight, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Hero: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="about" className="pt-28 pb-16 md:pt-36 md:pb-20 border-b border-[#1e2638]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Top Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0f1422] border border-[#1e2638] text-xs font-mono text-zinc-300 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Junior Yazılım Geliştirici &middot; İş Fırsatlarına Açık</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Bio Column */}
          <div className="lg:col-span-8 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              {PERSONAL_INFO.name}
            </h1>

            <p className="text-lg sm:text-xl text-zinc-300 font-normal leading-relaxed">
              Full-Stack Web Geliştirme (<span className="text-zinc-100 font-medium">.NET Core & Next.js</span>), 
              güvenilir <span className="text-zinc-100 font-medium">Playwright E2E Test Otomasyonu</span> ve 
              yapay zeka ajan entegrasyonları üzerine çalışan yazılım geliştirici.
            </p>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
              Bilecik Şeyh Edebali Üniversitesi Bilgisayar Mühendisliği (2022 – 2026) mezunuyum. 
              iCredible Technologies'de full-stack web API'leri (.NET & PostgreSQL) ve 39-spec Playwright E2E test paketi mimarisi geliştirdim. 
              VS Code Marketplace üzerinde yayınlanan <strong className="text-zinc-200 font-medium">QA Cortex</strong> açık kaynak projesinin geliştiricisiyim.
            </p>

            {/* Contact & Meta Badges */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-400 pt-1">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#0f1422] border border-[#1e2638]">
                <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                <span>İstanbul, TR</span>
              </div>

              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#0f1422] border border-[#1e2638]">
                <GraduationCap className="w-3.5 h-3.5 text-zinc-400" />
                <span>BŞEÜ Bilgisayar Müh. (2022 – 2026)</span>
              </div>

              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#0f1422] border border-[#1e2638] text-zinc-300 hover:text-white hover:border-zinc-600 transition-colors cursor-pointer"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Mail className="w-3.5 h-3.5 text-zinc-400" />}
                <span>{copiedEmail ? 'E-posta Kopyalandı' : PERSONAL_INFO.email}</span>
              </button>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href="/resume.pdf?v=20260809"
                download="RidvanEmreBayar_CV.pdf"
                className="flex items-center gap-2 px-4 py-2.5 rounded-md bg-zinc-100 hover:bg-white text-zinc-950 font-medium text-xs sm:text-sm transition-colors shadow-xs"
              >
                <Download className="w-4 h-4" />
                <span>Özgeçmişi İndir (PDF)</span>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-md bg-[#0f1422] hover:bg-[#141b2d] border border-[#1e2638] hover:border-zinc-700 text-zinc-200 text-xs sm:text-sm font-medium transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Repoları</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-md bg-[#0f1422] hover:bg-[#141b2d] border border-[#1e2638] hover:border-zinc-700 text-zinc-200 text-xs sm:text-sm font-medium transition-colors"
              >
                <LinkedinIcon className="w-4 h-4 text-blue-400" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
              </a>
            </div>
          </div>

          {/* Right Card Column: Clean Profile Image & Key Metrics */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="rounded-xl overflow-hidden border border-[#1e2638] bg-[#0f1422] p-2">
              <img
                src="/profile.jpg"
                alt={PERSONAL_INFO.name}
                className="w-full aspect-square object-cover rounded-lg filter contrast-[1.02]"
              />
              <div className="p-3 pt-3.5 space-y-2 border-t border-[#1e2638]/70 mt-2 font-mono text-xs text-zinc-400">
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500">Son Deneyim</span>
                  <span className="text-zinc-200 font-medium">iCredible Technologies</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500">Rol</span>
                  <span className="text-zinc-200">Software Dev Intern</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500">Lokasyon</span>
                  <span className="text-zinc-300">İstanbul, TR</span>
                </div>
              </div>
            </div>

            {/* Quick Metrics Strip */}
            <div className="p-4 rounded-xl border border-[#1e2638] bg-[#0f1422] space-y-3 font-mono text-xs">
              <div className="flex items-center gap-2 text-zinc-300 font-medium">
                <Terminal className="w-3.5 h-3.5 text-zinc-400" />
                <span>Öne Çıkan Mühendislik Metrikleri</span>
              </div>
              <div className="grid grid-cols-2 gap-2 pt-1">
                <div className="p-2.5 rounded-lg bg-[#090d16] border border-[#1e2638]">
                  <div className="text-zinc-100 font-semibold text-sm">39 Spec</div>
                  <div className="text-zinc-500 text-[11px] mt-0.5">Playwright E2E Suite</div>
                </div>
                <div className="p-2.5 rounded-lg bg-[#090d16] border border-[#1e2638]">
                  <div className="text-zinc-100 font-semibold text-sm">%100 Test</div>
                  <div className="text-zinc-500 text-[11px] mt-0.5">Precision & Recall</div>
                </div>
                <div className="p-2.5 rounded-lg bg-[#090d16] border border-[#1e2638]">
                  <div className="text-zinc-100 font-semibold text-sm">.NET & Next.js</div>
                  <div className="text-zinc-500 text-[11px] mt-0.5">Full-Stack Altyapı</div>
                </div>
                <div className="p-2.5 rounded-lg bg-[#090d16] border border-[#1e2638]">
                  <div className="text-zinc-100 font-semibold text-sm">VS Code Tool</div>
                  <div className="text-zinc-500 text-[11px] mt-0.5">QA Cortex Ext.</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
