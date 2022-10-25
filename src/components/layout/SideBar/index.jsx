import React from "react";
import MenuItems from "./MenuItems";

import { useTheme, useMediaQuery, Drawer } from "@mui/material";

const SideBar = () => {
  const isSmallDevice = useMediaQuery(useTheme().breakpoints.down("md"));

  return (
    <React.Fragment>
      {isSmallDevice ? <Drawer anchor='left'>{<MenuItems />}</Drawer> : <MenuItems />}
    </React.Fragment>
  );
};

export default SideBar;
