const fs = require("fs");
const express = require("express");
const app = express();
const http = require("http").createServer(app).listen(8080);
const mongoDB_news = require("./template/serverJS/mongoConfig.js");

app.set("view engine", "ejs");
app.use("/bootstrap", express.static(`${__dirname}/node_modules/bootstrap/dist`));
app.use("/jquery", express.static(`${__dirname}/node_modules/jquery/dist`));
app.use("/favicon", express.static(`${__dirname}/node_modules/font-awesome`));
app.use("/static", express.static(`${__dirname}/template`));

app.get("/", (req, res) => {
    res.render(`${__dirname}/template/pages/main`, {
        allNews: mongoDB_news
    });
});

