<script setup>
import { ref } from 'vue'
import SectionTitle from './SectionTitle.vue'

const projects = ref([
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
])
</script>

<template>
  <section id="proyek" class="py-20 bg-white">
    <div class="container mx-auto px-6">
      <SectionTitle title="Proyek Unggulan" />
      <div class="grid md:grid-cols-2 gap-12">
        <div
          v-for="project in projects"
          :key="project.id"
          class="bg-gray-50 rounded-lg shadow-lg overflow-hidden"
        >
          <img :src="`/${project.imageUrl}`" :alt="project.title" class="w-full h-72 object-cover" />
          <div class="p-6">
            <h3 class="text-2xl font-bold text-gray-800 mb-2">{{ project.title }}</h3>
            <p class="text-gray-600 mb-4">{{ project.description }}</p>
            <div class="mb-4">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="inline-block bg-blue-100 text-blue-800 text-sm font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded-full"
                >{{ tech }}</span
              >
            </div>

            <a
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              class="text-blue-600 font-semibold hover:underline"
              >Lihat Detail &rarr;</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
