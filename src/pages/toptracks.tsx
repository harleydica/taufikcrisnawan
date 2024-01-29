import { Hero, LayoutPage } from '@/UI/templates'
import { generateOgImage, getMetaPage } from '@/libs/metapage'
import TopTracks from '@/components/songlist/TopTracks'
import type { NextPage } from 'next'
import { Spotify } from 'react-spotify-embed'

const meta = getMetaPage({
  title: 'Top Tracks Spotify',
  description: "Curious what I'm currently jamming to? Here's my top tracks on Spotify updated daily.",
  keywords: ['toptracks', 'spotify', 'taufikcrisnawan.dev'],
  og_image: generateOgImage({
    title: 'Top Tracks Spotify',
    subTitle: 'My top tracks on Spotify',
    theme: 'dark'
  }),
  og_image_alt: 'Top Tracks Spotify — taufikcrisnawan.dev',
  slug: '/toptracks',
  type: 'website'
})

const ToptracksPage: NextPage = () => {
  return (
    <LayoutPage seo={meta}>
      <Hero title={meta.title as string} description={meta.description as string} />
      <div className='mb-10'>
        <Spotify
          className='bg-theme-50 dark:bg-theme-900 spotify'
          style={{ borderRadius: '13px' }}
          wide
          link='https://open.spotify.com/playlist/37i9dQZF1EVKuMoAJjoTIw'
        />
      </div>
      <TopTracks />
    </LayoutPage>
  )
}

export default ToptracksPage
