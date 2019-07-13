import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const CTA = () => {
  return (
    <StyledCTA>
      <BookTitle>Dear Future Wife</BookTitle>
      <p>- inspired by a Facebook Post</p>
      <StyledButton>Buy Book</StyledButton>
    </StyledCTA>
  )
}

const StyledCTA = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 15px 0;
  p {
    text-align: center;
    font-style: italic;
  }
  a {
    padding: 8px;
    background: red;
    text-align: center;
  }
`
const StyledButton = styled.button`
  padding: 8px;
  text-align: center;
  margin: 0 auto;
  /* width: 100%; */
`

const BookTitle = styled.h1`
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 0;
  font-size: 72px;
`

export default CTA
