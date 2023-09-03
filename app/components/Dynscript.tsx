import Script from 'next/script'
 
export default function Dynscript() {
  return (
    <>
      <Script src="https://cdn.jsdelivr.net/gh/ncase/nutshell/nutshell.min.js" />
      <Script>
        Nutshell.setOptions({
            startOnLoad: false,
            lang: 'en', 
            dontEmbedHeadings: false,
        })</Script>
    </>
  )
}