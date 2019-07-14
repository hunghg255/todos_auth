import React from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  margin-bottom: 3.5rem;
  flex-direction: column;

  &:last-of-type {
    margin-bottom: 4.5rem;
  }
`;

const StyledInput = styled.input`
  padding: 1rem 2rem;
  width: 100%;
  background-color: var(--color-main);
  border: none;
  color: var(--color-white);
  font-weight: 500;
  font-size: 1.4rem;
  border-radius: 2rem;

  &::placeholder {
    color: var(--color-white);
  }
`;

const Error = styled.div`
  visibility: ${({ show }) => (show ? "visibile" : "hidden")};
  opacity: ${({ show }) => (show ? "1" : "0")};
  transition: all 0.1s;
  transform: translateY(${({ show }) => (show ? "20px" : "10px")});
  position: absolute;
  bottom: 0;
  left: 0;
  color: red;
  padding: 0rem 2rem;
  font-weight: 400;
  font-size: 1.2rem;
`;

const Input = ({ field, form: { touched, errors }, ...props }) => {
  return (
    <InputWrapper>
      <StyledInput {...field} {...props} />
      <Error show={errors[field.name] && touched[field.name]}>
        {errors[field.name]}
      </Error>
    </InputWrapper>
  );
};

export default Input;
