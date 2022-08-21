import React from "react";
import Document, { Head, Main, NextScript ,Html } from "next/document";

import Script from "next/script";
class MyDocument extends Document {
  render() {
    return (
        <Html >
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#000000" />
          {/* Fonts and icons */}
        </Head>
        <body>
          <div id="page-transition"></div>
          <Main />
          <NextScript />

   </body>
     </Html>
    );
  }
}

export default MyDocument;
