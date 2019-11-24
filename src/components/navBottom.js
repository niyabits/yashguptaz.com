import React from "react"
import { Link } from "gatsby"
import blogIcon from "../../content/assets/icons/feather.svg"
import talkIcon from "../../content/assets/icons/talk.svg"

const NavBottom = () => {
  return (
    <div
      style={{
        justifyContent: "space-around",
        width: "100%",
        maxWidth: "642px",
        position: "fixed",
        bottom: 0,
        paddingTop: "18px",
        borderTop: "var(--navBorder)",
        boxShadow: "var(--navBtmShadow)",
      }}
      className="nav-btm bg-color"
    >
      <Link to="/">
        <img src={blogIcon} alt="Blog" height="40px" />
      </Link>
      <Link to="/talks">
        <img src={talkIcon} alt="Blog" height="40px" />
      </Link>
    </div>
  )
}

export default NavBottom
