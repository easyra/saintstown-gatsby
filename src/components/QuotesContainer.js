import React from "react"
import styled from "styled-components"
import Quote from "./Quote"

const QuotesContainer = () => {
  return (
    <StyledSection>
      <StyledContainer>
        <Quote
          quote={`"If she is amazing, she won't be easy. If she's easy, she won't be
          amazing. If she is worth it you, won't give up. If you give up, you're
          not worthy....Truth is everybody is going to hurt you; you just gotta
          find the ones worth suffering for."`}
          author="The Prophet Bob Marley"
        />
        <Quote
          quote={`“When we love each other unconditionally, our mirror is clean; we see others and ourselves as we really are, as beautiful beings.”`}
          author="Don Miguel Ruiz"
        />
      </StyledContainer>
    </StyledSection>
  )
}

export default QuotesContainer

const StyledSection = styled.section`
  padding: 15px;
  margin: 15px auto 0;
  background: #a60505;
  color: #fff;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
const StyledContainer = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  p {
    width: 100%;
    max-width: 450px;
    font-style: italic;
  }
  @media screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
