// src/components/Accessories.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Rating,
  IconButton,
  Button,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FavoriteIcon from "@mui/icons-material/Favorite";
// Import 10 images
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import img4 from "../images/img4.png";
import img5 from "../images/img5.png";
import img6 from "../images/img6.png";
import img7 from "../images/img7.png";
import img8 from "../images/img8.png";
import img9 from "../images/img9.png";
import img10 from "../images/img10.png";
// import { Fullscreen } from "@mui/icons-material";

const products = [
  { id: 1, brand: "Arrow", title: "Leather Belt", price: 799, originalPrice: 1599, discount: "50% OFF", rating: 4.3, reviews: 120, image: img1 },
  { id: 2, brand: "Zara", title: "Classic Wallet", price: 999, originalPrice: 1999, discount: "50% OFF", rating: 4.5, reviews: 210, image: img2 },
  { id: 3, brand: "Levis", title: "Cap Collection", price: 699, originalPrice: 1299, discount: "46% OFF", rating: 4.2, reviews: 98, image: img3 },
  { id: 4, brand: "Puma", title: "Sports Watch", price: 2499, originalPrice: 3999, discount: "38% OFF", rating: 4.7, reviews: 342, image: img4 },
  { id: 5, brand: "Ray-Ban", title: "Stylish Sunglasses", price: 3199, originalPrice: 5999, discount: "47% OFF", rating: 4.8, reviews: 421, image: img5 },
  { id: 6, brand: "Woodland", title: "Leather Wallet", price: 899, originalPrice: 1799, discount: "50% OFF", rating: 4.1, reviews: 150, image: img6 },
  { id: 7, brand: "Nike", title: "Sports Cap", price: 599, originalPrice: 999, discount: "40% OFF", rating: 4.4, reviews: 98, image: img7 },
  { id: 8, brand: "Titan", title: "Men's Analog Watch", price: 1899, originalPrice: 2999, discount: "37% OFF", rating: 4.6, reviews: 280, image: img8 },
  { id: 9, brand: "Hidesign", title: "Luxury Belt", price: 1299, originalPrice: 2599, discount: "50% OFF", rating: 4.3, reviews: 190, image: img9 },
  { id: 10, brand: "Adidas", title: "Socks Pack (3)", price: 499, originalPrice: 799, discount: "38% OFF", rating: 4.2, reviews: 76, image: img10 },
];

export default function Accessories() {
  const navigate = useNavigate(); // ✅ define navigate hook here
   const [favorites, setFavorites] = useState({});
  const [cart, setCart] = useState({});

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleCart = (id) => {
    setCart((prev) => ({ ...prev, [id]: !prev[id] }));
  };


  return (
    <Box sx={{ p: { xs: 2, sm: 3 }  , mt:{xs:7}, minHeight: "100vh" }}>
      {/* Heading */}
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          color: "#333",
          width:"100%",
          fontFamily: '"Rubik Marker Hatch", system-ui',
          mb: { xs: 3, sm: 4 },
        }}
      >
        MENS FASHION  ACCESSORIES
      </Typography>

      {/* Grid layout */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr 1fr",
            sm: "repeat(auto-fit, minmax(220px, 1fr))",
          },
          gap: { xs: 2, sm: 3 },
        }}
      >
        {products.map((item) => (
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
            {/* Product Image */}
            <CardMedia
              component="img"
              image={item.image}
              alt={item.title}
              sx={{
                height: { xs: 180, sm: 220 },
                objectFit: "cover",
              }}
            />

            {/* Content */}
            <CardContent sx={{ p: 2 }}>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "bold", color: "#333" }}
              >
                {item.brand}
              </Typography>
              <Typography variant="body2" sx={{ color: "#666", mb: 1 }}>
                {item.title}
              </Typography>

              {/* Price */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography sx={{ fontWeight: "bold", color: "#333" }}>
                  ₹{item.price}
                </Typography>
                <Typography
                  sx={{
                    textDecoration: "line-through",
                    color: "#999",
                    fontSize: 14,
                  }}
                >
                  ₹{item.originalPrice}
                </Typography>
                <Typography
                  sx={{ color: "#ff6f00", fontWeight: 500, fontSize: 14 }}
                >
                  {item.discount}
                </Typography>
              </Box>

              {/* Rating */}
              <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                <Rating
                  value={item.rating}
                  precision={0.5}
                  size="small"
                  readOnly
                />
                <Typography variant="body2" sx={{ color: "#777", ml: 1 }}>
                  ({item.reviews})
                </Typography>
              </Box>

              {/* Icons (Wishlist + Cart) */}
        <Box
  sx={{
    display: "flex",
    justifyContent: "space-between", // icons left, button right
    alignItems: "center",
    mt: 2,
  }}
>
  {/* Icons (Wishlist + Cart) */}
                 <Box>
                  {/* Favorite Icon Toggle */}
                  <IconButton onClick={() => toggleFavorite(item.id)}>
                    {favorites[item.id] ? (
                      <FavoriteIcon sx={{ color: "red" }} />
                    ) : (
                      <FavoriteBorderIcon sx={{ color: "black" }} />
                    )}
                  </IconButton>

                  {/* Shopping Bag Toggle */}
                  <IconButton onClick={() => toggleCart(item.id)}>
                    <ShoppingBagIcon sx={{ color: cart[item.id] ? "red" : "black" }} />
                  </IconButton>
                </Box>


  {/* Order Button */}
  <Button
    variant="contained"
    size="small"
    onClick={() => navigate(`/mens/accessories/${item.id}`)}
    sx={{
      backgroundColor: "white",
      color: "black",
      textTransform: "none",
      fontWeight: "bold",
      boxShadow: "none",
      "&:hover": {
        backgroundColor: "#f5f5f5",
      },
    }}
  >
    Order's
  </Button>
</Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
