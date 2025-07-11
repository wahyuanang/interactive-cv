const educationHistory = [
  {
    id: 1,
    period: "2023 - Sekarang",
    institution: "Universitas Amikom Yogyakarta",
    major: "S1-Informatika",
    description: "Memperdalam ilmu komputer dengan fokus pada pengembangan perangkat lunak, algoritma, dan sistem informasi. Aktif dalam berbagai organisasi kemahasiswaan dan proyek pengembangan perangkat lunak.",
  },
  {
    id: 2,
    period: "2021 - 2023",
    institution: "SMK Tunas Harapan Pati",
    major: "Teknik Komputer dan Jaringan",
    description: "Mempelajari dasar-dasar komputer dan jaringan, termasuk instalasi sistem operasi, konfigurasi jaringan, dan pemrograman dasar."
  },
  {
    id: 3,
    period: "2018 - 2021",
    institution: "SMP Negeri 1 Gunungwungkal",
    major: "Siswa",
    description: "Menempuh pendidikan menengah pertama dan aktif dalam kegiatan ekstrakurikuler Pramuka.",
  },
  {
    id: 4,
    period: "2012 - 2018",
    institution: "SD Negeri 02 Perdopo",
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
    title: 'Topupin',
    description: 'Membangun website Topupin sebagai platform top-up all-in-one untuk berbagai game populer. Menyediakan layanan yang cepat, aman, serta mendukung berbagai metode pembayaran, Topupin hadir untuk memenuhi kebutuhan para gamer dengan tampilan modern dan responsif.',
    technologies: ['Vue.js', 'Tailwind CSS', 'JavaScript'],
    link: '#',
    imageUrl: 'images/topupin.jpeg',
  },
  {
    id: 2,
    title: 'Analisis Sentimen Komentar YouTube',
    description: 'Aplikasi ini dibuat untuk mendemonstrasikan analisis sentimen pada data komentar YouTube menggunakan Streamlit dan model Transformer dari Hugging Face. Aplikasi ini merupakan pengembangan dari notebook Jupyter yang Anda berikan.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
    link: 'https://ancomyet-3z53gsdet8rnujvw3f9z4e.streamlit.app/',
    imageUrl: 'images/ancomyet.jpeg',
  },
  {
    id: 3,
    title: 'Sistem Pemesanan Hotel C++',
    description: 'Sistem pemesanan hotel sederhana yang memungkinkan pengguna untuk memesan kamar hotel, melihat daftar kamar yang tersedia, dan mengelola pemesanan.',
    technologies: ['HTML5', 'Tailwind CSS', 'JavaScript'],
    link: 'https://drive.google.com/drive/folders/1qq1UPgUZKkkUwiS5hnZYA9vlsGVkegdf',
    imageUrl: 'images/sistempemesananhotel.jpg',
  },
  {
    id: 4,
    title: 'Sistem Manajemen Karyawan C++',
    description: 'sistem manajemen karyawan sederhana yang memungkinkan pengguna untuk menambahkan, menghapus, dan melihat daftar karyawan.',
    technologies: ['Vue.js', 'JavaScript'],
    link: '#',
    imageUrl: 'images/staffhub.jpeg',
  },
];
module.exports = { educationHistory, skills, projects };
