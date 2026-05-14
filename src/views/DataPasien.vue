<template>
  <div class="space-y-6">
    <!-- Main Card Container -->
    <div class="bg-white rounded-[2rem] shadow-sm border border-gray-50 overflow-hidden">
      
      <!-- Table Header Area -->
      <div class="p-8 flex justify-between items-center">
        <h2 class="text-[#0B0E1E] text-2xl font-black italic uppercase tracking-tighter">
          Data Pasien
        </h2>
        <button class="bg-[#5A57E6] hover:bg-[#4A47D4] text-white px-6 py-2.5 rounded-xl font-bold text-sm transition-all shadow-lg shadow-blue-500/20">
          Tambah Pasien
        </button>
      </div>

      <!-- Table Content -->
      <div class="px-8 pb-8">
        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse">
            <thead>
              <tr class="bg-[#0B0E1E] text-white">
                <th class="p-4 rounded-l-xl font-medium text-sm">Nama</th>
                <th class="p-4 font-medium text-sm">Alamat</th>
                <th class="p-4 font-medium text-sm">Telepon</th>
                <th class="p-4 font-medium text-sm">Keluhan</th>
                <th class="p-4 rounded-r-xl font-medium text-sm text-center">Aksi</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-50">
              <tr v-for="(pasien, index) in daftarPasien" :key="index" class="hover:bg-gray-50 transition-colors">
                <td class="p-4 text-sm font-bold text-gray-700">{{ pasien.nama }}</td>
                <td class="p-4 text-sm text-gray-600">{{ pasien.alamat }}</td>
                <td class="p-4 text-sm text-gray-600">{{ pasien.telepon }}</td>
                <td class="p-4 text-sm text-gray-600">{{ pasien.keluhan }}</td>
                <td class="p-4">
                  <div class="flex justify-center gap-2">
                    <button class="bg-[#E0E7FF] text-[#5A57E6] px-4 py-1.5 rounded-lg font-bold text-xs hover:bg-[#C7D2FE] transition-colors">
                      Edit
                    </button>
                    <button class="bg-[#FFE4E6] text-[#F43F5E] px-4 py-1.5 rounded-lg font-bold text-xs hover:bg-[#FECDD3] transition-colors">
                      Hapus
                    </button>
                  </div>
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

// Data Dummy berdasarkan screenshot 161916
const daftarPasien = ref([
  {
    nama: 'Ardi',
    alamat: 'Selebung',
    telepon: '085955174561',
    keluhan: 'Demam'
  }
]);
</script>

<style scoped>
/* Styling khusus agar header tabel memiliki sudut membulat */
thead tr th {
  border: none;
}

table {
  border-spacing: 0 8px;
  border-collapse: separate;
}

tbody tr td {
  background-color: white;
  border-top: 1px solid #F9FAFB;
  border-bottom: 1px solid #F9FAFB;
}

tbody tr td:first-child {
  border-left: 1px solid #F9FAFB;
  border-top-left-radius: 0.75rem;
  border-bottom-left-radius: 0.75rem;
}

tbody tr td:last-child {
  border-right: 1px solid #F9FAFB;
  border-top-right-radius: 0.75rem;
  border-bottom-right-radius: 0.75rem;
}
</style>
