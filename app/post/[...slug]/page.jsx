'use client'

import { useParams } from 'next/navigation'
 
export default function Page() {
  //const router = useRouter()
  const params = useParams;
  //const slug = params;
  return( 
    <html>
      <head>
        <title>Terminus Industries | Post: {params[0]}</title>
        <script src="https://cdn.jsdelivr.net/gh/ncase/nutshell/nutshell.js" async></script>
        <script>Nutshell.setOptions(&#123;startOnLoad: true, lang: &#39;en&#39;, dontEmbedHeadings:false&#125;)</script>
      </head>
      <body>
        <h2>Post: {params[0]}</h2>
        <p>This is a rough test of the system. <a href="#More">:More...</a></p>
        <h2>:x More</h2>
        <p>Your input slug for this url was &quot;{params[0]}&quot;</p>
      </body>
      
    </html>
  )
}