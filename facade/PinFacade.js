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

function findPins(res){
  Location.find((err, docs) => {  
    if (err) {
        // Note that this error doesn't mean nothing was found
        res.send(err)
    } else {
        // send the list of all docs
        res.send(docs);
    }
});
}

exports.findPins = findPins;
exports.pin = pin;
