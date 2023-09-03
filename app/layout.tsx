
import type { Metadata } from 'next'
import Head from 'next/head'
import dynamic from 'next/dynamic'
//import Script from 'next/script'
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
  const DynamicSrc = dynamic(()=> import("./components/Dynscript"),{
    ssr:false
  })
  return (
    <html lang="en">
      <Head>
        <title>Terminus Industries | Post</title>
        <DynamicSrc/>
        <h2>Post: {params.slug}</h2>
      </Head>
        
      <body className={inter.className}>{children}</body>
    </html>
  )
}
