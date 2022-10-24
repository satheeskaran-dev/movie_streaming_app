import React from "react";
import { AppBar, Switch } from "@mui/material";
import { Toolbar } from "./styles";
import { toggleTheme } from "../../../store/features/themeSlice";
import store from "../../../store";

const Header = () => {
  const handleToggleTheme = React.useCallback(() => {
    store.dispatch(toggleTheme());
  }, []);

  return (
    <AppBar position='static'>
      <Toolbar>
        <Switch onChange={handleToggleTheme} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
