import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => {
  const [openMenu, setOpenMenu] = useState(false)
  const handleClick = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <StyledHeader>
      <h1>
        <Link to="">{siteTitle}</Link>
      </h1>
      <i onClick={handleClick} className="fas fa-bars fa-2x" />
      <StyledNav openMenu={openMenu}>
        <Link activeStyle={{ opacity: 1 }} to="readinglist">
          Reading List
        </Link>
        <Link activeStyle={{ opacity: 1 }} to="reviews">
          Reviews
        </Link>
        <Link activeStyle={{ opacity: 1 }} to="interviews">
          Interviews
        </Link>
        <Link activeStyle={{ opacity: 1 }} to="contact">
          Contact
        </Link>
      </StyledNav>
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
  i {
    display:none;
  }
  align-items: center;
  @media screen and (max-width: 800px) {
      justify-content: space-between;      
      position: relative;
      i{
        display:initial;
      }
    }
  h1 {
    text-transform: uppercase;

    margin: 0;
    a {
      font-family: "Merienda", sans-serif;
      color: #fff;
      text-decoration: none;
    }
  }
  
   
  }
`

const StyledNav = styled.nav`
  display: flex;
  margin: 0 0 0 15px;
  a {
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    opacity: 0.8;
    padding: 8px;
    transition: all 0.1s;
    @media screen and (max-width: 800px) {
      width: 100%;
      text-align: center;
      padding: 15px;
    }
    :hover {
      opacity: 1;
    }
  }
  @media screen and (max-width: 800px) {
    /* display:none; */
    position: absolute;
    transition: all 0.2s;
    transition-timing-function: ease-in;
    background: #a60505;
    width: 100%;
    left: ${({ openMenu }) => (openMenu ? "0" : "100%")};
    top: 70px;
    flex-direction: column;
    margin: 0;
  }
`
export default Header
