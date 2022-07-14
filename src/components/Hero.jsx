import React from "react"
import styled, { css } from "styled-components"
import BackgroundImage from "../components/BackgroundImage"
import respond from "../styles/abstracts/mediaqueries"

import downArrow from "../images/icons/down-arrow.svg"

const StyledHero = styled.header`
  min-height: 100vh;
  display: grid;
  align-items: center;
  justify-items: center;

  .text-content {
    position: relative;
    z-index: 100;
    text-align: center;
    max-width: 100%;

    ${respond(
      500,
      css`
        max-width: 90%;
      `
    )}

    h1,
    h2 {
      color: var(--white);
    }

    h1 {
      font-size: 8rem;
      letter-spacing: 5px;
      text-transform: uppercase;
      margin-bottom: 1rem;
      font-weight: bold;
      line-height: 1.4;

      ${respond(
        926,
        css`
          font-size: 5rem;
          margin-bottom: 0;
        `
      )};
      ${respond(
        500,
        css`
          margin-bottom: 2rem;
        `
      )};
    }

    h2 {
      font-family: var(--body-font);
      color: #cecece;
      margin: 0 auto;

      ${respond(
        926,
        css`
          font-size: 2.6rem;
        `
      )}
    }

    .down-arrow {
      margin-top: var(--big-gutter);
      cursor: pointer;

      ${respond(
        926,
        css`
          width: 5rem;
        `
      )}
    }
  }
`

const Hero = ({ Media, SuperHeading, Heading, AlternativeText }) => {
  return (
    <StyledHero>
      <div className="text-content">
        <h1>{SuperHeading}</h1>
        <h2>{Heading}</h2>
        <a href="#services">
          <img src={downArrow} alt="Scroll down" className="down-arrow" />
        </a>
      </div>

      <BackgroundImage
        image={Media.localFiles[0].publicURL}
        alt={AlternativeText}
        isPlainImg
        overlay={"rgba(0, 0, 0, 0.2)"}
      />
    </StyledHero>
  )
}

export default Hero
