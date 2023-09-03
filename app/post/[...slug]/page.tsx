//'use client'

//import useEffect from 'react';
//import useState from 'react';
function Hyde({
  children,
}: {
  children: React.ReactNode
}){
  
  return (
    <div suppressHydrationWarning>
      {typeof window === 'undefined' ? null : children}
    </div>
  )
}

export default function Page({ params }: { params: { slug: string } }) {
  
  return(
      <div>
        <p>This is a rough test of the system. <a href="#More">:More...</a></p>
        <h2>:x More </h2>
        <p>Your input slug for this url was &quot;{params.slug}&quot;</p>
      </div>
  )
}
