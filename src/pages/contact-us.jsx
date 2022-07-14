import React from "react"
import styled, { css } from "styled-components"
import { graphql } from "gatsby"

import Layout from "../layout/Layout"
import Form from "../components/form/Form"
import respond from "../styles/abstracts/mediaqueries"

const StyledContactUs = styled.main`
  background-color: var(--background-dark);

  h1 {
    text-align: center;
    font-weight: 700;
    text-transform: uppercase;
    margin: 0;
  }

  p {
    text-align: center;
    margin-bottom: var(--big-gutter);
  }

  .form-container {
    padding-top: 13rem;
    padding-bottom: 10rem;
    max-width: 50%;

    ${respond(
      924,
      css`
        max-width: 80%;
        padding-bottom: 0;
      `
    )}
    ${respond(
      834,
      css`
        max-width: 70%;
        padding-bottom: 0;
      `
    )}
    ${respond(
      500,
      css`
        max-width: 95%;
        padding-bottom: 0;
      `
    )}
    ${respond(
      "big-desktop",
      css`
        max-width: 45%;
      `
    )}
  }
`

const ContactUs = ({
  data: {
    servicesData: { servicesData },
  },
}) => {
  //console.log(servicesData)
  const services = servicesData.map(({ data: { Heading } }) => {
    return Heading
  })

  return (
    <Layout page="Contact Us">
      <StyledContactUs>
        <div className="container form-container">
          <h1>Contact us</h1>
          <p>Our friendly staff will get back at you as soon as possible!</p>
          <Form cta="Submit" serviceItems={services} />
        </div>
      </StyledContactUs>
    </Layout>
  )
}

export const query = graphql`
  {
    servicesData: allAirtable(
      filter: { data: { Block: { eq: "CardsItem" } }, table: { eq: "Home" } }
    ) {
      servicesData: nodes {
        data {
          Heading
        }
      }
    }
  }
`

export default ContactUs
