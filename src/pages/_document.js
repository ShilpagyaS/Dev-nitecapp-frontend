import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head >
        <link rel="manifest" href="/manifest.json" />
        {process.env.NEXT_PUBLIC_APP_TYPE === "user" &&
          <>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                (function(h,o,t,j,a,r){
                  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                  h._hjSettings={hjid:3458092,hjsv:6};
                  a=o.getElementsByTagName('head')[0];
                  r=o.createElement('script');r.async=1;
                  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                  a.appendChild(r);
                 })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
              `,
              }}
            />
          </>
        }
        {process.env.NEXT_PUBLIC_APP_TYPE === "admin" &&
          <>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                (function(h,o,t,j,a,r){
                  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                  h._hjSettings={hjid:3458110,hjsv:6};
                  a=o.getElementsByTagName('head')[0];
                  r=o.createElement('script');r.async=1;
                  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                  a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
              `,
              }}
            />
          </>
        }
        <script src="//cdn.ckeditor.com/4.22.1/full/ckeditor.js"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
