<template>
  <header class="flex justify-between items-start p-6 bg-white border-b border-gray-100">
    <div>
      <div class="flex items-center gap-3">
        <!-- Icon Dinamis (Opsional sesuai halaman) -->
        <span class="text-3xl">{{ currentPageIcon }}</span>
        <h1 class="text-2xl font-black italic tracking-tighter uppercase text-[#0B0E1E]">
          {{ currentPageTitle }}
        </h1>
      </div>
      <p class="text-xs text-gray-400 font-medium mt-1">
        Sistem Manajemen Kesehatan Digital
      </p>
    </div>

    <div class="flex items-center gap-4">
      <!-- Jam Digital -->
      <div class="bg-[#EBEBFF] text-[#5A57E6] px-4 py-2 rounded-lg font-bold text-sm shadow-sm">
        {{ currentTime }}
      </div>

      <!-- User Profile Icon (Muncul di Data Pasien/Jadwal) -->
      <div v-if="showProfile" class="w-10 h-10 bg-[#EBEBFF] rounded-lg flex items-center justify-center text-[#0B0E1E]">
        <span class="text-xl">👤</span>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const currentTime = ref('');

// Jam Digital Real-time
const updateTime = () => {
  const now = new Date();
  currentTime.value = now.toLocaleTimeString('en-GB', { 
    hour12: false, 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit' 
  });
};

let timer;
onMounted(() => {
  updateTime();
  timer = setInterval(updateTime, 1000);
});

onUnmounted(() => {
  clearInterval(timer);
});

// Judul Halaman Dinamis berdasarkan Route
const currentPageTitle = computed(() => {
  switch (route.path) {
    case '/dashboard': return 'Dashboard';
    case '/pasien': return 'Data Pasien';
    case '/jadwal': return 'Jadwal Obat';
    case '/riwayat': return 'Riwayat';
    default: return 'Meditrack';
  }
});

// Icon Halaman Dinamis
const currentPageIcon = computed(() => {
  switch (route.path) {
    case '/dashboard': return '🏠';
    case '/pasien': return '👥';
    case '/jadwal': return '💊';
    case '/riwayat': return '📜';
    default: return '✨';
  }
});

// Logika menampilkan ikon profil (berdasarkan screenshot 161916)
const showProfile = computed(() => route.path !== '/dashboard');
</script>

<style scoped>
h1 {
  /* Memberikan efek font miring dan tebal seperti di gambar */
  font-family: 'Inter', sans-serif;
}
</style>
