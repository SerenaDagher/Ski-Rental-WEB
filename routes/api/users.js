const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models/user"); 
const router = express.Router();


router.post("/signup", async (req, res) => {
    const { username, email, password } = req.body;

    try {
        if (!username || !email || !password) {
            return res.status(400).json({ status: "error", message: "All fields are required." });
        }
       
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ status: "error", message: "Email already registered"});

        
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ status: "success", message: "User created successfully", user:newUser  });
    } catch (error) {
        res.status(500).json({ status: "error", message: "Server error", error: error.message });
    }
});


router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        if (!email || !password) {
            return res.status(400).json({ status: "error", message: "All fields are required." });
        }
        
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ status: "error",message: "User not found" });

       
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) return res.status(401).json({ status: "error", message: "Invalid credentials" });

        
        const token = jwt.sign({ id: user._id }, "your_jwt_secret_key", { expiresIn: "1h" });

        res.status(200).json({status: "success", message: "Login successful", user:user, token });
    } catch (error) {
        res.status(500).json({status: "error", message: "Server error", error });
    }
});

fetch("http://localhost:8082/api/users/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: "user@example.com", password: "password123" }),
})
    .then((response) => response.json())
    .then((data) => {
        if (data.status === "success") {
            localStorage.setItem("user", JSON.stringify(data.user)); 
            localStorage.setItem("token", data.token); 
            console.log("Login successful:", data.user);
        } else {
            // console.error("Login failed:", data.message);
        }
    });

module.exports = router;
