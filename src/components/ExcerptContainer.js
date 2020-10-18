import React from "react"
import styled from "styled-components"
import ExcerptText from "./ExcerptContainer/ExcerptText"

const ExcerptContainer = () => {
  return (
    <StyledSection>


      <StyledTitleWrapper>
        <h1>The Friend Zone</h1>
        <i>A relationship that is open, honest, supportive, non-judgmental, and safe

is my kind of zone.</i>
        <p>True friendship is mutual, reciprocal, and supportive in the times of ease and emergency. That means ride or die – when you have nothing, and when you have built something. A lot of people aren’t good friends, and thus don’t have good relationships because they don’t know how to encourage one another through the dreams, the bad decisions, failures, and rebuilding. A real friend remains committed to the relationship when others find reasons or excuses not to. Friends are builders of confidence, encouragers of dreams, and cheer leaders over the finish line; this includes 3am on the ledge calls and 7am call backs. I believe a person who knows how to be a good friend can use those attributes to manifest into an intimate partnership, and ultimately healthy marriage.

Friends never let friends dream alone.</p>
        <p>The bonds we have are influences in our lives; therefore, sisterhood and women bonding, and male bonding/brotherhood, can be positive for us as individuals, like Gayle and Oprah, having each other’s backs; or the relationship of Jonathan to David, as Jonathan stood up to his own father to protect his friend. I acknowledge that these friendships are important and can help women/men flourish.</p>
        <p>We must be aware, however, that the less our respective friends know about our intimate life, dreams, and commitments to each other, the less we must fight off spirits wanting to see us fail with unintentional or intentional consequences. I support you in having as many girlfriends as you like, and enjoying girls’ nights as often as you like; yet, I want to be your confidante when it is all said and done; and you mine. When it comes down to it, I want to be your girlfriend and you, my bro, us as best friends.</p>
        <p>
          Our relationship is just that, ours. It is not a community project for everyone to chime in with their uninvited/unwelcomed/unsolicited opinions of how we should feel and think about our relationship.</p>
        <p>When we know each other’s passwords and use the other’s phone to make calls, that is an extension of our love, friendship, and true partnership. A friend calls out their friend when they are not living up to their potential. I promise that I will always be truthful, respectful, and deliberate in my words and when I am not, I expect you to call me out, in love.

</p>
        <StyledTitleWrapper>
          <h1>Becoming Entwined</h1>
        </StyledTitleWrapper>

        <ExcerptText />

      </StyledTitleWrapper>
    </StyledSection>
  )
}

export default ExcerptContainer

const StyledSection = styled.section`
  padding: 15px;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
`

const StyledTitleWrapper = styled.div`
  text-align: center;
`
