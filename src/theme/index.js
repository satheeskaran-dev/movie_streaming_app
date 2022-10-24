import { createTheme, ThemeProvider } from "@mui/material";
import { useSelector } from "react-redux";

const mode = [
  {
    primary: { main: "#f9f9f9" },
    secondary: { main: "#ffffff" },
    text: { primary: "#000000", secondary: "#606060" },
    soft: "#f5f5f5",
  },

  {
    primary: { main: "#181818" },
    secondary: { main: "#202020" },
    text: { primary: "#ffffff", secondary: "#aaaaaa" },
    soft: "#373737",
  },
];

const FinalTheme = ({ children }) => {
  const currentTheme = useSelector((state) => state.theme.mode);

  const theme = createTheme({
    palette: currentTheme === "light" ? mode[0] : mode[1],
    typography: {
      fontFamily: "roboto",
    },
    spacing: 1,
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default FinalTheme;
