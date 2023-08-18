'use client'

import { useParams } from 'next/navigation'
 
export default function Page() {
  //const router = useRouter()
  const params = useParams;
  //var slug = params;
  return( 
        <h2>{"Post: "}{params[0]}</h2>
        <p>{"This is a rough test of the system. "}<a href="#More">:More...</a></p>
        <h2>:x More</h2>
        <p>{"Your input slug for this url was &quot;"}{params[0]}{"&quot;"}</p>
  )
}
