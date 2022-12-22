import { CustomSeo } from '@/components'
import { BlogList, ContentImage, PortfolioList } from '@/components/content'

import { Footer, SocialHome } from '@/UI/common'

import { GetContents, getContents } from '@/services'

import { getMetaPage } from '@/libs/metapage'
import { getNewestBlog, getNewestPortfolio } from '@/libs/sorters'
import { twclsx } from '@/libs/twclsx'

import type { GetStaticProps, NextPage } from 'next'
import readingTime from 'reading-time'
import type { Blog, Portfolio } from 'taufikcrisnawan'

interface HomePageProps {
  blogs: Array<Blog>
  portfolios: Array<Portfolio>
}

const HomePage: NextPage<HomePageProps> = ({ blogs, portfolios }) => {
  const meta = getMetaPage({
    title: 'Taufik Crisnawan Santosa',
    template: 'Student And Tech Enthusiast',
    description: `Taufik Crisnawan S personal website, its contain about my blog, work, achievment and more. You can call me with Taufik or Topek.`,
    keywords: ['Taufik Crisnawan Santosa', 'Taufik Crisnawan S', 'Taufikcrisnawan', 'Taufik Crisnawan', 'taufikcrisnawan.dev'],
    og_image: `https://ik.imagekit.io/taufik/profile/IMG-20220928.webp`,
    og_image_alt: 'Taufik Crisnawan Santosa',
    slug: '/',
    type: 'website'
  })
  return (
    <>
      <CustomSeo {...meta} />

      <div className='w-full h-40 md:layout pattern' />

      <main className='layout'>
        <section className='flex flex-col'>
          <div className='relative flex h-14 md:h-16'>
            <ContentImage
              src='https://ik.imagekit.io/taufik/profile/IMG-20220928.webp'
              alt='Taufik Crisnawan Santosa'
              width={128}
              height={128}
              className='rounded-full absolute left-1 bottom-0.5 border-4 cursor-pointer border-theme-50 dark:border-theme-900'
              title="Taufik Face"
              quality={100}
              priority
            />
            <SocialHome className='ml-auto max-w-max' />
          </div>

          <div className='mt-3 md:mt-6'>
            <h1>Taufik Crisnawan Santosa</h1>
            <h2 className='max-w-max mb-7 text-transparent font-bold text-xl md:text-2xl bg-clip-text bg-gradient-to-r from-primary-500 to-ternary-500 dark:text-transparent'>
              Student &amp; Tech Enthusiast
            </h2>

            <div className='[&>p:not(:last-child)]:mb-3 [&>p]:max-w-prose md:pb-6'>
              <p>
                Hello👋, I&apos;m Taufik Crisnawan Santosa, a student at SMKN 2 Depok, majoring in SIJA (System Information Network and Aplication).
              </p>

              <p>
                Interested in the world of Technology and a little like Programing which has become my hobby, besides that I also like to make a documentation about what I do, this is where I tell everything. I liked technology since I was 10 years old. when I was still using a nokia cellphone, and liked to go to the internet cafe.
              </p>

              <p>
                Welcome to my website where you can find my portfolio, Certificate, blog and more. Enjoy 😄
              </p>

              <br></br>
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
                  Sebaik-baiknya manusia adalah yang paling bermanfaat bagi manusia lain. 
                  <br></br>
                  ~ HR. Tirmidzi
                </p>
              </blockquote>

            </div>
          </div>
        </section>

        <BlogList
          className='pt-32'
          description="If you're looking for some interesting reads, check out my featured blog post. sorted from latest to least, feel free to explore it."
          posts={blogs}
          title='Featured Post'
        />

        <PortfolioList
          description='Check out my featured portfolio, feel free to explore it.'
          title='Featured Portfolio'
          portfolios={portfolios}
        />
      </main>

      <Footer />
    </>
  )
}

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const [requestBlogs, requestPortfolios] = await Promise.allSettled([
    getContents<Blog>('/blog'),
    getContents<Portfolio>('/portfolio')
  ])

  const blogsData = [] as Array<GetContents<Blog>>
  const portfoliosData = [] as Array<GetContents<Portfolio>>
  // const portfoliosData = [] as Array<Portfolio>

  if (requestBlogs.status === 'fulfilled') {
    requestBlogs.value.forEach((blog) => {
      blogsData.push(blog)
    })
  }
  if (requestPortfolios.status === 'fulfilled') {
    requestPortfolios.value.forEach((portfolio) => {
      portfoliosData.push(portfolio)
    })
  }

  const blogs = blogsData
    .filter((r) => r.header.featured)
    .map((r) => ({ est_read: readingTime(r.content).text, ...r.header }))
    .sort(getNewestBlog)

  const portfolios = portfoliosData
    .map((p) => p.header)
    .filter((f) => f.featured)
    .sort(getNewestPortfolio)

  return {
    props: {
      blogs,
      portfolios
    }
  }
}

export default HomePage