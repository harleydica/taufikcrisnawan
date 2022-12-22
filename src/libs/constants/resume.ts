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
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
]

export const KEY_SKILLS = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
]

export const EXPERIENCE: Experience[] = [
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
      listItem: ['Student Competency']
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
    school: 'Primary School of Nogopuro',
    period: {
      start: 'April, 2011',
      end: 'August, 2017'
    },
    paragraphs: ['Graduated in July, 2017.']
  }
]

export const SUMMARY = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
]

export const LANGUAGES = [
  {
    title: 'Indonesia',
    level: 'Native, Fluent'
  },
  {
    title: 'English',
    level: 'Limited working proficiency'
  }
]
