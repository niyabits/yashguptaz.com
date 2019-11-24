import React from "react"
import locn from "../../content/assets/icons/locn.svg"
import dateIcon from "../../content/assets/icons/date.svg"
import "../../content/assets/talks.css"

const Talk = ({ conf, talkTitle, venue, date, area, website }) => {
  return (
    <div className="talk">
      <h2 style={{ fontSize: "1.6em" }}>{talkTitle}</h2>
      <h3 style={{ fontSize: "1.3em" }}>{conf}</h3>
      <div className="talk-info">
        <span>
          <img src={locn} width="18px" alt="location" />
          &nbsp; {venue}
        </span>
        <span>
          <img src={dateIcon} width="18px" alt="location" />
          &nbsp; {date}
        </span>
        <span>{area} Speaker</span>
      </div>
      <span className="website">
        <a
          href={website}
          className="secondary-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {website}
        </a>
      </span>
    </div>
  )
}

export default Talk
