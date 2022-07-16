const express = require("express")
const mongoose = require("mongoose");
const dotenv = require("dotenv"); 
dotenv.config();
const cors = require("cors");
const User = require("./models/user")
const Note = require("./models/note")

const app = express() 

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());

app.get("/" , (req ,res) => {
    res.send("HELLO")
})



app.listen(4000 , ()=>{
    console.log("Running on port")
})

