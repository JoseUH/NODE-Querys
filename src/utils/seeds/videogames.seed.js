const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const DB_URL = process.env.MONGO_DB;

const Videogame = require("../../api/models/videogames.models")

const videogames = [
    {
        "title": "Spiderman: Entre los muertos",
        "author": "Mark Millar",
        "cover": "https://m.media-amazon.com/images/I/513-GlD0oWL.jpg",
        "company": "Marvel",
        
      },
      {
        "title": "Joker",
        "author": "Azarello",
        "cover": "https://images-na.ssl-images-amazon.com/images/I/814szaQEMxL.jpg",
        "company": "DC",
        
      },
      {
        "title": "Guardianes de la Galaxia",
        "author": "Bendis",
        "cover": "https://www.cinemascomics.com/wp-content/uploads/2018/11/guardianes-de-la-galaxia-vengadores-del-manana-portada.jpg",
        "company": "Marvel",
        
      },
      {
        "title": "Batman: The Long Halloween",
        "author": "Joseph Loeb",
        "cover": "https://images-na.ssl-images-amazon.com/images/I/91D+7bVSo0L.jpg",
        "company": "DC",
        
      },
];

mongoose.set("strictQuery", true);

mongoose.connect(DB_URL)
.then(async () => {
    const videogames = await Videogame.find();
    if (videogames.length) {
        await Videogame.collection.drop();
        console.log("Videogames DB deleted");
    }
})
.catch((error)=> console.log("error deleting videogames", error))
.then(async () =>{
    await Videogame.insertMany(videogames);
    console.log("Videogames DB created")
} ) 
.catch((error) => console.log("Error creating videogames", error))
.finally(() => mongoose.disconnect())