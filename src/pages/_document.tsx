import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    return await Document.getInitialProps(ctx)
  }

  render() {
    return (
      <Html lang='en-US'>
        <Head>
          <meta name='theme-color' content='#18181b' />
          <meta name='msapplication-TileColor' content='#da532c' />
          <link
            rel='preload'
            href='/fonts/inter-var-latin.woff2'
            as='font'
            type='font/woff2'
            crossOrigin='use-credentials'
          />
          <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
          <link rel='shortcut icon' href='/favicon.svg' type='svg/x-icon' />
          <link rel='icon' href='/favicon.svg' />
          <link rel='mask-icon' href='/favicon.svg' color='#000000' />
          <link rel='manifest' href='/manifest.json' />
          <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#969696' />
          {process.env.NODE_ENV === 'production' && (
            <Script
              async
              defer
              strategy='afterInteractive'
              data-do-not-track='true'
              // please change to your data website id
              data-website-id='b31d4821-5128-4314-aafc-2d2d39d2c193'
              // change to your hosted umami app
              src='https://umami.taufikcrisnawan.dev/script.js'
            />
          )}
          {process.env.NODE_ENV === 'production' && (
            <script
              async
              // please change to u data
              src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
            ></script>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
