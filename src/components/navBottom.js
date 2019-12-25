import React from "react"
import { Link } from "gatsby"
import blogIcon from "../../content/assets/icons/feather.svg"
import talkIcon from "../../content/assets/icons/talk.svg"

const NavBottom = () => {
  return (
    <div
      style={{
        justifyContent: "space-around",
        maxWidth: "642px",
        position: "fixed",
        bottom: 0,
        paddingTop: "12px",
        borderTop: "var(--navBorder)",
        boxShadow: "var(--navBtmShadow)",
      }}
      className="nav-btm bg-color"
    >
      <Link to="/">
        <img src={blogIcon} alt="Blog" height="25px" />
      </Link>
      <Link to="/talks">
        <img src={talkIcon} alt="Blog" height="25px" />
      </Link>
    </div>
  )
}

export default NavBottom
