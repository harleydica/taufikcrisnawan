import BlogCard from '@/components/mollecules/BlogCard'
import HeroWithPhoto from '@/components/mollecules/HeroWithPhoto'
import ProjectCard from '@/components/mollecules/ProjectCard'
import Section from '@/components/organism/Section'
import Layout, { LayoutProps } from '@/components/templates/Layout'

import { Blogs } from '@/data/blog/blog.type'
import { PortfolioHeadProps } from '@/data/portfolio/portfolio.type'
import { getBlog } from '@/helpers/getBlog'
import getPortfolio from '@/helpers/getPortfolio'
import { getMetaData } from '@/libs/metaData'
import { getNewestBlog } from '@/libs/sortBlog'
import { getNewestPortfolio } from '@/libs/sortPortfolio'

import { GetStaticProps, NextPage } from 'next'
import readingTime from 'reading-time'

interface HomePageProps {
  blogs: Array<Blogs>
  portfolios: Array<PortfolioHeadProps>
}

const HomePage: NextPage<HomePageProps> = ({ blogs, portfolios }) => {
  const meta = getMetaData({
    title: 'My Web',
    template: 'Networking & Broadband Enthusiast',
    description: `Taufik Crisnawan S personal website, its contain about my blog, work, achievment and more. You can call me with Taufik or Topek.`,
    keywords: ['Taufik Crisnawan Santosa', 'Taufik Crisnawan S', 'taufikntz22', 'Taufikcrisna', 'taufkcrisnawan.my.id'],
    og_image: 'https://ik.imagekit.io/taufik/topek.jpg',
    og_image_alt: 'Taufik Crisnawan Santosa',
    slug: '/',
    type: 'website'
  })
  return (
    <Layout {...(meta as LayoutProps)}>
      <HeroWithPhoto
        title='Taufik Crisnawan Santosa'
        subtitle='Networking &amp; Broadband Enthusiast'
        description="Hello👋, I'm Taufik Crisnawan Santosa, a student at SMKN 2 Depok and currently learn self-taught about Networking and Computer Science, Welcome to my website where you can find my work, Certificate, blog and more."
        img={{
          alt_title: meta.title as string,
          src: meta?.openGraph?.images ? meta.openGraph.images[0].url : ''
        }}
      />

      <Section
        title='Featured Post'
        gridCols='grid-cols-1 md:grid-cols-2'
        data={blogs}
        Component={BlogCard}
        link={{
          to: '/blog',
          children: 'See all post'
        }}
      />

      <Section
        title='My Work'
        gridCols='grid-cols-1 md:grid-cols-2'
        data={portfolios}
        Component={ProjectCard}
        link={{
          to: '/work',
          children: 'See all my work'
        }}
      />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const res = await getBlog()
  const response = await getPortfolio()

  const blogs = res
    .filter((r) => r.header.featured)
    .map((r) => ({ est_read: readingTime(r.content).text, ...r.header }))
    .sort(getNewestBlog)

  const portfolios = response.filter((r) => r.featured).sort(getNewestPortfolio)

  return {
    props: {
      blogs,
      portfolios
    }
  }
}

export default HomePage
