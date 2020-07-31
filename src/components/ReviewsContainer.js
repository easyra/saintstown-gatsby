import React from "react"
import styled from "styled-components"
import ReviewCard from "./ReviewsContaienr/ReviewCard"
import StyledSection from "./@shared/StyledSection"

const ReviewsContainer = () => {
  return (
    <StyledSection style={{ width: "80%" }}>
      <h1>Book Reviews</h1>
      <StyledReviewList>
        <ReviewCard
          author="Paul C. Dozier"
          title="Author, Motivational Speaker"
          review={``}
        >
          <p>
            "A call to honesty in a relationship. Being honest from the
            beginning and having realistic expectations of each other, while
            acknowledging the importance of sacrificial/love with each other’s
            strengths and weaknesses. Love it."
          </p>
        </ReviewCard>
        <ReviewCard author="HOLLY TERRY" title="INTERIOR DESIGNER" review={``}>
          <p>
            "Awesome read.  It will be a great book for those mature enough to
            lay aside their ego’s and understand the true desires of a woman and
            the words of a man that wants to give them to her. Randall’s words
            are sincere, authentic, no ulterior motive and he is not gay? (men
            will not believe that a straight man would write a book talking
            about giving a woman monogamy and LOVE."
          </p>
        </ReviewCard>
      </StyledReviewList>
    </StyledSection>
  )
}

export default ReviewsContainer

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
  flex-wrap: wrap;
`
