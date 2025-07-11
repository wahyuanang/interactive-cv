<script setup>
import { ref, onMounted } from 'vue';
import apiClient from './api'; // Impor instance Axios yang sudah dikonfigurasi

const skills = ref([]);

const fetchSkills = async () => {
  try {
    // Panggil endpoint-nya saja, tidak perlu URL lengkap
    const response = await apiClient.get('/api/skills');
    skills.value = response.data;
  } catch (error) {
    console.error("Gagal mengambil data skill:", error);
  }
};

onMounted(() => {
  fetchSkills();
});
</script>
