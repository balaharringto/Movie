import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  InputBase,
  IconButton,
  Grid,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Link } from "react-router-dom"; // ✅ import Link

import Dress from "./Dress";
import "./Navbar.css";
import "./Font.css";
import img1 from "../images/Firstim.png";

import "@fontsource/montserrat"; // normal
import "@fontsource/great-vibes"; 

function Mainpage() {
  const [active, setActive] = useState("Home");

  return (
    <Box>
      {/* First Section with Image */}
      <Box
        sx={{
          height: "100vh",
          width: "100%",
          backgroundImage: `url(${img1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          margin: "0 auto",
          borderRadius: "20px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
        }}
      >
        {/* AppBar overlay */}
        <AppBar
          position="absolute"
          sx={{
            background: "transparent",
            boxShadow: "none",
            width: "100%",
          }}
        >
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            {/* Left Text */}
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "black",
                fontFamily: '"Rubik Marker Hatch", system-ui',
              }}
            >
              Fashion Industries
            </Typography>

            {/* Center Navbar Links */}
            <Box sx={{ display: "flex", gap: 4, marginTop: 1 }}>
              <Link
                to="/Fashion"
                className={active === "Home" ? "active fancy" : "fancy"}
                style={{ textDecoration: "none", color: "white", fontWeight: "bold" }}
                onClick={() => setActive("Home")}
              >
                Home
              </Link>
              <Link
                to="/mens"
                className={active === "Mens" ? "active fancy" : "fancy"}
                style={{ textDecoration: "none", color: "white", fontWeight: "bold" }}
                onClick={() => setActive("Mens")}
              >
                Mens
              </Link>
              <Link
                to="/womens"
                className={active === "Womens" ? "active fancy" : "fancy"}
                style={{ textDecoration: "none", color: "white", fontWeight: "bold" }}
                onClick={() => setActive("Womens")}
              >
                Womens
              </Link>
              <Link
                to="/kids"
                className={active === "Kids" ? "active fancy" : "fancy"}
                style={{ textDecoration: "none", color: "white", fontWeight: "bold" }}
                onClick={() => setActive("Kids")}
              >
                Kids
              </Link>
              <Link
                to="/models"
                className={active === "Models" ? "active fancy" : "fancy"}
                style={{ textDecoration: "none", color: "white", fontWeight: "bold" }}
                onClick={() => setActive("Models")}
              >
                Models
              </Link>
            </Box>

            {/* Right Icons + Search */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              {/* Search */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "rgba(255,255,255,0.7)",
                  padding: "2px 8px",
                  borderRadius: "10px",
                  width: "300px",
                }}
              >
                <SearchIcon sx={{ fontSize: 20, color: "gray" }} />
                <InputBase
                  placeholder="Search..."
                  sx={{ ml: 1, fontSize: 14, width: "100%" }}
                />
              </Box>

              {/* Icons */}
              <IconButton sx={{ color: "black", marginTop: "20px" }}>
                <Grid container direction="column" alignItems="center" spacing={0}>
                  <Grid item>
                    <AccountCircleIcon />
                  </Grid>
                  <Grid item>
                    <Typography sx={{ color: "black", fontSize: 14 }}>
                      Profile
                    </Typography>
                  </Grid>
                </Grid>
              </IconButton>

              <IconButton sx={{ color: "black", marginTop: "20px" }}>
                <Grid container direction="column" alignItems="center" spacing={0}>
                  <Grid item>
                    <FavoriteBorderIcon />
                  </Grid>
                  <Grid item>
                    <Typography sx={{ color: "black", fontSize: 14 }}>
                      Watch List
                    </Typography>
                  </Grid>
                </Grid>
              </IconButton>

              <IconButton sx={{ color: "black", marginTop: "20px" }}>
                <Grid container direction="column" alignItems="center" spacing={0}>
                  <Grid item>
                    <ShoppingBagIcon />
                  </Grid>
                  <Grid item>
                    <Typography sx={{ color: "black", fontSize: 14 }}>
                      Saved
                    </Typography>
                  </Grid>
                </Grid>
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>

        {/* Optional overlay text */}
        <Typography
          variant="h2"
          sx={{ color: "white", fontWeight: "bold", textAlign: "center" }}
        ></Typography>
      </Box>

      {/* Second Section from Dress.js */}
      <Dress />
    </Box>
  );
}

export default Mainpage;
