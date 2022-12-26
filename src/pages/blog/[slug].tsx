import BackToTop from '@/components/atoms/BackToTop'
import CustomImage from '@/components/atoms/CustomImage'
import EditButton from '@/components/mollecules/EditButton'
import MDXComponents from '@/components/organism/MDXComponents'
import ContentImage from '@/components/organism/MDXComponents/ContentImage'
import UnstyledLink from '@/components/atoms/UnstyledLink'
import Layout from '@/components/templates/Layout'

import { Blogs } from '@/data/blog/blog.type'
import { getBlog, getBlogBySlug } from '@/helpers/getBlog'
import dateFormat, { dateStringToISO } from '@/libs/dateFormat'
import { getMetaDataBlog } from '@/libs/metaData'
import { twclsx } from '@/libs/twclsx'

import { LayoutProps } from 'framer-motion'
import { GetStaticPaths, GetStaticPathsResult, GetStaticProps, NextPage } from 'next'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { ParsedUrlQuery } from 'querystring'
import { HiOutlineCalendar, HiOutlineClock } from 'react-icons/hi'
import readingTime from 'reading-time'
import rehypeSlug from 'rehype-slug'

interface BlogPostProps {
  mdxSource: MDXRemoteSerializeResult
  header: Blogs
}

interface slug extends ParsedUrlQuery {
  slug: string
}

const BlogPost: NextPage<BlogPostProps> = ({ header, mdxSource }) => {
  const metaData = getMetaDataBlog({
    ...header,
    slug: '/blog/' + header.slug
  })

  const config: Intl.DateTimeFormatOptions = {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  }

  return (
    <Layout {...(metaData as LayoutProps)}>
      <BackToTop />
      <article className={twclsx('content-auto', 'flex flex-col', 'gap-8')}>
        <section className={twclsx('pb-8 border-b', 'border-theme-300 dark:border-theme-700')}>
          <h1 className={twclsx('max-w-prose', 'text-3xl md:text-5xl')}>{header.title}</h1>
          <p className={twclsx('mt-4 md:mt-8', 'mb-8')}>{header.summary}</p>

          <div className={twclsx('flex flex-col', 'gap-4', 'md:flex-row md:items-center md:justify-between')}>
            <div className={twclsx('flex items-center', 'gap-4')}>
              <div className={twclsx('flex items-center', 'gap-2', 'text-sm md:text-base')}>
                <HiOutlineClock className={twclsx('text-lg')} />
                <p>{header.est_read}</p>
              </div>
            </div>
            <div className={twclsx('flex items-center', 'gap-2')}>
              <HiOutlineCalendar className={twclsx('text-lg')} />
              <time className={twclsx('text-sm md:text-base')} dateTime={dateStringToISO(header.published)}>
                {dateFormat(header.published, undefined, config)}
              </time>
            </div>
          </div>
        </section>

        <section className={twclsx('flex flex-col', 'gap-4')}>
          <div className={twclsx('flex flex-col', 'gap-4')}>
            <div className={twclsx('flex items-center', 'gap-4')}>
              <CustomImage
                display='intrinsic'
                className={twclsx('rounded-full')}
                src='https://ik.imagekit.io/taufik/profile.jpg'
                width={32}
                height={32}
                alt={header.author_name}
              />
              <p className={twclsx('text-sm font-medium', 'text-theme-500 dark:text-theme-400')}>
              Written by{' '}
              <UnstyledLink
                title='Taufik Crisnawan S'
                className={twclsx(
                  'text-primary-600 hover:text-primary-500',
                  'dark:text-primary-400 dark:hover:text-primary-300',
                  'umami--click--github-profile-button'
                )}
                href='https://instagram.com/taufikntz22/'
              >
                Taufik Crisnawan S
              </UnstyledLink>
            </p>
            </div>
          </div>
        </section>

        {header.thumbnail && (
          <figure className={twclsx('relative', 'w-full', 'my-4')}>
            <ContentImage alt={header.title} src={header.thumbnail} title={header.title} />
          </figure>
        )}

        <section
          className={twclsx('prose dark:prose-invert', 'md:prose-lg', 'prose-headings:scroll-mt-24', 'prose-img:my-4')}
        >
          <MDXRemote {...mdxSource} components={MDXComponents} />
        </section>
      </article>

      <EditButton path={`/blog/${header.slug}.mdx`} />
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await getBlog()

  const paths = res.map((r) => ({ params: { slug: r.header.slug } })) as GetStaticPathsResult['paths']

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<BlogPostProps> = async (ctx) => {
  const mdxPrism = await require('mdx-prism')

  const { slug } = ctx.params as slug

  const res = await getBlogBySlug(slug)
  const est_read = readingTime(res.content).text

  const mdxSource = await serialize(res.content, {
    mdxOptions: { rehypePlugins: [mdxPrism, rehypeSlug] }
  })

  return {
    props: {
      header: { est_read, ...res.header },
      mdxSource
    }
  }
}

export default BlogPost
