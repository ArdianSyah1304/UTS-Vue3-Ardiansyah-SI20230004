<template>
  <div class="space-y-6">
    <!-- Main Card Container -->
    <div class="bg-white rounded-[2rem] shadow-sm border border-gray-50 overflow-hidden">
      
      <!-- Table Header Area -->
      <div class="p-8 flex justify-between items-center">
        <h2 class="text-[#0B0E1E] text-2xl font-black italic uppercase tracking-tighter">
          Jadwal Obat
        </h2>
        <div class="flex gap-3">
          <!-- Tombol Cetak Kartu Hijau -->
          <button class="bg-[#22C55E] hover:bg-[#16A34A] text-white px-6 py-2.5 rounded-xl font-bold text-sm transition-all shadow-lg shadow-green-500/20 flex items-center gap-2">
            <span>🖨️</span> Cetak Kartu
          </button>
          <!-- Tombol Tambah Obat Biru -->
          <button class="bg-[#5A57E6] hover:bg-[#4A47D4] text-white px-6 py-2.5 rounded-xl font-bold text-sm transition-all shadow-lg shadow-blue-500/20">
            Tambah Obat
          </button>
        </div>
      </div>

      <!-- Table Content -->
      <div class="px-8 pb-8">
        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse">
            <thead>
              <tr class="bg-[#0B0E1E] text-white">
                <th class="p-4 rounded-l-xl font-medium text-xs uppercase tracking-wider text-center">Nama Obat</th>
                <th class="p-4 font-medium text-xs uppercase tracking-wider text-center">Dosis</th>
                <th class="p-4 font-medium text-xs uppercase tracking-wider text-center">Waktu</th>
                <th class="p-4 font-medium text-xs uppercase tracking-wider text-center">Mulai</th>
                <th class="p-4 font-medium text-xs uppercase tracking-wider text-center">Selesai</th>
                <th class="p-4 font-medium text-xs uppercase tracking-wider text-center">Keterangan</th>
                <th class="p-4 rounded-r-xl font-medium text-xs uppercase tracking-wider text-center">Aksi</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-50">
              <tr v-for="(obat, index) in daftarObat" :key="index" class="hover:bg-gray-50 transition-colors">
                <td class="p-4 text-sm font-bold text-gray-700">{{ obat.nama }}</td>
                <td class="p-4 text-sm text-gray-600 text-center">{{ obat.dosis }}</td>
                <td class="p-4 text-sm text-gray-600 text-center">{{ obat.waktu }}</td>
                <td class="p-4 text-sm text-gray-600 text-center">{{ obat.mulai }}</td>
                <td class="p-4 text-sm text-gray-600 text-center">{{ obat.selesai }}</td>
                <td class="p-4 text-sm text-gray-600 italic">{{ obat.keterangan }}</td>
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

// Data dummy sesuai dengan Screenshot 2026-05-14 162104.png
const daftarObat = ref([
  {
    nama: 'Paracetamol',
    dosis: '3x1',
    waktu: '08:00-18:00',
    mulai: '2026-05-14',
    selesai: '2026-05-24',
    keterangan: 'Diminum setelah makan'
  }
]);
</script>

<style scoped>
/* Konsistensi styling tabel seperti halaman Data Pasien */
table {
  border-spacing: 0 8px;
  border-collapse: separate;
}

thead tr th {
  border: none;
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
