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

app.get("/", (req, res) => {
    // Зпорос на уже имеющихся ботов
    res.render("index");
});

app.post("/", (res, req) => {
    // Создание нового бота по введенным данным
    res.redirect("index");
})

app.delete("/:id", (req, res) => {
    // Запрос на удаление бота по id
    res.redirect("index");
})

app.put("/:id", (req, res) => {
    // Запрос на измсенение данных бота с новыми данными
    res.redirect("index")
})

app.get("/:id", (req, res) => {
    // Тут мы выводим старничку с обучени
})

app.get("/bot:id", (req, res) => {
    res.render("/views/layouts/BotTraining.ejs");
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
