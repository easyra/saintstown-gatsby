import React from "react"
import "./layout.css"
import Header from "./Header"
import Footer from "./Footer"
import SEO from "./SEO"

const Layout = ({ children }) => {
  return (
    <div>
      <SEO />
      <Header siteTitle="Saints Town" />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
