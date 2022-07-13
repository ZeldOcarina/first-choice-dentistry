import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import Layout from "../layout/Layout"
import Seo from "../components/Seo"
import Hero from "../components/Hero"
import CardsSection from "../components/CardsSection"
import TextSection from "../components/TextSection"
import BeforeAndAfter from "../components/BeforeAndAfter"
import Faqs from "../components/Faqs"

const StyledIndex = styled.main`
  h1 {
    text-align: center;
    font-weight: 300;
  }
`

const IndexPage = ({
  data: {
    heroData: { heroData },
    cardsTitleData: { cardsTitleData },
    cardsData: { cardsData },
    textData: { textData },
    beforeAfterTitleData: { beforeAfterTitleData },
    beforeAndAfterImagesData: { beforeAndAfterImagesData },
    faqTitleData: { faqTitleData },
    faqItemsData: { faqItemsData },
  },
}) => {
  return (
    <Layout>
      <Seo title="Airtable Gatsby Starter" />
      <StyledIndex>
        <Hero {...heroData} />
        <CardsSection
          superheading={cardsTitleData.SuperHeading}
          heading={cardsTitleData.Heading}
          subheading={cardsTitleData.SubHeading}
          cards={cardsData}
        />
        <TextSection
          superheading={textData.SuperHeading}
          heading={textData.Heading}
          subheading={textData.SubHeading}
          copy={textData.Copy}
          columns={1}
        />
        <BeforeAndAfter
          superheading={beforeAfterTitleData.SuperHeading}
          heading={beforeAfterTitleData.Heading}
          subheading={beforeAfterTitleData.SubHeading}
          images={beforeAndAfterImagesData}
        />
        <Faqs
          heading={faqTitleData.Heading}
          subheading={faqTitleData.SubHeading}
          faqs={faqItemsData}
        />
      </StyledIndex>
    </Layout>
  )
}

export const query = graphql`
  query IndexPage {
    heroData: airtable(table: { eq: "Home" }, data: { Block: { eq: "Hero" } }) {
      heroData: data {
        Media {
          localFiles {
            publicURL
          }
        }
        SuperHeading
        Heading
        AlternativeText
      }
    }
    cardsTitleData: airtable(
      table: { eq: "Home" }
      data: { Block: { eq: "Cards" } }
    ) {
      cardsTitleData: data {
        SuperHeading
        Heading
        SubHeading
      }
    }
    cardsData: allAirtable(
      filter: { table: { eq: "Home" }, data: { Block: { eq: "CardsItem" } } }
    ) {
      cardsData: nodes {
        id
        data {
          Heading
          Copy
          Media {
            localFiles {
              publicURL
            }
          }
          AlternativeText
        }
      }
    }
    textData: airtable(
      table: { eq: "Home" }
      data: { Block: { eq: "Text2" } }
    ) {
      textData: data {
        SubHeading
        SuperHeading
        Heading
        Copy
      }
    }
    beforeAfterTitleData: airtable(
      table: { eq: "Home" }
      data: { Block: { eq: "BeforeAfter" } }
    ) {
      beforeAfterTitleData: data {
        SuperHeading
        Heading
        SubHeading
      }
    }
    beforeAndAfterImagesData: allAirtable(
      filter: {
        table: { eq: "Home" }
        data: { Block: { eq: "BeforeAfterItem" } }
      }
    ) {
      beforeAndAfterImagesData: nodes {
        id
        data {
          AlternativeText
          AfterAlternativeText
          Media {
            localFiles {
              publicURL
            }
          }
        }
      }
    }
    faqTitleData: airtable(
      table: { eq: "Home" }
      data: { Block: { eq: "FAQ" } }
    ) {
      faqTitleData: data {
        Heading
        SubHeading
      }
    }
    faqItemsData: allAirtable(
      filter: { table: { eq: "Home" }, data: { Block: { eq: "FaqItem" } } }
    ) {
      faqItemsData: nodes {
        id
        data {
          Heading
          Copy
        }
      }
    }
  }
`

export default IndexPage
