const express = require('express');
const categoryRoutes = express.Router();
const { prisma } = require("../config/prisma");

//get all category
categoryRoutes.get("/", async(req, res) => {
    const category = await prisma.category.findMany();
    res.status(200).send(category);
});

//get category by id
categoryRoutes.get("/:id", async (req, res) => {
    const category = await prisma.category.findUnique({
        where: {
            id: parseInt(req.params.id),
        },
    });
    if (!category) res.status(404).send("Category not Found");
    else res.status(200).send(category);
});
module.exports = { categoryRoutes };