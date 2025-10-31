// SkinAnalyzer.js
import React, { useState } from "react";
import axios from "axios";

function SkinAnalysis() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setResult(null); // clear previous result
  };

  const handleAnalyze = async () => {
    if (!file) return alert("Please select an image first.");
    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/analyze",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setResult(response.data);
    } catch (err) {
      console.error(err);
      alert("Error analyzing image.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>AI Skin Analyzer</h2>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <br />
      <button onClick={handleAnalyze} disabled={loading} style={{ marginTop: 20 }}>
        {loading ? "Analyzing..." : "Analyze Skin"}
      </button>

      {result && (
        <div style={{ marginTop: 30 }}>
          <h3>Skin Type: {result.skinType}</h3>
          <h4>Suggested Dress Colors:</h4>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {result.suggestedColors.map((color, idx) => (
              <li key={idx} style={{ margin: "5px 0" }}>
                {color}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SkinAnalysis;
