import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

const SkiRecommendationForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const [skillLevel, setSkillLevel] = useState("");

  const handleSkillLevelChange = (event) => {
    setSkillLevel(event.target.value);
  };

  const [shoeSize, setShoeSize] = useState("");

  const handleShoeSize = (event) => {
    setShoeSize(event.target.value);
  };

  const onSubmit = (data) => {
    console.log(data);
    // Send data to your backend or process recommendations
  };

  return (
    <Grid container spacing={2} sx={{ padding: 2 }}>
      {/* Form Column */}
      <Grid item xs={12} md={4}>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            p: 2,
            border: "1px solid #ddd",
            borderRadius: "8px",
            boxShadow: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: "100%",
          }}
        >
          <Typography variant="h6">Find Your Match</Typography>

          {/* Height and Weight */}
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                type="number"
                label="Height (cm)"
                variant="outlined"
                fullWidth
                {...register("height", { required: "Height is required", min: 50, max: 250 })}
                error={!!errors.height}
                helperText={errors.height?.message}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                type="number"
                label="Weight (kg)"
                variant="outlined"
                fullWidth
                {...register("weight", { required: "Weight is required", min: 10, max: 200 })}
                error={!!errors.weight}
                helperText={errors.weight?.message}
              />
            </Grid>
          </Grid>

          {/* Shoe Size and Skill Level */}
          <Grid container spacing={2}>
            {/* Ski Level */}
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel>Skill Level</InputLabel>
                <Select
                  labelId="skill-level-select-label"
                  id="skill-level-select"
                  value={skillLevel}
                  label="Skill Level"
                  onChange={handleSkillLevelChange}
                >
                  <MenuItem value={"beginner"}>Beginner</MenuItem>
                  <MenuItem value={"intermediate"}>Intermediate</MenuItem>
                  <MenuItem value={"advanced"}>Advanced</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* Shoe Size */}
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel>Shoe Size</InputLabel>
                <Select
                  labelId="shoe-size-select-label"
                  id="shoe-size-select"
                  value={shoeSize}
                  label="Shoe Size"
                  onChange={handleShoeSize}
                >
                  <MenuItem value={"small"}>Small</MenuItem>
                  <MenuItem value={"medium"}>Medium</MenuItem>
                  <MenuItem value={"large"}>Large</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>


          {/* Budget */}
          <Typography variant="h6">Budget Range (USD)</Typography>
          <Slider
            {...register("budget")}
            defaultValue={100}
            step={50}
            min={100}
            max={2000}
            valueLabelDisplay="auto"
          />
          <Typography>Selected Budget: {watch("budget") || 100} USD</Typography>

          {/* Submit Button */}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
          >
            Find My Ski
          </Button>
        </Box>
      </Grid>

      {/* Placeholder for Content on the Right */}
      <Grid item xs={12} md={8}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            border: "1px dashed #ccc",
          }}
        >
          <Typography variant="body1" color="text.secondary">
            Add additional content or images here.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SkiRecommendationForm;
