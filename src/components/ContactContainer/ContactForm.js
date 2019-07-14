import React from "react"
import styled from "styled-components"

const ContactForm = () => {
  return (
    <StyledForm action="https://formspree.io/ralaez.89@gmail.com" method="POST">
      <p>
        <label>Your Email</label>
        <input type="email" name="email" required />
      </p>
      <p>
        <label>Subject</label>
        <input type="text" name="subject" required />
      </p>
      <p>
        <label>Message</label>
        <textarea name="message" required></textarea>
      </p>
      <p>
        <button type="submit">Send Your Message</button>
      </p>
    </StyledForm>
  )
}

export default ContactForm

const StyledForm = styled.form`
  max-width: 500px;
  width: 100%;
  input,
  textarea {
    width: 100%;
  }
  textarea {
    height: 150px;
  }
  label {
    display: block;
  }
  button {
    width: 100%;
    padding: 8px;
  }
`
