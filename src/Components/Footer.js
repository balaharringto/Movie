import React from "react";
import { Box, Grid, Typography, Link, Divider } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "#f5f5f5",
        color: "#333",
        mt: 6,
        px: { xs: 2, sm: 6, md: 10 },
        py: 6,
        width: "100%", // ✅ full width background
      }}
    >
      <Grid container spacing={4}>
        {/* ONLINE SHOPPING */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
            ONLINE SHOPPING
          </Typography>
          {[
            { label: "Men", link: "https://www.myntra.com/men" },
            { label: "Women", link: "https://www.myntra.com/women" },
            { label: "Kids", link: "https://www.myntra.com/kids" },
            { label: "Accessories", link: "https://www.ajio.com/accessories" },
            { label: "Beauty", link: "https://www.nykaa.com" },
            { label: "New Arrivals", link: "https://www2.hm.com/en_in/new-arrivals.html" },
            { label: "Gift Cards", link: "https://www.amazon.in/gift-card-store" },
            { label: "Fashion Insider", link: "https://www.zara.com/in/" },
          ].map((item) => (
            <Typography key={item.label} variant="body2" sx={{ mb: 1 }}>
              <Link href={item.link} target="_blank" underline="hover" color="inherit">
                {item.label}
              </Link>
            </Typography>
          ))}
        </Grid>

        {/* USEFUL LINKS */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
            USEFUL LINKS
          </Typography>
          {[
            { label: "Blog", link: "https://blog.myntra.com" },
            { label: "Careers", link: "https://careers.hm.com" },
            { label: "Site Map", link: "https://www.ajio.com/sitemap" },
            { label: "Corporate Information", link: "https://www.inditex.com" },
            { label: "Fashion Global", link: "https://www.zara.com/" },
            { label: "Cleartrip", link: "https://www.cleartrip.com" },
          ].map((item) => (
            <Typography key={item.label} variant="body2" sx={{ mb: 1 }}>
              <Link href={item.link} target="_blank" underline="hover" color="inherit">
                {item.label}
              </Link>
            </Typography>
          ))}
        </Grid>

        {/* CUSTOMER POLICIES */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
            CUSTOMER POLICIES
          </Typography>
          {[
            { label: "Contact Us", link: "https://www2.hm.com/en_in/customer-service/contact.html" },
            { label: "FAQ", link: "https://www.ajio.com/help/faq" },
            { label: "Terms & Conditions", link: "https://www.myntra.com/termsofuse" },
            { label: "Track Orders", link: "https://www.ajio.com/selfcare/orders" },
            { label: "Shipping", link: "https://www.zara.com/in/en/legal-shipping-policy" },
            { label: "Returns", link: "https://www.myntra.com/returns" },
            { label: "Privacy Policy", link: "https://www.ajio.com/help/privacypolicy" },
            { label: "Grievance Redressal", link: "https://www2.hm.com/en_in/customer-service/legal-and-privacy.html" },
          ].map((item) => (
            <Typography key={item.label} variant="body2" sx={{ mb: 1 }}>
              <Link href={item.link} target="_blank" underline="hover" color="inherit">
                {item.label}
              </Link>
            </Typography>
          ))}
        </Grid>

        {/* ABOUT FASHION */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
            ABOUT FASHION
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            At <strong>Fashion</strong>, we believe style is more than clothing — it’s self-expression.
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Discover the latest trends in men’s, women’s, and kids’ wear from global brands like H&M, Zara, and more.
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            From everyday essentials to luxury collections, we bring authentic fashion directly to your doorstep.
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            100% genuine products • Easy returns • Fast delivery.
          </Typography>
        </Grid>
      </Grid>

      <Divider sx={{ my: 3 }} />

      {/* COPYRIGHT */}
      <Typography variant="body2" align="center" sx={{ mt: 2 }}>
        © 2025 www.fashion.com. All rights reserved.
      </Typography>
      <Typography variant="body2" align="center">
        Fashion – Redefining style, one outfit at a time.
      </Typography>
    </Box>
  );
}

export default Footer;
