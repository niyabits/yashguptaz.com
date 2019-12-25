import React from "react"
import Layout from "../components/layout"
import Talk from "../components/talk"
import SEO from "../components/seo"
import "../../content/assets/talks.css"

const talks = () => {
  return (
    <div>
      <Layout>
        <div style={{ maxWidth: 500 }}>
          <SEO title="Talks" />
          <div id="talk-container">
            <h1 style={{ color: "rgb(108, 99, 255)" }}>Talks</h1>
            <Talk
              conf="React India 2019"
              talkTitle="React for Teenagers."
              venue="Goa, India"
              date="27-Sep-2019"
              area="Main"
              website="https://reactindia.io"
            />
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default talks
