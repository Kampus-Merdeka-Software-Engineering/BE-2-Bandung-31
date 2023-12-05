const express = require('express');
const contactRoutes = express.Router();
const { prisma } = require("../config/prisma");

//get all contact
contactRoutes.get("/", async (req, res) => {
    const contact = await prisma.contact.findMany();
    res.status(200).send(contact);
});

// create new contact
contactRoutes.post("/", async (req, res) => {
    const { name, email, feedback } = req.body;
    const newcontact = await prisma.contact.create({
        data: {
            name: name,
            email: email,
            feedback: feedback,
        },
    });
    res.status(201).json({
        contact: "contact created",
        data: newcontact,
    });
});

module.exports = { contactRoutes };