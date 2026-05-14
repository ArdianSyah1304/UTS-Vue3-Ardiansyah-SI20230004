<template>
  <div class="space-y-6">
    <!-- Main Card Container -->
    <div class="bg-white rounded-[2rem] shadow-sm border border-gray-50 overflow-hidden">
      
      <!-- Content Area -->
      <div class="p-8">
        <div class="overflow-x-auto">
          <table class="w-full text-left border-separate border-spacing-0">
            <thead>
              <tr class="bg-[#0B0E1E] text-white">
                <th class="p-4 rounded-l-xl font-medium text-sm text-center w-1/3">Tanggal</th>
                <th class="p-4 rounded-r-xl font-medium text-sm text-center">Aktivitas</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-50">
              <tr v-for="(log, index) in riwayatAktivitas" :key="index" class="hover:bg-gray-50 transition-colors">
                <td class="p-4 text-sm text-gray-600 border-b border-gray-50">
                  {{ log.tanggal }}
                </td>
                <td class="p-4 text-sm text-gray-700 font-medium border-b border-gray-50">
                  {{ log.aktivitas }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Data dummy sesuai dengan Screenshot 2026-05-14 162143.png
const riwayatAktivitas = ref([
  {
    tanggal: '14/05/2026, 16.20.50',
    aktivitas: 'Tambah jadwal obat Paracetamol'
  },
  {
    tanggal: '14/05/2026, 16.19.01',
    aktivitas: 'Tambah data pasien Ardi'
  }
]);
</script>

<style scoped>
/* Menyesuaikan jarak antar baris agar terlihat bersih seperti di gambar */
table {
  border-spacing: 0 4px;
}

th {
  letter-spacing: 0.025em;
}

td {
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
}
</style>
