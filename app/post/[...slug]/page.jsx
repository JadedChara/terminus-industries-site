export default function Page({ params }) {
  var pos = "srcScript";
  var options = {startOnLoad: true, lang: 'en', dontEmbedHeadings: false};
  return 
    <html>
      <head>
      <title>Terminus Industries</title>
        
        <script src="https://cdn.jsdelivr.net/gh/ncase/nutshell/nutshell.js" async id={pos}></script>
        <script>
            Nutshell.setOptions({options});
        </script>
      </head>
      <body>
        <h2 hidden="true"></h2>
        <p>This is a test deployment for dynamic pages. <a href="#FindOutMore">:Find out more...</a></p>
        <h2>:x Find Out More...</h2>
        <p>Your url slug parameter setting is as follows: {params.slug}</p>
      </body>
    </html>
}
