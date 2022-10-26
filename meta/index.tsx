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
            <link rel="canonical" href={`https://www.xolanibukhosini.co.za${path}`} />
            <meta name="description" content={subtitle} />

            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="article" />
            <meta property="og:site_name" content="xolanibukhosini" />
            <meta property="og:updated_time" content={date.toDateString().replaceAll(" ", "-")} />

            <meta property='og:title' content={title} />
            <meta property='og:description' content={subtitle} />
            <meta property="og:url" content={`https://www.xolanibukhosini.co.za${path}`} />

            <meta property='og:image' content={`https://www.xolanibukhosini.co.za${image}`} />
            <meta property="og:image:width" content="477" />
            <meta property="og:image:height" content="502" />


            {/* Twitter meta card  */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta property='twitter:title' content={title} />
            <meta property='twitter:description' content={subtitle} />
            <meta property='twitter:image' content={`https://www.xolanibukhosini.co.za${image}`} />
        </Head>
    )
}

export default MetaData;