import React from 'react';
import { GraduationCap, Languages, Award, Calendar } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-16 relative bg-slate-950/80 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Education Card */}
          <div className="glass-panel p-8 rounded-2xl glass-panel-hover flex items-start gap-5">
            <div className="p-4 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0">
              <GraduationCap className="w-8 h-8" />
            </div>
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-1">
                Lisans Eğitimi (Yeni Mezun)
              </span>
              <h3 className="text-xl font-bold text-white mb-1">
                Bilecik Şeyh Edebali Üniversitesi
              </h3>
              <div className="text-sm font-semibold text-slate-300 mb-3">
                Bilgisayar Mühendisliği (B.S. in Computer Engineering)
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Mezuniyet Tarihi: <b>30 Haziran 2026</b>. Nesne Yönelimli Programlama, Veri Yapıları & Algoritmalar, Veritabanı Sistemleri, Yazılım Mühendisliği ve Test Otomasyonu konularında güçlü teorik ve pratik temeller.
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                <span>30 Haziran 2026 Mezunu</span>
              </div>
            </div>
          </div>

          {/* Language & Qualifications Card */}
          <div className="glass-panel p-8 rounded-2xl glass-panel-hover flex items-start gap-5">
            <div className="p-4 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20 shrink-0">
              <Languages className="w-8 h-8" />
            </div>
            <div>
              <span className="text-xs font-mono text-violet-400 uppercase tracking-wider block mb-1">
                Dil Yetkinliği
              </span>
              <h3 className="text-xl font-bold text-white mb-1">
                İngilizce Seviyesi
              </h3>
              <div className="text-sm font-semibold text-slate-300 mb-3">
                B2 (Intermediate / Orta-Üstü Seviye)
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Teknik dokümantasyon takibi, uluslararası ekiplerde yazılı/sözlü iletişim, kod incelemeleri ve teknik mülakat yürütebilme yetkinliği.
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
                <Award className="w-3.5 h-3.5 text-violet-400" />
                <span>B2 Professional Working Proficiency</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
