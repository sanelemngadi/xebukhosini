import Head from 'next/head';
import React, { FC } from 'react';

interface Props {
    title: string,
    subtitle: string,
    image: string,
    path?: string
}
const MetaData: FC<Props> = ({ title, subtitle, image, path }) => {

    const date = new Date();
    return (
        <Head>
            <title>{title}</title>
            <link rel="canonical" href={`https://xolanibukhosini.netlify.app${path}`} />
            <meta name="description" content={subtitle} />

            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="article" />
            <meta property='og:title' content={title} />
            <meta property='og:description' content={subtitle} />
            <meta property='og:image' content={"https://xolanibukhosini.netlify.app" + image} />
            <meta property="og:type" content="Social worker in private practice" />
            <meta property="og:url" content={`https://xolanibukhosini.netlify.app${path}`} />

            <meta property="og:site_name" content="xolanibukhosini" />
            <meta property="og:updated_time" content={date.toDateString().replaceAll(" ", "-")} />
            <meta property="og:image:width" content="300" />
            <meta property="og:image:height" content="225" />

            {/* Twitter meta card  */}
            <meta property='twitter:title' content={title} />
            <meta property='twitter:description' content={subtitle} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta property='twitter:image' content={"https://xolanibukhosini.netlify.app" + image} />
        </Head>
    )
}

export default MetaData;