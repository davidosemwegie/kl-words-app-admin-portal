import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { useSelector, useDispatch } from "react-redux"
import { OutlinedInput, InputLabel } from "@material-ui/core/"
import { auth } from "../../actions"

const Container = styled.div`
  width: 200px;
  justify-content: center;
  margin: 0 auto;
`
const Label = styled.h3`
  text-align: center;
`
const Title = styled.h1`
  text-align: center;
`

function PasscodeInput() {
  const [passcode, setPasscode] = useState("")

  const handleChange = () => (event) => {
    const userCode = event.target.value
    setPasscode(userCode)
    console.log(userCode)
  }

  return (
    <Container>
      <Title>Kingdom Living Words App Admin Console</Title>
      <Label>Enter the passcode</Label>
      <OutlinedInput id="outlined-adornment-amount" value={passcode} onChange={handleChange()} />
    </Container>
  )
}

export default PasscodeInput
