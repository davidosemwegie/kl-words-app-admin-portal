import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  button: {
    border: "none",
    color: "white",
    padding: "0px 20px",
    margin: "10px",
    borderRadius: "20px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
  },
  selected: {
    border: "none",
    color: "white",
    padding: "0px 20px",
    margin: "10px",
    borderRadius: "20px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
    backgroundColor: "#F8C8B0",
  },
  text: {
    fontWeight: "700",
    color: "black",
  },
}))

const Tag = ({ title, onClick, selected }) => {
  const classes = useStyles()
  return (
    <button
      type="button"
      onClick={onClick}
      className={selected ? classes.selected : classes.button}
    >
      <p className={classes.text}>{title}</p>
    </button>
  )
}

export default Tag
