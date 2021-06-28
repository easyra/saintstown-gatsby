import React from "react"
import styled from "styled-components"

const ContactForm = () => {
  return (
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
