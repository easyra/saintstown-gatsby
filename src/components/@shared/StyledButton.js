import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledButton = ({ children, href = "", outline }) => {
  return (
    <a href={href}>
      {outline && <StyledButtonOutline>{children}</StyledButtonOutline>}
      {!outline && <StyledButtonWrapper>{children}</StyledButtonWrapper>}
    </a>
  )
}

export default StyledButton

const StyledButtonWrapper = styled.button`
  padding: 10px;
  text-align: center;
  background: #a60505;
  color: #000;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  font-size: 1rem;
  text-transform: uppercase;
  cursor: pointer;
`
const StyledButtonOutline = styled.button`
  padding: 6px;
  text-align: center;
  color: #a60505;
  border: 2px solid #a60505;
  border-radius: 4px;
  font-weight: bold;
  font-size: 1rem;
  text-transform: uppercase;
  cursor: pointer;
`
