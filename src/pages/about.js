import React from "react"
import StyledPaper from "../components/@shared/StyledPaper"
import Layout from "../components/Layout"

export default () => {
  return (
    <Layout>
      <StyledPaper style={{ maxWidth: "500px", margin: "auto" }}>
        <h2>About The Company</h2>
        <p>
          Saints town is a production company that provides a host of written feature
          films, original television pilot series, stage plays and books that
          serve to uplift the community with stories by us for everyone. We tell
          stories inspired by my love for Black people, my people, which
          authentically express the multi-faceted experiences of our
          communities. When we look around we seldom see our stories told
          accurately, or hear my voice in the Black characters on screen. The
          disservice done to our communities and culture by the often
          one-dimensional and negatively stereotypical portrayals of Black
          people on stage and in film and television has driven me to create
          content that will uplift, educate and inspire. Randall Davis is the founder of
          Saints Town Production LLC, named in honor of his home town of St.
          Louis, Missouri. Our mission is to produce content depicting the
          diverse lives within Black communities for a growing audience of
          people who appreciate storytelling that resonates beyond cultural
          boundaries. Saints Town wants to be a part of changing our stories to
          reflect our truth.
        </p>
      </StyledPaper>
    </Layout>
  )
}
