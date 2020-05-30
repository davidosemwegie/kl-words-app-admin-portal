const codeMatch = (code) => {
  if (code === process.env.REACT_APP_PASSCODE) {
    return true
  }
  return false
}

const auth = (state = false, action) => {
  switch (action.type) {
    case "AUTH":
      return codeMatch(action.payload)
    default:
      return state
  }
}

export default auth
