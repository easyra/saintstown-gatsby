import React from "react"
import Helmet from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"
import imgsrc from "../img/author.jpg"

const SEO = () => {
  const title = "Randall Courtland Davis | A Peace of Me"
  const description =
    "Randall Courtland Davis is a writer/actor in the LA area. Randall Courtland Davis's newest book is A Peace of Me. You can buy the book A Peace of Me by Randall Courtland Davis from this site. If the work by Randall Courtland Davis is interesting you, make sure to come back to RandallCDavis.com for updates."
  const url = "https://RandallCDavis.com/"
  const image = imgsrc
  return (
    <Helmet>
      {/* General tags */}
      <title>{title}</title>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
        integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
        crossorigin="anonymous"
      ></link>
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      <link rel="canonical" href={url} />

      {/* OpenGraph tags */}
      <meta property="og:url" content={url} />
      {/* {isBlogPost ? <meta property="og:type" content="article" /> : null} */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      {/* <meta property="fb:app_id" content={seo.social.fbAppID} /> */}

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      {/* <meta name="twitter:creator" content={seo.social.twitter} /> */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}

export default SEO
