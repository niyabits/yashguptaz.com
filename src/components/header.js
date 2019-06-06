import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../components/global.css"

const Header = ({ siteTitle }) => (
  <header>
    <div
      style={{
        padding: `32px 24px`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `hsl(216, 33%, 97%)`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <p>Personal Blog by Yash Gupta</p>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
