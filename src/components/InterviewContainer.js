import React from "react"
import styled from "styled-components"

const InterviewContainer = () => {
  return (
    <StyledSection>
      <h1>Interviews</h1>
      <a
        style={{ color: "red" }}
        href="https://wearethewhistleblowers.com/artist-conversations/f/randal-courtland"
      >
        Ambre Makeyev Sits Down with Randy
      </a>
    </StyledSection>
  )
}

export default InterviewContainer

const StyledSection = styled.section`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  padding: 15px;
`
