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
          <AppBar position="fixed" sx={{ height: "80px" }}>
            <Toolbar>
              <Link to="home">
                <Box
                  component="img"
                  src={"https://i.postimg.cc/9Q80DFGG/Nicolas-1-ts.png"}
                  sx={{
                    height: 60,
                    width: 70.8,
                    marginTop: 0.7,
                    marginLeft: 0.2,
                  }}
                />
              </Link>
              <Box sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
                <Link to="about" style={{ textDecoration: "none" }}>
                  <Typography
                    variant="p"
                    component="div"
                    sx={{
                      fontSize: "25px",
                      marginLeft: 1,
                      marginRight: 1,
                      fontFamily: "DM Sans",
                      letterSpacing: "0.1rem",
                      color: "black",
                    }}
                  >
                    About
                  </Typography>
                </Link>
              </Box>
              <Link to="projects"></Link>
              <Link to="library"></Link>
              <Link to="contactme"></Link>
            </Toolbar>
          </AppBar>
          <Toolbar />
        </Box>
      </ThemeProvider>
    </div>
  );
};
