<template>
  <!-- Tailwind CDN -->
  <component :is="'script'" src="https://cdn.tailwindcss.com"></component>

  <div class="min-h-screen w-screen overflow-x-auto bg-slate-100 text-slate-900 font-sans">
    
    <!-- TOAST -->
    <Transition name="toast">
      <div
        v-if="toast.show"
        class="fixed top-5 right-5 z-[9999] bg-indigo-600 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-4"
      >
        <div class="text-3xl">🔔</div>
        <div>
          <h1 class="font-black uppercase text-sm">MediTrack Digital</h1>
          <p class="text-sm">{{ toast.message }}</p>
        </div>
      </div>
    </Transition>

    <!-- LANDING -->
    <div v-if="page === 'landing'" class="w-full min-h-screen bg-white">
      
      <!-- NAVBAR -->
      <nav class="w-full sticky top-0 z-50 bg-white border-b border-slate-200 px-6 lg:px-10 py-5 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white font-black text-xl">
            M
          </div>

          <div>
            <h1 class="text-2xl lg:text-3xl font-black italic uppercase tracking-tight">
              MediTrack
              <span class="text-indigo-600">Digital</span>
            </h1>
          </div>
        </div>

        <div class="hidden lg:flex items-center gap-8 font-bold text-sm uppercase">
          <button @click="landingTab='home'" :class="landingTab==='home' ? 'text-indigo-600' : 'text-slate-500'">
            Home
          </button>

          <button @click="landingTab='profile'" :class="landingTab==='profile' ? 'text-indigo-600' : 'text-slate-500'">
            Profile
          </button>

          <button @click="landingTab='features'" :class="landingTab==='features' ? 'text-indigo-600' : 'text-slate-500'">
            Features
          </button>

          <button @click="landingTab='contact'" :class="landingTab==='contact' ? 'text-indigo-600' : 'text-slate-500'">
            Contact
          </button>
        </div>

        <button
          @click="page='login'"
          class="bg-indigo-600 hover:bg-indigo-700 transition text-white px-6 py-3 rounded-xl font-black"
        >
          ADMIN
        </button>
      </nav>

      <!-- HOME -->
      <div
        v-if="landingTab==='home'"
        class="min-h-[90vh] flex flex-col justify-center items-center text-center px-6 lg:px-16"
      >
        <h1 class="text-5xl md:text-7xl lg:text-8xl font-black uppercase italic leading-none">
          MediTrack <br>
          <span class="text-indigo-600">Digital</span>
        </h1>

        <p class="mt-8 max-w-5xl text-slate-500 text-lg lg:text-2xl leading-relaxed">
          Sistem manajemen kesehatan digital modern untuk mengelola pasien,
          jadwal obat, monitoring konsumsi obat, riwayat medis,
          dan laporan kesehatan secara real-time berbasis localStorage.
        </p>

        <div class="mt-10 flex flex-wrap gap-5 justify-center">
          <button
            @click="page='login'"
            class="bg-indigo-600 text-white px-10 py-4 rounded-2xl font-black hover:scale-105 transition"
          >
            Mulai Sekarang
          </button>

          <button
            @click="landingTab='features'"
            class="border-2 border-slate-900 px-10 py-4 rounded-2xl font-black hover:bg-slate-900 hover:text-white transition"
          >
            Lihat Fitur
          </button>
        </div>
      </div>

      <!-- PROFILE -->
      <div
        v-if="landingTab==='profile'"
        class="w-full px-6 lg:px-10 py-14"
      >
        <div class="bg-indigo-600 rounded-[40px] p-10 lg:p-20 text-white">
          <h1 class="text-4xl lg:text-7xl font-black uppercase italic">
            Tentang MediTrack
          </h1>

          <p class="mt-8 text-lg lg:text-2xl leading-relaxed max-w-6xl">
            MediTrack Digital adalah platform kesehatan modern
            yang membantu pengelolaan pasien, jadwal konsumsi obat,
            monitoring kesehatan, hingga laporan riwayat medis
            dalam satu sistem digital terintegrasi.
          </p>
        </div>
      </div>

      <!-- FEATURES -->
      <div
        v-if="landingTab==='features'"
        class="w-full px-6 lg:px-10 py-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
      >
        <div
          v-for="(f,i) in features"
          :key="i"
          class="bg-slate-900 rounded-[35px] p-10 text-white hover:bg-indigo-600 transition"
        >
          <div class="text-6xl mb-6">{{ f.icon }}</div>

          <h1 class="text-3xl font-black uppercase italic">
            {{ f.title }}
          </h1>

          <p class="mt-5 text-slate-300 leading-relaxed">
            {{ f.desc }}
          </p>
        </div>
      </div>

      <!-- CONTACT -->
      <div
        v-if="landingTab==='contact'"
        class="w-full px-6 lg:px-10 py-10 grid grid-cols-1 xl:grid-cols-2 gap-8"
      >
        <div class="bg-white rounded-[40px] p-10 shadow-xl">
          <h1 class="text-5xl font-black uppercase italic">
            Hubungi Kami
          </h1>

          <div class="mt-10 space-y-8">
            <div>
              <h2 class="font-black text-indigo-600 uppercase text-sm">
                Lokasi
              </h2>

              <p class="text-lg mt-2">
                Jakarta Selatan, Indonesia
              </p>
            </div>

            <div>
              <h2 class="font-black text-indigo-600 uppercase text-sm">
                Email
              </h2>

              <p class="text-lg mt-2">
                support@meditrackdigital.com
              </p>
            </div>

            <div>
              <h2 class="font-black text-indigo-600 uppercase text-sm">
                Telepon
              </h2>

              <p class="text-lg mt-2">
                +62 812 0000 0000
              </p>
            </div>
          </div>
        </div>

        <!-- MAPS -->
        <div class="rounded-[40px] overflow-hidden shadow-2xl min-h-[500px]">
          <iframe
            width="100%"
            height="100%"
            style="border:0"
            loading="lazy"
            allowfullscreen
            src="https://maps.google.com/maps?q=jakarta&t=&z=13&ie=UTF8&iwloc=&output=embed"
          ></iframe>
        </div>
      </div>
    </div>

    <!-- LOGIN -->
    <div
      v-else-if="page==='login'"
      class="min-h-screen flex items-center justify-center bg-slate-900 px-5"
    >
      <div class="bg-white w-full max-w-2xl rounded-[40px] p-10 shadow-2xl">
        <div class="text-center">
          <div class="w-20 h-20 rounded-3xl bg-indigo-600 text-white mx-auto flex items-center justify-center text-3xl font-black">
            M
          </div>

          <h1 class="mt-6 text-5xl font-black uppercase italic">
            Login Admin
          </h1>
        </div>

        <form @submit.prevent="handleLogin" class="mt-10 space-y-5">
          <input
            v-model="auth.email"
            type="email"
            placeholder="Email"
            class="w-full bg-slate-100 p-5 rounded-2xl outline-none"
          >

          <input
            v-model="auth.password"
            type="password"
            placeholder="Password"
            class="w-full bg-slate-100 p-5 rounded-2xl outline-none"
          >

          <button
            type="submit"
            class="w-full bg-indigo-600 text-white py-5 rounded-2xl font-black"
          >
            MASUK
          </button>
        </form>
      </div>
    </div>

    <!-- DASHBOARD -->
    <div
      v-else-if="page==='dashboard'"
      class="w-full min-h-screen flex overflow-x-auto"
    >

      <!-- SIDEBAR -->
      <aside class="w-[300px] shrink-0 bg-slate-950 text-white p-6 flex flex-col">
        <div class="flex items-center gap-3 mb-10">
          <div class="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center font-black">
            M
          </div>

          <div>
            <h1 class="font-black text-2xl italic uppercase">
              MediTrack
            </h1>
          </div>
        </div>

        <nav class="flex-1 space-y-3">
          <button
            v-for="(m,k) in menus"
            :key="k"
            @click="activeTab=k"
            :class="activeTab===k ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:bg-slate-800'"
            class="w-full text-left px-5 py-4 rounded-2xl font-bold transition"
          >
            {{ m }}
          </button>
        </nav>

        <button
          @click="logout"
          class="mt-5 bg-rose-500 text-white py-4 rounded-2xl font-black"
        >
          Logout
        </button>
      </aside>

      <!-- CONTENT -->
      <main class="flex-1 min-w-[1200px] bg-slate-100 overflow-x-auto">

        <!-- HEADER -->
        <header class="bg-white p-6 flex items-center justify-between border-b sticky top-0 z-40">
          <div>
            <h1 class="text-4xl font-black uppercase italic">
              {{ menus[activeTab] }}
            </h1>

            <p class="text-slate-500 mt-1">
              Sistem Manajemen Kesehatan Digital
            </p>
          </div>

          <div class="flex items-center gap-4">
            <div class="bg-indigo-100 px-5 py-3 rounded-2xl text-indigo-600 font-black">
              {{ countdownText }}
            </div>

            <div class="bg-slate-200 w-14 h-14 rounded-2xl flex items-center justify-center text-2xl">
              👤
            </div>
          </div>
        </header>

        <!-- BODY -->
        <div class="p-6">

          <!-- DASHBOARD -->
          <div v-if="activeTab==='home'" class="space-y-8">
            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
              <div class="bg-indigo-600 text-white rounded-3xl p-8">
                <p>Total Pasien</p>
                <h1 class="text-5xl font-black mt-3">
                  {{ patients.length }}
                </h1>
              </div>

              <div class="bg-emerald-500 text-white rounded-3xl p-8">
                <p>Total Obat</p>
                <h1 class="text-5xl font-black mt-3">
                  {{ medicines.length }}
                </h1>
              </div>

              <div class="bg-amber-400 text-white rounded-3xl p-8">
                <p>Riwayat</p>
                <h1 class="text-5xl font-black mt-3">
                  {{ history.length }}
                </h1>
              </div>

              <div class="bg-slate-900 text-white rounded-3xl p-8">
                <p>Kepatuhan</p>
                <h1 class="text-5xl font-black mt-3">
                  98%
                </h1>
              </div>
            </div>
          </div>

          <!-- PASIEN -->
          <div v-if="activeTab==='pasien'" class="space-y-5">

            <div class="bg-white p-5 rounded-3xl flex justify-between items-center shadow">
              <h1 class="text-3xl font-black uppercase italic">
                Data Pasien
              </h1>

              <button
                @click="openModalPasien"
                class="bg-indigo-600 text-white px-6 py-3 rounded-2xl font-black"
              >
                Tambah Pasien
              </button>
            </div>

            <div class="bg-white rounded-3xl overflow-auto shadow">
              <table class="w-full min-w-[1200px]">
                <thead class="bg-slate-950 text-white">
                  <tr>
                    <th class="p-5 text-left">Nama</th>
                    <th class="p-5 text-left">Alamat</th>
                    <th class="p-5 text-left">Telepon</th>
                    <th class="p-5 text-left">Keluhan</th>
                    <th class="p-5 text-center">Aksi</th>
                  </tr>
                </thead>

                <tbody>
                  <tr
                    v-for="(p,idx) in patients"
                    :key="idx"
                    class="border-b"
                  >
                    <td class="p-5 font-bold">{{ p.name }}</td>
                    <td class="p-5">{{ p.address }}</td>
                    <td class="p-5">{{ p.phone }}</td>
                    <td class="p-5">{{ p.complaint }}</td>

                    <td class="p-5">
                      <div class="flex justify-center gap-3">
                        <button
                          @click="editPasien(idx)"
                          class="bg-blue-100 text-blue-600 px-4 py-2 rounded-xl"
                        >
                          Edit
                        </button>

                        <button
                          @click="deletePasien(idx)"
                          class="bg-rose-100 text-rose-600 px-4 py-2 rounded-xl"
                        >
                          Hapus
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- OBAT -->
          <div v-if="activeTab==='obat'" class="space-y-5">

            <div class="bg-white p-5 rounded-3xl flex justify-between items-center shadow">
              <h1 class="text-3xl font-black uppercase italic">
                Jadwal Obat
              </h1>

              <div class="flex gap-3">
                <button
                  @click="printMedicine"
                  class="bg-emerald-500 text-white px-5 py-3 rounded-2xl font-black"
                >
                  Cetak Kartu
                </button>

                <button
                  @click="openModalObat"
                  class="bg-indigo-600 text-white px-5 py-3 rounded-2xl font-black"
                >
                  Tambah Obat
                </button>
              </div>
            </div>

            <div class="bg-white rounded-3xl overflow-auto shadow">
              <table class="w-full min-w-[1400px]">
                <thead class="bg-slate-950 text-white">
                  <tr>
                    <th class="p-5">Nama Obat</th>
                    <th class="p-5">Dosis</th>
                    <th class="p-5">Waktu</th>
                    <th class="p-5">Mulai</th>
                    <th class="p-5">Selesai</th>
                    <th class="p-5">Keterangan</th>
                    <th class="p-5">Aksi</th>
                  </tr>
                </thead>

                <tbody>
                  <tr
                    v-for="(m,idx) in medicines"
                    :key="idx"
                    class="border-b"
                  >
                    <td class="p-5 font-bold">{{ m.name }}</td>
                    <td class="p-5">{{ m.dose }}</td>
                    <td class="p-5">{{ m.time }}</td>
                    <td class="p-5">{{ m.start }}</td>
                    <td class="p-5">{{ m.end }}</td>
                    <td class="p-5">{{ m.note }}</td>

                    <td class="p-5">
                      <div class="flex gap-3 justify-center">
                        <button
                          @click="editObat(idx)"
                          class="bg-blue-100 text-blue-600 px-4 py-2 rounded-xl"
                        >
                          Edit
                        </button>

                        <button
                          @click="deleteObat(idx)"
                          class="bg-rose-100 text-rose-600 px-4 py-2 rounded-xl"
                        >
                          Hapus
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- HISTORY -->
          <div v-if="activeTab==='history'" class="space-y-5">
            <div class="bg-white rounded-3xl shadow overflow-auto">
              <table class="w-full min-w-[1200px]">
                <thead class="bg-slate-950 text-white">
                  <tr>
                    <th class="p-5">Tanggal</th>
                    <th class="p-5">Aktivitas</th>
                  </tr>
                </thead>

                <tbody>
                  <tr
                    v-for="(h,idx) in history"
                    :key="idx"
                    class="border-b"
                  >
                    <td class="p-5">{{ h.date }}</td>
                    <td class="p-5">{{ h.action }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- SETTINGS -->
          <div v-if="activeTab==='settings'" class="space-y-5">
            
            <div class="bg-white rounded-3xl p-8 shadow">
              <h1 class="text-3xl font-black uppercase italic mb-8">
                Settings
              </h1>

              <div class="space-y-5">

                <button
                  @click="resetData"
                  class="bg-rose-500 text-white px-6 py-4 rounded-2xl font-black"
                >
                  Reset Semua Data
                </button>

                <button
                  @click="backupData"
                  class="bg-emerald-500 text-white px-6 py-4 rounded-2xl font-black"
                >
                  Backup Data
                </button>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-5 pt-5">
                  <input
                    v-model="newPassword"
                    type="password"
                    placeholder="Password Baru"
                    class="bg-slate-100 p-5 rounded-2xl"
                  >

                  <button
                    @click="changePassword"
                    class="bg-indigo-600 text-white rounded-2xl font-black"
                  >
                    Ubah Password
                  </button>
                </div>

              </div>
            </div>

          </div>

        </div>
      </main>

      <!-- MODAL PASIEN -->
      <div
        v-if="modalPasien.show"
        class="fixed inset-0 bg-black/70 z-[999] flex items-center justify-center p-5"
      >
        <div class="bg-white rounded-[40px] w-full max-w-4xl p-8">
          <h1 class="text-4xl font-black uppercase italic mb-8">
            {{ modalPasien.isEdit ? 'Edit' : 'Tambah' }} Pasien
          </h1>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input v-model="fP.name" placeholder="Nama" class="bg-slate-100 p-5 rounded-2xl">
            <input v-model="fP.phone" placeholder="Telepon" class="bg-slate-100 p-5 rounded-2xl">

            <input v-model="fP.address" placeholder="Alamat" class="bg-slate-100 p-5 rounded-2xl md:col-span-2">

            <input v-model="fP.complaint" placeholder="Keluhan" class="bg-slate-100 p-5 rounded-2xl md:col-span-2">
          </div>

          <div class="mt-8 flex gap-4">
            <button
              @click="modalPasien.show=false"
              class="flex-1 bg-slate-200 py-4 rounded-2xl font-black"
            >
              Batal
            </button>

            <button
              @click="savePasien"
              class="flex-1 bg-indigo-600 text-white py-4 rounded-2xl font-black"
            >
              Simpan
            </button>
          </div>
        </div>
      </div>

      <!-- MODAL OBAT -->
      <div
        v-if="modalObat.show"
        class="fixed inset-0 bg-black/70 z-[999] flex items-center justify-center p-5"
      >
        <div class="bg-white rounded-[40px] w-full max-w-5xl p-8">
          <h1 class="text-4xl font-black uppercase italic mb-8">
            {{ modalObat.isEdit ? 'Edit' : 'Tambah' }} Jadwal Obat
          </h1>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">

            <input v-model="fM.name" placeholder="Nama Obat" class="bg-slate-100 p-5 rounded-2xl">
            <input v-model="fM.dose" placeholder="Dosis Obat" class="bg-slate-100 p-5 rounded-2xl">

            <input v-model="fM.time" placeholder="Waktu Minum" class="bg-slate-100 p-5 rounded-2xl">

            <input type="date" v-model="fM.start" class="bg-slate-100 p-5 rounded-2xl">

            <input type="date" v-model="fM.end" class="bg-slate-100 p-5 rounded-2xl">

            <input v-model="fM.note" placeholder="Keterangan" class="bg-slate-100 p-5 rounded-2xl">
          </div>

          <div class="mt-8 flex gap-4">
            <button
              @click="modalObat.show=false"
              class="flex-1 bg-slate-200 py-4 rounded-2xl font-black"
            >
              Batal
            </button>

            <button
              @click="saveObat"
              class="flex-1 bg-indigo-600 text-white py-4 rounded-2xl font-black"
            >
              Simpan
            </button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'

const LS_PATIENTS = 'mt_patients'
const LS_MEDS = 'mt_meds'
const LS_HISTORY = 'mt_history'
const LS_PASSWORD = 'mt_password'

const page = ref('landing')
const landingTab = ref('home')
const activeTab = ref('home')

const toast = reactive({
  show:false,
  message:''
})

const menus = {
  home:'🏠 Dashboard',
  pasien:'👥 Data Pasien',
  obat:'💊 Jadwal Obat',
  history:'📜 Riwayat',
  settings:'⚙️ Settings'
}

const features = [
  {
    title:'Real-time Monitoring',
    desc:'Monitoring pasien dan obat secara real-time.',
    icon:'⚡'
  },
  {
    title:'Smart Analytics',
    desc:'Laporan kesehatan otomatis dan modern.',
    icon:'📊'
  },
  {
    title:'Cloud LocalStorage',
    desc:'Data tetap tersimpan walaupun logout atau laptop dimatikan.',
    icon:'💾'
  }
]

const auth = reactive({
  email:'admin@gmail.com',
  password:'12345'
})

const newPassword = ref('')

const patients = ref(JSON.parse(localStorage.getItem(LS_PATIENTS)) || [])

const medicines = ref(JSON.parse(localStorage.getItem(LS_MEDS)) || [])

const history = ref(JSON.parse(localStorage.getItem(LS_HISTORY)) || [])

const countdownText = ref('24:00:00')

const modalPasien = reactive({
  show:false,
  isEdit:false,
  idx:null
})

const modalObat = reactive({
  show:false,
  isEdit:false,
  idx:null
})

const fP = reactive({
  name:'',
  address:'',
  phone:'',
  complaint:''
})

const fM = reactive({
  name:'',
  dose:'',
  time:'',
  start:'',
  end:'',
  note:''
})

const showToast = (msg)=>{
  toast.message = msg
  toast.show = true

  setTimeout(()=>{
    toast.show = false
  },3000)
}

const sync = ()=>{
  localStorage.setItem(LS_PATIENTS, JSON.stringify(patients.value))
  localStorage.setItem(LS_MEDS, JSON.stringify(medicines.value))
  localStorage.setItem(LS_HISTORY, JSON.stringify(history.value))
}

const addHistory = (msg)=>{
  history.value.unshift({
    date:new Date().toLocaleString(),
    action:msg
  })

  sync()
}

const handleLogin = ()=>{
  const savedPass = localStorage.getItem(LS_PASSWORD) || '12345'

  if(auth.email === 'admin@gmail.com' && auth.password === savedPass){
    page.value = 'dashboard'
    showToast('Login berhasil')
  }else{
    alert('Email atau password salah')
  }
}

const logout = ()=>{
  page.value = 'landing'
}

const openModalPasien = ()=>{
  modalPasien.show = true
  modalPasien.isEdit = false

  Object.assign(fP,{
    name:'',
    address:'',
    phone:'',
    complaint:''
  })
}

const savePasien = ()=>{

  if(modalPasien.isEdit){
    patients.value[modalPasien.idx] = {...fP}

    addHistory(`Edit data pasien ${fP.name}`)
  }else{
    patients.value.push({...fP})

    addHistory(`Tambah data pasien ${fP.name}`)
  }

  sync()

  modalPasien.show = false

  showToast('Data pasien disimpan')
}

const editPasien = (idx)=>{
  modalPasien.show = true
  modalPasien.isEdit = true
  modalPasien.idx = idx

  Object.assign(fP, patients.value[idx])
}

const deletePasien = (idx)=>{

  addHistory(`Hapus pasien ${patients.value[idx].name}`)

  patients.value.splice(idx,1)

  sync()

  showToast('Data pasien dihapus')
}

const openModalObat = ()=>{
  modalObat.show = true
  modalObat.isEdit = false

  Object.assign(fM,{
    name:'',
    dose:'',
    time:'',
    start:'',
    end:'',
    note:''
  })
}

const saveObat = ()=>{

  if(modalObat.isEdit){
    medicines.value[modalObat.idx] = {...fM}

    addHistory(`Edit jadwal obat ${fM.name}`)
  }else{
    medicines.value.push({...fM})

    addHistory(`Tambah jadwal obat ${fM.name}`)
  }

  sync()

  modalObat.show = false

  showToast('Jadwal obat disimpan')
}

const editObat = (idx)=>{
  modalObat.show = true
  modalObat.isEdit = true
  modalObat.idx = idx

  Object.assign(fM, medicines.value[idx])
}

const deleteObat = (idx)=>{

  addHistory(`Hapus jadwal obat ${medicines.value[idx].name}`)

  medicines.value.splice(idx,1)

  sync()

  showToast('Jadwal obat dihapus')
}

const resetData = ()=>{

  if(confirm('Reset semua data?')){

    localStorage.removeItem(LS_PATIENTS)
    localStorage.removeItem(LS_MEDS)
    localStorage.removeItem(LS_HISTORY)

    patients.value = []
    medicines.value = []
    history.value = []

    showToast('Semua data direset')
  }
}

const backupData = ()=>{

  const data = {
    patients:patients.value,
    medicines:medicines.value,
    history:history.value
  }

  const blob = new Blob(
    [JSON.stringify(data,null,2)],
    {type:'application/json'}
  )

  const a = document.createElement('a')

  a.href = URL.createObjectURL(blob)

  a.download = 'meditrack-backup.json'

  a.click()

  showToast('Backup berhasil')
}

const changePassword = ()=>{

  if(!newPassword.value){
    alert('Masukkan password baru')
    return
  }

  localStorage.setItem(LS_PASSWORD,newPassword.value)

  showToast('Password berhasil diubah')

  newPassword.value = ''
}

const printMedicine = ()=>{

  const html = medicines.value.map(m=>`
    <div style="border:2px solid #000;padding:20px;border-radius:20px;margin-bottom:20px">
      <h1 style="font-size:24px;font-weight:bold">${m.name}</h1>
      <p>Dosis : ${m.dose}</p>
      <p>Waktu : ${m.time}</p>
      <p>Tanggal : ${m.start} s/d ${m.end}</p>
      <p>Keterangan : ${m.note}</p>
    </div>
  `).join('')

  const win = window.open('')

  win.document.write(html)

  win.print()
}

onMounted(()=>{
  showToast('Selamat datang di MediTrack Digital')
})
</script>

<style>
body{
  margin:0;
  padding:0;
  overflow-x:auto;
  background:#f1f5f9;
}

*{
  box-sizing:border-box;
}

.animate-fadeIn{
  animation:fadeIn .5s ease;
}

@keyframes fadeIn{
  from{
    opacity:0;
    transform:translateY(20px);
  }

  to{
    opacity:1;
    transform:translateY(0);
  }
}

.toast-enter-active,
.toast-leave-active{
  transition:.3s;
}

.toast-enter-from,
.toast-leave-to{
  opacity:0;
  transform:translateX(100px);
}

::-webkit-scrollbar{
  width:10px;
  height:10px;
}

::-webkit-scrollbar-thumb{
  background:#6366f1;
  border-radius:20px;
}
</style>
