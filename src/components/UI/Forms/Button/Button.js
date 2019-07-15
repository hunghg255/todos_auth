import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: ${({ contain }) => (contain ? "auto" : "100%")};
  outline: none;
  padding: 1.2rem 5rem;
  border-radius: 2rem;
  font-size: 1.2rem;
  color: var(--color-white);
  background-color: ${({ color }) => {
    if (color === "red") {
      return "red";
    } else if (color === "main") {
      return "var(--color-main);";
    } else {
      return "var(--color-mainLighter);";
    }
  }};
  font-weight: 700;
  box-shadow: 0 0.5rem 3.5rem var(--shadow);
  border: none;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(2px);
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #333;
  }
`;

const Buttom = ({ contain, children, loading, disabled, color, ...rest }) => {
  return (
    <StyledButton color={color} contain={contain} disabled={disabled} {...rest}>
      {loading ? loading : children}
    </StyledButton>
  );
};

export default Buttom;
