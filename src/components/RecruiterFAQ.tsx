import React, { useState } from 'react';
import { HelpCircle, ChevronDown, CheckCircle2 } from 'lucide-react';

export const RecruiterFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Tam zamanlı veya hibrit pozisyonlar için hemen başlayabilir misin?",
      answer: "Evet! Bilgisayar Mühendisliği (2022 – 2026) mezunuyum. İstanbul içi hibrit/ofis pozisyonlara veya uzaktan (remote) Junior Software Developer rollerine hemen başlama durumum mevcuttur."
    },
    {
      question: "Uzaktan (Remote) çalışma ve çevik (Agile) ekip tecrüben var mı?",
      answer: "Evet. Routewise ve Setgreet stajlarımı tamamen remote ekip ortamında gerçekleştirdim. Git versiyon kontrolü, PR inceleme (Code Review) süreçleri ve görev takip araçlarıyla (Jira/Trello) çalışmaya son derece alışkınım."
    },
    {
      question: "İngilizce iletişim gerektiren projelerde çalışabilir misin?",
      answer: "Evet, B2 (Intermediate) seviye İngilizce yetkinliğim ile uluslararası teknik dokümanları rahatlıkla takip edebiliyor, yazılı/sözlü teknik mülakatlara ve ekip içi stand-up toplantılarına katılabiliyorum."
    },
    {
      question: "Full-Stack geliştirme mi yoksa Test Otomasyonu (QA) mu odak alanın?",
      answer: "Her ikisinde de pratik deneyime sahibim. .NET Core, Next.js ve PostgreSQL ile full-stack web uygulamaları geliştirirken, Playwright ve VS Code API ile test otomasyon paketleri ve kural motorları inşa etmekten büyük keyif alıyorum."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 relative bg-slate-950/80 border-t border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-semibold mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>İK & İşe Alım Hızlı Sorular</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            İşe Alım Uzmanları İçin SSS
          </h2>
          <p className="text-slate-400 mt-2 text-sm">
            Ön görüşmelerde sıklıkla sorulan sorulara hızlı yanıtlar.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="glass-panel border-slate-800 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-semibold text-white hover:text-cyan-300 transition-colors text-sm sm:text-base"
                >
                  <span className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-cyan-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-4 font-sans animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
