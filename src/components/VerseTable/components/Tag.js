import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({}))

const Tag = ({ title, onClick }) => {
  const classes = useStyles()
  return (
    <button type="button" onClick={onClick}>
      <p>{title}</p>
    </button>
  )
}

export default Tag
