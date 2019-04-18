import Document, { Head, Main } from 'next/document'

const inlineStyles = `
    a {
        text-decoration: none;
        color: black;
        font-family: "Georgia";
    }

    a:hover {
        text-decoration: red underline overline wavy;
    }

`

export default class MyDocument extends Document {

  render () {
      return (
        <html amp="" lang="en">
          <title>Good Boys</title>
            <meta name='description' content="They're good dogs." />
            <meta charSet="utf-8" />
            <link rel="manifest" href="/manifest.json"/>
            <meta name="theme-color" content="#3367D6" />
          <meta
            name="viewport"
            content="width=device-width,minimum-scale=1,initial-scale=1"
          />
            <script async src="https://cdn.ampproject.org/v0.js" />
            <link rel="canonical" href="/" />
            <link rel="icon" href="favicon.ico" type="image/x-icon" />
            <style amp-boilerplate="">
              {
                "body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}"
              }
            </style>
            <style amp-custom="amp-custom" dangerouslySetInnerHTML={{ __html: inlineStyles }} />
            <noscript>
              <style amp-boilerplate="">
                {
                  "body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}"
                }
              </style>
            </noscript>
            <script async custom-element="amp-fx-flying-carpet" src="https://cdn.ampproject.org/v0/amp-fx-flying-carpet-0.1.js"></script>

            <script async custom-element="amp-carousel" src="https://cdn.ampproject.org/v0/amp-carousel-0.1.js"></script>
            <script async custom-element="amp-fx-collection" src="https://cdn.ampproject.org/v0/amp-fx-collection-0.1.js"></script>
            <script async custom-element="amp-install-serviceworker" src="https://cdn.ampproject.org/v0/amp-install-serviceworker-0.1.js"></script>
            {/* add additional head elements here. This is where you would include amp component required scripts. */}
            
          <body>
            <amp-install-serviceworker
              src="/sw.js"
              layout="nodisplay">
            </amp-install-serviceworker>
            <Main />
          </body>
        </html>
      )
  }
}
