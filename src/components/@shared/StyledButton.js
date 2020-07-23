import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledButton = ({ children, to = "" }) => {
  return (
    <Link to={to}>
      <StyledButtonWrapper>{children}</StyledButtonWrapper>
    </Link>
  )
}

export default StyledButton

const StyledButtonWrapper = styled.button`
  padding: 8px;
  text-align: center;
  background: #a60505;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  font-size: 1.3em;
  text-transform: uppercase;
  cursor: pointer;
`
