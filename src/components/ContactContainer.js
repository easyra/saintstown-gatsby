import React from "react"
import styled from "styled-components"
import ContactForm from "./ContactContainer/ContactForm"
import ContactPicture from "./ContactContainer/ContactPicture"

const ContactContainer = () => {
  return (
    <StyledDiv>
      <h1>Email Me Here</h1>
      <h4>ralaez.89@gmail.com</h4>
      <ContactForm />
      <ContactPicture />
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
