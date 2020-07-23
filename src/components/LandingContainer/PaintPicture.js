import React from "react"
import styled from "styled-components"
import imgsrc from "../../img/paint.jpg"
import StyledButton from "../@shared/StyledButton"

const PaintPicture = () => {
  return (
    <StyledImgWrapper>
      <img src={imgsrc} style={{ marginBottom: 15 }} />
    </StyledImgWrapper>
  )
}

export default PaintPicture

const StyledImgWrapper = styled.div`
  max-width: 400px;
  width: 100%;
  /* max-height: 480px; */
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;

  overflow: hidden;
  img {
    width: 100%;
  }
`
