/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
// {title:'',author:'', link: ''}

module.exports = {
  /* Your site config here */
  siteMetadata: {
    email: "ralaez.89@gmail.com",
    readingList: [
      {
        title: "Siddartha",
        author: "Herman Hesse",
        link:
          "https://www.amazon.com/Siddhartha/dp/B000FMQQB0/ref=sr_1_3?crid=2ARET5CQIKV1E&keywords=siddartha+hesse+herman&qid=1559489326&s=books&sprefix=siddartha%2Cstripbooks%2C347&sr=1-3",
      },
      {
        title: "The Great Cosmic Mother",
        author: "Monica Sjoo & Barbara Mor",
        link: "",
      },
      {
        title: "The Destruction of The Black Civilizations",
        author: "Chancellor Williams",
        link: "",
      },
      { title: "Why We Lose", author: "Jake Patton Beason", link: "" },
      { title: "The Best of Simple", author: "Langston Hughes", link: "" },
      {
        title: "Black Robes and White Justice",
        author: "Bruce Wright",
        link: "",
      },
      { title: "The Four Agreement", author: "Don Miguel Ruiz", link: "" },
      { title: "Wild at Heart", author: "John Eldredge", link: "" },
      { title: "Love Is Never Enough", author: "Aaron Beck", link: "" },
      { title: "The Five Love Languages", author: "Gary Chapman", link: "" },
      { title: "The Prophet", author: "Kahlil Gibran", link: "" },
      { title: "The Mastery of Love", author: "Don Miguel Ruiz", link: "" },

      {
        title: "All About Love",
        author: "Bell Hooks",
        link: "",
      },
      {
        title: "Isis Papers",
        author: "Dr. Francis Cress Welsing",
        link: "",
      },
      {
        title: "The Mis-Education of the Negro",
        author: "Carter G. Woodson",
        link: "",
      },
    ],
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/img`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-material-ui`,
  ],
}
