// Инициация mongoDB
const mongoClient = require("mongodb").MongoClient;
const assert = require('assert');

// Параметры под mongo
let url = "mongodb://localhost:27017";
let client = new mongoClient(url);
let dbName = "catblog";

// Подключение к БД
let connectDB = () => {
    return new Promise((resolve, reject) => {
        client.connect(err => {
            return resolve(client.db(dbName));
        });
    });
};

// Составляем массив из коллекции MongoDB
collectionInArr = (collection) => {
    return new Promise((resolve, reject) => {
        let allNews = [];
        
        collection.forEach((item) => {
            allNews.push(item);
        }, (end) => {
            if (end === null) { resolve(allNews); }
            else { console.log(`Error: ${end}`); }
        });
        
    });
};

module.exports.connectBD = connectDB;
module.exports.collectionInArr = collectionInArr;




//client.connect(err => {
//    assert.equal(null, err);
//    let db = client.db(dbName);
//    let collection = db.collection("news").find({title: {$exists: true}}, {_id: 0});
//    
//    let allNews = [];
//    collection.forEach((item) => {
//        allNews.push(item);
//    }, ()=> {
//        console.log("Good");
//    });
//    
//    // Импортируем полученную db в главный модуль
//    module.exports.allNews = allNews;
//    client.close();
//});