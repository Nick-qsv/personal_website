import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import EngineeringIcon from "@mui/icons-material/Engineering";
import CallIcon from "@mui/icons-material/Call";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MoreIcon from "@mui/icons-material/MoreVert";

const theme = createTheme({
  palette: {
    primary: {
      light: "#ffffff",
      main: "#FFFFFF",
    },
    secondary: {
      main: "#000000",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 200,
      md: 560,
      lg: 900,
      xl: 1536,
    },
  },
});

export const NavBarMain = () => {
  //MOBILE DROPDOWN MENU
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Link to="about" style={{ textDecoration: "none" }}>
          <Box component="div" sx={{ display: "flex" }}>
            <AccessibilityNewIcon style={{ color: "black" }} />
            <Typography
              sx={{
                fontFamily: "DM Sans",
                color: "black",
                marginLeft: 0.5,
              }}
            >
              About
            </Typography>
          </Box>
        </Link>
      </MenuItem>
      <Divider />
      <MenuItem>
        <Link to="projects" style={{ textDecoration: "none" }}>
          <Box component="div" sx={{ display: "flex" }}>
            <EngineeringIcon style={{ color: "black" }} />
            <Typography
              sx={{
                fontFamily: "DM Sans",
                color: "black",
                marginLeft: 0.5,
              }}
            >
              Projects
            </Typography>
          </Box>
        </Link>
      </MenuItem>
      <Divider />
    </Menu>
  );

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="fixed" sx={{ height: "80px" }} elevation={0}>
            <Toolbar>
              <Link to="home">
                <Box
                  component="img"
                  src={"https://i.postimg.cc/9Q80DFGG/Nicolas-1-ts.png"}
                  sx={{
                    height: 75,
                    width: 88.5,
                    marginTop: 5,
                    marginLeft: 0.2,
                  }}
                />
              </Link>
              <Box
                component="div"
                sx={{
                  display: { xs: "none", sm: "none", md: "flex" },
                  justifyContent: "flex-end",
                  flexGrow: 1,
                  marginTop: 3,
                }}
              >
                <Link to="about" style={{ textDecoration: "none" }}>
                  <Typography
                    variant="p"
                    component="div"
                    sx={{
                      fontSize: "20px",
                      marginLeft: 2,
                      marginRight: 2,
                      fontFamily: "DM Sans",
                      letterSpacing: "0.1rem",
                      color: "black",
                    }}
                  >
                    About
                  </Typography>
                </Link>

                <Link to="projects" style={{ textDecoration: "none" }}>
                  <Typography
                    variant="p"
                    component="div"
                    sx={{
                      fontSize: "20px",
                      marginLeft: 2,
                      marginRight: 2,
                      fontFamily: "DM Sans",
                      letterSpacing: "0.1rem",
                      color: "black",
                    }}
                  >
                    Projects
                  </Typography>
                </Link>
                <Link to="library" style={{ textDecoration: "none" }}>
                  <Typography
                    variant="p"
                    component="div"
                    sx={{
                      fontSize: "20px",
                      marginLeft: 2,
                      marginRight: 2,
                      fontFamily: "DM Sans",
                      letterSpacing: "0.1rem",
                      color: "black",
                    }}
                  >
                    Library
                  </Typography>
                </Link>
                <Link to="contactme" style={{ textDecoration: "none" }}>
                  <Typography
                    variant="p"
                    component="div"
                    sx={{
                      fontSize: "20px",
                      marginLeft: 2,
                      marginRight: 10,
                      fontFamily: "DM Sans",
                      letterSpacing: "0.1rem",
                      color: "black",
                    }}
                  >
                    Contact
                  </Typography>
                </Link>
              </Box>
              <Box
                sx={{
                  display: { xs: "flex", md: "none" },
                  justifyContent: "flex-end",
                  flexGrow: 1,
                }}
              >
                <IconButton
                  size="large"
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </AppBar>
          {renderMobileMenu}
          <Toolbar />
        </Box>
      </ThemeProvider>
    </div>
  );
};
