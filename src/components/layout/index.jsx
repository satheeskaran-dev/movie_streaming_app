import React from "react";
import { Container, Main, Content } from "./styles";
import SideBar from "../layout/SideBar";
import Header from "../layout/Header";

const Layout = ({children}) => {
  return (
    <Container>
      <SideBar />
      <Main>
        <Header />
        <Content>{children}</Content>
      </Main>
    </Container>
  );
};

export default Layout;
