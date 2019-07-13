import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => {
  return (
    <StyledHeader>
      <h1>
        <Link to="">{siteTitle}</Link>
      </h1>
      <nav>
        <Link activeStyle={{ opacity: 1 }} to="readinglist">
          Reading List
        </Link>
        <Link activeStyle={{ opacity: 1 }} to="blog">
          Blog
        </Link>
        <Link activeStyle={{ opacity: 1 }} to="interviews">
          Interviews
        </Link>
      </nav>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  width: 100%;
  padding: 15px;
  background: #a60505;
  color: #fff;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  h1 {
    text-transform: uppercase;

    margin: 0;
    a {
      font-family: "Merienda", sans-serif;
      color: #fff;
      text-decoration: none;
    }
  }
  nav {
    display: flex;
    margin: 0 15px;
    width: 300px;
    justify-content: space-around;
    a {
      color: #fff;
      text-decoration: none;
      text-transform: uppercase;
      opacity: 0.8;
      /* padding: 8px; */
      transition: all 0.2s;
      :hover {
        opacity: 1;
      }
    }
  }
`
export default Header
