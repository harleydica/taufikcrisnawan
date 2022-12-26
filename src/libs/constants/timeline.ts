export interface Timeline {
  title: string
  description: string
  place: string
  start_date: Date
  end_date: Date | null
  type: 'edu' | 'work'
}

export const timeline: Array<Timeline> = [
  {
    title: 'Primary School',
    type: 'edu',
    place: 'SDN Nogopuro',
    start_date: new Date(2011, 3, 14),
    end_date: new Date(2017, 7, 18),
    description:
      'I really enjoy studying here, all the teachers are kind and patient. I have learned many things, besides the knowledge I have, I also have very good and friendly friends.'
  },
  {
    title: 'Junior High School',
    type: 'edu',
    place: 'SMPN 5 Depok',
    start_date: new Date(2017, 8, 16),
    end_date: new Date(2020, 5, 23),
    description:
      'This school has shaped my character much better than before, and has taught me many lessons.'
  },
  {
    title: 'Vocational High School',
    type: 'work',
    place: 'SMKN 2 Depok',
    start_date: new Date(2020, 7, 12),
    end_date: null,
    description:
      "Finally, my dream to be able to study at SMKN 2 Depok came true. By choosing a major in SIJA (System Information Network and Aplication) or can be called a computer engineering major. Here, you can also discover their talents and interests by participating in various extracurricular activities. Also compete in a healthy manner to become school representatives in various competitions that are often participated by schools."
  }
]
