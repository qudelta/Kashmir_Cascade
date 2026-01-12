import { Helmet } from 'react-helmet-async';

const SEO = ({
    title,
    description,
    canonical,
    ogImage = "/logo-black.png",
    ogType = "website",
    schemaData = null
}) => {
    const siteName = "Kashmir Cascade";
    const fullTitle = title ? `${title} | ${siteName}` : siteName;
    const siteUrl = "https://kashmircascade.com";
    const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={fullCanonical} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={`${siteUrl}${ogImage}`} />
            <meta property="og:url" content={fullCanonical} />
            <meta property="og:site_name" content={siteName} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />

            {/* Structured Data */}
            {schemaData && (
                Array.isArray(schemaData) ? (
                    schemaData.map((schema, index) => (
                        <script key={index} type="application/ld+json">
                            {JSON.stringify(schema)}
                        </script>
                    ))
                ) : (
                    <script type="application/ld+json">
                        {JSON.stringify(schemaData)}
                    </script>
                )
            )}
        </Helmet>
    );
};

export default SEO;
