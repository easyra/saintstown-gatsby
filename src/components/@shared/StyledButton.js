import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledButton = ({ children, href = "", outline, style }) => {
  return (
    <a href={href} target="__blank">
      {outline && (
        <StyledButtonOutline style={{ ...style }}>
          {children}
        </StyledButtonOutline>
      )}
      {!outline && (
        <StyledButtonWrapper style={{ ...style }}>
          {children}
        </StyledButtonWrapper>
      )}
    </a>
  )
}

export default StyledButton

const StyledButtonWrapper = styled.button`
  display: block;
  margin: 5px;
  padding: 10px;
  text-align: center;
  background: #ffff00;
  color: #000;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  font-size: 1rem;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
`
const StyledButtonOutline = styled.button`
  margin: 5px;
  padding: 6px;
  text-align: center;
  color: #ffff00;
  border: 2px solid #ffff00;
  border-radius: 4px;
  font-weight: bold;
  font-size: 1rem;
  text-transform: uppercase;
  cursor: pointer;
  background: none;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
`
