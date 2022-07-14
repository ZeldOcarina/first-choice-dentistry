import React from "react"
import styled, { css } from "styled-components"
import respond from "../styles/abstracts/mediaqueries"

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

  ${respond(
    1700,
    css`
      ${({ columnWidth }) => {
        return columnWidth
          ? css`
              grid-template-columns: repeat(2, ${columnWidth});
            `
          : css`
              grid-template-columns: repeat(2, 1fr);
            `
      }}
    `
  )}
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
