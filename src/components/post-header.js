import { Link } from "gatsby"
import React from "react"

const PostHeader = () => {
  return (
    <nav
      style={{
        backgroundColor: `hsl(209, 20%, 25%)`,
        top: `0`,
        padding: `24px`,
      }}
    >
      <div
        style={{
          maxWidth: `672px`,
          margin: `auto`,
          display: `flex`,
          justifyContent: `space-between`,
        }}
      >
        <Link
          to="/"
          style={{
            color: `hsl(216, 33%, 97%)`,
            textDecoration: `none`,
          }}
        >
          <span id="nav-text">Yash Gupta</span>
        </Link>
        <Link
          to="/"
          style={{
            color: `hsl(216, 33%, 97%)`,
            textDecoration: `none`,
          }}
          id="nav-home"
        >
          <span>Home</span>
        </Link>
      </div>
    </nav>
  )
}

export default PostHeader
