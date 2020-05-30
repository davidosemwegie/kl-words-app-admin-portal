import React from "react"
import "./App.css"
import { useSelector } from "react-redux"
import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"

import PasscodeInput from "../PasscodeInput"
import Dashboard from "../Dashboard"

const GET_VERSES = gql`
  {
    verses {
      id
      body
      reference
      tags {
        id
      }
    }
  }
`

function App() {
  const loggedIn = useSelector((state) => state.auth)
  return <div>{loggedIn ? <Dashboard /> : <PasscodeInput />}</div>
}

// function App() {
//   const loggedIn = useSelector((state) => state.auth)
//   const { loading, error, data } = useQuery(GET_VERSES)

//   if (loading) return "Loading..."
//   if (error) return `Error! ${error.message}`

//   return (
//     <div>
//       <Dashboard />
//       {data.verses.map((verse) => (
//         <h2>{verse.body}</h2>
//       ))}
//     </div>
//   )
// }

export default App
