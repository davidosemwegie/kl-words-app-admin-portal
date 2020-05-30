import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Title = styled.h1`
  color: black;
  font-weight: 700;
  font-size: 35px;

  @media (max-width: 640px) {
    font-size: 18px;
  }
`

function PageTitle({ title }) {
  return <Title>{title}</Title>
}

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
}

export default PageTitle
