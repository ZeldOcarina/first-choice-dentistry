import { Link } from "gatsby"
import React from "react"
import styled, { css } from "styled-components"
import PropTypes from "prop-types"
import respond from "../styles/abstracts/mediaqueries"

const buttonCss = css`
  a {
    cursor: pointer;
    background-color: var(--color-secondary);
    color: var(--white);
    border: none;
    border-radius: 30px;
    padding: 0;
    display: block;
    padding: 1.5rem 2rem;
    text-align: center;
  }
`

const StyledButton = styled.div`
  ${buttonCss}
  background-color: ${({ color }) =>
    css`
      ${color}
    `};
`

function setAs(type) {
  switch (type) {
    case "button":
      return "button"
    case "link":
      return "a"
    case "internal":
      return "div"
    default:
      return "button"
  }
}

/*************************
 * @param {string} type
 * @param {string} useImperativeHandle(
 * @param {function} children,
 * @param {string} color,
 * @param {string} className
 * @param {Function} onClick
 ***********************/

const Button = ({
  type,
  url,
  children,
  color,
  navButton,
  mobileNavButton,
  className,
  onClick,
}) => {
  return (
    <StyledButton
      as={setAs(type)}
      href={type !== "internal" ? url : undefined}
      color={color}
      navButton={navButton}
      mobileNavButton={mobileNavButton}
      className={className || ""}
      onClick={onClick || undefined}
    >
      {type === "internal" ? (
        <Link
          to={url}
          className="button"
          href={url}
          style={{
            backgroundColor:
              color === "primary"
                ? "var(--color-primary)"
                : "var(--color-secondary",
          }}
        >
          {children}
        </Link>
      ) : (
        children
      )}
    </StyledButton>
  )
}

Button.propTypes = {
  type: PropTypes.oneOf(["button", "link", "internal"]).isRequired,
  url: PropTypes.string,
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  width: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button
