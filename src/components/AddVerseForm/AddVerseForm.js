import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { makeStyles } from "@material-ui/core/styles"
import OutlinedInput from "@material-ui/core/OutlinedInput"
import InputLabel from "@material-ui/core/InputLabel"
import FormControl from "@material-ui/core/FormControl"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"

const ErrorMessage = styled.h4`
  color: red;
`

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
  const [errorMessage, setErrorMessage] = useState("")
  const [successMessage, setSuccessMessage] = useState("")

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value })

    console.log(prop, event.target.value)
  }

  const addVerse = (prop) => {
    const { body, reference, tags } = values

    if (body === "" || reference === "" || tags === "") {
      setErrorMessage("Please make sure that all the fields have been filled out")
    } else {
      setErrorMessage("")
      setSuccessMessage("Verse has been Added")
      setValues({ ...values, [prop]: "" })
    }
  }

  return (
    <div className={classes.root}>
      <ErrorMessage>{errorMessage}</ErrorMessage>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="outlined-adornment-amount">Body</InputLabel>
            <OutlinedInput
              required
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
              required
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
              required
              id="outlined-adornment-amount"
              value={values.tags}
              onChange={handleChange("tags")}
              labelWidth={40}
            />
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <Button onClick={() => addVerse()} variant="contained">
            Add Verse
          </Button>
        </Grid>
      </Grid>
    </div>
  )
}

export default AddVerseForm
