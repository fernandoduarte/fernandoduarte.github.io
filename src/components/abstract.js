import React from "react"
import abstractStyles from "./abstract.module.css"

const Abstract = props => (
    <div className={abstractStyles.abstract}>{props.children}</div>
  )

export default Abstract;