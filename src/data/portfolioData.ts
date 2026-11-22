export interface StackLayer {
  id: 'web' | 'ai' | 'cp' | 'vfx' | 'biotech';
  label: string;
  badge: string;
  color: string;
  scriptTag: string;
  taglinePrefix: string;
  taglineHighlight: string;
  taglineSuffix: string;
  summary: string;
}

export interface EducationEntry {
  id: string;
  period: string;
  institution: string;
  description: string;
  isActive?: boolean;
}

export interface NeuroTelemetryProfile {
  mode: 'meditation' | 'focus' | 'stress';
  label: string;
  frequencyHz: number;
  dopamineDelta: string;
  stimulationCurrent: string;
  statusText: string;
  bars: number[];
}

export interface ToolCapability {
  id: string;
  category: string;
  code: string;
  title: string;
  bgClass: string;
  borderClass?: string;
  accentTextClass: string;
  subTextClass: string;
  detail: string;
  workflowTags: string[];
}

export interface HardSkill {
  index: string;
  title: string;
  description: string;
}

export interface SoftSkill {
  id: string;
  icon: string;
  title: string;
  context: string;
}

export interface ExperienceItem {
  id: string;
  period: string;
  organization: string;
  role: string;
  division: string;
  category: 'leadership' | 'events' | 'tech';
  highlights: string[];
  spanFull?: boolean;
}

export const HERO_PORTRAIT_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBYztu7R1eHn0EXTxk4hRzxtSnoENZvRFkkTt_PIRbchHdL7KUxVWceDkyMtYc6t3l5U9QwU0NBq3sy5VDzLi_PNaZDIL86O0SrnIFe28zgdGhazCebqUNJP_5LYnATpPLDOa7c-XLakEsqv_kUIFEuae7KIudfc_BlUmYqCgtfK30YGnLlRPvlx8RPv3YIUnni7g23e-a1q4R4ilqn7PyG8ydiRWIj95kkyTHU1CuFIF7CvT2qNNQ1';

export const STACK_LAYERS: StackLayer[] = [
  {
    id: 'web',
    label: 'Web & HTML',
    badge: 'v3.4',
    color: '#0057FF',
    scriptTag: 'Informatics &',
    taglinePrefix: 'BUILDING INTERACTIVE SYSTEMS, ',
    taglineHighlight: 'SHAPING',
    taglineSuffix: ' DIGITAL VISUALS.',
    summary: 'Semantic HTML architecture, responsive component systems, and clean frontend engineering.',
  },
  {
    id: 'ai',
    label: 'Artificial Intelligence',
    badge: 'ML/DL',
    color: '#2563EB',
    scriptTag: 'Artificial',
    taglinePrefix: 'ENGINEERING INTELLIGENT ',
    taglineHighlight: 'NEURAL',
    taglineSuffix: ' SYSTEMS & MODELS.',
    summary: 'Applied machine learning pipelines, predictive modeling, and signal interpretation.',
  },
  {
    id: 'cp',
    label: 'Competitive Coding',
    badge: 'C++',
    color: '#0284C7',
    scriptTag: 'Competitive',
    taglinePrefix: 'SOLVING COMPLEX ',
    taglineHighlight: 'ALGORITHMS',
    taglineSuffix: ' AT SPEED.',
    summary: 'Graph theory, dynamic programming, data structures, and rigorous time-complexity tuning.',
  },
  {
    id: 'vfx',
    label: 'VFX & 3D Elements',
    badge: 'Ae/Pr',
    color: '#7C3AED',
    scriptTag: 'Cinematic',
    taglinePrefix: 'SHAPING ',
    taglineHighlight: 'VISUAL EFFECTS',
    taglineSuffix: ' & MOTION SYSTEMS.',
    summary: 'After Effects compositing, 3D camera tracking, color grading, and Premiere Pro storytelling.',
  },
  {
    id: 'biotech',
    label: 'Neuro-Tech Research',
    badge: 'GOLD',
    color: '#059669',
    scriptTag: 'Biotech &',
    taglinePrefix: 'NEURO DAWN ',
    taglineHighlight: 'GOLD MEDALIST',
    taglineSuffix: ' AT IIIEX 2025.',
    summary: 'Non-invasive brainwave telemetry and substantia nigra micro-stimulation research.',
  },
];

export const WHAT_I_DO_ITEMS = [
  { label: 'Web Architecture (HTML)', layerId: 'web' as const },
  { label: 'AI & Neural Systems', layerId: 'ai' as const },
  { label: 'Competitive Coding', layerId: 'cp' as const },
  { label: 'After Effects VFX', layerId: 'vfx' as const },
  { label: 'Premiere Video Editing', layerId: 'vfx' as const },
];

export const EDUCATION_HISTORY: EducationEntry[] = [
  {
    id: 'itpln',
    period: '2026 – Present',
    institution: 'Institut Teknologi PLN',
    description:
      'Mahasiswa Teknik Informatika — Deep dive into competitive coding, AI systems, and interactive web technologies.',
    isActive: true,
  },
  {
    id: 'man-ic',
    period: '2023 – 2026',
    institution: 'MAN Insan Cendekia OKI',
    description:
      'Peminatan Kesehatan - Sosiologi. Served as Class President (6 months) & Vice Class President. Active in national seminars, STEM competitions, and dormitory leadership.',
  },
  {
    id: 'mtsn2',
    period: '2020 – 2023',
    institution: 'MTsN 2 Kota Palembang',
    description: 'Pendidikan Menengah Pertama (Junior High School).',
  },
  {
    id: 'sdit',
    period: '2014 – 2020',
    institution: "SD IT Ma'had Izzatuna",
    description: 'Pendidikan Dasar (Elementary School).',
  },
];

export const NEURO_TELEMETRY_PROFILES: Record<NeuroTelemetryProfile['mode'], NeuroTelemetryProfile> = {
  meditation: {
    mode: 'meditation',
    label: 'Meditation',
    frequencyHz: 40,
    dopamineDelta: '+18.4% Baseline Stability',
    stimulationCurrent: '1.2 mA Micro-Pulse',
    statusText: 'STABLE 40Hz',
    bars: [3, 6, 8, 4, 9, 5, 10, 7, 4, 8, 5, 9, 6, 4],
  },
  focus: {
    mode: 'focus',
    label: 'Attention / Focus',
    frequencyHz: 22,
    dopamineDelta: '+24.1% Synaptic Lock',
    stimulationCurrent: '2.4 mA Calibrated',
    statusText: 'LOCKED 22Hz',
    bars: [5, 8, 9, 7, 10, 8, 9, 6, 8, 10, 7, 9, 8, 6],
  },
  stress: {
    mode: 'stress',
    label: 'Stress Recovery',
    frequencyHz: 11,
    dopamineDelta: 'Stabilizing Substantia Nigra',
    stimulationCurrent: '1.8 mA Dampening',
    statusText: 'REGULATING 11Hz',
    bars: [8, 4, 10, 3, 7, 9, 4, 8, 6, 3, 9, 5, 7, 4],
  },
};

export const TOOL_CAPABILITIES: ToolCapability[] = [
  {
    id: 'html',
    category: 'Web Architecture',
    code: 'HTML',
    title: 'Semantic Foundations',
    bgClass: 'bg-[#E34F26]',
    accentTextClass: 'text-white/80',
    subTextClass: 'text-white',
    detail:
      'Clean document outlines, accessible landmarks, responsive grid layout systems, and lightweight UI structure.',
    workflowTags: ['Semantic DOM', 'A11y Landmarks', 'Responsive Layout'],
  },
  {
    id: 'cp',
    category: 'Algorithms',
    code: 'CP',
    title: 'Data Structures & Logic',
    bgClass: 'bg-[#0057FF]',
    accentTextClass: 'text-white/80',
    subTextClass: 'text-white',
    detail:
      'Algorithmic problem solving in C++ with graph traversal, dynamic programming, and strict time/memory optimization.',
    workflowTags: ['C++ STL', 'Graph & DP', 'Complexity Tuning'],
  },
  {
    id: 'ai',
    category: 'Intelligent Systems',
    code: 'AI',
    title: 'ML & Model Pipelines',
    bgClass: 'bg-[#10A37F]',
    accentTextClass: 'text-white/80',
    subTextClass: 'text-white',
    detail:
      'Signal classification concepts, neural telemetry processing, and applied AI workflows for preventive health-tech.',
    workflowTags: ['Signal Telemetry', 'Model Evaluation', 'Python Workflows'],
  },
  {
    id: 'ae',
    category: 'Motion Design',
    code: 'Ae',
    title: 'VFX & 3D Elements',
    bgClass: 'bg-[#001E36]',
    borderClass: 'border-2 border-[#31A8FF]',
    accentTextClass: 'text-[#31A8FF]',
    subTextClass: 'text-slate-200',
    detail:
      'Compositing, rotoscoping, 3D camera tracking, particle integration, and kinetic typography rigs.',
    workflowTags: ['3D Camera Track', 'Compositing', 'Motion Keyframes'],
  },
  {
    id: 'pr',
    category: 'Video Production',
    code: 'Pr',
    title: 'Advanced Editing',
    bgClass: 'bg-[#140826]',
    borderClass: 'border-2 border-[#EA77FF]',
    accentTextClass: 'text-[#EA77FF]',
    subTextClass: 'text-slate-200',
    detail:
      'Multi-track narrative pacing, Lumetri color grading, audio ducking, and rhythmic cut-on-action timelines.',
    workflowTags: ['Color Grading', 'Narrative Pacing', 'Audio Mastering'],
  },
  {
    id: 'cc',
    category: 'Fast Form',
    code: 'CC',
    title: 'Fast-Paced Edits',
    bgClass: 'bg-[#111111]',
    borderClass: 'border border-white/20',
    accentTextClass: 'text-slate-400',
    subTextClass: 'text-slate-300',
    detail:
      'Rapid social storytelling, dynamic captioning, speed ramping, and high-retention short-form sequences.',
    workflowTags: ['Speed Ramping', 'Kinetic Captions', 'Short-Form Cuts'],
  },
];

export const HARD_SKILLS: HardSkill[] = [
  {
    index: '01.',
    title: 'Pembuatan Kerangka Web (HTML)',
    description:
      'Deep focus on clean semantic markup, accessibility (a11y), responsive structures, and component integration.',
  },
  {
    index: '02.',
    title: 'Competitive Programming',
    description:
      'Algorithmic problem-solving, computational optimization, sorting algorithms, and mathematical reasoning.',
  },
  {
    index: '03.',
    title: 'Multimedia & VFX Production',
    description:
      'Visual effects compositing in After Effects, color grading, keyframe precision in Premiere Pro, and 3D camera tracker workflows.',
  },
];

export const SOFT_SKILLS: SoftSkill[] = [
  {
    id: 'leadership',
    icon: '👑',
    title: 'Kepemimpinan',
    context: 'Ex-Class President & Dorm Coordinator',
  },
  {
    id: 'adaptability',
    icon: '⚡',
    title: 'Kemampuan Beradaptasi',
    context: 'Agile across STEM & Visual Arts',
  },
  {
    id: 'communication',
    icon: '🎙',
    title: 'Komunikatif',
    context: 'Interviewing & Seminar Moderating',
  },
  {
    id: 'teamwork',
    icon: '🤝',
    title: 'Kerjasama Tim',
    context: 'National Committee Divisions',
  },
  {
    id: 'english',
    icon: '🌐',
    title: 'Bahasa Inggris',
    context: 'International Competition Presenter',
  },
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: 'reorg-2025',
    period: '2025',
    organization: 'MAN Insan Cendekia OKI',
    role: 'Panitia Penguji / Wawancara Calon Anggota Organisasi',
    division: 'DIVISION: RECRUITMENT & INTERVIEW',
    category: 'leadership',
    highlights: [
      'Berpartisipasi dalam seleksi administrasi dari CV yang telah dibuat calon anggota organisasi.',
      'Mengoordinasikan pelaksanaan ujian tertulis bagi calon anggota organisasi.',
      'Melakukan wawancara langsung untuk mengevaluasi kesiapan mental dan motivasi kandidat.',
    ],
  },
  {
    id: 'iconic-2025',
    period: '2025',
    organization: 'ICONIC',
    role: 'Anggota Divisi Acara Seminar Nasional',
    division: 'DIVISION: EVENT OPERATIONS',
    category: 'events',
    highlights: [
      'Menentukan dan mengoordinasikan pemilihan lokasi serta jadwal seminar nasional.',
      'Merekrut narasumber kredibel yang relevan sesuai dengan tema dan tujuan kegiatan.',
      'Menyusun runtutan jadwal acara (rundown) secara sistematis dan terstruktur.',
    ],
  },
  {
    id: 'health-2024',
    period: '2024 – 2025',
    organization: 'Organisasi Keasramaan',
    role: 'Anggota Divisi Kesehatan',
    division: 'DIVISION: HEALTH & SANITATION',
    category: 'leadership',
    highlights: [
      'Membagikan asupan susu kotak dan suplemen vitamin di setiap akhir pekan untuk kesehatan siswa.',
      'Memantau dan mengingatkan terkait kebersihan kamar asrama secara berkala.',
      'Melaksanakan tugas piket Unit Kesehatan Sekolah (UKS) secara terjadwal.',
    ],
  },
  {
    id: 'discipline-2023',
    period: '2023 – 2024',
    organization: 'Organisasi Keasramaan',
    role: 'Anggota Divisi Kedisiplinan',
    division: 'DIVISION: DISCIPLINARY & CODE OF CONDUCT',
    category: 'leadership',
    highlights: [
      'Memimpin apel pagi rutin sebelum seluruh siswa bertolak ke kelas.',
      'Menerapkan protokol pengawasan jam penggunaan laptop dan kedisiplinan perangkat.',
      'Mengarahkan siswa dalam melaksanakan ibadah harian dengan sistem presensi tertib.',
    ],
  },
  {
    id: 'ict-2023',
    period: '2023 – 2024',
    organization: 'Ekstrakurikuler ICT MAN Insan Cendekia OKI',
    role: 'Divisi Programming dan Editing',
    division: 'DIVISION: ICT MULTIMEDIA & CODING',
    category: 'tech',
    spanFull: true,
    highlights: [
      'Mempelajari dasar kerangka web (HTML) dan konstruksi website dasar interaktif.',
      'Mendalami teknik advanced video editing, visual effects (VFX), dan elemen 3D dasar.',
    ],
  },
];

export const CONTACT_INFO = {
  email: 'nadhif.alfatih2008@gmail.com',
  whatsappDisplay: '+62 822-8948-0199',
  whatsappHref: 'https://wa.me/6282289480199',
  linkedinHref: 'https://www.linkedin.com/in/muhammad-nadhif-al-fatih-23a5b9420',
  location: 'Kota Palembang, Sumatera Selatan (30114) • Institut Teknologi PLN',
};
