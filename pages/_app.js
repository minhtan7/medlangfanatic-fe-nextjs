import 'bootstrap/dist/css/bootstrap.min.css';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false


import '@/styles/globals.css'
import { SSRProvider } from 'react-bootstrap';
import Script from 'next/script';

export default function App({ Component, pageProps }) {
  return <SSRProvider>
    {/* google tag manager */}
    <Script id="google-tag-manager" strategy="afterInteractive">
      {`(function (w, d, s, l, i) {
                    w[l] = w[l] || []; w[l].push({
                        'gtm.start':
                            new Date().getTime(), event: 'gtm.js'
                    }); var f = d.getElementsByTagName(s)[0],
                        j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
                            'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
                })(window, document, 'script', 'dataLayer', 'GTM-T33M8GL')`}
    </Script>
    <Component {...pageProps} />
    <noscript
      dangerouslySetInnerHTML={{
        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T33M8GL" height="0" width="0" style="display: none; visibility: hidden;" />`,
      }}
    />
  </SSRProvider>
}
