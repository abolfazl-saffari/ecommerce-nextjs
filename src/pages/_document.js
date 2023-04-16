import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>فروشگاه مصالح ساختمانی</title>
        <link
          href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
      <body className="font-vazir rtl">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
