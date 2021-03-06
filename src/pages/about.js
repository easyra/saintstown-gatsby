import React from "react"
import StyledPaper from "../components/@shared/StyledPaper"
import Layout from "../components/Layout"

export default () => {
  return (
    <Layout>
      <StyledPaper style={{ maxWidth: "500px", margin: "auto" }}>
        <h2>About The Company</h2>
        <p>
          Saint town is a media company that provides a host of written feature
          films, original television pilot series, stage plays and books that
          serve to uplift the Black community with stories by us for everyone. We tell
          stories inspired by our love for Black people, our people, which
          authentically express the multi-faceted experiences of our
          communities. When we look around we seldom see our stories told
          accurately, or hear our voice in the Black characters on screen. The
          disservice done to our communities and culture by the often
          one-dimensional and negatively stereotypical portrayals of Black
          people on stage and in film and television has driven us to create
          content that will uplift, educate and inspire. Randall Davis is the founder of
          Saint Town Media LLC, named in honor of his home town of St.
          Louis, Missouri. Our mission is to produce content depicting the
          diverse lives within Black communities for a growing audience of
          people who appreciate storytelling that resonates beyond cultural
          boundaries. Saint Town wants to be a part of changing our stories to
          reflect our truth.
        </p>
      </StyledPaper>
    </Layout>
  )
}
