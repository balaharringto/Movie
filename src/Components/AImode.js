import React, { useState } from "react";
import { Box, Typography, Button, Grid, Paper, CircularProgress } from "@mui/material";
import axios from "axios";
import SuggestedDresses from "./Showdress";

function AImode() {
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setImage(URL.createObjectURL(e.target.files[0]));
      setResult(null);
    }
  };

  const handleAnalyze = async () => {
    if (!file) return;
    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("http://127.0.0.1:8000/analyze", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setResult(response.data);
    } catch (error) {
      console.error(error);
      alert("Error analyzing image.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ px: { xs: 2, md: 6 }, py: 4, mt: { xs: 10 } }}>
      <Typography variant="h5" sx={{ mb: 3, fontWeight: "bold", textAlign: "center" }}>
        AI Fashion Assistant
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
        <Button variant="contained" component="label" sx={{ mr: 2 }}>
          Upload Image
          <input type="file" accept="image/*" hidden onChange={handleImageUpload} />
        </Button>

        <Button variant="contained" color="secondary" onClick={handleAnalyze} disabled={!file || loading}>
          {loading ? "Analyzing..." : "Analyze Skin Tone"}
        </Button>
      </Box>

      {image && (
        <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
          <Paper elevation={3} sx={{ p: 1 }}>
            <img src={image} alt="Uploaded" style={{ maxWidth: "300px", maxHeight: "300px", borderRadius: "10px" }} />
          </Paper>
        </Box>
      )}

      {result && (
        <Box sx={{ textAlign: "center", mt: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Skin Type: {result.skinType}
          </Typography>

          <Typography variant="subtitle1" sx={{ mt: 1 }}>
            Suggested Colors:
          </Typography>

          <Grid container spacing={1} justifyContent="center" sx={{ mt: 1 }}>
            {result.suggestedColors.map((color, idx) => (
              <Grid item key={idx}>
                <Paper sx={{ px: 2, py: 1, bgcolor: color.toLowerCase(), color: "#fff", borderRadius: "5px", fontWeight: "bold" }}>
                  {color}
                </Paper>
              </Grid>
            ))}
          </Grid>
          {/* Dress Suggestion Component */}
          <Box sx={{ mt: 3 }}>
            <SuggestedDresses/>
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default AImode;
