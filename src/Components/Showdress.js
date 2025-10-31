import React, { useState } from "react";
import { Box, Paper, Typography, Grid, CircularProgress } from "@mui/material";

function Showdress({ dress }) {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      window.open(dress.link, "_blank");
      setLoading(false);
    }, 15000);
  };

  return (
    <Paper
      elevation={3}
      sx={{ p: 1, borderRadius: "10px", maxWidth: 150, textAlign: "center", cursor: "pointer", position: "relative" }}
      onClick={handleClick}
    >
      {loading && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(255,255,255,0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "10px",
            zIndex: 10,
          }}
        >
          <CircularProgress />
          <Typography sx={{ ml: 1 }}>Loading...</Typography>
        </Box>
      )}
      <img src={dress.image} alt={dress.name} style={{ width: "100%", borderRadius: "10px" }} />
      <Typography sx={{ mt: 1, fontWeight: "bold", fontSize: 12 }}>{dress.name}</Typography>
    </Paper>
  );
}

export default function SuggestedDresses() {
  const dresses = [
    {
      name: "Red Saree",
      image: "https://example.com/red_saree.jpg",
      link: "https://www.myntra.com/sarees/kalini/kalini-ethnic-motifs-silk-blend-woven-paithani-saree-with-blouse-piece/29521462/buy",
    },
  ];

  return (
    <Grid container spacing={2} justifyContent="center">
      {dresses.map((dress, idx) => (
        <Grid item key={idx}>
          <Showdress dress={dress} />
        </Grid>
      ))}
    </Grid>
  );
}

