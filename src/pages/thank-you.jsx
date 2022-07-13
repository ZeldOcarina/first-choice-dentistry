import React, { useContext } from "react"
import styled, { css } from "styled-components"

import respond from "../styles/abstracts/mediaqueries"

//import backgroundImage from "../images/hero.png"

import AppContext from "../context/AppContext"

import Layout from "../layout/Layout"
import Seo from "../components/Seo"

const StyledThankYou = styled.main`
  .thank-you-container {
    background-image: linear-gradient(
      to right,
      rgba(43, 57, 144, 0.73),
      rgba(43, 57, 144, 0.73)
    );

    padding: 0;
    margin: 0;
    background-size: cover;
    background-position: center;

    .container {
      min-height: 88vh;
      display: flex;
      justify-content: center;
      flex-direction: column;

      ${respond(
        "phone-port",
        css`
          padding: var(--section-gutter) 0;
          max-width: 95%;
        `
      )}
    }

    h1 {
      z-index: 10;
      text-transform: uppercase;
      color: var(--white);
      text-align: center;
      font-weight: 300;
    }

    p {
      font-size: 2.3rem;
      text-align: center;
      margin: 0.5rem auto;
      font-weight: 200;
      color: var(--white);
    }
  }
`

const ThankYou = () => {
  return (
    <Layout>
      <Seo title={`NCUC | Thank You`} />
      <StyledThankYou>
        <div className="thank-you-container">
          <div className="container">
            <h1>
              Thank you for contacting
              <br />
              Website name!
            </h1>
            <p>
              We got your request and we will get back to you as soon as soon as
              possible.
            </p>
          </div>
        </div>
      </StyledThankYou>
    </Layout>
  )
}

export default ThankYou
