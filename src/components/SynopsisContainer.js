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
          serve to uplift the community with stories by us for everyone. I tell
          stories inspired by my love for Black people, my people, which
          authentically express the multi-faceted experiences of our
          communities. When I look around I seldom see our stories told
          accurately, or hear my voice in the Black characters on screen. The
          disservice done to our communities and culture by the often
          one-dimensional and negatively stereotypical portrayals of Black
          people on stage and in film and television has driven me to create
          content that will uplift, educate and inspire. I am the founder of
          Saints Town Production LLC, named in honor of my home town of St.
          Louis, Missouri. Our mission is to produce content depicting the
          diverse lives within Black communities for a growing audience of
          people who appreciate storytelling that resonates beyond cultural
          boundaries. Saints Town wants to be a part of changing our stories to
          reflect our truth
        </p>
      </StyledPaper>{" "}
      <h6 align="center">All Scripts registered with the WGA</h6>
    </StyledSection>
  )
}
export default SynopsisContainer
