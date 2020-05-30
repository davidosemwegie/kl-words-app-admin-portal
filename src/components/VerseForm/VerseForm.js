import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { makeStyles } from "@material-ui/core/styles"
import OutlinedInput from "@material-ui/core/OutlinedInput"
import InputLabel from "@material-ui/core/InputLabel"
import FormControl from "@material-ui/core/FormControl"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import { useForm } from "react-hook-form"

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

function VerseForm() {
  const { register, handleSubmit, errors } = useForm()

  const classes = useStyles()
  const [errorMessage, setErrorMessage] = useState("")
  const [successMessage, setSuccessMessage] = useState("")

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className={classes.root}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ErrorMessage>{errorMessage}</ErrorMessage>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="outlined-adornment-amount">Body</InputLabel>
              <OutlinedInput
                required
                id="outlined-adornment-amount"
                labelWidth={40}
                name="body"
                inputRef={register({
                  required: true,
                })}
              />
            </FormControl>
          </Grid>

          <Grid item xs={6}>
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="outlined-adornment-amount">Reference</InputLabel>
              <OutlinedInput
                required
                id="outlined-adornment-amount"
                labelWidth={40}
                name="reference"
                inputRef={register({
                  required: true,
                })}
              />
            </FormControl>
          </Grid>

          <Grid item xs={6}>
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="outlined-adornment-amount">Tags</InputLabel>
              <OutlinedInput
                required
                id="outlined-adornment-amount"
                labelWidth={40}
                name="tags"
                inputRef={register({
                  required: true,
                })}
              />
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <Button type="submit" variant="contained">
              Add Verse
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  )
}

export default VerseForm
