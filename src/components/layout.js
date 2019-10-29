/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import Navbar from "./navbar"
import "./layout.css"

import Github from "../images/social/github.svg"
import Insta from "../images/social/insta.svg"
import Twitter from "../images/social/twitter.svg"

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <Navbar />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 500,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main style={{}}>{children}</main>
        <footer>
          <div id="sm">
            <a
              href="https://github.com/yashguptaz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Github} alt="Github Logo" width="25px" />
            </a>
            <a
              href="https://twitter.com/yashguptaz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Twitter} alt="Twitter Logo" width="25px" />
            </a>
            <a
              href="https://instagram.com/yashguptaz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Insta} alt="Instagram Logo" width="25px" />
            </a>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
