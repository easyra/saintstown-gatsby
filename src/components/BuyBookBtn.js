import React from "react"
import styled from "styled-components"

const BuyBookBtn = () => {
  return <StyledButton>Buy Now</StyledButton>
}

const StyledButton = styled.button`
  padding: 8px;
  text-align: center;
  background: #a60505;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  font-size: 2em;
  text-transform: uppercase;
  cursor: pointer;
`
export default BuyBookBtn
