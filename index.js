const express = require("express");
const app = express();
const mainRoutes = require("./routes/main");
const dbInit = require("./dbInit");
const PORT = process.env.PORT || 5000;

app.use(express.static(__dirname + "/public"));
app.use("", mainRoutes);


app.listen(PORT, console.log("Server started"));