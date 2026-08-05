export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  period: string;
  isCurrent?: boolean;
  location: string;
  summary: string;
  achievements: string[];
  techStack: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'AI & Automation' | 'Full-Stack' | 'Open Source';
  description: string;
  longDescription?: string;
  highlights: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  marketplaceUrl?: string;
  featured: boolean;
  badge?: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: { name: string; tag: string }[];
}

export const PERSONAL_INFO = {
  name: "Rıdvan Emre Bayar",
  title: "Junior Software Developer",
  tagline: "Full-Stack, Test Otomasyonu & Yapay Zeka Sistemleri",
  location: "İstanbul, Türkiye",
  email: "ridvanemrebayar@gmail.com",
  phone: "+90-552-374-1500",
  github: "https://github.com/ridvan-byr",
  linkedin: "https://linkedin.com/in/ridvanemrebayar",
  githubUsername: "ridvan-byr",
  summary: "30 Haziran 2026 Bilgisayar Mühendisliği mezunu, web geliştirme, backend sistemleri, test otomasyonu ve yapay zeka entegrasyonlarında pratik staj deneyimine sahip Junior Yazılım Geliştirici. Temiz kod (Clean Code), sürekli öğrenme ve yazılım ekiplerine hızlı adapte olup değer katma odaklı.",
  graduationDate: "30 Haziran 2026",
  stats: [
    { label: "Seviye & Unvan", value: "Junior Software Dev", sub: "30 Haziran 2026 Mezunu" },
    { label: "Playwright E2E Suite", value: "39 Spec", sub: "5 Bulut Depolama & OAuth" },
    { label: "VS Code Extension", value: "QA Cortex", sub: "%100 Precision & Recall" },
    { label: "Teknoloji Odağı", value: ".NET & Next.js", sub: "Full-Stack & Test Automation" },
  ]
};

export const EXPERIENCES: WorkExperience[] = [
  {
    id: "icredible",
    company: "iCredible Technologies Inc.",
    role: "Software Developer Intern (Uzun Dönem)",
    period: "Şub 2026 – Günümüz",
    isCurrent: true,
    location: "İstanbul, TR (Hibrit)",
    summary: ".NET (ASP.NET Core), Next.js ve PostgreSQL altyapısında full-stack web geliştirme ve Playwright test otomasyonu alanında uzun dönem staj deneyimi.",
    achievements: [
      ".NET (ASP.NET Core), Next.js ve PostgreSQL kullanarak uçtan uca full-stack web uygulaması geliştirme süreçlerinde yer aldı.",
      "Frontend entegrasyonu sağlayan yüksek performanslı RESTful API'ler tasarladı ve uyguladı.",
      "PostgreSQL veritabanı tasarımı, şema migrasyonları ve sorgu süreçlerine katkı sağladı.",
      "Geliştirme ortamlarında tutarlılık adına uygulamaları Docker ile konteynerize etti.",
      "Auth, OAuth (GitHub/Bitbucket), 5 bulut depolama sağlayıcısı (AWS S3, Azure, GDrive, OneDrive, Huawei OBS) ve audit-log doğrulamasını kapsayan 39-spec Playwright E2E test paketini (POM & API mocking) oluşturdu ve sürdürülebilirliğini sağladı.",
      "Postman kullanarak API doğrulama ve otomasyon testlerini gerçekleştirdi."
    ],
    techStack: [".NET Core", "ASP.NET Core", "Next.js", "PostgreSQL", "Docker", "Playwright", "TypeScript", "Postman", "OAuth"]
  },
  {
    id: "routewise",
    company: "Routewise",
    role: "Software Developer Intern",
    period: "Haz 2025 – Oca 2026",
    location: "Uzaktan (Remote)",
    summary: "Resmi beta aşamasındaki duyarlı (responsive) web uygulamasının kullanıcı arayüzü ve kimlik doğrulama modüllerinin geliştirilmesi.",
    achievements: [
      "React.js, TypeScript ve Tailwind CSS kullanarak modern, hızlı ve responsive kullanıcı arayüzleri geliştirdi.",
      "Giriş, kayıt ve şifre sıfırlama süreçlerini içeren kullanıcı kimlik doğrulama (Auth) sistemlerini entegre etti.",
      "Uzaktan çalışan çevik (Agile) ekip ortamında Git ve görev takip araçlarıyla etkin iş birliği yürüttü."
    ],
    techStack: ["React.js", "TypeScript", "Tailwind CSS", "Git", "REST APIs", "Auth Flow"]
  },
  {
    id: "setgreet",
    company: "Setgreet",
    role: "Software Developer Intern",
    period: "Nis 2025 – Ağu 2025",
    location: "Uzaktan (Remote)",
    summary: "Frontend bileşenlerinin geliştirilmesi ve MongoDB veritabanı CRUD operasyonlarının yönetimi.",
    achievements: [
      "React.js ve Tailwind CSS ile kullanıcı dostu ve mobil uyumlu frontend bileşenleri inşa etti.",
      "MongoDB üzerinde veri şeması tasarımı ve CRUD operasyonlarını yönetti.",
      "Git versiyon kontrol sistemi ile ekip içi kod inceleme süreçlerine katıldı."
    ],
    techStack: ["React.js", "Tailwind CSS", "MongoDB", "JavaScript", "Git"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "qa-cortex",
    title: "QA Cortex",
    subtitle: "AI-Powered Test Review & Design Platform",
    category: "AI & Automation",
    badge: "Open Source & VS Code Marketplace",
    featured: true,
    description: "Otomatik test inceleme ve test tasarımı sağlayan, repository-aware (depo farkındalıklı) açık kaynaklı AI platformu.",
    longDescription: "QA Cortex, Playwright ve Selenium test otomasyon projelerini analiz eden, deterministik kural motoru ile açıklanabilir kalite raporları üreten açık kaynaklı bir inceleme motorudur. VS Code eklentisi olarak editör içi tanılamalar, CodeLens, Code Actions ve CLI araçları sunar.",
    highlights: [
      "VS Code Marketplace üzerinde resmi olarak yayınlandı.",
      "40 senaryolu benchmark test setinde %100 doğruluk ve hassasiyet (Precision & Recall) başarısı.",
      "Playwright, Selenium ve Python otomasyon framework'leri için modüler adaptör mimarisi.",
      "Editör içi teşhis, CodeLens ve hızlı düzeltme (Code Actions) yetenekleri."
    ],
    techStack: ["TypeScript", "VS Code API", "Python", "Playwright", "Selenium", "AST Parser", "AI Engines"],
    githubUrl: "https://github.com/ridvan-byr/qa-cortex",
    marketplaceUrl: "https://marketplace.visualstudio.com/items?itemName=qa-cortex.qa-cortex-vscode-client"
  },
  {
    id: "ai-project-management",
    title: "AI-Powered Project Management System",
    subtitle: "LLM Agent Entegreli Proje Yönetimi",
    category: "Full-Stack",
    badge: "Full-Stack Project",
    featured: true,
    description: "Rol tabanlı erişim kontrolüne sahip, ChatGPT tabanlı LLM ajanı ile otomatik görev özetleme ve akıllı öneri sunan sistem.",
    longDescription: "Next.js, Express.js ve PostgreSQL altyapısı üzerine kurulu bu sistem; proje ekiplerinin iş yükünü optimize etmek için yapay zeka ajanlarını süreçlere dahil eder. Görevlerin karmaşıklığını analiz eder, otomatik özet çıkarır ve geliştiricilere bir sonraki aksiyon adımlarını önerir.",
    highlights: [
      "ChatGPT-based LLM Ajanı ile otomatik görev özetleri ve zeki iş önerileri.",
      "Role-Based Access Control (RBAC) ile güvenli yetkilendirme.",
      "Next.js frontend ve Express.js REST API katmanı arasında PostgreSQL ile yüksek hızlı senkronizasyon."
    ],
    techStack: ["Next.js", "Express.js", "PostgreSQL", "OpenAI API", "TypeScript", "Node.js", "Tailwind CSS"],
    githubUrl: "https://github.com/ridvan-byr/Project-Management-With-LLM-Agent"
  },
  {
    id: "ecommerce-admin",
    title: "E-Commerce Platform",
    subtitle: "Full-Stack E-Ticaret Platformu",
    category: "Full-Stack",
    badge: "Full-Stack Project",
    featured: true,
    description: "ASP.NET Core ve Next.js kullanılarak geliştirilmiş, yüksek performanslı e-ticaret yönetim ve alışveriş platformu.",
    longDescription: "Sipariş yönetimi, ürün kataloğu, stok takibi ve medya depolama süreçlerini yöneten katmanlı mimariye sahip full-stack platform. Cloudflare R2 görsel depolama, JWT & Firebase Auth ve hız sınırlama (Rate Limiting) mekanizmalarıyla güçlendirilmiştir.",
    highlights: [
      "Repository & Service Tasarım Desenleri (Design Patterns) ile temiz kod mimarisi.",
      "Firebase Auth & JWT tabanlı hibrit kimlik doğrulama.",
      "Cloudflare R2 entegrasyonu ile ultra hızlı ve maliyet etkin görsel depolama.",
      "API güvenlik katmanlarında Rate-Limiting uygulaması."
    ],
    techStack: ["ASP.NET Core", "Next.js", "TypeScript", "SQL Server", "Firebase Auth", "Cloudflare R2", "JWT", "RESTful API"],
    githubUrl: "https://github.com/ridvan-byr/E-CommerceWebsite"
  },
  {
    id: "gitsec-test-automation",
    title: "GitSec Test Automation Suite",
    subtitle: "Playwright E2E Otomasyon Altyapısı",
    category: "AI & Automation",
    badge: "Playwright E2E Suite",
    featured: true,
    description: "GitSec Güvenlik Dashboard'u için Playwright ile geliştirilmiş End-to-End (E2E) test otomasyon mimarisi.",
    longDescription: "Page Object Model (POM) prensiplerine sadık kalınarak hazırlanmış bu otomasyon suite'i; kullanıcı yetkilendirmesi, güvenlik tarama sonuçları doğrulaması ve API mocking stratejileriyle sürekli entegrasyon (CI/CD) boru hatlarında yüksek güvenilirlikte test garantisi sunar.",
    highlights: [
      "Page Object Model (POM) mimarisi ile temiz ve yönetilebilir test kodları.",
      "API Mocking ve izleme log doğrulamaları (Audit-log validation).",
      "Güvenlik dashboard bileşenlerinin otomatik E2E senaryo kapsayıcılığı."
    ],
    techStack: ["Playwright", "TypeScript", "POM Pattern", "API Mocking", "JSON Schema", "CI/CD"],
    githubUrl: "https://github.com/ridvan-byr/gitsec-test-automation"
  },
  {
    id: "ai-document-summarizer",
    title: "AI Document Summarizer & Video Recommender",
    subtitle: "Streamlit & HuggingFace NLP Uygulaması",
    category: "AI & Automation",
    badge: "NLP & Streamlit",
    featured: false,
    description: "HuggingFace Transformers ve GPU optimizasyonu ile doküman özetleme ve YouTube video öneri sistemi.",
    longDescription: "Büyük çaplı PDF/TXT belgelerini NLP modelleri ile özetleyen, konu içeriğine göre ilgili YouTube öğretici videolarını otomatik eşleştiren Streamlit arayüzlü Python uygulaması.",
    highlights: [
      "Streamlit ile sezgisel ve hızlı etkileşimli kullanıcı arayüzü.",
      "HuggingFace Transformers modelleri ile GPU hızlandırmalı metin özetleme.",
      "İçerik bazlı akıllı YouTube video öneri algoritması."
    ],
    techStack: ["Python", "Streamlit", "Transformers", "PyTorch", "NLP", "GPU Acceleration"],
    githubUrl: "https://github.com/ridvan-byr/AI-Document-Summarizer"
  },
  {
    id: "aybek-guvenlik",
    title: "Aybek Güvenlik Kurumsal Web Sitesi",
    subtitle: "Canlı Müşteri Web Projesi",
    category: "Full-Stack",
    badge: "Canlı Müşteri Projesi",
    featured: false,
    description: "Aybek Güvenlik firması için geliştirilen ve yayında olan kurumsal, responsive web platformu.",
    longDescription: "Hizmet tanıtımları, teklif alma formları ve dinamik içerik yönetimi sunan, mobil uyumlu ve SEO optimize kurumsal firma web sitesi.",
    highlights: [
      "Gerçek canlı müşteri projesi (aybekguvenlik.com).",
      "Mobil uyumlu (responsive) ve yüksek performanslı ön yüz tasarımı.",
      "SEO arama motoru optimizasyonu."
    ],
    techStack: ["JavaScript", "HTML5", "CSS3", "Responsive UI", "SEO"],
    githubUrl: "https://github.com/ridvan-byr/Aybek-Guvenlik-WebSite",
    liveUrl: "https://www.aybekguvenlik.com/"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programlama Dilleri",
    iconName: "Code2",
    skills: [
      { name: "C#", tag: ".NET Core & REST APIs" },
      { name: "TypeScript", tag: "Frontend & Node.js" },
      { name: "JavaScript", tag: "Core Web & DOM" },
      { name: "Python", tag: "AI & Automation Scripts" },
      { name: "Java", tag: "OOP Principles" },
      { name: "C++", tag: "Systems Fundamentals" }
    ]
  },
  {
    title: "Backend & Mimari",
    iconName: "Server",
    skills: [
      { name: ".NET (ASP.NET Core)", tag: "Web APIs & Microservices" },
      { name: "Node.js / Express.js", tag: "Async Backend Services" },
      { name: "FastAPI", tag: "Python Microservices" },
      { name: "Flask", tag: "Lightweight Web APIs" },
      { name: "RESTful API Design", tag: "OpenAPI Standards" }
    ]
  },
  {
    title: "Frontend Geliştirme",
    iconName: "Layout",
    skills: [
      { name: "React.js", tag: "Component Architecture" },
      { name: "Next.js", tag: "SSR & App Router" },
      { name: "Tailwind CSS", tag: "Modern Responsive UI" },
      { name: "HTML5 / CSS3", tag: "Semantic & Clean Markup" }
    ]
  },
  {
    title: "Test & Kalite Güvence (QA)",
    iconName: "TestTube2",
    skills: [
      { name: "Playwright E2E", tag: "POM & API Mocking" },
      { name: "Postman", tag: "API Test Automation" },
      { name: "Selenium", tag: "Automated Web Testing" },
      { name: "VS Code API & AST", tag: "Code Analysis Engines" }
    ]
  },
  {
    title: "Veritabanları & DevOps",
    iconName: "Database",
    skills: [
      { name: "PostgreSQL", tag: "Schema Design & Migrations" },
      { name: "MS SQL Server", tag: "Relational Databases" },
      { name: "MySQL / SQLite", tag: "Relational Databases" },
      { name: "Docker", tag: "Containerization" },
      { name: "Git & GitHub", tag: "CI/CD & Version Control" }
    ]
  },
  {
    title: "Yapay Zeka & LLM Teknolojileri",
    iconName: "Sparkles",
    skills: [
      { name: "ChatGPT & OpenAI API", tag: "LLM Agents & Integration" },
      { name: "HuggingFace Transformers", tag: "NLP Models" },
      { name: "Streamlit", tag: "Python Interactive Apps" },
      { name: "AST Engine", tag: "Static Rule Analysis" }
    ]
  }
];

export const QA_CORTEX_RULES_DEMO = [
  {
    id: "rule-1",
    title: "Hardcoded Timeout / Sleep Detected",
    severity: "Warning",
    line: 7,
    codeSnippet: "await page.waitForTimeout(5000); // Anti-pattern",
    suggestion: "replace with dynamic assertion: await expect(element).toBeVisible()",
    impact: "Flaky test riski %40 düşürüldü."
  },
  {
    id: "rule-2",
    title: "Brittle Selector Usage",
    severity: "High",
    line: 10,
    codeSnippet: "page.locator('div > div:nth-child(3) > button');",
    suggestion: "use user-visible locator: page.getByRole('button', { name: 'Submit' })",
    impact: "DOM değişikliklerine karşı test dayanıklılığı sağlandı."
  },
  {
    id: "rule-3",
    title: "Missing API Mocking for OAuth Flow",
    severity: "Info",
    line: 13,
    codeSnippet: "await page.goto('https://github.com/login/oauth/authorize');",
    suggestion: "mock OAuth callback route using page.route('**/oauth/callback', ...)",
    impact: "Test çalıştırma süresi 12s -> 1.4s düşürüldü."
  }
];
