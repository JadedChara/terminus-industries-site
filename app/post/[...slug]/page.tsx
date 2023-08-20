//'use client'

import Script from "next/script"

export default function Post({ params }: { params: { slug: string } }) {
  //const params = useParams;
  return(
      <div>
        <Script id="initNutshell">{`Nutshell.setOptions({startOnLoad: true, lang: "en", dontEmbedHeadings:false})`}</Script>
        <h2>Post: {params.slug}</h2>
        <p>This is a rough test of the system. <a href="#More">:More...</a></p>
        <h2>:x More </h2>
        <p>Your input slug for this url was &quot;{params.slug}&quot;</p>
      </div>
  )
}
