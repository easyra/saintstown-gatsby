import React from "react"
import styled from "styled-components"
import imgsrc from "../../img/author.jpg"
import StyledButton from "../@shared/StyledButton"
import StyledPaper from "../@shared/StyledPaper"
import { Grid } from "@material-ui/core"

const AuthorPicture = () => {
  return (
    <StyledPaper style={{ margin: 0 }}>
      <Grid container justify={"center"}>
        <Grid item md={4} xs={12}>
          <div style={{ margin: 15 }}>
            <img src={imgsrc} style={{ margin: 0, width: "100%" }} />
          </div>
        </Grid>
        <Grid item md={4} xs={12}>
          <h2 style={{ margin: "5px 0 0px" }}>Meet The Founder:</h2>{" "}
          <div style={{ margin: "0 8px" }}>
            <p>
              <span style={{ fontWeight: "bold" }}>
                Randall Courtland Davis
              </span>{" "}
              is a prolific writer, content creator, author, and actor and activist. He attended Clark Atlanta University with a major in Public
              Relations and a minor in Theater Arts. He obtained a job in
              International Marketing at Warner Brothers upon graduation. He was
              soon promoted into television and film production working as
              second assistant to Ilene Chaiken, President of Quincy Jones
              Entertainment.
            </p>
            <p>
              A year later, Mr. Davis became the Production Coordinator on the
              Martin Show for HBO for its first season. He further found his
              voice while taking advanced courses in screenwriting with Robert
              McKee while simultaneously rising to the top of his management
              roles in the service industry in Los Angeles for the last
              twenty-eight years. He continued to hone his craft by educating
              himself through the reading, writing, and studying of scripts from
              every genre. The genre he found most fascinating was dramatic
              expression as it resonated with his soul and history. He then
              worked 3 years in the Non-Profit sector for “My Friend's House
              Foundation” as its Director of Operations while simultaneously
              being a single father to three young children, now young adults.
            </p>
            <p>
              Davis has written six features films, including a musical,
              and countless other ideas and projects in the vault. He has
              written two stage plays, a short film, and three original
              television pilots; a sitcom and two hour-long dramas. He now looks
              to find his tribe and to partner on a production deal to package
              his life’s work, share his talents and experiences, and bring hope
              to the world through storytelling.
            </p>
            <StyledButton href="/excerpt" style={{ float: "right" }}>
              Read Excerpt
            </StyledButton>
          </div>
        </Grid>
      </Grid>
    </StyledPaper>
  )
}

export default AuthorPicture

const StyledImgWrapper = styled.div`
  max-width: 400px;
  width: 100%;
  /* max-height: 480px; */
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;

  overflow: hidden;
  img {
    width: 100%;
  }
`
