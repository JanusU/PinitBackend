const express = require('express');
const app = express();
const PORT = 3000;
const facade = require("./facade/PinFacade");



app.get('/', function (req, res) {
  //recieve JSON with markers/pins
  facade.findPinsMethod(function(response){
    res.send(JSON.stringify(response,null,""));
  });
})

app.listen(PORT, function () {
  console.log(`Pin Server started at ${PORT}`);
})

app.post('/pin', function(req, res){
  let json = JSON.parse(req.body);
  facade.pinMethod(json.userName, json.text, json.coordinates);
})


