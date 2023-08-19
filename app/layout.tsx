//import './globals.css'
import type { Metadata } from 'next'
import Head from 'next/head'
import Script from 'next/script'
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
    <html>
      <Head>
        <title>Terminus Industries | Post</title>
        </Head>
        <Script src="https://cdn.jsdelivr.net/gh/ncase/nutshell/nutshell.js" async></Script>
        <Script>{Nutshell.setOptions({startOnLoad: true, lang: "en", dontEmbedHeadings:false})}</Script>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
