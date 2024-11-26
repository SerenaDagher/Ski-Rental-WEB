import React from "react";
import RentalCard from "./RentalCard";
import { Container, Grid } from "@mui/material";

function RentalList() {
  return (
    <Container sx={{ marginTop: "20px", maxWidth: "100%" }}>
      <Grid container spacing={4}>
        {/* Card 1 */}
        <Grid item xs={12} sm={6} md={4}>
          <RentalCard
            image="https://via.placeholder.com/300x200?text=Ski+Set+1"
            title="Premium Ski Set"
            description="High-quality skis suitable for all skill levels."
            price="45"
          />
        </Grid>

        {/* Card 2 */}
        <Grid item xs={12} sm={6} md={4}>
          <RentalCard
            image="https://via.placeholder.com/300x200?text=Ski+Set+2"
            title="Basic Ski Set"
            description="Affordable ski set ideal for beginners."
            price="30"
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default RentalList;
