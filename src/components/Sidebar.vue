<template>
  <aside class="w-64 bg-[#0B0E1E] text-white flex flex-col h-screen p-4 justify-between">
    <div>
      <!-- Logo & Brand -->
      <div class="flex items-center gap-3 mb-10 px-2">
        <div class="w-10 h-10 bg-[#5A57E6] rounded-xl flex items-center justify-center font-bold text-xl italic">
          M
        </div>
        <h1 class="text-xl font-black italic tracking-wider">MEDITRACK</h1>
      </div>

      <!-- Navigation Menu -->
      <nav class="space-y-2">
        <router-link 
          v-for="item in menuItems" 
          :key="item.path"
          :to="item.path"
          class="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200"
          :class="activeClass(item.path)"
        >
          <span class="text-lg">{{ item.icon }}</span>
          <span class="font-medium text-sm">{{ item.name }}</span>
        </router-link>
      </nav>
    </div>

    <!-- Logout Button -->
    <button 
      @click="handleLogout"
      class="w-full bg-[#F43F5E] hover:bg-red-600 text-white font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
    >
      Logout
    </button>
  </aside>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const menuItems = [
  { name: 'Dashboard', path: '/dashboard', icon: '🏠' },
  { name: 'Data Pasien', path: '/pasien', icon: '👥' },
  { name: 'Jadwal Obat', path: '/jadwal', icon: '💊' },
  { name: 'Riwayat', path: '/riwayat', icon: '📜' },
  { name: 'Settings', path: '/settings', icon: '⚙️' },
];

// Logika untuk menentukan menu yang sedang aktif
const activeClass = (path) => {
  return route.path === path 
    ? 'bg-[#5A57E6] text-white' 
    : 'text-gray-400 hover:bg-gray-800 hover:text-white';
};

const handleLogout = () => {
  // Logika logout Anda di sini
  router.push('/login');
};
</script>

<style scoped>
/* Menghilangkan underline pada router-link */
a {
  text-decoration: none;
}
</style>
