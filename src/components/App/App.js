import React from "react"
import "./App.css"
import { useSelector } from "react-redux"
import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"
import styled from "styled-components"
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

const Container = styled.div`
  margin: 0 auto;
  height: 100%;
  width: 100%;
  position: absolute;
  display: grid;
  place-content: center center;
`

// function App() {
//   const loggedIn = useSelector((state) => state.auth)
//   return (
//     <div>
//       {loggedIn ? (
//         <Dashboard />
//       ) : (
//         <Container>
//           <PasscodeInput />
//         </Container>
//       )}
//     </div>
//   )
// }

function App() {
  const loggedIn = useSelector((state) => state.auth)
  const { loading, error, data } = useQuery(GET_VERSES)

  if (loading) return "Loading..."
  if (error) return `Error! ${error.message}`

  return (
    <div>
      <Dashboard />
      {data.verses.map((verse) => (
        <h2>{verse.body}</h2>
      ))}
    </div>
  )
}

export default App
