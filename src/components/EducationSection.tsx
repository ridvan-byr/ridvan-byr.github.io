import React from 'react';
import { GraduationCap, Languages, Award, Calendar } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-16 md:py-20 border-b border-[#1e2638]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-2">
            <GraduationCap className="w-3.5 h-3.5 text-zinc-400" />
            <span>Akademik Geçmiş & Dil</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Eğitim & Nitelikler
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          
          {/* Education Card */}
          <div className="p-6 rounded-xl border border-[#1e2638] bg-[#0f1422] flex items-start gap-4">
            <div className="p-2.5 rounded-lg bg-[#090d16] border border-[#1e2638] shrink-0 text-zinc-300">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-mono text-zinc-400 block mb-1">
                Lisans Eğitimi
              </span>
              <h3 className="text-lg font-bold text-white mb-0.5">
                Bilecik Şeyh Edebali Üniversitesi
              </h3>
              <div className="text-sm font-medium text-zinc-300 mb-3">
                Bilgisayar Mühendisliği (B.S. in Computer Engineering)
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                Öğrenim Süresi: 2022 – 2026. Nesne Yönelimli Programlama, Veri Yapıları & Algoritmalar, Veritabanı Sistemleri, Yazılım Mimarisi ve Test Otomasyonu alanlarında teorik ve pratik mühendislik temelleri.
              </p>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#090d16] border border-[#1e2638] text-xs font-mono text-zinc-300">
                <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                <span>2022 – 2026 Mezunu</span>
              </div>
            </div>
          </div>

          {/* Language Card */}
          <div className="p-6 rounded-xl border border-[#1e2638] bg-[#0f1422] flex items-start gap-4">
            <div className="p-2.5 rounded-lg bg-[#090d16] border border-[#1e2638] shrink-0 text-zinc-300">
              <Languages className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-mono text-zinc-400 block mb-1">
                Yabancı Dil Yetkinliği
              </span>
              <h3 className="text-lg font-bold text-white mb-0.5">
                İngilizce Seviyesi
              </h3>
              <div className="text-sm font-medium text-zinc-300 mb-3">
                B2 (Professional Working Proficiency)
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                Uluslararası ekiplerle teknik iletişim kurabilme, İngilizce teknik dokümantasyon takibi, kod incelemeleri (PR reviews) ve teknik mülakat yürütebilme yetkinliği.
              </p>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#090d16] border border-[#1e2638] text-xs font-mono text-zinc-300">
                <Award className="w-3.5 h-3.5 text-zinc-400" />
                <span>B2 Çalışma Yetkinliği</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
