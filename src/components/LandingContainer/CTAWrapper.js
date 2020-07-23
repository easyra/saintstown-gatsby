import React from "react"
import styled from "styled-components"

import CTA from "./CTA"
import AuthorPicture from "./AuthorPicture"
import PaintPicture from "./PaintPicture"
const CTAWrapper = () => {
  return (
    <StyledSection>
      <CTA />
      <PaintPicture />
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
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
