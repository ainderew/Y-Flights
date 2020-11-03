const { response } = require("express");
const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

router.get("/CheapTickets", async (req, res) => {
  await fetch(`http://www.travelpayouts.com/whereami?locale=en&callback=&ip=`, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "Application/json",
    },
  })
    .then(response => response.json())
    .then(data => {
      fetch(
        `https://api.travelpayouts.com/v1/prices/cheap?origin=${data.iata}&destination=SGP&depart_date=&return_date=&token=${process.env.TRAVEL_PAYOUTS_API_TOKEN}`,
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
    });
});

// MONTHLY PRICES = = = = = = = = = = =

router.get("/MonthPrices", async (req, res) => {
  
  await fetch(
    "https://api.travelpayouts.com/v2/prices/month-matrix?currency=usd&origin=MOW&destination=VOG&show_to_affiliates=true&token=bc3e586d4ac8295cde912de926fa9a5e",
    {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "Application/json",
      },
    }
  )
  .then(response => response.json())
  .then(data => res.json(data))
});

module.exports = router;
