import { createRouter, createWebHistory } from 'vue-router';

// Import Views
import Login from '../views/Login.vue';
import Dashboard from '../views/Dashboard.vue';
import DataPasien from '../views/DataPasien.vue';
import JadwalObat from '../views/JadwalObat.vue';
import Riwayat from '../views/Riwayat.vue';

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { hideNavbar: true } // Penanda agar Sidebar & Header tidak muncul
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/pasien',
    name: 'DataPasien',
    component: DataPasien
  },
  {
    path: '/jadwal',
    name: 'JadwalObat',
    component: JadwalObat
  },
  {
    path: '/riwayat',
    name: 'Riwayat',
    component: Riwayat
  },
  // Catch-all route untuk menangani halaman tidak ditemukan
  {
    path: '/:pathMatch(.*)*',
    redirect: '/login'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  // Otomatis scroll ke atas saat pindah halaman
  scrollBehavior() {
    return { top: 0 };
  }
});

export default router;
