const fs = require("fs");
const express = require("express");
const app = express();
const http = require("http").createServer(app).listen(8080);
const mongoConfig = require("./template/serverJS/mongoConfig.js");

app.set("view engine", "ejs");
app.use("/bootstrap", express.static(`${__dirname}/node_modules/bootstrap/dist`));
app.use("/jquery", express.static(`${__dirname}/node_modules/jquery/dist`));
app.use("/favicon", express.static(`${__dirname}/node_modules/font-awesome`));
app.use("/vue", express.static(`${__dirname}/node_modules/vue/dist`));
app.use("/static", express.static(`${__dirname}/template`));

app.get("/", (req, res) => {
    mongoConfig.connectBD().then((data) => {
        // Выбираем коллекцию из базы
        let collection = data.collection("news").find({title: {$exists: true}}, {_id: 0});
        
        // Составляем массив и посылаем клиенту
        mongoConfig.collectionInArr(collection).then((data) => {
            res.render(`${__dirname}/template/pages/main`, {
                allNews: data
            });
        });
    });
}); 