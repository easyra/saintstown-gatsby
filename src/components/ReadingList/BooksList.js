import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BookItem from "./BookItem"
import StyledPaper from "../@shared/StyledPaper"

const BooksList = () => {
  const data = useStaticQuery(graphql`
    query {
      __typename
      site {
        siteMetadata {
          readingList {
            author
            link
            title
          }
        }
      }
    }
  `)
  const books = data.site.siteMetadata.readingList
  return (
    <StyledPaper>
      {books.map(({ title, author, link }) => (
        <BookItem title={title} author={author} link={link} />
      ))}
    </StyledPaper>
  )
}

export default BooksList
