import React from "react"
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  Collapse,
  ListSubheader,
} from "@material-ui/core"
import ExpandLess from "@material-ui/icons/ExpandLess"
import ExpandMore from "@material-ui/icons/ExpandMore"
import { useState } from "react"

const SynopsisList = ({ title, text }) => {
  const [open, setOpen] = useState(false)
  const handleClick = () => {
    setOpen(state => !state)
  }
  return (
    <>
      <ListItem
        button
        onClick={handleClick}
        style={{ background: "#2C2A2C", color: "#fff" }}
      >
        <ListItemText primary={title} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <p style={{ padding: "0 15px" }}>{text}</p>
      </Collapse>
    </>
  )
}

export default SynopsisList
