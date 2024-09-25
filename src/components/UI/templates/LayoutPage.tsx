import { CustomSeo, CustomSeoProps } from '@/components/CustomSeo'

import { Footer } from '@/UI/common'

import { AdblockDetector } from 'adblock-detector'
import { Ads } from '@/components/UI/common/Ads'
import { useEffect, useState } from 'react'

import { twclsx } from '@/libs/twclsx'

type TProps = {
  className?: string
  children: React.ReactNode
  seo: CustomSeoProps
}

export type LayoutPageProps = TProps

export const LayoutPage = ({ children, className, ...props }: TProps) => {
  const [adblock, setAdblock] = useState(false)

  useEffect(() => {
    const detector = new AdblockDetector()
    const adblockDetected = detector.detect()
    if (adblockDetected) {
      setAdblock(true)
    }
  }, [])

  return (
    <>
      <CustomSeo {...props.seo} />
      {adblock ? <Ads /> : ''}

      <main className={twclsx('layout', className)}>{children}</main>
      <Footer />
    </>
  )
}
