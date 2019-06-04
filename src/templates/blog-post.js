import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import "../components/global.css"

export default function Template({ data, pageContext }) {
  const post = data.markdownRemark
  const { next, prev } = pageContext

  return (
    <Layout>
      <div className="blog-template">
        <br />
        <br />
        <h1>{post.frontmatter.title}</h1>
        <small>{post.frontmatter.date}</small>
        <div
          dangerouslySetInnerHTML={{ __html: post.html }}
          className="blog-content"
        />
        <div className="page-btns">
          {prev && <Link to={prev.frontmatter.path}>← Previous Post</Link>}
          {next && <Link to={next.frontmatter.path}>Next Post →</Link>}
        </div>
      </div>
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
