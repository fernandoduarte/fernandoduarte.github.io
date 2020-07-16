import React from "react"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import paperStyles from "./paper.module.css"

const Paper = props => (
    <div id={paperStyles.paper}>
      {/* Link to an external page, out of website bounds */}
      <OutboundLink href={props.href} target="_blank" rel="noopener noreferrer">
          <span className={`${paperStyles.title} ${paperStyles.underline}`}>{props.title}</span>
      </OutboundLink>
      {/* Additional paper information */}
      <span className={paperStyles.citations}>&nbsp;{props.citations}</span>
      <span className={paperStyles.publisher}><i>{props.publisher}</i></span>
    </div>
  )

export default Paper;