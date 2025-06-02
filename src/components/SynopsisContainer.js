import React from "react"
import synopsisdata from "./SynopsisContainer/synopsisData.js"
import StyledSection from "./@shared/StyledSection"
import StyledPaper from "./@shared/StyledPaper.js"
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  Collapse,
  ListSubheader,
  AppBar,
  Toolbar,
  Typography,
} from "@material-ui/core"
import SynopsisList from "./SynopsisContainer/SynopsisList.jsx"

const SynopsisContainer = () => {
  const keys = Object.keys(synopsisdata)
  const initialState = { ...synopsisdata }
  console.log(initialState)

  return (
    <StyledSection style={{ maxWidth: "100%" }}>
      <Grid container justify="space-around" alignItems="">
        {/* About the Company */}
        {/* Synopsis */}
        {keys.map(name => {
          return (
            <Grid item md={3} sm={6} xs={12}>
              <List
                style={{
                  background: "#DEB866",
                  color: "#fff",
                  padding: 0,
                  margin: "25px",
                }}
              >
                <AppBar position="static" style={{ background: "#2C2A2C" }}>
                  <Toolbar>
                    <Typography
                      style={{ fontFamily: '"Merienda", sans-serif' }}
                      variant="h6"
                    >
                      {name}
                    </Typography>{" "}
                  </Toolbar>
                </AppBar>
                {synopsisdata[name].map(({ title, text }) => (
                  <SynopsisList title={title} text={text} />
                ))}
              </List>
            </Grid>
          )
        })}
      </Grid>{" "}
      <h6 align="center">All Scripts and Treatments registered with the WGA</h6>
    </StyledSection>
  )
}
export default SynopsisContainer
