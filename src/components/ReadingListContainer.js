import React from "react"
import styled from "styled-components"
import BooksList from "./ReadingList/BooksList"

const ReadingListContainer = () => {
  return (
    <StyledSection>
      <h1>Reading List</h1>
      <StyledDiv>
        <BooksList />
        <p>
          It has been said that knowledge in and of itself without a change in
          behaviour is a waste of information. I have learned a lot from many
          books but these select few are the ones that have shaped my journey
          for love for self and others.
        </p>
      </StyledDiv>
    </StyledSection>
  )
}

export default ReadingListContainer

const StyledSection = styled.section`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  padding: 15px;
`
const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    width: 100%;
    max-width: 400px;
    line-height: 2;
  }
  @media screen and (max-width: 800px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
`
