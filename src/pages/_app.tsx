import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/layout/SiteLayout'

export default function MyApp({ Component, pageProps }: AppProps) {
  // Use the layout defined at the page level, if available
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
