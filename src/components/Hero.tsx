import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Download, Mail, MapPin, Phone, Check, GraduationCap, Briefcase } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Hero: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="about" className="relative pt-28 pb-16 md:pt-36 md:pb-20">
      {/* Subtle Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (5 cols): Photo & Quick Status */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="glass-panel rounded-3xl p-3 border border-slate-800 shadow-xl overflow-hidden">
                <img
                  src="/profile.jpg"
                  alt={PERSONAL_INFO.name}
                  className="w-full h-[400px] object-cover object-center rounded-2xl filter contrast-[1.02]"
                />

                {/* Clean Status Footer */}
                <div className="mt-3 p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-mono space-y-1.5">
                  <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Aktif: iCredible Technologies — Stajyer</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 text-[11px]">
                    <GraduationCap className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Bilgisayar Müh. (30 Haziran 2026)</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column (7 cols): Engineer Profile & Summary */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-slate-300 border border-slate-800 text-xs font-mono mb-4">
                <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
                <span>Junior Software Developer</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
                {PERSONAL_INFO.name}
              </h1>

              <p className="text-base sm:text-lg font-mono text-cyan-400 mt-2">
                Full-Stack Geliştirme • Test Otomasyonu (Playwright) • Yapay Zeka
              </p>
            </div>

            {/* Profile Bio */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              30 Haziran 2026 Bilecik Şeyh Edebali Üniversitesi Bilgisayar Mühendisliği mezunuyum. Web geliştirme (.NET Core, Next.js), PostgreSQL veritabanı mimarileri ve Playwright tabanlı End-to-End (E2E) test otomasyon süreçlerinde pratik staj deneyimine sahibim. Temiz kod (Clean Code) disiplinine önem veren, hızlı öğrenen ve yazılım ekiplerine dinamizm katan bir mühendisim.
            </p>

            {/* Direct Contact Pills */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2.5 text-xs text-slate-300 font-mono">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>İstanbul, TR</span>
              </div>

              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition-colors"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Mail className="w-3.5 h-3.5 text-cyan-400" />}
                <span>{copiedEmail ? 'E-posta Kopyalandı' : PERSONAL_INFO.email}</span>
              </button>

              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <span>{PERSONAL_INFO.phone}</span>
              </a>
            </div>

            {/* Primary Action Buttons for HR */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs transition-all shadow-md shadow-cyan-500/10"
              >
                <Download className="w-4 h-4" />
                <span>Özgeçmişi İndir (PDF)</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-slate-200 text-xs font-semibold transition-all"
              >
                <LinkedinIcon className="w-4 h-4 text-blue-400" />
                <span>LinkedIn Profil</span>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-slate-200 text-xs font-semibold transition-all"
              >
                <GithubIcon className="w-4 h-4 text-slate-300" />
                <span>GitHub Repoları</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
