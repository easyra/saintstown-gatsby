import React from "react"
import { Paper } from "@material-ui/core"

const StyledPaper = ({ children, style, background }) => {
  return (
    <Paper
      style={{
        background: background || "#2C2A2C",
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
