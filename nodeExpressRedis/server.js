//server.js
var express = require('express');
var mongo = require('mongodb');
var app = express();
var redis = require('redis');
var RedisClient = redis.createClient()
var MongoClient = require('mongodb').MongoClient;
var dbo;

//LIST
app.get('/list', function (req, res) {
  res.header('Access-Control-Allow-Origin', '*');

  RedisClient.get("cacheList", function (err, data) {

    if (data === null) { //data is null if the key doesn't exist
      var query = { $and: [{ Name: /a/ }, { "Surname": { $exists: true } }] };
      var show = { projection: { _id: 0, Name: 1, Surname: 1 } };
      var sort = { Name: 1, Surname: 1 };

      dbo.collection("MyCollection").find(query, show).sort(sort).toArray((err, result) => {
        if (err) {
          res.send({ 'error': err });
        } else {
          output = JSON.stringify(result);
          RedisClient.set("cacheList", output);
          RedisClient.expire("cacheList", 10); //10 sec
          console.log("set cache");
          res.end(output);
        }
      });
    } else {
      console.log("cache");
      res.end(data);
    }
  });
});

// DEL CACHE
app.get('/del', function (req, res) {
  RedisClient.del("cacheList");
  res.end("del cacheList: OK")
});


//RUN 
RedisClient.on('connect', function () { //redis OK
  MongoClient.connect("mongodb://localhost:27017/", (err, client) => {    //mongo OK
    dbo = client.db('MyDb')
    if (err) throw err;
    app.listen(8080, () => {
      console.log("listening at http://localhost:8080");
    });
  })
});