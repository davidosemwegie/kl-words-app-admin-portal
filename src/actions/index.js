export const auth = (code) => {
  return {
    type: "AUTH",
    payload: code,
  }
}
