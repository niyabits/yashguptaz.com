/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import github from "../../content/assets/social/github.svg"
import twitter from "../../content/assets/social/twitter.svg"
import insta from "../../content/assets/social/insta.svg"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/my-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 200, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }

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
      }}
    >
      <div style={{ margin: "0 24px" }}>
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt={author}
          style={{
            margin: "0 auto",
            minWidth: 50,
            borderRadius: `100%`,
            width: 108,
            height: 108,
          }}
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "0 auto",
        }}
      >
        <h1 style={{ color: "#6c63ff", margin: "12px 0", padding: 0 }}>
          {author}
        </h1>
        <p align="center">
          Teenager who code. <br /> 
          Web Dev. JS and React.<br />
          <a
            href="mailto:yashguptaofficial@gmail.com"
            className="secondary-links"
          >
            yashguptaofficial@gmail.com
          </a>
        </p>
      </div>
    </div>
  )
}

export default Bio
