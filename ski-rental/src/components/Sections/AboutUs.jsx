import React from "react";
import { Typography, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const AboutUs = React.forwardRef((props, ref) => {
  const theme = useTheme();

  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "100px",
        padding: "80px 20px",
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Typography
        variant="h4"
        fontWeight={"bold"}
        sx={{ marginBottom: "30px", marginTop: "130px" }}
      >
        About Us
      </Typography>
      <Box
        sx={{
          backgroundColor: theme.palette.primary.main,
          maxWidth: "1150px",
          width: "100%",
          margin: "0 auto",
          padding: "40px",
          borderRadius: "50px",
          marginBottom: "20px",
        }}
      >
        <Typography variant="body1" sx={{ color: "white", marginBottom: "10px" }}>
          Skip the hassle and hit the slopes fully equipped with Rent the Slope!
          Our platform is your ultimate destination for renting high-quality ski
          and snowboard gear, designed to get you on the mountain faster and
          without the stress. Whether you're a seasoned pro or a first-time
          skier, we make it easy to find the perfect equipment for your adventure.
        </Typography>
        <Typography variant="body1" sx={{ color: "white" }}>
          No more long lines or expensive purchases—just rent, ski, and repeat.
          With Rent the Slope, you’re always ready for your next winter adventure,
          equipped with the gear you need to make every moment on the slopes
          unforgettable!
        </Typography>
        <Typography variant="body1" sx={{ color: "white" }}>
          Driven by our passion for skiing, we created this platform to simplify
          the rental process, making it easier, faster, and more affordable for
          everyone who loves the mountains as much as we do.
        </Typography>
      </Box>
    </div>
  );
});

export default AboutUs;
