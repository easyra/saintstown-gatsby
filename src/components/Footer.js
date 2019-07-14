import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <StyledFooter>
      <Link to="contact">Contact Me</Link> | <a href="">Buy Book</a> |{" "}
      <Link to="excerpt">Read Excerpt</Link>
    </StyledFooter>
  )
}

export default Footer

const StyledFooter = styled.footer`
  margin: 150px 0 15px;
  padding: 15px;
  text-align: center;
  a {
    color: #a60505;
  }
`
