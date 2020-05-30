import React, { useState, useEffect } from "react"
import Header from "../Header"
import AddVerseForm from "../AddVerseForm"

function Dashboard() {
  return (
    <div>
      <Header title="Hi Tobi! This is the word app admin console" />
      <AddVerseForm />
    </div>
  )
}

export default Dashboard
