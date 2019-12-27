import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import github from "../../content/assets/social/github.svg"
import twitter from "../../content/assets/social/twitter.svg"
import insta from "../../content/assets/social/insta.svg"

const PostBio = () => {
  const data = useStaticQuery(graphql`
    query PostBioQuery {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        justifyContent: `center`,
        padding: 30,
        flexWrap: "wrap",
        boxShadow: "",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "0 auto",
        }}
      >
        <Link to="/">
          <h2 style={{ color: "var(--theme)", margin: "12px 0", padding: 0 }}>
            {author}
          </h2>
        </Link>
        <p align="center">
          A teenager who code the web. <br />
          <a
            href="mailto:yashguptaofficial@gmail.com"
            className="secondary-links"
          >
            yashguptaofficial@gmail.com
          </a>
        </p>
      </div>
      <div style={{ margin: "0 24px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            maxWidth: 108,
            margin: "6px auto",
          }}
        >
          <a href="https://github.com/yashguptaz">
            <img src={github} alt="GitHub" height="18" />
          </a>
          <a href="https://twitter.com/yashguptaz">
            <img src={twitter} alt="Twitter" height="18" />
          </a>
          <a href="https://instagram.com/yashguptaz">
            <img src={insta} alt="Instagram" height="18" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default PostBio
