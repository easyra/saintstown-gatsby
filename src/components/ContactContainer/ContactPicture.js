import React from "react"
import styled from "styled-components"
import imgsrc from "../../img/contact.jpg"
import StyledButton from "../@shared/StyledButton"
import { Grid } from "@material-ui/core"

const ContactPicture = () => {
  return (
    <div>
      <Grid item xs={12} md={6}>
        <img src={imgsrc} style={{ marginBottom: 15 }} />
        {/* <StyledButton to="bio">Learn more</StyledButton> */}
      </Grid>
    </div>
  )
}

export default ContactPicture

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
