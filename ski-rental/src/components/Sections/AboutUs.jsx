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
        fontWeight="bold"
        sx={{
          marginBottom: "30px",
          marginTop: "130px",
          fontSize: { xs: "24px", sm: "28px", md: "32px" },
          textAlign: "center", 
        }}
      >
        About Us
      </Typography>
      <Box
        sx={{
          backgroundColor: theme.palette.primary.main,
          width: { xs: "100%", sm: "80%", md: "70%", lg: "60%" }, 
          maxWidth: "1150px", 
          margin: "0 auto", 
          padding: { xs: "10px", sm: "30px", md: "40px" }, 
          borderRadius: "50px",
          marginBottom: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", 
        }}
      >

        <Typography
          variant="body1"
          sx={{
            color: "white",
            marginBottom: "10px",
            fontSize: { xs: "14px", sm: "16px", md: "18px" }, 
            lineHeight: { xs: "1.5", sm: "1.6", md: "1.8" }, 
          }}
        >
          Skip the hassle and hit the slopes fully equipped with Rent the Slope!
          Our platform is your ultimate destination for renting high-quality ski
          and snowboard gear, designed to get you on the mountain faster and
          without the stress. Whether you're a seasoned pro or a first-time
          skier, we make it easy to find the perfect equipment for your adventure.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "white",
            marginBottom: "10px",
            fontSize: { xs: "12px", sm: "16px", md: "18px" },
            lineHeight: { xs: "1.5", sm: "1.6", md: "1.8" },
          }}
        >
          No more long lines or expensive purchases—just rent, ski, and repeat.
          With Rent the Slope, you’re always ready for your next winter adventure,
          equipped with the gear you need to make every moment on the slopes
          unforgettable!
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "white",
            fontSize: { xs: "14px", sm: "16px", md: "18px" },
            lineHeight: { xs: "1.5", sm: "1.6", md: "1.8" },
          }}
        >
          Driven by our passion for skiing, we created this platform to simplify
          the rental process, making it easier, faster, and more affordable for
          everyone who loves the mountains as much as we do.
        </Typography>
      </Box>
    </div>
  );
});

export default AboutUs;
