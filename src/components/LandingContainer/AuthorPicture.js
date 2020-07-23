import React from "react"
import styled from "styled-components"
import imgsrc from "../../img/author.jpg"
import StyledButton from "../@shared/StyledButton"

const AuthorPicture = () => {
  return (
    <div>
      <StyledImgWrapper>
        <img src={imgsrc} style={{ marginBottom: 15 }} />
        <StyledButton to="bio">Learn more</StyledButton>
      </StyledImgWrapper>
    </div>
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
