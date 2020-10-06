import React from "react"
import Layout from "../components/Layout"
import StyledSection from "../components/@shared/StyledSection"
import imgsrc from "../img/redcourt.jpg"
import StyledButton from "../components/@shared/StyledButton"

export default () => {
  return (
    <Layout>
      <StyledSection>
        <img src={imgsrc} style={{ width: 250 }} />
        <StyledButton href="https://www.youtube.com/channel/UCsjHErXdLpfhb33LTBBqLwg?fbclid=IwAR3an3Q8cESpnQRRV1Fk1-39_8co8QrbnyXmJFTcazkyKCUExb4XU-MF15M">
          YouTube
        </StyledButton>
      </StyledSection>
    </Layout>
  )
}
