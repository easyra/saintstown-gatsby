import React from "react"
import { Paper } from "@material-ui/core"

const StyledPaper = ({ children, style }) => {
  return (
    <Paper
      style={{
        background: "#702663",
        color: "#fff",
        padding: 15,
        margin: 15,
        ...style,
      }}
    >
      {children}
    </Paper>
  )
}

export default StyledPaper
