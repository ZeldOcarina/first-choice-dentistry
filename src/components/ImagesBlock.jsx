import React from "react"
import styled from "styled-components"
import IntroSection from "./IntroSection"
import GridContainer from "./GridContainer"

const StyledImagesBlock = styled.section`
  background-color: var(--background-dark);

  .image-container {
    width: 31rem;
    height: 31rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4rem;
    background-color: var(--white);

    img {
      width: 100%;
    }
  }

  .grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 3rem;
  }
`

const ImagesBlock = ({ heading, subheading, superheading, images }) => {
  return (
    <StyledImagesBlock id="organizations">
      <IntroSection
        heading={heading}
        subheading={subheading}
        superheading={superheading}
      ></IntroSection>
      <div className="grid">
        {images.map(({ id, data: { Media, AltText } }) => {
          return (
            <div className="image-container" key={id}>
              <img src={Media.localFiles[0].publicURL} key={id} alt={AltText} />
            </div>
          )
        })}
      </div>
    </StyledImagesBlock>
  )
}

export default ImagesBlock
