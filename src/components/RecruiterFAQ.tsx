import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

export const RecruiterFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Şu an aktif olarak nerede çalışıyorsun?",
      answer: "Ağustos 2026'dan bu yana OHO Games bünyesinde Junior Software Developer olarak görev alıyor ve aktif olarak Worksauto projesinin yazılım geliştirme süreçlerinde çalışıyorum."
    },
    {
      question: "Uzaktan (Remote) veya çevik (Agile) ekiplerde çalışma tecrüben var mı?",
      answer: "Evet. Önceki ve güncel rollerimde çevik (Agile) ekip ortamlarında Git versiyon kontrolü, PR inceleme (Code Review) süreçleri ve modern görev takip araçlarıyla çalışmaktayım."
    },
    {
      question: "İngilizce iletişim gerektiren projelerde çalışabilir misin?",
      answer: "Evet, B2 seviye İngilizce yetkinliğim ile uluslararası teknik dokümanları rahatlıkla takip edebiliyor, yazılı ve sözlü teknik mülakatlara ve ekip içi toplantılara katılabiliyorum."
    },
    {
      question: "Geliştirme süreçlerinde asıl odak alanın nedir?",
      answer: "Asıl odak alanım .NET Core, Next.js, React ve PostgreSQL altyapısıyla modern, performanslı full-stack web mimarileri ve RESTful API'ler geliştirmektir. Bunun yanında pratik süreçlerde edindiğim test otomasyonu ve yapay zeka entegrasyonları ile yazılım kalitesini uçtan uca destekliyorum."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-20 border-b border-[#1e2638]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-10 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-mono text-zinc-400 mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-zinc-400" />
            <span>Sıkça Sorulan Sorular</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            İşe Alım & Pozisyon Soruları
          </h2>
          <p className="text-zinc-400 text-sm mt-1">
            Görüşmelerde sıklıkla merak edilen konulara kısa ve net yanıtlar.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl border border-[#1e2638] bg-[#0f1422] overflow-hidden transition-colors hover:border-zinc-700"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-semibold text-zinc-100 hover:text-white transition-colors text-sm sm:text-base cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-zinc-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-zinc-200' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-[#1e2638]/60">
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
