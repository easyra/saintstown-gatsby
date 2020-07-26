import React from "react"
import styled from "styled-components"
import StyledPaper from "../@shared/StyledPaper"

const ReviewCard = ({ author, title, children }) => {
  return (
    <StyledReviewCard>
      <StyledPaper>
        <h4>{author}</h4>
        <h5>{title}</h5>
        {children}
      </StyledPaper>
    </StyledReviewCard>
  )
}

export default ReviewCard

const StyledReviewCard = styled.div`
  max-width: 450px;
  width: 100%;
  h5,
  h4 {
    margin: 0px 0px 5px;
    line-height: 1.25;
  }
  p {
    line-height: 2;
    font-size: 0.9rem;
  }
  h5,
  h4 {
    text-transform: uppercase;
  }
`
