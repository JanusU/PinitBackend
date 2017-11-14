const express = require('express');
const app = express();
const PORT = 3000;
var pin = require("./facade/PinFacade").pin;
var findPins = require("./facade/PinFacade").findPins;




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
