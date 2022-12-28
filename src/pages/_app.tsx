import { Header } from '@/components/UI/common/Header'

import { SkipToContent } from '@/UI/buttons'

import { twclsx } from '@/libs'
import variants, { withExit } from '@/libs/animation/variants'

import { useTheme } from '@/hooks'
import '@/styles/globals.css'

import { AnimatePresence, LazyMotion, domAnimation, m } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import React from 'react';
import Script from 'next/script';
// import 'prism-themes/themes/prism-night-owl.css'
// import 'prism-themes/themes/prism-a11y-dark.css'
import 'prism-themes/themes/prism-dracula.css'
import { Toaster } from 'react-hot-toast'
import 'react-image-lightbox/style.css'
import colors from 'tailwindcss/colors'

const v: Variants = withExit(variants)

const onExitComplete = () => window.scrollTo(0, 0)

const App = ({ Component, pageProps, router }: AppProps) => {
  const { theme, mounted, systemTheme } = useTheme()

  return (
    <ThemeProvider attribute='class' storageKey='theme' enableSystem>
      <SkipToContent />
      <LazyMotion features={domAnimation}>
        <Header />
        <Script
          async
        // Please change your google tag manager
          src="https://www.googletagmanager.com/gtag/js?id=G-JS5DBWC0GB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-JS5DBWC0GB');
        `}
        </Script>
        <AnimatePresence initial={false} onExitComplete={onExitComplete} exitBeforeEnter>
          <m.div
            id='skip-content'
            key={router.route.concat(router.pathname)}
            variants={v}
            initial='hidden'
            animate='visible'
            exit='exit'
            className={twclsx(router.pathname === '/resume' && 'max-w-3xl w-11/12 mx-auto')}
          >
            <Component {...pageProps} />
          </m.div>
        </AnimatePresence>
      </LazyMotion>

      {mounted && (
        <Toaster
          toastOptions={{
            className: twclsx('rounded-md'),
            style: {
              zIndex: 4,
              backgroundColor:
                theme === 'dark' || (theme === 'system' && systemTheme === 'dark') ? colors.zinc[800] : colors.white,
              color:
                theme === 'dark' || (theme === 'system' && systemTheme === 'dark') ? colors.white : colors.zinc[900]
            }
          }}
        />
      )}
    </ThemeProvider>
  )
}

export default App
