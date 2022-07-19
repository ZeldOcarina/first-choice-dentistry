import React, { useContext } from "react"
import styled, { css } from "styled-components"
import { MdClose } from "react-icons/md"
import respond from "../styles/abstracts/mediaqueries"

import AppContext from "../context/AppContext"
import Button from "../components/Button"

import { hexToRGB } from "../helpers/helpers"
import { Colors } from "../styles/abstracts/abstracts"

import { BsPhoneFill } from "react-icons/bs"

const StyledTemporaryMobileNavbar = styled.nav`
  width: 100vw;
  position: fixed;
  min-height: 102vh;
  top: 0;
  left: 0;
  z-index: 200;
  background-color: ${hexToRGB(Colors.colorSecondary, 0.96)};
  transform: translateX(200vw);
  transition: all 0.3s ease-in-out;
  overflow: scroll;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  z-index: 900;

  ${({ open }) => {
    return (
      open &&
      css`
        transform: translateX(0);
      `
    )
  }}

  .close-icon {
    position: absolute;
    right: 3rem;
    top: 3rem;
    width: 5rem;
    height: auto;
    color: var(--white);
    cursor: pointer;

    ${respond(
      "phone-land",
      css`
        width: 5%;
      `
    )}
    ${respond(
      "phone-port",
      css`
        width: 3rem;
      `
    )}
    ${respond(
      "iphone-12-mini",
      css`
        top: 3rem;
        right: 3rem;
      `
    )}
  }

  .mobile-navbar {
    &__top-ul {
      list-style: none;
    }
    &__top-li {
      &:not(:last-child) {
        margin-bottom: 1.8rem;
      }
    }
    &__top-link {
      color: var(--white);
      font-family: var(--alternative-font);
      font-weight: 400;
      cursor: pointer;
    }
  }

  .phone {
    .phone-link {
      color: var(--white);
      font-size: 2.5rem;
      display: grid;
      grid-template-columns: repeat(2, max-content);
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      margin-top: var(--big-gutter);
    }
  }
`

// 4829 Panama Lane Suite C, Bakersfield, CA 93313

const TemporaryMobileNavbar = ({ links, phone, tel }) => {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useContext(AppContext)

  return (
    <StyledTemporaryMobileNavbar open={isMobileMenuOpen}>
      <ul className="mobile-navbar__top-ul">
        <div className="mb-3">
          <Button
            type="internal"
            url="/contact-us"
            color="primary"
            onClick={() => {
              setIsMobileMenuOpen(false)
            }}
          >
            Request an Appointment
          </Button>
          <div className="phone">
            <a className="phone-link" href={`tel:${tel}`}>
              <BsPhoneFill />
              &nbsp;{phone}
            </a>
          </div>
        </div>

        {links.map((link, i) => {
          return (
            <li className="mobile-navbar__top-li" key={i}>
              <a
                className="mobile-navbar__top-link"
                href={link.link}
                onClick={() => {
                  setIsMobileMenuOpen(false)
                }}
              >
                {link.text}
              </a>
            </li>
          )
        })}
      </ul>
      <MdClose
        className="close-icon"
        onClick={() => {
          setIsMobileMenuOpen(!isMobileMenuOpen)
        }}
      />
    </StyledTemporaryMobileNavbar>
  )
}

export default TemporaryMobileNavbar
