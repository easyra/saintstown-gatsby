import React from "react"
import styled from "styled-components"
import ExcerptText from "./ExcerptContainer/ExcerptText"

const ExcerptContainer = () => {
  return (
    <StyledSection>
      <StyledTitleWrapper>
        <h1>Dear Future Wife</h1>
        <h2>Seeking HER</h2>
        <h2>January 2016</h2>
      </StyledTitleWrapper>

      <ExcerptText />
    </StyledSection>
  )
}

export default ExcerptContainer

const StyledSection = styled.section`
  padding: 15px;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
`

const StyledTitleWrapper = styled.div`
  text-align: center;
`
