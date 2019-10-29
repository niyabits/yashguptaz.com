import React from "react"

import Layout from "../components/layout"
import githubDev from "../images/github-developer.svg"
import SEO from "../components/seo"

const centerMain = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  alignContent: "center",
  height: "80vh",
}

const IndexPage = () => (
  <Layout>
    <div style={centerMain} id="home">
      <SEO title="Home" />
      <div id="img">
        <img src={githubDev} alt="Developer Coding Background" width="450px" />
      </div>
      <h1 id="main-title">Yash Gupta</h1>
      <p id="main-lead">16-year-old. Web Dev. JS Enthusiast. Based in India</p>
    </div>
  </Layout>
)

export default IndexPage
