import React from "react"
import "./App.css"
import { useSelector } from "react-redux"
import AddVerseForm from "../AddVerseForm"
import { auth } from "../../actions"

import Header from "../Header"
import PasscodeInput from "../PasscodeInput"

function App() {
  const loggedIn = useSelector((state) => state.auth)
  return (
    <div>
      <Header title=" Hi Tobi, this is the Word App Admin Console" />
      {loggedIn ? <AddVerseForm /> : <PasscodeInput />}
    </div>
  )
}

export default App
