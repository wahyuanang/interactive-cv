<script setup>
import { ref } from 'vue'
import SectionTitle from './SectionTitle.vue'

const educationHistory = ref([
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
    description: "Menyelesaikan pendidikan dasar dan mempelajari mata pelajaran umum.",
  },
])
</script>

<template>
  <section id="pendidikan" class="py-20 bg-white">
    <div class="container mx-auto px-6">
      <SectionTitle title="Riwayat Pendidikan" />
      <div class="relative">
        <div class="absolute h-full border-r-2 border-gray-300" style="left: 50%"></div>
        <div
          v-for="(edu, index) in educationHistory"
          :key="edu.id"
          class="mb-8 flex justify-between items-center w-full"
        >
          <div v-if="index % 2 === 0" class="w-full flex">
            <div class="w-1/2 pr-8 text-right">
              <p class="font-semibold text-blue-600">{{ edu.period }}</p>
              <h3 class="text-2xl font-bold text-gray-800">{{ edu.institution }}</h3>
              <p class="text-gray-600">{{ edu.major }}</p>
              <p class="text-gray-500 text-sm mt-2">{{ edu.description }}</p>
            </div>

            <div class="w-1/2 flex justify-start">
              <div class="w-4 h-4 bg-blue-600 rounded-full z-10"></div>
            </div>
          </div>

          <div v-else class="w-full flex">
            <div class="w-1/2 flex justify-end">
              <div class="w-4 h-4 bg-blue-600 rounded-full z-10"></div>
            </div>

            <div class="w-1/2 pl-8 text-left">
              <p class="font-semibold text-blue-600">{{ edu.period }}</p>
              <h3 class="text-2xl font-bold text-gray-800">{{ edu.institution }}</h3>
              <p class="text-gray-600">{{ edu.major }}</p>
              <p class="text-gray-500 text-sm mt-2">{{ edu.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
