import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head >
        <link rel='shortcut icon' href='/favicon.ico' />
        <script async defer src={process.env.NEXT_APP_LUCKY_ORANGE}></script>
      </Head>
      <body>
        <Main />
        <NextScript />
        <div id="modal-root"></div>
      </body>
    </Html>
  )
}
