const express = require("express");
const router = express.Router();
const path = require('path');
const { getAllCollections, getList, addCollection, removeCollection } = require("./../dbInit");

router.get("/", (req, res) => {
    res.sendFile(path.resolve("public/index.html"));
});
router.get("/ajax/collections/", async (req, res) => {
    data = await getAllCollections();
    await res.json(data);
});
router.get("/ajax/add_collection/:name", async (req, res) => {
    addCollection(req.params.name);
    await res.json({value: "Successfully"});
});
router.get("/ajax/remove_collection/:id", async (req, res) => {
    removeCollection(req.params.id);
    await res.json({value: "Successfully"});
});

module.exports = router;