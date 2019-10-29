import React from "react"
import locn from "../images/icons/locn.svg"
import dateIcon from "../images/icons/date.svg"

const Talk = ({ conf, talkTitle, venue, date, area, website }) => {
  return (
    <div className="talk">
      <h2>{talkTitle}</h2>
      <h3>{conf}</h3>
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
        <a href={website} target="_blank" rel="noopener noreferrer">
          {website}
        </a>
      </span>
    </div>
  )
}

export default Talk
