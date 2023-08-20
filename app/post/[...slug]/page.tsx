//'use client'

function Hyde({children}){
  return (
    <div suppressHydrationWarning>
      {typeof window === 'undefined' ? null : children}
    </div>
  )
}

export default function Post({ params }: { params: { slug: string } }) {
  //const params = useParams;
  return(
      <div>
        <Hyde><script type="text/javascript" src="https://cdn.jsdelivr.net/gh/ncase/nutshell/nutshell.min.js" defer></script></Hyde>
        <h2>Post: {params.slug}</h2>
        <p>This is a rough test of the system. <a href="#More">:More...</a></p>
        <h2>:x More </h2>
        <p>Your input slug for this url was &quot;{params.slug}&quot;</p>
      </div>
  )
}
