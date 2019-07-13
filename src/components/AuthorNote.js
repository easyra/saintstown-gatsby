import React from "react"
import AuthorNoteText from "./AuthorNoteText"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import DedicationContainer from "./DedicationContainer"

const AuthorNote = () => {
  return (
    <StyledSection>
      <AuthorNoteText />
      <DedicationContainer />
    </StyledSection>
  )
}

export default AuthorNote

const StyledSection = styled.section`
  max-width: 1000px;
  width: 100%;
  padding: 15px;
  margin: 15px auto;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
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
  h4 {
    text-align: center;
    font-style: italic;
    margin-bottom: 0;
  }
  p {
    font-style: italic;
  }
`
