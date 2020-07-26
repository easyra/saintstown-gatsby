import React from "react"
import synopsisdata from "./SynopsisContainer/synopsisData.js"
import StyledSection from "./@shared/StyledSection"
import StyledPaper from "./@shared/StyledPaper.js"

const SynopsisContainer = () => {
  const keys = Object.keys(synopsisdata)

  return (
    <StyledSection style={{ maxWidth: 500 }}>
      <StyledPaper>
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
      </StyledPaper>
      {keys.map(name => {
        return (
          <StyledPaper>
            <h2>{name}:</h2>{" "}
            {synopsisdata[name].map(({ title, text }) => (
              <p>
                <h5 style={{ marginBottom: 5 }}>{title}</h5> {text}
              </p>
            ))}
          </StyledPaper>
        )
      })}
      <h6>All Scripts registered with the WGA</h6>
    </StyledSection>
  )
}
export default SynopsisContainer
