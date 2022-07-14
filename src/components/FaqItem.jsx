import React from "react"
import styled, { css } from "styled-components"
import ReactMarkdown from "react-markdown"
import respond from "../styles/abstracts/mediaqueries"

const StyledFaqItem = styled.article`
  border: 1px solid var(--grey500);
  padding: 4rem 3.5rem;
  min-height: 55rem;
  max-width: 55rem;

  h5 {
    text-align: center;
    text-transform: uppercase;
    line-height: 1.3;
    font-size: var(--title-font-size);
    font-family: var(--title-font);
    color: #666666;
    font-weight: 700;
    height: 9rem;
    margin-bottom: var(--gutter);

    ${(respond(500),
    css`
      height: 12rem;
    `)}
  }
`

const FaqItem = ({ question, answer }) => {
  return (
    <StyledFaqItem>
      <h5>{question}</h5>
      <ReactMarkdown>{answer}</ReactMarkdown>
    </StyledFaqItem>
  )
}

export default FaqItem
