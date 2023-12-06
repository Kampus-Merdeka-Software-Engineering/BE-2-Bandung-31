require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { beritaRoutes } = require("./routes/berita.routes");
const { categoryRoutes } = require("./routes/category.routes");
const { contactRoutes } = require("./routes/contact.routes");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true}));


app.get("/", async(req, res) => {
    res.send("here is the response");
});

// berita Routes
app.use("/beritas", beritaRoutes);
// end  berita routes

// category Routes
app.use("/categorys", categoryRoutes);
// end  category routes

// contact Routes
app.use("/contacts", contactRoutes);
// end  contact routes

app.all("*", async(req, res) => {
    res.json({
        message: "Routes you're looking is not found",
    });
});


app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is already running at ${PORT}`);
});