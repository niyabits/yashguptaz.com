import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default function Template({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <br />
      <br />
      <h1>{post.frontmatter.title}</h1>
      <small>{post.frontmatter.date}</small>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        spoiler
        path
      }
    }
  }
`
