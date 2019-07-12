import React from "react"
import styled from "styled-components"

const Header = ({ siteTitle }) => {
  return (
    <StyledHeader>
      <h1>{siteTitle}</h1>
    </StyledHeader>
  )
}

const StyledHeader = styled.header``
export default Header
