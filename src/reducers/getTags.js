const retrieveTags = (array) => {
  return array
}

const getTags = (state = {}, action) => {
  switch (action.type) {
    case "GET_TAGS":
      return retrieveTags(action.payload)
    default:
      return state
  }
}

export default getTags
