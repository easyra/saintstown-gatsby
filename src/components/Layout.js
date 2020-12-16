fimport React from "react"
import "./layout.css"
import Header from "./Header"
import Footer from "./Footer"
import SEO from "./SEO"
f
const Layout = ({ children }) => {
  return (
    <div>
      <SEO />
      <Header siteTitle="Saints Town Productions" />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
