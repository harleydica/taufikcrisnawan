/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

export const config = {
  runtime: 'edge'
}

export default async function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)

    const hasTitle = searchParams.has('title')
    const title = hasTitle ? searchParams.get('title')?.slice(0) : 'Edge OG with dynamic title'

    return new ImageResponse(
      (
        <div
          tw='flex items-center h-[600px] w-full py-3 px-5 text-zinc-100'
          style={{
            opacity: 1,
            backgroundSize: 'cover',
            backgroundImage: "url('https://ik.imagekit.io/taufik/profile/cover-og')"
          }}
        >
          <div tw='flex flex-col h-full w-1/2 justify-between'>
            <p tw='font-bold text-3xl text-blue-500'>https://taufikcrisnawan.dev/blog</p>
            <p tw='font-extrabold text-6xl'>{title}</p>
            <div tw='flex items-center'>
              <img
                width='44'
                height='44'
                tw='rounded-full'
                style={{
                  objectFit: 'cover'
                }}
                src='https://ik.imagekit.io/taufik/profile/IMG-20220928.webp'
                alt='Taufik Crisnawan Santoso'
              />
              <p tw='ml-2.5 font-bold text-4xl'>Taufik Crisnawan Santoso</p>
            </div>
          </div>

          <div tw='flex items-center justify-center w-1/2 h-full'>
            <img src='https://ik.imagekit.io/taufik/profile/icon-192x192.webp' alt='logo' width={192} height={192} />
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 600
      }
    )
  } catch (err) {
    return new Response('Failed to generate the og image', {
      status: 500,
      statusText: 'failed to generate the og image'
    })
  }
}
