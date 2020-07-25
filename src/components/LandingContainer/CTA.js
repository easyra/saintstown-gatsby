import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import BuyBookBtn from "../BuyBookBtn"
import CoverPicture from "./CoverPicture"
import StyledButton from "../@shared/StyledButton"

const CTA = () => {
  return (
    <StyledCTA>
      <CoverPicture />

      <BuyBookBtn styles="margin: 0 0 15px;" />
      <StyledButton href="/excerpt" outline>
        Read Excerpt
      </StyledButton>
    </StyledCTA>
  )
}

const StyledCTA = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
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
