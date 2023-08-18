import { useRouter } from 'next/router'
import { Html, Head, Main, NextScript } from 'next/document'
class MyDoc extends Document {
  router = useRouter();
  pos = "srcScript";
  options = {startOnLoad: true, lang: 'en', dontEmbedHeadings: false};
  render(){
    return (
    <Html>
      <Head>
        <Main/>
        <NextScript/>
        <title>Terminus Industries | Post: {router.query.slug}</title>    
        <script src="https://cdn.jsdelivr.net/gh/ncase/nutshell/nutshell.js" async id={pos}></script>
        <script>
            Nutshell.setOptions({options});
        </script>
      </Head>
      <body>
        <h2 hidden="true"></h2>
        <p>This is a test deployment for dynamic pages. <a href="#FindOutMore">:Find out more...</a></p>
        <h2>:x Find Out More...</h2>
        <p>Your url slug parameter setting is as follows: {router.query.slug}</p>
      </body>
    </Html>
    )
  }
}
export default MyDoc