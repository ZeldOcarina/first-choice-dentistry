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
`

const ImagesBlock = ({ heading, subheading, superheading, images }) => {
  console.log(images)
  return (
    <StyledImagesBlock id="organizations">
      <IntroSection
        heading={heading}
        subheading={subheading}
        superheading={superheading}
      ></IntroSection>
      <GridContainer columnWidth={"31rem"}>
        {images.map(({ id, data: { Media, AltText } }) => {
          return (
            <div className="image-container" key={id}>
              <img src={Media.localFiles[0].publicURL} key={id} alt={AltText} />
            </div>
          )
        })}
      </GridContainer>
    </StyledImagesBlock>
  )
}

export default ImagesBlock
