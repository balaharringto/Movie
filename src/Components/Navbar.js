import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  InputBase,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [active, setActive] = useState("Home");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width:600px)");
  const location = useLocation();

  const navbarLinks = [
    { label: "Home", to: "/Movie/" },
    { label: "Mens", to: "/mens" },
    { label: "Womens", to: "/womens" },
    { label: "Kids", to: "/kids" },
    { label: "Newdesign", to: "/newdesign" },
    { label: "Aimode", to: "/Aimode" },

  ];

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  // ✅ MOBILE VIEW (no color change logic needed)
 if (isMobile) {
  return (
    <Box sx={{ width: "100%" }}>
      <AppBar
        position="fixed" // fix at top
        sx={{
          background: "transparent",
          boxShadow: "none",
          width: "100%",
          top: 0,
          left: 0,
          zIndex: 1200, // higher than other elements
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: 1,
            py: 0.5,
          }}
        >
          {/* Logo */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: "black",
              fontFamily: '"Rubik Marker Hatch", system-ui',
              fontSize: "1.3rem",
              flexShrink: 0,
            }}
          >
            Fashion
          </Typography>

          {/* Search Box */}
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              backgroundColor: "#fff",
              borderRadius: "8px",
              padding: "2px 6px",
              mx: 1,
              minWidth: 0,
              border: "1px solid #ddd",
            }}
          >
            <SearchIcon sx={{ color: "gray", fontSize: 18 }} />
            <InputBase
              placeholder="Search..."
              sx={{ ml: 1, fontSize: 13, width: "100%", minWidth: 0 }}
            />
          </Box>

          {/* Menu Icon */}
          <IconButton
            onClick={toggleDrawer(true)}
            sx={{ flexShrink: 0 }}
            aria-label="open drawer"
          >
            <MenuIcon sx={{ color: "black", fontSize: 24 }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: { width: 250, backgroundColor: "#fff", zIndex: 1300 },
        }}
      >
        <List>
          {navbarLinks.map((link) => (
            <ListItem
              button
              key={link.label}
              component={Link}
              to={link.to}
              onClick={() => {
                setActive(link.label);
                setDrawerOpen(false);
              }}
              selected={active === link.label}
            >
              <ListItemText
                primary={link.label}
                primaryTypographyProps={{  fontSize: 16 }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}


  // ✅ DESKTOP VIEW
  // Check if current page is Home
  const isHome = location.pathname === "/Movie/";

  // Colors depending on route
  const navColor = isHome ? "white" : "black";

  return (
    <AppBar
      position="absolute"
      sx={{
        background: "transparent",
        boxShadow: "none",
        width: "100%",
        marginBottom: "20px",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: navColor,
            fontFamily: '"Rubik Marker Hatch", system-ui',
          }}
        >
          Fashion Industries
        </Typography>

        {/* Center: Links */}
        <Box sx={{ display: "flex", gap: 4, marginTop: 1 }}>
          {navbarLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={active === link.label ? "active fancy" : "fancy"}
              style={{
                textDecoration: "none",
                color: navColor,
                fontWeight: "bold",
              }}
              onClick={() => setActive(link.label)}
            >
              {link.label}
            </Link>
          ))}
        </Box>

        {/* Right: Icons */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {/* Transparent search */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              padding: "2px 8px",
              borderRadius: "10px",
              border: `1px solid ${navColor}`,
              width: "250px",
            }}
          >
            <SearchIcon sx={{ fontSize: 20, color: navColor }} />
            <InputBase
              placeholder="Search..."
              sx={{ ml: 1, fontSize: 14, width: "100%", color: navColor }}
            />
          </Box>

          {/* Icons with labels */}
          {[AccountCircleIcon, FavoriteBorderIcon, ShoppingBagIcon].map(
            (Icon, idx) => (
              <IconButton key={idx} sx={{ color: navColor, marginTop: "20px" }}>
                <Grid container direction="column" alignItems="center" spacing={0}>
                  <Grid item>
                    <Icon />
                  </Grid>
                  <Grid item>
                    <Typography sx={{ color: navColor, fontSize: 14 }}>
                      {idx === 0
                        ? "Profile"
                        : idx === 1
                        ? "Watch List"
                        : "Saved"}
                    </Typography>
                  </Grid>
                </Grid>
              </IconButton>
            )
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
