require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));


app.get("/", async(req, res) => {
    res.send("here is the response");
});

app.all("*", async(req, res) => {
    res.json({
        message: "Routes you're looking is not found",
    });
});


app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is already running at ${PORT}`);
});