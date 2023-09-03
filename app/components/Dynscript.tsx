import Script from 'next/script'
 
export default function Dynscript() {
  return (
    <div>
      <Script src="https://cdn.jsdelivr.net/gh/ncase/nutshell/nutshell.min.js" onLoad={()=>{
        Nutshell.setOptions({
            startOnLoad: true,
            lang: 'en', 
            dontEmbedHeadings: false,
        })}}/>
    </div>
  )
}