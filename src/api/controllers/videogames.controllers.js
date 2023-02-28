const Videogame = require("../models/videogames.models");

const getAllVideogames = async (req, res) => {

  try {
    const allVideogames = await Videogame.find();

    if (!allVideogames) {
      return res.json({
        status: 404,
        message: "videogame not found",
      });
    }
    return res.json({
      videogames: allVideogames,
    });
  } catch (error) {
    return res.json({ message: "error", error: error });
  }
};

const getFilteredVideogames = async (req, res) => {
  try {
    // console.log(req.query);
    const { name } = req.query;
    // console.log(name);
    const allVideogames = await Videogame.find();
    let filteredVideogameList = [...allVideogames];

    if (name) {
      filteredVideogameList = filteredVideogameList.filter((videogame) =>
        videogame.title.toLowerCase().match(name.toLocaleLowerCase())
      );
    }

    if (!filteredVideogameList) {
      return res.json({
        status: 404,
        message: "videogame not found",
      });
    }
    return res.json({
      videogames: filteredVideogameList,
    });
  } catch (error) {
    return res.json({ message: "error", error: error });
  }
};

const getVideogameID = async (req, res) => {

    try {
        // const id = req.params.id
        const { id } = req.params;

        const videogameId = await Videogame.findById(id)
         
        if (!videogameId) {

            return res.status(404).send("Videogame not found");
            
        }
        return res.json({
            videogame: videogameId
        })

    } catch (error) {
        return res.json({message: "Error", error:error})

    }
}

module.exports = { getAllVideogames, getFilteredVideogames, getVideogameID };
