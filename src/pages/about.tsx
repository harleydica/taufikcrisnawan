import HeroWithPhoto from '@/components/mollecules/HeroWithPhoto'
import Timeline from '@/components/organism/Timeline'
import Layout, { LayoutProps } from '@/components/templates/Layout'

import { timeline } from '@/libs/constants/timeline'
import { getMetaData } from '@/libs/metaData'
import { twclsx } from '@/libs/twclsx'

import { NextPage } from 'next'

const About: NextPage = () => {
  const meta = getMetaData({
    title: 'About Me',
    description: `A student of SMKN 2 Depok, majoring in SIJA (System Information Network and Aplication). Interested in the world of Networking and a little like Programing which has become my hobby. On the other hand, I also like to make a documentation about what I do, this is where I tell everything. Enjoy😄`,
    keywords: ['About Taufik Crisnawan Santosa'],
    og_image: 'https://ik.imagekit.io/taufik/profile.jpg',
    og_image_alt: 'Taufik Crisnawan Santosa',
    slug: '/about',
    type: 'website'
  })

  return (
    <Layout {...(meta as LayoutProps)}>
      <HeroWithPhoto
        title='About Me'
        subtitle='Taufik Crisnawan Santosa'
        description={meta.description as string}
        img={{
          src: meta.openGraph?.images ? meta.openGraph.images[0].url : '',
          alt_title: 'Taufik Crisnawan S'
        }}
      >
        <div className={twclsx('prose dark:prose-invert')}>
          <p className={twclsx('text-theme-700 dark:text-theme-200')}>
              I liked technology since I was 10 years old. when I was still using a nokia cellphone, and liked to go to the internet cafe.
          </p>
          <blockquote>
            <style jsx>
              {`
                blockquote {
                  border-image: linear-gradient(to bottom, #3b82f6, #14b8a6) 1;
                }
              `}
            </style>
            <p className={twclsx('text-theme-700 dark:text-theme-200')}>
            خَيْرُ النَّاسِ أَنْفَعُهُمْ لِلنَّاسِ 
            <br></br>
            Sebaik-baiknya manusia adalah yang paling bermanfaat bagi manusia lain. ~ HR. Tirmidzi
            </p>
          </blockquote>
        </div>
      </HeroWithPhoto>

      <section className={twclsx('')}>
        <h2 className={twclsx('mb-2')}>Timeline</h2>
        <p className={twclsx('max-w-prose mb-4')}>My education and career journey with a lot of experience in it.</p>
        <Timeline timeline={timeline} />
      </section>

      <section className={twclsx('pt-10 md:pt-10')}>
        <h2 className={twclsx('mb-4')}>Contact</h2>
        <p>
          Hi there, if you want to make a new friendship, bring your idea to reality, or just want to know more about
          me, please contact me on one of my social media account 👇.
        </p>
        <br></br>
        Thank You 😄
      </section>
    </Layout>
  )
}

export default About
