import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";


export default class MyDocument extends Document {

    render() {
        return (
            <Html lang="en-ZA">
                <Head>
                    <link rel="icon" href="/favicon.ico" />
                    <meta name="robots" content="max-image-preview:large" />
                    <meta name="robots" content="all" />
                    <meta name="theme-color" content="#fff" />
                    <meta charSet="UTF-8" />
                    <link href="/vectors/xeSubLogo.svg" rel="shortcut icon" type="image/vnd.microsoft.icon" />
                    <meta name="author" content="Xolani Bukhosini" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }


}
