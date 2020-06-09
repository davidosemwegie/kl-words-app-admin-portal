import React, { useState } from "react"
import styled from "styled-components"
import gql from "graphql-tag"
import Header from "../Header"
import AddVerseForm from "../AddVerseForm"
import VerseForm from "../VerseForm"
import VerseTable from "../VerseTable"

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
      <VerseTable />
    </Container>
  )
}

export default Dashboard
