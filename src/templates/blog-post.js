import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import "../components/global.css"
import PostHeader from "../components/post-header"
import Footer from "../components/footer"
import SEO from "../components/seo"

export default function Template({ data, pageContext }) {
  const post = data.markdownRemark
  const { next, prev } = pageContext

  return (
    <div>
      <SEO title={post.frontmatter.title} />
      <PostHeader />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 672,
          padding: `0 0`,
          paddingTop: 0,
        }}
      >
        <div className="blog-template">
          <br />
          <br />
          <h1>{post.frontmatter.title}</h1>
          <small>
            {post.frontmatter.date} • {post.fields.readingTime.text}
          </small>
          <div
            dangerouslySetInnerHTML={{ __html: post.html }}
            className="blog-content"
          />
          <div className="page-btns">
            {prev && <Link to={prev.frontmatter.path}>← Previous Post</Link>}
            {next && <Link to={next.frontmatter.path}>Next Post →</Link>}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      fields {
        readingTime {
          text
        }
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        spoiler
        path
      }
    }
  }
`
