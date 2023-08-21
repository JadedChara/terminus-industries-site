'use client'

import useEffect from 'react';
import useState from 'react';

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

export default function Post({ params }: { params: { slug: string } }) {
  const [loaded, setLoaded] = useState(false);
  useEffect(()=>{
    const nutScript = document.createElement('script');
    nutScript.src = "//cdn.jsdelivr.net/gh/ncase/nutshell/nutshell.min.js";
    nutScript.addEventListener('load',()=>setLoaded(true));

  },[])
  useEffect(()=>{
    if(!loaded){
      return;
    }
  },[loaded])
  return(
      <div>
        
        <h2>Post: {params.slug}</h2>
        <p>This is a rough test of the system. <a href="#More">:More...</a></p>
        <h2>:x More </h2>
        <p>Your input slug for this url was &quot;{params.slug}&quot;</p>
      </div>
  )
}
