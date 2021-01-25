const express = require("express");

const app = express();

const PORT = process.env || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));

app.listen(PORT, () => {
    console.log("Server is running on http://localhost:" + PORT);
});