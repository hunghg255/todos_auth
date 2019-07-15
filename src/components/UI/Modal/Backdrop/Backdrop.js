import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.7);
  opacity: ${({ opened }) => (opened ? "1" : "0")};
  visibility: ${({ opened }) => (opened ? "visibile" : "hidden")};
  transition: all 100ms;
`;

const Backdrop = ({ opened, clicked }) => {
  return <Wrapper opened={opened} onClick={clicked} />;
};

export default Backdrop;
