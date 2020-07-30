import React from "react"
import Layout from "../components/Layout"
import ReviewsContainer from "../components/ReviewsContainer"
import StyledPaper from "../components/@shared/StyledPaper"
import { Grid } from "@material-ui/core"

export default () => {
  return (
    <Layout>
      <StyledPaper style={{ width: 250 }}>
        <h2>Film Decks</h2>
        <h6>Investments</h6>
        <a
          style={{ color: "#ffff00" }}
          href="https://drive.google.com/file/d/1TNz-hORp9sYRgGZb5OGMYbIlrm8dRj3h/view"
          target="__blank"
        >
          Paint
        </a>
      </StyledPaper>
    </Layout>
  )
}
