const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const DB_URL = process.env.MONGO_DB;


const connect = async () => {
    try {
        mongoose.set("strictQuery", true);
        const db = await mongoose.connect(DB_URL);

        const { name, host } = db.connection;
        console.log(`Connected to DB: ${name} in host ${host}`);
        
    } catch (error) {
        console.log("Error connecting with the DB", error);
    }
}

module.exports = { connect }