import Helmet from 'react-helmet';
import React from 'react';

const Seo = ({ meta, image, title, description, pathSlug, keywords }) => {
    
    const metadata = meta || {};
    const metaTitle = title || 'myBlog'
    const metaDescription = description || 'technical Posts world wide'
    const url = pathSlug || ''
    const metaImage = image || null
    const metaKeywords = keywords || ["technical", "techskill"]

    return (
        <Helmet
            htmlAttributes={{ lang: 'en' }}
            title={metaTitle}
            meta={[
                {
                    name: 'title',
                    content: metaTitle,
                },
                {
                    name: 'description',
                    content: metaDescription,
                },
                {
                    name: 'keywords',
                    content: metaKeywords,
                },

            ]
                .concat(metadata)}
            link={[
                {
                    rel: 'canonical',
                    href: url,
                }

            ]}
        />
    );
};

export default Seo;