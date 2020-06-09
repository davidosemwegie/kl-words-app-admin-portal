export const auth = (code) => {
  return {
    type: "AUTH",
    payload: code,
  }
}

export const getTags = (array) => {
  return {
    type: "GET_TAGS",
    payload: array,
  }
}

export const emptyTable = (isEmpty) => {
  return {
    type: "EMPTY_TABLE",
    payload: isEmpty,
  }
}
