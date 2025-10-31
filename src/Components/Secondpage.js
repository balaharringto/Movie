import React from "react";
import { Box, Typography, Button, Grid, useMediaQuery } from "@mui/material";
import imgDesktop from "../images/Firstim.png";
import imgMobile from "../images/mobileim2.png";

// Import your 4K videos
import mensVideo from "../videos/vbg.mp4";
import womensVideo from "../videos/vbg.mp4";
import kidsVideo from "../videos/vbg.mp4";
import newDesignVideo from "../videos/vbg.mp4";

function Secondpage() {
  const isMobile = useMediaQuery("(max-width:600px)");

  // Sections for video content
  const sections = [
    {
      title: "Mens Fashion",
      description: "Discover the latest men's fashion trends, from casual to formal.",
      video: mensVideo,
      buttonText: "See Full Collection",
    },
    {
      title: "Womens Fashion",
      description: "Explore elegant and trendy women's outfits for every occasion.",
      video: womensVideo,
      buttonText: "See Full Collection",
    },
    {
      title: "Kids Fashion",
      description: "Fun and stylish kids’ clothing for all ages.",
      video: kidsVideo,
      buttonText: "See Full Collection",
    },
    {
      title: "New Design 2025",
      description: "Be the first to shop the newest 2025 fashion trends.",
      video: newDesignVideo,
      buttonText: "See Full Collection",
    },
  ];

  return (
    <Box sx={{ px: { xs: 2, md: 6 }, py: 4 }}>
      {/* Hero Section with Background Image */}
      <Box
        sx={{
          height: "100vh",
          width: "100%",
          backgroundImage: `url(${isMobile ? imgMobile : imgDesktop})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "20px",
          mb: 4,
          position: "relative",
        }}
      >
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
              flexDirection: "column",
              textAlign: "center",
              color: "black",
              fontFamily: '"Rubik Marker Hatch", system-ui',
              px: 2,
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
              FASHION COLLECTION
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              Explore the latest trends in fashion, curated for you.
            </Typography>
            <Button
              variant="contained"
              sx={{ bgcolor: "#000", color: "#fff", "&:hover": { bgcolor: "#333" } }}
            >
              See Full Collection
            </Button>
          </Box>
        )}
      </Box>

      {/* Video Thumbnails with Background Image */}
      <Grid
        container
        spacing={3}
        justifyContent="center"
        alignItems="center"
        sx={{ mt: 4 }}
      >
        {sections.map((section) => (
          <Grid
            item
            key={section.title}
            xs={12}
            sm={6}
            md={3}
            display="flex"
            justifyContent="center"
          >
            <Box
              sx={{
                width: 200,
                height: 200,
                position: "relative",
                borderRadius: "10px",
                overflow: "hidden",
                backgroundImage: `url(${require("../images/Firstim.png")})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <video
                src={section.video}
                autoPlay
                muted
                loop
                playsInline
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "10px",
                  objectFit: "cover",
                  opacity: 0.8, // so background image shows slightly
                }}
              />
              {/* Overlay for title and description */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  width: "100%",
                  bgcolor: "rgba(0,0,0,0.6)",
                  color: "#fff",
                  textAlign: "center",
                  py: 1,
                  borderBottomLeftRadius: "10px",
                  borderBottomRightRadius: "10px",
                  fontSize: "0.75rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ fontWeight: "bold" }}>
                  {section.title}
                </Typography>
                <Typography sx={{ fontSize: "0.7rem" }}>
                  {section.description}
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    mt: 0.5,
                    bgcolor: "#000",
                    color: "#fff",
                    fontSize: "0.7rem",
                    "&:hover": { bgcolor: "#333" },
                  }}
                >
                  {section.buttonText}
                </Button>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Secondpage;