import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

const DedicationContainer = () => {
  const data = useStaticQuery(graphql`
    query {
      __typename
      allFile(filter: { name: { eq: "family" } }) {
        edges {
          node {
            publicURL
          }
        }
      }
    }
  `)
  return (
    <StyledImgWrapper>
      <img src={data.allFile.edges[0].node.publicURL} />
      <h4>In Dedication</h4>
      <p>
        To my Dear Future Wife, my legacy and tribe. I love you all madly. Thank
        you
      </p>
    </StyledImgWrapper>
  )
}

export default DedicationContainer

const StyledImgWrapper = styled.div`
  max-width: 400px;
  width: 100%;
  /* max-height: 480px; */

  overflow: hidden;
  img {
    width: 100%;
  }
  h4 {
    text-align: center;
    font-style: italic;
    margin-bottom: 0;
  }
  p {
    font-style: italic;
  }
`
