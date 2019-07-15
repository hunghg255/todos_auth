import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import Backdrop from "./Backdrop/Backdrop";

const WrapperModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: ${({ opened }) =>
    opened ? "translate(-50%, -50%)" : "translate(-50%, -150%)"};
  z-index: 100;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 50rem;
  padding: 4rem 5rem;
  box-shadow: 0 0.5rem 3.5rem var(--shadow);
  border-radius: 1rem;
  background-color: var(--color-mainLighter);
  opacity: ${({ opened }) => (opened ? "1" : "0")};
  visibility: ${({ opened }) => (opened ? "visibile" : "hidden")};
  transition: all 100ms;
`;

const InsideWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`;

const Modal = ({ opened, closed, children }) => {
  return ReactDOM.createPortal(
    <>
      <Backdrop opened={opened} clicked={closed} />
      <WrapperModal opened={opened}>
        <InsideWrapper>{children}</InsideWrapper>
      </WrapperModal>
    </>,
    document.getElementById("root-modal")
  );
};

export default Modal;
