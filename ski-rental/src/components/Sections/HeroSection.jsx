import React from "react";
import { Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const HeroSection = ({ onClick }) => {
  const theme = useTheme();

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        backgroundImage:
          "url('https://us.images.westend61.de/0001349832pw/a-man-with-ski-gear-and-mountains-and-water-behind-CAVF77790.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "5%",
          transform: "translateY(-50%)",
          color: "white",
          textAlign: "left",
          fontSize: "3rem",
          textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)",
          zIndex: 2,
        }}
      >
        <h1>Skip the queue!</h1>
        <p>Be the first on the slopes and fully equipped</p>
        <Button
          onClick={onClick}
          variant="outlined"
          size="large"
          sx={{
            color: theme.palette.common.white,
            borderColor: theme.palette.common.white,
            "&:hover": {
              backgroundColor: theme.palette.common.white,
              color: theme.palette.primary.main,
              borderColor: theme.palette.primary.main,
            },
          }}
        >
          Rent Now
        </Button>
      </div>
      <img
        src="/mountain.svg"
        alt="Mountain"
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "80%",
          marginBottom: "-190px",
          zIndex: 2,
        }}
      />
    </div>
  );
};

export default HeroSection;
