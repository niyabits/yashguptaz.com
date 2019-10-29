import React from "react"
import Input from "./input"

const Form = () => {
  return (
    <div>
      <form
        id="contactForm"
        action="https://docs.google.com/forms/d/e/1FAIpQLSeunm19bA7gkMFlXVUeje3S8XL9qTdR6Q4GtEM4qe1dblMAGw/formResponse?embedded=true"
      >
        <Input name="Name" type="text" placeholder="What can I call you?" />
        <Input name="Email" type="email" placeholder="Your email?" />
        <Input name="Subject" type="text" placeholder="What's the topic?" />
        <p className="full">
          <label>Message</label>
          <br />
          <textarea
            name="entry.197730249"
            rows="5"
            id="message"
            placeholder="Say what's in your mind..."
          ></textarea>
        </p>
        <div className="contact-btn">
          <button type="submit" value="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default Form
