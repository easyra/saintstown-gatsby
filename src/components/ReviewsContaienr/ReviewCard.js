import React from "react"
import styled from "styled-components"

const ReviewCard = ({ author, title, review }) => {
  return (
    <StyledReviewCard>
      <h2>{author}</h2>
      <h4>{title}</h4>
      <p>{review}</p>
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
`
