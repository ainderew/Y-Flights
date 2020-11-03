const endpointURL = "https://y-flights.herokuapp.com/TravelPayouts/CheapTickets"

const CALENDAR = "https://y-flights.herokuapp.com/TravelPayouts/MonthPrices"


const cheapTickets = async () => {
  await fetch(
    `${CALENDAR}`,
    {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-type": "Application/json",
      },
    }
  )
    .then(response => response.json())
    .then(data => console.log(data));
};


cheapTickets()


// bc3e586d4ac8295cde912de926fa9a5e
