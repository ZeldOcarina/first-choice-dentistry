import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import Layout from "../layout/Layout"
import IntroSection from "../components/IntroSection"
import CopySection from "../components/CopySection"

const StyledTermsOfUse = styled.main`
  .container {
    padding-bottom: 8rem;
  }
  h2 {
    color: var(--section-padding);
    margin-bottom: 0;
    margin-top: 10rem;
  }

  .intro {
    padding-top: 15rem;
  }
`

const TermsOfUse = ({
  data: {
    pageTitleData: { pageTitleData },
    textData: { textData },
  },
}) => {
  return (
    <StyledTermsOfUse>
      <Layout title={pageTitleData.Page_Title}>
        <div className="container">
          <IntroSection heading={textData.Heading} className="intro" />
          <CopySection columns={1}>{textData.Copy}</CopySection>
        </div>
      </Layout>
    </StyledTermsOfUse>
  )
}

export const query = graphql`
  query TermsOfUse {
    pageTitleData: airtable(
      table: { eq: "Sitemap" }
      data: { Permalink: { eq: "/terms-of-use/" } }
    ) {
      pageTitleData: data {
        Page_Title
      }
    }
    textData: airtable(
      table: { eq: "Terms of Use" }
      data: { Block: { eq: "Text" } }
    ) {
      textData: data {
        Copy
        Heading
      }
    }
  }
`

export default TermsOfUse
