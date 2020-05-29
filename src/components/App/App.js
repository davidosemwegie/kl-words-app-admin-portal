import React from "react"
import "./App.css"

// Component Import
import Header from "../Header"
import AddVerseForm from "../AddVerseForm"

function App() {
  return (
    <div>
      <Header title=" Hi Tobi, this is the Word App Admin Console" />
      <AddVerseForm />
    </div>
  )
}

export default App
