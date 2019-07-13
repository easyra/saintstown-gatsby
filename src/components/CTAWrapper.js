import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import CTA from "./CTA"
const CTAWrapper = () => {
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
  return (
    <StyledSection>
      <CTA />
      <StyledImgWrapper>
        <img src={data.allFile.edges[0].node.publicURL} />
      </StyledImgWrapper>
    </StyledSection>
  )
}

export default CTAWrapper

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

const StyledImgWrapper = styled.div`
  max-width: 400px;
  width: 100%;
  /* max-height: 480px; */

  overflow: hidden;
  img {
    width: 100%;
  }
`
