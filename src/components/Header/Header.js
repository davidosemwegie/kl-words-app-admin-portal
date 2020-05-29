/* eslint-disable react/jsx-props-no-spreading */
import React from "react"
// import PropTypes from "prop-types"
import styled from "styled-components"

import PageTitle from "./PageTitle"

const Container = styled.div`
  margin: 30px 60px;
  height: 80px;
  display: flexbox;
  align-items: center;
`

function Header({ ...rest }) {
  return (
    <Container>
      <PageTitle {...rest} />
    </Container>
  )
}

export default Header
