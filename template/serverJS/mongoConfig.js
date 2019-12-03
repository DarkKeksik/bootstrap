// Инициация mongoDB
const mongoClient = require("mongodb").MongoClient,
      assert = require('assert');

// Параметры под mongo
let url = "mongodb://localhost:27017",
    client = new mongoClient(url),
    dbName = "catblog";

// Подключение к БД
client.connect(err => {
    let db = client.db(dbName),
        collection = db.collection("news");
    
    // Импортируем в главный модуль
    console.log(db);
    console.log("################################################################");
    module.exports.dbResult = db;
    client.close();
});