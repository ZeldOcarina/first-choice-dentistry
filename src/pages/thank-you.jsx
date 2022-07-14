import React from "react"
import styled, { css } from "styled-components"
import { graphql } from "gatsby"

import respond from "../styles/abstracts/mediaqueries"
import Layout from "../layout/Layout"
import BackgroundImage from "../components/BackgroundImage"

import { hexToRGB } from "../helpers/helpers"
import { Colors } from "../styles/abstracts/abstracts"

const StyledThankYou = styled.main`
  .thank-you-container {
    padding: 0;
    margin: 0;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;

    .container {
      min-height: 100vh;
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
      font-weight: 700;
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

const ThankYou = ({
  data: {
    businessNameData: { businessNameData },
    bgImageData: { bgImageData },
  },
}) => {
  return (
    <Layout page="Thank You">
      <StyledThankYou>
        <div className="thank-you-container">
          <div className="container">
            <h1>
              Thank you for contacting
              <br />
              {businessNameData.Value}
            </h1>
            <p>
              We got your request and we will get back to you as soon as soon as
              possible.
            </p>
          </div>
          <BackgroundImage
            image={bgImageData.Media.localFiles[0].publicURL}
            isPlainImg
            overlay={[
              hexToRGB(Colors.colorPrimary, 0.7),
              hexToRGB(Colors.colorSecondary, 0.4),
            ]}
          />
        </div>
      </StyledThankYou>
    </Layout>
  )
}

export const query = graphql`
  {
    businessNameData: airtable(
      table: { eq: "Config" }
      data: { Label: { eq: "Business Name" } }
    ) {
      businessNameData: data {
        Value
      }
    }
    bgImageData: airtable(
      table: { eq: "Home" }
      data: { Block: { eq: "Hero" } }
    ) {
      bgImageData: data {
        Media {
          localFiles {
            publicURL
          }
        }
      }
    }
  }
`

export default ThankYou
