import React from "react"
import styled from "styled-components"

const Quote = ({ quote, author }) => {
  return (
    <StyledQuote>
      {quote}
      <h4>{author}</h4>
    </StyledQuote>
  )
}

export default Quote

const StyledQuote = styled.p`
  width: 100%;
  max-width: 450px;
  font-style: italic;
`
