import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { teal } from "@material-ui/core/colors"

const Header = ({ siteTitle }) => {
  const [openMenu, setOpenMenu] = useState(false)
  const handleClick = () => {
    setOpenMenu(!openMenu)
  }
  const links = [
    { title: "Script Synopsis", href: "/synopsis" },
    {
      title: "Film Decks",
      href: "/filmdecks",
    },
    { title: "Podcast", href: "/podcast" },
    { title: "Reviews", href: "/reviews" },
    { title: "Reading List", href: "/readinglist" },
    { title: "Interviews", href: "/interviews" },
    { title: "Contact", href: "/contact" },
  ]

  return (
    <StyledHeader>
      <h1 style={{ flexGrow: 1 }}>
        <a onClick={() => setOpenMenu(false)} href="/">
          Saints Town
        </a>
      </h1>
      <i onClick={handleClick} className="fas fa-bars fa-2x" />
      <StyledNav openMenu={openMenu}>
        {links.map(({ title, href, external }) => (
          <a
            onClick={() => setOpenMenu(false)}
            href={href}
            target={external && "__blank"}
          >
            {title}
          </a>
        ))}
      </StyledNav>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  width: 100%;
  padding: 15px;
  background: #702663;
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
    @media screen and (max-width: 500px) {
      font-size:1.2em
    }

    margin: 0;
    a {
      font-family: "Merienda", sans-serif;
      text-decoration: none;
    }
  }
  
   
  }
`

const StyledNav = styled.nav`
  display: flex;
  margin: 0 0 0 15px;
  a {
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
    display: ${({ openMenu }) => (openMenu ? "flex" : "none")};
    position: absolute;
    background: #702663;
    width: 100%;
    left: 0;
    top: 60px;
    flex-direction: column;
    margin: 0;
  }
`
export default Header
