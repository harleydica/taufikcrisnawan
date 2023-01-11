import SOCIAL from './social'

import { Experience } from 'taufikcrisnawan'

export const HEADLINE = {
  name: 'Taufik Crisnawan Santosa'
}

export const LINKS: typeof SOCIAL = [
  ...SOCIAL.filter((s) => s.title !== 'Instagram'),
  {
    href: 'https://taufikcrisnawan.dev',
    title: 'Website'
  },
  {
    href: 'https://taufikcrisnawan.dev/blog',
    title: 'Blog'
  }
]

export const SKILLS = [
  `Mampu mengelola dan mengkonfigurasi sistem operasi dasar seperti Linux atau Windows.`,
  `Mampu mengelola dan mengkonfigurasi jaringan komputer dasar, termasuk LAN, dan internet.`,
  `Mengembangkan aplikasi web menggunakan teknologi seperti HTML, CSS, dan JavaScript.`,
  `Menggunakan alat-alat seperti Git untuk mengelola dan mengontrol versi dari kode sumber aplikasi.`
]

export const KEY_SKILLS = [
  `Sebagai seorang yang profesional saya mahir dalam proses berpikir desain. Saya juga terampil dalam berpikir kritis & pemecahan masalah.`,
  `Sangat mudah beradaptasi dan berkembang dalam lingkungan yang berorientasi pada tim.`,
  `Saya juga dikenal karena kreativitas dan kemampuan saya untuk mendekati tugas dan tantangan dengan pola pikir yang inovatif.`
]

export const EXPERIENCE: Experience[] = [
  {
    companyName: 'Organisasi Siswa Intra Sekolah',
    role: 'Ketua Seksi Bidang Tim TIK & HUMAS',
    period: {
      start: 'Agustus, 2022',
      end: 'Sekarang'
    },
    lists: [
      `Membantu kinerja OSIS dalam bidang TIK & HUMAS.`,
      `Bertugas mendokumentasikan semua kegiatan yang diadakan sekolah dan organisasi sekolah lainnya dalam bentuk foto, video, dan streaming langsung. Saya juga bertanggung jawab untuk mengunggah, menyimpan, dan mengatur semua dokumentasi yang telah dilakukan, serta mempublikasikan jika diperlukan.`
    ]
  },
  {
    companyName: 'Remaja Islam Masjid Al-Qomar, Gowok',
    role: 'Ketua Umum',
    period: {
      start: 'Januari, 2021',
      end: 'Januari, 2022'
    },
    lists: [
      `Menjalankan program kerja Remaja Islam Masjid Al-Qomar dengan lancar dan mengkoordinasi seluruh anggota dengan baik.`,
      `Bertanggung jawab menjalankan organisasi, mengatur program kerja, membagi tugas di masing-masing bidang kepada anggota, dan memastikan program kerja dapat berjalan dengan lancar.`
    ]
  }
]

type Education = Array<{
  school: string
  period: { start: string; end: string }
  paragraphs: string[]
  list?: {
    title: string
    listItem: string[]
  }
}>

export const EDUCATION: Education = [
  {
    school: 'SMK Negeri 2 Depok Sleman',
    period: {
      start: 'June, 2020',
      end: 'Sekarang'
    },
    paragraphs: ['Semester 5, Sistem Informatika Jaringan dan Aplikasi'],
    // list: {
    //   title: 'Penghargaan:',
    //   listItem: ['-']
    // }
  },
  {
    school: 'SMP Negeri 5 Depok Sleman',
    period: {
      start: 'September, 2017',
      end: 'Mei, 2020'
    },
    paragraphs: ['Lulus Mei, 2020']
  }
]

export const SUMMARY = [
  `Saya Taufik Crisnawan Santosa, pelajar SMK Negeri 2 Depok Sleman kompetensi keahlian Sistem Informatika Jaringan & Aplikasi. Memiliki berbagai pengalaman organisasi di sekolah maupun di luar sekolah. Saya memiliki minat dalam dunia IT Network System Administrator dengan pengalaman dasar. Mempelajari, mencari tahu dan mengeksplorasi tentang teknologi baru serta praktik, tetap fokus pada tanggungjawab dan memberikan hasil semaksimal mungkin.`
]

export const LANGUAGES = [
  {
    title: 'Indonesia',
    level: 'Warga Asli, Fasih'
  },
  {
    title: `Jawa`,
    level: `Fasih`,
  },
  {
    title: 'Inggris',
    level: 'Pemula'
  }
]

export const CONTACT = [
  {
    title: 'Website',
    level: 'taufikcrisnawan.dev'
  },
  {
    title: `Sosial Media`,
    level:  `links.taufikcrisnawan.dev`
  },
  {
    title: `E-mail`,
    level: `taufiklah87@gmail.com`,
  },
  {
    title: 'WhatsApp',
    level: '+62 898-5383-531'
  }
]