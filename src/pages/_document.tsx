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
          <link rel='preload' href='/fonts/inter-var-latin.woff2' as='font' type='font/woff2' crossOrigin='true' />
          <link rel='apple-touch-icon' sizes='180x180' href='/icon-192.png' />
          <link rel='shortcut icon' href='/favicon.svg' type='svg/x-icon' />
          <link rel='icon' href='/favicon.svg' type='svg/x-icon' />
          <link rel='manifest' href='/manifest.json' />
          {process.env.NODE_ENV === 'production' && (
            <Script
              async
              defer
              strategy='afterInteractive'
              data-do-not-track='true'
              // please change to your data website id
              data-website-id='ed4514ff-0629-43ad-bff0-5bba16e9f785'
              // change to your hosted umami app
              src='https://umami.taufikcrisnawan.dev/umami.js'
            />
          )}
          {process.env.NODE_ENV === 'production' && (
            <Script
              async
              // please change to u data
              src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9254295768355301"
              crossOrigin="anonymous"
            />
          )}
          {process.env.NODE_ENV === 'production' && (
            <Script id="toogle-tag" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NKFXT3K');`}}></Script>
          )}
        </Head>
        <body>
          <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NKFXT3K" height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
