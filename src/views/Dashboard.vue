<template>
  <div class="space-y-8">
    <!-- Grid StatCard -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard 
        title="Total Pasien" 
        :value="stats.totalPasien" 
        bgColor="bg-[#5A57E6]" 
      />
      <StatCard 
        title="Total Obat" 
        :value="stats.totalObat" 
        bgColor="bg-[#22C55E]" 
      />
      <StatCard 
        title="Riwayat" 
        :value="stats.riwayat" 
        bgColor="bg-[#FACC15]" 
      />
      <StatCard 
        title="Kepatuhan" 
        :value="stats.kepatuhan" 
        suffix="%" 
        bgColor="bg-[#1F2937]" 
      />
    </div>

    <!-- Area Kosong / Placeholder untuk Grafik/Konten Tambahan -->
    <div class="bg-white rounded-[2rem] p-8 min-h-[400px] shadow-sm border border-gray-50">
      <div class="flex items-center justify-center h-full text-gray-300 italic">
        <!-- Anda bisa menambahkan chart atau ringkasan aktivitas di sini -->
        Belum ada aktivitas terbaru untuk ditampilkan.
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import StatCard from '@/components/StatCard.vue';

// Data statistik reaktif (bisa diambil dari API nantinya)
const stats = reactive({
  totalPasien: 0,
  totalObat: 0,
  riwayat: 0,
  kepatuhan: 98
});
</script>

<style scoped>
/* Transisi halus saat halaman dimuat */
.space-y-8 {
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
