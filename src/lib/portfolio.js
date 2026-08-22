import { isSupabaseConfigured, supabase } from "./supabase";

export const ASSET_BASE_URL = "https://assets.rifqii.com";

export const PERSONAL_INFO = {
  name: "Rifqi",
  fullName: "Rifqi Susanto",
  role: "Information Systems Student",
  headline: "Software Engineer",
  location: "Kota Bekasi, Jawa Barat, Indonesia",
  email: "rfqiii1511@gmail.com",
  github: "https://github.com/ki1bot",
  linkedin: "https://www.linkedin.com/in/rifq1",
  instagram: "https://www.instagram.com/ki1bot_",
  youtube: "https://www.youtube.com/@kibot7659",
  spotify: "https://open.spotify.com/user/314fig6hgrc2gaq7phryrrmfcp34",
  tiktok: "https://www.tiktok.com/@kiibott_",
  profileImage: `${ASSET_BASE_URL}/assets/Rifqii.png`,
  adminImage: `${ASSET_BASE_URL}/assets/rifqi.jpg`,
  heroImage: `${ASSET_BASE_URL}/projects/coding.gif`,
};

export const HERO_STACKS = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.JS",
  "Vue.JS",
  "Node.JS",
  "Bootstrap",
  "Tailwind CSS",
];

export const TECH_STACK = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
  "Bootstrap",
  "Node.JS",
  "Vite",
  "React",
  "Angular",
  "Vue",
  "Nuxt",
  "Svelte",
  "Next.JS",
  "Nest.JS",
  "Express.JS",
  "Inertia.JS",
  "PHP",
  "CodeIgniter",
  "Laravel",
  "Java",
  "Dart",
  "Flutter",
  "Golang",
  "Python",
  "C",
  "C++",
  "Firebase",
  "Supabase",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Prisma",
  "Docker",
  "Vercel",
  "Linux",
];

export const EDUCATION = [
  {
    period: "2006",
    title: "Tahun Kelahiran",
    subtitle: "Bekasi",
  },
  {
    period: "2011 - 2012",
    title: "Taman Kanak-kanak (TK)",
    subtitle: "TK. Islam Harapan Jaya",
  },
  {
    period: "2012 - 2018",
    title: "Sekolah Dasar (SD)",
    subtitle: "SDN Harapan Jaya 8",
  },
  {
    period: "2018 - 2021",
    title: "Sekolah Menengah Pertama (SMP)",
    subtitle: "SMP Pangeran Jayakarta",
  },
  {
    period: "2021 - 2024",
    title: "Sekolah Menengah Kejuruan (SMK)",
    subtitle: "SMK Patriot 1",
  },
  {
    period: "2024 - Sekarang",
    title: "Universitas Gunadarma",
    subtitle: "S1 - Sistem Informasi",
  },
];

export const FALLBACK_PROJECTS = [
  {
    id: 1,
    title: "Sistem Marketplace Broker",
    description:
      "Dashboard marketplace broker untuk mengelola broker, seller, buyer, produk, transaksi, negosiasi, komisi, dan riwayat transaksi dalam satu sistem.",
    img: "projects/MarketPlaceBroker.png",
    link: "https://sistemmarketplacebroker.page.gd/",
    github: "https://github.com/ki1bot/sistem-marketplace-broker.git",
    features: [
      "Manajemen broker, seller, dan buyer",
      "Manajemen produk marketplace",
      "Transaksi dan negosiasi",
      "Komisi broker dan riwayat transaksi",
      "Dashboard dan visualisasi data",
    ],
    tech_stack: [
      "Laravel 12",
      "ReactJS",
      "MySQL",
      "JavaScript",
      "Tailwind CSS",
    ],
    order_index: 1,
  },
  {
    id: 2,
    title: "Azzahra Perwira",
    description:
      "Website profil dan sistem pengelolaan konten Yayasan Azzahra Perwira dengan halaman publik serta dashboard administrator.",
    img: "projects/adminUiYayasan.png",
    link: "https://azzahra-perwira.xo.je/",
    github: "https://github.com/ki1bot/azzahraperwira.git",
    features: [
      "Halaman profil yayasan dan unit pendidikan",
      "Dashboard administrator",
      "Manajemen tenaga pengajar",
      "Manajemen berita dan informasi",
      "Upload gambar dan dokumen PDF",
    ],
    tech_stack: [
      "PHP",
      "CodeIgniter 4",
      "MySQL",
      "Tailwind CSS",
      "Alpine.js",
      "JavaScript",
    ],
    order_index: 2,
  },
  {
    id: 3,
    title: "QR Code Generator",
    description:
      "Aplikasi generate QR Code untuk URL, domain, Gmail, WhatsApp, telepon, SMS, dan teks biasa dengan preview real-time serta download PNG.",
    img: "projects/ProjectQrcode.png",
    link: "https://generate-qrcode-one.vercel.app/",
    github: "https://github.com/ki1bot/generate-qrcode.git",
    features: [
      "Generate QR secara real-time",
      "Mendukung berbagai jenis target",
      "Custom warna QR dan background",
      "Download PNG dan copy output",
      "Responsive desktop dan mobile",
    ],
    tech_stack: ["Vite", "React", "TypeScript", "Tailwind CSS", "qrcode.react"],
    order_index: 3,
  },
  {
    id: 4,
    title: "Generate Website To PDF",
    description:
      "Website untuk mengubah halaman website menjadi file PDF dengan pengaturan judul, nama file, dan jumlah halaman.",
    img: "projects/GeneratePDF.png",
    link: "https://pdf-generate-nu.vercel.app/",
    github: "https://github.com/ki1bot/pdf-generate.git",
    features: [
      "Konversi halaman website ke PDF",
      "Pengaturan judul PDF",
      "Pengaturan nama file",
      "Pembatasan jumlah halaman",
      "Download otomatis",
    ],
    tech_stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Express.js",
      "Playwright",
      "pdf-lib",
    ],
    order_index: 4,
  },
  {
    id: 5,
    title: "Pelayanan Jasa AC",
    description:
      "Website layanan jasa AC berbasis Laravel untuk mengelola layanan, pemesanan, pembayaran, autentikasi pelanggan, dan panel admin.",
    img: "projects/PelayananJasaAc.png",
    link: "https://pelayananjasaac.rf.gd/",
    github: "https://github.com/ki1bot/pelayananjasaac.git",
    pdf: "projects/TugasAlgo2APelayananJasaAc.pdf",
    features: [
      "Daftar layanan jasa AC",
      "Registrasi dan login pelanggan",
      "Pembuatan dan pengelolaan pesanan",
      "Pembayaran",
      "Panel admin dan status pesanan",
    ],
    tech_stack: ["Laravel", "PHP", "Blade", "Tailwind CSS", "Vite", "MySQL"],
    order_index: 5,
  },
  {
    id: 6,
    title: "3KA28",
    description: "Coming Soon",
    img: "projects/ComingSoon.png",
    link: "https://3ka28.vercel.app/",
    github: "https://github.com/ki1bot/3KA28.git",
    features: [],
    tech_stack: [],
    order_index: 6,
  },
  {
    id: 7,
    title: "The Flea Defender",
    description:
      "Game RPG survival desktop berbasis Java. Pemain harus mempertahankan Defender selama 300 detik dari serangan Flea dengan sistem HP, RP, item, guard, animasi, dan sound effect.",
    img: "projects/flea-defender.png",
    link: "https://www.rifqii.com/games/The%20Flea%20Defender-1.0.0.exe",
    github: "https://github.com/ki1bot/The-Flea-Defender.git",
    features: [
      "RPG survival berbasis Java Swing",
      "Sistem HP dan Resource Points",
      "Flea muncul dan menyerang otomatis",
      "Latihan, vitamin, guard, dan skip time",
      "Animasi sprite dan sound effect",
    ],
    tech_stack: ["Java", "Java Swing", "Java AWT", "Java Sound API", "OOP"],
    order_index: 7,
  },
  {
    id: 8,
    title: "Debugging Pemrograman",
    description:
      "Platform latihan debugging interaktif dengan 64 tantangan dari delapan bahasa pemrograman, code editor, Judge0, hint, scoring, progres, dan leaderboard.",
    img: "projects/DebuggingPemrograman.png",
    link: "https://debugging-pemrograman-production.up.railway.app/",
    github: "https://github.com/ki1bot/debugging-pemrograman.git",
    features: [
      "64 tantangan debugging",
      "CodeMirror dan syntax highlighting",
      "Eksekusi kode melalui Judge0",
      "Hint dan sistem penilaian",
      "Progress, riwayat, dan leaderboard",
      "Dashboard administrator",
    ],
    tech_stack: [
      "Laravel",
      "Inertia.js",
      "React",
      "TypeScript",
      "PostgreSQL",
      "CodeMirror",
      "Judge0",
    ],
    order_index: 8,
  },
  {
    id: 9,
    title: "Asisten Akademik",
    description:
      "KampusHub adalah aplikasi pendamping akademik untuk mengelola semester, mata kuliah, jadwal, tugas, ujian, presensi, nilai, notifikasi, dan statistik akademik.",
    img: "projects/AsistenAkademik.png",
    link: "",
    github: "https://github.com/ki1bot/asisten-akademik.git",
    features: [
      "Autentikasi JWT",
      "Pengelolaan semester dan mata kuliah",
      "Jadwal, tugas, dan ujian",
      "Presensi dan nilai",
      "Perhitungan IP semester",
      "Web dan aplikasi mobile",
    ],
    tech_stack: [
      "Next.JS",
      "React",
      "Nest.JS",
      "Prisma",
      "PostgreSQL",
      "Expo",
      "React Native",
    ],
    order_index: 9,
  },
  {
    id: 10,
    title: "SkillPath AI",
    description:
      "Platform pembelajaran dan perencanaan karier dengan assessment, skill gap, roadmap personal, rekomendasi proyek, progres belajar, dan insight berbasis AI.",
    img: "projects/SkillPathAI.png",
    link: "https://skillpath-ai-production-cc51.up.railway.app/",
    github: "https://github.com/ki1bot/skillpath-ai.git",
    features: [
      "Onboarding target karier",
      "Assessment kemampuan awal",
      "Analisis skill gap",
      "Roadmap pembelajaran personal",
      "Rekomendasi proyek portofolio",
      "Insight berbasis AI",
    ],
    tech_stack: [
      "Laravel",
      "Inertia.JS",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Gemini API",
      "OpenRouter API",
    ],
    order_index: 10,
  },
];

const certificateNames = [
  "Dicoding Certificate 1",
  "Dicoding Certificate 2",
  "Dicoding Certificate 3",
  "Dicoding Certificate 4",
  "Dicoding Certificate 5",
  "Dicoding Certificate 6",
  "Dicoding Certificate 7",
  "Dicoding Certificate 8",
  "Dicoding Certificate 9",
  "RevoU Certificate Data Analytics",
  "RevoU Certificate Software Engineering",
  "Sertifikat LSP Semester 1",
  "Sertifikat LSP Semester 2",
  "Sertifikat Kompetensi",
];

const certificateFiles = [
  "dicoding1",
  "dicoding2",
  "dicoding3",
  "dicoding4",
  "dicoding5",
  "dicoding6",
  "dicoding7",
  "dicoding8",
  "dicoding9",
  "RevoU-DataAnalytics",
  "RevoU-SoftwareEngineering",
  "sertifikatlsp-semester1",
  "sertifikatlsp-semester2",
  "SertifikatKompetensi",
];

export const FALLBACK_CERTIFICATES = certificateNames.map((title, index) => ({
  id: index + 1,
  title,
  img: `sertifikat/${certificateFiles[index]}.png`,
  pdf_url: `sertifikat/${certificateFiles[index]}.pdf`,
  type: "pdf",
  order_index: index + 1,
}));

export const FALLBACK_COMMENTS = [
  {
    id: "fallback-pinned-comment",
    user_name: "Rifqi",
    content: "Halo, terima kasih sudah mampir ke portofolio saya.",
    profile_image: "assets/rifqi.jpg",
    is_pinned: true,
    created_at: "2026-02-24T00:00:00+07:00",
  },
  {
    id: "fallback-guest-comment",
    user_name: "Faris",
    content: "Portofolionya rapi dan bagus banget.",
    profile_image: "",
    is_pinned: false,
    created_at: "2026-03-13T00:00:00+07:00",
  },
];

export function resolveAssetUrl(value) {
  const cleanValue = String(value || "").trim();

  if (!cleanValue) return "";
  if (/^(data:|blob:)/i.test(cleanValue)) return cleanValue;

  if (/^https?:\/\//i.test(cleanValue)) {
    try {
      const url = new URL(cleanValue);
      const markers = [
        "/storage/v1/object/public/portofolio-assets/",
        "/storage/v1/object/sign/portofolio-assets/",
        "/storage/v1/render/image/public/portofolio-assets/",
        "/storage/v1/render/image/authenticated/portofolio-assets/",
      ];

      for (const marker of markers) {
        const markerIndex = url.pathname.indexOf(marker);

        if (markerIndex !== -1) {
          const storagePath = decodeURIComponent(
            url.pathname.slice(markerIndex + marker.length),
          );

          return resolveAssetUrl(storagePath);
        }
      }
    } catch {
      return cleanValue;
    }

    return cleanValue;
  }

  let path = cleanValue.replace(/^\/+/, "");

  path = path.replace(/^public\/img\//, "");
  path = path.replace(/^img\//, "");
  path = path.replace(/^public\/assets\//, "assets/");
  path = path.replace(/^assets\/projects\//, "projects/");
  path = path.replace(/^assets\/sertifikat\//, "sertifikat/");
  path = path.replace(/^assets\/media\//, "media/");

  if (
    path === "screen/default-avatar.jpg" ||
    path === "assets/screen/default-avatar.jpg"
  ) {
    return "";
  }

  return `${ASSET_BASE_URL}/${path}`;
}

function normalizeProject(project) {
  return {
    ...project,
    features: Array.isArray(project.features)
      ? project.features.filter(Boolean)
      : [],
    tech_stack: Array.isArray(project.tech_stack)
      ? project.tech_stack.filter(Boolean)
      : [],
    img: resolveAssetUrl(project.img),
    pdf: project.pdf ? resolveAssetUrl(project.pdf) : "",
  };
}

function normalizeCertificate(certificate) {
  const img = resolveAssetUrl(certificate.img);

  const pdfUrl = certificate.pdf_url
    ? resolveAssetUrl(certificate.pdf_url)
    : img.replace(/\.(png|jpg|jpeg|webp)(?=($|[?#]))/i, ".pdf");

  return {
    ...certificate,
    img,
    pdf_url: pdfUrl,
  };
}

function normalizeComment(comment) {
  const isAdmin =
    comment.is_pinned &&
    String(comment.user_name || "")
      .trim()
      .toLowerCase() === "rifqi";

  return {
    ...comment,
    profile_image: isAdmin ? PERSONAL_INFO.adminImage : "",
  };
}

export async function getProjects() {
  if (!isSupabaseConfigured || !supabase) {
    return FALLBACK_PROJECTS.map(normalizeProject);
  }

  const { data, error } = await supabase
    .from("projects")
    .select(
      "id, title, description, img, link, github, pdf, features, tech_stack, is_published, order_index, created_at",
    )
    .eq("is_published", true)
    .order("order_index", { ascending: true })
    .order("created_at", { ascending: false });

  if (error || !data?.length) {
    return FALLBACK_PROJECTS.map(normalizeProject);
  }

  return data.map(normalizeProject);
}

export async function getCertificates() {
  if (!isSupabaseConfigured || !supabase) {
    return FALLBACK_CERTIFICATES.map(normalizeCertificate);
  }

  const { data, error } = await supabase
    .from("certificates")
    .select("id, title, img, pdf_url, type, order_index, created_at")
    .order("order_index", { ascending: true })
    .order("created_at", { ascending: false });

  if (error || !data?.length) {
    return FALLBACK_CERTIFICATES.map(normalizeCertificate);
  }

  return data.map(normalizeCertificate);
}

export async function getComments() {
  if (!isSupabaseConfigured || !supabase) {
    return FALLBACK_COMMENTS.map(normalizeComment);
  }

  const { data, error } = await supabase
    .from("portfolio_comments")
    .select("id, content, user_name, is_pinned, created_at")
    .order("is_pinned", { ascending: false })
    .order("created_at", { ascending: false });

  if (error || !data?.length) {
    return FALLBACK_COMMENTS.map(normalizeComment);
  }

  return data.map(normalizeComment);
}

export async function getPortfolioData() {
  const [projects, certificates, comments] = await Promise.all([
    getProjects(),
    getCertificates(),
    getComments(),
  ]);

  return {
    projects,
    certificates,
    comments,
  };
}

export async function createComment({ name, content }) {
  if (!isSupabaseConfigured || !supabase) {
    throw new Error("Supabase belum dikonfigurasi.");
  }

  const userName = String(name || "")
    .trim()
    .slice(0, 50);

  const message = String(content || "")
    .trim()
    .slice(0, 500);

  if (userName.length < 2) {
    throw new Error("Nama minimal 2 karakter.");
  }

  if (message.length < 2) {
    throw new Error("Komentar minimal 2 karakter.");
  }

  const { data, error } = await supabase
    .from("portfolio_comments")
    .insert({
      user_name: userName,
      content: message,
      profile_image: "/img/screen/default-avatar.jpg",
      is_pinned: false,
    })
    .select("id, content, user_name, is_pinned, created_at")
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return normalizeComment(data);
}
