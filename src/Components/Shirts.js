// src/components/Accessories.js
import React, { useState } from "react";
import { Box, Typography, IconButton, Card, CardMedia } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

// Dummy images
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import img4 from "../images/img4.png";

function Shirts() {
  const images = [
    [img1, img2],
    [img3, img4],
  ];

  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (index < images.length - 1) setIndex(index + 1);
  };

  const handlePrev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <Box sx={{ mb: 2, p: 1 ,mt:4,  mt:{xs:5}}}>
      {/* Heading */}
      {/* <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
      
          textAlign: "center",
          color: "black",
          fontFamily: '"Rubik Marker Hatch", system-ui'
        }}
      >
        MENS FASHION 
      
      </Typography><br/> */}
       <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
       
          textAlign: "center",
          color: "black",
          
        }}
      >
           Mens Shirts
      </Typography>

      {/* Row with left/right icons */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
          flexWrap: "nowrap",
          overflowX: "auto",
          marginTop:"20px",
        }}
      >
        {/* Left Icon */}
        <IconButton onClick={handlePrev} disabled={index === 0}>
          <RemoveCircleOutlineIcon sx={{ fontSize: 35, color: "black" }} />
        </IconButton>

        {/* Images row */}
        <Box sx={{ display: "flex", gap: 1, flexShrink: 0 }}>
          {images[index].map((src, i) => (
            <Card
              key={i}
              sx={{
                marginTop:"20px",
                borderBottomLeftRadius: "10px",
                borderBottomRightRadius: "10px",
                borderTopRightRadius:"10px",
                borderTopLeftRadius:"10px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                width: { xs: 140, sm: 180, md: 220 },
              }}
            >
              <CardMedia
                component="img"
                image={src}
                alt={`img-${i}`}
                sx={{
                  height: { xs: 140, sm: 180, md: 220 },
                  objectFit: "cover",
                }}
              />
            </Card>
          ))}
        </Box>

        {/* Right Icon */}
        <IconButton
          onClick={handleNext}
          disabled={index === images.length - 1}
        >
          <AddCircleOutlineIcon sx={{ fontSize: 35, color: "black" }} />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Shirts;
