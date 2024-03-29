const express = require("express");
const axios = require("axios");
const path = require("path");
const ejsMate = require("ejs-mate");
const methodOverride = require("method-override");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.engine("ejs", ejsMate);
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "views")));
app.use(methodOverride("_method"));
// Чтобы ошибок не было оставил одного бота

app.get("/", (req, res) => {
    let bots = [{
        name: "Бот-1",
        id: "1",
        token: "1902183901877623683180749819374796"
    }]
    res.render("index", { bots });
});

app.get("/learning/:botId", (req, res) => {
    const bot = {
        name: "Бот-1",
        id: "1",
        token: "1902183901877623683180749819374796"
    }
    res.render("layouts/learning", { bot });
});



// axios
//     .get("http://localhost:8080/api/v1/person/")
//     .then((response) => {
//         console.log(response);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

app.listen(3000, () => {
    console.log("Listening оn port 3000");
});