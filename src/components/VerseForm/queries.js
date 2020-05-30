// Mutation Query
import gql from "graphql-tag"

export const NEW_VERSE = gql`
  mutation newVerse($body: String!, $reference: String!) {
    createVerse(data: { body: $body, reference: $reference }) {
      id
      body
      reference
      tags {
        id
      }
    }
  }
`

export const ADD_EXISTING_TAG = gql`
  mutation AddExisistingTag($id: ID!, $tag: ID!) {
    updateVerse(where: { id: $id }, data: { tags: { connect: { id: $tag } } }) {
      id
      body
      reference
      tags {
        id
      }
    }
  }
`

export const ADD_NEW_TAG = gql`
  mutation AddNewTag($id: ID!, $tag: ID!) {
    updateVerse(where: { id: $id }, data: { tags: { create: { id: $tag } } }) {
      id
      body
      reference
      tags {
        id
      }
    }
  }
`
export const GET_TAGS = gql`
  {
    tags {
      id
    }
  }
`
