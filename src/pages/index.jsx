import React from "react"
import styled from "styled-components"
//import { graphql } from "gatsby"

import Layout from "../layout/Layout"
import Seo from "../components/Seo"
//import Hero from "../sections/home/Hero"

const StyledIndex = styled.main`
  h1 {
    text-align: center;
  }
`

const IndexPage = (/*{ data }*/) => {
  return (
    /*<Layout>*/
    // <Seo title="Airtable Gatsby Starter" />
    <StyledIndex>
      <div className="container text-center">
        <h1 className="text-center">
          HELLO WORLD FROM AIRTABLE GATSBY STARTER!
        </h1>
      </div>
    </StyledIndex>
    /*</Layout>*/
  )
}

export default IndexPage
