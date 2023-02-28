const router = require("express").Router();

const {
    getAllVideogames,
    getFilteredVideogames,getVideogameID
} = require("../controllers/videogames.controllers");

router.get("/", getAllVideogames);
router.get("/filter", getFilteredVideogames);
router.get("/search/:id", getVideogameID);









module.exports = router;
