import React from "react"
import styled from "styled-components"
import Header from "../Header"
import AddVerseForm from "../AddVerseForm"
import VerseForm from "../VerseForm"

const Container = styled.div`
  margin: 0 auto;
  display: grid;
  flex-direction: row;
  justify-content: center;
`

function Dashboard() {
  return (
    <Container>
      <Header title="Hi Tobi! This is the word app admin console" />
      <VerseForm />
    </Container>
  )
}

export default Dashboard
