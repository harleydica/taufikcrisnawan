import { Hero, LayoutPage } from '@/UI/templates'
import { generateOgImage, getMetaPage } from '@/libs/metapage'
import TopTracks from '@/components/songlist/TopTracks'
import type { NextPage } from 'next'

const meta = getMetaPage({
    title: 'Top Tracks Spotify',
    description:
      "Curious what I'm currently jamming to? Here's my top tracks on Spotify updated daily.",
    keywords: ['toptracks', 'spotify', 'taufikcrisnawan.dev'],
    og_image: generateOgImage({
      title: 'Top Tracks Spotify',
      subTitle: "My top tracks on Spotify",
      theme: 'dark'
    }),
    og_image_alt: 'Top Tracks Spotify — taufikcrisnawan.dev',
    slug: '/toptracks',
    type: 'website'
  })

const ToptracksPage: NextPage = () => {

    return (
        <LayoutPage {...meta}>
            <Hero title={meta.title as string} description={meta.description as string} />
            <TopTracks />
        </LayoutPage>
    )
}

export default ToptracksPage