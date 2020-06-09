const emptyTable = (state = false, action) => {
  switch (action.type) {
    case "EMPTY_TABLE":
      return action.payload
    default:
      return state
  }
}

export default emptyTable
