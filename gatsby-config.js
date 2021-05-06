module.exports = {
    siteMetadata: {
        title: "Fernando Duarte",
        description: "Personal website of Fernando Duarte, economist at the NY Federal Reserve Bank."
    },
    plugins: [
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: "UA-170158539-1",
                head: true
            }
        }
    ]
}