import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Phone, Download, Check, Globe, ArrowUp, MailCheck } from 'lucide-react';
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
    <footer id="contact" className="py-16 relative bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Card */}
        <div className="glass-panel p-8 sm:p-10 rounded-2xl border border-slate-800 relative overflow-hidden mb-12 shadow-xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left 7 cols: Personal Warm Pitch */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-slate-300 border border-slate-800 text-xs font-mono">
                <MailCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>İletişim</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Bana Ulaşın
              </h2>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-xl">
                Projelerim, iş fırsatları veya yazılım üzerine sohbet etmek için bana e-posta gönderebilir veya LinkedIn/GitHub üzerinden dilediğiniz zaman ulaşabilirsiniz.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  onClick={copyEmail}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs transition-all shadow-md shadow-cyan-500/10"
                >
                  {copiedEmail ? <Check className="w-4 h-4" /> : <Mail className="w-4 h-4" />}
                  <span>{copiedEmail ? 'E-posta Kopyalandı' : PERSONAL_INFO.email}</span>
                </button>

                <a
                  href="/resume.pdf"
                  download
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-200 text-xs font-semibold transition-all"
                >
                  <Download className="w-4 h-4 text-cyan-400" />
                  <span>Özgeçmişi İndir (PDF)</span>
                </a>
              </div>
            </div>

            {/* Right 5 cols: Contact Info Cards */}
            <div className="lg:col-span-5 space-y-2.5 font-mono text-xs">
              
              <div className="bg-slate-900/90 p-3.5 rounded-xl border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="text-slate-300">{PERSONAL_INFO.email}</span>
                </div>
                <button
                  onClick={copyEmail}
                  className="text-[10px] bg-slate-800 text-cyan-400 px-2 py-1 rounded hover:bg-slate-700"
                >
                  {copiedEmail ? 'Kopyalandı' : 'Kopyala'}
                </button>
              </div>

              <div className="bg-slate-900/90 p-3.5 rounded-xl border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="text-slate-300">{PERSONAL_INFO.phone}</span>
                </div>
                <button
                  onClick={copyPhone}
                  className="text-[10px] bg-slate-800 text-cyan-400 px-2 py-1 rounded hover:bg-slate-700"
                >
                  {copiedPhone ? 'Kopyalandı' : 'Kopyala'}
                </button>
              </div>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900/90 p-3.5 rounded-xl border border-slate-800 flex items-center justify-between hover:border-cyan-500/40 transition-colors block"
              >
                <div className="flex items-center gap-2.5">
                  <LinkedinIcon className="w-4 h-4 text-blue-400 shrink-0" />
                  <span className="text-slate-300">linkedin.com/in/ridvanemrebayar</span>
                </div>
                <Globe className="w-3.5 h-3.5 text-slate-500" />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900/90 p-3.5 rounded-xl border border-slate-800 flex items-center justify-between hover:border-cyan-500/40 transition-colors block"
              >
                <div className="flex items-center gap-2.5">
                  <GithubIcon className="w-4 h-4 text-slate-300 shrink-0" />
                  <span className="text-slate-300">github.com/ridvan-byr</span>
                </div>
                <Globe className="w-3.5 h-3.5 text-slate-500" />
              </a>

            </div>

          </div>

        </div>

        {/* Bottom Bar & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono pt-4 border-t border-slate-900">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. Tüm Hakları Saklıdır.
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400">
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
              ridvan-byr.github.io
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              title="Yukarı Dön"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
