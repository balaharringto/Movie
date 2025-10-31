// src/components/Accessories.js
import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  IconButton,
  Grid,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// Dummy images (replace with your actual image paths)
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import img4 from "../images/img4.png";

export default function Pants() {
  const [showNext, setShowNext] = useState(false);

  // Toggle images left/right
  const handleToggle = () => {
    setShowNext(!showNext);
  };

  // Decide which images to show
  const imagesToShow = showNext ? [img3, img4] : [img1, img2];

  return (
    <Box sx={{ p: 2, }}>
      {/* Heading */}
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          mb: 3,
          textAlign: "center",
          color: "#333",
          textTransform: "uppercase",
        }}
      >
        MENS FASHION - ACCESSORIES
      </Typography>

      {/* Row layout */}
      <Grid container alignItems="center" spacing={2} justifyContent="center">
        {/* Left Icon */}
        <Grid item>
          <IconButton onClick={handleToggle}>
            <ArrowBackIosNewIcon sx={{ fontSize: 28, color: "#000" }} />
          </IconButton>
        </Grid>

        {/* Images */}
        {imagesToShow.map((img, index) => (
          <Grid item key={index}>
            <Card
              sx={{
                borderRadius: 2,
                overflow: "hidden",
                width: 180,
                height: 100,
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              }}
            >
              <CardMedia
                component="img"
                image={img}
                alt={`img-${index}`}
                sx={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Card>
          </Grid>
        ))}

        {/* Right Icon */}
        <Grid item>
          <IconButton onClick={handleToggle}>
            <ArrowForwardIosIcon sx={{ fontSize: 28, color: "#000" }} />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
}
