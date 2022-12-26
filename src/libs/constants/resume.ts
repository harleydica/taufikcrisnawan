import SOCIAL from './social'

export const HEADLINE = {
  name: 'TAUFIK CRISNAWAN SANTOSA',
  role: 'Networking & Broadband'
}

export const LINKS: typeof SOCIAL = [
  ...SOCIAL.filter((s) => s.title !== 'Telegram'),
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
  {
    name: 'Technologies',
    list: [
      'React',
      'Vite',
      'Next.js',
      'React Query',
      'Redux',
      'Jotai',
      'Zustand',
      'Tailwind CSS',
      'Vuejs',
      'Angular',
      'Supabase',
      'Firebase',
      'Vercel',
      'Node.js'
    ]
  },
  { name: 'Programming Languages', list: ['HTML', 'CSS/SCSS', 'JavaScript', 'TypeScript'] }
]

export const EXPERIENCE = [
  {
    companyName: 'Company',
    role: 'Role',
    period: {
      start: 'January, 2022',
      end: 'Present'
    },
    lists: [
      `List`
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
    school: 'Vocational High School of 2 Depok',
    period: {
      start: 'June, 2020',
      end: 'Present'
    },
    paragraphs: ['Semester 5, Information Networking System and Aplication'],
    list: {
      title: 'Honorable Award:',
      listItem: ['Student Competency and Expertise Test on building web app with PHP and MySQL.']
    }
  },
  {
    school: 'Junior High School of 5 Depok',
    period: {
      start: 'September, 2017',
      end: 'Mei, 2020'
    },
    paragraphs: ['Graduated in May, 2020.']
  },
  {
    school: 'Primary School of 5 Depok',
    period: {
      start: 'April, 2011',
      end: 'August, 2017'
    },
    paragraphs: ['Graduated in July, 2017.']
  }
]
