import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";


export default class MyDocument extends Document {

    render() {
        return (
            <Html lang="en-ZA">
                <Head>
                    <link rel="icon" href="/favicon.ico" />
                    <meta name="robots" content="max-image-preview:large" />
                    <meta name="theme-color" content="#ffffff" />
                    <meta charSet="UTF-8" />
                    <link href="/vectors/xeSubLogo.svg" rel="shortcut icon" type="image/vnd.microsoft.icon" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }


}
