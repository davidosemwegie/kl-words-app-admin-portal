import React from "react"
import Header from "../Header"
import AddVerseForm from "../AddVerseForm"
import VerseForm from "../VerseForm"

function Dashboard() {
  return (
    <div>
      <Header title="Hi Tobi! This is the word app admin console" />
      {/* <AddVerseForm /> */}
      <VerseForm />
    </div>
  )
}

export default Dashboard
