import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import "../components/global.css"

const IndexPage = ({ data }) => (
  <div className="blog-page">
    <Layout>
      <SEO title="Home" />
      <div className="blog-info">
        <p>
          Personal Blog by{" "}
          <a
            href="https://twitter.com/yashguptaz"
            target="_blank"
            rel="noopener noreferrer"
          >
            Yash Gupta
          </a>
          . <br />
          Not your next door front-end Web Dev.
        </p>
      </div>
      {data.allMarkdownRemark.edges.map(post => (
        <div key={post.node.id} className="post">
          <Link to={post.node.frontmatter.path}>
            <h3>{post.node.frontmatter.title}</h3>
          </Link>
          <small>{post.node.frontmatter.date}</small>
          <p>{post.node.frontmatter.spoiler}</p>
        </div>
      ))}
    </Layout>
  </div>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            spoiler
            path
          }
        }
      }
    }
  }
`

export default IndexPage
