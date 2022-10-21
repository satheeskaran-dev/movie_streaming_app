import React from "react";
import { Container, Main, Content } from "./styles";
import SideBar from "../layout/SideBar";
import Header from "../layout/Header";

const Layout = () => {
  return (
    <Container>
      <SideBar />
      <Main>
        <Header />
        <Content></Content>
      </Main>
    </Container>
  );
};

export default Layout;
