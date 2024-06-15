'use client'

import { useRouter } from 'next/router'

export function Ads() {
  const router = useRouter()

  return (
    <div className='bg-accent/85 fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full'>
      <div className='relative p-5 w-full max-w-2xl max-h-full'>
        <div className='p-2 bg-foreground dark:bg-background bg-theme-50 dark:bg-theme-900 rounded-lg border shadow-sm w-full'>
          <div className='px-6 py-4'>
            <h4 className='text-3xl font-semibold leading-none tracking-tight text-primary-foreground text-theme-700 dark:text-theme-200 '>
              Adblock Detected
            </h4>
          </div>

          <div className='px-6'>
            <p className='text-lg text-balance text-primary-foreground text-theme-700 dark:text-theme-200'>
              It appears that you are using an ad-blocking extension in your browser. Our website relies on ad revenue
              to provide free content to our visitors. Please consider supporting us by disabling your ad blocker.
            </p>
          </div>

          <button
            className='inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 p-6 text-primary-foreground bg-theme-200 dark:bg-theme-700 text-theme-700 dark:text-theme-200 m-4'
            onClick={() => router.reload()}
          >
            Refresh Page
          </button>
        </div>
      </div>
    </div>
  )
}
