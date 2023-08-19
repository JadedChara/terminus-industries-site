//'use client'

//import { useParams } from 'next/navigation'
import RootLayout from "@/app/layout"
 
export default function Page({params}) {
  //const params = useParams;
  return( 
    <RootLayout>
      <div>
        <h2>Post: {params.id}</h2>
        <p>This is a rough test of the system. <a href="#More">:More...</a></p>
        <h2>:x More</h2>
        <p>Your input slug for this url was &quot;{params.id}&quot;</p>
      </div>
    </RootLayout>
  )
}
