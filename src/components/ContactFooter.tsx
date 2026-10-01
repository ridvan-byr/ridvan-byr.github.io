import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Phone, Download, Check, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const ContactFooter: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="py-16 md:py-20 bg-[#090d16]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Main Footer Card */}
        <div className="p-7 sm:p-9 rounded-xl border border-[#1e2638] bg-[#0f1422] mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Text & Primary Buttons */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                <Mail className="w-3.5 h-3.5 text-zinc-400" />
                <span>İletişime Geçin</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Yeni Fırsatlar & Projeler İçin Açığım
              </h2>

              <p className="text-zinc-400 text-sm leading-relaxed max-w-xl">
                Yazılım geliştirme pozisyonları, açık kaynak projeler veya teknik değerlendirmeler için benimle dilediğiniz zaman iletişime geçebilirsiniz.
              </p>

              <div className="flex flex-wrap gap-2.5 pt-2">
                <button
                  onClick={copyEmail}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-md bg-zinc-100 hover:bg-white text-zinc-950 font-medium text-xs sm:text-sm transition-colors cursor-pointer"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Mail className="w-4 h-4 text-zinc-800" />}
                  <span>{copiedEmail ? 'E-posta Kopyalandı' : PERSONAL_INFO.email}</span>
                </button>

                <a
                  href="/resume.pdf?v=20260809"
                  download="RidvanEmreBayar_CV.pdf"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-md bg-[#090d16] hover:bg-[#141b2d] border border-[#1e2638] hover:border-zinc-700 text-zinc-200 text-xs sm:text-sm font-medium transition-colors"
                >
                  <Download className="w-4 h-4 text-zinc-400" />
                  <span>Özgeçmişi İndir (PDF)</span>
                </a>
              </div>
            </div>

            {/* Right Column: Clean Link Rows */}
            <div className="lg:col-span-5 space-y-2 font-mono text-xs">
              
              <div className="bg-[#090d16] p-3 rounded-lg border border-[#1e2638] flex items-center justify-between">
                <div className="flex items-center gap-2 text-zinc-300 truncate">
                  <Mail className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                  <span className="truncate">{PERSONAL_INFO.email}</span>
                </div>
                <button
                  onClick={copyEmail}
                  className="text-[11px] text-zinc-400 hover:text-white px-2 py-0.5 rounded bg-[#0f1422] border border-[#1e2638] shrink-0 cursor-pointer"
                >
                  {copiedEmail ? 'Kopyalandı' : 'Kopyala'}
                </button>
              </div>

              <div className="bg-[#090d16] p-3 rounded-lg border border-[#1e2638] flex items-center justify-between">
                <div className="flex items-center gap-2 text-zinc-300">
                  <Phone className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                  <span>{PERSONAL_INFO.phone}</span>
                </div>
                <button
                  onClick={copyPhone}
                  className="text-[11px] text-zinc-400 hover:text-white px-2 py-0.5 rounded bg-[#0f1422] border border-[#1e2638] shrink-0 cursor-pointer"
                >
                  {copiedPhone ? 'Kopyalandı' : 'Kopyala'}
                </button>
              </div>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#090d16] p-3 rounded-lg border border-[#1e2638] hover:border-zinc-700 flex items-center justify-between transition-colors block text-zinc-300"
              >
                <div className="flex items-center gap-2">
                  <LinkedinIcon className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>linkedin.com/in/ridvanemrebayar</span>
                </div>
                <span className="text-[10px] text-zinc-500">Profil &rarr;</span>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#090d16] p-3 rounded-lg border border-[#1e2638] hover:border-zinc-700 flex items-center justify-between transition-colors block text-zinc-300"
              >
                <div className="flex items-center gap-2">
                  <GithubIcon className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                  <span>github.com/ridvan-byr</span>
                </div>
                <span className="text-[10px] text-zinc-500">Depo &rarr;</span>
              </a>

            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-mono">
          <div>
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name} &middot; İstanbul, TR
          </div>

          <div className="flex items-center gap-4">
            <span className="text-zinc-500">ridvan-byr.github.io</span>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-md bg-[#0f1422] hover:bg-[#141b2d] border border-[#1e2638] text-zinc-400 hover:text-white transition-colors cursor-pointer"
              title="Yukarı Dön"
              aria-label="Yukarı Dön"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
