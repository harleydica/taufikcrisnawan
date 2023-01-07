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
  `Mampu mengelola dan mengkonfigurasi sistem operasi seperti Linux atau Windows.`,
  `Mampu mengelola dan mengkonfigurasi jaringan komputer, termasuk LAN, dan internet.`,
  `Mengembangkan aplikasi web menggunakan teknologi seperti HTML, CSS, dan JavaScript.`,
  `Menggunakan alat-alat seperti Git untuk mengelola dan mengontrol versi dari kode sumber aplikasi.`,
  `Soft Skills: Problem Solving, Komunikatif, Teamwork, Multitasking.`,
  `Hobby: Codding, Fotografi, Videografi, Badminton, Mendaki.`
]

export const KEY_SKILLS = [
  `Sebagai orang yang profesional saya mahir dalam Proses Berpikir Desain. Saya juga terampil dalam Berpikir Kritis & Pemecahan Masalah.`,
  `Saya sangat mudah beradaptasi dan berkembang dalam lingkungan yang berorientasi pada tim.`,
  `Saya juga dikenal karena kreativitas dan kemampuan saya untuk mendekati tugas dan tantangan dengan pola pikir yang inovatif.`

]

export const EXPERIENCE: Experience[] = [
  {
    companyName: 'Organisasi Siswa Intra Sekolah',
    role: 'Ketua Sekbid Tim TIK & HUMAS',
    period: {
      start: 'Agust, 2022',
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
      start: 'January, 2021',
      end: 'January, 2022'
    },
    lists: [
      `Menjalankan program kerja RISMA dalam kondisi pandemi Covid-19, mengordinasi seluruh anggota dengan baik.`,
      `Bertanggung jawab mengelola organisasi, mengatur program kerja, membagi tugas di masing-masing bidang kepada anggota, mengingatkan anggota untuk menjalankan tugasnya, dan memastikan program kerja dapat berjalan dengan lancar.`
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
    list: {
      title: 'Penghargaan:',
      listItem: ['-']
    }
  },
  {
    school: 'SMP Negeri 5 Depok Sleman',
    period: {
      start: 'September, 2017',
      end: 'Mei, 2020'
    },
    paragraphs: ['Lulus di May, 2020.']
  },
  {
    school: 'SD Negeri Nogopuro',
    period: {
      start: 'April, 2011',
      end: 'August, 2017'
    },
    paragraphs: ['Lulus di July, 2017.']
  }
]

export const SUMMARY = [
  'Seorang siswa yang fokus untuk mewujudkan target.',
  `Memiliki pengalaman dalam berbagai organisasi di sekolah.`,
  `Mempelajari pengembangan website berbasis HTML, CSS, JavaScript.`,
  'Terus belajar mencari tahu dan mengeksplorasi tentang teknologi baru dan praktik, tetap fokus pada tanggungjawab dan memberikan hasil semaksimal mungkin.'
]

export const LANGUAGES = [
  {
    title: 'Indonesia',
    level: 'Sehari-hari'
  },
  {
    title: 'English',
    level: 'Terbatas'
  }
]
