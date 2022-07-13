import { createGlobalStyle } from "styled-components"
import { graphql } from "gatsby"

export const Colors = {
  bodyBackground: "#FFFFFF",
  backgroundDark: "#e8e8e8",
  bodyColor: "#272727",
  colorPrimary: "#273770",
  colorPrimary700: "#000E3E",
  colorSecondary: "#187918",
  colorSecondary200: "#006000",
  colorTertiary: "#475D8D",
  grey: "#666666",
  grey500: "#9A9A9A",
  black: "#000000",
  white: "#ffffff",
}

export default createGlobalStyle`
  :root {
      // COLORS
    --body-background: ${Colors.bodyBackground};
    --background-dark: ${Colors.backgroundDark};
    --body-color: ${Colors.bodyColor};
    --color-primary: ${Colors.colorPrimary};
    --color-primary-700: ${Colors.colorPrimary700};
    --color-secondary: ${Colors.colorSecondary};
    --color-secondary200: ${Colors.colorSecondary200};
    --color-tertiary: ${Colors.colorTertiary};
    --grey: ${Colors.grey}; /*USED BY BLOCKQUOTE*/
    --grey500: ${Colors.grey500}; /*USED BY BLOCKQUOTE*/
    --black: ${Colors.black};
    --white: ${Colors.white};
    
    --gutter: 2rem;
    --small-gutter: 1rem;
    --big-gutter: 4rem;
    --section-gutter: 6rem;

    //FONT FAMILY
    --title-font: 'Uniform Pro Extra Condensed', sans-serif;
    --body-font: "arial narrow", ubuntu, sans-serif;
    --bold: 700;

    // FONT-SIZES
    --basic-font-size: 1.8rem;
    --mobile-font-size: 1.5rem;

    --big-title: 4.8rem;
    --title-font-size: 2.8rem;
    --mobile-title-font-size: 3rem;
    --small-title: 2.5rem;
    --big-text: 2rem;
  }
`
