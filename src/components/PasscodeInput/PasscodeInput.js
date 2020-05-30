import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { useSelector, useDispatch } from "react-redux"
import { OutlinedInput } from "@material-ui/core/"
import { auth } from "../../actions"

const Container = styled.div`
  width: 200px;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
`
const Label = styled.h3``
const Title = styled.h1``

const ErrorLabel = styled.h4`
  color: red;
`

function PasscodeInput() {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector((state) => state.auth)

  const [passcode, setPasscode] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = () => (event) => {
    const userCode = event.target.value
    setPasscode(userCode)

    dispatch(auth(userCode))

    if (!isLoggedIn) {
      setErrorMessage("Wrong Password")
    }
  }

  return (
    <Container>
      <Title>Kingdom Living Words App Admin Console</Title>
      <Label>Enter the passcode</Label>
      <ErrorLabel>{errorMessage}</ErrorLabel>
      <OutlinedInput id="outlined-adornment-amount" value={passcode} onChange={handleChange()} />
    </Container>
  )
}

export default PasscodeInput
