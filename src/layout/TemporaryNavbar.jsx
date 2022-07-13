import React, { useContext, useEffect, useState } from "react"
import styled, { css } from "styled-components"
import respond from "../styles/abstracts/mediaqueries"
import { Link } from "gatsby"
import { GiHamburgerMenu } from "react-icons/gi"

import AppContext from "../context/AppContext"

const Wrapper = styled.nav`
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  z-index: 300;
  height: 8rem;
  font-size: 1.6rem;
  transition: all 0.3s ease-in-out;
  background-color: transparent;

  ${respond(
    "tab-land",
    css`
      margin-top: 0;
    `
  )}
  ${respond(
    "phone-land",
    css`
      margin-top: 0;
      top: 0;
    `
  )}
    ${respond(
    "phone-port",
    css`
      margin-top: 0;
      ${({ scrolled }) =>
        !scrolled &&
        css`
          top: 1rem;
        `}
      height: 8rem;
    `
  )}
    ${respond(
    "iphone-5",
    css`
      margin-top: 1.5rem;
      top: 2rem;
      height: max-content;
    `
  )}
  ${respond(
    "big-desktop",
    css`
      height: 12rem;
    `
  )}

  .navbar-notebook-container {
    max-width: 95%;
    margin: 0 auto;

    ${respond(
      "laptop-s",
      css`
        max-width: 1200px;
      `
    )}
    ${respond(
      "ipad-pro-11-land",
      css`
        max-width: 1000px;
      `
    )}
    ${respond(
      "tab-land",
      css`
        max-width: 800px;
      `
    )}
    ${respond(
      "iphone-12-pro-land",
      css`
        width: 85% !important;
        margin: 0 auto;
      `
    )}
  }

  .container {
    max-width: 1900px;

    ${respond(
      "big-desktop",
      css`
        max-width: 2200px;
      `
    )}
  }

  .container,
  .navbar-notebook-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .links-container {
    display: none;
    gap: 2.5rem;
    align-items: center;
    height: 100%;

    ${respond(
      "macbook-air",
      css`
        display: none;
      `
    )}

    &--dark {
      margin-left: auto;
      li,
      a,
      p {
        color: var(--black);
      }
    }
  }

  .social-icons {
    ${respond(
      "tab-port",
      css`
        display: none;
      `
    )}
  }

  .social-icon {
    font-size: 2.3rem;
  }

  .nav-link {
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    color: var(--body-color);
    cursor: pointer;

    &:hover {
      color: var(--color-secondary);
    }

    ${respond(
      "big-desktop",
      css`
        font-size: 2.1rem;
      `
    )}
  }

  .mobile-menu-activator {
    display: block;
    color: var(--color-secondary);
    position: absolute;
    right: 5%;
    width: 4rem;
    height: auto;
    cursor: pointer;

    ${respond(
      "ipad-pro-12-port",
      css`
        right: 10%;
      `
    )}
  }

  .logo {
    width: 25rem;

    ${respond(
      "iphone-12-pro-land",
      css`
        width: 18rem;
      `
    )}
    ${respond(
      "phone-port",
      css`
        width: 22rem;
      `
    )}
    ${respond(
      "iphone-5",
      css`
        width: 5rem;
      `
    )}
    ${respond(
      "big-desktop",
      css`
        width: 40rem;
      `
    )}
  }

  .name {
    text-transform: initial;
    margin: 0;
    padding: 0;
  }
`

const TemporaryNavbar = ({ innerPage, innerLayout, logo }) => {
  const [isNavbarScrolled, setIsNavbarScrolled] = useState(false)
  const { isMobileMenuOpen, setIsMobileMenuOpen, isBigLaptop } =
    useContext(AppContext)

  useEffect(() => {
    // Make navbar fixed on scroll
    document.addEventListener("scroll", () => {
      window.scrollY === 0
        ? setIsNavbarScrolled(false)
        : setIsNavbarScrolled(true)
    })
  })

  return (
    <Wrapper scrolled={isNavbarScrolled} innerLayout={innerLayout}>
      <div className={isBigLaptop ? "navbar-notebook-container" : "container"}>
        <Link to="/">
          <img src={logo} alt="First Choice Dentistry Logo" className="logo" />
        </Link>

        <div
          className={
            innerPage
              ? "links-container links-container--dark"
              : "links-container"
          }
        >
          <a className="nav-link" href="#ciao">
            CIAO
          </a>
          <a className="nav-link" href="#ciao">
            CIAO
          </a>
          <a className="nav-link" href="#ciao">
            CIAO
          </a>
        </div>
        <GiHamburgerMenu
          className="mobile-menu-activator"
          onClick={() => {
            setIsMobileMenuOpen(!isMobileMenuOpen)
          }}
        />
      </div>
    </Wrapper>
  )
}

// const query = graphql`
//   {
//     logo: allAirtable(
//       filter: { table: { eq: "Menu" }, data: { Parent: { regex: "/Logo/" } } }
//     ) {
//       nodes {
//         id
//         data {
//           Child
//           Permalink
//           logo {
//             url
//           }
//         }
//       }
//     }
//   }
// `

export default TemporaryNavbar
