<template>
  <div class="min-h-screen bg-[#0B0E1E] flex items-center justify-center p-4">
    <!-- Login Card -->
    <div class="bg-white rounded-[2.5rem] p-10 w-full max-w-md shadow-2xl text-center">
      
      <!-- Logo Icon -->
      <div class="flex justify-center mb-6">
        <div class="w-14 h-14 bg-[#5A57E6] rounded-2xl flex items-center justify-center text-white font-bold text-2xl italic">
          M
        </div>
      </div>

      <!-- Title -->
      <h1 class="text-[#0B0E1E] text-3xl font-black italic uppercase tracking-wider mb-8">
        Login Admin
      </h1>

      <!-- Form -->
      <form @submit.prevent="handleLogin" class="space-y-4">
        <!-- Email Input -->
        <div class="relative">
          <input 
            type="email" 
            v-model="email"
            placeholder="admin@gmail.com"
            class="w-full bg-[#F1F5F9] border-none rounded-xl py-4 px-6 text-sm focus:ring-2 focus:ring-[#5A57E6] outline-none transition-all"
            required
          />
        </div>

        <!-- Password Input -->
        <div class="relative">
          <input 
            type="password" 
            v-model="password"
            placeholder="•••••"
            class="w-full bg-[#F1F5F9] border-none rounded-xl py-4 px-6 text-sm focus:ring-2 focus:ring-[#5A57E6] outline-none transition-all"
            required
          />
        </div>

        <!-- Submit Button -->
        <button 
          type="submit" 
          class="w-full bg-[#5A57E6] hover:bg-[#4A47D4] text-white font-black italic uppercase py-4 rounded-xl shadow-lg shadow-blue-500/30 transition-all mt-4"
        >
          Masuk
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const email = ref('');
const password = ref('');

const handleLogin = () => {
  // Simulasi login sederhana
  if (email.value && password.value) {
    console.log('Logging in with:', email.value);
    router.push('/dashboard');
  }
};
</script>

<style scoped>
/* Menyesuaikan font agar identik dengan desain di screenshot */
input::placeholder {
  color: #94A3B8;
  font-weight: 500;
}

h1 {
  letter-spacing: -0.025em;
}
</style>
