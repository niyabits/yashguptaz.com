/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import "../components/global.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 672,
            padding: `0 0`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
          <footer>
            <div>
              © {new Date().getFullYear()},{` `}
              <a
                href="https://github.com/yashguptaz"
                target="_blank"
                rel="noopener noreferrer"
              >
                Yash Gupta
              </a>
            </div>
            <div>
              <a
                href="https://github.com/yashguptaz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("../images/github.svg")}
                  width="25px"
                  alt="github logo"
                />
              </a>
              <a
                href="https://instagram.com/yashguptaz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("../images/insta.svg")}
                  width="25px"
                  alt="instagram logo"
                />
              </a>
              <a
                href="https://twitter.com/yashguptaz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span id="insta">
                  <img
                    src={require("../images/twitter.svg")}
                    width="40px"
                    alt="twitter logo"
                  />
                </span>
              </a>
            </div>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
