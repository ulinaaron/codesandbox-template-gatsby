const path = require('path');

module.exports = {
    siteMetadata: {
      title: `Gatsby Project`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        {
            resolve: '@builder.io/gatsby',
            options: {
                // Replace with your Public API Key
                publicAPIKey: '96847896b53e4e1d892828c9308cda83',
                templates: {
                // Render every `page` model as a new page using the
                // src/templates/page.jsx template based on the URL provided in Builder.io
                page: path.resolve('src/templates/page.jsx'),
                },
            },
        },
    ]
}