import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

const AuthorPicture = () => {
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
    <StyledImgWrapper>
      <img src={data.allFile.edges[0].node.publicURL} />
    </StyledImgWrapper>
  )
}

export default AuthorPicture

const StyledImgWrapper = styled.div`
  max-width: 400px;
  width: 100%;
  /* max-height: 480px; */
  border-radius: 4px;

  overflow: hidden;
  img {
    width: 100%;
  }
`
