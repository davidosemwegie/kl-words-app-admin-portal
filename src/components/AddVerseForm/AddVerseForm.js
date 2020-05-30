import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { makeStyles } from "@material-ui/core/styles"
import clsx from "clsx"
import IconButton from "@material-ui/core/IconButton"
import Input from "@material-ui/core/Input"
import FilledInput from "@material-ui/core/FilledInput"
import OutlinedInput from "@material-ui/core/OutlinedInput"
import InputLabel from "@material-ui/core/InputLabel"
import InputAdornment from "@material-ui/core/InputAdornment"
import FormHelperText from "@material-ui/core/FormHelperText"
import FormControl from "@material-ui/core/FormControl"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Visibility from "@material-ui/icons/Visibility"
import VisibilityOff from "@material-ui/icons/VisibilityOff"
import Grid from "@material-ui/core/Grid"

/* 
body - text input
reference - input
tags - 
*/
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "25ch",
  },
}))

function AddVerseForm() {
  const classes = useStyles()
  const [values, setValues] = React.useState({
    body: "",
    reference: "",
    tags: "",
  })

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value })

    console.log(prop, event.target.value)
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="outlined-adornment-amount">Body</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              value={values.body}
              onChange={handleChange("body")}
              labelWidth={40}
            />
          </FormControl>
        </Grid>

        <Grid item xs={6}>
          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="outlined-adornment-amount">Reference</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              value={values.reference}
              onChange={handleChange("reference")}
              labelWidth={40}
            />
          </FormControl>
        </Grid>

        <Grid item xs={6}>
          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="outlined-adornment-amount">Tags</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              value={values.tags}
              onChange={handleChange("tags")}
              labelWidth={40}
            />
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <Button variant="contained">Add Verse</Button>
        </Grid>
      </Grid>
    </div>
  )
}

export default AddVerseForm
