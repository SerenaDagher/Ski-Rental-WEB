const express = require('express');
const router = express.Router();
const Ski = require('../../models/ski');

router.get("/api/skis/search", async (req, res) => {
    const query = req.query.q; // Get the search query from the request
  
    if (!query) {
      return res.status(400).json({ error: "Search query is required" });
    }
  
    try {
      // Perform search using regex to allow partial matches
      const results = await Ski.find({
        $or: [
          { name: { $regex: query, $options: "i" } },
          { brand: { $regex: query, $options: "i" } },
          { type: { $regex: query, $options: "i" } },
          { description: { $regex: query, $options: "i" } },
        ],
      });
  
      res.json(results);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "An error occurred while searching." });
    }
  });

  module.exports = router;