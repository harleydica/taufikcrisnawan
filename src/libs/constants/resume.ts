import SOCIAL from './social'

//import { Experience } from 'taufikcrisnawan'

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

/* export const EXPERIENCE: Experience[] = [
  {
    companyName: 'Company Name',
    role: 'Role',
    period: {
      start: 'April, 2022',
      end: 'Present'
    },
    lists: [
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
    ]
  }
]*/

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
