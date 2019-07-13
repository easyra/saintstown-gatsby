import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BookItem from "./BookItem"

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
    <ul>
      {books.map(({ title, author, link }) => (
        <BookItem title={title} author={author} link={link} />
      ))}
    </ul>
  )
}

export default BooksList
