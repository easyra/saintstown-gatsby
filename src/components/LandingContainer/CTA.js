import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import BuyBookBtn from "../BuyBookBtn"
import CoverPicture from "./CoverPicture"
import StyledButton from "../@shared/StyledButton"
import { Paper, Typography, Grid, Hidden, Button } from "@material-ui/core"
import StyledPaper from "../@shared/StyledPaper"
import { teal, yellow } from "@material-ui/core/colors"

const CTA = () => {
  return (
    <Grid container justify="center" alignItems='center'>
      <CoverPicture />
      <Grid item xs={12} md={3}>
      <StyledPaper style={{ margin: 15, textAlign: "center" }}>
        
          {/* <h2`
            gutterBottom
            style={{ fontFamily: "Merienda, sans-serif" }}
            variant="h6"
          >
            A Peace of Me
          </h2>` */}
          <p>Buy today for an autographed copy of my new book, "A Peace of Me: A Black Man's Journey to Love and Commitment. "</p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* <BuyBookBtn /> */}
            <StyledButton href="https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=GUEYYY9M5UJSN&lc=US&item_name=A%20Peace%20of%20Me%20Book&amount=15%2e00&currency_code=USD&button_subtype=services&shipping=3%2e00&bn=PP%2dBuyNowBF%3abtn_buynowCC_LG%2egif%3aNonHostedGuest"
              Buy Now
            </StyledButton>
          </div>
        </StyledPaper>
        {/* <StyledPaper>
          <h2>Love Stories By Us For Us</h2>
          <p>
            Our first film project, Love Déjà vu, is one of these stories.
            Imagine in 1942, you walk into a Harlem bar and make the wrong
            decision regarding love. The same bar thirty years later, your
            spirit relives that scenario in a different body, only to make the
            wrong decision a gain. Another thirty years pass and in the exact
            same bar, with the exact same gathering of spirits, you finally get
            it right.
          </p>
          <StyledButton
            style={{ marginLeft: "auto" }}
            href="https://gf.me/u/y3krss"
          >
            Go Fund Me
          </StyledButton>
        </StyledPaper> */}
        
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
