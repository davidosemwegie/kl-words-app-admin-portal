const codeMatch = (code) => {
  if (code === 5555) {
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
