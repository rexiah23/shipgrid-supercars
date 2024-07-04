// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
          
          {/* Default favicon */}
          <link rel="icon" href="/browser.png" />

          {/* Favicon for iPhone */}
          <link rel="apple-touch-icon" href="/iPhone.png" />

          {/* Favicon for Android */}
          <link rel="icon" type="image/png" href="/Android.png" />
          
          {/* Other tags like stylesheets etc. */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument;
