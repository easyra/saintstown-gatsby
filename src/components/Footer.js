import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <StyledFooter>
      <a href="/contact">Contact Me</a> | <a href="/excerpt">Read Excerpt</a>
    </StyledFooter>
  )
}

export default Footer

const StyledFooter = styled.footer`
  margin: 150px 0 15px;
  padding: 15px;
  text-align: center;
  a {
    color: #B68438;
  }
`
