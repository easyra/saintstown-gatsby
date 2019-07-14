import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import BuyBookBtn from "../BuyBookBtn"

const CTA = () => {
  return (
    <StyledCTA>
      <BookTitle>Dear Future Wife</BookTitle>
      <p>- inspired by a Facebook Post</p>

      <BuyBookBtn styles="margin: 0 0 10px;">Buy Now</BuyBookBtn>
      <Link to="excerpt">Read Excerpt</Link>
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
    color: #a60505;
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