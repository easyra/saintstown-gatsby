import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import CTAWrapper from "./LandingContainer/CTAWrapper"
import AuthorNote from "./LandingContainer/AuthorNote"
import QuotesContainer from "./LandingContainer/QuotesContainer"

const LandingContainer = () => {
  const data = useStaticQuery(graphql`
    query {
      __typename
      allFile(filter: { name: { eq: "author" } }) {
        edges {
          node {
            publicURL
          }
        }
      }
    }
  `)
  console.log(data.allFile.edges[0].node.publicURL)

  return (
    <>
      <CTAWrapper />
      <AuthorNote />
      <QuotesContainer />
    </>
  )
}

export default LandingContainer
