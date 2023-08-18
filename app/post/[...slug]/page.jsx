import { useRouter } from 'next/router'
 
export default function Page() {
  const router = useRouter()
  var options ={startOnLoad: true, lang: 'en', dontEmbedHeadings:false}
  return( 
    <html>
      <head>
        <title>Terminus Industries | Post: {router.query.slug}</title>
        <script src="https://cdn.jsdelivr.net/gh/ncase/nutshell/nutshell.js"></script>
        <script>Nutshell.setOptions({options})</script>
      </head>
      <body>
        <h2>Post: {router.query.slug}</h2>
        <p>This is a rough test of the system. <a href="#More">:More...</a></p>
        <h2>:x More</h2>
        <p>Your input slug for this url was "{router.query.slug}"</p>
      </body>
      
    </html>
  )
}