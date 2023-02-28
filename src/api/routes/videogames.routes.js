const router = require("express").Router();

const {
    getAllVideogames
} = require("../controllers/videogames.controllers");

router.get("/", getAllVideogames);


module.exports = router;
