import React from "react"
import styled from "styled-components"

const BookItem = ({ title, author, link }) => {
  return (
    <StyledItem>
      <StyledLink href={link}>{title}</StyledLink> - {author}
    </StyledItem>
  )
}

const StyledItem = styled.li`
  margin: 0 0 15px;
  list-style-type: none;
`

const StyledLink = styled.a`
  color: #a60505;
  text-decoration: underline;
`

export default BookItem
