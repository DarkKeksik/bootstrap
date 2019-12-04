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
    let collection = db.collection("news");
    
    // Импортируем в главный модуль
    module.exports.dbResult = db;
    client.close();
});