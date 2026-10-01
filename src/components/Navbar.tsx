import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Download, Mail, Check, Menu, X } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const navLinks = [
    { name: 'Hakkımda', href: '#about' },
    { name: 'Deneyim', href: '#experience' },
    { name: 'Projeler', href: '#projects' },
    { name: 'Yetenekler', href: '#skills' },
    { name: 'Eğitim', href: '#education' },
    { name: 'İletişim', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-[#090d16]/95 backdrop-blur-md border-b border-[#1e2638] py-2.5 shadow-sm'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          
          {/* Logo / Profile Avatar */}
          <a href="#about" className="flex items-center gap-3 group">
            <img
              src="/profile.jpg"
              alt={PERSONAL_INFO.name}
              className="w-8 h-8 rounded-full object-cover border border-[#1e2638] group-hover:border-zinc-500 transition-colors"
            />
            <div className="flex items-center gap-2">
              <span className="font-semibold text-zinc-100 group-hover:text-white transition-colors text-sm">
                {PERSONAL_INFO.name}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#0f1422]/70 border border-[#1e2638] px-3 py-1 rounded-full text-xs font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1 text-zinc-400 hover:text-zinc-100 hover:bg-[#141b2d] rounded-full transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={copyEmail}
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono bg-[#0f1422] border border-[#1e2638] rounded-md text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors cursor-pointer"
              title="E-posta Adresini Kopyala"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Mail className="w-3.5 h-3.5 text-zinc-400" />}
              <span>{copiedEmail ? 'Kopyalandı' : 'E-posta'}</span>
            </button>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-zinc-400 hover:text-white hover:bg-[#0f1422] border border-transparent hover:border-[#1e2638] rounded-md transition-colors"
              aria-label="GitHub Profil"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-zinc-400 hover:text-white hover:bg-[#0f1422] border border-transparent hover:border-[#1e2638] rounded-md transition-colors"
              aria-label="LinkedIn Profil"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href="/resume.pdf?v=20260809"
              download="RidvanEmreBayar_CV.pdf"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md bg-zinc-100 hover:bg-white text-zinc-950 transition-colors shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>CV (PDF)</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-zinc-400 hover:text-white rounded-md border border-[#1e2638] bg-[#0f1422]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#090d16] border-b border-[#1e2638] px-4 pt-3 pb-5 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-zinc-300 hover:text-white text-sm font-medium py-1.5 border-b border-[#1e2638]/50"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 flex items-center justify-between gap-2">
            <button
              onClick={copyEmail}
              className="flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-mono bg-[#0f1422] border border-[#1e2638] rounded-md text-zinc-300"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Mail className="w-3.5 h-3.5 text-zinc-400" />}
              <span>{copiedEmail ? 'Kopyalandı' : 'E-posta'}</span>
            </button>
            <a
              href="/resume.pdf?v=20260809"
              download="RidvanEmreBayar_CV.pdf"
              className="flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-medium rounded-md bg-zinc-100 text-zinc-950"
            >
              <Download className="w-3.5 h-3.5" />
              <span>CV İndir</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
