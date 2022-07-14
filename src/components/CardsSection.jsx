import React from "react"
import styled, { css } from "styled-components"
import respond from "../styles/abstracts/mediaqueries"

import IntroSection from "./IntroSection"
import CardsContainer from "./CardsContainer"
import Card from "./Card"

const StyledCardsSection = styled.section`
  background-color: var(--background-dark);

  .container {
    margin-bottom: 10rem;

    ${respond(
      500,
      css`
        margin-bottom: 0;
      `
    )}
  }
`

const CardsSection = ({ superheading, heading, subheading, cards }) => {
  return (
    <StyledCardsSection id="services">
      <div className="container">
        <IntroSection
          superheading={superheading}
          heading={heading}
          subheading={subheading}
        />
      </div>
      <CardsContainer rowGap="0" columnGap="0">
        {cards.map(({ id, data }) => {
          return (
            <Card
              key={id}
              heading={data.Heading}
              copy={data.Copy}
              image={data.Media.localFiles[0].publicURL}
              alternativeText={data.AlternativeText}
            />
          )
        })}
      </CardsContainer>
    </StyledCardsSection>
  )
}

export default CardsSection
