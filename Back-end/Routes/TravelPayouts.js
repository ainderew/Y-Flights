const express = require("express")
const router = express.Router();
const fetch = require('node-fetch');


router.get("/CheapTickets", async (req,res) =>{
    await fetch(
        `https://api.travelpayouts.com/v1/prices/cheap?origin=MOW&destination=HKT&depart_date=&return_date=&token=${process.env.TRAVEL_PAYOUTS_API_TOKEN}`,
        {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-type": "Application/json",
          },
        }
      )
        .then(response => response.json())
        .then(data => res.json(data));
    
})

module.exports = router