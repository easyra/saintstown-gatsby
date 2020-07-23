import React from "react"
import styled from "styled-components"
import imgsrc from "../../img/cover.jpg"

const CoverPicture = () => {
  return (
    <StyledImgWrapper>
      <img src={imgsrc} />
    </StyledImgWrapper>
  )
}

export default CoverPicture

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
