
const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hello World from Express.js!");
});

app.get("/api/currency", (req, res) => {
    res.json({
        USD: 1500,
        EUR: 1600,
        GBP: 1900
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
