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
import { useMutation, useQuery } from "@apollo/react-hooks"
import { useSelector, useDispatch } from "react-redux"
import { getTags } from "../../actions"
import { NEW_VERSE, ADD_EXISTING_TAG, ADD_NEW_TAG, GET_TAGS } from "./queries"

const ErrorMessage = styled.h4`
  color: red;
`
const SuccessMessage = styled.h4`
  color: green;
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
  // REDUX
  const dispatch = useDispatch()
  const storeTags = useSelector((state) => state.getTags)
  const { loading, error, data } = useQuery(GET_TAGS)
  // dispatch(getTags(loading ? null : data))

  const dbTags = []
  if (!loading) {
    dispatch(getTags(loading ? null : data))

    if (typeof storeTags.tags !== "undefined") {
      storeTags.tags.forEach((tag) => dbTags.push(tag.id))
    }
  }

  // FORM
  const { register, handleSubmit, errors, reset } = useForm()

  const classes = useStyles()

  // Queries
  const [newVerse] = useMutation(NEW_VERSE)
  const [addNewTag] = useMutation(ADD_NEW_TAG)
  const [addExistingTag] = useMutation(ADD_EXISTING_TAG)

  // STATE
  const [errorMessage, setErrorMessage] = useState("")
  const [successMessage, setSuccessMessage] = useState("")
  // const [newVerseId, setNewVerseId] = useState("")

  const onFormSuccess = () => {
    setSuccessMessage("The new verse has been added!")

    reset({
      body: "",
      reference: "",
      tags: "",
    })
  }

  // eslint-disable-next-line no-shadow
  const onSubmit = (data) => {
    const { body, reference, tags } = data

    // Step 1: run mutation
    // Step 2: get verse ID - done
    // Step 3: loop through each tag, if in dbTags then do create query, if not the create the tag

    let newVerseId = ""

    newVerse({
      variables: {
        body,
        reference,
      },
    }).then((res) => {
      newVerseId = res.data.createVerse.id

      const tagsArray = tags.toLowerCase().split(" / ")

      tagsArray.forEach((tag) => {
        if (dbTags.indexOf(tag) === -1) {
          // create new tag
          addNewTag({
            variables: {
              id: newVerseId,
              tag,
            },
          })
        } else {
          // add existing tag
          addExistingTag({
            variables: {
              id: newVerseId,
              tag,
            },
          })
        }
      })
    })

    onFormSuccess()
  }

  return (
    <div className={classes.root}>
      {storeTags.length === 0 ? (
        <h1>Loading....</h1>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <ErrorMessage>{errorMessage}</ErrorMessage>
          <SuccessMessage>{successMessage}</SuccessMessage>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="outlined-adornment-amount">Body</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  labelWidth={40}
                  name="body"
                  inputRef={register({
                    required: true,
                  })}
                  onFocus={() => setSuccessMessage("")}
                />
              </FormControl>
            </Grid>

            <Grid item xs={6}>
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="outlined-adornment-amount">Reference</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  labelWidth={80}
                  name="reference"
                  inputRef={register({
                    required: true,
                  })}
                  onFocus={() => setSuccessMessage("")}
                />
              </FormControl>
            </Grid>

            <Grid item xs={6}>
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="outlined-adornment-amount">Tags</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  labelWidth={40}
                  name="tags"
                  inputRef={register({
                    required: true,
                  })}
                  onFocus={() => setSuccessMessage("")}
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
      )}
    </div>
  )
}

export default VerseForm
