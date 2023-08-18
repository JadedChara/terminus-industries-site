'use client'

import { useRouter } from 'next/navigation'
 
export default function Page(params) {
  const router = useRouter()
  const slug = params;
  return( 
    <html>
      <head>
        <title>Terminus Industries | Post: {slug}</title>
        <script src="https://cdn.jsdelivr.net/gh/ncase/nutshell/nutshell.js" async></script>
        <script>Nutshell.setOptions(&#123;startOnLoad: true, lang: 'en', dontEmbedHeadings:false&#125;)</script>
      </head>
      <body>
        <h2>Post: {slug}</h2>
        <p>This is a rough test of the system. <a href="#More">:More...</a></p>
        <h2>:x More</h2>
        <p>Your input slug for this url was &quot;{slug}&quot;</p>
      </body>
      
    </html>
  )
}