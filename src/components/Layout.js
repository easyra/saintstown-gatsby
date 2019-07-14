import React from "react"
import "./layout.css"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <div>
      <Header siteTitle="ADISA DIOP" />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
