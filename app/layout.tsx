//import './globals.css'
import type { Metadata } from 'next'
import Head from 'next/head'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Terminus Industries',
  description: 'Under Construction',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" background-color="white">
      <Head>
        <title>Terminus Industries | Post</title>
        <script src="https://cdn.jsdelivr.net/gh/ncase/nutshell/nutshell.js" async></script>
        <script>Nutshell.setOptions(&#123;startOnLoad: true, lang: &#39;en&#39;, dontEmbedHeadings:false&#125;)</script>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
