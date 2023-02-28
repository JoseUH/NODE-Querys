const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");


const videogamesRouter = require("./src/api/routes/videogames.routes")

const server = express();

const {connect} = require("./src/utils/db");
connect()

const PORT = process.env.PORT || 5000

server.use(cors({
    origin:"*",
    credentials:true
}))

server.use("/videogames", videogamesRouter)

server.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
})