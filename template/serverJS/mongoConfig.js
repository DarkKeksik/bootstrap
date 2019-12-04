// Инициация mongoDB
const mongoClient = require("mongodb").MongoClient;
const assert = require('assert');

// Параметры под mongo
let url = "mongodb://localhost:27017";
let client = new mongoClient(url);
let dbName = "catblog";

// Подключение к БД
client.connect(err => {
    assert.equal(null, err);
    let db = client.db(dbName);
    let collection = db.collection("news").find({title: {$exists: true}}, {_id: 0});
    
    let allNews = [];
    collection.each((err, item)=>{
        if (item !== null) {
            allNews.push(item);
        };
    });
    
    // Импортируем полученную db в главный модуль
    module.exports.allNews = allNews;
    client.close();
});