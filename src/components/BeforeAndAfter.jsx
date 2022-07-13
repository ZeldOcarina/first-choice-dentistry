import React from "react"
import styled from "styled-components"
import IntroSection from "./IntroSection"
import { ImgComparisonSlider } from "@img-comparison-slider/react"

import handle from "../images/icons/handle.svg"

const StyledBeforeAndAfter = styled.section`
  .slider {
    --divider-color: var(--color-primary);
    --default-handle-color: var(--color-primary);
    --divider-width: 4px;
    --default-handle-width: 100px;
    --default-handle-thi: 100px;

    cursor: col-resize;
    width: 100%;
  }

  .slider,
  .slider-container,
  .image {
    height: 500px !important;
  }

  .image {
    width: 100%;

    object-fit: cover;
    object-position: top left;
  }

  .second {
    height: 102%;
  }

  .images-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, 700px);
    justify-content: center;
    justify-items: center;
  }

  .container {
    max-width: 1500px;
  }
`

const BeforeAndAfter = ({ superheading, heading, subheading, images }) => {
  console.log(images)
  return (
    <StyledBeforeAndAfter id="before-and-after">
      <IntroSection
        superheading={superheading}
        heading={heading}
        subheading={subheading}
      />
      <div className="images-container container">
        {images.map(({ id, data }) => {
          const beforeImage = data.Media.localFiles[0].publicURL
          const afterImage = data.Media.localFiles[1].publicURL

          console.log(data)
          return (
            <article className="slider-container" key={id}>
              <ImgComparisonSlider className="slider">
                <img
                  alt={data.AlternativeText}
                  slot="first"
                  className="image first"
                  src={beforeImage}
                />
                <img
                  alt={data.AfterAlternativeText}
                  slot="second"
                  className="image second"
                  src={afterImage}
                />
                {/* <img slot="handle" src={handle} alt="handle" /> */}
              </ImgComparisonSlider>
            </article>
          )
        })}
      </div>
    </StyledBeforeAndAfter>
  )
}

export default BeforeAndAfter
