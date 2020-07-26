import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import BuyBookBtn from "../BuyBookBtn"
import CoverPicture from "./CoverPicture"
import StyledButton from "../@shared/StyledButton"
import { Paper, Typography, Grid, Hidden } from "@material-ui/core"
import StyledPaper from "../@shared/StyledPaper"
import { teal } from "@material-ui/core/colors"

const CTA = () => {
  return (
    <Grid container justify="center">
      <CoverPicture />
      <Grid item xs={12} md={3}>
        <StyledPaper style={{ margin: 15, textAlign: "center" }}>
          <h2
            gutterBottom
            style={{ fontFamily: "Merienda, sans-serif" }}
            variant="h6"
          >
            Book Drops{" "}
            <span style={{ fontFamily: "inherit", color: teal["A400"] }}>
              September 25
            </span>
          </h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* <BuyBookBtn /> */}
            <StyledButton href="/excerpt">Read Excerpt</StyledButton>
          </div>
        </StyledPaper>
        <Hidden smDown>
          <StyledPaper>
            <h2>My Other Work</h2>
            <StyledButton outline>Scripting Synopsis</StyledButton>
            <StyledButton outline> Film Decks</StyledButton>
            <StyledButton outline> Podcast</StyledButton>
          </StyledPaper>
        </Hidden>
      </Grid>
    </Grid>
  )
}

const StyledCTA = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
  // flex-direction: column;
  align-items: center;
  margin: 15px 0;
  p {
    text-align: center;
    font-style: italic;
  }
  a {
    /* text-decoration: underline; */
    color: #702663;
  }
  button {
    margin: 0 0 10px;
  }
`

const BookTitle = styled.h1`
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 0;
  font-size: 72px;
`

export default CTA
