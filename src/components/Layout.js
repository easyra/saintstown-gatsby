import React from "react"
import "./layout.css"
import Header from "./Header"

const Layout = ({ children }) => {
  return (
    <div>
      <Header siteTitle="PlaceHolder" />
      {children}
    </div>
  )
}

export default Layout
