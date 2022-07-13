import React from "react"
import styled from "styled-components"

const StyledGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  justify-items: center;
  justify-content: center;
  max-width: 70%;
  margin: 0 auto;
  row-gap: 2rem;
`

const GridContainer = ({ children }) => {
  return <StyledGridContainer>{children}</StyledGridContainer>
}

export default GridContainer
