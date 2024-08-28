import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import logo from "./../assets/Screenshot_2024-08-28_at_1.42.19_PM-removebg-preview.png";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import circle from "./../assets/Screenshot_2024-08-28_at_1.46.52_PM-removebg-preview.png";

function AppBAR() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <IconButton edge="start" color="inherit" aria-label="logo">
          <img src={logo} alt="Logo" style={{ width: 40, height: 40 }} />
        </IconButton>

        {!isMobile && (
          <Box
            sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}
            pl={2}
            pr={2}
          >
            <Button color="inherit">Swap</Button>
            <Button color="inherit">Pool</Button>
            <Button color="inherit" endIcon={<ArrowDropDownIcon />}>
              Explore
            </Button>
          </Box>
        )}

        {!isMobile && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button variant="outlined" color="inherit" sx={{ mr: 2 }}>
              Rewards
            </Button>
            <Button color="inherit">
              <img src={circle} alt="" />
              Oxa717...F4b6
            </Button>
          </Box>
        )}

        {isMobile && (
          <IconButton edge="end" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default AppBAR;
