import React from "react";
import {
  Nav,
  NavLink,
  NavbarContainer,
  Span,
  NavLogo,
  NavItems,
} from "./headerStyledComponents";

const Header = () => {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <img
            src="images/mining.png"
            alt="Logo"
            style={{ width: "3rem", height: "3rem", marginRight: "10px" }}
          />
          <Span>Proof of Evoulation</Span>
        </NavLogo>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#mine"> Mining</NavLink>
          <NavLink href="#chain"> Chains</NavLink>
          <NavLink href="#transaction"> Transaction</NavLink>
        </NavItems>
      </NavbarContainer>
    </Nav>
  );
};

export default Header;
