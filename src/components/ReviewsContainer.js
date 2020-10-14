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
        <ReviewCard
          author="MICHAEL WARD"
          title="FOUNDER, GENESIS REVOLUTIONS"
          review={``}
        >
          <p>
            “Wow, this work is like the chronicles of a Black man’s heart being
            displayed on the courtship of love as a modern day Song of Solomon.
            I enjoyed the analogy of relationships to that of basketball. It
            resonated with me as an enthusiast of the game, I could relate to
            Randall’s comparisons. A great literature of reflective intimacy by
            a Black man.”
          </p>
        </ReviewCard>
        <ReviewCard
          author="Tanayi Seabrook"
          title="Emmy Award Winning Producer/Actress/Mother"
          review={``}
        >
          <p>
            Thank you Randall Courtland for A Peace of Me! You share so many
            nuggets of insight not just into your inner world, but the inner
            world of men, Black men in particular. This is a brave and
            courageous book. It is rare for a Black man to open up this way and
            share not only a deep longing for an intimate committed
            relationship, but you share reflections from your life. Most of all
            you share your humanity. I genuinely believe this is one way we
            begin to heal as people. Beautiful! Put this at the top of reviews
            thanks
          </p>
        </ReviewCard>
        <ReviewCard
          author="Aristean Davis"
          title="Retired Chief Officer - US Department of Records and Author’s Mom"
          review={``}
        >
          <p>
            This is a “MUST READ.” It opened my eyes and offered some rich
            pearls of wisdom to relationships, and I have been married happily
            for 57 years. His personal journey from the dark side of love to a
            transformation by the renewing of the mind was fascinating.
            Randall’s discovery to seek real love through communication,
            commitment and Christ speaks to a journey for all men.
          </p>
        </ReviewCard>
        <ReviewCard
          author="Kennard L. Jones"
          title="Circuit Attorney"
          review={``}
        >
          <p>
            Reading A Peace of Me, Randall’s perceptive awareness is
            well-grounded and vibrates with wise love. Not unlike flowers. And
            yes, as trees; rooted in soils of eternity. Fed by ethereal rivers
            of living, Randall's expressions of sincerity breathe light into
            contemplations of all who want to know. Of his spirit and through
            his mind, a voice of reason speaks to what may be essential for
            lasting unity.
          </p>
        </ReviewCard>
        <ReviewCard
        author='Veronda Mischeaux Pierson'
        title='Children and Family Support Profession/Business Owner'
        
        >
          <p>Randall's beautifully written perspectives, sincerity, vulnerabilities, and most importantly his unmitigated TRUTHS as a Black man seeking a higher love, we now have direct, foundational insights from the source by which Black Love is anchored, a Black man! THANK YOU for being vulnerable enough to share your life's experiences through A Peace of Me, and for caring enough to provide a blueprint for successfully navigating our complexities.  His words resonate in spaces reserved for the exaltation of Black Love everywhere...</p>
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
