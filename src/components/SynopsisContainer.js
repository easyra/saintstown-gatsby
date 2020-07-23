import React from "react"
import synopsisdata from "./SynopsisContainer/synopsisData.js"
import StyledSection from "./@shared/StyledSection"

const SynopsisContainer = () => {
  const keys = Object.keys(synopsisdata)

  return (
    <StyledSection style={{ maxWidth: 500 }}>
      {keys.map(name => {
        return (
          <div>
            <h2>{name}:</h2>{" "}
            {synopsisdata[name].map(({ title, text }) => (
              <p>
                <h5 style={{ marginBottom: 5 }}>{title}</h5> {text}
              </p>
            ))}
          </div>
        )
      })}
      <h6>All Scripts registered with the WGA</h6>
    </StyledSection>
  )
}
export default SynopsisContainer
