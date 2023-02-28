const mongoose = require("mongoose");

const VideogameSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  cover: { type: String, required: true },
  company: { type: String, required: true },
},
{ timestamps:true }
);


const Videogame = mongoose.model("videogames", VideogameSchema);

module.exports = Videogame;
