import React from "react";
import { Box, useMediaQuery } from "@mui/material";
import videoDesktop from "../videos/vbg1.mp4";
import videoMobile from "../videos/vbg.mp4";
import Mens from "./Mens";

function Mainpage() {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box>
      {/* First Section with Video */}
      <Box
        sx={{
          height: "100vh",
          width: "100%",
          maxWidth: isMobile ? 500 : "100%", // max width for mobile
          minWidth: isMobile ? 350 : "100%", // min width for mobile
          margin: "0 auto",
          position: "relative",
          overflow: "hidden",
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "20px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        >
          <source src={isMobile ? videoMobile : videoDesktop} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Optional overlay text for mobile */}
        {isMobile && (
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "black",
              fontSize: "1.5rem",
              fontWeight: "bold",
              textAlign: "center",
              textShadow: "1px 1px 5px rgba(0,0,0,0.3)",
              fontFamily: '"Rubik Marker Hatch", system-ui',
              px: 2,
            }}
          >
            FASHION 
            YOUR STYLE <br />
            YOUR IDENTITY
          </Box>
        )}
      </Box>

      {/* Next Section */}
      <Mens />
    </Box>
  );
}

export default Mainpage;
