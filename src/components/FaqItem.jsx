import React from "react"
import styled from "styled-components"
import ReactMarkdown from "react-markdown"

const StyledFaqItem = styled.article`
  border: 1px solid var(--grey500);
  padding: 4rem 2rem;
  min-height: 50rem;

  h5 {
    text-align: center;
    text-transform: uppercase;
    line-height: 1.3;
    font-size: 2.5rem;
    color: #666666;
    font-weight: 500;
    height: 7rem;
    margin-bottom: var(--gutter);
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
