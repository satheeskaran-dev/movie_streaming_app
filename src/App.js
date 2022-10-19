import styled from "styled-components";
import { Grid, Box } from "@mui/material";
import Menu from "./components/Menu";
import NavBar from "./components/NavBar";

const Main = styled(Box)(({ theme }) => ({}));
const Wrapper = styled.div``;
function App() {
  return (
    <Grid container>
      <Grid item sm={2}>
        <Menu />
      </Grid>
      <Grid item sm={10}>
        <Main>
          <NavBar />
          <Wrapper>video cards</Wrapper>
        </Main>
      </Grid>
    </Grid>
  );
}

export default App;
