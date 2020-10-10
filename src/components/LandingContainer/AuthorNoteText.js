import React from "react"
import styled from "styled-components"
import StyledPaper from "../@shared/StyledPaper"

const AuthorNoteText = () => {
  return (
    <StyledPaper style={{ height: "min-content" }}>
      <StyledText>
        <h2>Dear Reader & Future Wife</h2>
        <p>
          I wrote my book, A Peace of Me, for my commitment to Black Love and
          the fight to preserve it through my recent love journey. This
          particular journey started in 2016, when I began posting on Facebook
          addressing my future wife each day for seven days.
        </p>
        <p>
          Each post was a declaration of love to her, and it was written as if
          they were my last words. I wanted her to SEE me and know what to
          expect from a love that would never be hidden.
        </p>
        <p>
          It is my hope to enlighten you through what I have learned and let you
          see me as I see you. The goal for me is to find my lost rib and put my
          work in by seeking my truth and becoming my most authentic self. My
          desire is for you to join in my discovery and you to find it for
          yourself.
        </p>
        <h6>From the author</h6>
        <h4>OneLove Randall</h4>
      </StyledText>
    </StyledPaper>
  )
}

export default AuthorNoteText

const StyledText = styled.div`
  max-width: 500px;
  width: 100%;
  h4 {
    margin: 0;
  }
  h6 {
    margin: 6px 0;
  }
`
