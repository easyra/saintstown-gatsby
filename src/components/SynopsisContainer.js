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
                  background: "#CF25AF",
                  color: "#fff",
                  padding: 0,
                  margin: "25px",
                }}
              >
                <AppBar position="static" style={{ background: "#702663" }}>
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
      </Grid>
      <StyledPaper style={{ maxWidth: "500px", margin: "auto" }}>
        <h2>About The Company</h2>
        <p>
          Saints Town is a content provider with a host of written feature
          films, original television pilot series, stage plays and books that
          serve to uplift the urban community with stories by us for everyone.
          No one has a monopoly on content and stories for the black culture.
          Saints Town Production mission is to produce content that appeals to
          people who love Black stories that resonates with our multi-facet
          experiences. Driven by some films, television and stage play content
          and image, has done our culture a disservice, Saints Town wants to be
          a part of changing our stories to reflect our truth.
        </p>
      </StyledPaper>{" "}
      <h6 align="center">All Scripts registered with the WGA</h6>
    </StyledSection>
  )
}
export default SynopsisContainer
