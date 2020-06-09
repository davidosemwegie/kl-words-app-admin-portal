import React, { useState, useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import { Typography } from "@material-ui/core"
import gql from "graphql-tag"
import { Query } from "react-apollo"
import { useSelector, useDispatch } from "react-redux"
import { getTags } from "../../actions"
import tablePic from "../../assets/emptyTable.svg"
import Tag from "./components/Tag"

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: "650px",
  },
  image: {
    width: theme.spacing(40),
    height: theme.spacing(40),
    margin: "0 auto",
  },
  bold: {
    fontWeight: theme.typography.fontWeightBold,
  },
  regular: {
    color: theme.palette.grey["500"],
  },
}))

const GET_VERSES = gql`
  {
    verses {
      id
      body
      reference
      tags {
        id
      }
    }
  }
`
const GET_VERSES_FROM_TAG = gql`
  query VerseFromTag($id: ID!) {
    tags(where: { id: $id }) {
      verses {
        id
        body
        reference
        tags {
          id
        }
      }
    }
  }
`

const CellText = ({ bold, title }) => {
  const classes = useStyles()
  return (
    <Typography variant="p" className={bold ? classes.bold : classes.regular}>
      {title}
    </Typography>
  )
}

const EmptyTable = () => {
  const classes = useStyles()
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <img alt="Empty Projects Image" src={tablePic} className={classes.image} />
      <CellText title="You have 0 Verses" />
    </div>
  )
}

const VerseTable = () => {
  const classes = useStyles()
  const [tagId, setTagId] = useState("love")
  const [isTableEmpty, setIsTableEmpty] = useState(false)

  // REDUX
  const dispatch = useDispatch()
  const storeTags = useSelector((state) => state.getTags)
  let dbTags = []

  dbTags = storeTags.tags

  const getTagVerses = (id) => {
    setTagId(id)
    setIsTableEmpty(false)
  }

  return (
    <div>
      {typeof dbTags !== "undefined" &&
        dbTags.map((tag) => <Tag title={tag.id} onClick={() => getTagVerses(tag.id)} />)}
      {/* <button type="button" onClick={() => getTagVerses("love")}>
        love
      </button>
      <button type="button" onClick={() => getTagVerses("faith")}>
        faith
      </button>
      <button type="button" onClick={() => getTagVerses("money")}>
        money
      </button>
      <button type="button" onClick={() => getTagVerses(0)}>
        All
      </button> */}

      {isTableEmpty ? (
        <div>
          <EmptyTable />
        </div>
      ) : (
        <TableContainer
          style={{
            margin: "24px auto",
          }}
        >
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Body</TableCell>
                <TableCell align="left">Reference</TableCell>
                <TableCell align="left">Tags</TableCell>
              </TableRow>
            </TableHead>
            {tagId !== 0 ? (
              <Query query={GET_VERSES_FROM_TAG} variables={{ id: tagId }}>
                {({ loading, error, data }) => {
                  if (loading) return null
                  if (error) return `Error! ${error}`

                  if (!loading && data.tags[0].verses.length === 0) {
                    setIsTableEmpty(true)
                  }

                  return (
                    <TableBody>
                      {data.tags[0].verses.map((row) => (
                        <TableRow key={row.id}>
                          <TableCell align="left">{row.body}</TableCell>
                          <TableCell align="left">{row.reference}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  )
                }}
              </Query>
            ) : (
              <Query query={GET_VERSES}>
                {({ loading, error, data }) => {
                  if (loading) return null
                  if (error) return `Error! ${error}`

                  if (!loading && data.verses.length === 0) {
                    setIsTableEmpty(true)
                  }

                  return (
                    <TableBody>
                      {data.verses.map((row) => (
                        <TableRow key={row.id}>
                          <TableCell align="left">{row.body}</TableCell>
                          <TableCell align="left">{row.reference}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  )
                }}
              </Query>
            )}
          </Table>
        </TableContainer>
      )}
    </div>
  )
}

export default VerseTable
