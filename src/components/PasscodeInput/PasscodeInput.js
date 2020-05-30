import React, { useState } from "react"
import styled from "styled-components"
import { useSelector, useDispatch } from "react-redux"
import { OutlinedInput, InputAdornment, IconButton } from "@material-ui/core/"
import Visibility from "@material-ui/icons/Visibility"
import VisibilityOff from "@material-ui/icons/VisibilityOff"
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
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

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
      <OutlinedInput
        id="outlined-adornment-amount"
        type={showPassword ? "text" : "password"}
        value={passcode}
        onChange={handleChange()}
        endAdornment={(
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        )}
      />
    </Container>
  )
}

export default PasscodeInput
