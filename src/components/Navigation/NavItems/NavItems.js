import React from "react";
import styled from "styled-components";

import NavItem from "./NavItem/NavItem";

const Nav = styled.nav`
  display: flex;
  margin-top: ${props => (props.mobile ? "-6rem" : null)};
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: ${props => (props.mobile ? "column" : "row")};
  align-items: center;
  height: 100%;
`;

const NavItems = ({ mobile, clicked, loggedIn }) => {
  let links;

  if (loggedIn.uid) {
    links = (
      <Ul mobile={mobile}>
        <NavItem mobile={mobile} clicked={clicked} link="/">
          Todos
        </NavItem>
        <NavItem mobile={mobile} clicked={clicked} link="/edit-profile">
          Profile
        </NavItem>
        <NavItem mobile={mobile} clicked={clicked} link="/log-out">
          Logout
        </NavItem>
      </Ul>
    );
  } else {
    links = (
      <Ul mobile={mobile}>
        <NavItem mobile={mobile} clicked={clicked} link="/log-in">
          Login
        </NavItem>
        <NavItem mobile={mobile} clicked={clicked} link="/sign-up">
          Sign Up
        </NavItem>
      </Ul>
    );
  }

  return <Nav mobile={mobile}>{links}</Nav>;
};

export default NavItems;
