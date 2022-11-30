import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";

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
      md: 450,
      lg: 900,
      xl: 1536,
    },
  },
});

export const NavBarMain = () => {
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
                      marginRight: 2,
                      fontFamily: "DM Sans",
                      letterSpacing: "0.1rem",
                      color: "black",
                    }}
                  >
                    Contact
                  </Typography>
                </Link>
              </Box>
            </Toolbar>
          </AppBar>
          <Toolbar />
        </Box>
      </ThemeProvider>
    </div>
  );
};
