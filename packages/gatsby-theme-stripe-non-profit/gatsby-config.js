module.exports = {
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-theme-stripe-plan-base`,
    `gatsby-plugin-theme-ui`,
    {
      resolve: 'gatsby-theme-stripe-base',
      options: {
        stripePublicKey: process.env.STRIPE_API_PUBLIC,
      },
    },
  ],
}
