import React from "react";
import { AppBar, InputAdornment, IconButton, Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { LoginButton, SearchField, SearchFieldWrapper, Toolbar } from "./styles";

const Header = ({ handleClickShowPassword }) => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Grid container item xs={8} direction='row-reverse'>
          <SearchFieldWrapper>
            <SearchField
              placeholder='Search '
              fullWidth
              variant='outlined'
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton onClick={handleClickShowPassword} edge='end'>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </SearchFieldWrapper>
        </Grid>
        <Grid item xs={4}>
          <LoginButton>login</LoginButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
