import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import { createStore } from "redux"
import { Provider } from "react-redux"
import { ApolloProvider } from "@apollo/react-hooks"
import ApolloClient from "apollo-boost"
import App from "./components/App"
import * as serviceWorker from "./serviceWorker"
import allReducers from "./reducers"

const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL_DEV,
})

const store = createStore(allReducers)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
