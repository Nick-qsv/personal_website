import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";

export const NavBarMain = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" sx={{ height: "70px" }}>
          <Link to="home">
            <Box
              component="img"
              src={"postimagehere"}
              sx={{ height: 40, width: 60, marginTop: 0.5, marginLeft: 2 }}
            />
          </Link>
          <Link to="about"></Link>
          <Link to="projects"></Link>
          <Link to="library"></Link>
          <Link to="contactme"></Link>
        </AppBar>
      </Box>
    </div>
  );
};
