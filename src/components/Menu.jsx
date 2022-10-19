import React from "react";
import { styled, Box, Divider as MuiDivider, Button } from "@mui/material";
import Logo from "../image/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import SportsBaseballIcon from "@mui/icons-material/SportsBaseball";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SettingsIcon from "@mui/icons-material/Settings";
import FlagIcon from "@mui/icons-material/Flag";
import HelpIcon from "@mui/icons-material/Help";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const Container = styled(Box)(({ theme }) => ({
  backgroundColor: "#202020",
  color: "white",
  height: "100vh",
  fontSize: "14px",
  overflow: "auto",
}));

const Wrapper = styled(Box)(({ theme }) => ({
  padding: "18px 26px",
}));
const LogoContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  fontWeight: "700",
  fontSize: "17px",
  marginBottom: "25px",
  "&>*:nth-of-type(1)": {
    height: "25px",
  },
}));

const Item = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  cursor: "pointer",
  padding: "7.5px 0px",
  "&>*:nth-of-type(1)": {
    fontSize: "20px",
  },
}));

const Divider = styled(({ ...rest }) => <MuiDivider variant='horizontal' {...rest} />)(
  ({ theme }) => ({
    margin: "15px 0px",
    border: "0.5px solid #373737",
  })
);

const LoginText = styled(Box)(({ theme }) => ({ paddingBottom: "10px" }));

const LoginButton = styled(({ ...props }) => (
  <Button startIcon={<AccountCircleOutlinedIcon />} variant='outlined' color='primary' {...props} />
))(({ theme }) => ({ height: "30px", fontSize: "13px" }));

const Menu = () => {
  return (
    <Container>
      <Wrapper>
        <LogoContainer>
          <img src={Logo} alt='logo' />
          SathTube
        </LogoContainer>

        <Item>
          <HomeIcon />
          Home
        </Item>

        <Item>
          <ExploreIcon />
          Explore
        </Item>
        <Item>
          <SubscriptionsIcon />
          Subscriptions
        </Item>
        <Divider />
        <Item>
          <VideoLibraryIcon />
          Library
        </Item>
        <Item>
          <HistoryIcon />
          History
        </Item>
        <Divider />
        <LoginText>Sign in to like videos comment and subscribe</LoginText>
        <LoginButton>login</LoginButton>
        <Item>
          <LibraryMusicIcon />
          Music
        </Item>
        <Item>
          <SportsBaseballIcon />
          Sports
        </Item>
        <Item>
          <SportsEsportsIcon />
          Gaming
        </Item>
        <Item>
          <MovieCreationIcon />
          Movies
        </Item>
        <Item>
          <NewspaperIcon />
          News
        </Item>
        <Item>
          <LiveTvIcon />
          Live
        </Item>
        <Divider />
        <Item>
          <SettingsIcon />
          Settings
        </Item>
        <Item>
          <FlagIcon />
          Report
        </Item>
        <Item>
          <HelpIcon />
          Help
        </Item>
        <Item>
          <SettingsBrightnessIcon />
          Light Mode
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;
