import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import CTA from "./CTA"
import AutherNoteText from "./AuthorNoteText"
import AuthorNoteText from "./AuthorNoteText"
import CTAWrapper from "./CTAWrapper"
import AuthorNote from "./AuthorNote"
import QuotesContainer from "./QuotesContainer"

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

const StyledSection = styled.section`
  max-width: 1000px;
  width: 100%;
  padding: 15px;
  margin: 15px auto;
  display: flex;
  justify-content: space-between;
  p {
    width: 100%;
    max-width: 450px;
  }
  @media screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
