import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Title = styled.h1`
  color: black;
  font-weight: 700;
`

function PageTitle({ title }) {
  return <Title>{title}</Title>
}

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
}

export default PageTitle
