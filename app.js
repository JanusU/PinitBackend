require("./models/Locations");
const express = require('express');
const app = express();
const PORT = 3000;
const mongoose = require("mongoose");
Location = mongoose.model("location");



app.get('/', function (req, res) {
  //recieve JSON with markers/pins
  findPins(function(response){
    res.send(JSON.stringify(response,null,""));
  });
})

app.listen(PORT, function () {
  console.log(`Pin Server started at ${PORT}`);
})

app.post('/pin', function(req, res){
  let json = JSON.parse(req.body);
  pin(json.userName, json.text, json.coordinates);
})


function pin(name, txt, cords) {
  Location.insertOne({ userName: name, text: txt, loc: { type: "Point", coordinates: cords }});
}

function findPins(callback){
  let query = Location.find()
  query.exec(function (err, docs) {
    callback(err,docs);
  })
}
