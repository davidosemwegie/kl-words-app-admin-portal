import { combineReducers } from "redux"
import auth from "./auth"
import getTags from "./getTags"

const allReducers = combineReducers({
  auth,
  getTags,
})

export default allReducers
