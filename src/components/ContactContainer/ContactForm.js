import React from "react"
import styled from "styled-components"

const ContactForm = () => {
  return (
    <StyledForm
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-recaptcha="true"
    >
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
      <div data-netlify-recaptcha="true"></div>
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
