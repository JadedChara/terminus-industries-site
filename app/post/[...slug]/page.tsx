//'use client'

//import { useParams } from 'next/navigation'
import RootLayout from "@/app/layout"
 
export default function Post({ params }: { params: { slug: string } }) {
  //const params = useParams;
  return( 
    <RootLayout>
      <div>
        <script src="https://cdn.jsdelivr.net/gh/ncase/nutshell/nutshell.js" async></script>
        <script>Nutshell.setOptions(&#123;startOnLoad: true, lang: &#39;en&#39;, dontEmbedHeadings:false&#125;)</script>
        <h2>Post: {params.slug}</h2>
        <p>This is a rough test of the system. <a href="#More">:More...</a></p>
        <h2>:x More</h2>
        <p>Your input slug for this url was &quot;{params.slug}&quot;</p>
      </div>
    </RootLayout>
  )
}
