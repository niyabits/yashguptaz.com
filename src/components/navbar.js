import React from "react"
import { Link } from "gatsby"

const Navbar = () => (
  <div id="nav-container">
    <div id="nav">
      <Link to="/">Home</Link>
      <Link to="/talks">Talks</Link>
      {/* <Link to="/">Blog</Link> */}
      <Link to="/connect">Connect</Link>
    </div>
  </div>
)

export default Navbar
