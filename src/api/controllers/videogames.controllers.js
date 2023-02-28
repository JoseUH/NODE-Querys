const Videogame = require("../models/videogames.models");

const getAllVideogames = async (req, res) => {
 
   
  
    try { 
        // console.log(req.query);
        const { name } = req.query;
        // console.log(name);
         const allVideogames = await Videogame.find();
         let filteredVideogameList = [...allVideogames]

         if (name) {
            filteredVideogameList = filteredVideogameList.filter((videogame)=>videogame.title.toLowerCase().match(name.toLocaleLowerCase()));
         }

         if (!filteredVideogameList) {
             return res.json({
                status: 404,
                message: "videogame not found"
             })
         }
         return res.json({
            videogames: filteredVideogameList
         })


    } catch (error) {
        return res.json({message: "error", error: error})
    }
}


module.exports = { getAllVideogames };