import React from "react"
import { Helmet } from "react-helmet"
//import { graphql, useStaticQuery } from "gatsby"

const Seo = ({ title, description, language }) => {
  // const {
  //   ogImageData: { ogImageData },
  //   urlData: { urlData },
  // } = useStaticQuery(query)

  return (
    <Helmet htmlAttributes={{ lang: language || "en" }}>
      <title>{title}</title>
      <link rel="stylesheet" href="https://use.typekit.net/dzp2jss.css" />

      {/* <title>{title || metaTitle}</title>
      <meta name="description" content={description || metaDescription} />
      <meta name="webmaster" content="Mattia Rasulo" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title || metaTitle} />
      <meta
        property="og:description"
        content={description || metaDescription}
      />
      <meta
        property="og:image"
        content={`${urlData.Value}${ogImageData?.Attachments?.localFiles[0].publicURL}`}
      />
      <meta property="og:url" content={siteUrl} /> */}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:width" content="630" />
      <meta property="og:image:type" content="image/png" />
      {/* FAVICONS */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="msapplication-TileColor" content="#00a300" />
      <meta name="theme-color" content="#ffffff" />
      {/* END FAVICONS */}
    </Helmet>
  )
}

// const query = graphql`
//   {
//     ogImageData: airtable(
//       table: { eq: "Config" }
//       data: { Label: { eq: "ogImage" } }
//     ) {
//       ogImageData: data {
//         Attachments {
//           localFiles {
//             publicURL
//           }
//         }
//       }
//     }
//     urlData: airtable(
//       table: { eq: "Config" }
//       data: { Label: { eq: "Staging URL" } }
//     ) {
//       urlData: data {
//         Value
//       }
//     }
//   }
// `

export default Seo
