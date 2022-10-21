import React from "react";
import { Container, Wrapper, LogoContainer, Item, Divider, LoginButton, LoginText } from "./styles";
import Logo from "../../../assets/images/logo.png";
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
import { useTheme, useMediaQuery, Drawer } from "@mui/material";

const sidebarMenu = (
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
      <Divider />
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

const SideBar = () => {
  const isSmallDevice = useMediaQuery(useTheme().breakpoints.down("md"));

  return (
    <React.Fragment>
      {isSmallDevice ? <Drawer anchor='left'>{sidebarMenu}</Drawer> : sidebarMenu}
    </React.Fragment>
  );
};

export default SideBar;
