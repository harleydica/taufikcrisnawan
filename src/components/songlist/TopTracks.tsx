import useSWR from 'swr'

import fetcher from '@/libs/sing/fetcher'
import { TopTracks } from 'taufikcrisnawan'
import Track from '@/components/songlist/Tracks'

export default function Tracks() {
  const { data } = useSWR<TopTracks>('/api/top-tracks', fetcher)

  if (!data) {
    return null
  }

  return (
    <>
      {data.tracks.map((track, index) => (
        <Track ranking={index + 1} key={track.songUrl} {...track} />
      ))}
      <br></br>
    </>
  )
}
