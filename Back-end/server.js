const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

// START =============================================================================================================
const PORT = process.env.PORT || 5000;

app.use(cors());

app.listen(PORT, () => {
  console.log(`using port: ${PORT}`);
});

//CONNECT TO MONGODB ATLAS
mongoose.connect(
  `mongodb+srv://${process.env.MONGODB_USERNAME}:<${process.env.MONGODB_PASSWORD}>@yflights.hs835.mongodb.net/<YFlights>?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to DB");
  }
);


app.get("/", (req,res) => {
    res.send("SERVER WORKING")
})