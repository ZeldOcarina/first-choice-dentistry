import { Link } from "gatsby"
import React, { useState, useEffect } from "react"
import styled, { css } from "styled-components"
import respond from "../styles/abstracts/mediaqueries"
import BackgroundImage from "./BackgroundImage"

const StyledCard = styled.article`
  background-color: var(--white);
  padding: 8rem 4rem ${({ link }) => (link ? "10rem" : "8rem")} 4rem;
  position: relative;
  color: var(--white);
  font-weight: 300;
  min-height: 68rem;

  ${respond(
    "big-desktop",
    css`
      padding: 10rem 6rem 12rem 6rem;
      padding: 10rem 6rem ${({ link }) => (link ? "12rem" : "10rem")} 4rem;
    `
  )}

  h5 {
    color: var(--white);
    text-transform: uppercase;
    font-size: var(--title-font-size);
    letter-spacing: 1px;
    text-align: center;
    margin-bottom: var(--gutter);
    line-height: 1.4;
    height: 7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-family: var(--title-font);

    ${respond(
      "big-desktop",
      css`
        font-size: 3.2rem;
      `
    )}
  }

  .link {
    color: var(--color-secondary);
    text-transform: uppercase;
    display: block;
    position: absolute;
    bottom: 4rem;
    right: 5rem;

    ${respond(
      "phone-port",
      css`
        right: 7rem;
      `
    )}
    ${respond(
      "big-desktop",
      css`
        right: 8rem;
      `
    )}
  }

  .text-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
    width: 85%;
  }
`

const Card = ({ copy, heading, image, alternativeText, linkLabel, link }) => {
  const [alphaValue, setAlphaValue] = useState(0)
  const [timer, setTimer] = useState(null)

  useEffect(() => {
    if (alphaValue >= 0.6) {
      clearInterval(timer)
      setTimer(null)
    }
    return () => {}
  }, [alphaValue])

  const handleMouseEnter = () => {
    const timer = setInterval(() => {
      setAlphaValue(prev => prev + 0.025)
    }, 10)
    setTimer(timer)
  }
  const handleMouseLeave = () => {
    setAlphaValue(0)
    clearInterval(timer)
    setTimer(null)
  }

  return (
    <StyledCard
      link={link}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="text-container">
        <h5>{heading}</h5>
        {alphaValue >= 0.6 && <p>{copy}</p>}
      </div>

      <BackgroundImage
        image={image}
        alt={alternativeText}
        isPlainImg
        overlay={[
          `rgba(39, 55, 112, ${alphaValue})`,
          `rgba(0, 14, 62, ${alphaValue})`,
        ]}
      />

      {link && (
        <Link className="link" to={link}>
          {linkLabel}
        </Link>
      )}
    </StyledCard>
  )
}

export default Card
