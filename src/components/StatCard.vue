<template>
  <div 
    :class="[
      'p-6 rounded-[2rem] shadow-sm flex flex-col justify-between h-40 transition-transform hover:scale-[1.02]',
      bgColor
    ]"
  >
    <!-- Label Atas -->
    <h3 class="text-white text-sm font-medium opacity-90">
      {{ title }}
    </h3>

    <!-- Nilai Utama -->
    <div class="flex items-baseline gap-1">
      <span class="text-white text-6xl font-black italic">
        {{ value }}
      </span>
      <span v-if="suffix" class="text-white text-3xl font-bold italic">
        {{ suffix }}
      </span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  value: {
    type: [String, Number],
    required: true
  },
  bgColor: {
    type: String,
    default: 'bg-[#5A57E6]' // Default warna biru Meditrack
  },
  suffix: {
    type: String,
    default: '' // Untuk tanda '%' pada kartu kepatuhan
  }
});
</script>

<style scoped>
/* Menyesuaikan font agar lebih mirip dengan gaya display di dashboard */
span {
  line-height: 1;
}
</style>
