const express = require("express");
const app = express();
const mainRoutes = require("./routes/main");
const PORT = process.env.PORT || 5000;
const path = require('path');
const { getAllCollections, getList, addCollection, removeCollection } = require("./dbInit");

app.use(express.static(__dirname + "/public"));



app.get("/", (req, res) => {
    res.sendFile("public/index.html");
});
app.get("/ajax/collections/", async (req, res) => {
    data = await getAllCollections();
    await res.json(data);
});
app.get("/ajax/add_collection/:name", async (req, res) => {
    addCollection(req.params.name);
    await res.json({value: "Successfully"});
});
app.get("/ajax/remove_collection/:id", async (req, res) => {
    removeCollection(req.params.id);
    await res.json({value: "Successfully"});
});


app.listen(PORT, console.log("Server started"));