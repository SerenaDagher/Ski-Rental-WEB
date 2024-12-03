const express = require("express");
const connectDB = require("./config/db");
const skiRoutes = require("./routes/api/skis");
const snowboardRoutes = require("./routes/api/snowboards")
const skiBootsRoutes = require("./routes/api/skiBoots")
const snowboardBootRoutes = require("./routes/api/snowboardBoots")
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/api/users");
const app = express();
const bcrypt = require('bcryptjs');
const rentalRoutes = require("./routes/api/rentalRoute"); 

app.use(cors({ origin: true, credentials: true }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use("/api/skis", skiRoutes);
app.use("/api/users", userRoutes);
app.use("/api/snowboards", snowboardRoutes);
app.use("/api/skiBoots",skiBootsRoutes);
app.use("/api/snowboardBoots",snowboardBootRoutes);
app.use("/api/rentals", rentalRoutes);

connectDB();

app.get("/", (req, res) => res.send("Hello world!"));
const port = process.env.PORT || 8082;
app.listen(port, () => console.log(`Server running on port ${port}`));