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
  max-width: 600px;
  width: 100%;
  /* max-height: 480px; */
  border-radius: 4px;
  margin-bottom: 15px;

  overflow: hidden;
  img {
    maxwidth: 500px;
    width: 100%;
  }
`
