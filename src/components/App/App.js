import React from "react"
import "./App.css"
import { useSelector } from "react-redux"

import PasscodeInput from "../PasscodeInput"
import Dashboard from "../Dashboard"

// function App() {
//   const loggedIn = useSelector((state) => state.auth)
//   return <div>{loggedIn ? <Dashboard /> : <PasscodeInput />}</div>
// }

function App() {
  const loggedIn = useSelector((state) => state.auth)
  return <Dashboard />
}

export default App
