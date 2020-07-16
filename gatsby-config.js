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
        }, 
        {
            resolve: `gatsby-plugin-prefetch-google-fonts`,
            options: {
                fonts: [
                    {
                        family: `Cormorant Garamond`,
                        variants: [`700`, `700i`]
                    }, {
                        family: `Lato`,
                        variants: [`300`, `400`, `400i`]
                    }, {
                        family: `Karma`,
                        variants: [`500`]
                    }
                ]
            }
        }
    ]
}