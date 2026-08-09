import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Download, Mail, MapPin, Phone, Check, GraduationCap, Briefcase, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { SpotlightCard } from './SpotlightCard';

const ROLES = [
  'Full-Stack Geliştirme (.NET Core & React)',
  'E2E Test Otomasyonu (Playwright & C#)',
  'Yapay Zeka & AI Agent Entegrasyonları',
  'PostgreSQL & Performanslı Mimari'
];

export const Hero: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: 'easeOut' as const },
    },
  };


  return (
    <section id="about" className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
      {/* Background Radial Light Effect */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-cyan-500/15 via-violet-500/15 to-pink-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          {/* Left Column (5 cols): Photo & Quick Status with Spotlight 3D Tilt */}
          <motion.div variants={itemVariants} className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              <SpotlightCard className="!p-3 border border-slate-800 shadow-2xl rounded-3xl" spotlightColor="rgba(34, 211, 238, 0.2)">
                <div className="relative rounded-2xl overflow-hidden group">
                  <img
                    src="/profile.jpg"
                    alt={PERSONAL_INFO.name}
                    className="w-full h-[400px] object-cover object-center rounded-2xl filter contrast-[1.03] group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                </div>

                {/* Clean Status Footer */}
                <div className="mt-3 p-3 rounded-xl bg-slate-900/90 border border-slate-800/80 text-xs font-mono space-y-1.5 shadow-inner">
                  <div className="flex items-center gap-2 text-slate-300 font-semibold">
                    <Briefcase className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Son Rol: iCredible Technologies — Stajyer</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 text-[11px]">
                    <GraduationCap className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Bilgisayar Müh. (2022 – 2026)</span>
                  </div>
                </div>
              </SpotlightCard>
            </div>
          </motion.div>

          {/* Right Column (7 cols): Engineer Profile & Summary */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 text-xs font-mono mb-4 shadow-sm">
                <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
                <span>Junior Software Developer</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {PERSONAL_INFO.name}
              </h1>

              {/* Dynamic Animated Role Switcher */}
              <div className="h-8 mt-2 overflow-hidden flex items-center justify-center lg:justify-start">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={roleIndex}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                    className="text-base sm:text-lg font-mono text-gradient-cyan flex items-center gap-2 font-medium"
                  >
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                    <span>{ROLES[roleIndex]}</span>
                  </motion.p>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Profile Bio */}
            <motion.p variants={itemVariants} className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              Bilecik Şeyh Edebali Üniversitesi Bilgisayar Mühendisliği (2022 – 2026) mezunuyum. Web geliştirme (.NET Core, Next.js), PostgreSQL veritabanı mimarileri ve Playwright tabanlı End-to-End (E2E) test otomasyon süreçlerinde pratik staj deneyimine sahibim. Temiz kod (Clean Code) disiplinine önem veren, hızlı öğrenen ve yazılım ekiplerine dinamizm katan bir mühendisim.
            </motion.p>

            {/* Direct Contact Pills */}
            <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-2.5 text-xs text-slate-300 font-mono">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-colors">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>İstanbul, TR</span>
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 transition-colors cursor-pointer"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Mail className="w-3.5 h-3.5 text-cyan-400" />}
                <span>{copiedEmail ? 'E-posta Kopyalandı' : PERSONAL_INFO.email}</span>
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={`tel:${PERSONAL_INFO.phone}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <span>{PERSONAL_INFO.phone}</span>
              </motion.a>
            </motion.div>

            {/* Primary Action Buttons for HR */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <motion.a
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(6,182,212,0.35)' }}
                whileTap={{ scale: 0.95 }}
                href="/resume.pdf?v=20260805"
                download="RidvanEmreBayar_CV.pdf"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-all shadow-lg shadow-cyan-500/20"
              >
                <Download className="w-4 h-4" />
                <span>Özgeçmişi İndir (PDF)</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-slate-200 text-xs font-semibold transition-all"
              >
                <LinkedinIcon className="w-4 h-4 text-blue-400" />
                <span>LinkedIn Profil</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-slate-200 text-xs font-semibold transition-all"
              >
                <GithubIcon className="w-4 h-4 text-slate-300" />
                <span>GitHub Repoları</span>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

