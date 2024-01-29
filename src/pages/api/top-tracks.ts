import { type NextRequest } from 'next/server'
import { getTopTracks } from '@/libs/spotify'

export const config = {
  runtime: 'experimental-edge'
}

export default async function handler(req: NextRequest) {
  const response = await getTopTracks()
  const { items } = await response.json()

  const tracks = items.slice(0, 10).map((track: any) => ({
    artist: track.artists.map((_artist: any) => _artist.name).join(', '),
    songUrl: track.external_urls.spotify,
    title: track.name
  }))

  return new Response(JSON.stringify({ tracks }), {
    status: 200,
    headers: {
      'content-type': 'application/json',
      'cache-control': 'public, s-maxage=86400, stale-while-revalidate=43200'
    }
  })
}
