import React from "react";
import styled from "styled-components";

import {Container} from "../../../hoc/layout/elements";
import Logo from "../../Logo/Logo";
import NavItems from "../NavItems/NavItems";

const FixedWrapper = styled.div`
  position: fixed;
  background-color: var(--color-main);
  padding: 0 2rem;
  top: 0;
  left: 0;
  width: 100%;
  height: 6rem;

  @media ${props => props.theme.mediaQueries.smallest} {
    display: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
`;

const Navbar = () => {
  return (
    <FixedWrapper>
      <Container>
        <Wrapper>
          <Logo />
          <NavItems />
        </Wrapper>
      </Container>
    </FixedWrapper>
  );
};

export default Navbar;
