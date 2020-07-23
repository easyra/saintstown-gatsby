import React from "react"
import styled from "styled-components"

const ReviewCard = ({ author, title, children }) => {
  return (
    <StyledReviewCard>
      <h2>{author}</h2>
      <h4>{title}</h4>
      {children}
    </StyledReviewCard>
  )
}

export default ReviewCard

const StyledReviewCard = styled.div`
  max-width: 450px;
  width: 100%;
  h4 {
    margin: 5px 0;
  }
  p {
    line-height: 2;
  }
  h4,
  h2,
  p {
    text-transform: uppercase;
  }
`
