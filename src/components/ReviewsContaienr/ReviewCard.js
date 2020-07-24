import React from "react"
import styled from "styled-components"

const ReviewCard = ({ author, title, children }) => {
  return (
    <StyledReviewCard>
      <h3>{author}</h3>
      <h5>{title}</h5>
      {children}
    </StyledReviewCard>
  )
}

export default ReviewCard

const StyledReviewCard = styled.div`
  max-width: 450px;
  width: 100%;
  h3,
  h5 {
    margin: 0px 0px 5px;
  }
  p {
    line-height: 2;
    font-size: 0.9rem;
  }
  h3,
  h5 {
    text-transform: uppercase;
  }
`
