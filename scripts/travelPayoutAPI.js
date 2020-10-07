const endpointURL = "https://y-flights.herokuapp.com/TravelPayouts/CheapTickets"



const cheapTickets = async () => {
  await fetch(
    `${endpointURL}`,
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