import React from "react"
import styled, { css } from "styled-components"
import respond from "../styles/abstracts/mediaqueries"
import PropTypes from "prop-types"

const StyledIntroSection = styled.section`
  text-align: center;
  margin: 0 auto var(--section-gutter) auto;
  max-width: 93%;
  padding-bottom: ${({ padding }) => {
    return padding || padding === 0 ? `${padding}rem` : `var(--gutter)`
  }};
  ${({ noPaddingTop }) => noPaddingTop && "padding-top: 0;"}

  ${respond(
    "iphone-12-mini-land",
    css`
      margin-bottom: 3rem;
    `
  )}

  .superheading {
    color: var(--color-secondary);
    font-family: var(--body-font);
    text-transform: uppercase;
    text-align: center;
    font-size: var(--superheading-font-size);

    ${respond(
      1366,
      css`
        font-size: 3.5rem;
      `
    )}
    ${respond(
      1280,
      css`
        font-size: 3rem;
      `
    )}
    ${respond(
      "iphone-8-plus-land",
      css`
        font-size: 1.8rem;
      `
    )}
    ${respond(
      "phone-port",
      css`
        font-size: 1.8rem;
      `
    )}
    ${respond(
      "big-desktop",
      css`
        font-size: 3rem;
      `
    )}
  }

  .heading,
  .subheading {
    margin-left: auto;
    margin-right: auto;
    color: ${({ theme }) =>
      theme && theme === "light" ? css`var(--white)` : css`var(--grey500)`};
  }

  .heading {
    text-transform: uppercase;
    font-weight: 700;
    line-height: 1.5;
    font-size: var(--heading-font-size);

    margin: var(--gutter) auto;
    width: 85%;

    ${respond(
      1366,
      css`
        font-size: 4.5rem;
      `
    )}
    ${respond(
      1280,
      css`
        font-size: 4rem;
      `
    )}
    ${respond(
      "iphone-8-plus-land",
      css`
        font-size: 3rem;
      `
    )}
    ${respond(
      "iphone-12-mini-land",
      css`
        width: 95%;
        font-size: 2.8rem;
      `
    )}
    ${respond(
      "phone-port",
      css`
        width: 100%;
        font-size: 3.5rem;
        margin-top: 1rem;
      `
    )}
    ${respond(
      "big-desktop",
      css`
        font-size: 6rem;
      `
    )}
  }

  .subheading {
    font-weight: 400;
    font-size: var(--subheading-font-size);
    margin: 0 auto;
    text-align: left;
    width: 84%;

    ${respond(
      "iphone-12-mini-land",
      css`
        width: 90%;
        font-size: 1.4rem;
      `
    )}
    ${respond(
      "phone-port",
      css`
        font-size: 1.6rem;
      `
    )}
    ${respond(
      "big-desktop",
      css`
        font-size: 2.5rem;
      `
    )}
  }
`

const IntroSection = ({
  superheading,
  heading,
  subheading,
  padding,
  theme,
  noPaddingTop,
  className,
}) => {
  return (
    <StyledIntroSection
      padding={padding}
      theme={theme}
      noPaddingTop={noPaddingTop}
      className={className || ""}
    >
      {superheading && <h3 className="superheading">{superheading}</h3>}
      <h2 className="heading">{heading}</h2>
      <p className="subheading">{subheading}</p>
    </StyledIntroSection>
  )
}

IntroSection.propTypes = {
  superheading: PropTypes.string,
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string,
  padding: PropTypes.number,
  theme: PropTypes.string,
}

export default IntroSection
