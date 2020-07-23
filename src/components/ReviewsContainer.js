import React from "react"
import styled from "styled-components"
import ReviewCard from "./ReviewsContaienr/ReviewCard"
import StyledSection from "./@shared/StyledSection"

const ReviewsContainer = () => {
  return (
    <StyledSection style={{ width: "80%" }}>
      <h1>Reviews</h1>
      <StyledReviewList>
        <ReviewCard
          author="Paul C. Dozier"
          title="Author, Motivational Speaker"
          review={``}
        >
          <p>
            A call to honesty in a relationship. Being honest from the beginning
            and having realistic expectations of each other, while acknowledging
            the importance of sacrificial/love with each other’s strengths and
            weaknesses. Love it.
          </p>
        </ReviewCard>
        <ReviewCard author="HOLLY TERRY" title="INTERIOR DESIGNER" review={``}>
          <p>Absolutely riveting! </p>
          <p>
            Awesome read.  It will be a great book for those mature enough to
            lay aside their ego’s and understand the true desires of a woman and
            the words of a man that wants to give them to her. Randall’s words
            are sincere, authentic, no ulterior motive and he is not gay? (men
            will not believe that a straight man would write a book talking
            about giving a woman monogamy and LOVE.
          </p>
          <p>
            Kind of scary, a lot of the things  I enjoy and desire, you speak so
            eloquently about: The therapeutic healing power of great music,
            yoga, meditation, Loving to kiss, cuddle, and more importantly a man
            that knows that know a woman want to be affirmed, protected and
            appreciated for all that she do to make her man feel special and
            create the place solace called home.
          </p>
          <p>
            Exhilarating and eye opening about what men deposit into the
            “receptacle” of a woman’s soul… WOW.
          </p>
          <p>
            As written, Randall knows, we as women have been hurt and have these
            walls of defense up out of fear of being hurt again, so while the
            words sound magical and sultry, they are just that…. “WORDS”.
          </p>
          <p>
            ACTIONS that validate and confirm the written words are CRUCIAL and
            a HUGE TURN ON!
          </p>
          <p>
            Thank you for a wonderful night/morning last night and an incredible
            evening via DFW and the deposits you are making that keeps a woman
            intrigued.
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
