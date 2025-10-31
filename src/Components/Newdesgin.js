import React from "react";
import { Box, Typography, Card, CardMedia, CardContent, Button, Rating } from "@mui/material";
import { useNavigate } from "react-router-dom";
import im1 from "../images/New/nimg1.png";
import im2 from "../images/New/nimg2.png";
import im3 from "../images/New/nimg3.png";
import im4 from "../images/New/nimg4.png";
import Footer from "./Footer";

const categories = [
  {
    id: 1,
    brand: "ACCESSORIES",
    title: "Men s Full Dress",
    price: 1999,
    originalPrice: 5399,
    discount: "72% OFF",
    rating: 4.5,
    reviews: 22,
    image: im1,
    route: "accessories",
  },
  {
    id: 2,
    brand: "SHIRTS",
    title: "Slim Fit Cotton Shirt",
    price: 599,
    originalPrice: 2299,
    discount: "65% OFF",
    rating: 4.5,
    reviews: 172,
    image: im2,
    route: "shirts",
  },
  {
    id: 3,
    brand: "PANTS",
    title: "Classic pants",
    price: 959,
    originalPrice: 2999,
    discount: "68% OFF",
    rating: 4.5,
    reviews: 384,
    image: im3,
    route: "pants",
  },
  {
    id: 4,
    brand: "T-SHIRTS",
    title: "Casual T-Shirt",
    price: 531,
    originalPrice: 1899,
    discount: "62% OFF",
    rating: 4.2,
    reviews: 409,
    image: im4,
    route: "tshirts",
  },
];

 function Newdesgin() {
  const navigate = useNavigate();

  return (
    <Box sx={{ p: { xs: 2, sm: 3 }, minHeight: "100vh", mt: 2, backgroundColor: "#fff" }}>
      {/* Page Heading */}
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          color: "#333",
          mb: { xs: 3, sm: 4 },
          fontFamily: '"Rubik Marker Hatch", system-ui',
          mt:{xs:5}
        }}
      >
        NEW FASHION'S 2025
      </Typography>

      {/* Grid of Categories */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr 1fr", sm: "repeat(auto-fit, minmax(220px, 1fr))" },
          gap: { xs: 2, sm: 3 },
        }}
      >
        {categories.map((item) => (
          <Card
            key={item.id}
            sx={{
              borderRadius: 2,
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              overflow: "hidden",
              transition: "transform 0.2s ease",
              "&:hover": { transform: "translateY(-4px)" },
            }}
          >
            {/* Category Image */}
            <CardMedia
              component="img"
              image={item.image}
              alt={item.title}
              sx={{ height: { xs: 200, sm: 350 },marginTop:{xs:2}, objectFit: "cover" }}
            />

            {/* Category Info */}
            <CardContent sx={{ p: 2, textAlign: "center" }}>
              <Typography variant="subtitle1" sx={{ fontWeight: "bold", color: "#000" }}>
                {item.brand}
              </Typography>
              <Typography variant="body2" sx={{ color: "#000", mb: 1 }}>
                {item.title}
              </Typography>

              {/* Price and discount */}
              <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 1, mb: 1 }}>
                <Typography sx={{ fontWeight: "bold", color: "#000" }}>₹{item.price}</Typography>
                <Typography sx={{ textDecoration: "line-through", color: "#999", fontSize: 14 }}>
                  ₹{item.originalPrice}
                </Typography>
                <Typography sx={{ color: "#ff6f00", fontWeight: 500, fontSize: 14 }}>
                  {item.discount}
                </Typography>
              </Box>

              {/* Rating */}
              <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mb: 1 }}>
                <Rating value={item.rating} precision={0.5} size="small" readOnly />
                <Typography variant="body2" sx={{ color: "#777", ml: 1 }}>
                  ({item.reviews})
                </Typography>
              </Box>

              {/* See Full Collection Button */}
              <Button
                variant="contained"
                size="small"
                 onClick={() => navigate(`/mens/${item.route}`)}
                  sx={{
                  backgroundColor:"white",
                  color: "black", // ✅ text color black
                  textTransform: "none", // optional: keeps text normal case
                  fontWeight: "bold",   // optional: makes text bold
                }}
                            >
                See Full Collection
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
      <Footer/>
    </Box>
  );
}

export default Newdesgin;