import React from "react"

import "./assets/index.css"
import Nav from "./nav.js"
import NavBottom from "./navBottom"

import { rhythm } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <>
        <Nav />
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: 642,
            marginTop: "72px",
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <main>{children}</main>
          <footer
            style={{
              marginTop: "60px",
              marginBottom: 60,
              color: "var(--secondaryText)",
            }}
          >
            © {new Date().getFullYear()}, Made by
            {` `}
            <a
              href="https://www.twitter.com/yashguptaz"
              className="secondary-links"
            >
              Yash Gupta
            </a>
          </footer>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <NavBottom />
        </div>
      </>
    )
  }
}

export default Layout
