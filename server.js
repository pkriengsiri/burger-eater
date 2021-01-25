const express = require("express");

const app = express();

const PORT = process.env.PORT || 8080;



app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/burger_controllers");

app.use(routes);

app.listen(PORT, function () {
    console.log("Server is running on http://localhost:" + PORT);
});

