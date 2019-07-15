import React from "react"
import styled from "styled-components"
import ReviewCard from "./ReviewsContaienr/ReviewCard"

const ReviewsContainer = () => {
  return (
    <StyledSection>
      <h1>Reviews</h1>
      <StyledReviewList>
        <ReviewCard
          author="Paul C. Dozier"
          title="Author, Motivational Speaker"
          review={`"A call to honesty in a relationship. Being honest from the
            beginning and having realistic expectations of each other, while
            acknowledging the importance of sacrificial/love with each other’s
            strengths and weaknesses. Love it."`}
        />
      </StyledReviewList>
    </StyledSection>
  )
}

export default ReviewsContainer

const StyledSection = styled.section`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  padding: 15px;
`
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

const StyledReviewList = styled.div`
  display: flex;
  justify-content: space-between;
`
