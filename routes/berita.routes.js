const express = require('express');
const beritaRoutes = express.Router();
const { prisma } = require("../config/prisma");

//get all berita
beritaRoutes.get("/", async(req, res) => {
    const berita = await prisma.berita.findMany({
        include: {
           Category: true,
        },
    });
    res.status(200).send(berita);
});

//create new berita
beritaRoutes.post("/", async (req, res) => {
    const newBerita = await prisma.berita.create({
        data: {
            judul: req.body.judul,
            headline: req.body.headline,
            isi: req.body.isi,
            penulis: req.body.penulis,
            imageUrl: req.body.imageUrl,
            categoryId: parseInt(req.body.categoryId),
        },
    });
    res.status(201).json({
        message: "Berita created",
        data: newBerita,
    });
});

//get berita by id
beritaRoutes.get("/:id", async (req, res) => {
    const { id } = req.params;
    const berita = await prisma.berita.findMany({
        where: {
            id: parseInt(id),
        },
    });
    res.status(200).send(berita);
});


//get berita by id category
beritaRoutes.get("/:categoryId", async (req, res) => {
    const { categoryId } = req.params;
    const berita = await prisma.berita.findMany({
        where: {
            categoryId: parseInt(categoryId),
        },
    });
    res.status(200).send(berita);
});


module.exports = { beritaRoutes };