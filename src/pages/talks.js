import React from "react"
import Layout from "../components/layout"
import TalkImage from "../images/talk.svg"
import Talk from "../components/talk"

const talks = () => {
  return (
    <>
      <Layout>
        <img
          src={TalkImage}
          alt="Confrence speaker"
          style={{ margin: "36px 0 48px 0" }}
        />
        <div id="talk-container">
          <h1>Talks</h1>
          <Talk
            conf="React India 2019"
            talkTitle="React for Teenagers."
            venue="Goa, India"
            date="27-Sep-2019"
            area="Main"
            website="https://reactindia.io"
          />
        </div>
      </Layout>
    </>
  )
}

export default talks
