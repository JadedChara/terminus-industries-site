//import './globals.css'
import type { Metadata } from 'next'
import Head from 'next/head'
import Script from 'next/script'
import { Inter } from 'next/font/google'
import useSWR from 'swr'

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
  const {data, error, isLoading} = useSWR(
    'https://cdn.jsdelivr.net/gh/ncase/nutshell/nutshell.min.js',fetcher
  )
  if (error) return <p>Failed to load.</p>
  if (isLoading) return <p>Loading...</p>
  return (
    <html lang="en">
      <Head>
        <title>Terminus Industries | Post</title>
        <script src="https://cdn.jsdelivr.net/gh/ncase/nutshell/nutshell.min.js"></script>
        <h2>Post: {params.slug}</h2>
      </Head>
        
      <body className={inter.className}>{children}</body>
    </html>
  )
}
