import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50px;
`;

const StyledLink = styled.div`
  width: 150px;
  padding: 5px;
  background-color: rgb(119, 149, 233);
  border: 1px solid white;
  text-align: center;

  a {
    color: white;
    text-transform: uppercase;
    text-decoration: none;
  }
`;

const LinkElem = styled(NavLink)`
  font-size: 16px;
  font-weight: 400;
`;

export const Nav = () => {
  return (
    <StyledNav>
      <StyledLink>
        <LinkElem
          activeStyle={{
            textDecoration: "underline",
          }}
          exact
          to="/"
        >
          Main
        </LinkElem>
      </StyledLink>
      <StyledLink>
        <LinkElem
          to="/history"
          activeStyle={{
            textDecoration: "underline",
          }}
        >
          History
        </LinkElem>
      </StyledLink>
    </StyledNav>
  );
};
