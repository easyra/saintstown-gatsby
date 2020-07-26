import React from "react"
import styled from "styled-components"
import BooksList from "./ReadingList/BooksList"
import { Grid } from "@material-ui/core"
import StyledPaper from "./@shared/StyledPaper"

const ReadingListContainer = () => {
  return (
    <StyledSection>
      <h1>Reading List</h1>
      <Grid container justify="space-around">
        <Grid item md={6}>
          <BooksList />
        </Grid>
        <Grid md={6} item>
          {" "}
          <StyledPaper>
            It has been said that knowledge in and of itself without a change in
            behaviour is a waste of information. I have learned a lot from many
            books but these select few are the ones that have shaped my journey
            for love for self and others.
          </StyledPaper>
        </Grid>
      </Grid>
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
