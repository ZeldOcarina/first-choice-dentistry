import React /*, { useContext }*/ from "react"
import { useStaticQuery, graphql } from "gatsby"

import Footer from "./Footer"
import MonarchyStripe from "../components/MonarchyStripe"
import ImagesBlock from "../components/ImagesBlock"
import TemporaryNavbar from "./TemporaryNavbar"
import TemporaryMobileNavbar from "./TemporaryMobileNavbar"
import Seo from "../components/Seo"

//import AppContext from "../context/AppContext"
// import LocationBanner from "./LocationBanner"
// import Navbar from "./Navbar"
// import MobileNavbar from "./MobileNavbar"
// import AlertMessage from "../components/AlertMessage"
// import GallerySection from "./GallerySection"
// import Map from "../components/Map"
// import FooterLogoStripe from "../components/FooterLogoStripe"

// function organizeMenu(categoriesData) {
//   const categories = new Set()
//   const organizedMenuData = {}

//   categoriesData.forEach(category => {
//     if (category.data.Parent === "Logo") return
//     categories.add(category.data.Parent)
//   })

//   categories.forEach(category => {
//     organizedMenuData[category] = []
//   })

//   categoriesData.forEach(navItem => {
//     if (navItem.data.Parent === "Logo") return
//     organizedMenuData[navItem.data.Parent].push({
//       link: navItem.data.Permalink,
//       name: navItem.data.Child,
//       category: navItem.data.Parent,
//     })
//   })

//   const noLogoCategoriesData = categoriesData.filter(
//     item => item.data.Parent !== "Logo"
//   )

//   return { categories: [...categories], menuData: noLogoCategoriesData }
// }

const Layout = ({ children, page }) => {
  // const {
  //   locationData,
  //   socialLinks,
  //   latAndLong: { nodes },
  //   phoneData: { phoneData },
  //   telData: { telData },
  //   stateData: { stateData },
  //   cityData: { cityData },
  //   categoriesData: { categoriesData },
  //   logoData: { logoData },
  //   quickLinksData: { quickLinksData },
  // } = useStaticQuery(query)

  const {
    businessNameData: { businessNameData },
    imagesTitleData: { imagesTitleData },
    imagesItemsData: { imagesItemsData },
    locationData,
    socialLinks,
    lightLogoData: { lightLogoData },
    phoneData: { phoneData },
    telData: { telData },
    streetData: { streetData },
    stateData: { stateData },
    zipCodeData: { zipCodeData },
  } = useStaticQuery(query)

  //const { alertState, setAlertState } = useContext(AppContext)

  const temporaryLinks = [
    { text: "SERVICES", link: "#services" },
    { text: "ABOUT", link: "#about" },
    { text: "BEFORE AND AFTER", link: "#before-and-after" },
    { text: "FAQ", link: "#faq" },
    { text: "ORGANIZATIONS", link: "#organizations" },
  ]

  // const lat = nodes?.find(node => node?.data?.Label === "Latitude")?.data?.Value
  // const long = nodes?.find(node => node?.data?.Label === "Longitude")?.data
  //   ?.Value

  // const menuData = organizeMenu(categoriesData)

  return (
    <>
      {/* <LocationBanner
        phone={phoneData.Value}
        tel={telData.Value}
        state={stateData.Value}
        city={cityData.Value}
      /> */}

      {/* <Navbar innerLayout={innerLayout} menuData={menuData} /> */}
      <Seo
        title={
          page ? `${businessNameData.Value} | ${page}` : businessNameData.Value
        }
      />
      <TemporaryNavbar
        logo={lightLogoData.File.localFiles[0].publicURL}
        links={temporaryLinks}
        phone={phoneData.Value}
        tel={telData.Value}
      />

      {children}
      <ImagesBlock
        superheading={imagesTitleData.Heading}
        heading={imagesTitleData.Subheading}
        images={imagesItemsData}
      />
      <Footer
        // quickLinks={quickLinksData}
        locationData={locationData}
        socialLinks={socialLinks}
        businessName={businessNameData.Value}
        address={streetData.Value}
        cityState={stateData.Value}
        zipCode={zipCodeData.Value}
        phone={phoneData.Value}
        tel={telData.Value}
      />
      <MonarchyStripe />
      <TemporaryMobileNavbar
        links={temporaryLinks}
        phone={phoneData.Value}
        tel={telData.Value}
      />
      {/*<GallerySection />
      <Map lat={lat} long={long} mapName="map" />
      <FooterLogoStripe
        phone={phoneData.Value}
        tel={telData.Value}
        logo={logoData.Attachments.localFiles[0].publicURL}
      />
      
      <MobileNavbar menuData={menuData} />

      <AlertMessage
        message={alertState.message}
        successful={alertState.successful}
        shown={alertState.shown}
        setAlertState={setAlertState}
      /> */}
    </>
  )
}

const query = graphql`
  {
    imagesTitleData: airtable(
      table: { eq: "Footer (Global)" }
      data: { Block: { eq: "Images" } }
    ) {
      imagesTitleData: data {
        Heading
        Subheading
      }
    }
    imagesItemsData: allAirtable(
      filter: {
        table: { eq: "Footer (Global)" }
        data: { Block: { eq: "ImagesItem" } }
      }
    ) {
      imagesItemsData: nodes {
        id
        data {
          Media {
            localFiles {
              publicURL
            }
          }
          AltText
        }
      }
    }
    locationData: allAirtable(
      filter: {
        data: {
          Label: { regex: "/State|City|Phone|Tel:|Address|Weekdays|Weekends/" }
        }
      }
    ) {
      nodes {
        data {
          Value
          Label
        }
      }
    }
    socialLinks: allAirtable(
      filter: {
        table: { eq: "Config" }
        data: { Category: { eq: "Social Links" } }
      }
    ) {
      socialLinks: nodes {
        data {
          Label
          Value
        }
      }
    }
    lightLogoData: airtable(
      table: { eq: "Config" }
      data: { Category: { eq: "Media" }, Label: { eq: "Logo Light" } }
    ) {
      lightLogoData: data {
        File {
          localFiles {
            publicURL
          }
        }
      }
    }
    businessNameData: airtable(
      table: { eq: "Config" }
      data: { Label: { eq: "Business Name" } }
    ) {
      businessNameData: data {
        Value
      }
    }
    phoneData: airtable(
      table: { eq: "Config" }
      data: { Label: { eq: "Phone" } }
    ) {
      phoneData: data {
        Value
      }
    }
    telData: airtable(
      table: { eq: "Config" }
      data: { Label: { eq: "Tel:" } }
    ) {
      telData: data {
        Value
      }
    }
    streetData: airtable(
      table: { eq: "Config" }
      data: { Label: { eq: "Address" } }
    ) {
      streetData: data {
        Value
      }
    }
    stateData: airtable(
      table: { eq: "Config" }
      data: { Label: { eq: "City-St" } }
    ) {
      stateData: data {
        Value
      }
    }
    zipCodeData: airtable(
      table: { eq: "Config" }
      data: { Label: { eq: "Zipcode" } }
    ) {
      zipCodeData: data {
        Value
      }
    }
  }
`

// const query = graphql`
//   {
//     categoriesData: allAirtable(filter: { table: { eq: "Menu" }, data: {} }) {
//       categoriesData: nodes {
//         data {
//           Parent
//           Child
//           Permalink
//         }
//       }
//     }
//     socialLinks: allAirtable(
//       filter: {
//         table: { eq: "Config" }
//         data: { Name: { eq: "Social Links" } }
//       }
//     ) {
//       socialLinks: nodes {
//         data {
//           Label
//           Value
//         }
//       }
//     }
//     locationData: allAirtable(
//       filter: {
//         data: {
//           Label: { regex: "/State|City|Phone|Tel:|Address|Weekdays|Weekends/" }
//         }
//       }
//     ) {
//       nodes {
//         data {
//           Name
//           Value
//           Label
//         }
//       }
//     }
//     menu: allAirtable(
//       filter: { table: { eq: "Menu" }, data: { Parent: { regex: "/Navbar/" } } }
//     ) {
//       nodes {
//         id
//         data {
//           Child
//           Permalink
//         }
//       }
//     }
//     latAndLong: allAirtable(
//       filter: {
//         table: { eq: "Config" }
//         data: {
//           Name: { eq: "Details" }
//           Label: { regex: "/Latitude|Longitude/" }
//         }
//       }
//     ) {
//       nodes {
//         data {
//           Label
//           Value
//         }
//       }
//     }
//     phoneData: airtable(
//       table: { eq: "Config" }
//       data: { Label: { eq: "Phone" } }
//     ) {
//       phoneData: data {
//         Value
//       }
//     }
//     telData: airtable(
//       table: { eq: "Config" }
//       data: { Label: { eq: "Tel:" } }
//     ) {
//       telData: data {
//         Value
//       }
//     }
//     stateData: airtable(
//       table: { eq: "Config" }
//       data: { Label: { eq: "State" } }
//     ) {
//       stateData: data {
//         Value
//       }
//     }
//     cityData: airtable(
//       table: { eq: "Config" }
//       data: { Label: { eq: "City" } }
//     ) {
//       cityData: data {
//         Value
//       }
//     }
//     logoData: airtable(
//       data: { Label: { eq: "Wide" }, Name: { eq: "Media" } }
//       table: { eq: "Config" }
//     ) {
//       logoData: data {
//         Attachments {
//           localFiles {
//             publicURL
//           }
//         }
//         Name
//         Label
//       }
//     }
//     quickLinksData: allAirtable(
//       filter: {
//         table: { eq: "Footer (Global)" }
//         data: { Block: { eq: "QuickLinks" } }
//       }
//     ) {
//       quickLinksData: nodes {
//         data {
//           superheading
//           heading
//         }
//       }
//     }
//   }
// `

export default Layout
