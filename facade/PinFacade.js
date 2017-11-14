require("../models/Locations");
const mongoose = require("mongoose");
var Location = mongoose.model("location");
   
function pin(name, txt, cords) {
  Location.insertMany({ userName: name, text: txt, loc: { type: "Point", coordinates: cords }});
}

function findPins(callback){
  let query = Location.find()
  query.exec(function (err, docs) {
    callback(err,docs);
  })
}

exports.findPins = findPins;
exports.pin = pin;
