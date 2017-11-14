const express = require('express');
const app = express();
const PORT = 3000;
var pin = require("./facade/PinFacade").pin;
var findPins = require("./facade/PinFacade").findPins;
var bodyParser = require('body-parser')

app.use(bodyParser.json());




app.get('/', function (req, res) {
  //recieve JSON with markers/pins
  console.log("get");
  findPins(function(response){
    console.log(response);
    res.send(JSON.stringify(response,null,""));
  });
})

app.listen(PORT, function () {
  console.log(`Pin Server started at ${PORT}`);
})

app.post('/pin', function(req, res){
  //let json = JSON.parse(req.body);
  //pin(json.userName, json.text, json.coordinates);
  console.log(req.body);
  pin(req.body.userName, req.body.text, req.body.coordinates);
})
