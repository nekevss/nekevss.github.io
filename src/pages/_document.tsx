import { Html, Head, Main, NextScript } from 'next/document'
import { siteURL } from '@/lib/rss'

export default function Document() {
  return (
    <Html lang="en-us">
      <Head>
        <link rel="shortcut icon" href='/images/favicon.ico' />
        <link rel="alternate" type="rss+xml" title="Blog" href={`${siteURL}/rss/feed.xml`} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
