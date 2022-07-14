import React from "react"
import styled from "styled-components"
import FaqItem from "./FaqItem"

import IntroSection from "./IntroSection"
import GridContainer from "./GridContainer"

const StyledFaqs = styled.section`
  background-color: var(--background-dark);
  ${({ noPaddingTop }) => {
    return noPaddingTop && "padding-top: 0;"
  }}
`

function Faqs({ faqs, superheading, heading, subheading, noPaddingTop }) {
  return (
    <StyledFaqs noPaddingTop={noPaddingTop} id="faq">
      <>
        <div className="container">
          <IntroSection
            superheading={superheading}
            heading={heading}
            subheading={subheading}
            noPaddingTop={noPaddingTop}
          ></IntroSection>
        </div>
        <GridContainer rowGap={0} columnGap={0}>
          {faqs.map(({ id, data: { Heading: question, Copy: answer } }) => (
            <FaqItem {...{ question, answer }} key={id} />
          ))}
        </GridContainer>
      </>
    </StyledFaqs>
  )
}

export default Faqs
