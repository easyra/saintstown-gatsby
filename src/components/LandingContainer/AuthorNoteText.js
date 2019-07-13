import React from "react"
import styled from "styled-components"

const AuthorNoteText = () => {
  return (
    <StyledText>
      <h2>Dear Reader & Future Wife</h2>
      <p>
        I wrote this book for my commitment to Black Love and the fight to
        preserve it through my recent love journey. This particular journey
        started in 2016, when I began posting on Facebook addressing my future
        wife each day for seven days.
      </p>
      <p>
        It is my hope to enlighten you through what I have learned and let you
        see me as I see you. The goal for me is to find my lost rib and put my
        work in by seeking my truth and becoming my most authentic self. My
        desire is for you join in my discovery and you too find it for yourself.
      </p>
      <h6>From the author</h6>
      <h4>OneLove Adisa</h4>
    </StyledText>
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
