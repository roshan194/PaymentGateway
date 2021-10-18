const express = require("express");
const ejs = require("ejs");
const app = express();
app.set('view engine', 'ejs');

app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/donate", (req, res) => {
    res.render("donate");
});

app.get("/contact", (req, res) => {
    res.render("contact");
});


app.listen(process.env.PORT || 3000, (req, res) => {
    console.log("server has started");
});