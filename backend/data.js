const educationHistory = [
  {
    id: 1,
    period: "2020 - 2023",
    institution: "SMK Tunas Harapan Pati",
    major: "Teknik Komputer dan Jaringan",
    description: "Mempelajari dasar-dasar komputer dan jaringan, termasuk instalasi sistem operasi, konfigurasi jaringan, dan pemrograman dasar."
  },
  {
    id: 2,
    period: "2017 - 2020",
    institution: "SMP Negeri 1 Gunungwungkal",
    major: "Siswa",
    description: "Menempuh pendidikan menengah pertama dan aktif dalam kegiatan ekstrakurikuler Pramuka.",
  },
  {
    id: 3,
    period: "2011 - 2017",
    institution: "SD Negeri 2 Gembong",
    major: "Siswa",
    description:
      "Menyelesaikan pendidikan dasar dan mempelajari mata pelajaran umum.",
  },
];
const skills = [
  { id: 1, name: 'HTML5 & CSS3', level: 'Mahir', category: 'Frontend' },
  { id: 2, name: 'JavaScript (ES6+)', level: 'Menengah', category: 'Bahasa Pemrograman' },
  { id: 3, name: 'Tailwind CSS', level: 'Mahir', category: 'Framework CSS' },
  { id: 4, name: 'Vue.js', level: 'Menengah', category: 'Framework JavaScript' },
  { id: 5, name: 'Node.js', level: 'Pemula', category: 'Backend' },
  { id: 6, name: 'MySQL', level: 'Menengah', category: 'Database' },
  { id: 7, name: 'Git & GitHub', level: 'Menengah', category: 'Alat & Teknologi' },
  { id: 8, name: 'Dasar Jaringan (TCP/IP)', level: 'Menengah', category: 'Jaringan' },
];
const projects = [
  {
    id: 1,
    title: 'Website Portofolio Pribadi',
    description: 'Membangun website portofolio untuk menampilkan proyek, keahlian, dan riwayat pendidikan. Dibangun dengan fokus pada desain yang responsif dan modern.',
    technologies: ['Vue.js', 'Tailwind CSS', 'JavaScript'],
    link: '#',
    imageUrl: 'https://via.placeholder.com/400x250.png?text=Portofolio',
  },
  {
    id: 2,
    title: 'Aplikasi Kasir (Point of Sale)',
    description: 'Aplikasi web sederhana untuk manajemen transaksi penjualan. Memungkinkan pencatatan produk, pengelolaan stok dasar, dan pembuatan laporan penjualan harian.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
    link: '#',
    imageUrl: 'https://via.placeholder.com/400x250.png?text=Sistem+Kasir',
  },
  {
    id: 3,
    title: 'Landing Page Produk',
    description: 'Desain dan implementasi landing page untuk mempromosikan sebuah produk fiktif. Dibuat sepenuhnya responsif untuk semua ukuran layar perangkat.',
    technologies: ['HTML5', 'Tailwind CSS', 'JavaScript'],
    link: '#',
    imageUrl: 'https://via.placeholder.com/400x250.png?text=Landing+Page',
  },
  {
    id: 4,
    title: 'Website Company Profile',
    description: 'Membuat website profil perusahaan fiktif yang menampilkan informasi tentang perusahaan, layanan yang ditawarkan, dan halaman kontak.',
    technologies: ['Vue.js', 'JavaScript'],
    link: '#',
    imageUrl: 'https://via.placeholder.com/400x250.png?text=Company+Profile',
  },
];
module.exports = { educationHistory, skills, projects };
