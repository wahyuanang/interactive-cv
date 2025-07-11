<script setup>
import { ref } from 'vue'
import SectionTitle from './SectionTitle.vue'

const skills = ref([
  { id: 1, name: 'HTML5 & CSS3', level: 'Mahir', category: 'Frontend' },
  { id: 2, name: 'JavaScript (ES6+)', level: 'Menengah', category: 'Bahasa Pemrograman' },
  { id: 3, name: 'Tailwind CSS', level: 'Mahir', category: 'Framework CSS' },
  { id: 4, name: 'Vue.js', level: 'Menengah', category: 'Framework JavaScript' },
  { id: 5, name: 'Node.js', level: 'Pemula', category: 'Backend' },
  { id: 6, name: 'MySQL', level: 'Menengah', category: 'Database' },
  { id: 7, name: 'Git & GitHub', level: 'Menengah', category: 'Alat & Teknologi' },
  { id: 8, name: 'Dasar Jaringan (TCP/IP)', level: 'Menengah', category: 'Jaringan' },
])
</script>

<template>
  <section id="skill" class="py-20 bg-gray-50">
    <div class="container mx-auto px-6">
      <SectionTitle title="Keahlian & Teknologi" />
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div
          v-for="skill in skills"
          :key="skill.id"
          class="bg-white p-6 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300"
        >
          <h3 class="text-xl font-bold text-gray-800">{{ skill.name }}</h3>
          <p class="text-gray-500 mt-2">{{ skill.level }}</p>
          <p class="text-blue-600 text-sm mt-1">{{ skill.category }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
