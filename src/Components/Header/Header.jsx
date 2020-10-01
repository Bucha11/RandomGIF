import React from "react";
import styled from "styled-components";
const StyledHeader = styled.div`
  height: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: rgb(119, 149, 233);
  color: white;
`;

const StyledLogo = styled.div`
  font-size: 30px;
  text-transform: uppercase;
  font-weight: bold;
`;

export const Header = () => {
  return (
    <StyledHeader>
      <StyledLogo> Get random GIF</StyledLogo>
    </StyledHeader>
  );
};
