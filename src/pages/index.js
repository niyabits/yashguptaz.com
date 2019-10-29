import React from "react"

import Layout from "../components/layout"
import githubDev from "../images/github-developer.svg"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div id="home">
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
