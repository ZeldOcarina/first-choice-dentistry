import React from "react"
import styled from "styled-components"
import respond from "../styles/abstracts/mediaqueries"
import { css } from "styled-components"

const StyledCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 500px);
  max-width: 100%;
  margin: 0 auto;
  column-gap: ${({ columnGap }) =>
    columnGap ? columnGap : css`var(--gutter)`};
  row-gap: ${({ rowGap }) => (rowGap ? rowGap : css`8rem`)};
  justify-content: center;

  ${respond(
    "phone-port",
    css`
      grid-template-columns: repeat(auto-fit, 400px);
    `
  )}
  ${respond(
    "iphone-8-plus",
    css`
      grid-template-columns: 100%;
    `
  )}
  ${respond(
    "big-desktop",
    css`
      grid-template-columns: repeat(auto-fit, 650px);
    `
  )}
`

const CardsContainer = ({ children, rowGap, columnGap }) => {
  return (
    <StyledCardsContainer rowGap={rowGap} columnGap={columnGap}>
      {children}
    </StyledCardsContainer>
  )
}

export default CardsContainer
