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

/*export const SKILLS = [
  `Berpengetahuan tentang Mikrotik konfigurasi dasar dan beberapa konfigurasi lainnya`,
]*/

export const KEY_SKILLS = [
  `Sebagai orang yang profesionals mahir dalam Proses Berpikir Desain. Saya juga terampil dalam Berpikir Kritis & Pemecahan Masalah.`,
  `Saya sangat mudah beradaptasi dan berkembang dalam lingkungan yang berorientasi pada tim.`,
  `Saya juga dikenal karena kreativitas dan kemampuan saya untuk mendekati tugas dan tantangan dengan pola pikir yang inovatif.`

]

export const EXPERIENCE: Experience[] = [
  {
    companyName: 'OSIS',
    role: 'Ketua Sekbid Tim TIK & HUMAS',
    period: {
      start: 'Agust, 2022',
      end: 'Sekarang'
    },
    lists: [
      `Membantu kinerja OSIS dalam bidang TIK & HUMAS.`,
      `Mendokumentasi seluruh kegiatan program kerja OSIS.`
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
      `Mendapatkan ilmu tentang agama walaupun tidak banyak yang saya dapatkan.`,
      `Mempelajari cara Public Speaking dengan baik didepan orang banyak.`
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
    paragraphs: ['Lulus tanggal May, 2020.']
  },
  {
    school: 'SD Negeri Nogopuro',
    period: {
      start: 'April, 2011',
      end: 'August, 2017'
    },
    paragraphs: ['Lulus tanggal July, 2017.']
  }
]

export const SUMMARY = [
  'Sedikit pengalaman dalam memperbaiki jaringan dasar dalam lingkup yang kecil.',
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
