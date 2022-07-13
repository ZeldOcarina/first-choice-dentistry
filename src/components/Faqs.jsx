import React from "react"
import styled from "styled-components"
import FaqItem from "./FaqItem"
import IntroSection from "./IntroSection"

const StyledFaqs = styled.section`
  background-color: var(--background-dark);
  ${({ noPaddingTop }) => {
    return noPaddingTop && "padding-top: 0;"
  }}

  .faqs-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    max-width: 80%;
    margin: 0 auto;
  }
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
        <div className="faqs-container">
          {faqs.map(({ id, data: { Heading: question, Copy: answer } }) => (
            <FaqItem {...{ question, answer }} key={id} />
          ))}
        </div>
      </>
    </StyledFaqs>
  )
}

export default Faqs
