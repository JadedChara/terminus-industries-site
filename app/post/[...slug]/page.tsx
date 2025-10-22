//'use client'

//import useEffect from 'react';
//import useState from 'react';
import Image from "next/image"
import { Suspense } from "react"
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
      <div  style={{paddingLeft: "5%", paddingRight:"5%", width:"90%", paddingTop: "0%"}}>
            <a href="https://terminus-industries.vercel.app">
                <Image alt="Terminus Industries" style={{alignContent: "center", maxInlineSize:"90%"}} src="./logofull.png"/>
            </a>
            <table style={{width: "100%"}}>
                <tr>
                    <th>
                        <div  className="menublock"><a href="./pages/projects.html">Projects</a>
                            <div className="menusub"><a href="./pages/tfprojects.html">Transformers</a></div>
                            <div className="menusub"><a href="./pages/codingprojects.html">Coding</a></div>
                            <div className="menusub"><a href="./pages/papercraftprojects.html">Papercraft</a></div>
                            <div className="menusub"><a href="./pages/miscprojects.html">Misc.</a></div>
                        </div>
                    </th>
                    <th>
                        <div className="menublock"><a href="./pages/about.html">About</a>
                            <div className="menusub">Who We Are</div>
                            <div className="menusub">Contact</div>
                        </div>
                    </th>
                    <th>
                        <div className="menublock"><a href="./pages/nook.html">Nightstrike&#39;s Nook</a>
                            <div className="menusub">
                                <div><a>Reviews</a></div>
                                <ul className="subsub">
                                    <li className="dropmenu"><a href="./logofull.png">Movies</a></li>
                                    <li className="dropmenu"><a>Shows</a></li>
                                    <li className="dropmenu"><a>Toys</a>
                                        <ul className="supersub">
                                            <li className="dropmenu"><a>Transformers</a></li>
                                            <li className="dropmenu"><a>Gundam</a></li>
                                            <li className="dropmenu"><a>Misc.</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropmenu"><a>Books</a></li>
                                    <li className="dropmenu"><a>Dining</a></li>
                                </ul>
                            </div>
                            <div className="menusub"><a>Announcements</a></div>
                            <div className="menusub"><a>Blog</a></div>
                        </div>
                    </th>
                    <th>
                        <div className="menublock">Products
                            <div className="menusub">Transformers - Anarchy</div>
                            <div className="menusub">Transformers - Micro Mayhem</div>
                            <div className="menusub">Transformers - Legacy: Rise</div>
                            <div className="menusub">Diaclone - Expansion</div>
                            <div className="menusub">Upgrades & Accessories</div>
                            <div className="menusub">Misc.</div>
                        </div>
                    </th>
                </tr>
            </table>
        </div>
      <Suspense fallback={
        <p>Loading post...</p>
      }>
        <h2>Post: {params.slug}</h2>
        <p>This is a rough test of the system. <a href="#More">:More...</a></p>
        <h2>:x More </h2>
        <p>Your input slug for this url was &quot;{params.slug}&quot;</p>
      </Suspense>
    </div>
  )
}
