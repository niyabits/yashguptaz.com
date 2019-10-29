import React from "react"
import Layout from "../components/layout"
import ConnectImg from "../images/contact.svg"
import Form from "../components/form/form"
import SEO from "../components/seo"

const Connect = () => {
  return (
    <Layout>
      <SEO title="Connect" />
      <img src={ConnectImg} alt="Connect with me" />
      <h1 style={{ color: "hsl(209,14%,45%)" }}>Connect</h1>
      <div className="contact">
        <Form />
      </div>
    </Layout>
  )
}

export default Connect
