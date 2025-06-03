import React from "react"
import styled from "styled-components"
import ContactForm from "./ContactContainer/ContactForm"
import ContactPicture from "./ContactContainer/ContactPicture"

const ContactContainer = () => {
  return (
    <StyledDiv>
      <h1>Email Me Here</h1>
      <h4>randallcdavis.89@gmail.com</h4>
      <iframe
  src="https://docs.google.com/forms/d/e/1FAIpQLScHQTECFy15X-AxHkNcnvzU6ZjRfTspCKnQ1WA6J8dwOn58Sg/viewform?embedded=true"
  width={640}
  height={902}
  frameBorder={0}
  marginHeight={0}
  marginWidth={0}
>
  Loading…
</iframe>
    </StyledDiv>
  )
}

export default ContactContainer

const StyledDiv = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h4 {
    margin: 0;
  }
`
