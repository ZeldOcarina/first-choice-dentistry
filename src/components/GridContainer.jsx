import React from "react"
import styled from "styled-components"

const StyledGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(${({ columnWidth }) => columnWidth || "500px"}, 1fr)
  );
  justify-items: center;
  justify-content: center;
  max-width: 70%;
  margin: 0 auto;
  row-gap: ${({ rowGap }) => (rowGap || rowGap === 0 ? rowGap : "2rem")};
  column-gap: ${({ columnGap }) =>
    columnGap || columnGap === 0 ? columnGap : "2rem"};
`

const GridContainer = ({ children, rowGap, columnGap, columnWidth }) => {
  return (
    <StyledGridContainer
      rowGap={rowGap}
      columnGap={columnGap}
      columnWidth={columnWidth}
    >
      {children}
    </StyledGridContainer>
  )
}

export default GridContainer
