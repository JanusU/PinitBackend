require("../models/Locations");
const mongoose = require("mongoose");
var Location = mongoose.model("location");
   
function pin(name, txt, cords) {
  console.log("pin");
  let inserts = [
    { userName: name, text: txt, loc: { type: "Point", coordinates: cords }}
  ]
  Location.insertMany(inserts, function (err, d) {
    if (err) {
      console.log("UPPS: ", err);
    }
    console.log("Inserted :" + d);
    mongoose.connection.close();
  })
}

function findPins(callback){
  let query = Location.find({
    loc:
    {
      $near:{
        $geometry: {
          type: "Point",
          coordinates: user.loc.coordinates
        },
        $maxDistance: 10000
      }
    }
  }, { _id: 0, created: 0, __v: 0 })
  query.exec(function (err, docs) {
    callback(err,docs);
  })
}

exports.findPins = findPins;
exports.pin = pin;
