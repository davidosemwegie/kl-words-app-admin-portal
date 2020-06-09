import { combineReducers } from "redux"
import auth from "./auth"
import getTags from "./getTags"
import emptyTable from "./emptyTable"

const allReducers = combineReducers({
  auth,
  getTags,
  emptyTable,
})

export default allReducers
