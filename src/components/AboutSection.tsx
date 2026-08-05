import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { User, Target, ShieldCheck, Zap, HeartHandshake, CheckCircle2, GraduationCap } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const principles = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-cyan-400" />,
      title: "Test Odaklı Geliştirme Kültürü",
      description: "Playwright E2E ve unit test yaklaşımlarıyla sürdürülebilir, sıfır-regresyon riskli yazılımlar üretmek."
    },
    {
      icon: <Zap className="w-5 h-5 text-violet-400" />,
      title: "Full-Stack Temeller & Adaptasyon",
      description: ".NET Core, Next.js ve PostgreSQL üzerinde hızlı öğrenme ve modern web mimarilerine uyum sağlama."
    },
    {
      icon: <Target className="w-5 h-5 text-blue-400" />,
      title: "Otomasyon & Ürün Odaklılık",
      description: "QA Cortex gibi VS Code eklentileri üreterek yazılım kalitesini ve süreç verimliliğini artırmak."
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-emerald-400" />,
      title: "Gelişime Açıklık & Ekip Uyumu",
      description: "Code Review kültürüne değer veren, çevik (Agile) ekiplerde motivasyonu yüksek bir Junior mühendis olarak değer katmak."
    }
  ];

  return (
    <section id="about" className="py-20 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-semibold mb-4">
            <User className="w-3.5 h-3.5" />
            <span>Mühendislik Vizyonum</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Hakkımda & Mühendislik Yaklaşımım
          </h2>
          <p className="text-slate-400 mt-4 text-base">
            Motivasyonu yüksek bir Junior Yazılım Geliştirici olarak yazılım geliştirme sürecine yaklaşımım ve çalışma prensiplerim.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Photo & Quick Facts */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md">
              
              {/* Outer Glow Halo */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-violet-600 to-blue-500 opacity-30 blur-2xl rounded-3xl" />

              {/* Photo Frame */}
              <div className="relative glass-panel rounded-3xl p-3 border border-slate-700/80 shadow-2xl overflow-hidden group">
                <img
                  src="/profile.jpg"
                  alt={PERSONAL_INFO.name}
                  className="w-full h-[440px] object-cover object-center rounded-2xl group-hover:scale-[1.02] transition-transform duration-500"
                />

                {/* Overlay Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 glass-panel rounded-2xl border border-white/10 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-white">{PERSONAL_INFO.name}</div>
                      <div className="text-xs text-cyan-400 font-mono">Junior Software Developer</div>
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-[10px] font-semibold font-mono">
                      <GraduationCap className="w-3 h-3 text-cyan-400" /> 2022 – 2026 Mezunu
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Right Column: Bio & Core Principles */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="glass-panel p-8 rounded-2xl space-y-4 border border-slate-800">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="text-cyan-400">#</span> Heyecanlı ve Öğrenmeye Aç Bir Junior Yazılımcı
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Bilecik Şeyh Edebali Üniversitesi Bilgisayar Mühendisliği (<b>2022 – 2026</b>) bölümünden mezun oldum. Öğrenim hayatım ve staj dönemlerimde sadece teorik derslerle sınırlı kalmayıp; modern web teknolojileri, test otomasyon altyapıları ve yapay zeka entegrasyonlarında pratik projeler geliştirdim.
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                <b>iCredible Technologies Inc.</b>'deki uzun dönem stajımda 39 farklı senaryoyu kapsayan Playwright test paketi hazırlayarak bulut depolama entegrasyonlarının güvenilirliğini sağladım. Açık kaynak projem <b>QA Cortex</b> ile VS Code Marketplace'te yayınlanmış bir eklenti geliştirdim. Amacım, güçlü temellerim ve hızlı öğrenme kabiliyetimle yazılım ekiplerine dinamizm katmaktır.
              </p>
            </div>

            {/* Principles Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {principles.map((item, idx) => (
                <div key={idx} className="glass-panel p-5 rounded-xl glass-panel-hover flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Checklist */}
            <div className="flex flex-wrap gap-4 pt-2 text-xs text-slate-300 font-mono">
              <span className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Junior Full-Stack Dev
              </span>
              <span className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Fast Learner & Adaptable
              </span>
              <span className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Agile & Team Player
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
