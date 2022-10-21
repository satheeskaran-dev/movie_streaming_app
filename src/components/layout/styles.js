import { styled, Box } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "row",
}));
export const Main = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  overflow: "auto",
}));
export const Content = styled(Box)(({ theme }) => ({
  width: "100%",
}));
