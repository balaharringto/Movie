import React from "react";
import { Box, Typography } from "@mui/material";
import img2 from "../images/img2.png";

function Dress() {
  return (
    <Box
      sx={{
        margin: "16px auto",  // border reduise 
        borderRadius: "20px", 
        boxShadow: "0 4px 10px rgba(0,0,0,0.3)",


        height: "100vh",
        width: "100%",
        backgroundImage: `url(${img2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h2"
        sx={{ color: "white", fontWeight: "bold", textAlign: "center" }}
      >
        Second Image Section
      </Typography>
    </Box>
  );
}

export default Dress;
