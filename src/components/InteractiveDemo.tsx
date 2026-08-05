import React, { useState } from 'react';
import { QA_CORTEX_RULES_DEMO } from '../data/portfolioData';
import { Terminal, Play, AlertTriangle, ShieldAlert, Info, Sparkles, CheckCircle2, RefreshCw } from 'lucide-react';

export const InteractiveDemo: React.FC = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analyzed, setAnalyzed] = useState(false);
  const [selectedRuleId, setSelectedRuleId] = useState<string>(QA_CORTEX_RULES_DEMO[0].id);

  const samplePlaywrightCode = `import { test, expect } from '@playwright/test';

test('Cloud Storage OAuth & Audit Flow', async ({ page }) => {
  await page.goto('https://app.icredible.com/login');
  
  // Rule 1 Trigger: Hardcoded sleep anti-pattern
  await page.waitForTimeout(5000); 

  // Rule 2 Trigger: Brittle CSS selector
  await page.locator('div > div:nth-child(3) > button').click();

  // Rule 3 Trigger: Direct OAuth navigation without API mocking
  await page.goto('https://github.com/login/oauth/authorize');

  await expect(page).toHaveURL(/.*dashboard/);
});`;

  const handleRunAnalysis = () => {
    setIsAnalyzing(true);
    setAnalyzed(false);
    setTimeout(() => {
      setIsAnalyzing(false);
      setAnalyzed(true);
    }, 1200);
  };

  const selectedRule = QA_CORTEX_RULES_DEMO.find(r => r.id === selectedRuleId) || QA_CORTEX_RULES_DEMO[0];

  return (
    <section id="qa-cortex-demo" className="py-20 relative bg-slate-950 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>İnteraktif Ürün Deneyimi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            QA Cortex Live Rule Engine Simulator
          </h2>
          <p className="text-slate-400 mt-4 text-base">
            Geliştirdiğim VS Code Marketplace eklentisi <b>QA Cortex</b>'in deterministik kural motorunu canlı deneyimleyin.
          </p>
        </div>

        {/* Console / Simulator Box */}
        <div className="glass-panel border-slate-700/80 rounded-2xl overflow-hidden shadow-2xl">
          
          {/* Top Terminal Bar */}
          <div className="bg-slate-900/90 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <span className="text-xs font-mono text-slate-400 border-l border-slate-800 pl-3 flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                cloud-storage-flow.spec.ts — Playwright E2E
              </span>
            </div>

            <button
              onClick={handleRunAnalysis}
              disabled={isAnalyzing}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white text-xs font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all disabled:opacity-50"
            >
              {isAnalyzing ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  <span>Kural Motoru Analiz Ediyor...</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Kural Motorunu Çalıştır</span>
                </>
              )}
            </button>
          </div>

          {/* Body: Split View (Code Editor & Diagnostics Output) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[400px]">
            
            {/* Left: Code Editor (7 cols) */}
            <div className="lg:col-span-7 bg-slate-950 p-6 font-mono text-xs text-slate-300 leading-relaxed border-b lg:border-b-0 lg:border-r border-slate-800 overflow-x-auto">
              <pre className="text-slate-300">
                {samplePlaywrightCode.split('\n').map((line, idx) => {
                  const lineNumber = idx + 1;
                  const hasWarning = analyzed && (lineNumber === 7 || lineNumber === 10 || lineNumber === 13);
                  return (
                    <div
                      key={idx}
                      className={`flex items-start gap-4 py-0.5 px-2 rounded ${
                        hasWarning ? 'bg-amber-500/10 border-l-2 border-amber-400 font-semibold text-amber-200' : ''
                      }`}
                    >
                      <span className="text-slate-600 select-none w-6 text-right shrink-0">{lineNumber}</span>
                      <span className={hasWarning ? 'text-amber-200' : 'text-slate-300'}>{line}</span>
                    </div>
                  );
                })}
              </pre>
            </div>

            {/* Right: Diagnostic Output (5 cols) */}
            <div className="lg:col-span-5 bg-slate-900/50 p-6 flex flex-col justify-between">
              
              {!analyzed && !isAnalyzing && (
                <div className="h-full flex flex-col items-center justify-center text-center p-6 text-slate-400">
                  <Sparkles className="w-10 h-10 text-cyan-400/50 mb-3" />
                  <p className="text-sm font-semibold text-slate-300">Analiz Başlatılmadı</p>
                  <p className="text-xs text-slate-400 mt-1 max-w-xs">
                    Yukarıdaki "Kural Motorunu Çalıştır" butonuna basarak statik AST kod analizini başlatın.
                  </p>
                </div>
              )}

              {isAnalyzing && (
                <div className="h-full flex flex-col items-center justify-center text-center p-6">
                  <RefreshCw className="w-8 h-8 text-cyan-400 animate-spin mb-3" />
                  <p className="text-xs font-mono text-cyan-300">Playwright AST Tree Taranıyor...</p>
                  <p className="text-xs font-mono text-slate-500 mt-1">Rule Engine Engine v1.0.4</p>
                </div>
              )}

              {analyzed && (
                <div className="space-y-4 animate-fade-in">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <span className="text-xs font-mono font-semibold text-emerald-400 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" />
                      3 Kural İhlali Tespit Edildi
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      Score: 92/100
                    </span>
                  </div>

                  {/* Rule Tabs */}
                  <div className="space-y-2">
                    {QA_CORTEX_RULES_DEMO.map((rule) => (
                      <button
                        key={rule.id}
                        onClick={() => setSelectedRuleId(rule.id)}
                        className={`w-full text-left p-3 rounded-xl border text-xs transition-all flex items-start gap-3 ${
                          selectedRuleId === rule.id
                            ? 'bg-slate-800/90 border-cyan-500/50 text-white'
                            : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700'
                        }`}
                      >
                        {rule.severity === 'Warning' && <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />}
                        {rule.severity === 'High' && <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />}
                        {rule.severity === 'Info' && <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />}
                        <div>
                          <div className="font-semibold text-slate-200">{rule.title}</div>
                          <div className="text-[11px] font-mono text-slate-400 mt-0.5">Satır: {rule.line}</div>
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Selected Rule Inspector Card */}
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs font-mono space-y-2">
                    <div className="text-amber-400 font-semibold">{selectedRule.title}</div>
                    <div className="text-slate-400 text-[11px]">Mevcut Kod: <span className="text-rose-300">{selectedRule.codeSnippet}</span></div>
                    <div className="text-emerald-400 text-[11px]">Önerilen Çözüm: <span className="text-emerald-300">{selectedRule.suggestion}</span></div>
                    <div className="text-cyan-400 text-[11px] pt-1 border-t border-slate-900">Etki: {selectedRule.impact}</div>
                  </div>
                </div>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
