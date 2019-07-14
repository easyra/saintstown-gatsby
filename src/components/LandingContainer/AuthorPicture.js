import React from "react"
import styled from "styled-components"
import imgsrc from "../../img/author.jpg"

const AuthorPicture = () => {
  return (
    <StyledImgWrapper>
      <img src={imgsrc} />
    </StyledImgWrapper>
  )
}

export default AuthorPicture

const StyledImgWrapper = styled.div`
  max-width: 400px;
  width: 100%;
  /* max-height: 480px; */
  border-radius: 4px;

  overflow: hidden;
  img {
    width: 100%;
  }
`
