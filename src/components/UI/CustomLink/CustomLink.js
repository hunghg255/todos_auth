import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ color }) =>
    color === "white" ? "var(--color-white)" : "var(--color-main"};
  font-weight: 700;
  position: ${({pos}) => (pos ? 'absolute' : 'initial')};
  bottom: -11rem;
  padding: 1rem 2rem;
  font-size: 1.3rem;
  margin-bottom: 3rem;
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    transform: translateY(-3px);
  }
  &:active {
    transform: translateY(2px);
  }
`;

const CustomLink = ({ link, color, children, pos }) => {
  return (
    <StyledLink pos to={link} color={color}>
      {children}
    </StyledLink>
  );
};

export default CustomLink;
