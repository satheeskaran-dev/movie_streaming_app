import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  background-color: green;
  color: white;
  height: 100vh;
`;
const Wrapper = styled.div`
  padding: 20px;
`;

const Menu = () => {
  return (
    <Container>
      <Wrapper>menu</Wrapper>
    </Container>
  );
};

export default Menu;
